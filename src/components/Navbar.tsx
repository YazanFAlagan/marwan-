'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const { t } = useTranslation();
  const { language, toggleLanguage, isRTL } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <Link
              href="/"
              className="flex items-center"
            >
              <span className={`text-lg sm:text-xl font-bold ${
                scrolled ? 'text-primary-700' : 'text-white'
              } ${isRTL ? 'font-arabic' : ''}`}>
                {isRTL ? 'مروان أحمد عوني الأغا' : 'Marwan Awny Elagha'}
              </span>
            </Link>
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <Image
                src="/Logo 1 .png"
                alt="Partner Logo 1"
                width={60}
                height={45}
                className="object-contain w-12 h-9 sm:w-14 sm:h-10 md:w-16 md:h-12"
                priority
              />
              <Image
                src="/Logo 2.png"
                alt="Partner Logo 2"
                width={60}
                height={45}
                className="object-contain w-12 h-9 sm:w-14 sm:h-10 md:w-16 md:h-12"
                priority
              />
              <Image
                src="/Logo 3.png"
                alt="Partner Logo 3"
                width={60}
                height={45}
                className="object-contain w-12 h-9 sm:w-14 sm:h-10 md:w-16 md:h-12"
                priority
              />
              <Image
                src="/Logo 4.png"
                alt="Partner Logo 4"
                width={60}
                height={45}
                className="object-contain w-12 h-9 sm:w-14 sm:h-10 md:w-16 md:h-12"
                priority
              />
              <Image
                src="/Logo 5.png"
                alt="Partner Logo 5"
                width={60}
                height={45}
                className="object-contain w-12 h-9 sm:w-14 sm:h-10 md:w-16 md:h-12"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {/* Dropdown Menu */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-1 font-medium transition-opacity duration-200 hover:opacity-70 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                } ${isRTL ? 'font-arabic' : ''}`}
              >
                <Menu size={18} />
                <ChevronDown size={16} />
              </button>
              
              {dropdownOpen && (
                <div className={`absolute ${isRTL ? 'right-0' : 'left-0'} mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50`}>
                  <Link
                    href="/work-plan"
                    onClick={() => setDropdownOpen(false)}
                    className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors ${isRTL ? 'text-right font-arabic' : 'text-left'}`}
                  >
                    {t('nav.workPlan')}
                  </Link>
                  <Link
                    href="/youth-advisors"
                    onClick={() => setDropdownOpen(false)}
                    className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors ${isRTL ? 'text-right font-arabic' : 'text-left'}`}
                  >
                    {t('nav.youthAdvisors')}
                  </Link>
                  <Link
                    href="/scout-movement"
                    onClick={() => setDropdownOpen(false)}
                    className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors ${isRTL ? 'text-right font-arabic' : 'text-left'}`}
                  >
                    {t('nav.scoutMovement')}
                  </Link>
                </div>
              )}
            </div>
            
            <Link
              href="/"
              className={`font-medium transition-opacity duration-200 hover:opacity-70 ${
                scrolled ? 'text-gray-700' : 'text-white'
              } ${isRTL ? 'font-arabic' : ''}`}
            >
              {t('nav.home')}
            </Link>
            
            <Link
              href="/news"
              className={`font-medium transition-opacity duration-200 hover:opacity-70 ${
                scrolled ? 'text-gray-700' : 'text-white'
              } ${isRTL ? 'font-arabic' : ''}`}
            >
              {t('nav.news')}
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-opacity duration-200 hover:opacity-70 ${
                scrolled ? 'text-gray-700' : 'text-white'
              } ${isRTL ? 'font-arabic' : ''}`}
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
              <span className={`text-sm font-medium ${language === 'en' ? 'font-arabic' : ''}`}>
                {language === 'en' ? 'العربية' : 'English'}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-opacity duration-200 hover:opacity-80 ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden pb-4 ${scrolled ? 'bg-white/95' : 'bg-black/30'}`}>
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-medium transition-opacity duration-200 hover:opacity-70 px-4 py-2 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                } ${isRTL ? 'font-arabic text-right' : 'text-left'}`}
              >
                {t('nav.home')}
              </Link>
              <Link
                href="/work-plan"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-medium transition-opacity duration-200 hover:opacity-70 px-4 py-2 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                } ${isRTL ? 'font-arabic text-right' : 'text-left'}`}
              >
                {t('nav.workPlan')}
              </Link>
              <Link
                href="/youth-advisors"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-medium transition-opacity duration-200 hover:opacity-70 px-4 py-2 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                } ${isRTL ? 'font-arabic text-right' : 'text-left'}`}
              >
                {t('nav.youthAdvisors')}
              </Link>
              <Link
                href="/scout-movement"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-medium transition-opacity duration-200 hover:opacity-70 px-4 py-2 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                } ${isRTL ? 'font-arabic text-right' : 'text-left'}`}
              >
                {t('nav.scoutMovement')}
              </Link>
              <Link
                href="/news"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-medium transition-opacity duration-200 hover:opacity-70 px-4 py-2 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                } ${isRTL ? 'font-arabic text-right' : 'text-left'}`}
              >
                {t('nav.news')}
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-medium transition-opacity duration-200 hover:opacity-70 px-4 py-2 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                } ${isRTL ? 'font-arabic text-right' : 'text-left'}`}
              >
                {t('nav.contact')}
              </Link>

              {/* Language Toggle in Mobile Menu */}
              <button
                onClick={() => {
                  toggleLanguage();
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-opacity duration-200 hover:opacity-80 mx-4 ${
                  scrolled
                    ? 'bg-primary-100 text-primary-700'
                    : 'bg-white/20 text-white'
                } ${isRTL ? 'flex-row-reverse' : ''}`}
                aria-label="Toggle language"
              >
                <Globe size={18} />
                <span className={`text-sm font-medium ${language === 'en' ? 'font-arabic' : ''}`}>
                  {language === 'en' ? 'العربية' : 'English'}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
