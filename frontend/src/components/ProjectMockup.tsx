import React from 'react';
import type { Project } from '../types/content';
import { BrowserFrame } from './mockups/BrowserFrame';
import { WebsiteMockup } from './mockups/WebsiteMockup';
import { SampleBadge } from './SampleBadge';

interface ProjectMockupProps {
  project: Project;
  className?: string;
}

export function ProjectMockup({ project, className = '' }: ProjectMockupProps) {
  const domain = project.url ? project.url.replace(/^https?:\/\//, '').replace(/\/$/, '') : 'coming soon';
  return (
    <div className={`relative ${className}`}>
      <BrowserFrame url={domain}>
        {project.image ?
        <img src={project.image} alt={`Screenshot of the ${project.title} website`} className="aspect-[16/10] w-full object-cover object-top" /> :

        <div className="aspect-[16/10] overflow-hidden" style={{ background: project.theme.background }}>
            <WebsiteMockup
            title={project.title}
            background={project.theme.background}
            surface={project.theme.surface}
            accent={project.theme.accent}
            text={project.theme.text} />
          
          </div>
        }
      </BrowserFrame>
      {!project.image && <SampleBadge label="Representative preview" className="absolute bottom-3 left-3" />}
    </div>);

}