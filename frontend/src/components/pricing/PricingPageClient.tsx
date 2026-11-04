"use client";

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon, InfoIcon } from 'lucide-react';
import { pricingCategories, pricingFaqs } from '@/data/pricing';
import type { Faq } from '@/types/content';
import { PageHero } from '@/components/PageHero';
import { PackageCard } from '@/components/PackageCard';
import { FaqList } from '@/components/FaqList';
import { CtaBanner } from '@/components/CtaBanner';

export function PricingPageClient() {
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

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Pricing & Packages' }]}
        title="Transparent Packages &amp; Clear Quotes for Your Business"
        description="Every business has different goals and budgets. These packages outline what is included at each stage — we provide an honest, written quote with fixed milestone pricing and zero hidden costs."
      />

      <section className="py-16 sm:py-20">
        <div className="container-site">
          {/* Custom Select Dropdown (Mobile) */}
          <div className="relative mb-10 md:hidden" ref={dropdownRef}>
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-12 w-full items-center justify-between rounded-2xl border border-line bg-white px-4 text-left font-semibold text-navy-800 shadow-sm transition-colors duration-150 focus:border-ocean focus:outline-none"
            >
              <span>{active.title}</span>
              <ChevronDownIcon
                className={`h-4 w-4 text-muted transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
            {open && (
              <ul
                role="listbox"
                className="absolute z-20 mt-2 max-h-72 w-full overflow-auto rounded-2xl border border-line bg-white p-2 shadow-xl"
              >
                {pricingCategories.map((c) => (
                  <li key={c.id}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={c.id === activeId}
                      onClick={() => {
                        setActiveId(c.id);
                        setOpen(false);
                      }}
                      className={`w-full rounded-xl px-4 py-2.5 text-left text-sm font-semibold transition-colors duration-150 ${
                        c.id === activeId ? 'bg-navy-800 text-white' : 'text-navy-800 hover:bg-mist'
                      }`}
                    >
                      {c.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Tab Navigation (Desktop) */}
          <nav
            aria-label="Pricing categories"
            className="hidden flex-wrap justify-center gap-2 border-b border-line pb-8 md:flex"
          >
            {pricingCategories.map((c) => (
              <button
                key={c.id}
                type="button"
                aria-pressed={c.id === activeId}
                onClick={() => setActiveId(c.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-150 ${
                  c.id === activeId
                    ? 'bg-navy-800 text-white'
                    : 'text-navy-800 hover:bg-mist hover:text-ocean'
                }`}
              >
                {c.title}
              </button>
            ))}
          </nav>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="mt-12"
            >
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-2xl font-extrabold text-navy-800 sm:text-3xl">
                  {active.title} Packages
                </h2>
                <p className="mt-2 text-base text-muted">{active.description}</p>
                {active.note && (
                  <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-sky-soft px-4 py-1.5 text-xs font-medium text-navy-800">
                    <InfoIcon className="h-3.5 w-3.5 text-ocean" aria-hidden="true" />
                    {active.note}
                  </p>
                )}
              </div>

              <div className="mt-12 grid gap-8 lg:grid-cols-3">
                {active.packages.map((pkg) => (
                  <PackageCard
                    key={pkg.name}
                    pkg={pkg}
                    categoryTitle={active.title}
                    serviceSlug={active.serviceSlug}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="mb-4 text-sm font-semibold text-growth-dark">FAQ</p>
            <h2 className="text-3xl font-extrabold leading-tight text-navy-800 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-muted">
              Have a question that isn’t covered here? Ask our team directly.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={pricingFaqs} />
          </div>
        </div>
      </section>

      <CtaBanner
        title="Need a tailored quotation?"
        text="Tell us what you want to achieve and we’ll recommend the right package — or put together a custom proposal."
        primaryLabel="Request a Quote"
      />
    </>
  );
}
