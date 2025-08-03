import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ToastProvider from '@/components/ToastProvider';
import GoogleAnalyticsScript from '@/components/GoogleAnalyticsScript';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import StructuredData from '@/components/StructuredData';
import { GA_MEASUREMENT_ID } from '@/lib/gtag';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Buildrix - Premium Web Development & Digital Solutions',
  description: "We don't build websites. We craft digital experiences. Expert full-stack development team specializing in React, Next.js, WordPress, and modern web applications. Transform your vision into reality with Buildrix.",
  keywords: [
    'Web Development', 'React Developer', 'Next.js', 'Full Stack Development',
    'WordPress Development', 'UI/UX Design', 'Mobile App Development',
    'Digital Solutions', 'Custom Web Applications', 'E-commerce Development',
    'Buildrix', 'Professional Web Services', 'Modern Web Technologies'
  ],
  authors: [{ name: 'Buildrix Team' }],
  creator: 'Buildrix',
  publisher: 'Buildrix',
  openGraph: {
    title: 'Buildrix - Premium Web Development & Digital Solutions',
    description: 'Expert full-stack development team crafting digital experiences with React, Next.js, WordPress, and modern web technologies. Contact us at buildrix@gmail.com',
    type: 'website',
    locale: 'en_US',
    url: 'https://buildrix.com',
    siteName: 'Buildrix',
    images: [
      {
        url: '/images/buildrix-site.png',
        width: 1200,
        height: 630,
        alt: 'Buildrix - Premium Web Development Team',
        type: 'image/png',
      },
      {
        url: '/buildrix-logo.svg',
        width: 200,
        height: 200,
        alt: 'Buildrix Logo',
        type: 'image/svg+xml',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buildrix - Premium Web Development & Digital Solutions',
    description: 'Expert full-stack development team crafting digital experiences with modern web technologies.',
    images: ['/images/buildrix-site.png'],
    creator: '@buildrix',
    site: '@buildrix',
  },
  alternates: {
    canonical: 'https://buildrix.com',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' }
    ],
    apple: [
      { url: '/buildrix-logo.svg', sizes: '180x180', type: 'image/svg+xml' }
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {GA_MEASUREMENT_ID && <GoogleAnalyticsScript GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Hide scrollbar for webkit browsers */
            ::-webkit-scrollbar {
              width: 8px;
            }
            ::-webkit-scrollbar-track {
              background: #0F111A;
            }
            ::-webkit-scrollbar-thumb {
              background: #64FFDA;
              border-radius: 4px;
            }
            ::-webkit-scrollbar-thumb:hover {
              background: #4FD1C7;
            }
            
            /* Custom cursor styles */
            * {
              cursor: none !important;
            }
            
            /* Selection styles */
            ::selection {
              background: #64FFDA;
              color: #0F111A;
            }
            
            /* Smooth font rendering */
            * {
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
          `
        }} />
        <script dangerouslySetInnerHTML={{
          __html: `
            // Console easter egg
            console.log(\`
              �  Hey there, curious developer!
              
              Welcome to Buildrix - where we craft digital experiences!
              
              Looking for secrets in the console? 
              We like your style! 
              
              Instead of digging through code,
              why don't we build something amazing together?
              
              💌 Contact us: buildrix@gmail.com
              🌐 Website: https://buildrix.com
              
              - The Buildrix Team ⚡
            \`);
          `
        }} />
      </head>
      <body className={`${inter.className} bg-[#0F111A] text-white overflow-x-hidden`}>
        <StructuredData />
        {GA_MEASUREMENT_ID && <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />}
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}