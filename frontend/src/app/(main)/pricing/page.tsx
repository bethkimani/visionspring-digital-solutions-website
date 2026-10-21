"use client";
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { InfoIcon } from 'lucide-react';
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
{ question: 'Is advertising spend included in ads management?', answer: 'No. Advertising budgets are paid directly to Google or Meta. Our fee covers planning, setup, optimization, and reporting.' }];


export default function PricingPage() {
  usePageMeta('Packages and Pricing', 'Service packages for websites, SEO, social media, ads, branding, web apps, and mobile apps from VisionSpring Agency. Request a tailored quote.');
  const [activeId, setActiveId] = useState(pricingCategories[0].id);
  const active = pricingCategories.find((c) => c.id === activeId) ?? pricingCategories[0];

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Pricing' }]}
        title="Packages built around your goals"
        description="Choose a starting point, then we’ll tailor the details. Final quotations depend on your requirements, scope, timeline, and agreed deliverables." />
      

      <section className="py-16 sm:py-20">
        <div className="container-site">
          <div className="-mx-5 overflow-x-auto px-5 scrollbar-none sm:mx-0 sm:px-0">
            <div className="flex gap-2 pb-1" role="tablist" aria-label="Service categories">
              {pricingCategories.map((c) =>
              <button
                key={c.id}
                type="button"
                role="tab"
                id={`tab-${c.id}`}
                aria-selected={c.id === activeId}
                aria-controls="pricing-panel"
                onClick={() => setActiveId(c.id)}
                className={`h-10 whitespace-nowrap rounded-full px-4 text-sm font-semibold transition-colors duration-150 ${
                c.id === activeId ? 'bg-navy-800 text-white' : 'bg-mist text-navy-800 hover:bg-sky-soft'}`
                }>
                
                  {c.title}
                </button>
              )}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              id="pricing-panel"
              role="tabpanel"
              aria-labelledby={`tab-${active.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="mt-10">
              
              <div className="max-w-2xl">
                <h2 className="text-3xl font-extrabold text-navy-800">{active.title}</h2>
                <p className="mt-2 text-lg text-muted">{active.description}</p>
              </div>
              {active.note &&
              <p className="mt-5 flex items-start gap-2 rounded-xl bg-sky-soft px-4 py-3 text-sm text-navy-800">
                  <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-ocean" aria-hidden="true" />
                  {active.note}
                </p>
              }
              <div className={`mt-10 grid gap-5 ${active.packages.length === 3 ? 'lg:grid-cols-3' : 'md:grid-cols-2 lg:max-w-4xl'}`}>
                {active.packages.map((pkg) =>
                <PackageCard key={pkg.name} pkg={pkg} categoryTitle={active.title} serviceSlug={active.serviceSlug} />
                )}
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

      <CtaBanner title="Need something custom?" text="Combine services or describe a unique project — we’ll prepare a quote that fits exactly what you need." primaryLabel="Request a Quote" />
    </>);

}