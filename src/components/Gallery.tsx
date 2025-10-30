'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Gallery() {
  const { isRTL } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Portrait photos - Replace with your actual photo paths
  const images = [
    {
      id: 1,
      src: '/1.jpg',
      alt: 'Scouting Event 1',
      captionEn: 'World Scout Conference',
      captionAr: 'المؤتمر الكشفي العالمي'
    },
    {
      id: 2,
      src: '/2.jpg',
      alt: 'Scouting Event 2',
      captionEn: 'Arab Scout Committee',
      captionAr: 'اللجنة الكشفية العربية'
    },
    {
      id: 3,
      src: '/3.jpg',
      alt: 'Scouting Event 3',
      captionEn: 'Youth Leadership Forum',
      captionAr: 'منتدى القيادة الشبابية'
    },
    {
      id: 4,
      src: '/4.jpg',
      alt: 'Scouting Event 4',
      captionEn: 'International Jamboree',
      captionAr: 'المخيم الكشفي الدولي'
    },
    {
      id: 5,
      src: '/5.jpg',
      alt: 'Scouting Event 5',
      captionEn: 'Regional Training',
      captionAr: 'التدريب الإقليمي'
    },
    {
      id: 6,
      src: '/6.jpg',
      alt: 'Scouting Event 6',
      captionEn: 'Community Service',
      captionAr: 'خدمة المجتمع'
    },
    {
      id: 7,
      src: '/7.jpg',
      alt: 'Scouting Event 7',
      captionEn: 'Youth Empowerment',
      captionAr: 'تمكين الشباب'
    },
    {
      id: 8,
      src: '/8.jpg',
      alt: 'Scouting Event 8',
      captionEn: 'Leadership Workshop',
      captionAr: 'ورشة القيادة'
    },
    {
      id: 9,
      src: '/9.jpg',
      alt: 'Scouting Event 9',
      captionEn: 'Environmental Initiative',
      captionAr: 'مبادرة بيئية'
    },
    {
      id: 10,
      src: '/10.jpg',
      alt: 'Scouting Event 10',
      captionEn: 'Peace Building',
      captionAr: 'بناء السلام'
    },
    {
      id: 11,
      src: '/11.jpg',
      alt: 'Scouting Event 11',
      captionEn: 'Cultural Exchange',
      captionAr: 'التبادل الثقافي'
    },
    {
      id: 12,
      src: '/12.jpg',
      alt: 'Scouting Event 12',
      captionEn: 'Skills Development',
      captionAr: 'تطوير المهارات'
    },
    {
      id: 13,
      src: '/13.jpg',
      alt: 'Scouting Event 13',
      captionEn: 'Global Partnership',
      captionAr: 'الشراكة العالمية'
    },
    {
      id: 14,
      src: '/14.jpg',
      alt: 'Scouting Event 14',
      captionEn: 'Youth Achievement',
      captionAr: 'إنجاز الشباب'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="relative w-full max-w-2xl mx-auto">
        {/* Main Image Display */}
        <div 
          className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl bg-gray-100 cursor-pointer group"
          onClick={() => setIsLightboxOpen(true)}
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
            quality={85}
            priority={currentIndex === 0} // Only prioritize first image
            loading={currentIndex === 0 ? 'eager' : 'lazy'}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABykX//Z"
          />
          
          {/* Hover overlay hint */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">
              {isRTL ? 'انقر للتكبير' : 'Click to enlarge'}
            </span>
          </div>
        
          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-10"
            aria-label="Previous photo"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-10"
            aria-label="Next photo"
          >
            <ChevronRight size={24} />
          </button>
        </div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center gap-2 mt-4 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => goToSlide(index)}
            className={`relative flex-shrink-0 w-16 h-20 rounded overflow-hidden transition-all duration-200 ${
              index === currentIndex 
                ? 'ring-4 ring-primary-600 scale-110' 
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="64px"
            />
          </button>
        ))}
      </div>

        {/* Counter */}
        <div className="text-center mt-4 text-gray-600">
          <span className="font-medium">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-200 z-50"
            aria-label="Previous photo"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-200 z-50"
            aria-label="Next photo"
          >
            <ChevronRight size={32} />
          </button>

          {/* Full Size Image */}
          <div 
            className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
