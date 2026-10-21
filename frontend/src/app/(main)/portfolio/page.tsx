"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, SparklesIcon, LayersIcon } from 'lucide-react';
import { usePageMeta } from '@/hooks/usePageMeta';
import { projects } from '@/data/projects';
import { PageHero } from '@/components/PageHero';
import { ProjectCarousel } from '@/components/ProjectCarousel';
import { ProjectCard } from '@/components/ProjectCard';
import { CtaBanner } from '@/components/CtaBanner';
import { ButtonLink } from '@/components/ButtonLink';

// Mapping custom portfolio images from public/ folder
const PORTFOLIO_IMAGE_MAP: Record<string, string> = {
  synowatt: "/synowatt.jpeg",
  urbanmall: "/urbanmall.jpeg",
  dallian: "/Dallian.jpeg",
};

export default function PortfolioPage() {
  usePageMeta('Portfolio', 'Explore live websites and digital projects delivered by VisionSpring Agency, including Dallian Luxe Hair, UrbanMall, and Synowatt Power & Solar.');
  
  // Map custom images across all projects
  const mappedProjects = projects.map((p) => {
    const lSlug = p.slug.toLowerCase();
    let img = p.image;
    if (lSlug.includes("synowatt") || lSlug.includes("solar")) img = PORTFOLIO_IMAGE_MAP.synowatt;
    else if (lSlug.includes("urban") || lSlug.includes("mall") || lSlug.includes("steps")) img = PORTFOLIO_IMAGE_MAP.urbanmall;
    else if (lSlug.includes("dallian") || lSlug.includes("hair") || lSlug.includes("beauty")) img = PORTFOLIO_IMAGE_MAP.dallian;
    return { ...p, image: img };
  });

  const visible = mappedProjects.filter((p) => p.status !== 'draft');
  const featured = visible.filter((p) => p.featured && p.status === 'published');
  const categories = ['All', ...Array.from(new Set(visible.flatMap((p) => p.categories)))];
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? visible : visible.filter((p) => p.categories.includes(active));

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Portfolio' }]}
        title="Work that’s live, working, and growing"
        description="A selection of high-performance digital projects we’ve delivered. Built to attract customers, build unshakeable trust, and generate tangible growth."
        actions={
          <ButtonLink 
            to="/contact" 
            variant="light" 
            size="lg" 
            className="shadow-xl shadow-white/10 hover:shadow-white/25 transition-all font-semibold"
            iconRight={<ArrowRightIcon className="h-4 w-4" aria-hidden="true" />}
          >
            Start Your Project
          </ButtonLink>
        } 
      />
      
      {/* 1. Featured Projects Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-slate-50/60 to-white">
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-700 mb-3 shadow-sm">
                <SparklesIcon className="h-3.5 w-3.5" />
                <span>Spotlight Work</span>
              </div>
              <h2 className="text-3xl font-extrabold text-navy-800 sm:text-4xl">Featured Client Success Stories</h2>
            </div>
            <p className="mt-2 md:mt-0 text-sm text-slate-500 max-w-sm">
              Handpicked projects demonstrating our engineering standard and design excellence.
            </p>
          </div>
          
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xl shadow-slate-100">
            <ProjectCarousel projects={featured} />
          </div>
        </div>
      </section>

      {/* 2. All Projects & Interactive Filter Section */}
      <section className="bg-slate-100/70 py-20 sm:py-28 border-t border-slate-200/60">
        <div className="container-site">
          
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-ocean/20 bg-ocean/5 px-3.5 py-1 text-xs font-semibold text-ocean mb-3">
                <LayersIcon className="h-3.5 w-3.5" />
                <span>Complete Portfolio</span>
              </div>
              <h2 className="text-3xl font-extrabold text-navy-800 sm:text-4xl">Explore All Deliverables</h2>
            </div>

            {/* Category Filter Pills */}
            <div className="-mx-5 overflow-x-auto px-5 scrollbar-none md:mx-0 md:px-0">
              <div className="flex gap-2.5 p-1 bg-white rounded-full border border-slate-200 shadow-sm" role="group" aria-label="Filter projects by category">
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setActive(c)}
                    aria-pressed={active === c}
                    className={`h-10 whitespace-nowrap rounded-full px-5 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                      active === c 
                        ? 'bg-navy-800 text-white shadow-md shadow-navy-800/20' 
                        : 'bg-transparent text-slate-600 hover:text-navy-800 hover:bg-slate-100'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Project Cards Grid */}
          <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                  className="h-full"
                >
                  <ProjectCard project={p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center mt-8">
              <p className="text-base text-slate-500 font-medium">No projects found in this category yet.</p>
            </div>
          )}

          <div className="mt-16 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm flex items-center justify-between flex-wrap gap-4">
            <p className="text-xs sm:text-sm text-slate-500">
              * Previews marked <span className="font-semibold text-slate-700">“Representative preview”</span> illustrate project aesthetic. Click <span className="font-semibold text-slate-700">“View Live Project”</span> to see the fully functioning platform.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Call to Action Banner */}
      <CtaBanner 
        title="Have a Vision You Want Brought to Life?" 
        text="Let's build a custom digital solution that turns your website visitors into loyal, paying customers. Share your goals with us today." 
        primaryLabel="Start Your Project Now" 
      />
    </>
  );
}