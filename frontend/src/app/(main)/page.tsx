import type { Metadata } from 'next';
import { HomeHero } from '@/components/home/HomeHero';
import { HomeAbout } from '@/components/home/HomeAbout';
import { HomeServices } from '@/components/home/HomeServices';
import { HomePortfolio } from '@/components/home/HomePortfolio';
import { HomeTestimonials } from '@/components/home/HomeTestimonials';
import { HomeSocial } from '@/components/home/HomeSocial';
import { HomeWhyProcess } from '@/components/home/HomeWhyProcess';
import { HomeFaq, homeFaqs } from '@/components/home/HomeFaq';
import { HomeBlog } from '@/components/home/HomeBlog';
import { CtaBanner } from '@/components/CtaBanner';
import { site } from '@/data/site';

// TODO: create a real 1200x630 branded image at /public/og-home.jpg, then set
// OG_IMAGE to `${site.url}/og-home.jpg`, OG_WIDTH to 1200, OG_HEIGHT to 630
// and TWITTER_CARD to 'summary_large_image'.
const OG_IMAGE = `${site.url}/logo.png`;
const OG_WIDTH = 512;
const OG_HEIGHT = 512;
const TWITTER_CARD = 'summary' as const; // square logo => 'summary'
const PHONE = '+254112280703';

export const metadata: Metadata = {
  title: {
    absolute: 'Web Design & Digital Marketing Agency Nairobi | VisionSpring',
  },
  description:
    'Nairobi web design and digital marketing agency. Websites, M-Pesa online stores, SEO, Google & Meta ads and apps for Kenyan businesses. Free quote.',
  keywords: [
    'Web Design Agency Kenya',
    'Web Design Company Nairobi',
    'Digital Marketing Agency Nairobi',
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
    title: 'Web Design & Digital Marketing Agency Nairobi | VisionSpring',
    description:
      'Nairobi web design and digital marketing agency. Websites, M-Pesa online stores, SEO, Google & Meta ads and apps for Kenyan businesses. Free quote.',
    url: site.url,
    siteName: site.name,
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: OG_WIDTH,
        height: OG_HEIGHT,
        alt: 'VisionSpring Agency - Web Design & Digital Marketing Agency in Nairobi',
      },
    ],
  },
  twitter: {
    card: TWITTER_CARD,
    title: 'Web Design & Digital Marketing Agency Nairobi | VisionSpring',
    description:
      'Nairobi web design and digital marketing agency. Websites, M-Pesa online stores, SEO, Google & Meta ads and apps for Kenyan businesses. Free quote.',
    images: [OG_IMAGE],
  },
};

export default function HomePage() {
  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
        '@id': `${site.url}/#organization`,
        name: site.name,
        // Must match your registered business name exactly - confirm before deploying
        legalName: 'VisionSpring Digital Solutions Agency',
        url: site.url,
        logo: `${site.url}/logo.png`,
        image: `${site.url}/logo.png`,
        description:
          'VisionSpring Agency is a web design and digital marketing agency in Nairobi, Kenya. We build business websites, M-Pesa online stores, and web and mobile apps, and run SEO, Google Ads, Meta Ads and social media for Kenyan businesses.',
        email: site.email,
        telephone: PHONE,
        priceRange: '$$',
        currenciesAccepted: 'KES, USD',
        paymentAccepted: 'M-Pesa, Bank Transfer, Visa, Mastercard',
        slogan: site.tagline,
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '08:00',
            closes: '18:00',
          },
        ],
        sameAs: [
          'https://www.facebook.com/profile.php?id=61595464059183',
          'https://www.instagram.com/visionspringagency/',
          'https://www.tiktok.com/@visionspringagency?lang=en-GB',
        ],
        knowsAbout: [
          'Website Design & Development in Kenya',
          'Custom Web Applications',
          'Search Engine Optimization (SEO) in Nairobi',
          'E-Commerce Development with Lipa na M-Pesa',
          'Google Ads & Digital Advertising',
          'Brand Identity & UI/UX Design',
          'Software Engineering in Kenya',
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Nairobi',
          addressRegion: 'Nairobi County',
          addressCountry: 'KE',
        },
        // City-centre coordinates for Nairobi. Replace with your exact office location
        // if you have one, and keep it identical to your Google Business Profile.
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -1.2921,
          longitude: 36.8219,
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'Nairobi',
          },
          {
            '@type': 'Country',
            name: 'Kenya',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'East Africa',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Worldwide',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Digital Solutions Catalog',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Website Design and Development Nairobi',
                description:
                  'High-performance, mobile-responsive business websites and e-commerce stores with M-Pesa checkout.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Custom Web Applications Kenya',
                description:
                  'Custom web portals, automated business systems, management dashboards, and APIs.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Search Engine Optimization (SEO) Nairobi',
                description:
                  'Technical SEO, on-page optimization, content strategy, and local search visibility on Google.',
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
      {
        '@type': 'FAQPage',
        '@id': `${site.url}/#faq`,
        mainEntity: homeFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
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
      <HomeTestimonials />
      <HomeSocial />
      <HomeWhyProcess />
      <HomeFaq />
      <HomeBlog />
      <CtaBanner
        title="Ready to Build a Website That Brings Real Customers?"
        text="Tell us about your project goals. We'll recommend the right digital solution and provide an honest, fixed-price quote."
      />
    </>
  );
}