import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { services } from '../../data/services';
import { ButtonLink } from '../ButtonLink';
import { Reveal } from '../Reveal';
import { SectionHeading } from '../SectionHeading';
import { ServiceCard } from '../ServiceCard';

export function HomeServices() {
  return (
    <section className="bg-mist py-20 sm:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="What we do"
          title="Everything your business needs to grow online"
          description="Build a strong foundation, reach the right audience, and look professional everywhere — with one partner."
          action={
          <ButtonLink to="/services" variant="secondary" iconRight={<ArrowRightIcon className="h-4 w-4" aria-hidden="true" />}>
              Explore Services
            </ButtonLink>
          } />
        
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) =>
          <Reveal key={service.slug} delay={Math.min(i * 0.04, 0.24)} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}