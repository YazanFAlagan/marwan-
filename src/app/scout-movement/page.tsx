'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ScoutMovementPage() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <section className="flex-grow pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-4xl font-bold text-gray-900 mb-8 ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>
            {t('scoutMovement.title')}
          </h1>
          
          <div className={`prose prose-lg max-w-none ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {t('scoutMovement.content')}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
