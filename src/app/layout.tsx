import type { Metadata, Viewport } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'Marwan Ahmed Awny Elagha | Arab Scout Committee Candidate',
  description: 'Candidate of the Arab Republic of Egypt for the Arab Scout Committee – Youth Advisors (2025–2028)',
  keywords: 'Marwan Elagha, Arab Scout Committee, Youth Advisors, Scouting, Egypt',
  authors: [{ name: 'Marwan Ahmed Awny Elagha' }],
  metadataBase: new URL('https://marwanelagha.com'),
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
      </head>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
