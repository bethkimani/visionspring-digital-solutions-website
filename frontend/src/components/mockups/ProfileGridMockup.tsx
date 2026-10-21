import React from 'react';

const tiles = ['#0B2A5B', '#14A971', '#1EA7E1', '#E8F6FD', '#1565C0', '#0A7F53', '#123B7A', '#7FD3F5', '#F4F7FB'];

export function ProfileGridMockup({ brand = 'Sample Brand' }: {brand?: string;}) {
  return (
    <div className="flex h-full flex-col bg-white px-3 pb-3 pt-7">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-800 text-xs font-bold text-white ring-2 ring-growth ring-offset-2">SB</span>
        <div className="grid flex-1 grid-cols-3 text-center">
          {['Posts', 'Followers', 'Following'].map((l) =>
          <div key={l}>
              <span className="mx-auto block h-2 w-5 rounded-full bg-navy-800/70" />
              <p className="mt-1 text-[7px] text-muted">{l}</p>
            </div>
          )}
        </div>
      </div>
      <p className="mt-2 text-[10px] font-bold text-navy-800">{brand}</p>
      <span className="mt-1 block h-1 w-10/12 rounded-full bg-line" />
      <span className="mt-1 block h-1 w-7/12 rounded-full bg-line" />
      <div className="mt-2 flex gap-1.5">
        <span className="h-5 flex-1 rounded-md bg-ocean" />
        <span className="h-5 flex-1 rounded-md bg-mist" />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-0.5">
        {tiles.map((c, i) =>
        <span key={i} className="aspect-square" style={{ background: c }} />
        )}
      </div>
    </div>);

}