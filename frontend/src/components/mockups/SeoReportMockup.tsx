import React from 'react';
import { TrendingUpIcon } from 'lucide-react';

const rows = [
{ keyword: 'web design nairobi', trend: 72 },
{ keyword: 'school website kenya', trend: 58 },
{ keyword: 'seo services kenya', trend: 64 },
{ keyword: 'ecommerce website', trend: 46 }];


export function SeoReportMockup({ className = '' }: {className?: string;}) {
  return (
    <div className={`rounded-2xl bg-white p-4 shadow-[0_24px_50px_-28px_rgba(4,20,46,0.6)] ring-1 ring-black/5 ${className}`}>
      <div className="flex items-center justify-between">
        <p className="text-[12px] font-semibold text-navy-800">Keyword tracking</p>
        <span className="text-[9px] font-semibold text-muted">Sample report</span>
      </div>
      <svg viewBox="0 0 200 60" className="mt-3 h-16 w-full" aria-hidden="true">
        <polyline points="0,50 30,46 60,40 90,42 120,30 150,24 180,16 200,10" fill="none" stroke="#1565C0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="0,56 30,54 60,50 90,48 120,44 150,40 180,36 200,32" fill="none" stroke="#14A971" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
      </svg>
      <ul className="mt-2 divide-y divide-line">
        {rows.map((row) =>
        <li key={row.keyword} className="flex items-center gap-3 py-1.5">
            <span className="flex-1 truncate text-[10px] text-navy-800">{row.keyword}</span>
            <span className="h-1.5 w-16 overflow-hidden rounded-full bg-mist">
              <span className="block h-full rounded-full bg-sky" style={{ width: `${row.trend}%` }} />
            </span>
            <TrendingUpIcon className="h-3 w-3 text-growth-dark" aria-hidden="true" />
          </li>
        )}
      </ul>
    </div>);

}