import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, ExternalLinkIcon } from 'lucide-react';
import type { Project } from '../types/content';
import { ProjectMockup } from './ProjectMockup';

export function ProjectCard({ project }: {project: Project;}) {
  const isPublished = project.status === 'published' && project.url;
  return (
    <article className="group flex h-full flex-col">
      <Link
        href={`/portfolio/${project.slug}`}
        className="block rounded-2xl bg-mist p-4 transition-[transform,background-color] duration-200 ease-out hover:-translate-y-1 hover:bg-sky-soft sm:p-6"
        aria-label={`View ${project.title} project details`}>
        
        <ProjectMockup project={project} />
      </Link>
      <div className="flex flex-1 flex-col pt-5">
        <div className="flex flex-wrap gap-2">
          {project.categories.map((c) =>
          <span key={c} className="rounded-full border border-line px-2.5 py-0.5 text-xs font-medium text-muted">
              {c}
            </span>
          )}
          {project.status === 'coming-soon' &&
          <span className="rounded-full bg-growth-soft px-2.5 py-0.5 text-xs font-semibold text-growth-dark">Coming soon</span>
          }
        </div>
        <h3 className="mt-3 text-xl font-extrabold text-navy-800">
          <Link href={`/portfolio/${project.slug}`} className="hover:text-ocean">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
        <div className="mt-auto flex flex-wrap items-center gap-4 pt-5 text-sm font-semibold">
          {isPublished &&
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-ocean hover:text-ocean-dark">
              View Live Project
              <ExternalLinkIcon className="h-4 w-4" aria-hidden="true" />
            </a>
          }
          <Link href={`/portfolio/${project.slug}`} className="inline-flex items-center gap-1.5 text-navy-800 hover:text-ocean">
            Project details
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>);

}