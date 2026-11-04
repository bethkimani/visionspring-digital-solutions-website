import React from 'react';
import type { Metadata } from 'next';
import { site } from '@/data/site';
import { projects } from '@/data/projects';
import { PortfolioPageClient } from '@/components/portfolio/PortfolioPageClient';

export const metadata: Metadata = {
  title: 'Our Work & Client Projects | Web Design Portfolio Kenya — VisionSpring',
  description:
    'Explore live websites, e-commerce stores, and corporate platforms built by VisionSpring Agency in Kenya. See real results for businesses across Nairobi and East Africa.',
  keywords: [
    'Web Design Portfolio Kenya',
    'Website Development Projects Nairobi',
    'Client Case Studies Kenya',
    'E-commerce Websites Built in Kenya',
    'Corporate Websites Nairobi',
    'VisionSpring Agency Portfolio',
    'Dallian Luxe Hair Website',
    'Synowatt Power Solar Website',
    'UrbanMall Kenya',
  ],
  alternates: {
    canonical: `${site.url}/portfolio`,
  },
  openGraph: {
    title: 'Our Work & Client Projects | Web Design Portfolio Kenya — VisionSpring',
    description:
      'Explore live business websites, online stores, and corporate portals built by VisionSpring Agency in Kenya.',
    url: `${site.url}/portfolio`,
    siteName: site.name,
    type: 'website',
    images: [
      {
        url: `${site.url}/logo.png`,
        width: 512,
        height: 512,
        alt: 'VisionSpring Agency Portfolio - Web Design in Kenya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work & Client Projects | Web Design Portfolio Kenya — VisionSpring',
    description:
      'Explore live business websites, online stores, and corporate portals built by VisionSpring Agency in Kenya.',
    images: [`${site.url}/logo.png`],
  },
};

export default function PortfolioPage() {
  const published = projects.filter((p) => p.status === 'published');

  const portfolioJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'VisionSpring Agency Portfolio',
    description: 'A showcase of live websites and custom applications delivered by VisionSpring Agency.',
    url: `${site.url}/portfolio`,
    hasPart: published.map((p) => ({
      '@type': 'CreativeWork',
      name: p.title,
      description: p.summary,
      url: `${site.url}/portfolio/${p.slug}`,
      creator: {
        '@type': 'Organization',
        name: site.name,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(portfolioJsonLd)}
      </script>

      <PortfolioPageClient />
    </>
  );
}
