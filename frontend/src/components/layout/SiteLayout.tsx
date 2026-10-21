"use client";
import React, { useCallback, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { IntroAnimation } from '../IntroAnimation';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingWhatsApp } from './FloatingWhatsApp';

export type IntroMode = 'oncePerSession' | 'always' | 'off';

const INTRO_KEY = 'visionspring-intro-seen';

function shouldShowIntro(mode: IntroMode): boolean {
  if (mode === 'off') return false;
  if (mode === 'always') return true;
  try {
    return window.sessionStorage.getItem(INTRO_KEY) !== '1';
  } catch {
    return true;
  }
}

export function SiteLayout({
  introMode,
  children,
}: {
  introMode: IntroMode;
  children: React.ReactNode;
}) {
  const [introVisible, setIntroVisible] = useState(() => shouldShowIntro(introMode));
  const pathname = usePathname();
  const reduce = useReducedMotion();

  const finishIntro = useCallback(() => {
    try {
      window.sessionStorage.setItem(INTRO_KEY, '1');
    } catch {

      /* storage unavailable — intro simply shows again next visit */}
    setIntroVisible(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = introVisible ? 'hidden' : '';
  }, [introVisible]);

  return (
    <>
      <AnimatePresence>{introVisible && <IntroAnimation key="intro" onComplete={finishIntro} />}</AnimatePresence>
      {!introVisible &&
      <div className="flex min-h-screen w-full flex-col bg-white">
          <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy-800 focus:px-4 focus:py-2 focus:text-sm focus:text-white">
          
            Skip to content
          </a>
          <Navbar />
          <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
            <motion.main
            id="main"
            key={pathname}
            className="flex-1"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}>
            
              {children}
            </motion.main>
          </AnimatePresence>
          <Footer />
          <FloatingWhatsApp />
        </div>
      }
    </>);

}