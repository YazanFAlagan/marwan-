'use client';

import React from 'react';
import Image from 'next/image';

export default function Gallery() {
  // Placeholder images - Replace with actual scouting photos
  const images = [
    {
      id: 1,
      src: 'https://via.placeholder.com/400x300/16a34a/ffffff?text=Scouting+Event+1',
      alt: 'Scouting Event 1',
    },
    {
      id: 2,
      src: 'https://via.placeholder.com/400x300/15803d/ffffff?text=Scouting+Event+2',
      alt: 'Scouting Event 2',
    },
    {
      id: 3,
      src: 'https://via.placeholder.com/400x300/166534/ffffff?text=Scouting+Event+3',
      alt: 'Scouting Event 3',
    },
    {
      id: 4,
      src: 'https://via.placeholder.com/400x300/14532d/ffffff?text=Scouting+Event+4',
      alt: 'Scouting Event 4',
    },
    {
      id: 5,
      src: 'https://via.placeholder.com/400x300/22c55e/ffffff?text=Scouting+Event+5',
      alt: 'Scouting Event 5',
    },
    {
      id: 6,
      src: 'https://via.placeholder.com/400x300/4ade80/ffffff?text=Scouting+Event+6',
      alt: 'Scouting Event 6',
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
      ))}
    </div>
  );
}
