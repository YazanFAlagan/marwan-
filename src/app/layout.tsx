import type { Metadata } from 'next';
import { Inter, Cairo } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const cairo = Cairo({ subsets: ['arabic'], variable: '--font-cairo' });

export const metadata: Metadata = {
  title: 'Marwan Ahmed Aouni El-Agha | Arab Scout Committee Candidate',
  description: 'Candidate of the Arab Republic of Egypt for the Arab Scout Committee – Youth Advisors (2025–2028)',
  keywords: 'Marwan El-Agha, Arab Scout Committee, Youth Advisors, Scouting, Egypt',
  authors: [{ name: 'Marwan Ahmed Aouni El-Agha' }],
  openGraph: {
    title: 'Marwan Ahmed Aouni El-Agha | Arab Scout Committee Candidate',
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
      <body className={`${inter.variable} ${cairo.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
