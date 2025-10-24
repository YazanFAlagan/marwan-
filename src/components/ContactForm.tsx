'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import { Send, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function ContactForm() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Spam protection
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) {
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || t('contact.form.error'));
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(t('contact.form.error'));
    }
  };

  // Social media links - Replace with actual links
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/marwanelagha',
      color: 'hover:bg-blue-600',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/marwanelagha',
      color: 'hover:bg-pink-600',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/201234567890', // Replace with actual number
      color: 'hover:bg-green-600',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:marwan@example.com', // Replace with actual email
      color: 'hover:bg-gray-600',
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
              className={`flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg transition-all ${link.color} shadow-md hover:shadow-lg`}
              aria-label={link.name}
            >
              <link.icon size={20} />
              <span className="font-medium">{link.name}</span>
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
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
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
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all ${
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.subject}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none ${
                isRTL ? 'text-right font-arabic' : 'text-left'
              }`}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'sending'}
            className={`w-full flex items-center justify-center gap-3 px-6 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${
              isRTL ? 'font-arabic' : ''
            }`}
          >
            <Send size={20} />
            {status === 'sending' ? t('contact.form.sending') : t('contact.form.send')}
          </button>

          {/* Status Messages */}
          {status === 'success' && (
            <div
              className={`p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg ${
                isRTL ? 'font-arabic text-right' : 'text-left'
              }`}
            >
              {t('contact.form.success')}
            </div>
          )}

          {status === 'error' && (
            <div
              className={`p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg ${
                isRTL ? 'font-arabic text-right' : 'text-left'
              }`}
            >
              {errorMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
