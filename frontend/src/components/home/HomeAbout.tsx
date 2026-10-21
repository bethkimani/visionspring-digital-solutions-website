"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRightIcon, CheckCircle2Icon, AwardIcon } from 'lucide-react';
import { values } from '../../data/about';
import { ButtonLink } from '../ButtonLink';
import { Reveal } from '../Reveal';

export function HomeAbout() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-gradient-to-b from-white via-slate-50/50 to-white">
      {/* Decorative background glow accents */}
      <div className="absolute top-1/2 left-0 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-ocean/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 -z-10 h-72 w-72 rounded-full bg-growth/10 blur-3xl" />

      <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        
        {/* Left Column: Styled Image Feature */}
        <Reveal className="lg:col-span-6 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            
            {/* Backdrop Card Accent */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-ocean/20 via-growth/20 to-sky-400/20 blur-lg transition duration-300 group-hover:opacity-100" />

            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-2 shadow-xl shadow-slate-200/50">
              <div className="relative h-[380px] w-full overflow-hidden rounded-xl sm:h-[440px]">
                <Image
                  src="/About.jpg"
                  alt="VisionSpring Agency Team at Work"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Floating Glassmorphism Experience Badge */}
            <div className="absolute -bottom-6 -right-2 sm:bottom-6 sm:-right-6 flex items-center gap-3.5 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl backdrop-blur-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-growth/10 text-growth-dark">
                <AwardIcon className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Results Driven</p>
                <p className="font-display font-extrabold text-navy-800 text-sm sm:text-base">100% Client Focused</p>
              </div>
            </div>

          </div>
        </Reveal>

        {/* Right Column: About Details & Value Grid */}
        <Reveal className="lg:col-span-6" delay={0.08}>
          <div className="inline-flex items-center gap-2 rounded-full border border-ocean/20 bg-ocean/5 px-3.5 py-1 text-xs font-semibold text-ocean mb-4">
            <CheckCircle2Icon className="h-3.5 w-3.5" />
            <span>About VisionSpring Agency</span>
          </div>

          <h2 className="text-3xl font-extrabold leading-[1.15] text-navy-800 sm:text-[2.5rem]">
            We combine technology, creativity, and digital strategy to help organizations be{" "}
            <span className="text-ocean">seen</span>, <span className="text-ocean">trusted</span>, and{" "}
            <span className="text-growth-dark">chosen</span>.
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
            VisionSpring Agency is a digital marketing and technology agency serving businesses, schools, institutions, startups, entrepreneurs, and e-commerce brands in Kenya and internationally.
          </p>

          {/* Core Values List */}
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-slate-200/80 pt-6">
            {values.map((v) => (
              <li key={v.title} className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ocean/10 text-ocean">
                  <v.icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <span className="font-display font-bold text-navy-800 text-sm sm:text-base">{v.title}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-2">
            <ButtonLink 
              to="/about" 
              variant="outline" 
              className="border-ocean text-ocean hover:bg-ocean hover:text-white shadow-sm font-semibold transition-all duration-200" 
              iconRight={<ArrowRightIcon className="h-4 w-4" aria-hidden="true" />}
            >
              Learn More About Us
            </ButtonLink>
          </div>
        </Reveal>

      </div>
    </section>
  );
}