import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validationResult = contactSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Validation failed',
          details: validationResult.error 
        },
        { status: 400 }
      );
    }

    const { name, email, message } = validationResult.data;

    // Check for required environment variables
    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;
    const emailHost = process.env.EMAIL_HOST || 'smtp.gmail.com';
    const emailPort = parseInt(process.env.EMAIL_PORT || '587');
    const secondaryEmail = process.env.SECONDARY_EMAIL; // Optional second email

    if (!emailUser || !emailPassword) {
      console.error('Missing email configuration');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Server configuration error' 
        },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: emailHost,
      port: emailPort,
      secure: emailPort === 465, // true for 465, false for other ports
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    // Prepare recipient list
    const recipients = [emailUser];
    if (secondaryEmail) {
      recipients.push(secondaryEmail);
    }

    // Email content
    const mailOptions = {
      from: emailUser,
      to: recipients, // Send to both emails
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #0F111A; color: white; padding: 30px; border-radius: 10px;">
            <h2 style="color: #64FFDA; margin-bottom: 20px;">New Contact Form Submission</h2>
            
            <div style="background-color: #1A1C26; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #64FFDA; margin-bottom: 10px;">Contact Details:</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
            </div>
            
            <div style="background-color: #1A1C26; padding: 20px; border-radius: 8px;">
              <h3 style="color: #64FFDA; margin-bottom: 10px;">Message:</h3>
              <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #64FFDA; color: #0F111A; border-radius: 8px;">
              <p style="margin: 0; font-weight: bold;">Reply to: ${email}</p>
            </div>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
        
        Reply to: ${email}
      `,
    };

    // Send email to all recipients
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send email' 
      },
      { status: 500 }
    );
  }
}