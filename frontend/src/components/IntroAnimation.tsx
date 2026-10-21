"use client";
import React, { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { LogoBadge } from './Logo';

interface IntroAnimationProps {
  onComplete: () => void;
}

const SPARK_COLORS = ['#7FD3F5', '#3FD39A', '#FFFFFF', '#1EA7E1'];
const sparks = Array.from({ length: 30 }, (_, i) => {
  const angle = i / 30 * Math.PI * 2 + i % 3 * 0.14;
  const distance = 140 + i * 37 % 110;
  const size = 3 + i % 3;
  return {
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance,
    size,
    color: SPARK_COLORS[i % SPARK_COLORS.length],
    delay: 0.42 + i % 6 * 0.035
  };
});
const RAY_COUNT = 12;
const EASE = [0.23, 1, 0.32, 1] as const;

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const reduce = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(onComplete, reduce ? 1000 : 2700);
    return () => window.clearTimeout(timer);
  }, [onComplete, reduce]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-navy-950"
      role="status"
      aria-label="VisionSpring Agency is loading"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: reduce ? 1 : 1.04 }}
      transition={{ duration: 0.3, ease: EASE }}>
      
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle at 50% 46%, rgba(21,101,192,0.5) 0%, rgba(11,42,91,0.35) 30%, rgba(4,20,46,0) 62%)' }} />
      

      <div className="relative flex flex-col items-center">
        <div className="relative flex h-[220px] w-[220px] items-center justify-center" aria-hidden="true">
          {!reduce &&
          <>
              <motion.span
              className="absolute inset-[-14%] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(63,211,154,0.35) 0%, rgba(30,167,225,0.18) 45%, rgba(4,20,46,0) 70%)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.75] }}
              transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }} />
            
              {Array.from({ length: RAY_COUNT }).map((_, i) =>
            <motion.span
              key={`ray-${i}`}
              className="absolute left-1/2 top-1/2 h-[2px] w-[200px] origin-left"
              style={{
                rotate: i * (360 / RAY_COUNT) + 8,
                background: i % 2 ? 'linear-gradient(90deg, rgba(63,211,154,0.9), rgba(63,211,154,0))' : 'linear-gradient(90deg, rgba(127,211,245,0.9), rgba(127,211,245,0))'
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: [0, 1], opacity: [0, 1, 0] }}
              transition={{ duration: 0.9, delay: 0.4 + i * 0.015, ease: EASE }} />

            )}
              <motion.span
              className="absolute inset-0 rounded-full border-2 border-sky-light"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: [0.9, 1.75], opacity: [0, 0.8, 0] }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }} />
            
              <motion.span
              className="absolute inset-0 rounded-full border border-growth-light"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: [0.9, 2.2], opacity: [0, 0.6, 0] }}
              transition={{ duration: 1.2, delay: 0.55, ease: 'easeOut' }} />
            
              {sparks.map((s, i) =>
            <motion.span
              key={`spark-${i}`}
              className="absolute left-1/2 top-1/2 rounded-full"
              style={{
                width: s.size,
                height: s.size,
                marginLeft: -s.size / 2,
                marginTop: -s.size / 2,
                background: s.color,
                boxShadow: `0 0 10px ${s.color}`
              }}
              initial={{ x: 0, y: 0, opacity: 0, scale: 0.6 }}
              animate={{ x: s.x, y: s.y, opacity: [0, 1, 0], scale: [0.6, 1, 0.3] }}
              transition={{ duration: 1.4, delay: s.delay, ease: EASE }} />

            )}
            </>
          }
          <motion.div
            className="relative rounded-full shadow-[0_0_60px_rgba(30,167,225,0.45)]"
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, filter: 'blur(6px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.3, delay: 0.1, ease: EASE }}>
            
            <LogoBadge size={200} decorative />
          </motion.div>
        </div>

        <motion.p
          className="mt-10 text-sm font-medium tracking-[0.2em] text-white/75"
          initial={{ opacity: 0, y: reduce ? 0 : 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: reduce ? 0.1 : 0.9, ease: EASE }}>
          
          Digital Solutions. Real Growth.
        </motion.p>
      </div>

      <button
        type="button"
        onClick={onComplete}
        className="absolute bottom-6 right-6 rounded-full px-4 py-2 text-xs font-semibold text-white/70 transition-colors duration-150 hover:bg-white/10 hover:text-white">
        
        Skip intro
      </button>
    </motion.div>);

}