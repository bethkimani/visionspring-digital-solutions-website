import React from 'react';
import { CheckIcon, ClockIcon } from 'lucide-react';
import type { PricingPackage } from '../types/content';
import { ButtonLink } from './ButtonLink';
import { WhatsAppIcon } from './WhatsAppIcon';
import { whatsappLink } from '../utils/whatsapp';

interface PackageCardProps {
  pkg: PricingPackage;
  categoryTitle: string;
  serviceSlug?: string;
}

export function PackageCard({ pkg, categoryTitle, serviceSlug }: PackageCardProps) {
  const featured = pkg.recommended;
  const quoteTo = `/contact?${new URLSearchParams({ ...(serviceSlug ? { service: serviceSlug } : {}), package: `${categoryTitle} — ${pkg.name}` }).toString()}`;
  const message = `Hello VisionSpring Agency, I'd like a quote for the ${pkg.name} package (${categoryTitle}).`;

  return (
    <article
      className={`relative flex h-full flex-col rounded-3xl p-7 sm:p-8 ${
      featured ? 'bg-navy-800 text-white shadow-[0_30px_60px_-30px_rgba(11,42,91,0.7)]' : 'border border-line bg-white text-navy-800'}`
      }>
      
      {featured &&
      <span className="absolute right-6 top-6 rounded-full bg-growth px-3 py-1 text-xs font-semibold text-navy-950">Most requested</span>
      }
      <h3 className="pr-28 text-xl font-extrabold">{pkg.name}</h3>
      <p className={`mt-2 min-h-[2.75rem] text-sm leading-relaxed ${featured ? 'text-white/70' : 'text-muted'}`}>{pkg.audience}</p>
      <p className="mt-6 font-display text-3xl font-extrabold">{pkg.price ?? 'Custom pricing'}</p>
      <p className={`mt-1 text-xs ${featured ? 'text-white/60' : 'text-muted'}`}>{pkg.price ? 'Final quote confirmed after scoping' : 'Quoted on your requirements'}</p>
      <ul className={`mt-6 space-y-3 border-t pt-6 ${featured ? 'border-white/15' : 'border-line'}`}>
        {pkg.deliverables.map((d) =>
        <li key={d} className="flex items-start gap-2.5 text-sm">
            <CheckIcon className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? 'text-growth-light' : 'text-growth-dark'}`} aria-hidden="true" />
            {d}
          </li>
        )}
      </ul>
      {pkg.timeline &&
      <p className={`mt-6 flex items-center gap-2 text-xs ${featured ? 'text-white/70' : 'text-muted'}`}>
          <ClockIcon className="h-3.5 w-3.5" aria-hidden="true" />
          Indicative timeline: {pkg.timeline}
        </p>
      }
      <div className="mt-auto flex flex-col gap-2 pt-8">
        <ButtonLink to={quoteTo} variant={featured ? 'light' : 'primary'} className="w-full">
          Request a Quote
        </ButtonLink>
        <ButtonLink href={whatsappLink(message)} variant={featured ? 'ghostLight' : 'outline'} className="w-full" icon={<WhatsAppIcon className={`h-4 w-4 ${featured ? '' : 'text-growth-dark'}`} />}>
          Ask on WhatsApp
        </ButtonLink>
      </div>
    </article>);

}