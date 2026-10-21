"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { NavLink } from './NavLink';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon, XIcon } from 'lucide-react';
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
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

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

  return (
    <AnimatePresence>
      {open &&
      <div className="fixed inset-0 z-50 xl:hidden">
          <motion.div
          className="absolute inset-0 bg-navy-950/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          aria-hidden="true" />
        
          <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
          className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-white"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.26, ease: [0.32, 0.72, 0, 1] }}>
          
            <div className="flex h-[72px] items-center justify-between border-b border-line px-5">
              <Link href="/" onClick={onClose} aria-label="VisionSpring Agency home">
                <Logo size={40} />
              </Link>
              <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center rounded-full text-navy-800 transition-colors duration-150 hover:bg-mist"
              aria-label="Close menu">
              
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
              <ul className="space-y-1">
                {mainNav.map((item) =>
              item.hasServicesMenu ?
              <li key={item.to}>
                      <div className="flex items-center">
                        <NavLink
                    href={item.to}
                    end
                    onClick={onClose}
                    className={({ isActive }) =>
                    `flex h-12 flex-1 items-center rounded-xl px-4 text-base font-semibold ${isActive ? 'bg-sky-soft text-ocean' : 'text-navy-800 hover:bg-mist'}`
                    }>
                    
                          {item.label}
                        </NavLink>
                        <button
                    type="button"
                    onClick={() => setServicesOpen((v) => !v)}
                    aria-expanded={servicesOpen}
                    aria-label={servicesOpen ? 'Hide services' : 'Show services'}
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-navy-800 hover:bg-mist">
                    
                          <ChevronDownIcon className={`h-5 w-5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                        </button>
                      </div>
                      <AnimatePresence initial={false}>
                        {servicesOpen &&
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden pl-4">
                    
                            {services.map((s) =>
                    <li key={s.slug}>
                                <NavLink
                        href={`/services/${s.slug}`}
                        onClick={onClose}
                        className={({ isActive }) =>
                        `flex min-h-[44px] items-center rounded-lg px-4 text-sm ${isActive ? 'font-semibold text-ocean' : 'text-muted hover:text-navy-800'}`
                        }>
                        
                                  {s.navTitle}
                                </NavLink>
                              </li>
                    )}
                          </motion.ul>
                  }
                      </AnimatePresence>
                    </li> :

              <li key={item.to}>
                      <NavLink
                  href={item.to}
                  end={item.to === '/'}
                  onClick={onClose}
                  className={({ isActive }) =>
                  `flex h-12 items-center rounded-xl px-4 text-base font-semibold ${isActive ? 'bg-sky-soft text-ocean' : 'text-navy-800 hover:bg-mist'}`
                  }>
                  
                        {item.label}
                      </NavLink>
                    </li>

              )}
              </ul>
            </nav>
            <div className="space-y-2 border-t border-line p-5">
              <ButtonLink to="/contact" size="lg" className="w-full">
                Get a Free Consultation
              </ButtonLink>
              <ButtonLink href={whatsappLink()} variant="whatsapp" size="lg" className="w-full" icon={<WhatsAppIcon className="h-5 w-5" />}>
                WhatsApp Us
              </ButtonLink>
            </div>
          </motion.div>
        </div>
      }
    </AnimatePresence>);

}