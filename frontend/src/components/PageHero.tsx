"use client";
import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

interface Crumb {
  label: string;
  to?: string;
}

interface PageHeroProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  eyebrow?: React.ReactNode;
  breadcrumbs?: Crumb[];
  actions?: React.ReactNode;
  aside?: React.ReactNode;
}

export function PageHero({ title, description, eyebrow, breadcrumbs, actions, aside }: PageHeroProps) {
  const reduce = useReducedMotion();
  const enter = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, delay, ease: [0.23, 1, 0.32, 1] as const }
  });

  return (
    <section className="bg-hero relative overflow-hidden text-white">
      <div className="bg-grid-lines absolute inset-0" aria-hidden="true" />
      <div className={`container-site relative grid items-center gap-12 py-16 sm:py-20 ${aside ? 'lg:grid-cols-12 lg:py-24' : 'lg:py-24'}`}>
        <div className={aside ? 'lg:col-span-6' : 'max-w-3xl'}>
          {breadcrumbs &&
          <motion.nav aria-label="Breadcrumb" className="mb-6" {...enter(0)}>
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
                {breadcrumbs.map((c, i) =>
              <li key={c.label} className="flex items-center gap-1.5">
                    {c.to ?
                <Link href={c.to} className="transition-colors duration-150 hover:text-white">
                        {c.label}
                      </Link> :

                <span aria-current="page" className="text-white/90">
                        {c.label}
                      </span>
                }
                    {i < breadcrumbs.length - 1 && <ChevronRightIcon className="h-3.5 w-3.5" aria-hidden="true" />}
                  </li>
              )}
              </ol>
            </motion.nav>
          }
          {eyebrow &&
          <motion.div className="mb-4 text-sm font-semibold text-growth-light" {...enter(0.03)}>
              {eyebrow}
            </motion.div>
          }
          <motion.h1 className="text-4xl font-extrabold leading-[1.06] sm:text-5xl lg:text-[3.4rem]" {...enter(0.06)}>
            {title}
          </motion.h1>
          {description &&
          <motion.p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg" {...enter(0.1)}>
              {description}
            </motion.p>
          }
          {actions &&
          <motion.div className="mt-8 flex flex-wrap gap-3" {...enter(0.14)}>
              {actions}
            </motion.div>
          }
        </div>
        {aside &&
        <motion.div
          className="lg:col-span-6"
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.12, ease: [0.23, 1, 0.32, 1] }}>
          
            {aside}
          </motion.div>
        }
      </div>
    </section>);

}