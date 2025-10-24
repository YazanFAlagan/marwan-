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
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/marwan.jpg')",
          backgroundPosition: '-100px 20px',
        }}
      >
        {/* Gradient Overlay - darker on left, lighter on right where person is */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
        {/* Spotlight effect on the person */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'radial-gradient(circle at 20% 40%, transparent 15%, rgba(0,0,0,0.3) 40%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div
            className={`max-w-2xl ml-auto ${
              isRTL ? 'text-right' : 'text-left'
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

      {/* Scroll Indicator removed for formal style */}
    </section>
  );
}
