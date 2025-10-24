'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CVSection from '@/components/CVSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <CVSection />
    </main>
  );
}
