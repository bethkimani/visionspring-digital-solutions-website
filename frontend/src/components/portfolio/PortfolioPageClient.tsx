"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, SparklesIcon, LayersIcon } from 'lucide-react';
import { projects } from '@/data/projects';
import { PageHero } from '@/components/PageHero';
import { ProjectCarousel } from '@/components/ProjectCarousel';
import { ProjectCard } from '@/components/ProjectCard';
import { CtaBanner } from '@/components/CtaBanner';
import { ButtonLink } from '@/components/ButtonLink';

const PORTFOLIO_IMAGE_MAP: Record<string, string> = {
  synowatt: "/synowatt.jpeg",
  urbanmall: "/urbanmall.jpeg",
  dallian: "/Dallian.jpeg",
};

export function PortfolioPageClient() {
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
        title="Real Websites &amp; Digital Solutions Built for Kenyan Businesses"
        description="Explore live business websites, e-commerce stores, and corporate portals delivered by VisionSpring Agency. Every project is built for fast mobile browsing, instant M-Pesa payments, and steady customer inquiries."
        actions={
          <ButtonLink 
            to="/contact" 
            variant="light" 
            size="lg" 
            className="shadow-lg shadow-teal-500/20"
            iconRight={<ArrowRightIcon className="h-4 w-4" aria-hidden="true" />}
          >
            Start Your Project
          </ButtonLink>
        }
      />

      {featured.length > 0 && (
        <section className="bg-navy-950 py-16 sm:py-24 text-white relative overflow-hidden border-b border-white/5">
          <div className="absolute top-0 right-1/4 -z-0 h-96 w-96 rounded-full bg-ocean/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 -z-0 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
          
          <div className="container-site relative z-10">
            <div className="mb-10 sm:mb-14 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-3">
                <SparklesIcon className="w-3.5 h-3.5 text-teal-400" />
                Featured Client Work
              </div>
              <h2 className="text-3xl font-extrabold sm:text-4xl text-white">
                Featured Client Websites &amp; Stores
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-300">
                Take a look at real websites we built from scratch — delivering fast speeds on phones, clean design, and easy routes for customers to buy or enquire.
              </p>
            </div>
            
            <ProjectCarousel projects={featured} />
          </div>
        </section>
      )}

      <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="container-site">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-line pb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean/10 text-ocean text-xs font-semibold mb-3">
                <LayersIcon className="w-3.5 h-3.5 text-ocean" />
                Client Directory
              </div>
              <h2 className="text-3xl font-extrabold text-navy-800 sm:text-4xl">
                Explore Our Work by Industry
              </h2>
              <p className="mt-2 text-base text-muted max-w-xl">
                Browse by business type to see how we help retail stores, solar energy companies, beauty brands, and corporate clients succeed online.
              </p>
            </div>
            <div className="-mx-5 overflow-x-auto px-5 scrollbar-none md:mx-0 md:px-0">
              <div className="flex gap-2" role="group" aria-label="Filter by category">
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    aria-pressed={active === c}
                    onClick={() => setActive(c)}
                    className={`h-10 whitespace-nowrap rounded-full px-5 text-sm font-semibold transition-all duration-200 ${
                      active === c
                        ? 'bg-navy-800 text-white shadow-md shadow-navy-800/20'
                        : 'bg-white text-navy-800 border border-slate-200 hover:border-ocean hover:text-ocean'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <motion.div layout className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filtered.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={project.slug}
                  className="h-full"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CtaBanner
        title="Ready to build a website that grows your business?"
        text="Tell us what your business needs — whether an online store, a company website, or a custom system. We'll give you an honest quote and a clear roadmap."
        primaryLabel="Discuss Your Project"
      />
    </>
  );
}
