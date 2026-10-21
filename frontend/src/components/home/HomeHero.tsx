"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon, SparklesIcon } from 'lucide-react';
import { ButtonLink } from '../ButtonLink';
import { HeroComposition } from '../HeroComposition';

// High-impact background carousel images
const CAROUSEL_IMAGES = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
];

// Phrases that dynamically cycle, disappear, and reappear in color
const DYNAMIC_WORDS = [
  { text: "Powerful Digital Experiences", gradient: "from-sky-400 via-emerald-300 to-teal-200" },
  { text: "High-Converting Websites", gradient: "from-amber-300 via-rose-400 to-purple-300" },
  { text: "Scalable Web Applications", gradient: "from-teal-300 via-cyan-400 to-indigo-300" },
  { text: "Results-Driven Digital Growth", gradient: "from-emerald-400 via-teal-300 to-sky-300" }
];

export function HomeHero() {
  const reduce = useReducedMotion();

  // Word Cycling State
  const [wordIndex, setWordIndex] = useState(0);

  // Background Carousel State
  const [bgIndex, setBgIndex] = useState(0);

  // Cycle through dynamic colored text
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % DYNAMIC_WORDS.length);
    }, 3200);

    return () => clearInterval(wordInterval);
  }, []);

  // Cycle background images
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 6000);

    return () => clearInterval(bgInterval);
  }, []);

  const enter = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay, ease: [0.23, 1, 0.32, 1] as const }
  });

  return (
    <section className="bg-hero relative overflow-hidden text-white min-h-[85vh] flex items-center">
      
      {/* 1. Animated Background Image Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-25 pointer-events-none">
        <motion.div
          key={bgIndex}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${CAROUSEL_IMAGES[bgIndex]})` }}
        />
        {/* Dark overlay for optimal text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04142e] via-[#04142e]/90 to-[#04142e]/60" />
      </div>

      {/* 2. Grid lines overlay */}
      <div className="bg-grid-lines absolute inset-0 z-0 pointer-events-none" aria-hidden="true" />

      {/* 3. Hero Content Container */}
      <div className="container-site relative z-10 grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:py-24">
        
        {/* Left Column: Heading & Copy */}
        <div className="lg:col-span-6">
          
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold text-teal-300 mb-6 backdrop-blur-md shadow-sm"
            {...enter(0.02)}
          >
            <SparklesIcon className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
            <span>Digital Solutions Built for Growth</span>
          </motion.div>

          {/* Main Headline with Animated Reappearing Words */}
          <motion.h1 
            className="text-[2.5rem] font-extrabold leading-[1.12] sm:text-5xl lg:text-[3.5rem]" 
            {...enter(0.05)}
          >
            We Build <br />
            <span className="inline-block min-h-[60px] sm:min-h-[72px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={DYNAMIC_WORDS[wordIndex].text}
                  initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`bg-gradient-to-r ${DYNAMIC_WORDS[wordIndex].gradient} bg-clip-text text-transparent drop-shadow-md inline-block`}
                >
                  {DYNAMIC_WORDS[wordIndex].text}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            That Grow Your Business.
          </motion.h1>

          {/* Short, Colorful Description */}
          <motion.p 
            className="mt-5 max-w-lg text-base sm:text-lg leading-relaxed text-slate-200" 
            {...enter(0.12)}
          >
            From <span className="font-semibold text-teal-300">stunning websites</span> and <span className="font-semibold text-sky-300">custom apps</span> to <span className="font-semibold text-emerald-300">SEO & branding</span>, we turn your vision into digital experiences that attract customers and generate results.
          </motion.p>

          {/* Single Action Button */}
          <motion.div className="mt-8 flex items-center gap-4" {...enter(0.18)}>
            <ButtonLink
              to="/services"
              variant="light"
              size="lg"
              className="shadow-xl shadow-teal-500/20 hover:shadow-teal-500/40 transition-all duration-200 font-semibold"
              iconRight={<ArrowRightIcon className="h-5 w-5 transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />}
            >
              Explore Our Services
            </ButtonLink>
          </motion.div>

          {/* Tagline */}
          <motion.p className="mt-8 flex items-center gap-3 text-sm font-medium text-slate-300/80" {...enter(0.24)}>
            <span className="h-px w-10 bg-gradient-to-r from-teal-400 to-sky-400" aria-hidden="true" />
            Your Vision. Our Expertise. Let's Grow Together.
          </motion.p>
        </div>

        {/* Right Column: Hero Composition Graphic */}
        <div className="lg:col-span-6">
          <HeroComposition />
        </div>

      </div>
    </section>
  );
}