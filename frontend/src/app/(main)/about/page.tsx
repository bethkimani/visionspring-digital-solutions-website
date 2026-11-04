import React from 'react';
import type { Metadata } from 'next';
import { site } from '@/data/site';
import { mission, vision } from '@/data/about';
import { AboutPageClient } from '@/components/about/AboutPageClient';

export const metadata: Metadata = {
  title: 'About Us | Web Design & Software Company Nairobi — VisionSpring',
  description:
    'Learn about VisionSpring Agency in Nairobi, Kenya. We build business websites, custom software systems, online stores with M-Pesa, and help you get found on Google.',
  keywords: [
    'About VisionSpring Agency',
    'Web Design Company Nairobi Kenya',
    'Software Development Company Nairobi',
    'Business Website Developers Kenya',
    'Ecommerce Website with Mpesa Kenya',
    'School Website Design Kenya',
    'SEO Services Nairobi',
    'Website Designers in Nairobi',
  ],
  alternates: {
    canonical: `${site.url}/about`,
  },
  openGraph: {
    title: 'About Us | Web Design & Software Company Nairobi — VisionSpring',
    description:
      'Learn about VisionSpring Agency in Nairobi, Kenya. We build business websites, custom software systems, online stores with M-Pesa, and help you get found on Google.',
    url: `${site.url}/about`,
    siteName: site.name,
    type: 'website',
    images: [
      {
        url: `${site.url}/logo.png`,
        width: 512,
        height: 512,
        alt: 'About VisionSpring Agency - Web Design & Software in Nairobi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Web Design & Software Company Nairobi — VisionSpring',
    description:
      'Learn about VisionSpring Agency in Nairobi, Kenya. We build business websites, custom software systems, online stores with M-Pesa, and help you get found on Google.',
    images: [`${site.url}/logo.png`],
  },
};

export default function AboutPage() {
  const aboutJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About VisionSpring Agency',
    description: site.description,
    url: `${site.url}/about`,
    mainEntity: {
      '@type': ['Organization', 'ProfessionalService'],
      name: site.name,
      legalName: 'VisionSpring Digital Solutions Agency',
      url: site.url,
      logo: `${site.url}/logo.png`,
      email: site.email,
      telephone: '+254112280703',
      slogan: site.tagline,
      sameAs: [
        'https://www.facebook.com/profile.php?id=61595464059183',
        'https://www.instagram.com/visionspringagency/',
        'https://www.tiktok.com/@visionspringagency?lang=en-GB',
      ],
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
      knowsAbout: [
        'Website Development and Design',
        'Custom Web Applications',
        'Search Engine Optimization (SEO)',
        'E-Commerce & M-Pesa Daraja Integration',
        'Digital Advertising & Google Ads',
        'Brand Identity & UI/UX Design',
        'Social Media Management',
      ],
      description: `${mission} ${vision}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Nairobi',
        addressCountry: 'KE',
      },
    },
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(aboutJsonLd)}
      </script>

      <AboutPageClient />
    </>
  );
}
