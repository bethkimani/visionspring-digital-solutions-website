import React from 'react';
import { BookmarkIcon, HeartIcon, MessageCircleIcon, Repeat2Icon, SendIcon, ThumbsUpIcon } from 'lucide-react';
import type { SocialSample } from '../../data/socialSamples';

export function SocialPostMockup({ sample, className = '' }: {sample: SocialSample;className?: string;}) {
  const isLinkedIn = sample.platform === 'LinkedIn';
  return (
    <article className={`overflow-hidden rounded-2xl bg-white shadow-[0_20px_44px_-26px_rgba(4,20,46,0.55)] ring-1 ring-black/5 ${className}`}>
      <header className="flex items-center gap-2 px-3 py-2.5">
        <span className="flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold" style={{ background: sample.background, color: sample.foreground }}>
          {sample.brand.split(' ')[1]?.[0] ?? 'S'}
        </span>
        <div className="min-w-0">
          <p className="truncate text-[11px] font-semibold text-navy-800">{sample.brand}</p>
          <p className="text-[9px] text-muted">{sample.platform} · Sample</p>
        </div>
      </header>
      {isLinkedIn && <p className="px-3 pb-2 text-[11px] leading-snug text-navy-800">{sample.caption}</p>}
      <div className="relative flex aspect-square flex-col justify-end p-4" style={{ background: sample.background, color: sample.foreground }}>
        <span className="absolute right-4 top-4 h-10 w-10 rounded-full border-4" style={{ borderColor: sample.accent }} aria-hidden="true" />
        <span className="mb-2 h-1 w-8 rounded-full" style={{ background: sample.accent }} />
        <p className="font-display text-lg font-extrabold leading-tight">{sample.headline}</p>
      </div>
      <footer className="px-3 py-2.5">
        <div className="flex items-center gap-3 text-navy-800">
          {isLinkedIn ?
          <>
              <ThumbsUpIcon className="h-4 w-4" aria-hidden="true" />
              <MessageCircleIcon className="h-4 w-4" aria-hidden="true" />
              <Repeat2Icon className="h-4 w-4" aria-hidden="true" />
            </> :

          <>
              <HeartIcon className="h-4 w-4" aria-hidden="true" />
              <MessageCircleIcon className="h-4 w-4" aria-hidden="true" />
              <SendIcon className="h-4 w-4" aria-hidden="true" />
              <BookmarkIcon className="ml-auto h-4 w-4" aria-hidden="true" />
            </>
          }
        </div>
        {!isLinkedIn && <p className="mt-2 line-clamp-2 text-[11px] leading-snug text-navy-800">{sample.caption}</p>}
      </footer>
    </article>);

}