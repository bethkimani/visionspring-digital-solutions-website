import React from 'react';
import type { Metadata } from 'next';
import { site } from '@/data/site';
import { termsAndConditions } from '@/data/legal';
import { LegalDocument } from '@/components/LegalDocument';

export const metadata: Metadata = {
  title: 'Terms and Conditions | VisionSpring Agency',
  description: 'Terms and conditions for using the VisionSpring Agency website and requesting digital services.',
  alternates: {
    canonical: `${site.url}/terms`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return <LegalDocument doc={termsAndConditions} />;
}
