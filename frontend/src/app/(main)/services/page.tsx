import React from 'react';
import type { Metadata } from 'next';
import { site } from '@/data/site';
import { services } from '@/data/services';
import { ServicesPageClient } from '@/components/services/ServicesPageClient';

export const metadata: Metadata = {
  title: 'Web Design, Software & SEO Services in Kenya | VisionSpring Agency',
  description:
    'Professional web design, custom software systems, e-commerce stores with M-Pesa, Google SEO, and digital marketing in Nairobi, Kenya. Get a clear plan and honest quote.',
  keywords: [
    'Website Design Services Kenya',
    'Web Development Company Nairobi',
    'Ecommerce Website with Mpesa Kenya',
    'Custom Software Development Kenya',
    'SEO Services in Kenya',
    'Google Ads Agency Nairobi',
    'Social Media Management Kenya',
    'Logo & Graphic Design Nairobi',
    'School Website Design Kenya',
    'Mobile Friendly Websites Nairobi',
  ],
  alternates: {
    canonical: `${site.url}/services`,
  },
  openGraph: {
    title: 'Web Design, Software & SEO Services in Kenya | VisionSpring Agency',
    description:
      'Professional business websites, custom software, e-commerce stores with M-Pesa, and Google SEO in Nairobi, Kenya. Tailored solutions for growing businesses.',
    url: `${site.url}/services`,
    siteName: site.name,
    type: 'website',
    images: [
      {
        url: `${site.url}/logo.png`,
        width: 512,
        height: 512,
        alt: 'VisionSpring Agency Digital Services in Kenya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design, Software & SEO Services in Kenya | VisionSpring Agency',
    description:
      'Professional business websites, custom software, e-commerce stores with M-Pesa, and Google SEO in Nairobi, Kenya. Tailored solutions for growing businesses.',
    images: [`${site.url}/logo.png`],
  },
};

export default function ServicesPage() {
  const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${site.url}/services#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: site.url,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: `${site.url}/services`,
          },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `${site.url}/services#catalog`,
        name: 'VisionSpring Agency Digital Services',
        description: 'Comprehensive digital services for modern businesses and organizations.',
        itemListElement: services.map((s, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          item: {
            '@type': 'Service',
            name: s.title,
            description: s.summary,
            url: `${site.url}/services/${s.slug}`,
            provider: {
              '@type': 'Organization',
              name: site.name,
              url: site.url,
            },
          },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(servicesJsonLd)}
      </script>

      <ServicesPageClient />
    </>
  );
}
