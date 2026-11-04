"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, ExternalLinkIcon } from 'lucide-react';
import { projects } from '../../data/projects';
import { ButtonLink } from '../ButtonLink';
import { ProjectMockup } from '../ProjectMockup';
import { Reveal } from '../Reveal';
import { SectionHeading } from '../SectionHeading';

// Mapping custom portfolio images from public/ folder
const PORTFOLIO_IMAGE_MAP: Record<string, string> = {
  synowatt: "/synowatt.jpeg",
  urbanmall: "/urbanmall.jpeg",
  dallian: "/Dallian.jpeg",
  initiative: "/Initiativefortheneedy.jpeg",
};

export function HomePortfolio() {
  const featured = projects
    .filter((p) => p.status === 'published' && p.featured)
    .map((project) => {
      const lowerSlug = project.slug.toLowerCase();

      let customImage = project.image;
      if (lowerSlug.includes("synowatt") || lowerSlug.includes("solar")) {
        customImage = PORTFOLIO_IMAGE_MAP.synowatt;
      } else if (lowerSlug.includes("urban") || lowerSlug.includes("mall") || lowerSlug.includes("steps")) {
        customImage = PORTFOLIO_IMAGE_MAP.urbanmall;
      } else if (lowerSlug.includes("dallian") || lowerSlug.includes("hair") || lowerSlug.includes("beauty")) {
        customImage = PORTFOLIO_IMAGE_MAP.dallian;
      } else if (lowerSlug.includes("initiative") || lowerSlug.includes("needy") || lowerSlug.includes("charity")) {
        customImage = PORTFOLIO_IMAGE_MAP.initiative;
      }

      return {
        ...project,
        image: customImage,
      };
    });

  const gridCols =
    featured.length >= 4
      ? 'md:grid-cols-2 xl:grid-cols-4'
      : 'md:grid-cols-2 lg:grid-cols-3';

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#04142e] via-[#0b2a5b] to-[#0a356e] text-white">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-ocean/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 right-1/4 h-96 w-96 rounded-full bg-growth/15 blur-3xl" />
      <div className="bg-grid-lines pointer-events-none absolute inset-0 z-0 opacity-40" aria-hidden="true" />

      <div className="container-site relative z-10">
        <SectionHeading
          eyebrow="Featured Client Success Stories"
          title="Live Platforms Engineered for Real Business Growth"
          description="Explore high-converting websites and powerful custom platforms we've built for leading e-commerce, renewable energy, beauty, and community organizations."
          tone="light"
          action={
            <ButtonLink
              to="/portfolio"
              variant="light"
              className="font-semibold text-navy-800 shadow-md transition-all duration-200 hover:shadow-lg hover:bg-sky-soft"
              iconRight={<ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />}
            >
              View All Projects
            </ButtonLink>
          }
        />

        {/* Responsive All-at-Once Grid */}
        <div className={`mt-12 grid grid-cols-1 ${gridCols} gap-6 lg:gap-8`}>
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.1} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-white p-4 sm:p-5 shadow-2xl shadow-black/25 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.5)] hover:border-ocean/60">
                {/* Project Browser Mockup */}
                <div className="overflow-hidden rounded-2xl bg-slate-100 transition-transform duration-300 group-hover:scale-[1.01]">
                  <ProjectMockup project={project} />
                </div>

                {/* Content Details */}
                <div className="flex flex-1 flex-col pt-5">
                  {/* Category tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {project.categories.map((cat) => (
                      <span
                        key={cat}
                        className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-navy-800 transition-colors duration-150 group-hover:text-ocean">
                    <Link href={`/portfolio/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>

                  {/* Summary */}
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Key Highlights */}
                  {project.focus && project.focus.length > 0 && (
                    <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-600">
                      {project.focus.slice(0, 2).map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-growth/15 text-growth-dark text-[10px] font-bold">✓</span>
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Action Buttons */}
                  <div className="mt-auto flex items-center justify-between gap-3 pt-5 border-t border-slate-100">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-ocean px-3.5 py-1.5 text-xs font-semibold text-white transition-colors duration-150 hover:bg-ocean-dark shadow-sm"
                      >
                        <span>Live Site</span>
                        <ExternalLinkIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    ) : null}

                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-navy-800 transition-colors duration-150 hover:text-ocean ml-auto"
                    >
                      <span>Case Study</span>
                      <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomePortfolio;