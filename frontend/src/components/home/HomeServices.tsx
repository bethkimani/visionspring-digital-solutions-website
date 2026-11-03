import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { services } from '../../data/services';
import { ButtonLink } from '../ButtonLink';
import { Reveal } from '../Reveal';
import { SectionHeading } from '../SectionHeading';
import { ServiceCard } from '../ServiceCard';

export function HomeServices() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-slate-50 via-sky-50/25 to-slate-50">
      {/* Subtle ambient light accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-0 h-80 w-[600px] -translate-x-1/2 rounded-full bg-ocean/5 blur-3xl" />

      <div className="container-site relative z-10">
        <SectionHeading
          eyebrow="What we do"
          title="Everything your business needs to grow online"
          description="Build a strong foundation, reach the right audience, and look professional everywhere — with one partner."
          action={
            <ButtonLink to="/services" variant="secondary" iconRight={<ArrowRightIcon className="h-4 w-4" aria-hidden="true" />}>
              Explore Services
            </ButtonLink>
          } 
        />
        
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={Math.min(i * 0.04, 0.24)} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
