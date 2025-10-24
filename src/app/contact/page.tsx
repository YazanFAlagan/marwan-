'use client';

import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 ${
                isRTL ? 'font-arabic' : ''
              }`}
            >
              {t('contact.title')}
            </h1>
            <p
              className={`text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto ${
                isRTL ? 'font-arabic' : ''
              }`}
            >
              {t('contact.subtitle')}
            </p>
            <div className="w-24 h-1 bg-primary-600 mx-auto mt-6 rounded-full" />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
