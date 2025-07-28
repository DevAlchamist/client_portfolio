import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ToastProvider from '@/components/ToastProvider';
import GoogleAnalyticsScript from '@/components/GoogleAnalyticsScript';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { GA_MEASUREMENT_ID } from '@/lib/gtag';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Digital Alchemist - Next-Gen Developer Portfolio',
  description: "I don't build websites. I craft digital experiences. React Dev | UI Engineer | Design-Driven Coder specializing in modern web applications.",
  keywords: ['React Developer', 'Next.js', 'UI Engineer', 'Web Development', 'Frontend Developer'],
  authors: [{ name: 'Digital Alchemist' }],
  openGraph: {
    title: 'Digital Alchemist - Next-Gen Developer Portfolio',
    description: 'Crafting digital experiences with React, Next.js, and modern web technologies.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Alchemist - Next-Gen Developer Portfolio',
    description: 'Crafting digital experiences with React, Next.js, and modern web technologies.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
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
              👋 Hey there, curious developer!
              
              Looking for secrets in the console? 
              I like your style! 
              
              Instead of digging through code,
              why don't we build something amazing together?
              
              Drop me a line: hello@yourname.com
              
              - Your friendly neighborhood code alchemist ✨
            \`);
          `
        }} />
      </head>
      <body className={`${inter.className} bg-[#0F111A] text-white overflow-x-hidden`}>
        {GA_MEASUREMENT_ID && <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />}
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}