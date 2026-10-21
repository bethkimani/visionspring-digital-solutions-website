import React from 'react';
import { site } from '../data/site';

interface LogoBadgeProps {
  size?: number;
  className?: string;
  decorative?: boolean;
}

/** Crops the uploaded logo photo to its circular badge so it can be used at any size. */
export function LogoBadge({ size = 44, className = '', decorative = false }: LogoBadgeProps) {
  const imgWidth = size * (1264 / 640);
  return (
    <span
      className={`relative inline-block shrink-0 overflow-hidden rounded-full bg-white ${className}`}
      style={{ width: size, height: size }}>
      
      <img
        src={site.logoUrl}
        alt={decorative ? '' : 'VisionSpring Agency logo'}
        draggable={false}
        style={{
          position: 'absolute',
          width: imgWidth,
          maxWidth: 'none',
          left: -size * (312 / 640),
          top: -size * (93 / 640)
        }} />
      
    </span>);

}

interface LogoProps {
  tone?: 'dark' | 'light';
  size?: number;
}

export function Logo({ tone = 'dark', size = 44 }: LogoProps) {
  return (
    <span className="flex items-center gap-3">
      <LogoBadge size={size} decorative className="ring-1 ring-line" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[17px] font-extrabold tracking-tight">
          <span className={tone === 'dark' ? 'text-navy-800' : 'text-white'}>Vision</span>
          <span className={tone === 'dark' ? 'text-growth-dark' : 'text-growth-light'}>Spring</span>
        </span>
        <span className={`mt-1 text-[10px] font-medium tracking-[0.32em] ${tone === 'dark' ? 'text-muted' : 'text-white/60'}`}>
          AGENCY
        </span>
      </span>
    </span>);

}