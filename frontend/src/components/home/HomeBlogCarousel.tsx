"use client";

import React, { useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { PostCard } from '../PostCard';
import { Reveal } from '../Reveal';
import type { Post } from '@/types/content';

interface HomeBlogCarouselProps {
  posts: Post[];
}

export function HomeBlogCarousel({ posts }: HomeBlogCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, children } = scrollRef.current;
    if (!children.length) return;
    const firstChild = children[0] as HTMLElement;
    const itemWidth = firstChild ? firstChild.offsetWidth + 14 : 290;
    const index = Math.round(scrollLeft / itemWidth);
    setActiveIndex(Math.min(Math.max(index, 0), posts.length - 1));
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.children[index] as HTMLElement;
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      setActiveIndex(index);
    }
  };

  return (
    <div>
      {/* Cards: Snap Carousel on Mobile (< md), Grid on Desktop (md+) */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="mt-8 sm:mt-12 flex md:grid gap-3.5 sm:gap-6 md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none -mx-5 px-5 md:mx-0 md:px-0 py-2 scroll-smooth touch-pan-x"
      >
        {posts.map((post, i) => (
          <div
            key={post.slug}
            className="w-[74vw] max-w-[285px] sm:w-[320px] md:w-auto shrink-0 snap-start md:shrink flex flex-col"
          >
            <Reveal delay={i * 0.05} className="h-full flex flex-col">
              <PostCard post={post} />
            </Reveal>
          </div>
        ))}
      </div>

      {/* Mobile Swipe Indicators & Arrows */}
      {posts.length > 1 && (
        <div className="mt-5 flex items-center justify-between md:hidden px-1">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            {posts.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to article ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-200 ${
                  activeIndex === i ? 'w-6 bg-ocean' : 'w-2 bg-slate-300'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              aria-label="Previous article"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-white text-navy-800 shadow-sm transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollToIndex(Math.min(posts.length - 1, activeIndex + 1))}
              disabled={activeIndex === posts.length - 1}
              aria-label="Next article"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-white text-navy-800 shadow-sm transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
