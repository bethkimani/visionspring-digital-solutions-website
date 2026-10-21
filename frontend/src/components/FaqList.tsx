"use client";
import React, { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import type { Faq } from '../types/content';

export function FaqList({ faqs }: {faqs: Faq[];}) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <ul className="divide-y divide-line border-y border-line">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <li key={faq.question}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-6 py-5 text-left font-display text-base font-bold text-navy-800 transition-colors duration-150 hover:text-ocean sm:text-lg">
                
                {faq.question}
                <PlusIcon
                  className={`h-5 w-5 shrink-0 text-ocean transition-transform duration-200 ease-out ${isOpen ? 'rotate-45' : ''}`}
                  aria-hidden="true" />
                
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen &&
              <motion.div
                id={panelId}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden">
                
                  <p className="max-w-3xl pb-6 text-base leading-relaxed text-muted">{faq.answer}</p>
                </motion.div>
              }
            </AnimatePresence>
          </li>);

      })}
    </ul>);

}