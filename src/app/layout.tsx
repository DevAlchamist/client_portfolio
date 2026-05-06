import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import GoogleAnalyticsScript from "@/components/GoogleAnalyticsScript";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import StructuredData from "@/components/StructuredData";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Buildrix - Premium Web Development & Digital Solutions",
  description:
    "We don't build websites. We craft digital experiences. Expert full-stack development team specializing in React, Next.js, WordPress, and modern web applications. Transform your vision into reality with Buildrix.",
  keywords: [
    "Web Development",
    "React Developer",
    "Next.js",
    "Full Stack Development",
    "WordPress Development",
    "UI/UX Design",
    "Mobile App Development",
    "Digital Solutions",
    "Custom Web Applications",
    "E-commerce Development",
    "Buildrix",
    "Professional Web Services",
    "Modern Web Technologies",
  ],
  authors: [{ name: "Buildrix Team" }],
  creator: "Buildrix",
  publisher: "Buildrix",
  openGraph: {
    title: "Buildrix - Premium Web Development & Digital Solutions",
    description:
      "Expert full-stack development team crafting digital experiences with React, Next.js, WordPress, and modern web technologies. Contact us at buildarix@gmail.com",
    type: "website",
    locale: "en_US",
    url: "https://buildrix.co",
    siteName: "Buildrix",
    images: [
      {
        url: "/images/buildrix-site.png",
        width: 1200,
        height: 630,
        alt: "Buildrix - Premium Web Development Team",
        type: "images/png",
      },
      {
        url: "/buildrix-logo.svg",
        width: 200,
        height: 200,
        alt: "Buildrix Logo",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buildrix - Premium Web Development & Digital Solutions",
    description:
      "Expert full-stack development team crafting digital experiences with modern web technologies.",
    images: ["/images/buildrix-site.png"],
    creator: "@buildrix",
    site: "@buildrix",
  },
  alternates: {
    canonical: "https://buildrix.co",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },

  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        {GA_MEASUREMENT_ID && (
          <GoogleAnalyticsScript GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
        )}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Hide scrollbar for webkit browsers */
            ::-webkit-scrollbar {
              width: 8px;
            }
            ::-webkit-scrollbar-track {
              background: #0F0F10;
            }
            ::-webkit-scrollbar-thumb {
              background: #6E7E91;
              border-radius: 4px;
            }
            ::-webkit-scrollbar-thumb:hover {
              background: #C2A27C;
            }
            
            ::selection {
              background: #C2A27C;
              color: #0F0F10;
            }
            
            /* Smooth font rendering */
            * {
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
          `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            // Console easter egg
            console.log(\`
              �  Hey there, curious developer!
              
              Welcome to Buildrix - where we craft digital experiences!
              
              Looking for secrets in the console? 
              We like your style! 
              
              Instead of digging through code,
              why don't we build something amazing together?
              
              💌 Contact us: buildarix@gmail.com
              🌐 Website: https://buildrix.com
              
              - The Buildrix Team ⚡
            \`);
          `,
          }}
        />
      </head>
      <body className="relative min-h-screen overflow-x-hidden bg-buildrix-base text-buildrix-ivory">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[1] bg-[length:280px_280px] bg-repeat opacity-[0.05] [background-image:var(--buildrix-grain)]"
        />
        <div className="relative z-10">
          <StructuredData />
          {GA_MEASUREMENT_ID && (
            <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
          )}
          {children}
        </div>
      </body>
    </html>
  );
}
