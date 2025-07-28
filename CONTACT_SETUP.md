# Contact Form Setup Guide

## Overview
The contact form is now fully functional with backend API integration, email sending via Nodemailer, and toast notifications.

## Features
- ✅ Form validation using Zod
- ✅ Email sending via Nodemailer to 2 addresses simultaneously
- ✅ WhatsApp modal with 4 different contact numbers
- ✅ Toast notifications with website color palette
- ✅ Loading states and error handling
- ✅ Responsive design matching your website theme

## Setup Instructions

### 1. Environment Variables
Copy `.env.example` to `.env.local` and fill in your email credentials:

```bash
cp .env.example .env.local
```

### 2. Gmail Setup (Recommended)
1. Go to your Google Account settings
2. Enable 2-factor authentication
3. Go to "App passwords" section
4. Generate a new app password for "Mail"
5. Use this app password (not your regular password) in `.env.local`

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-character-app-password
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
SECONDARY_EMAIL=your-secondary@gmail.com
```

### 3. Other Email Providers
- **Outlook**: `smtp-mail.outlook.com`, port `587`
- **Yahoo**: `smtp.mail.yahoo.com`, port `587`
- **Custom SMTP**: Use your provider's settings

### 4. Test the Form
1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the message

## API Endpoint
- **URL**: `/api/contact`
- **Method**: `POST`
- **Body**: `{ name: string, email: string, message: string }`
- **Response**: `{ success: boolean, message?: string, error?: string }`

## Toast Notifications
The form includes custom toast notifications that match your website's color palette:
- **Success**: Teal (#64FFDA) border and text
- **Error**: Red (#FF6B6B) border and text
- **Background**: Dark theme (#1A1C26) matching your design

## Security Features
- Input validation on both client and server
- Environment variable protection
- Error handling without exposing sensitive information
- Rate limiting ready (can be added if needed)

## Customization
You can customize the email template in `src/app/api/contact/route.ts` by modifying the `mailOptions.html` content.

## Troubleshooting
1. **"Server configuration error"**: Check your environment variables
2. **"Authentication failed"**: Verify your email credentials and app password
3. **"Network error"**: Check your internet connection and SMTP settings
4. **Form not submitting**: Check browser console for JavaScript errors

## Production Deployment
Make sure to set your environment variables in your hosting platform:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment Variables
- Other platforms: Follow their environment variable setup guide
## 
WhatsApp Integration
The contact section now includes a WhatsApp modal with 4 different contact options:

### WhatsApp Numbers Configuration
Edit `src/components/WhatsAppModal.tsx` to update the contact numbers:

```typescript
const whatsappNumbers = [
  {
    id: 1,
    name: 'Personal',
    number: '+1234567890', // Update with your actual number
    description: 'General inquiries & casual chat',
    icon: User,
    color: '#64FFDA',
    availability: '9 AM - 6 PM'
  },
  // ... update other numbers
];
```

### Features:
- **4 Different Numbers**: Personal, Business, Support, Emergency
- **Custom Descriptions**: Each number has a specific purpose
- **Availability Times**: Shows when each number is available
- **Auto-Generated Messages**: Pre-fills WhatsApp with a professional message
- **Responsive Modal**: Matches your website's dark theme
- **Smooth Animations**: Framer Motion powered interactions

### How It Works:
1. User clicks "WhatsApp" in the contact section
2. Modal opens with 4 number options
3. User selects appropriate number
4. Opens WhatsApp with pre-filled message
5. Modal closes automatically

## Dual Email System
The contact form now sends emails to 2 addresses simultaneously:

- **Primary Email**: Set via `EMAIL_USER` (required)
- **Secondary Email**: Set via `SECONDARY_EMAIL` (optional)

If `SECONDARY_EMAIL` is not set, emails will only go to the primary address.