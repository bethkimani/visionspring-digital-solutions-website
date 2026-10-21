import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { projects } from '../../data/projects';
import { ButtonLink } from '../ButtonLink';
import { ProjectCarousel } from '../ProjectCarousel';
import { Reveal } from '../Reveal';
import { SectionHeading } from '../SectionHeading';

export function HomePortfolio() {
  const featured = projects.filter((p) => p.status === 'published' && p.featured);
  return (
    <section className="py-20 sm:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Featured work"
          title="Live projects we’ve delivered"
          description="Explore published websites built for brands in beauty, e-commerce, and renewable energy."
          action={
          <ButtonLink to="/portfolio" variant="outline" iconRight={<ArrowRightIcon className="h-4 w-4" aria-hidden="true" />}>
              View All Projects
            </ButtonLink>
          } />
        
        <Reveal className="mt-12">
          <ProjectCarousel projects={featured} />
        </Reveal>
      </div>
    </section>);

}