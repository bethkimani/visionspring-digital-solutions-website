import React from 'react';
import type { Project } from '../types/content';
import { BrowserFrame } from './mockups/BrowserFrame';
import { WebsiteMockup } from './mockups/WebsiteMockup';
import { SampleBadge } from './SampleBadge';
import { ImageWithFallback } from './ImageWithFallback';

interface ProjectMockupProps {
  project: Project;
  className?: string;
}

export function ProjectMockup({ project, className = '' }: ProjectMockupProps) {
  const domain = project.url ? project.url.replace(/^https?:\/\//, '').replace(/\/$/, '') : 'coming soon';
  const websitePreview = (
    <div className="aspect-[16/10] overflow-hidden" style={{ background: project.theme.background }}>
      <WebsiteMockup
        title={project.title}
        background={project.theme.background}
        surface={project.theme.surface}
        accent={project.theme.accent}
        text={project.theme.text}
      />
    </div>
  );

  return (
    <div className={`relative ${className}`}>
      <BrowserFrame url={domain}>
        {project.image ? (
          <ImageWithFallback
            src={project.image}
            alt={`Screenshot of the ${project.title} website`}
            width={1200}
            height={750}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="block aspect-[16/10] w-full object-cover object-top"
            fallback={
              <div className="relative">
                {websitePreview}
                <SampleBadge label="Representative preview" className="absolute bottom-3 left-3" />
              </div>
            }
          />
        ) : (
          websitePreview
        )}
      </BrowserFrame>
      {!project.image && <SampleBadge label="Representative preview" className="absolute bottom-3 left-3" />}
    </div>
  );
}
