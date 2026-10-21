"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowUpRightIcon, MailIcon } from 'lucide-react';
import { usePageMeta } from '@/hooks/usePageMeta';
import { site, socialLinks } from '@/data/site';
import { services } from '@/data/services';
import { PageHero } from '@/components/PageHero';
import { EnquiryForm } from '@/components/EnquiryForm';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { SocialIcon } from '@/components/SocialIcon';
import { whatsappLink } from '@/utils/whatsapp';

export default function ContactPageClient() {
  usePageMeta('Contact Us', 'Tell VisionSpring Agency about your project. Send an enquiry, email us, or chat on WhatsApp.');
  const params = useSearchParams();
  const requested = params.get('service') ?? '';
  const defaultService = requested === 'not-sure' || services.some((s) => s.slug === requested) ? requested : '';
  const packageName = params.get('package') ?? undefined;
  const activeSocials = socialLinks.filter((s) => s.url.trim() !== '');
  const serviceMessage = services.find((s) => s.slug === defaultService)?.whatsappMessage;

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        title="Let’s Talk About Growing Your Business."
        description="Tell us what you need, and let’s explore the right digital solution for your goals." />
      

      <section className="py-16 sm:py-20">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="rounded-[2rem] bg-white p-6 ring-1 ring-line sm:p-10 lg:col-span-8">
            <h2 className="text-2xl font-extrabold text-navy-800 sm:text-3xl">Send a project enquiry</h2>
            {packageName &&
            <p className="mt-3 inline-flex rounded-full bg-sky-soft px-3 py-1 text-sm font-semibold text-ocean">Package: {packageName}</p>
            }
            <div className="mt-8">
              <EnquiryForm key={`${defaultService}-${packageName ?? ''}`} defaultService={defaultService} packageName={packageName} />
            </div>
          </div>

          <aside className="space-y-4 lg:col-span-4">
            <a
              href={whatsappLink(serviceMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-[2rem] bg-growth-dark p-7 text-white transition-colors duration-150 hover:bg-[#086A45]">
              
              <WhatsAppIcon className="h-8 w-8" />
              <h2 className="mt-5 text-xl font-extrabold">Chat With Us on WhatsApp</h2>
              <p className="mt-1.5 text-sm text-white/80">The quickest way to reach our team.</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold">
                Start a chat
                <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </a>
            <a href={`mailto:${site.email}`} className="group block rounded-[2rem] border border-line p-7 transition-colors duration-150 hover:border-ocean/40">
              <MailIcon className="h-7 w-7 text-ocean" aria-hidden="true" />
              <h2 className="mt-5 text-xl font-extrabold text-navy-800">Email us</h2>
              <p className="mt-1.5 break-all text-sm font-medium text-ocean">{site.email}</p>
            </a>
            <div className="rounded-[2rem] bg-mist p-7">
              <h2 className="font-bold text-navy-800">What happens next?</h2>
              <ol className="mt-4 space-y-3 text-sm text-muted">
                <li><span className="font-semibold text-navy-800">1.</span> We review your enquiry and goals.</li>
                <li><span className="font-semibold text-navy-800">2.</span> We contact you by your preferred method.</li>
                <li><span className="font-semibold text-navy-800">3.</span> You receive recommendations and a clear quote.</li>
              </ol>
            </div>
            {activeSocials.length > 0 &&
            <div className="rounded-[2rem] border border-line p-7">
                <h2 className="font-bold text-navy-800">Follow us</h2>
                <ul className="mt-4 flex gap-2">
                  {activeSocials.map((s) =>
                <li key={s.platform}>
                      <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex h-10 w-10 items-center justify-center rounded-full bg-mist text-navy-800 hover:bg-ocean hover:text-white">
                        <SocialIcon platform={s.platform} />
                      </a>
                    </li>
                )}
                </ul>
              </div>
            }
          </aside>
        </div>
      </section>
    </>);

}