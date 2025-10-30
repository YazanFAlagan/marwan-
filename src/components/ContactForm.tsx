'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import { Send, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [state, handleSubmit] = useForm('xjkpewvq', {
    data: {
      _honeypot: '', // This will be set by the hidden field
    },
    onError: (error: any) => {
      console.error('Form submission error:', error);
    },
  });

  // Safely handle Formspree's state
  const hasErrors = state.errors && state.errors.length > 0;
  const status = state.submitting 
    ? 'sending' 
    : state.succeeded 
      ? 'success' 
      : hasErrors 
        ? 'error' 
        : 'idle';

  // Social media links (formal, no hover effects)
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/marwanawnyelagha/',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/marwan.awny?igsh=MXR4a3pwbzE0eHQwOA%3D%3D&utm_source=qr',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/marwanawny/',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Social Media Links */}
      <div className="mb-12">
        <h3
          className={`text-xl font-semibold text-gray-800 mb-6 text-center ${
            isRTL ? 'font-arabic' : ''
          }`}
        >
          {t('contact.social')}
        </h3>
        <div className="flex justify-center gap-4 flex-wrap">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg shadow-md transition-opacity duration-200 hover:opacity-85"
              style={{ backgroundColor: '#94bad1', color: 'black' }}
              aria-label={link.name}
            >
              <link.icon size={20} />
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot field (hidden) */}
          <input
            type="text"
            name="_honeypot"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className={`block text-sm font-medium text-gray-700 mb-2 ${
                isRTL ? 'font-arabic text-right' : 'text-left'
              }`}
            >
              {t('contact.form.name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                isRTL ? 'text-right font-arabic' : 'text-left'
              }`}
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className={`block text-sm font-medium text-gray-700 mb-2 ${
                isRTL ? 'font-arabic text-right' : 'text-left'
              }`}
            >
              {t('contact.form.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
                isRTL ? 'text-right font-arabic' : 'text-left'
              }`}
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className={`block text-sm font-medium text-gray-700 mb-2 ${
                isRTL ? 'font-arabic text-right' : 'text-left'
              }`}
            >
              {t('contact.form.subject')}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
                isRTL ? 'text-right font-arabic' : 'text-left'
              }`}
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className={`block text-sm font-medium text-gray-700 mb-2 ${
                isRTL ? 'font-arabic text-right' : 'text-left'
              }`}
            >
              {t('contact.form.message')}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none ${
                isRTL ? 'text-right font-arabic' : 'text-left'
              }`}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={state.submitting}
            className={`w-full flex items-center justify-center gap-3 px-6 py-4 rounded-lg shadow-md transition-opacity duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:opacity-50 ${
              isRTL ? 'font-arabic' : ''
            }`}
            style={{ backgroundColor: '#94bad1', color: 'black' }}
          >
            <Send size={20} />
            {status === 'sending' ? t('contact.form.sending') : t('contact.form.send')}
          </button>

          {/* Status Messages */}
          {state.succeeded ? (
            <div
              className={`p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg ${
                isRTL ? 'font-arabic text-right' : 'text-left'
              }`}
            >
              {t('contact.form.success')}
            </div>
          ) : (
            <>
              {state.errors && (
                <div className="space-y-2">
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                    className={`block p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg ${
                      isRTL ? 'font-arabic text-right' : 'text-left'
                    }`}
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className={`block p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg ${
                      isRTL ? 'font-arabic text-right' : 'text-left'
                    }`}
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className={`block p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg ${
                      isRTL ? 'font-arabic text-right' : 'text-left'
                    }`}
                  />
                  {Object.keys(state.errors).length > 0 && (
                  <div className={`p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg ${
                    isRTL ? 'font-arabic text-right' : 'text-left'
                  }`}>
                    {t('contact.form.error')}
                  </div>
                )}
                </div>
              )}
            </>
          )}
        </form>
      </div>
    </div>
  );
}
