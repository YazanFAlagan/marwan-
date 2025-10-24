import type { Metadata } from 'next';
import { EB_Garamond, Amiri } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';
import './globals.css';

const garamond = EB_Garamond({ 
  subsets: ['latin'], 
  variable: '--font-garamond',
  weight: ['400', '500', '600', '700']
});
const amiri = Amiri({ 
  subsets: ['arabic'], 
  variable: '--font-arabic',
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: 'Marwan Ahmed Awny Elagha | Arab Scout Committee Candidate',
  description: 'Candidate of the Arab Republic of Egypt for the Arab Scout Committee – Youth Advisors (2025–2028)',
  keywords: 'Marwan Elagha, Arab Scout Committee, Youth Advisors, Scouting, Egypt',
  authors: [{ name: 'Marwan Ahmed Awny Elagha' }],
  openGraph: {
    title: 'Marwan Ahmed Awny Elagha | Arab Scout Committee Candidate',
    description: 'Candidate of the Arab Republic of Egypt for the Arab Scout Committee – Youth Advisors (2025–2028)',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${garamond.variable} ${amiri.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
