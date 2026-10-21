"use client";
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { BrowserFrame } from './mockups/BrowserFrame';
import { WebsiteMockup } from './mockups/WebsiteMockup';
import { PhoneFrame } from './mockups/PhoneFrame';
import { AppScreenMockup } from './mockups/AppScreenMockup';
import { DashboardMockup } from './mockups/DashboardMockup';
import { SearchAdMockup } from './mockups/SearchAdMockup';
import { SocialPostMockup } from './mockups/SocialPostMockup';
import { socialSamples } from '../data/socialSamples';

interface FloatProps {
  className: string;
  delay: number;
  drift?: number;
  children: React.ReactNode;
}

function Float({ className, delay, drift = 8, children }: FloatProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={reduce ? false : { opacity: 0, scale: 0.96, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3, delay, ease: [0.23, 1, 0.32, 1] }}>
      
      <motion.div
        animate={reduce ? undefined : { y: [0, -drift, 0] }}
        transition={{ duration: 6 + delay * 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}>
        
        {children}
      </motion.div>
    </motion.div>);

}

export function HeroComposition() {
  return (
    <div className="relative mx-auto h-[440px] w-full max-w-[600px] sm:h-[520px]" aria-hidden="true">
      <Float className="left-[6%] right-0 top-[6%]" delay={0.1} drift={4}>
        <BrowserFrame url="yourbusiness.co.ke">
          <WebsiteMockup />
        </BrowserFrame>
      </Float>
      <Float className="-top-2 right-[-2%] hidden w-56 sm:block" delay={0.25}>
        <DashboardMockup />
      </Float>
      <Float className="bottom-0 left-0 w-[34%] max-w-[170px]" delay={0.18} drift={10}>
        <PhoneFrame>
          <AppScreenMockup />
        </PhoneFrame>
      </Float>
      <Float className="bottom-[4%] right-0 w-[58%] max-w-[300px]" delay={0.3}>
        <SearchAdMockup />
      </Float>
      <Float className="left-[-4%] top-[30%] hidden w-40 lg:block" delay={0.36} drift={6}>
        <SocialPostMockup sample={socialSamples[0]} />
      </Float>
    </div>);

}