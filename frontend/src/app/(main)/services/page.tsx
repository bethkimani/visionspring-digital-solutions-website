"use client";
import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { usePageMeta } from '@/hooks/usePageMeta';
import { services } from '@/data/services';
import type { ServiceGroup } from '@/types/content';
import { PageHero } from '@/components/PageHero';
import { ButtonLink } from '@/components/ButtonLink';
import { Reveal } from '@/components/Reveal';
import { ServiceCard } from '@/components/ServiceCard';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { whatsappLink } from '@/utils/whatsapp';

const groups: {id: ServiceGroup;title: string;text: string;}[] = [
{ id: 'Build', title: 'Build your foundation', text: 'Websites, web applications, and mobile apps that give your business a professional, functional home online.' },
{ id: 'Grow', title: 'Grow your audience', text: 'Search, social, and advertising services that help the right people find and engage with you.' },
{ id: 'Brand', title: 'Shape your identity', text: 'Branding and design that keep you recognisable and professional everywhere.' }];


export default function ServicesPage() {
  usePageMeta('Services', 'Website development, web applications, SEO, social media management, Google Ads, Facebook and Instagram ads, branding, and mobile app development.');

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        title="Digital services designed around your business goals"
        description="Eight specialist services, one connected strategy. Choose a single service or combine them — we’ll tailor the plan to your objectives, timeline, and budget."
        actions={
        <>
            <ButtonLink to="/contact" variant="light" size="lg">Request a Quote</ButtonLink>
            <ButtonLink href={whatsappLink("Hello VisionSpring Agency, I'd like help choosing the right service.")} variant="whatsapp" size="lg" icon={<WhatsAppIcon className="h-5 w-5" />}>
              Ask on WhatsApp
            </ButtonLink>
          </>
        } />
      

      <nav aria-label="Service categories" className="sticky top-[72px] z-20 border-b border-line bg-white/95 backdrop-blur">
        <div className="container-site flex gap-1 overflow-x-auto py-3 scrollbar-none">
          {groups.map((g) =>
          <a key={g.id} href={`#${g.id.toLowerCase()}`} className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold text-navy-800 transition-colors duration-150 hover:bg-mist">
              {g.title}
            </a>
          )}
        </div>
      </nav>

      {groups.map((g, gi) =>
      <section key={g.id} id={g.id.toLowerCase()} className={`scroll-mt-32 py-16 sm:py-20 ${gi % 2 === 1 ? 'bg-mist' : ''}`}>
          <div className="container-site">
            <Reveal className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold text-growth-dark">{g.id}</p>
              <h2 className="text-3xl font-extrabold text-navy-800 sm:text-4xl">{g.title}</h2>
              <p className="mt-3 text-lg text-muted">{g.text}</p>
            </Reveal>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {services.
            filter((s) => s.group === g.id).
            map((service, i) =>
            <Reveal key={service.slug} delay={i * 0.05} className="h-full">
                    <ServiceCard service={service} variant="full" />
                  </Reveal>
            )}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 sm:py-24">
        <div className="container-site">
          <Reveal>
            <div className="grid items-center gap-8 rounded-[2rem] border border-line p-8 sm:p-12 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <h2 className="text-3xl font-extrabold text-navy-800 sm:text-4xl">Not Sure Which Service You Need?</h2>
                <p className="mt-3 max-w-2xl text-lg text-muted">Tell us what you want to achieve. We’ll recommend the right mix of services — even if that’s just one.</p>
              </div>
              <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
                <ButtonLink to="/contact?service=not-sure" size="lg" iconRight={<ArrowRightIcon className="h-4 w-4" aria-hidden="true" />}>
                  Contact Our Team
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>);

}