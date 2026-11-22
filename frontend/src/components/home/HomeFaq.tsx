import React from 'react';
import Link from 'next/link';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from 'lucide-react';
import { FaqList } from '../FaqList';
import { SectionHeading } from '../SectionHeading';
import { site } from '@/data/site';
import { whatsappLink } from '@/utils/whatsapp';
import { WhatsAppIcon } from '../WhatsAppIcon';
import type { Faq } from '@/types/content';

// These also feed the FAQ structured data in page.tsx.
// Keep every price and timeline identical to what you publish on /pricing.
export const homeFaqs: Faq[] = [
  {
    question: 'How much does a website cost in Kenya?',
    answer:
      'A business website usually costs KES 20,000 to 60,000. Online stores with M-Pesa checkout and custom web apps start from about KES 30,000. You get a fixed-price written quote before we start, so there are no hidden charges.',
  },
  {
    question: 'Can you add M-Pesa payments to my website?',
    answer:
      'Yes. We integrate Safaricom Daraja STK push, so customers pay with their M-Pesa PIN on their phone and your order is confirmed automatically.',
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'A starter website (up to 5 pages) takes 2 to 3 days. A business website (up to 12 pages) takes 3 to 5 days. An online store takes 1 to 2 weeks. Time starts when we receive your content.',
  },
  {
    question: 'Will my website show up on Google?',
    answer:
      'Every site we build is set up for search: fast on mobile, clean code, a sitemap, Google Search Console and local keywords. No one can guarantee a Google ranking, but this gives you the best start, and our SEO service builds on it.',
  },
  {
    question: 'What digital marketing services do you offer?',
    answer:
      'SEO, Google Ads, Facebook and Instagram ads, and social media management. We start with your goals, agree a monthly plan, and send you a report every month.',
  },
  {
    question: 'Do you support us after the website launches?',
    answer:
      'Yes. We train your team to update the site, and offer maintenance plans with security updates, backups and speed checks.',
  },
];

const areasServed = [
  'Nairobi CBD',
  'Westlands',
  'Parklands',
  'Kilimani',
  'Kileleshwa',
  'Upper Hill',
  'Karen',
  "Lang'ata",
  'Kiambu',
  'Ruiru',
  'Thika',
  'Juja',
  'Mombasa',
  'Nakuru',
  'Eldoret',
  'Kisumu',
];

export function HomeFaq() {
  return (
    <section id="faq" className="relative overflow-hidden py-16 sm:py-24 bg-white">
      <div className="container-site">
        <SectionHeading
          eyebrow="FAQ"
          title="Web Design &amp; Marketing FAQs for Kenya"
          description="Short answers on cost, M-Pesa, timelines and Google."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* FAQ Accordion Column */}
          <div className="lg:col-span-8">
            <FaqList faqs={homeFaqs} />

            <div className="mt-8 rounded-2xl border border-sky-100 bg-sky-50/70 p-5 text-sm">
              <p className="font-semibold text-navy-900">Still have a question?</p>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                <a
                  href={whatsappLink('Hello VisionSpring Agency, I have a question about my project.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-growth-dark hover:underline"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Ask on WhatsApp
                </a>
                <span className="text-slate-300" aria-hidden="true">•</span>
                <Link href="/pricing" className="font-semibold text-ocean hover:underline">
                  See pricing →
                </Link>
              </div>
            </div>
          </div>

          {/* Contact & Areas Column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Contact Card */}
            <div className="rounded-2xl border border-line bg-slate-50 p-6 shadow-sm">
              <h3 className="font-display text-base font-bold text-navy-900">Contact VisionSpring</h3>

              <div className="mt-5 space-y-3.5 text-sm">
                <div className="flex items-start gap-3 text-slate-700">
                  <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-ocean" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-navy-900">Location</p>
                    {/* Add your street address here if you have an office: customers check for one */}
                    <p className="text-xs text-slate-600">Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700">
                  <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-navy-900">Phone &amp; WhatsApp</p>
                    <a href="tel:+254112280703" className="text-xs font-medium text-ocean hover:underline">
                      +254 112 280 703
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700">
                  <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-navy-900">Email</p>
                    <a href={`mailto:${site.email}`} className="text-xs font-medium text-ocean hover:underline">
                      {site.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700">
                  <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-navy-900">Hours</p>
                    <p className="text-xs text-slate-600">Mon – Sat, 8:00 AM – 6:00 PM EAT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Areas Served Card */}
            <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <h3 className="font-display text-base font-bold text-navy-900">Areas We Serve</h3>
              <p className="mt-1 text-xs text-slate-600">Across Kenya and East Africa.</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {areasServed.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-sky-100 bg-sky-50 px-2.5 py-1 text-xs font-medium text-slate-700"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}