# Web3Forms Configuration Guide

## Quick Setup

This folder contains the form notification configuration used by the contact form.

### File: `web3FormsConfig.js`

This file reads your Web3Forms access key from environment variables and sends contact submissions to Web3Forms.

---

## Important: Add Access Key Before Going Live

Create a `.env` file in project root and add:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

---

## How To Get Access Key

1. Go to https://web3forms.com/
2. Add your business email address
3. Verify your email inbox
4. Copy your access key from Web3Forms dashboard
5. Paste it into `.env`

---

## How It Works

- User fills the contact form
- Form submits JSON payload to `https://api.web3forms.com/submit`
- Web3Forms sends notification email to your verified business email
- You receive all fields: name, email, phone, service, and message

---

## Troubleshooting

If submission fails:

1. Confirm `.env` has `VITE_WEB3FORMS_ACCESS_KEY`
2. Restart dev server after updating `.env`
3. Verify the email is confirmed in Web3Forms dashboard
4. Check browser console for API errors
