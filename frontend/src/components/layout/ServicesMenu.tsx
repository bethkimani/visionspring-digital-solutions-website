"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { services } from '../../data/services';

export function ServicesMenu({ id }: {id: string;}) {
  return (
    <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
      <motion.div
        id={id}
        initial={{ opacity: 0, y: -6, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -4, scale: 0.98 }}
        transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
        className="w-[640px] origin-top overflow-hidden rounded-2xl border border-line bg-white shadow-[0_30px_60px_-30px_rgba(4,20,46,0.45)]">
        
        <ul className="grid grid-cols-2 gap-1 p-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="flex items-start gap-3 rounded-xl p-3 transition-colors duration-150 hover:bg-mist">
                  
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-soft text-ocean">
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-navy-800">{service.navTitle}</span>
                    <span className="mt-0.5 block text-xs text-muted">{service.blurb}</span>
                  </span>
                </Link>
              </li>);

          })}
        </ul>
        <div className="flex items-center justify-between border-t border-line bg-mist px-6 py-3">
          <p className="text-xs text-muted">Not sure what you need? We’ll help you choose.</p>
          <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-ocean hover:text-ocean-dark">
            View all services
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </motion.div>
    </div>);

}