'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1920x1080/16a34a/ffffff?text=Marwan+El-Agha')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div
            className={`max-w-2xl ${
              isRTL ? 'mr-auto text-right' : 'ml-auto text-left'
            }`}
          >
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 ${
                isRTL ? 'font-arabic' : ''
              }`}
            >
              {t('hero.name')}
            </h1>
            <p
              className={`text-xl sm:text-2xl md:text-3xl text-white/90 mb-4 ${
                isRTL ? 'font-arabic' : ''
              }`}
            >
              {t('hero.title')}
            </p>
            <p
              className={`text-lg sm:text-xl md:text-2xl text-white/80 mb-4 ${
                isRTL ? 'font-arabic' : ''
              }`}
            >
              {t('hero.subtitle')}
            </p>
            <p
              className={`text-2xl sm:text-3xl font-bold text-primary-400 ${
                isRTL ? 'font-arabic' : ''
              }`}
            >
              {t('hero.years')}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
