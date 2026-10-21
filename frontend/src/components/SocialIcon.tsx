import React from 'react';
import type { SocialPlatform } from '../types/content';

export function SocialIcon({ platform, className = 'h-4 w-4' }: {platform: SocialPlatform;className?: string;}) {
  const common = { viewBox: '0 0 24 24', className, 'aria-hidden': true as const };
  switch (platform) {
    case 'facebook':
      return (
        <svg {...common} fill="currentColor">
          <path d="M14 8.5V6.8c0-.8.5-1 1-1h2.3V2.1L14.2 2C10.9 2 10 4.3 10 6.4v2.1H7.6v3.8H10V22h4v-9.7h3l.4-3.8H14z" />
        </svg>);

    case 'instagram':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
        </svg>);

    case 'tiktok':
      return (
        <svg {...common} fill="currentColor">
          <path d="M16.6 3c.3 2.2 1.7 3.8 4 4.1v3.3c-1.5 0-2.9-.4-4-1.2v6.1a6 6 0 1 1-6-6v3.3a2.7 2.7 0 1 0 2.7 2.7V3h3.3z" />
        </svg>);

    case 'linkedin':
      return (
        <svg {...common} fill="currentColor">
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3V9.75zm6.5 0h3.8v1.6h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-4.9c0-1.17-.02-2.68-1.63-2.68-1.64 0-1.89 1.28-1.89 2.6V21h-4V9.75z" />
        </svg>);

    case 'youtube':
      return (
        <svg {...common} fill="currentColor">
          <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.8 15.1V8.9l5.4 3.1-5.4 3.1z" />
        </svg>);

  }
}