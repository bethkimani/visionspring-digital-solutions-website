import React from 'react';

interface PhoneFrameProps {
  className?: string;
  dark?: boolean;
  children: React.ReactNode;
}

export function PhoneFrame({ className = '', dark = false, children }: PhoneFrameProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border-[6px] border-navy-950 shadow-[0_30px_60px_-25px_rgba(4,20,46,0.6)] ${dark ? 'bg-navy-950' : 'bg-white'} ${className}`}
      style={{ aspectRatio: '9 / 18.5' }}>
      
      <div className="absolute left-1/2 top-1.5 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-navy-950" />
      <div className="h-full w-full">{children}</div>
    </div>);

}