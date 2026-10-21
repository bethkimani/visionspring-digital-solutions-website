"use client";
import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { usePageMeta } from '@/hooks/usePageMeta';
import { mission, vision, values, approach, audiences } from '@/data/about';
import { PageHero } from '@/components/PageHero';
import { ButtonLink } from '@/components/ButtonLink';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { CtaBanner } from '@/components/CtaBanner';
import { LogoBadge } from '@/components/Logo';

const pillars = [
{ label: 'Technology', text: 'Websites, apps, and platforms that work reliably.', color: '#1565C0', cx: 120, cy: 120 },
{ label: 'Design', text: 'Brands and interfaces people trust and remember.', color: '#1EA7E1', cx: 220, cy: 120 },
{ label: 'Marketing', text: 'SEO, social, and ads that bring the right people.', color: '#14A971', cx: 170, cy: 205 }];


export default function AboutPage() {
  usePageMeta('About Us', 'VisionSpring Agency is a digital marketing and technology agency helping businesses, institutions, startups, and entrepreneurs grow online.');

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
        title="We Turn Business Ideas Into Digital Experiences."
        description="VisionSpring Agency is a digital marketing and technology agency helping businesses, institutions, startups, and entrepreneurs establish their online presence and connect with their audiences. We combine technology, creativity, and digital strategy to deliver practical solutions tailored to our clients’ goals."
        actions={
        <>
            <ButtonLink to="/contact" variant="light" size="lg">Discuss Your Project</ButtonLink>
            <ButtonLink to="/services" variant="ghostLight" size="lg">Our Services</ButtonLink>
          </>
        }
        aside={
        <div className="flex justify-center lg:justify-end">
            <LogoBadge size={300} decorative className="shadow-[0_0_100px_rgba(30,167,225,0.35)] ring-[12px] ring-white/10" />
          </div>
        } />
      

      <section className="py-20 sm:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="mb-4 text-sm font-semibold text-growth-dark">Who we are</p>
            <h2 className="text-3xl font-extrabold leading-tight text-navy-800 sm:text-4xl">A partner for the whole digital journey</h2>
          </Reveal>
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-7" delay={0.06}>
            <p>Whether you are launching your first website, modernising how your school runs, or looking to reach more customers online, we help you take the next step with clarity and confidence.</p>
            <p>We work with organizations in Kenya and internationally — listening carefully, recommending what genuinely fits, and building solutions that are practical to run and easy to grow.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-950 py-20 text-white sm:py-24">
        <div className="container-site grid gap-6 md:grid-cols-2">
          {[
          { title: 'Our mission', text: mission, accent: 'text-sky-light' },
          { title: 'Our vision', text: vision, accent: 'text-growth-light' }].
          map((item, i) =>
          <Reveal key={item.title} delay={i * 0.06} className="h-full">
              <div className="h-full rounded-[2rem] bg-white/5 p-8 ring-1 ring-white/10 sm:p-10">
                <h2 className={`text-sm font-semibold ${item.accent}`}>{item.title}</h2>
                <p className="mt-4 font-display text-2xl font-bold leading-snug sm:text-[1.7rem]">{item.text}</p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading eyebrow="Our values" title="What guides every project" />
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) =>
            <Reveal key={v.title} delay={i * 0.05}>
                <div className="border-t-2 border-navy-800 pt-6">
                  <v.icon className="h-7 w-7 text-ocean" aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-extrabold text-navy-800">{v.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{v.text}</p>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-28">
        <div className="container-site grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="mb-4 text-sm font-semibold text-growth-dark">Where it comes together</p>
            <h2 className="text-3xl font-extrabold leading-tight text-navy-800 sm:text-4xl">Technology, design, and marketing work best as one</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              A beautiful website no one finds won’t grow your business. Neither will ads that send people to a confusing page. We plan all three together, so every part of your digital presence supports the others.
            </p>
            <ul className="mt-8 space-y-4">
              {pillars.map((p) =>
              <li key={p.label} className="flex items-start gap-4">
                  <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full" style={{ background: p.color }} aria-hidden="true" />
                  <p className="text-[15px] text-muted">
                    <span className="font-bold text-navy-800">{p.label}.</span> {p.text}
                  </p>
                </li>
              )}
            </ul>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={0.08}>
            <svg viewBox="0 0 340 320" className="mx-auto w-full max-w-[420px]" role="img" aria-label="Diagram showing technology, design, and marketing overlapping, with growth at the centre">
              {pillars.map((p) =>
              <g key={p.label}>
                  <circle cx={p.cx} cy={p.cy} r="92" fill={p.color} fillOpacity="0.12" stroke={p.color} strokeWidth="2" />
                </g>
              )}
              <text x="80" y="98" fill="#0B2A5B" fontFamily="Manrope" fontWeight="800" fontSize="15" textAnchor="middle">Technology</text>
              <text x="262" y="98" fill="#0B2A5B" fontFamily="Manrope" fontWeight="800" fontSize="15" textAnchor="middle">Design</text>
              <text x="170" y="262" fill="#0B2A5B" fontFamily="Manrope" fontWeight="800" fontSize="15" textAnchor="middle">Marketing</text>
              <circle cx="170" cy="150" r="30" fill="#0B2A5B" />
              <text x="170" y="155" fill="#FFFFFF" fontFamily="Manrope" fontWeight="800" fontSize="12" textAnchor="middle">Growth</text>
            </svg>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="mb-4 text-sm font-semibold text-growth-dark">Our approach</p>
              <h2 className="text-3xl font-extrabold leading-tight text-navy-800 sm:text-4xl">We start by understanding your business</h2>
            </Reveal>
            <ol className="mt-10 space-y-7">
              {approach.map((a, i) =>
              <li key={a.title} className="flex gap-5">
                  <span className="font-display text-sm font-extrabold text-ocean">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-bold text-navy-800">{a.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-muted">{a.text}</p>
                  </div>
                </li>
              )}
            </ol>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="mb-4 text-sm font-semibold text-growth-dark">Who we serve</p>
              <h2 className="text-3xl font-extrabold leading-tight text-navy-800 sm:text-4xl">Built for organizations of every size</h2>
            </Reveal>
            <ul className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
              {audiences.map((a) =>
              <li key={a.title} className="bg-white p-6">
                  <h3 className="font-bold text-navy-800">{a.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{a.text}</p>
                </li>
              )}
            </ul>
            <ButtonLink to="/portfolio" variant="outline" className="mt-8" iconRight={<ArrowRightIcon className="h-4 w-4" aria-hidden="true" />}>
              See Our Work
            </ButtonLink>
          </div>
        </div>
      </section>

      <CtaBanner title="Let’s discuss your project" text="Share your ideas with us and we’ll help you shape them into a clear, achievable digital plan." primaryLabel="Discuss a Project" />
    </>);

}