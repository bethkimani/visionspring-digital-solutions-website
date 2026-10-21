"use client";
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon, InfoIcon } from 'lucide-react';
import { usePageMeta } from '@/hooks/usePageMeta';
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
{ title: 'Your objectives', text: 'Awareness, enquiries, store visits, or online sales — content and channels are chosen to match.' },
{ title: 'Content requirements', text: 'Graphics, short-form video concepts, carousels, captions, or a mix based on your brand and audience.' },
{ title: 'Posting frequency', text: 'From a steady weekly rhythm to daily activity, agreed with you and reflected in your calendar.' },
{ title: 'Your budget', text: 'Packages scale to fit. Advertising spend, when used, is always separate and paid to the platform.' }];


const SOCIAL_MESSAGE = "Hello VisionSpring Agency, I'd like a quote for social media management.";

function TikTokConcept() {
  return (
    <PhoneFrame dark className="w-44">
      <div className="relative flex h-full flex-col justify-end bg-navy-800 p-3 pb-6 text-white">
        <div className="absolute inset-x-0 top-1/4 mx-auto h-24 w-24 rounded-full border-[10px] border-growth/60" aria-hidden="true" />
        <p className="font-display text-sm font-extrabold leading-tight">3 tips for a faster website</p>
        <p className="mt-1 text-[9px] text-white/70">@samplebrand · Concept</p>
        <div className="absolute bottom-16 right-2 flex flex-col gap-3" aria-hidden="true">
          {[0, 1, 2].map((i) =>
          <span key={i} className="h-6 w-6 rounded-full bg-white/20" />
          )}
        </div>
      </div>
    </PhoneFrame>);

}

function FacebookPageMockup() {
  return (
    <div className="w-full max-w-[340px] overflow-hidden rounded-2xl bg-white shadow-[0_24px_50px_-28px_rgba(4,20,46,0.6)] ring-1 ring-black/5">
      <div className="h-20 bg-ocean" />
      <div className="px-4 pb-4">
        <span className="-mt-7 flex h-14 w-14 items-center justify-center rounded-full bg-navy-800 text-xs font-bold text-white ring-4 ring-white">SA</span>
        <p className="mt-2 text-sm font-bold text-navy-800">Sample Academy</p>
        <p className="text-[10px] text-muted">Education · Facebook page layout</p>
        <div className="mt-3 flex gap-3 border-b border-line pb-2 text-[10px] font-semibold text-muted">
          <span className="text-ocean">Posts</span>
          <span>About</span>
          <span>Photos</span>
          <span>Events</span>
        </div>
        <div className="mt-3 rounded-xl bg-mist p-3">
          <span className="block h-1.5 w-9/12 rounded-full bg-navy-800/30" />
          <span className="mt-1.5 block h-1.5 w-6/12 rounded-full bg-navy-800/20" />
          <div className="mt-3 h-20 rounded-lg bg-sky-soft" />
        </div>
      </div>
    </div>);

}

function PromoCampaignMockup() {
  return (
    <div className="overflow-hidden rounded-2xl bg-navy-800 p-6 text-white shadow-[0_24px_50px_-28px_rgba(4,20,46,0.6)]">
      <p className="text-[10px] font-semibold text-growth-light">Sample e-commerce campaign</p>
      <p className="mt-3 font-display text-2xl font-extrabold leading-tight">Weekend offer on selected items</p>
      <p className="mt-2 text-xs text-white/70">Shop online · Delivery available</p>
      <div className="mt-5 grid grid-cols-3 gap-2">
        {['#1EA7E1', '#14A971', '#F4F7FB'].map((c) =>
        <span key={c} className="aspect-square rounded-lg" style={{ background: c }} />
        )}
      </div>
      <span className="mt-5 inline-flex h-8 items-center rounded-full bg-white px-4 text-xs font-bold text-navy-800">Shop now</span>
    </div>);

}

