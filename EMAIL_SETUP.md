# Email Setup Guide

This project uses Resend for sending emails from the contact form. Here's how to set it up:

## 1. Get a Resend API Key

1. Go to [Resend](https://resend.com) and create a free account
2. Navigate to the API Keys section
3. Create a new API key
4. Copy the API key (starts with `re_`)

## 2. Configure Environment Variables

Create a `.env.local` file in your project root and add:

```env
RESEND_API_KEY=re_your_api_key_here
```

Replace `re_your_api_key_here` with your actual Resend API key.

## 3. Verify Your Domain (Optional)

For production use, you should verify your domain with Resend:

1. Go to your Resend dashboard
2. Navigate to Domains
3. Add and verify your domain
4. Update the `from` field in `src/app/api/contact/route.ts` to use your verified domain

## 4. Test the Contact Form

1. Start your development server: `npm run dev`
2. Fill out the contact form on your website
3. Submit the form
4. Check your email (saradhi8142385201@gmail.com) for the message

## Free Tier Limits

Resend's free tier includes:
- 3,000 emails per month
- 100 emails per day
- Perfect for personal portfolios and small projects

## Troubleshooting

- If emails aren't sending, check the browser console and server logs
- Make sure your RESEND_API_KEY is correctly set in `.env.local`
- For development, emails will be sent from `onboarding@resend.dev`
- In production, use your verified domain for the `from` address 