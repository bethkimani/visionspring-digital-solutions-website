import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { services } from '../../data/services';
import { ButtonLink } from '../ButtonLink';
import { Reveal } from '../Reveal';
import { SectionHeading } from '../SectionHeading';
import { ServiceCard } from '../ServiceCard';
import { WhatsAppIcon } from '../WhatsAppIcon';
import { whatsappLink } from '@/utils/whatsapp';

export function HomeServices() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-slate-50 via-sky-50/25 to-slate-50">
      {/* Subtle ambient light accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-0 h-80 w-[600px] -translate-x-1/2 rounded-full bg-ocean/5 blur-3xl" aria-hidden="true" />

      <div className="container-site relative z-10">
        <SectionHeading
          eyebrow="Our Services"
          title="Web Design, SEO &amp; Marketing Services in Kenya"
          description="Everything to build, grow and brand your business online."
          action={
            <ButtonLink to="/services" variant="secondary" iconRight={<ArrowRightIcon className="h-4 w-4" aria-hidden="true" />}>
              All Services
            </ButtonLink>
          }
        />

        {/* Renders every service in data/services, so all eight are linked from the homepage */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={Math.min(i * 0.04, 0.24)} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <p className="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-sm text-slate-600">
          Not sure what you need?
          <a
            href={whatsappLink("Hello VisionSpring Agency, I'm not sure which service I need. Can you advise?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-growth-dark hover:underline"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Chat with us on WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}