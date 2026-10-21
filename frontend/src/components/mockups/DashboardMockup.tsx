import React from 'react';

const bars = [38, 52, 44, 66, 58, 74, 82];

export function DashboardMockup({ title = 'Performance overview', className = '' }: {title?: string;className?: string;}) {
  return (
    <div className={`rounded-2xl bg-white p-4 shadow-[0_24px_50px_-28px_rgba(4,20,46,0.6)] ring-1 ring-black/5 ${className}`}>
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-semibold text-navy-800">{title}</p>
        <span className="rounded-full bg-growth-soft px-2 py-0.5 text-[9px] font-semibold text-growth-dark">Live</span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {['Visitors', 'Enquiries', 'Reach'].map((label, i) =>
        <div key={label} className="rounded-lg bg-mist p-2">
            <p className="text-[9px] text-muted">{label}</p>
            <span className="mt-1 block h-2 rounded-full" style={{ width: `${55 + i * 15}%`, background: i === 1 ? '#14A971' : '#1565C0' }} />
          </div>
        )}
      </div>
      <div className="mt-3 flex h-20 items-end gap-1.5">
        {bars.map((h, i) =>
        <span
          key={i}
          className="flex-1 rounded-t-md"
          style={{ height: `${h}%`, background: i === bars.length - 1 ? '#14A971' : i % 2 ? '#1EA7E1' : '#1565C0', opacity: i === bars.length - 1 ? 1 : 0.85 }} />

        )}
      </div>
    </div>);

}