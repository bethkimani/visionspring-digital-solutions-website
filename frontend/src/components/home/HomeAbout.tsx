import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, AwardIcon, LifeBuoyIcon, MapPinIcon, TagIcon, WalletIcon } from 'lucide-react';
import { ButtonLink } from '../ButtonLink';
import { Reveal } from '../Reveal';

// Short, checkable promises. Only keep the ones that are true for every project.
const highlights = [
  { icon: TagIcon, title: 'Fixed-price quotes', text: 'Know the cost upfront' },
  { icon: WalletIcon, title: 'M-Pesa checkout', text: 'Customers pay from their phones' },
  { icon: MapPinIcon, title: 'Found on Google', text: 'Search and Maps visibility' },
  { icon: LifeBuoyIcon, title: 'Support after launch', text: 'Training and updates' },
];

export function HomeAbout() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-18 lg:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white">
      {/* Decorative background glow accents */}
      <div className="absolute top-1/2 left-0 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-ocean/10 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-10 right-0 -z-10 h-72 w-72 rounded-full bg-growth/10 blur-3xl" aria-hidden="true" />

      <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-14">

        {/* Left Column: Styled Video Feature */}
        <Reveal className="lg:col-span-6 relative">
          <div className="relative mx-auto max-w-lg lg:max-w-none">

            {/* Ambient Glow */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-ocean/15 via-growth/15 to-sky-400/15 blur-xl" aria-hidden="true" />

            {/* Main Video Card with Core Web Vitals optimizations */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-2 sm:p-2.5 shadow-xl shadow-slate-200/60">
              <div className="relative h-[280px] sm:h-[360px] lg:h-[390px] w-full overflow-hidden rounded-xl bg-slate-900">
                <video
                  src="/laptopworking.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                  poster="/0aa3ec03-531c-4f65-95c3-e112d0599b75.jpg"
                  aria-hidden="true"
                  tabIndex={-1}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-4 right-4 sm:-bottom-4 sm:right-6 flex items-center gap-3 rounded-xl border border-white/90 bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur-md">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-growth/10 text-growth-dark">
                <AwardIcon className="h-5 w-5 text-emerald-600" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 leading-none">Based in Nairobi</p>
                <p className="font-display font-bold text-navy-800 text-xs sm:text-sm mt-0.5">Fast, Secure &amp; Supported</p>
              </div>
            </div>

          </div>
        </Reveal>

        {/* Right Column: About Details */}
        <Reveal className="lg:col-span-6" delay={0.08}>
          <div className="space-y-5">
            <h2 className="text-2xl font-extrabold leading-[1.2] text-navy-800 sm:text-3xl lg:text-4xl">
              Nairobi Web Design That Brings You Customers
            </h2>

            <p className="text-base leading-relaxed text-slate-600">
              From{' '}
              <Link href="/services/website-development" className="font-semibold text-ocean hover:underline">
                websites
              </Link>{' '}
              and{' '}
              <Link href="/services/web-applications" className="font-semibold text-ocean hover:underline">
                software
              </Link>{' '}
              to{' '}
              <Link href="/services/seo" className="font-semibold text-ocean hover:underline">
                SEO
              </Link>{' '}
              and{' '}
              <Link href="/services/google-ads" className="font-semibold text-ocean hover:underline">
                ads
              </Link>
              , we help Kenyan businesses get found, contacted and paid.
            </p>

            <ul className="grid gap-3 pt-1 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, title, text }) => (
                <li
                  key={title}
                  className="flex items-start gap-3 rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-ocean/40 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-sky-100 bg-sky-50 text-ocean">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-navy-800">{title}</p>
                    <p className="mt-0.5 text-xs leading-snug text-slate-600">{text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <ButtonLink
                to="/about"
                variant="outline"
                size="md"
                className="border-ocean text-ocean hover:bg-ocean hover:text-white shadow-sm font-semibold transition-all duration-200"
                iconRight={<ArrowRightIcon className="h-4 w-4" aria-hidden="true" />}
              >
                About Us
              </ButtonLink>
              <ButtonLink
                to="/pricing"
                variant="outline"
                size="md"
                className="text-slate-700 hover:border-ocean hover:text-ocean font-semibold"
              >
                See Pricing
              </ButtonLink>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}