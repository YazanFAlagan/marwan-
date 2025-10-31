'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function ScoutMovementPage() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <section className="flex-grow pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-8 ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>
            {t('scoutMovement.title')}
          </h1>
          
          {/* Historical Image */}
          <div className="mb-12 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/scout-history.jpg"
              alt="Egyptian Scouts Historical Photo"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
            <p className={`text-sm text-gray-600 mt-3 px-2 ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>
              {isRTL 
                ? 'صورة تاريخية للكشافة المصرية - من أرشيف الحركة الكشفية المصرية' 
                : 'Historical photo of Egyptian Scouts - From the Egyptian Scout Archive'}
            </p>
          </div>
          
          {/* Article Content */}
          <article className={`prose prose-lg max-w-none ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>
            <div className="text-gray-800 leading-relaxed space-y-6">
              {t('scoutMovement.content').split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          {/* Additional Info Box */}
          <div className={`mt-12 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border-l-4 ${isRTL ? 'border-r-4 border-l-0' : 'border-l-4'} border-blue-600`}>
            <p className={`text-gray-700 italic ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>
              {isRTL 
                ? 'للمزيد من المعلومات حول تاريخ الحركة الكشفية في مصر، يمكنكم زيارة الأرشيف الكشفي المصري - أكبر أرشيف كشفي على مستوى الوطن العربي.'
                : 'For more information about the history of the Scout Movement in Egypt, you can visit the Egyptian Scout Archive - the largest scout archive in the Arab world.'}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
