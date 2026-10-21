"use client";

import React from 'react';
import { ArrowRightIcon, SparklesIcon } from 'lucide-react';
import { projects } from '../../data/projects';
import { ButtonLink } from '../ButtonLink';
import { ProjectCarousel } from '../ProjectCarousel';
import { Reveal } from '../Reveal';
import { SectionHeading } from '../SectionHeading';

// Mapping custom portfolio images from public/ folder
const PORTFOLIO_IMAGE_MAP: Record<string, string> = {
  synowatt: "/synowatt.jpeg",
  urbanmall: "/urbanmall.jpeg",
  dallian: "/Dallian.jpeg",
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
      }

      return {
        ...project,
        image: customImage,
      };
    });

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-gradient-to-b from-white via-slate-50/80 to-white">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-96 w-[600px] -translate-x-1/2 rounded-full bg-teal-400/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 -z-10 h-72 w-72 rounded-full bg-ocean/10 blur-3xl" />

      <div className="container-site relative z-10">
        
        {/* Section Heading with Badge & Smart Button */}
        <SectionHeading
          eyebrow={
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-700 shadow-xs">
              <SparklesIcon className="h-3.5 w-3.5 text-emerald-600 animate-pulse" />
              Featured Client Success Stories
            </span>
          }
          title="Live Platforms Engineered for Real Business Growth"
          description="Explore high-converting websites and powerful custom platforms we've built for leading e-commerce, renewable energy, and beauty brands."
          action={
            <ButtonLink 
              to="/portfolio" 
              variant="outline" 
              className="border-ocean text-ocean hover:bg-ocean hover:text-white shadow-sm font-semibold transition-all duration-200 hover:shadow-md"
              iconRight={<ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />}
            >
              View All Projects
            </ButtonLink>
          }
        />
        
        {/* Glassmorphism Carousel Container */}
        <Reveal className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-6 sm:p-8 shadow-xl shadow-slate-200/50 backdrop-blur-md">
            <ProjectCarousel projects={featured} />
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default HomePortfolio;