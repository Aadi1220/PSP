import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  CheckCircle,
  AlertCircle,
  Loader,
  Sparkles
} from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: null, message: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    AOS.init({ duration: 600, once: true, offset: 50 });
  }, []);

  // Enhanced validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim());
  };

  const validatePhone = (phone) => {
    // Enhanced Indian phone number validation - 10 digits, can start with +91 or 91
    const phoneRegex = /^(\+91|91)?[6-9]\d{9}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, ''); // Remove spaces, hyphens, parentheses
    return phoneRegex.test(cleanPhone);
  };

  const validateName = (name) => {
    // Name should be 2-50 characters, letters and spaces only, no leading/trailing spaces
    const nameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;
    const trimmedName = name.trim();
    return trimmedName.length >= 2 && trimmedName.length <= 50 && nameRegex.test(trimmedName);
  };

  const validateMessage = (message) => {
    const trimmedMessage = message.trim();
    return trimmedMessage.length >= 10 && trimmedMessage.length <= 500;
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation - REQUIRED
    if (!form.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (!validateName(form.name)) {
      newErrors.name = 'Please enter a valid name (2-50 characters, letters and spaces only)';
    }

    // Email validation - REQUIRED
    if (!form.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Please enter a valid email address (e.g., user@example.com)';
    }

    // Phone validation - REQUIRED
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(form.phone)) {
      newErrors.phone = 'Please enter a valid Indian phone number (10 digits, starting with 6-9)';
    }

    // Message validation - REQUIRED
    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (!validateMessage(form.message)) {
      newErrors.message = 'Message must be between 10-500 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  function handleChange(e) {
    const { name, value } = e.target;
    
    // Prevent exceeding character limits
    if (name === 'name' && value.length > 50) return;
    if (name === 'message' && value.length > 500) return;
    if (name === 'phone' && value.replace(/[\s\-\(\)]/g, '').length > 13) return; // +91 + 10 digits
    if (name === 'email' && value.length > 100) return;
    
    setForm(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: '' });

    // Validate form
    if (!validateForm()) {
      setStatus({ 
        loading: false, 
        success: false, 
        message: 'Please fix the validation errors below and try again.' 
      });
      return;
    }

    try {
      const cleanedData = {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.replace(/[\s\-\(\)]/g, ''), // Clean phone number
        message: form.message.trim()
      };

      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cleanedData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ 
          loading: false, 
          success: true, 
          message: 'Message sent successfully! We\'ll get back to you within 24 hours.' 
        });
        setForm({ name: '', email: '', phone: '', message: '' });
        setErrors({});
      } else {
        setStatus({ 
          loading: false, 
          success: false, 
          message: data.error || 'Failed to send message. Please try again.' 
        });
      }
    } catch (err) {
      setStatus({ 
        loading: false, 
        success: false, 
        message: 'Network error. Please check your internet connection and try again.' 
      });
    }
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 font-semibold text-sm mb-6 border border-blue-100">
            <Sparkles className="h-4 w-4" />
            Get In Touch
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-8">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div data-aos="fade-right">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        maxLength={50}
                        className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 ${
                          errors.name 
                            ? 'border-red-300 focus:ring-red-500' 
                            : 'border-gray-300 focus:ring-blue-500'
                        }`}
                        placeholder="Enter your full name"
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        maxLength={100}
                        className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 ${
                          errors.email 
                            ? 'border-red-300 focus:ring-red-500' 
                            : 'border-gray-300 focus:ring-blue-500'
                        }`}
                        placeholder="Enter your email address"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 ${
                          errors.phone 
                            ? 'border-red-300 focus:ring-red-500' 
                            : 'border-gray-300 focus:ring-blue-500'
                        }`}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        {errors.phone}
                      </p>
                    )}
                    <p className="mt-1 text-xs text-gray-500">Format: +91XXXXXXXXXX or 10-digit number</p>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      maxLength={500}
                      className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-300 resize-none ${
                        errors.message 
                          ? 'border-red-300 focus:ring-red-500' 
                          : 'border-gray-300 focus:ring-blue-500'
                      }`}
                      placeholder="Tell us about your project... (minimum 10 characters)"
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        {errors.message}
                      </p>
                    )}
                    <p className="mt-1 text-xs text-gray-500">
                      {form.message.length}/500 characters
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={status.loading}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {status.loading ? (
                      <>
                        <Loader className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>

                {/* Status Messages */}
                {status.success === true && (
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <p className="text-green-800 font-medium">{status.message}</p>
                  </div>
                )}

                {status.success === false && (
                  <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <p className="text-red-800 font-medium">{status.message}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div data-aos="fade-left">
              <div className="space-y-8">
                <div className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-7 w-7 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Phone</h4>
                    <a 
                      href="tel:+918920267022" 
                      className="text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors duration-300"
                    >
                      +91-89202 67022
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-7 w-7 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Email</h4>
                    <a 
                      href="mailto:Support@perfectserviceprovider.com" 
                      className="text-green-600 hover:text-green-700 font-semibold text-lg transition-colors duration-300"
                    >
                      Support@perfectserviceprovider.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-7 w-7 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Location</h4>
                    <p className="text-purple-600 font-semibold text-lg">Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto" data-aos="fade-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h3>
            <p className="text-lg text-gray-600">Located in Delhi, India</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.3742926434747!2d77.10667876489842!3d28.714332314379853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQyJzUxLjYiTiA3N8KwMDYnMzMuMyJF!5e0!3m2!1sen!2sin!4v1695377111111!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Perfect Service Provider Location - Delhi"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
