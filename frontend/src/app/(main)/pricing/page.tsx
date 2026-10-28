"use client";
import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckIcon, ChevronDownIcon, InfoIcon } from 'lucide-react';
import { usePageMeta } from '@/hooks/usePageMeta';
import { pricingCategories } from '@/data/pricing';
import type { Faq } from '@/types/content';
import { PageHero } from '@/components/PageHero';
import { PackageCard } from '@/components/PackageCard';
import { FaqList } from '@/components/FaqList';
import { CtaBanner } from '@/components/CtaBanner';

const pricingFaqs: Faq[] = [
  { question: 'How do payments work?', answer: 'Payment terms are set out in your written quotation. Projects typically involve a deposit before work begins, with the balance tied to agreed milestones or completion.' },
  { question: 'How long will my project take?', answer: 'Timelines depend on scope and how quickly content and feedback are provided. Indicative timelines are shown on each package and confirmed in your quote.' },
  { question: 'How many revisions are included?', answer: 'Each quote specifies the revision rounds included. Additional changes outside the agreed scope can be quoted separately.' },
  { question: 'Do you offer ongoing support?', answer: 'Yes. Maintenance, updates, and ongoing marketing can be arranged after launch as a separate monthly agreement.' },
  { question: 'Is advertising spend included in ads management?', answer: 'No. Advertising budgets are paid directly to Google or Meta. Our fee covers planning, setup, optimization, and reporting.' }
];

export default function PricingPage() {
  usePageMeta('Packages and Pricing', 'Service packages for websites, SEO, social media, ads, branding, web apps, and mobile apps from VisionSpring Agency. Request a tailored quote.');

  const [activeId, setActiveId] = useState(pricingCategories[0].id);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const active = pricingCategories.find((c) => c.id === activeId) ?? pricingCategories[0];

  // Open the category from the URL hash (e.g. /pricing#seo), including from navbar links
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && pricingCategories.some((c) => c.id === hash)) {
        setActiveId(hash);
      }
    };
    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  // Close dropdown on outside click or Escape
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const selectCategory = (id: string) => {
    setActiveId(id);
    setOpen(false);
    window.history.replaceState(null, '', `#${id}`);
    document.getElementById('pricing-panel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Pricing' }]}
        title="Packages built around your goals"
        description="Choose a starting point, then we’ll tailor the details. Final quotations depend on your requirements, scope, timeline, and agreed deliverables."
      />

      {/* Sticky dropdown bar (same style as the Services page category bar) */}
      <nav aria-label="Pricing categories" className="sticky top-[72px] z-20 border-b border-line bg-white/95 backdrop-blur">
        <div className="container-site flex items-center gap-3 py-3">
          <span className="hidden text-sm font-semibold text-muted sm:inline">Choose a service:</span>

          <div ref={dropdownRef} className="relative w-full sm:w-80">
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="flex h-11 w-full items-center justify-between gap-2 rounded-xl bg-mist px-4 text-sm font-semibold text-navy-800 ring-1 ring-line transition-colors duration-150 hover:bg-sky-soft"
            >
              <span className="truncate">{active.title}</span>
              <ChevronDownIcon
                className={`h-4 w-4 shrink-0 transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence>
              {open && (
                <motion.ul
                  role="listbox"
                  aria-label="Service categories"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
                  className="absolute left-0 right-0 top-full z-30 mt-2 max-h-80 overflow-y-auto rounded-2xl bg-white p-2 shadow-xl ring-1 ring-line"
                >
                  {pricingCategories.map((c) => (
                    <li key={c.id} role="option" aria-selected={c.id === activeId}>
                      <button
                        type="button"
                        onClick={() => selectCategory(c.id)}
                        className={`flex min-h-[44px] w-full items-center justify-between gap-2 rounded-xl px-4 py-2 text-left text-sm font-semibold transition-colors duration-150 ${
                          c.id === activeId ? 'bg-sky-soft text-ocean' : 'text-navy-800 hover:bg-mist'
                        }`}
                      >
                        {c.title}
                        {c.id === activeId && <CheckIcon className="h-4 w-4" aria-hidden="true" />}
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      <section className="scroll-mt-32 py-16 sm:py-20">
        <div className="container-site">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              id="pricing-panel"
              role="region"
              aria-label={`${active.title} packages`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="scroll-mt-32"
            >
              <div className="max-w-2xl">
                <h2 className="text-3xl font-extrabold text-navy-800">{active.title}</h2>
                <p className="mt-2 text-lg text-muted">{active.description}</p>
              </div>

              {active.note && (
                <p className="mt-5 flex items-start gap-2 rounded-xl bg-sky-soft px-4 py-3 text-sm text-navy-800">
                  <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-ocean" aria-hidden="true" />
                  {active.note}
                </p>
              )}

              <div className={`mt-10 grid gap-5 ${active.packages.length === 3 ? 'lg:grid-cols-3' : 'md:grid-cols-2 lg:max-w-4xl'}`}>
                {active.packages.map((pkg) => (
                  <PackageCard key={pkg.name} pkg={pkg} categoryTitle={active.title} serviceSlug={active.serviceSlug} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted">
            Prices are shown as “Custom pricing” until confirmed. Every project receives a written quotation based on its requirements, scope, timeline, and agreed deliverables. Third-party costs such as domains, hosting, printing, and advertising spend are quoted or paid separately.
          </p>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="mb-4 text-sm font-semibold text-growth-dark">Pricing FAQ</p>
            <h2 className="text-3xl font-extrabold leading-tight text-navy-800 sm:text-4xl">Payments, timelines, and support</h2>
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={pricingFaqs} />
          </div>
        </div>
      </section>

      <CtaBanner
        title="Need something custom?"
        text="Combine services or describe a unique project — we’ll prepare a quote that fits exactly what you need."
        primaryLabel="Request a Quote"
      />
    </>
  );
}