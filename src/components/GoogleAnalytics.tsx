'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

interface GoogleAnalyticsProps {
  GA_MEASUREMENT_ID: string;
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ GA_MEASUREMENT_ID }) => {
  const pathname = usePathname();

  useEffect(() => {
    // Get search params on client side to avoid SSR issues
    const searchParams = new URLSearchParams(window.location.search);
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');

    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
      });
    }
  }, [pathname, GA_MEASUREMENT_ID]);

  return null;
};

export default GoogleAnalytics;