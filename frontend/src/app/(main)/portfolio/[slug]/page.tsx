"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { CheckIcon, ExternalLinkIcon } from 'lucide-react';
import { usePageMeta } from '@/hooks/usePageMeta';
import { projects } from '@/data/projects';
import { PageHero } from '@/components/PageHero';
import { ProjectMockup } from '@/components/ProjectMockup';
import { ProjectCard } from '@/components/ProjectCard';
import { ButtonLink } from '@/components/ButtonLink';
import { CtaBanner } from '@/components/CtaBanner';
import { NotFoundPage } from '@/components/NotFoundPage';

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug && p.status !== 'draft');
  usePageMeta(project ? `${project.title} — Portfolio` : 'Project not found', project ? project.summary : 'This project could not be found.');

  if (!project) return <NotFoundPage />;
  const others = projects.filter((p) => p.slug !== project.slug && p.status !== 'draft').slice(0, 3);
  const live = project.status === 'published' && project.url;

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Portfolio', to: '/portfolio' }, { label: project.title }]}
        eyebrow={project.categories.join(' · ')}
        title={project.title}
        description={project.summary}
        actions={
        <>
            {live ?
          <ButtonLink href={project.url} variant="light" size="lg" iconRight={<ExternalLinkIcon className="h-4 w-4" aria-hidden="true" />}>
                View Live Project
              </ButtonLink> :

          <span className="inline-flex h-12 items-center rounded-full bg-white/10 px-6 text-sm font-semibold text-white">Coming soon</span>
          }
            <ButtonLink to="/contact" variant="ghostLight" size="lg">Start a Similar Project</ButtonLink>
          </>
        }
        aside={<ProjectMockup project={project} />} />
      

      <section className="py-20 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-4 text-sm font-semibold text-growth-dark">Project focus</p>
            <h2 className="text-3xl font-extrabold leading-tight text-navy-800 sm:text-4xl">What the website delivers</h2>
          </div>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-line border-y border-line">
              {project.focus.map((f) =>
              <li key={f} className="flex items-center gap-3 py-4 text-lg text-navy-800">
                  <CheckIcon className="h-5 w-5 text-growth-dark" aria-hidden="true" />
                  {f}
                </li>
              )}
            </ul>
            {project.technologies && project.technologies.length > 0 &&
            <div className="mt-8">
                <h3 className="text-sm font-semibold text-navy-800">Technologies</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((t) =>
                <li key={t} className="rounded-full bg-mist px-3 py-1 text-sm text-navy-800">{t}</li>
                )}
                </ul>
              </div>
            }
            {!project.image &&
            <p className="mt-8 text-sm text-muted">The preview above is a representative illustration of the project’s style. Visit the live website to see the real experience.</p>
            }
          </div>
        </div>
      </section>

      {others.length > 0 &&
      <section className="bg-mist py-20 sm:py-24">
          <div className="container-site">
            <h2 className="text-2xl font-extrabold text-navy-800 sm:text-3xl">More projects</h2>
            <div className="mt-10 grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {others.map((p) =>
            <ProjectCard key={p.slug} project={p} />
            )}
            </div>
          </div>
        </section>
      }

      <CtaBanner title="Have a Project in Mind?" text="We’d love to hear about it. Share your goals and we’ll recommend the right approach." primaryLabel="Start Your Project" />
    </>);

}