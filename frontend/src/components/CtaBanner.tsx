import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { ButtonLink } from './ButtonLink';
import { WhatsAppIcon } from './WhatsAppIcon';
import { LogoBadge } from './Logo';
import { Reveal } from './Reveal';
import { whatsappLink } from '../utils/whatsapp';

interface CtaBannerProps {
  title: string;
  text: string;
  primaryLabel?: string;
  primaryTo?: string;
  whatsappMessage?: string;
}

export function CtaBanner({
  title,
  text,
  primaryLabel = 'Get a Free Consultation',
  primaryTo = '/contact',
  whatsappMessage
}: CtaBannerProps) {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-site">
        <Reveal>
          <div className="bg-hero relative overflow-hidden rounded-[2rem] px-6 py-14 text-white sm:px-12 lg:px-16">
            <div className="bg-grid-lines absolute inset-0" aria-hidden="true" />
            <div className="relative grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">{text}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink to={primaryTo} variant="light" size="lg" iconRight={<ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />}>
                    {primaryLabel}
                  </ButtonLink>
                  <ButtonLink href={whatsappLink(whatsappMessage)} variant="whatsapp" size="lg" icon={<WhatsAppIcon className="h-5 w-5" />}>
                    Chat With Us on WhatsApp
                  </ButtonLink>
                </div>
              </div>
              <div className="hidden justify-end lg:col-span-4 lg:flex">
                <LogoBadge size={180} decorative className="shadow-[0_0_80px_rgba(63,211,154,0.35)] ring-8 ring-white/10" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}