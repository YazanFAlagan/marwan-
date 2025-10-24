'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import { Download } from 'lucide-react';
import Gallery from './Gallery';

export default function CVSection() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const handleDownloadCV = () => {
    // TODO: Replace with actual CV PDF file path
    // For now, this will trigger a download of a placeholder
    const link = document.createElement('a');
    link.href = '/cv-marwan-elagha.pdf';
    link.download = 'CV-Marwan-Ahmed-El-Agha.pdf';
    link.click();
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${
              isRTL ? 'font-arabic' : ''
            }`}
          >
            {t('cv.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full" />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* CV Content - Order changes based on RTL */}
          <div className={`${isRTL ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
              <p
                className={`text-gray-700 leading-relaxed whitespace-pre-line text-base sm:text-lg ${
                  isRTL ? 'font-arabic text-right' : 'text-left'
                }`}
              >
                {t('cv.content')}
              </p>

              {/* Download CV Button */}
              <button
                onClick={handleDownloadCV}
                className={`mt-8 inline-flex items-center gap-3 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-md hover:shadow-lg ${
                  isRTL ? 'font-arabic' : ''
                }`}
              >
                <Download size={20} />
                {t('cv.download')}
              </button>
            </div>
          </div>

          {/* Gallery - Order changes based on RTL */}
          <div className={`${isRTL ? 'lg:order-1' : 'lg:order-2'}`}>
            <Gallery />
          </div>
        </div>
      </div>
    </section>
  );
}
