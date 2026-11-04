import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { NotFoundPage } from '@/components/NotFoundPage';

export const metadata: Metadata = {
  title: '404 — Page Not Found | VisionSpring Agency',
  description: 'The page you are looking for does not exist or may have been moved.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function RootNotFound() {
  return (
    <>
      <Navbar />
      <main>
        <NotFoundPage />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
