import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const { email, message } = await request.json();

        // Basic validation
        if (!email || !message) {
            return NextResponse.json(
                { error: 'Email and message are required' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Please provide a valid email address' },
                { status: 400 }
            );
        }

        // Check if Resend API key is configured
        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY is not configured');
            return NextResponse.json(
                { error: 'Email service is not configured. Please try again later.' },
                { status: 500 }
            );
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>', // You can change this to your verified domain
            to: ['saradhi8142385201@gmail.com'],
            subject: 'New Contact Form Submission',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>From:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #007bff;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 14px;">
            <em>Submitted at: ${new Date().toLocaleString()}</em>
          </p>
        </div>
      `,
            text: `
        New Contact Form Submission
        
        From: ${email}
        Message: ${message}
        
        Submitted at: ${new Date().toLocaleString()}
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Failed to send email. Please try again.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: 'Message sent successfully!' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to send message. Please try again.' },
            { status: 500 }
        );
    }
} 