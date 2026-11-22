import React from 'react';
import Link from 'next/link';
import { ArrowUpRightIcon, MailIcon, MapPinIcon, PhoneIcon, ClockIcon } from 'lucide-react';
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
    <footer className="bg-navy-950 text-white border-t border-white/10">
      <div className="container-site grid gap-12 pb-12 pt-16 lg:grid-cols-12">
        {/* Brand Column */}
        <div className="lg:col-span-4">
          <Link href="/" aria-label="VisionSpring Agency home" className="inline-block">
            <Logo tone="light" size={52} />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
            {site.description}
          </p>
          <div className="mt-6 space-y-2.5 text-sm">
            <a
              href="https://maps.app.goo.gl/aXwCNuYKgrxTYwpE7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/80 transition-colors duration-150 hover:text-white group"
            >
              <MapPinIcon className="h-4 w-4 text-sky-light shrink-0 group-hover:text-growth-light transition-colors" aria-hidden="true" />
              <span className="group-hover:underline">Nairobi, Kenya • East Africa</span>
            </a>
            <a
              href="tel:+254112280703"
              className="flex items-center gap-3 text-white/80 transition-colors duration-150 hover:text-white"
            >
              <PhoneIcon className="h-4 w-4 text-emerald-400 shrink-0" aria-hidden="true" />
              +254 112 280 703
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 text-white/80 transition-colors duration-150 hover:text-white"
            >
              <MailIcon className="h-4 w-4 text-sky-light shrink-0" aria-hidden="true" />
              {site.email}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/80 transition-colors duration-150 hover:text-white"
            >
              <WhatsAppIcon className="h-4 w-4 text-growth-light shrink-0" />
              Chat on WhatsApp
            </a>
            <div className="flex items-center gap-3 text-white/60 text-xs pt-1">
              <ClockIcon className="h-3.5 w-3.5 text-amber-400 shrink-0" aria-hidden="true" />
              <span>Mon – Sat: 8:00 AM – 6:00 PM EAT</span>
            </div>
          </div>
          {activeSocials.length > 0 && (
            <ul className="mt-6 flex gap-2" aria-label="Social media">
              {activeSocials.map((s) => (
                <li key={s.platform}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors duration-150 hover:bg-white/20"
                  >
                    <SocialIcon platform={s.platform} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Navigation Columns */}
        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8"
        >
          <div>
            <h2 className="text-sm font-semibold text-white">Company</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {mainNav
                .filter((n) => !n.hasServicesMenu)
                .map((item) => (
                  <li key={item.to}>
                    <Link
                      href={item.to}
                      className="text-white/65 transition-colors duration-150 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white/65 transition-colors duration-150 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-white/65 transition-colors duration-150 hover:text-white"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">
              <Link href="/services" className="hover:text-sky-light">
                Services
              </Link>
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-white/65 transition-colors duration-150 hover:text-white"
                  >
                    {s.navTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h2 className="text-sm font-semibold text-white">Start a project</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              Tell us about your goals and we’ll recommend the right next step.
            </p>
            <Link
              href="/contact#consultation-form"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-growth-light transition-colors duration-150 hover:text-white"
            >
              Get a free consultation
              <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </nav>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container-site flex flex-col gap-4 py-6 pb-24 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:pb-6">
          <p>© {year} VisionSpring Agency. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-6">
            {legalNav.map((item) => (
              <li key={item.to}>
                <Link
                  href={item.to}
                  className="transition-colors duration-150 text-white/70 hover:text-white underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
