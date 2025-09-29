require('dotenv').config();

const FORM_URL = process.env.GOOGLE_FORM_URL;
const ENTRY_NAME = process.env.ENTRY_NAME;
const ENTRY_EMAIL = process.env.ENTRY_EMAIL;
const ENTRY_PHONE = process.env.ENTRY_PHONE;
const ENTRY_MESSAGE = process.env.ENTRY_MESSAGE;

if (!FORM_URL || !ENTRY_NAME || !ENTRY_EMAIL || !ENTRY_MESSAGE) {
  console.warn('Make sure GOOGLE_FORM_URL and ENTRY_* env vars are set.');
}

module.exports = {
  FORM_URL,
  ENTRY_NAME,
  ENTRY_EMAIL,
  ENTRY_PHONE,
  ENTRY_MESSAGE,
};
