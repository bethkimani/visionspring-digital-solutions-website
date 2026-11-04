import type { Metadata } from 'next';
import { HomeHero } from '@/components/home/HomeHero';
import { HomeAbout } from '@/components/home/HomeAbout';
import { HomeServices } from '@/components/home/HomeServices';
import { HomePortfolio } from '@/components/home/HomePortfolio';
import { HomeSocial } from '@/components/home/HomeSocial';
import { HomeWhyProcess } from '@/components/home/HomeWhyProcess';
import { HomeBlog } from '@/components/home/HomeBlog';
import { CtaBanner } from '@/components/CtaBanner';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: {
    absolute: 'Web Design & Custom Web Apps Kenya | VisionSpring Agency',
  },
  description:
    'VisionSpring Agency is a premier web design and software agency in Nairobi, Kenya. We build fast websites, custom web apps, and rank businesses #1 on Google with SEO.',
  keywords: [
    'Web Design Agency Kenya',
    'Website Development Company Nairobi',
    'Custom Web Applications Kenya',
    'Software Development Company Nairobi',
    'SEO Services Kenya',
    'Google SEO Agency Nairobi',
    'E-commerce Website Development Kenya',
    'M-Pesa Integration Web Developers',
    'Digital Marketing Agency Kenya',
    'VisionSpring Agency',
  ],
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: 'Web Design & Custom Web Apps Kenya | VisionSpring Agency',
    description:
      'Premier web development and SEO agency in Nairobi, Kenya. Build fast websites, custom web applications, and rank top on Google.',
    url: site.url,
    siteName: site.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${site.url}/logo.png`,
        width: 512,
        height: 512,
        alt: 'VisionSpring Agency - Web Design & Custom Software in Kenya',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design & Custom Web Apps Kenya | VisionSpring Agency',
    description:
      'Premier web development and SEO agency in Nairobi, Kenya. Build fast websites, custom web applications, and rank top on Google.',
    images: [`${site.url}/logo.png`],
  },
};

export default function HomePage() {
  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'ProfessionalService'],
        '@id': `${site.url}/#organization`,
        name: site.name,
        legalName: 'VisionSpring Digital Solutions Agency',
        url: site.url,
        logo: `${site.url}/logo.png`,
        image: `${site.url}/logo.png`,
        description: site.description,
        email: site.email,
        telephone: '+254112280703',
        priceRange: '$$',
        slogan: site.tagline,
        sameAs: [
          'https://www.facebook.com/profile.php?id=61595464059183',
          'https://www.instagram.com/visionspringagency/',
          'https://www.tiktok.com/@visionspringagency?lang=en-GB',
        ],
        knowsAbout: [
          'Web Design and Development',
          'Custom Web Applications',
          'Search Engine Optimization (SEO)',
          'E-Commerce Development & M-Pesa Integration',
          'Digital Marketing & Google Ads',
          'Brand Identity & UI/UX Design',
          'Software Engineering in Kenya',
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Nairobi',
          addressCountry: 'KE',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -1.2921,
          longitude: 36.8219,
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
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Digital Services Catalog',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Website Design and Development',
                description:
                  'High-performance, mobile-responsive corporate websites, e-commerce stores, and institutional web portals.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Custom Web Applications',
                description:
                  'Scalable, bespoke web portals, automated business systems, dashboards, and integrations.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Search Engine Optimization (SEO)',
                description:
                  'Technical SEO, on-page optimization, content strategy, and local search rankings on Google.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Digital Advertising (Google Ads & Meta Ads)',
                description:
                  'High-ROI search campaigns, social advertising, lead generation, and retargeting.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Social Media Management',
                description:
                  'Content strategy, visual design, community engagement, and brand storytelling across social channels.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Brand Identity & Design',
                description:
                  'Professional logo design, corporate branding guidelines, visual collateral, and digital design.',
              },
            },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        publisher: {
          '@id': `${site.url}/#organization`,
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(homeJsonLd)}
      </script>

      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomePortfolio />
      <HomeSocial />
      <HomeWhyProcess />
      <HomeBlog />
      <CtaBanner
        title="Ready to start your next project?"
        text="Tell us where you want your business to go. We’ll recommend the right digital solution — and give you a clear, honest quote."
      />
    </>
  );
}
