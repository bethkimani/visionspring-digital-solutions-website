"use client";

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRightIcon, ExternalLinkIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { projects } from '../../data/projects';
import { ButtonLink } from '../ButtonLink';
import { ProjectMockup } from '../ProjectMockup';
import { Reveal } from '../Reveal';
import { SectionHeading } from '../SectionHeading';
import { withProjectImage } from '@/lib/projectImage';

export function HomePortfolio() {
  const featured = projects
    .filter((p) => p.status === 'published' && p.featured)
    .map(withProjectImage);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (featured.length === 0) return null;

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, children } = scrollRef.current;
    if (!children.length) return;
    const firstChild = children[0] as HTMLElement;
    const itemWidth = firstChild ? firstChild.offsetWidth + 16 : 300;
    const index = Math.round(scrollLeft / itemWidth);
    setActiveIndex(Math.min(Math.max(index, 0), featured.length - 1));
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.children[index] as HTMLElement;
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      setActiveIndex(index);
    }
  };

  const gridCols =
    featured.length >= 4
      ? 'md:grid-cols-2 xl:grid-cols-4'
      : 'md:grid-cols-2 lg:grid-cols-3';

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#04142e] via-[#0b2a5b] to-[#0a356e] text-white">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-ocean/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-20 right-1/4 h-96 w-96 rounded-full bg-growth/15 blur-3xl" aria-hidden="true" />
      <div className="bg-grid-lines pointer-events-none absolute inset-0 z-0 opacity-40" aria-hidden="true" />

      <div className="container-site relative z-10">
        <SectionHeading
          eyebrow="Our Work"
          title="Web Design Portfolio: Real Work for Kenyan Businesses"
          description="Real websites, online stores and web apps built for Kenyan businesses."
          tone="light"
          action={
            <ButtonLink
              to="/portfolio"
              variant="light"
              className="font-semibold text-navy-800 shadow-md transition-all duration-200 hover:shadow-lg hover:bg-sky-soft"
              iconRight={<ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />}
            >
              View Portfolio
            </ButtonLink>
          }
        />

        {/* Projects: Horizontal Snap Carousel on Mobile (< md), Grid on Desktop (md+) */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className={`mt-10 sm:mt-12 flex md:grid ${gridCols} gap-4 sm:gap-6 lg:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none -mx-5 px-5 md:mx-0 md:px-0 py-2 scroll-smooth overscroll-x-contain`}
        >
          {featured.map((project, index) => (
            <div
              key={project.slug}
              className="w-[78vw] max-w-[310px] sm:w-[350px] md:w-auto shrink-0 snap-start md:shrink flex flex-col"
            >
              <Reveal delay={index * 0.08} className="h-full flex flex-col">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-white p-4 sm:p-5 shadow-2xl shadow-black/25 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.5)] hover:border-ocean/60">
                  {/* Project Browser Mockup */}
                  <div className="overflow-hidden rounded-2xl bg-slate-100 transition-transform duration-300 group-hover:scale-[1.01]">
                    <ProjectMockup project={project} />
                  </div>

                  {/* Content Details */}
                  <div className="flex flex-1 flex-col pt-4 sm:pt-5">
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
                    <h3 className="text-lg sm:text-xl font-extrabold text-navy-800 transition-colors duration-150 group-hover:text-ocean">
                      <Link href={`/portfolio/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>

                    {/* Summary */}
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 line-clamp-2">
                      {project.summary}
                    </p>

                    {/* Key Highlights */}
                    {project.focus && project.focus.length > 0 && (
                      <ul className="mt-3.5 sm:mt-4 space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-600">
                        {project.focus.slice(0, 2).map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-growth/15 text-growth-dark text-[10px] font-bold" aria-hidden="true">✓</span>
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Action Buttons */}
                    <div className="mt-auto flex items-center justify-between gap-3 pt-4 sm:pt-5 border-t border-slate-100">
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-ocean px-3.5 py-1.5 text-xs font-semibold text-white transition-colors duration-150 hover:bg-ocean-dark shadow-sm"
                        >
                          <span>
                            Live Site<span className="sr-only"> – {project.title}</span>
                          </span>
                          <ExternalLinkIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      ) : null}

                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-navy-800 transition-colors duration-150 hover:text-ocean ml-auto"
                      >
                        <span>
                          View Project<span className="sr-only"> – {project.title}</span>
                        </span>
                        <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Indicators & Controls */}
        {featured.length > 1 && (
          <div className="mt-6 flex items-center justify-between md:hidden px-1">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              {featured.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Go to project ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    activeIndex === i ? 'w-6 bg-teal-400' : 'w-2 bg-white/30'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                disabled={activeIndex === 0}
                aria-label="Previous project"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm backdrop-blur-sm transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollToIndex(Math.min(featured.length - 1, activeIndex + 1))}
                disabled={activeIndex === featured.length - 1}
                aria-label="Next project"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm backdrop-blur-sm transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        <p className="mt-10 flex flex-wrap items-center justify-center gap-x-2 text-center text-sm text-white/80">
          Want something similar?
          <Link
            href="/contact#consultation-form"
            className="font-semibold text-growth-light underline decoration-growth-light/50 underline-offset-4 transition-colors hover:text-white"
          >
            Get a tailored project quote →
          </Link>
        </p>
      </div>
    </section>
  );
}
