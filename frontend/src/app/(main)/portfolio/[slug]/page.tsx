import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { site } from '@/data/site';
import { projects } from '@/data/projects';
import { ProjectDetailPageClient } from '@/components/portfolio/ProjectDetailPageClient';

const PORTFOLIO_IMAGE_MAP: Record<string, string> = {
  synowatt: "/synowatt.jpeg",
  urbanmall: "/urbanmall.jpeg",
  dallian: "/Dallian.jpeg",
  initiative: "/Initiativefortheneedy.jpeg",
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects
    .filter((p) => p.status !== 'draft')
    .map((p) => ({
      slug: p.slug,
    }));
}

function resolveProject(slug: string) {
  const raw = projects.find((p) => p.slug === slug && p.status !== 'draft');
  if (!raw) return null;

  const lowerSlug = raw.slug.toLowerCase();
  let customImage = raw.image;
  if (lowerSlug.includes("synowatt") || lowerSlug.includes("solar")) {
    customImage = PORTFOLIO_IMAGE_MAP.synowatt;
  } else if (lowerSlug.includes("urban") || lowerSlug.includes("mall") || lowerSlug.includes("steps")) {
    customImage = PORTFOLIO_IMAGE_MAP.urbanmall;
  } else if (lowerSlug.includes("dallian") || lowerSlug.includes("hair") || lowerSlug.includes("beauty")) {
    customImage = PORTFOLIO_IMAGE_MAP.dallian;
  } else if (lowerSlug.includes("initiative") || lowerSlug.includes("needy") || lowerSlug.includes("charity")) {
    customImage = PORTFOLIO_IMAGE_MAP.initiative;
  }

  return { ...raw, image: customImage };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = resolveProject(slug);

  if (!project) {
    return {
      title: 'Project Not Found | VisionSpring Agency',
      description: 'The requested project could not be found.',
    };
  }

  const title = `${project.title} — Case Study & Live Website | VisionSpring`;
  const description = `${project.summary} Engineered by VisionSpring Agency.`;
  const url = `${site.url}/portfolio/${project.slug}`;
  const image = project.image ? `${site.url}${project.image}` : `${site.url}/logo.png`;

  return {
    title,
    description,
    keywords: [
      project.title,
      `${project.title} Website`,
      ...project.categories,
      'VisionSpring Agency Case Study',
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
          url: image,
          width: 1200,
          height: 630,
          alt: `${project.title} Case Study Preview`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = resolveProject(slug);

  if (!project) {
    notFound();
  }

  const others = projects
    .filter((p) => p.slug !== project.slug && p.status !== 'draft')
    .slice(0, 3)
    .map((p) => {
      const lSlug = p.slug.toLowerCase();
      let img = p.image;
      if (lSlug.includes("synowatt") || lSlug.includes("solar")) img = PORTFOLIO_IMAGE_MAP.synowatt;
      else if (lSlug.includes("urban") || lSlug.includes("mall") || lSlug.includes("steps")) img = PORTFOLIO_IMAGE_MAP.urbanmall;
      else if (lSlug.includes("dallian") || lSlug.includes("hair") || lSlug.includes("beauty")) img = PORTFOLIO_IMAGE_MAP.dallian;
      else if (lSlug.includes("initiative") || lSlug.includes("needy") || lSlug.includes("charity")) img = PORTFOLIO_IMAGE_MAP.initiative;
      return { ...p, image: img };
    });

  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.summary,
    url: `${site.url}/portfolio/${project.slug}`,
    creator: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
    },
    genre: project.categories.join(', '),
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(projectJsonLd)}
      </script>

      <ProjectDetailPageClient slug={slug} />
    </>
  );
}