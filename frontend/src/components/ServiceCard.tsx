import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import type { Service } from '../types/content';
import { ButtonLink } from './ButtonLink';
import { WhatsAppIcon } from './WhatsAppIcon';
import { whatsappLink } from '../utils/whatsapp';

interface ServiceCardProps {
  service: Service;
  variant?: 'compact' | 'full';
}

export function ServiceCard({ service, variant = 'compact' }: ServiceCardProps) {
  const Icon = service.icon;

  if (variant === 'compact') {
    return (
      <Link
        href={`/services/${service.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white via-white to-slate-50/80 p-6 shadow-sm shadow-slate-200/60 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-ocean/50 hover:bg-white hover:shadow-xl hover:shadow-ocean/10">
        
        {/* Subtle Top Accent Line on Hover */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ocean via-sky-400 to-growth opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

        <div className="flex items-center justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-ocean border border-sky-100 transition-all duration-200 group-hover:bg-ocean group-hover:text-white group-hover:border-transparent group-hover:shadow-md group-hover:shadow-ocean/20">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>

          {service.group && (
            <span className="rounded-full bg-slate-100/90 px-2.5 py-0.5 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              {service.group}
            </span>
          )}
        </div>

        <h3 className="mt-4 text-lg font-extrabold text-navy-800 transition-colors duration-150 group-hover:text-ocean">
          {service.navTitle}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {service.blurb}
        </p>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-ocean transition-colors duration-150 group-hover:text-ocean-dark">
          Learn More
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </Link>
    );
  }

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-[box-shadow,border-color] duration-200 hover:border-sky/40 hover:shadow-[0_30px_60px_-36px_rgba(11,42,91,0.5)] sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-800 text-white">
          <Icon className="h-7 w-7" aria-hidden="true" />
        </span>
        <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-muted">{service.group}</span>
      </div>
      <h3 className="mt-6 text-2xl font-extrabold leading-tight text-navy-800">
        <Link href={`/services/${service.slug}`} className="hover:text-ocean">
          {service.title}
        </Link>
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-muted">{service.summary}</p>
      <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
        {service.cardDeliverables.map((d) =>
        <li key={d} className="flex items-start gap-2 text-sm text-navy-800">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-growth-dark" aria-hidden="true" />
            {d}
          </li>
        )}
      </ul>
      <div className="mt-auto flex flex-wrap items-center gap-2 pt-8">
        <ButtonLink to={`/services/${service.slug}`} variant="secondary" iconRight={<ArrowRightIcon className="h-4 w-4" aria-hidden="true" />}>
          Learn More
        </ButtonLink>
        <ButtonLink to={`/contact?service=${service.slug}`} variant="outline">
          Request a Quote
        </ButtonLink>
        <a
          href={whatsappLink(service.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ask about ${service.navTitle} on WhatsApp`}
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-full bg-growth-soft text-growth-dark transition-colors duration-150 hover:bg-growth-dark hover:text-white">
          
          <WhatsAppIcon className="h-5 w-5" />
        </a>
      </div>
    </article>);

}