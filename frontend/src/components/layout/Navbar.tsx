"use client";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLink } from './NavLink';
import { AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, MenuIcon } from 'lucide-react';
import { mainNav } from '../../data/navigation';
import { Logo } from '../Logo';
import { ButtonLink } from '../ButtonLink';
import { WhatsAppIcon } from '../WhatsAppIcon';
import { ServicesMenu } from './ServicesMenu';
import { MobileMenu } from './MobileMenu';
import { whatsappLink } from '../../utils/whatsapp';

const linkBase = 'relative flex h-10 items-center rounded-full px-3 text-sm font-medium transition-colors duration-150';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<number | undefined>(undefined);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setServicesOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [servicesOpen]);

  const openServices = () => {
    window.clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = window.setTimeout(() => setServicesOpen(false), 140);
  };
  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const servicesActive = pathname.startsWith('/services');

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-white/90 backdrop-blur-md transition-[border-color,box-shadow] duration-200 ${
      scrolled ? 'border-line shadow-[0_8px_28px_-20px_rgba(11,42,91,0.4)]' : 'border-transparent'}`
      }>
      
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" onClick={() => setServicesOpen(false)} aria-label="VisionSpring Agency home" className="shrink-0 rounded-full">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {mainNav.map((item) =>
            item.hasServicesMenu ?
            <li key={item.to} className="relative" onMouseEnter={openServices} onMouseLeave={scheduleClose}>
                  <div className="flex items-center">
                    <NavLink
                  href={item.to}
                  onClick={() => setServicesOpen(false)}
                  className={`${linkBase} pr-1 ${servicesActive ? 'text-ocean' : 'text-navy-800 hover:text-ocean'}`}>
                  
                      {item.label}
                    </NavLink>
                    <button
                  type="button"
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-expanded={servicesOpen}
                  aria-controls="services-menu"
                  aria-label="Show services menu"
                  className={`flex h-10 w-7 items-center justify-center rounded-full ${servicesActive ? 'text-ocean' : 'text-navy-800 hover:text-ocean'}`}>
                  
                      <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </button>
                  </div>
                  {servicesActive && <span className="absolute inset-x-3 -bottom-[15px] h-0.5 rounded-full bg-growth" aria-hidden="true" />}
                  <AnimatePresence>                  {servicesOpen && (
                    <div onClick={() => setServicesOpen(false)}>
                      <ServicesMenu id="services-menu" />
                    </div>
                  )}</AnimatePresence>
                </li> :

            <li key={item.to} className="relative">
                  <NavLink
                href={item.to}
                end={item.to === '/'}
                  onClick={() => setServicesOpen(false)}
                  className={({ isActive }) => `${linkBase} ${isActive ? 'text-ocean' : 'text-navy-800 hover:text-ocean'}`}>
                <>
                {item.label}
                {(pathname === item.to ||
                  (item.to !== '/' && pathname.startsWith(`${item.to}/`))) && (
                  <span className="absolute inset-x-3 -bottom-[15px] h-0.5 rounded-full bg-growth" aria-hidden="true" />
                )}
                </>
                  </NavLink>
                </li>

            )}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <ButtonLink href={whatsappLink()} variant="outline" icon={<WhatsAppIcon className="h-4 w-4 text-growth-dark" />}>
            WhatsApp Us
          </ButtonLink>
          <ButtonLink to="/contact">Get a Free Consultation</ButtonLink>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <ButtonLink to="/contact" size="sm" className="hidden sm:inline-flex">
            Free Consultation
          </ButtonLink>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full text-navy-800 transition-colors duration-150 hover:bg-mist"
            aria-label="Open menu"
            aria-expanded={mobileOpen}>
            
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
      <MobileMenu open={mobileOpen} onClose={closeMobile} />
    </header>);

}