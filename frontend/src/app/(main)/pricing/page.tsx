import React from 'react';
import type { Metadata } from 'next';
import { site } from '@/data/site';
import { pricingFaqs } from '@/data/pricing';
import { PricingPageClient } from '@/components/pricing/PricingPageClient';

export const metadata: Metadata = {
  title: 'Packages & Pricing | Web Design & Software Costs Kenya — VisionSpring',
  description:
    'Clear, transparent pricing packages for website development, custom software systems, e-commerce stores with M-Pesa, Google SEO, and digital marketing in Nairobi, Kenya.',
  keywords: [
    'Website Development Pricing Kenya',
    'Web Design Packages Nairobi',
    'SEO Pricing Kenya',
    'Ecommerce Website Cost Kenya',
    'Custom Software Cost Kenya',
    'Social Media Management Packages Kenya',
    'Digital Agency Packages Nairobi',
    'VisionSpring Agency Pricing',
  ],
  alternates: {
    canonical: `${site.url}/pricing`,
  },
  openGraph: {
    title: 'Packages & Pricing | Web Design & Software Costs Kenya — VisionSpring',
    description:
      'Clear, transparent packages for websites, SEO, social media, ads, and custom software in Kenya.',
    url: `${site.url}/pricing`,
    siteName: site.name,
    type: 'website',
    images: [
      {
        url: `${site.url}/logo.png`,
        width: 512,
        height: 512,
        alt: 'VisionSpring Agency Pricing and Packages in Kenya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Packages & Pricing | Web Design & Software Costs Kenya — VisionSpring',
    description:
      'Clear, transparent packages for websites, SEO, social media, ads, and custom software in Kenya.',
    images: [`${site.url}/logo.png`],
  },
};

export default function PricingPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: 'VisionSpring Agency Pricing FAQ',
    url: `${site.url}/pricing`,
    mainEntity: pricingFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </script>

      <PricingPageClient />
    </>
  );
}
