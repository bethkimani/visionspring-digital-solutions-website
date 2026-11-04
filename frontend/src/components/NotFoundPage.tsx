'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeftIcon,
  CompassIcon,
  LayersIcon,
  NewspaperIcon,
  MessageSquareIcon,
  HomeIcon,
} from 'lucide-react';
import { ButtonLink } from './ButtonLink';
import { WhatsAppIcon } from './WhatsAppIcon';
import { whatsappLink } from '../utils/whatsapp';

export function NotFoundPage() {
  const quickLinks = [
    {
      title: 'Our Services',
      description: 'Web development, custom apps, SEO, and branding',
      href: '/services',
      icon: LayersIcon,
    },
    {
      title: 'Client Portfolio',
      description: 'Explore live client websites and systems',
      href: '/portfolio',
      icon: CompassIcon,
    },
    {
      title: 'Latest Updates',
      description: 'Practical guides on websites, SEO, and growth',
      href: '/blog',
      icon: NewspaperIcon,
    },
    {
      title: 'Get in Touch',
      description: 'Request a free consultation or custom quote',
      href: '/contact',
      icon: MessageSquareIcon,
    },
  ];

  return (
    <div className="relative isolate overflow-hidden bg-slate-50 py-20 sm:py-28">
      {/* Decorative background ambient glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-ocean/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 -z-10 h-72 w-72 rounded-full bg-growth/10 blur-3xl" />

      <div className="container-site max-w-4xl text-center">
        {/* Error Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-ocean/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ocean">
          <span className="h-2 w-2 rounded-full bg-ocean animate-pulse" />
          404 Error • Page Not Found
        </div>

        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-navy-800 sm:text-5xl">
          Oops! We couldn’t find that page.
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          The link you followed may be broken, outdated, or the address might have been
          mistyped. Don’t worry — here are the most helpful destinations to get you back on track:
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink
            to="/"
            variant="primary"
            size="lg"
            icon={<HomeIcon className="h-5 w-5" />}
          >
            Back to Homepage
          </ButtonLink>
          <ButtonLink
            href={whatsappLink('Hello VisionSpring Agency, I encountered a missing page and need help.')}
            variant="whatsapp"
            size="lg"
            icon={<WhatsAppIcon className="h-5 w-5" />}
          >
            Chat with Us
          </ButtonLink>
        </div>

        {/* Quick Links Directory */}
        <div className="mt-14 rounded-3xl border border-line bg-white p-6 sm:p-10 shadow-sm text-left">
          <h2 className="text-lg font-bold text-navy-800 mb-6 flex items-center gap-2">
            <CompassIcon className="h-5 w-5 text-ocean" />
            Popular destinations on VisionSpring Agency:
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-start gap-4 rounded-2xl border border-line/70 p-4 transition-all duration-200 hover:border-ocean hover:bg-sky-soft/40 hover:shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ocean/10 text-ocean group-hover:bg-ocean group-hover:text-white transition-colors duration-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy-800 group-hover:text-ocean transition-colors duration-150">
                      {link.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-muted leading-relaxed">
                      {link.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
