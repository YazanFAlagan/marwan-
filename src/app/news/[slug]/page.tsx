'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, ArrowLeft, FileText } from 'lucide-react';
import { getNewsBySlug, newsData } from '@/data/newsData';

export default function NewsDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  
  const slug = params.slug as string;
  const newsItem = getNewsBySlug(slug);

  // Get related news (other news items excluding current one)
  const relatedNews = newsData.filter(item => item.slug !== slug).slice(0, 3);

  if (!newsItem) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {isRTL ? 'الخبر غير موجود' : 'News not found'}
            </h1>
            <button
              onClick={() => router.push('/news')}
              className="text-primary-600 hover:text-primary-700"
            >
              {isRTL ? 'العودة إلى الأخبار' : 'Back to News'}
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <article className="flex-grow pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => router.push('/news')}
            className={`flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8 ${
              isRTL ? 'flex-row-reverse font-arabic' : ''
            }`}
          >
            <ArrowLeft size={20} className={isRTL ? 'rotate-180' : ''} />
            <span>{isRTL ? 'العودة إلى الأخبار' : 'Back to News'}</span>
          </button>

          {/* Featured Image */}
          <div className="w-full aspect-[16/9] bg-gray-200 mb-8 overflow-hidden rounded-lg">
            {newsItem.imageUrl ? (
              <img 
                src={newsItem.imageUrl} 
                alt={isRTL ? newsItem.titleAr : newsItem.titleEn}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary-50 to-primary-100" />
            )}
          </div>

          {/* Date */}
          <div className={`flex items-center gap-2 text-gray-500 mb-4 ${
            isRTL ? 'flex-row-reverse font-arabic' : ''
          }`}>
            <Calendar size={18} />
            <time>
              {new Date(newsItem.date).toLocaleDateString(isRTL ? 'ar-EG' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>

          {/* Title */}
          <h1 className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-6 ${
            isRTL ? 'text-right font-arabic' : 'text-left'
          }`}>
            {isRTL ? newsItem.titleAr : newsItem.titleEn}
          </h1>

          {/* Content */}
          <div className={`prose prose-lg max-w-none ${
            isRTL ? 'text-right font-arabic' : 'text-left'
          }`}>
            {(isRTL ? newsItem.contentAr : newsItem.contentEn).split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      {/* Related News Section */}
      {relatedNews.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-2xl font-bold text-gray-900 mb-8 ${
              isRTL ? 'text-right font-arabic' : 'text-left'
            }`}>
              {isRTL ? 'أخبار أخرى' : 'Other News'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedNews.map((item) => (
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
                  <h3 className={`text-xl font-bold text-gray-900 leading-tight group-hover:text-primary-600 transition-colors duration-200 ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>
                    {isRTL ? item.titleAr : item.titleEn}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
