export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

// Track page views
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track contact form submissions
export const trackContactForm = (method: string) => {
  event({
    action: 'contact_form_submit',
    category: 'engagement',
    label: method,
  });
};

// Track project clicks
export const trackProjectClick = (projectName: string) => {
  event({
    action: 'project_click',
    category: 'engagement',
    label: projectName,
  });
};

// Track WhatsApp clicks
export const trackWhatsAppClick = (developerName: string) => {
  event({
    action: 'whatsapp_click',
    category: 'contact',
    label: developerName,
  });
};

// Track email clicks
export const trackEmailClick = (emailType: string) => {
  event({
    action: 'email_click',
    category: 'contact',
    label: emailType,
  });
};

// Track developer profile views
export const trackDeveloperView = (developerName: string) => {
  event({
    action: 'developer_profile_view',
    category: 'engagement',
    label: developerName,
  });
};