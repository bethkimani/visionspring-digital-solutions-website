"use client";

import React from 'react';
import { ArrowRightIcon, AwardIcon } from 'lucide-react';
import { ButtonLink } from '../ButtonLink';
import { Reveal } from '../Reveal';

export function HomeAbout() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-18 lg:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white">
      {/* Decorative background glow accents */}
      <div className="absolute top-1/2 left-0 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-ocean/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 -z-10 h-72 w-72 rounded-full bg-growth/10 blur-3xl" />

      <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        
        {/* Left Column: Styled Video Feature */}
        <Reveal className="lg:col-span-6 relative">
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            
            {/* Subtle Ambient Glow */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-ocean/15 via-growth/15 to-sky-400/15 blur-xl" />

            {/* Main Video Card */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-2 sm:p-2.5 shadow-xl shadow-slate-200/60">
              <div className="relative h-[280px] sm:h-[360px] lg:h-[390px] w-full overflow-hidden rounded-xl bg-slate-900">
                <video
                  src="/laptopworking.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-4 right-4 sm:-bottom-4 sm:right-6 flex items-center gap-3 rounded-xl border border-white/90 bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur-md">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-growth/10 text-growth-dark">
                <AwardIcon className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 leading-none">Results Driven</p>
                <p className="font-display font-bold text-navy-800 text-xs sm:text-sm mt-0.5">100% Client Focused</p>
              </div>
            </div>

          </div>
        </Reveal>

        {/* Right Column: About Details */}
        <Reveal className="lg:col-span-6" delay={0.08}>
          <div className="space-y-4 sm:space-y-5">
            <h2 className="text-2xl font-extrabold leading-[1.2] text-navy-800 sm:text-3xl lg:text-4xl">
              We combine technology, creativity &amp; strategy to help your brand grow.
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              VisionSpring Agency is a digital marketing and technology agency in Kenya. We build modern websites, develop scalable web applications, and run targeted campaigns that turn visitors into loyal customers.
            </p>

            <ul className="space-y-2.5 pt-1 text-sm font-medium text-slate-700">
              <li className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-growth/15 text-growth-dark text-xs font-bold">
                  ✓
                </span>
                <span>Custom websites &amp; web apps built for performance and conversions</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-growth/15 text-growth-dark text-xs font-bold">
                  ✓
                </span>
                <span>Targeted SEO, Google Ads, and social media growth strategies</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-growth/15 text-growth-dark text-xs font-bold">
                  ✓
                </span>
                <span>Dedicated ongoing maintenance, optimization, and transparent reporting</span>
              </li>
            </ul>

            <div className="pt-2">
              <ButtonLink 
                to="/about" 
                variant="outline" 
                size="md"
                className="border-ocean text-ocean hover:bg-ocean hover:text-white shadow-sm font-semibold transition-all duration-200" 
                iconRight={<ArrowRightIcon className="h-4 w-4" aria-hidden="true" />}
              >
                Learn More About Us
              </ButtonLink>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
