// routes/payment.routes.js
const express = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto');
const axios = require('axios');
const { checkSchema, validationResult } = require('express-validator');

const router = express.Router();

// Initialize Razorpay (env vars required)
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,          // e.g., rzpk_test_xxx [web:7][web:10]
  key_secret: process.env.RAZORPAY_KEY_SECRET,  // e.g., xxxsecret [web:7][web:10]
});

// Validation schemas
const createOrderSchema = checkSchema(
  {
    name: {
      in: ['body'],
      exists: { errorMessage: 'name is required' },
      isString: { errorMessage: 'name must be a string' },
      trim: true,
      notEmpty: { errorMessage: 'name cannot be empty' },
      isLength: { options: { min: 2, max: 100 }, errorMessage: 'name must be 2-100 chars' },
      escape: true,
    },
    email: {
      in: ['body'],
      exists: { errorMessage: 'email is required' },
      isString: { errorMessage: 'email must be a string' },
      trim: true,
      notEmpty: { errorMessage: 'email cannot be empty' },
      isEmail: { errorMessage: 'invalid email' },
      normalizeEmail: true,
    },
    phone: {
      in: ['body'],
      exists: { errorMessage: 'phone is required' },
      isString: { errorMessage: 'phone must be a string' },
      trim: true,
      notEmpty: { errorMessage: 'phone cannot be empty' },
      // Basic India mobile validation; adjust to project needs
      isMobilePhone: { options: 'any', errorMessage: 'invalid phone' },
    },
    amount: {
      in: ['body'],
      exists: { errorMessage: 'amount is required' },
      // Accept string or number, but must parse to a number
      custom: {
        options: (value) => {
          const num = typeof value === 'string' ? Number(value) : value;
          return Number.isFinite(num);
        },
        errorMessage: 'amount must be numeric',
      },
      customSanitizer: {
        options: (value) => {
          // Keep original as string if provided, but also return normalized numeric string
          // Coerce to trimmed string to avoid spaces
          return typeof value === 'string' ? value.trim() : value;
        },
      },
      // Enforce minimum 1 INR; Razorpay requires an integer in paise later
      custom: {
        options: (value) => {
          const num = Number(value);
          return Number.isFinite(num) && num >= 1;
        },
        errorMessage: 'amount must be at least 1',
      },
    },
  },
  ['body']
); // express-validator schema usage [web:2][web:4][web:5]

const verifyPaymentSchema = checkSchema(
  {
    orderId: {
      in: ['body'],
      exists: { errorMessage: 'orderId is required' },
      isString: { errorMessage: 'orderId must be a string' },
      trim: true,
      notEmpty: { errorMessage: 'orderId cannot be empty' },
    },
    razorpayPaymentId: {
      in: ['body'],
      exists: { errorMessage: 'razorpayPaymentId is required' },
      isString: { errorMessage: 'razorpayPaymentId must be a string' },
      trim: true,
      notEmpty: { errorMessage: 'razorpayPaymentId cannot be empty' },
    },
    razorpaySignature: {
      in: ['body'],
      exists: { errorMessage: 'razorpaySignature is required' },
      isString: { errorMessage: 'razorpaySignature must be a string' },
      trim: true,
      notEmpty: { errorMessage: 'razorpaySignature cannot be empty' },
    },
  },
  ['body']
); // Validation for payment verification inputs [web:2][web:4]

// Submit to Google Forms - saves immediately when order is created
const submitToGoogleForms = async (formData) => {
  try {
    // IMPORTANT: Replace entry.<id> with your actual Google Form entry IDs
    // Ensure URLSearchParams and x-www-form-urlencoded for Google Forms prefill endpoint [web:6][web:16][web:14]
    const googleFormData = new URLSearchParams();
    googleFormData.append('entry.472239098', formData.name);        // Name [web:9]
    googleFormData.append('entry.1899256565', formData.email);      // Email [web:9]
    googleFormData.append('entry.160783658', formData.phone);       // Phone [web:9]
    googleFormData.append('entry.1347762767', String(formData.amount)); // Amount [web:9]
    googleFormData.append('entry.2018147522', formData.order_id);   // Order ID [web:9]

    await axios.post(process.env.PAYMENT_GOOGLE_FORM_URL, googleFormData, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      // Optionally set timeout to avoid blocking order flow
      timeout: 5000,
    }); // Axios urlencoded submission pattern [web:6][web:16]

    return { success: true };
  } catch (error) {
    console.error('Google Forms submission error:', error?.response?.status, error?.response?.statusText);
    return { success: false, message: error.message };
  }
};

// Create Razorpay order AND save to Google Forms immediately
router.post('/create-order', createOrderSchema, async (req, res) => {
  // Handle validation errors centrally [web:4][web:5]
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array(),
    }); // Validation failure pattern [web:4][web:5]
  }

  try {
    const { amount, name, email, phone } = req.body;

    // Normalize inputs
    const normalized = {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
    }; // Basic sanitization and normalization [web:4][web:5]

    // Convert INR to paise as integer for Razorpay
    const amountInINR = Number(amount);
    const amountInPaise = Math.round(amountInINR * 100);
    if (!Number.isInteger(amountInPaise) || amountInPaise < 100) {
      // Optional rule: minimum 1 INR => 100 paise
      return res.status(400).json({
        success: false,
        message: 'Invalid amount after conversion. Must be at least 1 INR and a valid number.',
      }); // Razorpay requires integer paise [web:7][web:10]
    }

    const options = {
      amount: amountInPaise, // integer paise [web:7][web:10]
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      notes: { name: normalized.name, email: normalized.email, phone: normalized.phone },
    };

    // Create Razorpay order first
    const order = await razorpay.orders.create(options); // Amount integer requirement [web:7][web:10]

    // Save to Google Forms immediately after order creation (non-blocking for client success)
    const formData = {
      name: normalized.name,
      email: normalized.email,
      phone: normalized.phone,
      amount: amountInINR,
      order_id: order.id,
    };

    const googleFormResult = await submitToGoogleForms(formData);
    if (!googleFormResult.success) {
      console.error('Failed to save to Google Forms:', googleFormResult.message);
      // Continue anyway - don't block order creation if Google Forms fails
    } // Non-blocking failure handling [web:6][web:16]

    return res.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key: process.env.RAZORPAY_KEY_ID,
      googleFormSaved: googleFormResult.success,
    }); // Standard success payload [web:4][web:5]
  } catch (error) {
    console.error('Create order error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to create order',
      error: error.message,
    }); // Robust error reporting [web:4][web:5]
  }
});

// Verify payment (simplified - no Google Forms write here)
router.post('/verify-payment', verifyPaymentSchema, async (req, res) => {
  // Handle validation errors [web:4][web:5]
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array(),
    }); // Validation failure response [web:4][web:5]
  }

  try {
    const { orderId, razorpayPaymentId, razorpaySignature } = req.body;

    const generatedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(`${orderId}|${razorpayPaymentId}`)
      .digest('hex'); // HMAC generation for verification [web:4][web:5]

    const isValid = generatedSignature === razorpaySignature;

    if (isValid) {
      return res.json({
        success: true,
        message: 'Payment verified successfully',
        paymentId: razorpayPaymentId,
      }); // Positive verification result [web:4][web:5]
    } else {
      return res.status(400).json({ success: false, message: 'Payment verification failed' }); // Signature mismatch [web:4][web:5]
    }
  } catch (error) {
    console.error('Payment verification error:', error);
    return res.status(500).json({
      success: false,
      message: 'Payment verification failed',
      error: error.message,
    }); // Server-side error handling [web:4][web:5]
  }
});

module.exports = router;
