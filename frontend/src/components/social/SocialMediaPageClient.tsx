"use client";

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon, InfoIcon } from 'lucide-react';
import { socialSamples } from '@/data/socialSamples';
import { services } from '@/data/services';
import { PageHero } from '@/components/PageHero';
import { ButtonLink } from '@/components/ButtonLink';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { CtaBanner } from '@/components/CtaBanner';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { PhoneFrame } from '@/components/mockups/PhoneFrame';
import { ProfileGridMockup } from '@/components/mockups/ProfileGridMockup';
import { SocialPostMockup } from '@/components/mockups/SocialPostMockup';
import { ContentCalendarMockup } from '@/components/mockups/ContentCalendarMockup';
import { SearchAdMockup } from '@/components/mockups/SearchAdMockup';
import { SeoReportMockup } from '@/components/mockups/SeoReportMockup';
import { BrandBoardMockup } from '@/components/mockups/BrandBoardMockup';
import { DashboardMockup } from '@/components/mockups/DashboardMockup';
import { whatsappLink } from '@/utils/whatsapp';

const tabs = ['Platform layouts', 'Planning', 'Search and SEO', 'Campaign creative'] as const;
type Tab = (typeof tabs)[number];

const tailoring = [
  {
    title: 'Your objectives',
    text: 'Awareness, enquiries, store visits, or online sales — content and channels are chosen to match.',
  },
  {
    title: 'Content requirements',
    text: 'Graphics, short-form video concepts, carousels, captions, or a mix based on your brand and audience.',
  },
  {
    title: 'Posting frequency',
    text: 'From a steady weekly rhythm to daily activity, agreed with you and reflected in your calendar.',
  },
  {
    title: 'Your budget',
    text: 'Packages scale to fit. Advertising spend, when used, is always separate and paid to the platform.',
  },
];

const SOCIAL_MESSAGE = "Hello VisionSpring Agency, I'd like a quote for social media management.";

