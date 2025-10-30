'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-marwan.jpg')",
        }}
      />
      
      {/* Text Overlay on the left */}
      <div className="relative h-full flex items-start pt-32 sm:pt-0 sm:items-center">
        <div className="w-full px-6 sm:px-8 lg:px-12" style={{ marginLeft: 0, marginRight: 'auto' }}>
          <div 
            className="max-w-lg p-4 sm:p-6 lg:p-8" 
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.05)', 
              backdropFilter: 'blur(2px)',
              borderRadius: '16px',
              textAlign: 'left',
              direction: 'ltr',
              marginTop: '2rem',
              marginLeft: '0',
              marginRight: 'auto',
              maxWidth: '65%',
              width: 'fit-content'
            }}
          >
            {/* Name with purple color */}
            <h1 
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${isArabic ? 'font-arabic' : ''}`}
              style={{ color: '#562c92' }}
            >
              {isArabic ? 'مروان أحمد عوني الأغا' : 'Marwan Ahmed Awny Elagha'}
            </h1>
            
            {/* Black line separator - half width and thin */}
            <div 
              className="mb-4"
              style={{ 
                width: '50%',
                height: '3px', 
                backgroundColor: 'black',
                marginLeft: '0',
                marginRight: 'auto'
              }}
            />
            
            {/* Description text in black - not bold */}
            <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl text-black leading-relaxed ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? (
                <>
                  مرشح جمهورية مصر العربية<br />
                  لعضوية لجنة مستشاري الشباب<br />
                  للجنة الكشفية العربية 2025-2028
                </>
              ) : (
                <>
                  Candidate of Egypt for Membership<br />
                  of the Youth Advisors Committee<br />
                  of the Arab Scout Committee (2025–2028)
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
