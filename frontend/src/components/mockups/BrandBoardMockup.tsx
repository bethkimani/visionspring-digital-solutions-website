import React from 'react';

const swatches = ['#0B2A5B', '#1565C0', '#1EA7E1', '#14A971', '#F4F7FB'];

export function BrandBoardMockup({ className = '' }: {className?: string;}) {
  return (
    <div className={`grid grid-cols-6 gap-2 rounded-2xl bg-white p-3 shadow-[0_24px_50px_-28px_rgba(4,20,46,0.6)] ring-1 ring-black/5 ${className}`}>
      <div className="col-span-3 flex aspect-square items-center justify-center rounded-xl bg-navy-800">
        <span className="font-display text-4xl font-extrabold text-white">
          S<span className="text-growth-light">.</span>
        </span>
      </div>
      <div className="col-span-3 flex flex-col justify-between rounded-xl bg-mist p-3">
        <span className="font-display text-3xl font-extrabold text-navy-800">Aa</span>
        <div className="space-y-1">
          <span className="block h-1.5 w-full rounded-full bg-navy-800/40" />
          <span className="block h-1.5 w-8/12 rounded-full bg-navy-800/20" />
        </div>
        <p className="text-[9px] font-semibold text-muted">Typography</p>
      </div>
      <div className="col-span-6 flex gap-1.5">
        {swatches.map((c) =>
        <span key={c} className="h-8 flex-1 rounded-lg ring-1 ring-black/5" style={{ background: c }} />
        )}
      </div>
      <div className="col-span-4 flex aspect-[1.75/1] flex-col justify-between rounded-xl bg-white p-3 ring-1 ring-line">
        <span className="font-display text-sm font-extrabold text-navy-800">Sample Studio</span>
        <div className="space-y-1">
          <span className="block h-1 w-9/12 rounded-full bg-muted/40" />
          <span className="block h-1 w-6/12 rounded-full bg-muted/30" />
        </div>
      </div>
      <div className="col-span-2 rounded-xl bg-growth" />
    </div>);

}