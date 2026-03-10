

# Fix Contact Form Emails with EmailJS

## Problem
The contact form sends requests to `/api/send-email` which routes to a Netlify serverless function. This doesn't work in the Lovable preview (no Netlify backend), and even on Netlify it requires SMTP credentials to be configured.

## Solution
Replace the Netlify function approach with **EmailJS** — a free client-side email service that works directly from the browser with no backend needed.

## Setup Required (from you)
1. Go to [emailjs.com](https://www.emailjs.com) and create a free account
2. Add an email service (Gmail, Outlook, etc.) — you'll get a **Service ID**
3. Create an email template with variables: `{{from_name}}`, `{{from_phone}}`, `{{from_email}}`, `{{project_type}}`, `{{message}}` — you'll get a **Template ID**
4. Copy your **Public Key** from Account → API Keys

You'll paste these 3 values (Service ID, Template ID, Public Key) back here so I can wire them in.

## Technical Changes

### 1. Install `@emailjs/browser` package

### 2. Update `src/components/ContactSection.tsx`
- Remove the `fetch("/api/send-email")` call
- Replace with `emailjs.send()` using the 3 keys
- Map form fields to template variables
- Keep the existing success/error UI

### 3. No backend needed
- The Netlify function (`netlify/functions/send-email.js`) becomes unused
- EmailJS runs entirely client-side

## Notes
- Free tier: 200 emails/month (sufficient for quote requests)
- Public keys are safe to store in client code (EmailJS design)
- Both the company notification and customer confirmation can be handled via EmailJS templates