function TikTokConcept() {
  return (
    <PhoneFrame dark className="w-44">
      <div className="relative flex h-full flex-col justify-end bg-navy-800 p-3 pb-6 text-white">
        <div
          className="absolute inset-x-0 top-1/4 mx-auto h-24 w-24 rounded-full border-[10px] border-growth/60"
          aria-hidden="true"
        />
        <p className="font-display text-sm font-extrabold leading-tight">3 tips for a faster website</p>
        <p className="mt-1 text-[9px] text-white/70">@samplebrand · Concept</p>
        <div className="absolute bottom-16 right-2 flex flex-col gap-3" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-6 w-6 rounded-full bg-white/20" />
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

export function SocialMediaPageClient() {
  const [activeTab, setActiveTab] = useState<Tab>('Platform layouts');
  const [activeSample, setActiveSample] = useState(0);
  const sample = socialSamples[activeSample];
  const relatedServices = services.filter((s) => s.group === 'Grow');
  const tabListRef = useRef<HTMLDivElement>(null);

  const prevSample = () => {
    setActiveSample((i) => (i === 0 ? socialSamples.length - 1 : i - 1));
  };
  const nextSample = () => {
    setActiveSample((i) => (i === socialSamples.length - 1 ? 0 : i + 1));
  };

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Social Media & Marketing' }]}
        title="Social Media and Digital Marketing Creative"
        description="A showcase of branded layouts, content planning, search ads, and campaign assets. Every package is tailored to your business, frequency, and audience."
        actions={
          <>
            <ButtonLink to="/contact?service=social-media-management" variant="light" size="lg">
              Get a Social Media Quote
            </ButtonLink>
            <ButtonLink
              href={whatsappLink(SOCIAL_MESSAGE)}
              variant="whatsapp"
              size="lg"
              icon={<WhatsAppIcon className="h-5 w-5" />}
            >
              Ask on WhatsApp
            </ButtonLink>
          </>
        }
      />

      <section className="border-b border-line bg-white">
        <div className="container-site">
          <div
            ref={tabListRef}
            role="tablist"
            aria-label="Marketing showcases"
            className="-mx-5 flex overflow-x-auto px-5 scrollbar-none sm:mx-0 sm:justify-center sm:px-0"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                id={`tab-${tab.replace(/\s+/g, '-').toLowerCase()}`}
                aria-selected={activeTab === tab}
                aria-controls={`panel-${tab.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => setActiveTab(tab)}
                className={`relative whitespace-nowrap px-6 py-5 text-sm font-semibold transition-colors duration-150 ${
                  activeTab === tab ? 'text-navy-800' : 'text-muted hover:text-navy-800'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.span
                    layoutId="active-tab"
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-ocean"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-site">
          <AnimatePresence mode="wait">
            {activeTab === 'Platform layouts' && (
              <motion.div
                key="layouts"
                role="tabpanel"
                id="panel-platform-layouts"
                aria-labelledby="tab-platform-layouts"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-16"
              >
                <div>
                  <SectionHeading
                    eyebrow="Platform variety"
                    title="Layouts designed for where you publish"
                    description="From Instagram grids to TikTok video concepts and LinkedIn carousels — consistent branding adapted to each channel."
                  />
                  <div className="mt-12 grid items-center gap-10 lg:grid-cols-12">
                    <div className="flex justify-center lg:col-span-5">
                      <ProfileGridMockup />
                    </div>
                    <div className="space-y-6 lg:col-span-7">
                      <div className="rounded-3xl bg-mist p-8 sm:p-10">
                        <h3 className="text-xl font-bold text-navy-800">
                          Instagram profile cohesion
                        </h3>
                        <p className="mt-2 text-base text-muted">
                          Your profile grid is your visual homepage on Instagram. We plan post
                          types and colours so the overall grid looks deliberate, trustworthy, and
                          on-brand.
                        </p>
                      </div>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="flex justify-center rounded-3xl bg-mist p-6">
                          <TikTokConcept />
                        </div>
                        <div className="flex flex-col justify-between rounded-3xl bg-navy-950 p-6 text-white">
                          <div>
                            <span className="text-xs font-semibold text-growth-light">
                              Short-form video
                            </span>
                            <h4 className="mt-2 text-lg font-bold">TikTok and Reels concepts</h4>
                            <p className="mt-2 text-sm text-white/70">
                              Hooks, scripts, and visual storyboards designed to hold attention in
                              the first three seconds.
                            </p>
                          </div>
                          <Link
                            href="/contact?service=social-media-management"
                            className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-growth-light hover:underline"
                          >
                            Ask about video concepts
                            <ArrowRightIcon className="h-3 w-3" aria-hidden="true" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-line pt-16">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-growth-dark">Post styles</p>
                      <h3 className="mt-1 text-2xl font-extrabold text-navy-800 sm:text-3xl">
                        Educational, celebratory, and promotional formats
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={prevSample}
                        aria-label="Previous sample"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-navy-800 hover:border-ocean hover:text-ocean"
                      >
                        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                      <span className="text-xs text-muted" aria-live="polite">
                        {activeSample + 1} of {socialSamples.length}
                      </span>
                      <button
                        type="button"
                        onClick={nextSample}
                        aria-label="Next sample"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-navy-800 hover:border-ocean hover:text-ocean"
                      >
                        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-8 grid items-center gap-8 rounded-[2rem] bg-mist p-6 sm:p-10 lg:grid-cols-12">
                    <div className="flex justify-center lg:col-span-5">
                      <SocialPostMockup sample={sample} />
                    </div>
                    <div className="space-y-4 lg:col-span-7">
                      <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-navy-800">
                        {sample.platform}
                      </span>
                      <h4 className="text-2xl font-extrabold text-navy-800">{sample.headline}</h4>
                      <p className="text-base text-muted">{sample.caption}</p>
                      <div className="pt-2">
                        <p className="text-xs font-semibold text-navy-800">Brand</p>
                        <p className="mt-1 text-xs text-ocean font-medium">{sample.brand}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'Planning' && (
              <motion.div
                key="planning"
                role="tabpanel"
                id="panel-planning"
                aria-labelledby="tab-planning"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-12"
              >
                <SectionHeading
                  eyebrow="Consistency without the scramble"
                  title="Content calendars planned in advance"
                  description="Know what is being published, on which channel, and why — well before the week begins."
                />
                <ContentCalendarMockup />
              </motion.div>
            )}

            {activeTab === 'Search and SEO' && (
              <motion.div
                key="search"
                role="tabpanel"
                id="panel-search-and-seo"
                aria-labelledby="tab-search-and-seo"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-12"
              >
                <SectionHeading
                  eyebrow="Search presence"
                  title="Search ads and local visibility"
                  description="Show up when customers are actively searching for your service in your area."
                />
                <div className="grid gap-8 lg:grid-cols-2">
                  <div className="rounded-[2rem] bg-mist p-8 sm:p-10">
                    <h3 className="text-xl font-bold text-navy-800">Google Search Ads preview</h3>
                    <p className="mt-2 text-sm text-muted">
                      Compelling headlines, relevant sitelinks, and clear calls to action.
                    </p>
                    <div className="mt-6">
                      <SearchAdMockup query="solar installation company in Nairobi" />
                    </div>
                  </div>
                  <div className="rounded-[2rem] bg-mist p-8 sm:p-10">
                    <h3 className="text-xl font-bold text-navy-800">SEO progress reporting</h3>
                    <p className="mt-2 text-sm text-muted">
                      Transparent monthly reports showing ranking improvements and organic traffic.
                    </p>
                    <div className="mt-6">
                      <SeoReportMockup />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'Campaign creative' && (
              <motion.div
                key="campaign"
                role="tabpanel"
                id="panel-campaign-creative"
                aria-labelledby="tab-campaign-creative"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-12"
              >
                <SectionHeading
                  eyebrow="Brand consistency"
                  title="Creative that looks like one company"
                  description="From brand guideline boards to live marketing dashboards — professional visual identity everywhere."
                />
                <div className="grid gap-8 lg:grid-cols-2">
                  <BrandBoardMockup />
                  <DashboardMockup />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Tailored to you"
            title="Every package is built around four things"
            description="We do not offer one-size-fits-all retainers. Your plan is shaped by your business stage, goals, and capacity."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tailoring.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.05} className="h-full">
                <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-line">
                  <span className="font-display text-sm font-extrabold text-growth-dark">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-navy-800">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Connected services"
            title="Services that work alongside marketing"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex items-center justify-between rounded-2xl border border-line p-5 transition-colors duration-150 hover:border-ocean hover:bg-sky-soft/40"
              >
                <span className="font-semibold text-navy-800 group-hover:text-ocean">
                  {s.title}
                </span>
                <ArrowRightIcon
                  className="h-4 w-4 text-muted transition-transform duration-150 group-hover:translate-x-1 group-hover:text-ocean"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to show up consistently?"
        text="Tell us what you want to achieve with social media or digital marketing, and we’ll recommend the right starting point."
        primaryLabel="Request a Quote"
        primaryTo="/contact?service=social-media-management"
        whatsappMessage={SOCIAL_MESSAGE}
      />
    </>
  );
}
