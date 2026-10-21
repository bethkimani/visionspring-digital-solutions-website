import React from 'react';
import { InfoIcon } from 'lucide-react';

interface SampleBadgeProps {
  label?: string;
  tone?: 'dark' | 'light';
  className?: string;
}

export function SampleBadge({ label = 'Illustrative sample', tone = 'dark', className = '' }: SampleBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
      tone === 'dark' ? 'bg-navy-800/90 text-white' : 'bg-white/90 text-navy-800'} ${
      className}`}>
      
      <InfoIcon className="h-3 w-3" aria-hidden="true" />
      {label}
    </span>);

}