export default function SocialMediaPage() {
  usePageMeta('Social Media Showcase', 'Illustrative samples of social media content, content calendars, search ads, and campaign creative from VisionSpring Agency.');
  const [tab, setTab] = useState<Tab>('Platform layouts');
  const scroller = useRef<HTMLDivElement>(null);
  const relatedSlugs = ['social-media-management', 'meta-ads', 'google-ads', 'seo', 'branding-design'];
  const related = services.filter((s) => relatedSlugs.includes(s.slug));

  const scrollBy = (dir: number) => scroller.current?.scrollBy({ left: dir * 280, behavior: 'smooth' });

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Social Media' }]}
        title="Your Brand Deserves to Be Seen, Heard, and Remembered."
        description="Explore the kind of content, campaigns, and reporting we create — from branded posts and content calendars to search ads and SEO dashboards."
        actions={
        <>
            <ButtonLink to="/contact?service=social-media-management" variant="light" size="lg">Request a Social Media Quote</ButtonLink>
            <ButtonLink href={whatsappLink(SOCIAL_MESSAGE)} variant="whatsapp" size="lg" icon={<WhatsAppIcon className="h-5 w-5" />}>
              WhatsApp Us
            </ButtonLink>
          </>
        }
        aside={
        <div className="flex items-end justify-center gap-5">
            <div className="w-48">
              <PhoneFrame>
                <ProfileGridMockup />
              </PhoneFrame>
            </div>
            <SocialPostMockup sample={socialSamples[4]} className="hidden w-52 sm:block" />
          </div>
        } />
      

      <div className="border-b border-line bg-sky-soft">
        <div className="container-site flex items-start gap-3 py-4 text-sm text-navy-800">
          <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-ocean" aria-hidden="true" />
          <p>All visuals on this page are illustrative samples using fictional brands, created to demonstrate our capabilities. They are not client campaigns or accounts we manage.</p>
        </div>
      </div>

      <section className="py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Branded posts"
            title="Scroll-stopping content, consistently on-brand"
            action={
            <div className="flex gap-2">
                <button type="button" onClick={() => scrollBy(-1)} aria-label="Scroll posts left" className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-navy-800 transition-colors duration-150 hover:border-ocean hover:text-ocean">
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <button type="button" onClick={() => scrollBy(1)} aria-label="Scroll posts right" className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-navy-800 transition-colors duration-150 hover:border-ocean hover:text-ocean">
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            } />
          
        </div>
        <div ref={scroller} className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-6 scrollbar-none sm:px-8 xl:px-[max(2rem,calc((100vw-1240px)/2+2rem))]">
          {socialSamples.map((s) =>
          <div key={s.id} className="w-[250px] shrink-0 snap-start">
              <SocialPostMockup sample={s} />
            </div>
          )}
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading eyebrow="Beyond the post" title="Everything that goes into a strong digital presence" />
          <div className="mt-10 flex gap-2 overflow-x-auto scrollbar-none" role="tablist" aria-label="Showcase categories">
            {tabs.map((t) =>
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
              className={`h-10 whitespace-nowrap rounded-full px-4 text-sm font-semibold transition-colors duration-150 ${tab === t ? 'bg-navy-800 text-white' : 'bg-white text-navy-800 ring-1 ring-line hover:ring-ocean/50'}`}>
              
                {t}
              </button>
            )}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              role="tabpanel"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="mt-10">
              
              {tab === 'Platform layouts' &&
              <div className="grid items-end gap-10 md:grid-cols-3">
                  <figure className="flex flex-col items-center">
                    <div className="w-48"><PhoneFrame><ProfileGridMockup brand="Sample Boutique" /></PhoneFrame></div>
                    <figcaption className="mt-4 text-sm font-semibold text-navy-800">Instagram profile layout</figcaption>
                  </figure>
                  <figure className="flex flex-col items-center">
                    <FacebookPageMockup />
                    <figcaption className="mt-4 text-sm font-semibold text-navy-800">Facebook page layout</figcaption>
                  </figure>
                  <figure className="flex flex-col items-center">
                    <div className="flex items-end gap-4">
                      <TikTokConcept />
                    </div>
                    <figcaption className="mt-4 text-sm font-semibold text-navy-800">TikTok content concept</figcaption>
                  </figure>
                </div>
              }
              {tab === 'Planning' &&
              <div className="grid items-start gap-8 lg:grid-cols-2">
                  <figure>
                    <ContentCalendarMockup />
                    <figcaption className="mt-4 text-sm font-semibold text-navy-800">Monthly content calendar</figcaption>
                  </figure>
                  <figure>
                    <SocialPostMockup sample={socialSamples[4]} className="mx-auto max-w-[340px]" />
                    <figcaption className="mt-4 text-center text-sm font-semibold text-navy-800">LinkedIn business content</figcaption>
                  </figure>
                </div>
              }
              {tab === 'Search and SEO' &&
              <div className="grid items-start gap-8 lg:grid-cols-3">
                  <figure>
                    <SearchAdMockup query="school website design" />
                    <figcaption className="mt-4 text-sm font-semibold text-navy-800">Google search advertisement</figcaption>
                  </figure>
                  <figure>
                    <SeoReportMockup />
                    <figcaption className="mt-4 text-sm font-semibold text-navy-800">Keyword tracking dashboard</figcaption>
                  </figure>
                  <figure>
                    <DashboardMockup title="Monthly SEO report" />
                    <figcaption className="mt-4 text-sm font-semibold text-navy-800">Performance report overview</figcaption>
                  </figure>
                </div>
              }
              {tab === 'Campaign creative' &&
              <div className="grid items-start gap-8 lg:grid-cols-3">
                  <figure>
                    <BrandBoardMockup />
                    <figcaption className="mt-4 text-sm font-semibold text-navy-800">Branding and campaign creative</figcaption>
                  </figure>
                  <figure>
                    <PromoCampaignMockup />
                    <figcaption className="mt-4 text-sm font-semibold text-navy-800">E-commerce promotional campaign</figcaption>
                  </figure>
                  <figure>
                    <SocialPostMockup sample={socialSamples[5]} />
                    <figcaption className="mt-4 text-sm font-semibold text-navy-800">Promotional graphic</figcaption>
                  </figure>
                </div>
              }
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="mb-4 text-sm font-semibold text-growth-dark">Tailored to you</p>
            <h2 className="text-3xl font-extrabold leading-tight text-navy-800 sm:text-4xl">No two social strategies are the same</h2>
            <p className="mt-4 text-lg text-muted">We shape every plan around four things:</p>
            <ButtonLink to="/contact?service=social-media-management" className="mt-8" size="lg">Request a Social Media Quote</ButtonLink>
          </Reveal>
          <dl className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
            {tailoring.map((t, i) =>
            <Reveal key={t.title} delay={i * 0.05}>
                <dt className="border-t-2 border-growth pt-5 font-display text-lg font-bold text-navy-800">{t.title}</dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-muted">{t.text}</dd>
              </Reveal>
            )}
          </dl>
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="container-site">
          <h2 className="text-xl font-extrabold text-navy-800">Related services</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {related.map((s) =>
            <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="group inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-navy-800 ring-1 ring-line transition-colors duration-150 hover:text-ocean hover:ring-ocean/40">
                  {s.navTitle}
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </section>

      <CtaBanner
        title="Let’s make your brand impossible to ignore"
        text="Tell us about your audience and goals, and we’ll put together a social media plan that fits your budget."
        primaryLabel="Request a Social Media Quote"
        primaryTo="/contact?service=social-media-management"
        whatsappMessage={SOCIAL_MESSAGE} />
      
    </>);

}