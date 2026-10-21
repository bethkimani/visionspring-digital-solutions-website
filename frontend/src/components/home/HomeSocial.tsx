import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { socialSamples } from '../../data/socialSamples';
import { ButtonLink } from '../ButtonLink';
import { Reveal } from '../Reveal';
import { SampleBadge } from '../SampleBadge';
import { SocialPostMockup } from '../mockups/SocialPostMockup';
import { SearchAdMockup } from '../mockups/SearchAdMockup';
import { ContentCalendarMockup } from '../mockups/ContentCalendarMockup';

export function HomeSocial() {
  return (
    <section className="bg-navy-950 py-20 text-white sm:py-28">
      <div className="container-site grid items-center gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="mb-4 text-sm font-semibold text-growth-light">Social media and digital marketing</p>
          <h2 className="text-3xl font-extrabold leading-[1.1] sm:text-4xl">Show up consistently where your customers spend their time.</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Content calendars, branded posts, search ads, and campaign creative — planned around your goals, posting frequency, and budget.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/social-media" variant="light" iconRight={<ArrowRightIcon className="h-4 w-4" aria-hidden="true" />}>
              See the Showcase
            </ButtonLink>
            <ButtonLink to="/services/social-media-management" variant="ghostLight">
              Social Media Management
            </ButtonLink>
          </div>
        </Reveal>
        <Reveal className="relative lg:col-span-7" delay={0.08}>
          <SampleBadge tone="light" label="Illustrative samples — not client campaigns" className="absolute -top-10 right-0" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <SocialPostMockup sample={socialSamples[1]} className="sm:translate-y-8" />
            <div className="space-y-4">
              <SocialPostMockup sample={socialSamples[2]} />
            </div>
            <div className="col-span-2 space-y-4 sm:col-span-1 sm:translate-y-4">
              <SearchAdMockup query="solar installation company" />
              <ContentCalendarMockup className="hidden sm:block" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}