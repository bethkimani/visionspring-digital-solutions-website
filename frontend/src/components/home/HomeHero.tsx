"use client";
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { ButtonLink } from '../ButtonLink';
import { WhatsAppIcon } from '../WhatsAppIcon';
import { HeroComposition } from '../HeroComposition';
import { whatsappLink } from '../../utils/whatsapp';

export function HomeHero() {
  const reduce = useReducedMotion();
  const enter = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, delay, ease: [0.23, 1, 0.32, 1] as const }
  });

  return (
    <section className="bg-hero relative overflow-hidden text-white">
      <div className="bg-grid-lines absolute inset-0" aria-hidden="true" />
      <div className="container-site relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:py-24">
        <div className="lg:col-span-6">
          <motion.h1 className="text-[2.6rem] font-extrabold leading-[1.04] sm:text-6xl lg:text-[3.75rem]" {...enter(0.05)}>
            Your Vision.
            <br />
            Our Digital Expertise.
            <br />
            <span className="text-gradient-brand">Your Business Growth.</span>
          </motion.h1>
          <motion.p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg" {...enter(0.12)}>
            From professional websites and powerful web applications to SEO, social media management, digital advertising, and creative branding, we help businesses build a strong online presence, reach more customers, and grow with confidence.
          </motion.p>
          <motion.div className="mt-9 flex flex-wrap gap-3" {...enter(0.18)}>
            <ButtonLink to="/contact" variant="light" size="lg" iconRight={<ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />}>
              Get a Free Consultation
            </ButtonLink>
            <ButtonLink to="/services" variant="ghostLight" size="lg">
              Explore Our Services
            </ButtonLink>
            <ButtonLink href={whatsappLink()} variant="whatsapp" size="lg" icon={<WhatsAppIcon className="h-5 w-5" />}>
              Chat With Us on WhatsApp
            </ButtonLink>
          </motion.div>
          <motion.p className="mt-10 flex items-center gap-3 text-sm font-medium text-white/60" {...enter(0.24)}>
            <span className="h-px w-10 bg-growth-light" aria-hidden="true" />
            Digital Solutions Designed Around Your Business Goals.
          </motion.p>
        </div>
        <div className="lg:col-span-6">
          <HeroComposition />
        </div>
      </div>
    </section>);

}