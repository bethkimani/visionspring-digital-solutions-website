import React from 'react';

interface BrowserFrameProps {
  url?: string;
  className?: string;
  children: React.ReactNode;
}

export function BrowserFrame({ url = 'yourbusiness.co.ke', className = '', children }: BrowserFrameProps) {
  return (
    <div className={`overflow-hidden rounded-xl bg-white shadow-[0_30px_60px_-30px_rgba(4,20,46,0.55)] ring-1 ring-black/5 ${className}`}>
      <div className="flex items-center gap-2 border-b border-line bg-mist px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-2 flex-1 truncate rounded-md bg-white px-3 py-1 text-[10px] text-muted ring-1 ring-line">{url}</span>
      </div>
      {children}
    </div>);

}