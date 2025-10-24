'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export default function Navbar() {
  const { t } = useTranslation();
  const { language, toggleLanguage, isRTL } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b-2 border-primary-200'
          : 'bg-black/30 backdrop-blur-sm border-b border-white/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <span className={`text-xl font-bold ${
              scrolled ? 'text-primary-700' : 'text-white'
            }`}>
              {isRTL ? 'م. الأغا' : 'M. Elagha'}
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className={`font-medium transition-opacity duration-200 hover:opacity-70 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {t('nav.home')}
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-opacity duration-200 hover:opacity-70 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {t('nav.contact')}
            </Link>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-opacity duration-200 hover:opacity-80 ${
                scrolled
                  ? 'bg-primary-100 text-primary-700'
                  : 'bg-white/20 text-white'
              }`}
              aria-label="Toggle language"
            >
              <Globe size={18} />
              <span className="text-sm font-medium">
                {language === 'en' ? 'العربية' : 'English'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
