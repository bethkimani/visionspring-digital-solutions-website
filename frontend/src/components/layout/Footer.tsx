import React from 'react';
import Link from 'next/link';
import { ArrowUpRightIcon, MailIcon } from 'lucide-react';
import { mainNav, legalNav } from '../../data/navigation';
import { services } from '../../data/services';
import { site, socialLinks } from '../../data/site';
import { Logo } from '../Logo';
import { SocialIcon } from '../SocialIcon';
import { WhatsAppIcon } from '../WhatsAppIcon';
import { whatsappLink } from '../../utils/whatsapp';

export function Footer() {
  const activeSocials = socialLinks.filter((s) => s.url.trim() !== '');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-site grid gap-12 pb-12 pt-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link href="/" aria-label="VisionSpring Agency home" className="inline-block">
            <Logo tone="light" size={52} />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">{site.description}</p>
          <div className="mt-6 space-y-3 text-sm">
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-white/80 transition-colors duration-150 hover:text-white">
              <MailIcon className="h-4 w-4 text-sky-light" aria-hidden="true" />
              {site.email}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 transition-colors duration-150 hover:text-white">
              <WhatsAppIcon className="h-4 w-4 text-growth-light" />
              Chat on WhatsApp
            </a>
          </div>
          {activeSocials.length > 0 &&
          <ul className="mt-6 flex gap-2" aria-label="Social media">
              {activeSocials.map((s) =>
            <li key={s.platform}>
                  <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors duration-150 hover:bg-white/20">
                
                    <SocialIcon platform={s.platform} />
                  </a>
                </li>
            )}
            </ul>
          }
        </div>

        <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
          <div>
            <h2 className="text-sm font-semibold text-white">Agency</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {mainNav.
              filter((n) => !n.hasServicesMenu).
              map((item) =>
              <li key={item.to}>
                    <Link href={item.to} className="text-white/65 transition-colors duration-150 hover:text-white">
                      {item.label}
                    </Link>
                  </li>
              )}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">
              <Link href="/services" className="hover:text-sky-light">Services</Link>
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) =>
              <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-white/65 transition-colors duration-150 hover:text-white">
                    {s.navTitle}
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h2 className="text-sm font-semibold text-white">Start a project</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/65">Tell us about your goals and we’ll recommend the right next step.</p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-growth-light transition-colors duration-150 hover:text-white">
              
              Get a free consultation
              <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-6 pb-24 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:pb-6">
          <p>© {year} VisionSpring Agency. All rights reserved.</p>
          <ul className="flex gap-5">
            {legalNav.map((item) =>
            <li key={item.to}>
                <Link href={item.to} className="transition-colors duration-150 hover:text-white">
                  {item.label}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </footer>);

}