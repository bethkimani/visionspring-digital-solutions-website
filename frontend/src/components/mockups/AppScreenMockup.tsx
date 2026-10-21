import React from 'react';

interface AppScreenMockupProps {
  title?: string;
  accent?: string;
}

export function AppScreenMockup({ title = 'Good morning', accent = '#1565C0' }: AppScreenMockupProps) {
  return (
    <div className="flex h-full flex-col bg-mist px-3 pb-3 pt-7">
      <p className="text-[9px] text-muted">Welcome back</p>
      <p className="font-display text-[13px] font-extrabold text-navy-800">{title}</p>
      <div className="mt-2 rounded-xl p-3 text-white" style={{ background: accent }}>
        <p className="text-[8px] opacity-80">Next booking</p>
        <p className="text-[11px] font-bold">Tue · 10:30</p>
        <span className="mt-2 block h-1 w-10/12 rounded-full bg-white/40" />
      </div>
      <div className="mt-2 grid grid-cols-2 gap-1.5">
        {['#1EA7E1', '#14A971', '#0B2A5B', '#2D7FD8'].map((c) =>
        <div key={c} className="rounded-lg bg-white p-2">
            <span className="block h-4 w-4 rounded-md" style={{ background: c }} />
            <span className="mt-1.5 block h-1 w-9/12 rounded-full bg-line" />
          </div>
        )}
      </div>
      <div className="mt-2 space-y-1.5">
        {[0, 1, 2].map((i) =>
        <div key={i} className="flex items-center gap-2 rounded-lg bg-white p-1.5">
            <span className="h-5 w-5 rounded-full bg-sky-soft" />
            <span className="h-1 flex-1 rounded-full bg-line" />
          </div>
        )}
      </div>
      <div className="mt-auto flex justify-around rounded-xl bg-white py-1.5">
        {[0, 1, 2, 3].map((i) =>
        <span key={i} className="h-3 w-3 rounded" style={{ background: i === 0 ? accent : '#E3E9F2' }} />
        )}
      </div>
    </div>);

}