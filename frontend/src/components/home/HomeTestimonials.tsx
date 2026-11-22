"use client";

import React, { useRef, useState } from 'react';
import {
  StarIcon,
  TrendingUpIcon,
  ZapIcon,
  ShieldCheckIcon,
  ClockIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-react';
import { Reveal } from '../Reveal';
import { SectionHeading } from '../SectionHeading';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  project: string;
  metric: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Mercy K.',
    role: 'Founder & Managing Director',
    company: 'Dallian Luxe Hair (Nairobi, Kenya)',
    project: 'E-Commerce Website & M-Pesa Checkout',
    metric: '+140% Mobile Orders',
    quote:
      'VisionSpring built our online hair store with automated Lipa na M-Pesa checkout. Our cart abandonment dropped significantly because customers can now pay in 10 seconds right from their phones. The site is super fast, modern, and easy to manage.',
  },
  {
    name: 'Eng. Simon N.',
    role: 'Technical Director',
    company: 'Synowatt Power & Solar Ltd (Nairobi, Kenya)',
    project: 'Corporate Solar Portal & Quote Calculator',
    metric: '2x Inquiries in 60 Days',
    quote:
      'Our commercial solar leads doubled within two months of launching the new website. The built-in solar sizing calculator helps homeowners and businesses estimate their needs before calling us. VisionSpring’s SEO setup has given us consistent organic Google leads.',
  },
  {
    name: 'Brian M.',
    role: 'Operations & Technology Lead',
    company: 'UrbanMall Kenya (E-Commerce Platform)',
    project: 'Custom Multi-Vendor Marketplace',
    metric: '100% M-Pesa Reliability',
    quote:
      'Finding a software agency in Nairobi that delivers custom web applications on time without bugs is hard. VisionSpring engineered our multi-vendor platform cleanly with robust database architecture and seamless payment settlement.',
  },
];

const stats = [
  {
    icon: <ZapIcon className="h-5 w-5 sm:h-6 sm:w-6 text-teal-400" aria-hidden="true" />,
    value: '95+',
    label: 'Google Mobile Speed',
  },
  {
    icon: <ClockIcon className="h-5 w-5 sm:h-6 sm:w-6 text-teal-400" aria-hidden="true" />,
    value: '7–14 Days',
    label: 'Typical Project Delivery',
  },
  {
    icon: <ShieldCheckIcon className="h-5 w-5 sm:h-6 sm:w-6 text-teal-400" aria-hidden="true" />,
    value: '100%',
    label: 'M-Pesa STK Reliability',
  },
  {
    icon: <TrendingUpIcon className="h-5 w-5 sm:h-6 sm:w-6 text-teal-400" aria-hidden="true" />,
    value: 'Nairobi, KE',
    label: 'Dedicated Local Tech Team',
  },
];

export function HomeTestimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, children } = scrollRef.current;
    if (!children.length) return;
    const firstChild = children[0] as HTMLElement;
    const itemWidth = firstChild ? firstChild.offsetWidth + 14 : 290;
    const index = Math.round(scrollLeft / itemWidth);
    setActiveIndex(Math.min(Math.max(index, 0), testimonials.length - 1));
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.children[index] as HTMLElement;
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      setActiveIndex(index);
    }
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-slate-50 border-t border-slate-200/70">
      <div className="container-site">
        <SectionHeading
          eyebrow="Client Reviews &amp; Proven Results"
          title="Trusted by Growing Businesses in Nairobi &amp; Across Kenya"
          description="Read genuine feedback and see measurable results achieved by businesses that partner with VisionSpring Agency for web design, e-commerce, and custom software."
        />

        {/* Testimonials: Carousel on Mobile (< md), Grid on Desktop (md+) */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="mt-8 sm:mt-12 flex md:grid gap-3.5 sm:gap-6 md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none -mx-5 px-5 md:mx-0 md:px-0 py-2 scroll-smooth touch-pan-x"
        >
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className="w-[74vw] max-w-[285px] sm:w-[320px] md:w-auto shrink-0 snap-start md:shrink flex flex-col"
            >
              <Reveal delay={idx * 0.08} className="h-full flex flex-col">
                <figure className="flex h-full flex-col justify-between rounded-3xl border border-line bg-white p-5 sm:p-6 md:p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div>
                    {/* Star Rating */}
                    <div className="flex items-center gap-1 text-amber-400" aria-label="5 out of 5 stars">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                      ))}
                    </div>

                    {/* Result Metric Badge */}
                    {t.metric && (
                      <div className="mt-3.5 sm:mt-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800 border border-emerald-200">
                        <TrendingUpIcon className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                        <span>{t.metric}</span>
                      </div>
                    )}

                    {/* Quote */}
                    <blockquote className="mt-3.5 sm:mt-4 text-sm sm:text-[15px] leading-relaxed text-slate-700 italic">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                  </div>

                  {/* Author Info */}
                  <figcaption className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-line">
                    <p className="font-display font-bold text-navy-900 text-sm">{t.name}</p>
                    <p className="text-xs text-slate-600 font-medium">{t.role}</p>
                    <p className="text-xs text-ocean font-semibold mt-0.5">{t.company}</p>
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Indicators & Controls */}
        <div className="mt-5 flex items-center justify-between md:hidden px-1">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-200 ${
                  activeIndex === i ? 'w-6 bg-ocean' : 'w-2 bg-slate-300'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              aria-label="Previous testimonial"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-white text-navy-800 shadow-sm transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollToIndex(Math.min(testimonials.length - 1, activeIndex + 1))}
              disabled={activeIndex === testimonials.length - 1}
              aria-label="Next testimonial"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-white text-navy-800 shadow-sm transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Concrete Performance Metrics Strip */}
        <div className="mt-12 rounded-2xl bg-navy-950 p-6 sm:p-8 text-white shadow-xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {stats.map((s, idx) => (
              <div key={s.label} className={idx === 0 ? 'pt-2 sm:pt-0' : 'pt-4 sm:pt-0'}>
                <div className="flex items-center justify-center gap-1.5 text-teal-400 font-bold text-2xl sm:text-3xl font-display">
                  {s.icon}
                  <span>{s.value}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
