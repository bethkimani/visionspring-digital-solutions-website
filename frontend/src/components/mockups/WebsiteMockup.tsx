import React from 'react';

interface WebsiteMockupProps {
  title?: string;
  background?: string;
  surface?: string;
  accent?: string;
  text?: string;
}

export function WebsiteMockup({
  title = 'Grow with a website that works',
  background = '#FFFFFF',
  surface = '#F4F7FB',
  accent = '#1565C0',
  text = '#0B2A5B'
}: WebsiteMockupProps) {
  return (
    <div style={{ background, color: text }} className="p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <span className="h-3 w-16 rounded-full" style={{ background: text, opacity: 0.85 }} />
        <div className="hidden gap-2 sm:flex">
          {[0, 1, 2, 3].map((i) =>
          <span key={i} className="h-1.5 w-8 rounded-full" style={{ background: text, opacity: 0.25 }} />
          )}
        </div>
        <span className="h-5 w-14 rounded-full" style={{ background: accent }} />
      </div>
      <div className="mt-5 grid grid-cols-5 items-center gap-4">
        <div className="col-span-3">
          <p className="font-display text-[15px] font-extrabold leading-tight sm:text-lg">{title}</p>
          <span className="mt-2 block h-1.5 w-11/12 rounded-full" style={{ background: text, opacity: 0.2 }} />
          <span className="mt-1.5 block h-1.5 w-8/12 rounded-full" style={{ background: text, opacity: 0.2 }} />
          <div className="mt-3 flex gap-2">
            <span className="h-5 w-16 rounded-full" style={{ background: accent }} />
            <span className="h-5 w-14 rounded-full border" style={{ borderColor: text, opacity: 0.4 }} />
          </div>
        </div>
        <div className="col-span-2 aspect-[4/3] rounded-lg" style={{ background: accent, opacity: 0.9 }} />
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) =>
        <div key={i} className="rounded-lg p-2" style={{ background: surface }}>
            <span className="block h-6 w-6 rounded-md" style={{ background: accent, opacity: 0.25 + i * 0.2 }} />
            <span className="mt-2 block h-1.5 w-10/12 rounded-full" style={{ background: text, opacity: 0.3 }} />
            <span className="mt-1 block h-1.5 w-7/12 rounded-full" style={{ background: text, opacity: 0.18 }} />
          </div>
        )}
      </div>
    </div>);

}