# Email Integration Setup Guide

Your contact form is now configured to send emails directly from the website! Follow these steps to get it working.

## Step 1: Install Dependencies

Run this command in your project directory:

```bash
npm install nodemailer
# or if using bun:
bun add nodemailer
```

## Step 2: Choose Your Email Service

You'll need SMTP credentials. Here are popular free options:

### Option A: Gmail
1. Go to [Google Account Settings](https://myaccount.google.com/security)
2. Enable "2-Step Verification"
3. Create an "App password" for Mail
4. Use these settings:
   - SMTP_HOST: `smtp.gmail.com`
   - SMTP_PORT: `587`
   - SMTP_SECURE: `false`
   - SMTP_USER: `your-email@gmail.com`
   - SMTP_PASS: `your-app-password`

### Option B: SendGrid (Recommended)
1. Sign up at [SendGrid](https://sendgrid.com) (free tier available)
2. Create an API key
3. Use these settings:
   - SMTP_HOST: `smtp.sendgrid.net`
   - SMTP_PORT: `587`
   - SMTP_SECURE: `false`
   - SMTP_USER: `apikey`
   - SMTP_PASS: `your-sendgrid-api-key`

### Option C: Brevo (Sendinblue)
1. Sign up at [Brevo](https://www.brevo.com)
2. Go to Settings → SMTP & API
3. Copy your SMTP credentials
4. Use these settings:
   - SMTP_HOST: `smtp-relay.brevo.com`
   - SMTP_PORT: `587`
   - SMTP_SECURE: `false`
   - SMTP_USER: `your-brevo-email`
   - SMTP_PASS: `your-brevo-smtp-password`

## Step 3: Set Up Environment Variables

For **development** (local testing), create a `.env.local` file in your project root:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM_EMAIL=noreply@castleworks.co.ke
```

For **production** (Netlify), add these as environment variables:

1. Go to your Netlify site dashboard
2. Navigate to **Site Settings → Build & Deploy → Environment**
3. Click **Edit variables**
4. Add each variable from above (SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, SMTP_FROM_EMAIL)

## Step 4: Test Locally

1. Create `.env.local` with your SMTP credentials (see Step 3)
2. Run `npm run dev`
3. Fill out the contact form on your site
4. You should see the success message

## How It Works

When someone submits the form:
1. The form data is sent to the `send-email` Netlify Function
2. The function validates the data
3. Two emails are sent:
   - **To your company** (info@castleworks.co.ke): Contains the full quote request
   - **To the customer**: A confirmation message saying we'll respond within 24 hours
4. The user sees a success message: "Email Received! We will get back to you within 24 hours"

## Troubleshooting

### Emails not being sent?
- Check that all environment variables are correctly set
- Verify SMTP credentials are correct
- Check Netlify function logs in the dashboard
- Make sure the email service allows SMTP connections

### Getting "Method not allowed" error?
- Ensure the form is sending POST requests (it should be by default)
- Check that the function is deployed correctly

### Customer confirmation emails not arriving?
- Check spam folder
- Verify the email address entered in the form is correct
- Check your SMTP service's sending limits

## Support

If you have issues:
1. Check the browser console for error messages
2. Look at Netlify function logs in your dashboard
3. Verify SMTP credentials with your email service
4. Ensure all environment variables are set in both development and production

---

**Note**: This setup supports unlimited quote requests within your email service's limits (typically thousands per day with free tiers).
