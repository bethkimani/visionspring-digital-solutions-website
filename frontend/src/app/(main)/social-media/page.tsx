import React from 'react';
import type { Metadata } from 'next';
import { site } from '@/data/site';
import { SocialMediaPageClient } from '@/components/social/SocialMediaPageClient';

export const metadata: Metadata = {
  title: 'Social Media Marketing & Content Creation Kenya | VisionSpring',
  description:
    'Professional social media management, branded graphic design, and targeted Facebook, Instagram & Google Ads for businesses in Kenya. See our work and packages.',
  keywords: [
    'Social Media Management Kenya',
    'Social Media Marketing Agency Nairobi',
    'Instagram Marketing Kenya',
    'Facebook Ads Management Nairobi',
    'Content Creation for Business Kenya',
    'Digital Marketing Packages Nairobi',
    'VisionSpring Social Media',
  ],
  alternates: {
    canonical: `${site.url}/social-media`,
  },
  openGraph: {
    title: 'Social Media Marketing & Content Creation Kenya | VisionSpring',
    description:
      'Consistent branded content, social media post designs, and targeted ads that connect you with more customers across Kenya.',
    url: `${site.url}/social-media`,
    siteName: site.name,
    type: 'website',
    images: [
      {
        url: `${site.url}/logo.png`,
        width: 512,
        height: 512,
        alt: 'VisionSpring Agency Social Media Marketing Kenya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Marketing & Content Creation Kenya | VisionSpring',
    description:
      'Consistent branded content, social media post designs, and targeted ads that connect you with more customers across Kenya.',
    images: [`${site.url}/logo.png`],
  },
};

export default function SocialMediaPage() {
  const socialJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Social Media Management and Digital Marketing',
    description:
      'Content planning, visual post design, Google Ads, Meta Ads, and comprehensive social media campaign management.',
    url: `${site.url}/social-media`,
    provider: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
      telephone: '+254112280703',
      email: site.email,
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'Kenya',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Worldwide',
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(socialJsonLd)}
      </script>

      <SocialMediaPageClient />
    </>
  );
}
