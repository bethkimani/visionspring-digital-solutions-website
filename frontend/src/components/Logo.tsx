import React from 'react';
import Image from 'next/image';
import { site } from '../data/site';

interface LogoBadgeProps {
  size?: number;
  className?: string;
  decorative?: boolean;
}

/** Crops the uploaded logo artwork to its circular badge so it stays recognizable at small sizes. */
export function LogoBadge({ size = 44, className = '', decorative = false }: LogoBadgeProps) {
  return (
    <span
      className={`relative inline-block shrink-0 overflow-hidden rounded-full bg-white ${className}`}
      style={{ width: size, height: size }}>
      <Image
        src={site.logoUrl}
        alt={decorative ? '' : 'VisionSpring Agency logo'}
        fill
        sizes={`${size}px`}
        priority={size <= 64}
        className="scale-[1.18] object-cover"
        draggable={false}
      />
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