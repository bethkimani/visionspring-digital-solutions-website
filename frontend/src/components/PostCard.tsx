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
      {post.status === 'published' && post.publishedAt ?
    <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time> :

    <span className="rounded-full bg-mist px-2 py-0.5 font-semibold text-muted">Sample article</span>
    }
    </div>;


  if (variant === 'featured') {
    return (
      <article className="group grid overflow-hidden rounded-[2rem] border border-line bg-white lg:grid-cols-2">
        <Link href={`/blog/${post.slug}`} className="block overflow-hidden" tabIndex={-1} aria-hidden="true">
          <img src={post.image} alt="" className="h-64 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03] lg:h-full" />
        </Link>
        <div className="flex flex-col p-7 sm:p-10">
          {meta}
          <h2 className="mt-4 text-2xl font-extrabold leading-tight text-navy-800 sm:text-3xl">
            <Link href={`/blog/${post.slug}`} className="hover:text-ocean">
              {post.title}
            </Link>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{post.excerpt}</p>
          <Link href={`/blog/${post.slug}`} className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-semibold text-ocean hover:text-ocean-dark">
            Read Article
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </article>);

  }

  return (
    <article className="group flex h-full flex-col">
      <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-2xl" tabIndex={-1} aria-hidden="true">
        <img src={post.image} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]" />
      </Link>
      <div className="flex flex-1 flex-col pt-5">
        {meta}
        <h3 className="mt-3 text-lg font-bold leading-snug text-navy-800">
          <Link href={`/blog/${post.slug}`} className="hover:text-ocean">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-ocean hover:text-ocean-dark">
          Read Article
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>);

}