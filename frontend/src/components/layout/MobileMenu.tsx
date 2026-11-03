"use client";
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { NavLink } from './NavLink';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon, XIcon, ArrowRightIcon } from 'lucide-react';
import { mainNav } from '../../data/navigation';
import { services } from '../../data/services';
import { Logo } from '../Logo';
import { ButtonLink } from '../ButtonLink';
import { WhatsAppIcon } from '../WhatsAppIcon';
import { whatsappLink } from '../../utils/whatsapp';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [mounted, setMounted] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] h-[100dvh] w-screen xl:hidden">
          {/* Full-screen backdrop with blur */}
          <motion.div
            className="absolute inset-0 h-full w-full bg-navy-950/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Full-height Slide-in Drawer */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
            className="absolute right-0 top-0 flex h-full w-full max-w-[340px] sm:max-w-sm flex-col bg-white shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.26, ease: [0.32, 0.72, 0, 1] }}
          >
            {/* Drawer Header */}
            <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-line px-5">
              <Link href="/" onClick={onClose} aria-label="VisionSpring Agency home">
                <Logo size={40} />
              </Link>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="flex h-11 w-11 items-center justify-center rounded-full text-navy-800 transition-colors duration-150 hover:bg-mist"
                aria-label="Close menu"
              >
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Navigation Links (Scrollable middle area) */}
            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 py-4">
              <ul className="space-y-1.5">
                {mainNav.map((item) =>
                  item.hasServicesMenu ? (
                    <li key={item.to} className="space-y-1">
                      <div className="flex items-center justify-between rounded-xl transition-colors hover:bg-mist">
                        <NavLink
                          href={item.to}
                          onClick={onClose}
                          className={({ isActive }) =>
                            `flex h-12 flex-1 items-center px-4 text-base font-semibold ${
                              isActive ? 'bg-sky-soft text-ocean' : 'text-navy-800'
                            }`
                          }
                        >
                          {item.label}
                        </NavLink>
                        <button
                          type="button"
                          onClick={() => setServicesOpen((v) => !v)}
                          aria-expanded={servicesOpen}
                          aria-label={servicesOpen ? 'Hide services' : 'Show services'}
                          className="flex h-12 w-12 items-center justify-center rounded-xl text-navy-800 hover:text-ocean transition-colors"
                        >
                          <ChevronDownIcon
                            className={`h-5 w-5 transition-transform duration-200 ${
                              servicesOpen ? 'rotate-180 text-ocean' : ''
                            }`}
                            aria-hidden="true"
                          />
                        </button>
                      </div>

                      {/* Expandable Services Accordion */}
                      <AnimatePresence initial={false}>
                        {servicesOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                            className="overflow-hidden pl-3 pr-1 py-1 space-y-0.5 border-l-2 border-ocean/20 ml-4 my-1"
                          >
                            <li>
                              <NavLink
                                href="/services"
                                onClick={onClose}
                                className="flex min-h-[40px] items-center gap-1.5 rounded-lg px-3 text-xs font-bold text-ocean hover:bg-sky-soft"
                              >
                                <span>All Services Overview</span>
                                <ArrowRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                              </NavLink>
                            </li>
                            {services.map((s) => (
                              <li key={s.slug}>
                                <NavLink
                                  href={`/services/${s.slug}`}
                                  onClick={onClose}
                                  className={({ isActive }) =>
                                    `flex min-h-[40px] items-center rounded-lg px-3 text-sm ${
                                      isActive
                                        ? 'font-bold text-ocean bg-sky-soft/60'
                                        : 'text-slate-600 hover:text-navy-800 hover:bg-mist'
                                    }`
                                  }
                                >
                                  {s.navTitle}
                                </NavLink>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  ) : (
                    <li key={item.to}>
                      <NavLink
                        href={item.to}
                        end={item.to === '/'}
                        onClick={onClose}
                        className={({ isActive }) =>
                          `flex h-12 items-center rounded-xl px-4 text-base font-semibold ${
                            isActive ? 'bg-sky-soft text-ocean' : 'text-navy-800 hover:bg-mist'
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  )
                )}
              </ul>
            </nav>

            {/* Bottom Actions */}
            <div className="shrink-0 space-y-2.5 border-t border-line p-5 bg-white">
              <ButtonLink
                to="/contact#consultation-form"
                size="lg"
                className="w-full text-center"
                onClick={onClose}
              >
                Get a Free Consultation
              </ButtonLink>
              <ButtonLink
                href={whatsappLink()}
                variant="whatsapp"
                size="lg"
                className="w-full text-center"
                icon={<WhatsAppIcon className="h-5 w-5" />}
                onClick={onClose}
              >
                WhatsApp Us
              </ButtonLink>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
