'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import { Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo and About */}
          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
              <h3 className={`text-xl font-bold ${isRTL ? 'font-arabic' : ''}`}>
                {isRTL ? 'مروان أحمد عوني الأغا' : 'Marwan Awny Elagha'}
              </h3>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="bg-white/10 rounded-lg p-2 w-24 h-16 flex items-center justify-center">
                  <Image
                    src="/Logo 1 .png"
                    alt="Partner Logo 1"
                    width={80}
                    height={50}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="bg-white/10 rounded-lg p-2 w-24 h-16 flex items-center justify-center">
                  <Image
                    src="/Logo 2.png"
                    alt="Partner Logo 2"
                    width={80}
                    height={50}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="bg-white/10 rounded-lg p-2 w-24 h-16 flex items-center justify-center">
                  <Image
                    src="/Logo 3.png"
                    alt="Partner Logo 3"
                    width={80}
                    height={50}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="bg-white/10 rounded-lg p-2 w-24 h-16 flex items-center justify-center">
                  <Image
                    src="/Logo 4.png"
                    alt="Partner Logo 4"
                    width={80}
                    height={50}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="bg-white/10 rounded-lg p-2 w-24 h-16 flex items-center justify-center">
                  <Image
                    src="/Logo 5.png"
                    alt="Partner Logo 5"
                    width={80}
                    height={50}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>
            <p className={`text-gray-400 ${isRTL ? 'font-arabic' : ''}`}>
              {t('hero.title')}
            </p>
          </div>

          {/* Quick Links */}
          <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
            <h4 className={`text-lg font-semibold mb-4 ${isRTL ? 'font-arabic' : ''}`}>
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className={`text-gray-400 transition-opacity duration-200 hover:opacity-70 ${
                    isRTL ? 'font-arabic' : ''
                  }`}
                >
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  href="/work-plan"
                  className={`text-gray-400 transition-opacity duration-200 hover:opacity-70 ${
                    isRTL ? 'font-arabic' : ''
                  }`}
                >
                  {t('nav.workPlan')}
                </Link>
              </li>
              <li>
                <Link
                  href="/youth-advisors"
                  className={`text-gray-400 transition-opacity duration-200 hover:opacity-70 ${
                    isRTL ? 'font-arabic' : ''
                  }`}
                >
                  {t('nav.youthAdvisors')}
                </Link>
              </li>
              <li>
                <Link
                  href="/scout-movement"
                  className={`text-gray-400 transition-opacity duration-200 hover:opacity-70 ${
                    isRTL ? 'font-arabic' : ''
                  }`}
                >
                  {t('nav.scoutMovement')}
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className={`text-gray-400 transition-opacity duration-200 hover:opacity-70 ${
                    isRTL ? 'font-arabic' : ''
                  }`}
                >
                  {t('nav.news')}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`text-gray-400 transition-opacity duration-200 hover:opacity-70 ${
                    isRTL ? 'font-arabic' : ''
                  }`}
                >
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-gray-400 text-sm ${isRTL ? 'font-arabic' : ''}`}>
              {new Date().getFullYear()} © {isRTL ? 'مروان أحمد عوني الأغا' : 'Marwan Awny Elagha'}. {t('footer.rights')}
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/marwanawnyelagha/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-opacity duration-200 hover:opacity-70"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/marwan.awny?igsh=MXR4a3pwbzE0eHQwOA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-opacity duration-200 hover:opacity-70"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/marwanawny/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-opacity duration-200 hover:opacity-70"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
