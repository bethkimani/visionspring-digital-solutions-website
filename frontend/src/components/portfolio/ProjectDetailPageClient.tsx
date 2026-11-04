"use client";

import React from 'react';
import { CheckCircle2Icon, ExternalLinkIcon, SparklesIcon, ArrowRightIcon } from 'lucide-react';
import { projects } from '@/data/projects';
import { PageHero } from '@/components/PageHero';
import { ProjectMockup } from '@/components/ProjectMockup';
import { ProjectCard } from '@/components/ProjectCard';
import { ButtonLink } from '@/components/ButtonLink';
import { CtaBanner } from '@/components/CtaBanner';
import { withProjectImage } from '@/lib/projectImage';

interface ProjectDetailPageClientProps {
  slug: string;
}

export function ProjectDetailPageClient({ slug }: ProjectDetailPageClientProps) {
  const rawProject = projects.find((p) => p.slug === slug && p.status !== 'draft');
  if (!rawProject) return null;

  const project = withProjectImage(rawProject);

  const others = projects
    .filter((p) => p.slug !== project.slug && p.status !== 'draft')
    .slice(0, 3)
    .map(withProjectImage);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Portfolio', to: '/portfolio' },
          { label: project.title },
        ]}
        title={project.title}
        description={project.summary}
        actions={
          project.status === 'published' && project.url ? (
            <div className="flex flex-wrap gap-4 items-center">
              <ButtonLink
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                size="lg"
                className="shadow-lg shadow-teal-500/20"
                iconRight={<ExternalLinkIcon className="h-4 w-4" aria-hidden="true" />}
              >
                Visit Live Site
              </ButtonLink>
              <ButtonLink
                to="/contact"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Start a Similar Project
              </ButtonLink>
            </div>
          ) : (
            <ButtonLink to="/contact" variant="light" size="lg">
              Start a Similar Project
            </ButtonLink>
          )
        }
        aside={
          <div className="flex justify-center">
            <ProjectMockup project={project} />
          </div>
        }
      />

      <section className="py-20 sm:py-24 bg-white">
        <div className="container-site grid gap-14 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean/10 text-ocean text-xs font-semibold mb-3">
                <SparklesIcon className="w-3.5 h-3.5 text-ocean" />
                Project Scope &amp; Focus
              </div>
              <h2 className="text-3xl font-extrabold text-navy-800 sm:text-4xl">
                What We Delivered
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
                {project.summary} Built with a sharp focus on speed, user journey clarity, and conversion readiness.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-navy-800 mb-5">Key Deliverables &amp; Features</h3>
              <ul className="space-y-3.5">
                {project.focus.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2Icon className="h-5 w-5 text-growth shrink-0 mt-0.5" />
                    <span className="text-[15px] sm:text-base font-medium text-slate-700 leading-snug">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
                Project Details
              </h3>
              
              <div className="divide-y divide-slate-100">
                <div className="py-3.5 flex justify-between items-center">
                  <span className="text-sm text-slate-500 font-medium">Status</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Live &amp; Operational
                  </span>
                </div>

                <div className="py-3.5 flex justify-between items-center">
                  <span className="text-sm text-slate-500 font-medium">Industry</span>
                  <span className="text-sm font-semibold text-navy-800 text-right">
                    {project.categories.join(', ')}
                  </span>
                </div>

                {project.url && (
                  <div className="py-3.5 flex justify-between items-center">
                    <span className="text-sm text-slate-500 font-medium">Website</span>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-ocean hover:underline"
                    >
                      Visit Site
                      <ExternalLinkIcon className="h-3.5 w-3.5" />
                    </a>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <ButtonLink to="/contact" size="md" className="w-full justify-center">
                  Request Similar Solution
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="bg-slate-50 py-20 border-t border-slate-200">
          <div className="container-site">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <p className="text-sm font-semibold text-growth-dark uppercase tracking-wider">
                  More Case Studies
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-800 mt-1">
                  Explore Other Live Work
                </h2>
              </div>
              <ButtonLink
                to="/portfolio"
                variant="outline"
                size="sm"
                iconRight={<ArrowRightIcon className="h-4 w-4" />}
              >
                All Projects
              </ButtonLink>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner
        title="Ready to elevate your online presence?"
        text="Let's build a platform tailored to your specific market and business objectives."
        primaryLabel="Talk to Our Team"
      />
    </>
  );
}
