import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { site } from '@/data/site';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { ServiceDetailPageClient } from '@/components/services/ServiceDetailPageClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found | VisionSpring Agency',
      description: 'The requested service could not be found.',
    };
  }

  const title = `${service.title} in Kenya | VisionSpring Agency`;
  const description = service.summary || service.intro;
  const url = `${site.url}/services/${service.slug}`;

  return {
    title,
    description,
    keywords: [
      service.title,
      `${service.navTitle} Kenya`,
      `${service.navTitle} Nairobi`,
      service.navTitle,
      'VisionSpring Agency',
      ...service.cardDeliverables,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: 'website',
      images: [
        {
          url: `${site.url}/logo.png`,
          width: 512,
          height: 512,
          alt: `${service.title} - VisionSpring Agency`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${site.url}/logo.png`],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const related = service.related
    .map((r) => services.find((s) => s.slug === r))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const publishedProjects = projects.filter((p) => p.status === 'published');

  // Schema.org Service, Breadcrumbs & FAQPage Structured Data (JSON-LD)
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${site.url}/services/${service.slug}#breadcrumb`,
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
          {
            '@type': 'ListItem',
            position: 3,
            name: service.navTitle,
            item: `${site.url}/services/${service.slug}`,
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${site.url}/services/${service.slug}#service`,
        name: service.title,
        description: service.summary,
        serviceType: service.group,
        provider: {
          '@type': 'Organization',
          name: site.name,
          url: site.url,
          logo: `${site.url}/logo.png`,
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
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${service.navTitle} Deliverables`,
          itemListElement: service.cardDeliverables.map((deliv) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: deliv,
            },
          })),
        },
      },
      // FAQ Page Schema for Google Rich Snippets
      {
        '@type': 'FAQPage',
        '@id': `${site.url}/services/${service.slug}#faq`,
        mainEntity: service.faqs.map((faq) => ({
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
        {JSON.stringify(serviceJsonLd)}
      </script>

      <ServiceDetailPageClient slug={slug} />
    </>
  );
}
