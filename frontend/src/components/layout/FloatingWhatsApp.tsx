"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';
import { services } from '../../data/services';
import { WhatsAppIcon } from '../WhatsAppIcon';
import { whatsappLink } from '../../utils/whatsapp';

export function FloatingWhatsApp() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const slug = pathname.match(/^\/services\/([^/]+)/)?.[1];
  const service = services.find((s) => s.slug === slug);
  const href = whatsappLink(service?.whatsappMessage);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with VisionSpring Agency on WhatsApp"
      initial={reduce ? false : { opacity: 0, scale: 0.96, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.25, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="group fixed bottom-4 right-4 z-30 flex h-14 items-center rounded-full bg-growth-dark pl-4 pr-4 text-white shadow-[0_14px_30px_-12px_rgba(10,127,83,0.8)] ring-4 ring-white/70 transition-[background-color,transform] duration-150 hover:bg-[#086A45] active:scale-[0.97] sm:bottom-6 sm:right-6">
      
      <WhatsAppIcon className="h-6 w-6 shrink-0" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-[max-width,margin] duration-200 ease-out group-hover:ml-2.5 group-hover:max-w-[15rem] group-focus-visible:ml-2.5 group-focus-visible:max-w-[15rem] md:inline-block">
        Chat with VisionSpring Agency
      </span>
    </motion.a>);

}