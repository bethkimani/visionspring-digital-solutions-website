"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon } from 'lucide-react';
import type { Project } from '../types/content';
import { ProjectMockup } from './ProjectMockup';

interface ProjectCarouselProps {
  projects: Project[];
  tone?: 'light' | 'dark';
}

export function ProjectCarousel({ projects, tone = 'light' }: ProjectCarouselProps) {
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);
  const reduce = useReducedMotion();

  if (projects.length === 0) {
    return <p className="rounded-2xl border border-dashed border-line p-10 text-center text-muted">New projects will appear here as soon as they are published.</p>;
  }

  const go = (dir: number) => setState(([i]) => [(i + dir + projects.length) % projects.length, dir]);
  const project = projects[index];
  const dark = tone === 'dark';

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured projects"
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') go(1);
        if (e.key === 'ArrowLeft') go(-1);
      }}>
      
      <div className={`overflow-hidden rounded-[2rem] ${dark ? 'bg-white/5 ring-1 ring-white/10' : 'bg-mist'}`}>
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={project.slug}
            custom={direction}
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${projects.length}`}>
            
            <div className="lg:col-span-7">
              <ProjectMockup project={project} />
            </div>
            <div className="lg:col-span-5">
              <p className={`text-sm font-semibold ${dark ? 'text-growth-light' : 'text-growth-dark'}`}>{project.categories.join(' · ')}</p>
              <h3 className={`mt-3 text-3xl font-extrabold leading-tight ${dark ? 'text-white' : 'text-navy-800'}`}>{project.title}</h3>
              <p className={`mt-4 text-base leading-relaxed ${dark ? 'text-white/70' : 'text-muted'}`}>{project.summary}</p>
              <div className="mt-8 flex flex-wrap items-center gap-5 text-sm font-semibold">
                {project.status === 'published' && project.url &&
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-ocean px-5 text-white transition-colors duration-150 hover:bg-ocean-dark">
                  
                    View Live Project
                    <ExternalLinkIcon className="h-4 w-4" aria-hidden="true" />
                  </a>
                }
                <Link href={`/portfolio/${project.slug}`} className={`inline-flex items-center gap-1.5 ${dark ? 'text-white hover:text-sky-light' : 'text-navy-800 hover:text-ocean'}`}>
                  Project details
                  <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {projects.length > 1 &&
      <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2" role="tablist" aria-label="Choose project">
            {projects.map((p, i) =>
          <button
            key={p.slug}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show ${p.title}`}
            onClick={() => setState([i, i > index ? 1 : -1])}
            className="flex h-6 items-center">
            
                <span
              className={`block h-1.5 rounded-full transition-[width,background-color] duration-200 ${
              i === index ? `w-8 ${dark ? 'bg-growth-light' : 'bg-ocean'}` : `w-3 ${dark ? 'bg-white/30' : 'bg-line'}`}`
              } />
            
              </button>
          )}
          </div>
          <div className="flex gap-2">
            {[
          { dir: -1, label: 'Previous project', Icon: ChevronLeftIcon },
          { dir: 1, label: 'Next project', Icon: ChevronRightIcon }].
          map(({ dir, label, Icon }) =>
          <button
            key={label}
            type="button"
            onClick={() => go(dir)}
            aria-label={label}
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-150 active:scale-[0.96] ${
            dark ? 'border-white/20 text-white hover:bg-white/10' : 'border-line bg-white text-navy-800 hover:border-ocean hover:text-ocean'}`
            }>
            
                <Icon className="h-5 w-5" aria-hidden="true" />
              </button>
          )}
          </div>
        </div>
      }
    </div>);

}