"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { CheckCircle2Icon, ExternalLinkIcon, SparklesIcon, ArrowRightIcon } from 'lucide-react';
import { usePageMeta } from '@/hooks/usePageMeta';
import { projects } from '@/data/projects';
import { PageHero } from '@/components/PageHero';
import { ProjectMockup } from '@/components/ProjectMockup';
import { ProjectCard } from '@/components/ProjectCard';
import { ButtonLink } from '@/components/ButtonLink';
import { CtaBanner } from '@/components/CtaBanner';
import { NotFoundPage } from '@/components/NotFoundPage';

// Mapping custom portfolio images from public/ folder
const PORTFOLIO_IMAGE_MAP: Record<string, string> = {
  synowatt: "/synowatt.jpeg",
  urbanmall: "/urbanmall.jpeg",
  dallian: "/Dallian.jpeg",
};

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const rawProject = projects.find((p) => p.slug === slug && p.status !== 'draft');

  // Inject custom images into the project object
  let project = rawProject;
  if (project) {
    const lowerSlug = project.slug.toLowerCase();
    let customImage = project.image;
    if (lowerSlug.includes("synowatt") || lowerSlug.includes("solar")) {
      customImage = PORTFOLIO_IMAGE_MAP.synowatt;
    } else if (lowerSlug.includes("urban") || lowerSlug.includes("mall") || lowerSlug.includes("steps")) {
      customImage = PORTFOLIO_IMAGE_MAP.urbanmall;
    } else if (lowerSlug.includes("dallian") || lowerSlug.includes("hair") || lowerSlug.includes("beauty")) {
      customImage = PORTFOLIO_IMAGE_MAP.dallian;
    }
    project = { ...project, image: customImage };
  }

  usePageMeta(project ? `${project.title} — Portfolio` : 'Project not found', project ? project.summary : 'This project could not be found.');

  if (!project) return <NotFoundPage />;

  const others = projects
    .filter((p) => p.slug !== project.slug && p.status !== 'draft')
    .slice(0, 3)
    .map((p) => {
      const lSlug = p.slug.toLowerCase();
      let img = p.image;
      if (lSlug.includes("synowatt") || lSlug.includes("solar")) img = PORTFOLIO_IMAGE_MAP.synowatt;
      else if (lSlug.includes("urban") || lSlug.includes("mall") || lSlug.includes("steps")) img = PORTFOLIO_IMAGE_MAP.urbanmall;
      else if (lSlug.includes("dallian") || lSlug.includes("hair") || lSlug.includes("beauty")) img = PORTFOLIO_IMAGE_MAP.dallian;
      return { ...p, image: img };
    });

  const live = project.status === 'published' && project.url;

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Portfolio', to: '/portfolio' }, { label: project.title }]}
        eyebrow={project.categories.join(' · ')}
        title={project.title}
        description={project.summary}
        actions={
          <div className="flex flex-wrap items-center gap-4">
            {live ? (
              <ButtonLink 
                href={project.url} 
                variant="light" 
                size="lg" 
                className="shadow-lg shadow-white/10 hover:shadow-white/20 transition-all font-semibold"
                iconRight={<ExternalLinkIcon className="h-4 w-4" aria-hidden="true" />}
              >
                View Live Project
              </ButtonLink>
            ) : (
              <span className="inline-flex h-12 items-center rounded-full bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-md">
                Coming Soon
              </span>
            )}
            <ButtonLink 
              to="/contact" 
              variant="ghostLight" 
              size="lg"
              className="hover:bg-white/10 transition-all font-semibold"
              iconRight={<ArrowRightIcon className="h-4 w-4" aria-hidden="true" />}
            >
              Start a Similar Project
            </ButtonLink>
          </div>
        }
        aside={<ProjectMockup project={project} />} 
      />
      
      {/* Project Focus & Business Impact Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 sticky top-28">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-700 mb-4 shadow-sm">
              <SparklesIcon className="h-3.5 w-3.5" />
              <span>Proven Results</span>
            </div>
            <h2 className="text-3xl font-extrabold leading-[1.15] text-navy-800 sm:text-4xl">
              What this digital experience delivers for the brand
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              We engineered this solution to captivate target audiences, build immediate trust, and drive continuous client conversions and inquiries.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl shadow-slate-100">
              <h3 className="text-lg font-bold text-navy-800 mb-6 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-growth animate-pulse" />
                Core Deliverables & Highlights
              </h3>
              
              <ul className="space-y-4">
                {project.focus.map((f, index) => (
                  <li key={index} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:bg-teal-50/40">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 mt-0.5">
                      <CheckCircle2Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <span className="text-base font-medium text-slate-700 leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              {project.technologies && project.technologies.length > 0 && (
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Technologies & Stack Used</h4>
                  <ul className="flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <li key={t} className="rounded-xl bg-slate-100 px-3.5 py-1.5 text-xs font-semibold text-navy-800 border border-slate-200/60 shadow-xs">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {!project.image && (
              <p className="mt-6 text-xs text-slate-500 italic">
                * The preview above illustrates the project’s high-end aesthetic. Visit the live website link to experience the fully functional solution.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* More Projects Section */}
      {others.length > 0 && (
        <section className="bg-slate-100/70 py-20 sm:py-24 border-t border-slate-200/60">
          <div className="container-site">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
              <div>
                <p className="text-xs font-semibold text-growth-dark uppercase tracking-wider mb-2">Explore More</p>
                <h2 className="text-2xl font-extrabold text-navy-800 sm:text-3xl">Other projects you might like</h2>
              </div>
              <ButtonLink to="/portfolio" variant="outline" className="mt-4 md:mt-0 border-ocean text-ocean hover:bg-ocean hover:text-white">
                View All Work
              </ButtonLink>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner 
        title="Ready to Elevate Your Online Presence?" 
        text="Let's build a custom digital solution that turns your website visitors into loyal, paying customers." 
        primaryLabel="Start Your Project Today" 
      />
    </>
  );
}