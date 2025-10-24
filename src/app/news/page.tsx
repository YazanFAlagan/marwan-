'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText } from 'lucide-react';
import { newsData } from '@/data/newsData';

export default function NewsPage() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* News Grid - Clean Layout */}
      <section className="flex-grow pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {newsData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsData.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.slug}`}
                  className="flex flex-col group cursor-pointer"
                >
                  {/* Image */}
                  <div className="w-full aspect-[4/3] bg-gray-200 mb-4 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                    {item.imageUrl ? (
                      <img 
                        src={item.imageUrl} 
                        alt={isRTL ? item.titleAr : item.titleEn}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <FileText size={64} className="text-gray-400" />
                      </div>
                    )}
                  </div>

                  {/* Date */}
                  <time className={`text-sm text-gray-500 mb-3 ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>
                    {new Date(item.date).toLocaleDateString(isRTL ? 'ar-EG' : 'en-US', {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </time>

                  {/* Title */}
                  <h2 className={`text-xl font-bold text-gray-900 leading-tight group-hover:text-primary-600 transition-colors duration-200 ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>
                    {isRTL ? item.titleAr : item.titleEn}
                  </h2>
                </Link>
              ))}
            </div>
          ) : (
            <div className={`text-center py-20 ${isRTL ? 'font-arabic' : ''}`}>
              <FileText size={80} className="mx-auto text-gray-300 mb-6" />
              <p className="text-2xl text-gray-600 mb-3">{t('news.noNews')}</p>
              <p className="text-lg text-gray-500">{t('news.comingSoon')}</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
