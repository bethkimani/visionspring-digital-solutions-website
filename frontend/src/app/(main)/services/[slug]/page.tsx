"use client";
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowRightIcon, CheckIcon, InfoIcon } from 'lucide-react';
import { usePageMeta } from '@/hooks/usePageMeta';
import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { PageHero } from '@/components/PageHero';
import { ButtonLink } from '@/components/ButtonLink';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceVisual } from '@/components/ServiceVisual';
import { FaqList } from '@/components/FaqList';
import { EnquiryForm } from '@/components/EnquiryForm';
import { ProjectCard } from '@/components/ProjectCard';
import { SampleBadge } from '@/components/SampleBadge';
import { CtaBanner } from '@/components/CtaBanner';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { whatsappLink } from '@/utils/whatsapp';
import { NotFoundPage } from '@/components/NotFoundPage';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);
  usePageMeta(service ? service.title : 'Service not found', service ? service.summary : 'This service could not be found.');

  if (!service) return <NotFoundPage />;

  const related = service.related.map((r) => services.find((s) => s.slug === r)).filter((s): s is NonNullable<typeof s> => Boolean(s));
  const published = projects.filter((p) => p.status === 'published');
  const Icon = service.icon;

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: service.navTitle }]}
        eyebrow={
        <span className="inline-flex items-center gap-2">
            <Icon className="h-4 w-4" aria-hidden="true" />
            {service.title}
          </span>
        }
        title={service.headline}
        description={service.intro}
        actions={
        <>
            <ButtonLink to={`/contact?service=${service.slug}`} variant="light" size="lg">Request a Quote</ButtonLink>
            <ButtonLink href={whatsappLink(service.whatsappMessage)} variant="whatsapp" size="lg" icon={<WhatsAppIcon className="h-5 w-5" />}>
              Ask on WhatsApp
            </ButtonLink>
          </>
        }
        aside={<ServiceVisual kind={service.visual} />} />
      

      {service.note &&
      <div className="border-b border-line bg-sky-soft">
          <div className="container-site flex items-start gap-3 py-4 text-sm text-navy-800">
            <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-ocean" aria-hidden="true" />
            <p>{service.note}</p>
          </div>
        </div>
      }

      <section className="py-20 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="mb-4 text-sm font-semibold text-growth-dark">Sound familiar?</p>
            <h2 className="text-3xl font-extrabold leading-tight text-navy-800 sm:text-4xl">Challenges we help you solve</h2>
          </Reveal>
          <ul className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            {service.problems.map((p, i) =>
            <li key={p.title}>
                <Reveal delay={i * 0.05}>
                  <span className="block h-1 w-10 rounded-full bg-sky" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-bold text-navy-800">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.text}</p>
                </Reveal>
              </li>
            )}
          </ul>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading eyebrow="What we deliver" title={`Our ${service.navTitle.toLowerCase()} solutions`} />
          <ul className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {service.solutions.map((s) =>
            <li key={s.title} className="bg-white p-7">
                <h3 className="flex items-center gap-2 text-lg font-bold text-navy-800">
                  <CheckIcon className="h-5 w-5 text-growth-dark" aria-hidden="true" />
                  {s.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.text}</p>
              </li>
            )}
          </ul>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-site grid gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="mb-4 text-sm font-semibold text-growth-dark">Why it matters</p>
              <h2 className="text-3xl font-extrabold leading-tight text-navy-800 sm:text-4xl">Benefits for your organization</h2>
            </Reveal>
            <dl className="mt-10 grid gap-8 sm:grid-cols-2">
              {service.benefits.map((b) =>
              <div key={b.title}>
                  <dt className="font-display text-lg font-bold text-navy-800">{b.title}</dt>
                  <dd className="mt-1.5 text-[15px] leading-relaxed text-muted">{b.text}</dd>
                </div>
              )}
            </dl>
          </div>
          <Reveal delay={0.06}>
            <div className="rounded-[2rem] bg-navy-950 p-8 text-white sm:p-10">
              <p className="text-sm font-semibold text-growth-light">Our process</p>
              <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">How we work together</h2>
              <ol className="relative mt-8 space-y-7">
                <span className="absolute bottom-3 left-[17px] top-3 w-px bg-white/15" aria-hidden="true" />
                {service.process.map((step, i) =>
                <li key={step.title} className="relative flex gap-5">
                    <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ocean font-display text-sm font-extrabold">{i + 1}</span>
                    <div className="pt-1">
                      <h3 className="font-bold">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/70">{step.text}</p>
                    </div>
                  </li>
                )}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <div className="container-site">
          {service.showcase === 'projects' && published.length > 0 ?
          <>
              <SectionHeading
              eyebrow="Recent work"
              title="Websites we’ve launched"
              action={<ButtonLink to="/portfolio" variant="outline" iconRight={<ArrowRightIcon className="h-4 w-4" aria-hidden="true" />}>View All Projects</ButtonLink>} />
            
              <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-6">
                {published.slice(0, 3).map((p) =>
              <ProjectCard key={p.slug} project={p} />
              )}
              </div>
            </> :

          <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <SampleBadge className="mb-5" />
                <h2 className="text-3xl font-extrabold leading-tight text-navy-800 sm:text-4xl">What {service.navTitle.toLowerCase()} can look like</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  This is an illustrative mockup created to show the kind of work we deliver — not a specific client project. Ask us to walk you through relevant examples.
                </p>
                <ButtonLink to="/portfolio" variant="outline" className="mt-8" iconRight={<ArrowRightIcon className="h-4 w-4" aria-hidden="true" />}>
                  See Live Projects
                </ButtonLink>
              </div>
              <div className="lg:col-span-7">
                <ServiceVisual kind={service.visual} />
              </div>
            </div>
          }
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="mb-4 text-sm font-semibold text-growth-dark">FAQ</p>
            <h2 className="text-3xl font-extrabold leading-tight text-navy-800 sm:text-4xl">Questions about {service.navTitle.toLowerCase()}</h2>
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={service.faqs} />
          </div>
        </div>
      </section>

      <section id="enquire" className="bg-mist py-20 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="mb-4 text-sm font-semibold text-growth-dark">Request a quote</p>
            <h2 className="text-3xl font-extrabold leading-tight text-navy-800 sm:text-4xl">Tell us about your {service.navTitle.toLowerCase()} project</h2>
            <p className="mt-4 text-muted">We’ll review your details and get back to you with recommendations and next steps.</p>
            <div className="mt-10 border-t border-line pt-8">
              <h3 className="text-sm font-semibold text-navy-800">Related services</h3>
              <ul className="mt-4 space-y-2">
                {related.map((r) =>
                <li key={r.slug}>
                    <Link href={`/services/${r.slug}`} className="group flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-semibold text-navy-800 ring-1 ring-line transition-colors duration-150 hover:text-ocean hover:ring-ocean/40">
                      {r.title}
                      <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="rounded-[2rem] bg-white p-6 ring-1 ring-line sm:p-10 lg:col-span-8">
            <EnquiryForm key={service.slug} defaultService={service.slug} />
          </div>
        </div>
      </section>

      <CtaBanner
        title={`Ready to get started with ${service.navTitle.toLowerCase()}?`}
        text="Book a free consultation and we’ll help you define the right scope, timeline, and next steps."
        primaryTo={`/contact?service=${service.slug}`}
        whatsappMessage={service.whatsappMessage} />
      
    </>);

}