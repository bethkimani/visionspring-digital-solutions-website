import React from 'react';
import type { Metadata } from 'next';
import { site } from '@/data/site';
import { privacyPolicy } from '@/data/legal';
import { LegalDocument } from '@/components/LegalDocument';

export const metadata: Metadata = {
  title: 'Privacy Policy | VisionSpring Agency',
  description: 'How VisionSpring Agency collects, uses, and safeguards personal information submitted through this website.',
  alternates: {
    canonical: `${site.url}/privacy-policy`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return <LegalDocument doc={privacyPolicy} />;
}
