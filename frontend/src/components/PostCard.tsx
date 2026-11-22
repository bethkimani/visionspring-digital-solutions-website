import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, ClockIcon } from 'lucide-react';
import type { Post } from '../types/content';
import { formatPostDate } from '../utils/dates';

interface PostCardProps {
  post: Post;
  variant?: 'card' | 'featured';
}

export function PostCard({ post, variant = 'card' }: PostCardProps) {
  const meta =
  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
      <span className="font-semibold text-ocean">{post.category}</span>
      <span className="flex items-center gap-1">
        <ClockIcon className="h-3.5 w-3.5" aria-hidden="true" />
        {post.readMinutes} min read
      </span>
      {post.publishedAt && (
        <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
      )}
    </div>;


  if (variant === 'featured') {
    return (
      <article className="group grid overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[2rem] border border-line bg-white lg:grid-cols-2">
        <Link href={`/blog/${post.slug}`} className="block overflow-hidden" tabIndex={-1} aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title || 'Featured article cover'}
            className="h-52 sm:h-64 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03] lg:h-full"
          />
        </Link>
        <div className="flex flex-col p-5 sm:p-7 md:p-10 min-w-0">
          {meta}
          <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl lg:text-3xl font-extrabold leading-snug sm:leading-tight text-navy-800 break-words">
            <Link href={`/blog/${post.slug}`} className="hover:text-ocean">
              {post.title}
            </Link>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-muted line-clamp-3 sm:line-clamp-4 break-words">
            {post.excerpt}
          </p>
          <Link
            href={`/blog/${post.slug}`}
            className="mt-auto inline-flex items-center gap-1.5 pt-6 sm:pt-8 text-sm font-semibold text-ocean hover:text-ocean-dark"
          >
            Read Article
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col min-w-0">
      <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-2xl" tabIndex={-1} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt={post.title || 'Blog article cover'}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
        />
      </Link>
      <div className="flex flex-1 flex-col pt-4 sm:pt-5 min-w-0">
        {meta}
        <h3 className="mt-2.5 sm:mt-3 text-base sm:text-lg font-bold leading-snug text-navy-800 break-words">
          <Link href={`/blog/${post.slug}`} className="hover:text-ocean">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-xs sm:text-sm leading-relaxed text-muted break-words">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-ocean hover:text-ocean-dark"
        >
          Read Article
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );

}