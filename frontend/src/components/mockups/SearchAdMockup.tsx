import React from 'react';
import { SearchIcon } from 'lucide-react';

interface SearchAdMockupProps {
  query?: string;
  className?: string;
}

export function SearchAdMockup({ query = 'website design company', className = '' }: SearchAdMockupProps) {
  return (
    <div className={`rounded-2xl bg-white p-4 shadow-[0_24px_50px_-28px_rgba(4,20,46,0.6)] ring-1 ring-black/5 ${className}`}>
      <div className="flex items-center gap-2 rounded-full border border-line px-3 py-1.5">
        <SearchIcon className="h-3 w-3 text-muted" aria-hidden="true" />
        <span className="truncate text-[11px] text-navy-800">{query}</span>
      </div>
      <div className="mt-3">
        <p className="text-[10px] text-navy-800">
          <span className="font-bold">Sponsored</span> · yourbusiness.co.ke
        </p>
        <p className="mt-1 text-[13px] font-semibold leading-snug text-[#1A0DAB]">Professional Website Design | Free Consultation</p>
        <p className="mt-1 text-[10px] leading-relaxed text-muted">Responsive websites for businesses and schools. Talk to our team today.</p>
      </div>
      <div className="mt-3 space-y-1.5 border-t border-line pt-3">
        <span className="block h-1.5 w-9/12 rounded-full bg-line" />
        <span className="block h-1.5 w-6/12 rounded-full bg-line" />
      </div>
    </div>);

}