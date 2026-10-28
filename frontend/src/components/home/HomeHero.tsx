import Image from 'next/image';
import { ArrowRightIcon, SparklesIcon } from 'lucide-react';
import { ButtonLink } from '../ButtonLink';
import { HeroComposition } from '../HeroComposition';

const rotatingPhrases = [
  {
    text: 'Powerful Digital Experiences',
    gradient: 'from-sky-400 via-emerald-300 to-teal-200',
  },
  {
    text: 'High-Converting Websites',
    gradient: 'from-amber-300 via-rose-400 to-purple-300',
  },
  {
    text: 'Scalable Web Applications',
    gradient: 'from-teal-300 via-cyan-400 to-indigo-300',
  },
  {
    text: 'Results-Driven Digital Growth',
    gradient: 'from-emerald-400 via-teal-300 to-sky-300',
  },
];

export function HomeHero() {
  return (
    <section className="bg-hero relative isolate flex min-h-[85svh] items-center overflow-hidden text-white">
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-25"
        aria-hidden="true"
      >
        <Image
          src="/0aa3ec03-531c-4f65-95c3-e112d0599b75.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#04142e] via-[#04142e]/90 to-[#04142e]/60" />
      </div>

      <div className="bg-grid-lines pointer-events-none absolute inset-0 z-0" aria-hidden="true" />

      <div className="container-site relative z-10 grid items-center gap-8 py-14 sm:gap-10 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:py-24">
        <div className="min-w-0 lg:col-span-6">
          <div className="mb-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-2 text-xs font-semibold text-teal-300 shadow-sm backdrop-blur-md">
            <SparklesIcon className="h-3.5 w-3.5 shrink-0 animate-pulse text-emerald-400" aria-hidden="true" />
            <span>Digital Solutions Built for Growth</span>
          </div>

          <h1
            aria-label="We Build Powerful Digital Experiences That Grow Your Business."
            className="text-[clamp(2.25rem,7vw,3.5rem)] font-extrabold leading-[1.12]"
          >
            We Build
            <span className="hero-phrases my-1">
              {rotatingPhrases.map((phrase, index) => (
                <span
                  key={phrase.text}
                  className={`hero-phrase bg-gradient-to-r ${phrase.gradient} bg-clip-text text-transparent drop-shadow-md`}
                  style={{ animationDelay: `${index * 3.2}s` }}
                >
                  {phrase.text}
                </span>
              ))}
            </span>
            That Grow Your Business.
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-200 sm:text-lg">
            From <span className="font-semibold text-teal-300">stunning websites</span> and{' '}
            <span className="font-semibold text-sky-300">custom apps</span> to{' '}
            <span className="font-semibold text-emerald-300">SEO &amp; branding</span>, we turn
            your vision into digital experiences that attract customers and generate results.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <ButtonLink
              to="/services"
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
              Explore Our Services
            </ButtonLink>
          </div>

          <p className="mt-8 flex items-center gap-3 text-sm font-medium text-slate-300/80">
            <span
              className="h-px w-10 shrink-0 bg-gradient-to-r from-teal-400 to-sky-400"
              aria-hidden="true"
            />
            Your Vision. Our Expertise. Let&apos;s Grow Together.
          </p>
        </div>

        <div className="min-w-0 lg:col-span-6">
          <HeroComposition />
        </div>
      </div>
    </section>
  );
}
