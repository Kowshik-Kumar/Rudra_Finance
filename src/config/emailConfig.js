/**
 * EmailJS Configuration
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://www.emailjs.com/ and create a free account
 * 2. Add an email service (Gmail, Outlook, etc.)
 * 3. Create an email template with these variables:
 *    - {{from_name}}
 *    - {{from_email}}
 *    - {{phone}}
 *    - {{service}}
 *    - {{message}}
 * 4. Copy your Service ID, Template ID, and Public Key below
 * 5. Your notification email will be sent to the email you configured in EmailJS
 */

export const emailConfig = {
  // Get these from your EmailJS dashboard: https://dashboard.emailjs.com/
  serviceId: 'YOUR_SERVICE_ID',  // Example: 'service_abc123'
  templateId: 'YOUR_TEMPLATE_ID', // Example: 'template_xyz789'
  publicKey: 'YOUR_PUBLIC_KEY',   // Example: 'abcdef123456'
}

// Email template example for EmailJS:
/*
Subject: New Contact Form Submission - Rudra Tax & Business Solution

Hello,

You have received a new inquiry from your website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Required: {{service}}

Message:
{{message}}

---
This message was sent from your website contact form.
Reply to {{from_email}} to respond to this inquiry.
*/
