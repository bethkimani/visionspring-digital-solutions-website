import React from 'react';
import type { Metadata } from 'next';
import { NotFoundPage } from '@/components/NotFoundPage';

export const metadata: Metadata = {
  title: '404 — Page Not Found | VisionSpring Agency',
  description: 'The page you are looking for does not exist or may have been moved.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return <NotFoundPage />;
}
