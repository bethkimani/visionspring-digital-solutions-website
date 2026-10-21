import React from 'react';

const scheduled: Record<number, {label: string;color: string;}> = {
  2: { label: 'Tip', color: '#1565C0' },
  4: { label: 'Promo', color: '#14A971' },
  7: { label: 'Reel', color: '#1EA7E1' },
  9: { label: 'Story', color: '#0B2A5B' },
  11: { label: 'Tip', color: '#1565C0' },
  14: { label: 'Launch', color: '#14A971' },
  16: { label: 'Reel', color: '#1EA7E1' },
  18: { label: 'Poll', color: '#0B2A5B' },
  21: { label: 'Tip', color: '#1565C0' },
  23: { label: 'Offer', color: '#14A971' },
  25: { label: 'Reel', color: '#1EA7E1' },
  28: { label: 'Recap', color: '#0B2A5B' }
};

export function ContentCalendarMockup({ className = '' }: {className?: string;}) {
  return (
    <div className={`rounded-2xl bg-white p-4 shadow-[0_24px_50px_-28px_rgba(4,20,46,0.6)] ring-1 ring-black/5 ${className}`}>
      <div className="flex items-center justify-between">
        <p className="text-[12px] font-semibold text-navy-800">Monthly content calendar</p>
        <span className="text-[9px] font-semibold text-muted">Sample</span>
      </div>
      <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[8px] font-semibold text-muted">
        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) =>
        <span key={i}>{d}</span>
        )}
      </div>
      <div className="mt-1 grid grid-cols-7 gap-1">
        {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => {
          const item = scheduled[day];
          return (
            <div key={day} className="flex aspect-square flex-col rounded-md bg-mist p-1">
              <span className="text-[8px] text-muted">{day}</span>
              {item &&
              <span className="mt-auto truncate rounded px-0.5 text-[7px] font-semibold text-white" style={{ background: item.color }}>
                  {item.label}
                </span>
              }
            </div>);

        })}
      </div>
    </div>);

}