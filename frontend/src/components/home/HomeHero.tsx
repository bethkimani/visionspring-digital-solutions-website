import Image from 'next/image';
import { ArrowRightIcon } from 'lucide-react';
import { ButtonLink } from '../ButtonLink';
import { HeroComposition } from '../HeroComposition';
import { WhatsAppIcon } from '../WhatsAppIcon';
import { whatsappLink } from '@/utils/whatsapp';

export function HomeHero() {
  return (
    <section className="bg-hero relative isolate flex min-h-[calc(100svh-72px)] items-center overflow-hidden text-white">
      {/* Background imagery with subtle gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-25"
        aria-hidden="true"
      >
        <Image
          src="/0aa3ec03-531c-4f65-95c3-e112d0599b75.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={50}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#04142e] via-[#04142e]/90 to-[#04142e]/60" />
      </div>

      <div className="bg-grid-lines pointer-events-none absolute inset-0 z-0" aria-hidden="true" />

      <div className="container-site relative z-10 grid items-center gap-6 py-4 sm:gap-6 sm:py-6 lg:grid-cols-12 lg:gap-8 lg:py-4 xl:py-6">
        <div className="min-w-0 lg:col-span-6">
          {/* One visible H1 with the main keywords: service + place */}
          <h1 className="text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.1]">
            Web Design &amp;{' '}
            <span className="bg-gradient-to-r from-sky-400 via-emerald-300 to-teal-200 bg-clip-text text-transparent">
              Digital Marketing
            </span>{' '}
            Agency in Nairobi
          </h1>

          {/* One short outcome line, written around how Kenyans find and pay businesses */}
          <p className="mt-4 max-w-md text-base leading-relaxed text-slate-200 lg:text-lg">
            Get found on Google. Get customers on WhatsApp. Get paid via M-Pesa.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
            <ButtonLink
              to="/contact#consultation-form"
              variant="light"
              size="lg"
              className="min-h-11 font-semibold shadow-xl shadow-teal-500/20 transition-all duration-200 hover:shadow-teal-500/40"
              iconRight={
                <ArrowRightIcon
                  className="h-5 w-5 transition-transform duration-150 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              }
            >
              Get a Free Quote
            </ButtonLink>

            <a
              href={whatsappLink("Hello VisionSpring Agency, I'd like a quote for my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-white/10 sm:text-base"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Decorative mockup: hidden from screen readers and excluded from search snippets */}
        <div className="min-w-0 lg:col-span-6" aria-hidden="true" data-nosnippet>
          <HeroComposition />
        </div>
      </div>
    </section>
  );
}