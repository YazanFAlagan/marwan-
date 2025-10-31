import type { Metadata, Viewport } from 'next';
import { EB_Garamond, Amiri } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import './globals.css';

// Preload fonts with display swap for better performance
const garamond = EB_Garamond({ 
  subsets: ['latin'], 
  variable: '--font-garamond',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
});

const amiri = Amiri({ 
  subsets: ['arabic'], 
  variable: '--font-arabic',
  weight: ['400', '700'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Marwan Ahmed Awny Elagha | Arab Scout Committee Candidate',
  description: 'Candidate of the Arab Republic of Egypt for the Arab Scout Committee – Youth Advisors (2025–2028)',
  keywords: 'Marwan Elagha, Arab Scout Committee, Youth Advisors, Scouting, Egypt',
  authors: [{ name: 'Marwan Ahmed Awny Elagha' }],
  metadataBase: new URL('https://marwanawny.com'),
  openGraph: {
    title: 'Marwan Ahmed Awny Elagha | Arab Scout Committee Candidate',
    description: 'Candidate of the Arab Republic of Egypt for the Arab Scout Committee – Youth Advisors (2025–2028)',
    type: 'website',
    locale: 'en_US',
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
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://formspree.io" />
        
        {/* Preload critical CSS */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: 'EB Garamond';
              font-style: normal;
              font-weight: 400 700;
              font-display: swap;
              src: url('/fonts/eb-garamond.woff2') format('woff2');
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            
            @font-face {
              font-family: 'Amiri';
              font-style: normal;
              font-weight: 400 700;
              font-display: swap;
              src: url('/fonts/amiri.woff2') format('woff2');
              unicode-range: U+0600-06FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE80-FEFC;
            }
          `
        }} />
      </head>
      <body className={`${garamond.variable} ${amiri.variable} font-sans antialiased`}>
        <GoogleAnalytics />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
