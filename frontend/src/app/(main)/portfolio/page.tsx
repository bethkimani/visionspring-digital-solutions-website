"use client";
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { usePageMeta } from '@/hooks/usePageMeta';
import { projects } from '@/data/projects';
import { PageHero } from '@/components/PageHero';
import { ProjectCarousel } from '@/components/ProjectCarousel';
import { ProjectCard } from '@/components/ProjectCard';
import { CtaBanner } from '@/components/CtaBanner';
import { ButtonLink } from '@/components/ButtonLink';

export default function PortfolioPage() {
  usePageMeta('Portfolio', 'Explore live websites and digital projects delivered by VisionSpring Agency, including Dallian Luxe Hair, UrbanMall, and Synowatt Power & Solar.');
  const visible = projects.filter((p) => p.status !== 'draft');
  const featured = visible.filter((p) => p.featured && p.status === 'published');
  const categories = ['All', ...Array.from(new Set(visible.flatMap((p) => p.categories)))];
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? visible : visible.filter((p) => p.categories.includes(active));

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Portfolio' }]}
        title="Work that’s live, working, and growing"
        description="A selection of published projects we’ve delivered. More projects are on the way and will appear here as they launch."
        actions={<ButtonLink to="/contact" variant="light" size="lg" iconRight={<ArrowRightIcon className="h-4 w-4" aria-hidden="true" />}>Start Your Project</ButtonLink>} />
      

      <section className="py-20 sm:py-24">
        <div className="container-site">
          <h2 className="text-2xl font-extrabold text-navy-800 sm:text-3xl">Featured projects</h2>
          <div className="mt-8">
            <ProjectCarousel projects={featured} />
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <div className="container-site">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="text-2xl font-extrabold text-navy-800 sm:text-3xl">All projects</h2>
            <div className="-mx-5 overflow-x-auto px-5 scrollbar-none md:mx-0 md:px-0">
              <div className="flex gap-2" role="group" aria-label="Filter projects by category">
                {categories.map((c) =>
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  aria-pressed={active === c}
                  className={`h-10 whitespace-nowrap rounded-full px-4 text-sm font-semibold transition-colors duration-150 ${
                  active === c ? 'bg-navy-800 text-white' : 'bg-white text-navy-800 ring-1 ring-line hover:ring-ocean/50'}`
                  }>
                  
                    {c}
                  </button>
                )}
              </div>
            </div>
          </div>
          <motion.div layout className="mt-10 grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) =>
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="h-full">
                
                  <ProjectCard project={p} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          {filtered.length === 0 && <p className="mt-10 text-center text-muted">No projects in this category yet.</p>}
          <p className="mt-12 text-sm text-muted">
            Previews marked “Representative preview” illustrate each project’s style. Use “View Live Project” to see the actual website.
          </p>
        </div>
      </section>

      <CtaBanner title="Have a Project in Mind?" text="Let’s build something you’ll be proud to share. Tell us your goals and we’ll take it from there." primaryLabel="Start Your Project" />
    </>);

}