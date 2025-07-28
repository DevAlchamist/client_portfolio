# Google Analytics Setup Guide

## Overview
Google Analytics 4 (GA4) has been integrated into your Next.js portfolio website to track user interactions, page views, and conversion events.

## Setup Instructions

### 1. Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring"
4. Create a new account and property
5. Choose "Web" as the platform
6. Enter your website URL and name

### 2. Get Your Measurement ID
1. In your GA4 property, go to Admin (gear icon)
2. Under "Property", click "Data Streams"
3. Click on your web stream
4. Copy the "Measurement ID" (starts with G-XXXXXXXXXX)

### 3. Configure Environment Variables
Add your Measurement ID to your environment files:

**`.env.local`** (for local development):
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Production Environment** (Vercel, Netlify, etc.):
Set the environment variable in your hosting platform's dashboard.

## Tracked Events

### Automatic Tracking
- **Page Views**: Automatically tracked on all pages
- **Scroll Depth**: Built-in GA4 enhanced measurement
- **File Downloads**: Built-in GA4 enhanced measurement
- **Outbound Clicks**: Built-in GA4 enhanced measurement

### Custom Events Tracked
1. **Contact Form Submissions**
   - Event: `contact_form_submit`
   - Category: `engagement`
   - Label: `contact_form`

2. **WhatsApp Clicks**
   - Event: `whatsapp_click`
   - Category: `contact`
   - Label: Developer name (e.g., "Nitin - Frontend Lead")

3. **Email Clicks**
   - Event: `email_click`
   - Category: `contact`
   - Label: Email type (e.g., "General Inquiries")

4. **Developer Profile Views**
   - Event: `developer_profile_view`
   - Category: `engagement`
   - Label: Developer name

5. **Project Clicks**
   - Event: `project_click`
   - Category: `engagement`
   - Label: Project name

## Files Added/Modified

### New Files
- `src/components/GoogleAnalytics.tsx` - Client-side page tracking
- `src/components/GoogleAnalyticsScript.tsx` - GA4 script loader
- `src/lib/gtag.ts` - Analytics utility functions

### Modified Files
- `src/app/layout.tsx` - Added GA4 scripts and tracking
- `src/components/Contact.tsx` - Added form submission tracking
- `src/components/WhatsAppModal.tsx` - Added WhatsApp click tracking
- `src/components/EmailModal.tsx` - Added email click tracking
- `src/components/MeetTheDevelopers.tsx` - Added profile and project tracking
- `.env.example` - Added GA measurement ID example
- `.env.local` - Added GA measurement ID placeholder

## Viewing Analytics Data

### Real-Time Reports
1. Go to your GA4 property
2. Click "Reports" → "Realtime"
3. See live user activity and events

### Custom Events
1. Go to "Reports" → "Engagement" → "Events"
2. View all tracked custom events
3. Click on event names to see detailed breakdowns

### Conversion Tracking
1. Go to "Configure" → "Events"
2. Mark important events as "Conversions"
3. Track conversion rates in reports

## Privacy Compliance

### GDPR/CCPA Considerations
- GA4 is configured with privacy-friendly defaults
- Consider adding a cookie consent banner for EU visitors
- Data retention is set to Google's default (14 months)

### Data Collection
- No personally identifiable information (PII) is tracked
- IP addresses are anonymized by default in GA4
- User data is processed according to Google's privacy policies

## Troubleshooting

### Analytics Not Working
1. Check that `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set correctly
2. Verify the Measurement ID format (G-XXXXXXXXXX)
3. Check browser console for JavaScript errors
4. Use GA4 DebugView for real-time debugging

### Events Not Showing
1. Events may take 24-48 hours to appear in standard reports
2. Use Real-time reports for immediate verification
3. Check that event names match exactly in the code

### Testing Events
1. Open browser developer tools
2. Go to Network tab
3. Look for requests to `google-analytics.com/g/collect`
4. Verify event parameters are being sent

## Performance Impact
- GA4 scripts load asynchronously and don't block page rendering
- Minimal impact on Core Web Vitals
- Scripts are loaded with `strategy="afterInteractive"` for optimal performance

## Next Steps
1. Set up conversion goals in GA4
2. Create custom audiences for remarketing
3. Set up Google Ads integration if needed
4. Configure enhanced e-commerce tracking if applicable
5. Set up custom dashboards and reports