const axios = require('axios');
const { URLSearchParams } = require('url');
const { FORM_URL, ENTRY_NAME, ENTRY_EMAIL, ENTRY_PHONE, ENTRY_MESSAGE } = require('../config/env');

const submitContactForm = async (req, res) => {
  try {
    const { name = '', email = '', phone = '', message = '' } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'name, email and message are required' });
    }

    const params = new URLSearchParams();
    params.append(ENTRY_NAME, name);
    params.append(ENTRY_EMAIL, email);
    params.append(ENTRY_PHONE, phone);
    params.append(ENTRY_MESSAGE, message);

    const resp = await axios.post(FORM_URL, params.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      maxRedirects: 0,
      validateStatus: (status) => status >= 200 && status < 400,
    });

    return res.json({ success: true, status: resp.status });
  } catch (err) {
    console.error('Error submitting to Google Form:', err.message || err);
    return res.status(500).json({ success: false, error: err.message || 'Server error' });
  }
};

module.exports = { submitContactForm };
