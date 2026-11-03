"use client";

import React, { useMemo, useState } from 'react';
import { SearchIcon, XIcon } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { PostCard } from '@/components/PostCard';
import { CtaBanner } from '@/components/CtaBanner';
import type { Post } from '@/types/content';

const PAGE_SIZE = 6;

const DEFAULT_CATEGORIES = [
  'Website Development',
  'Web Applications',
  'SEO',
  'Digital Advertising',
  'Social Media',
  'Branding & Design',
];

interface BlogListClientProps {
  initialPosts: Post[];
}

export function BlogListClient({ initialPosts }: BlogListClientProps) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const posts = initialPosts;
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const isFiltering = query.trim() !== '' || category !== 'All';

  // Compute available categories dynamically from existing posts
  const availableCategories = useMemo(() => {
    const fromPosts = posts.map((p) => p.category).filter(Boolean);
    const combined = Array.from(new Set([...fromPosts, ...DEFAULT_CATEGORIES]));
    return ['All', ...combined];
  }, [posts]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      // If we have more than 1 post and not searching, reserve the featured post for the top hero banner
      if (!isFiltering && posts.length > 1 && featured && p.slug === featured.slug) {
        return false;
      }

      // Check category match
      const pCat = (p.category || '').toLowerCase().trim();
      const selCat = category.toLowerCase().trim();
      const matchesCategory =
        category === 'All' ||
        pCat === selCat ||
        pCat.includes(selCat) ||
        selCat.includes(pCat);

      // Check query match
      const matchesQuery =
        !q ||
        `${p.title} ${p.excerpt} ${p.category}`.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [query, category, isFiltering, featured, posts]);

  const shown = results.slice(0, visibleCount);

  const resetFilters = () => {
    setQuery('');
    setCategory('All');
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Latest Updates' }]}
        title="Digital insights for growing organizations"
        description="Practical guides for business owners, entrepreneurs, schools, and online brands — on websites, search, social media, advertising, and technology."
      />

      <section className="py-16 sm:py-20">
        <div className="container-site">
          {/* Top Featured Post (shown when not filtering) */}
          {featured && !isFiltering && (
            <div className="mb-16">
              <h2 className="sr-only">Featured article</h2>
              <PostCard post={featured} variant="featured" />
            </div>
          )}

          {/* Search & Category Filter Controls */}
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-sm">
              <label htmlFor="blog-search" className="sr-only">
                Search articles
              </label>
              <SearchIcon
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                aria-hidden="true"
              />
              <input
                id="blog-search"
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setVisibleCount(PAGE_SIZE);
                }}
                placeholder="Search articles"
                className="h-12 w-full rounded-full border border-line bg-white pl-11 pr-4 text-[15px] text-navy-800 placeholder:text-muted/70 focus:border-ocean focus:outline-none focus:ring-4 focus:ring-sky-soft"
              />
            </div>
            <div className="-mx-5 overflow-x-auto px-5 scrollbar-none lg:mx-0 lg:px-0">
              <div className="flex gap-2" role="group" aria-label="Filter by category">
                {availableCategories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    aria-pressed={category === c}
                    onClick={() => {
                      setCategory(c);
                      setVisibleCount(PAGE_SIZE);
                    }}
                    className={`h-10 whitespace-nowrap rounded-full px-4 text-sm font-semibold transition-colors duration-150 ${
                      category === c
                        ? 'bg-navy-800 text-white'
                        : 'bg-mist text-navy-800 hover:bg-sky-soft'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-muted" aria-live="polite">
            {isFiltering
              ? `${results.length} ${results.length === 1 ? 'article' : 'articles'} found`
              : 'Latest articles'}
          </p>

          {/* Grid of Articles */}
          {shown.length > 0 ? (
            <div className="mt-6 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {shown.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : isFiltering ? (
            /* Only show "No articles match" if the user was actively filtering */
            <div className="mt-6 rounded-3xl border border-dashed border-line px-6 py-16 text-center">
              <p className="font-display text-xl font-bold text-navy-800">
                No articles match your search
              </p>
              <p className="mt-2 text-muted">Try a different keyword or category.</p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-6 inline-flex h-11 items-center gap-2 rounded-full border border-line px-5 text-sm font-semibold text-navy-800 hover:border-ocean hover:text-ocean"
              >
                <XIcon className="h-4 w-4" aria-hidden="true" />
                Clear filters
              </button>
            </div>
          ) : (
            /* When not filtering and there is only 1 post published so far */
            <div className="mt-6 rounded-3xl bg-mist/60 border border-line/60 px-6 py-10 text-center">
              <p className="font-semibold text-navy-800">More articles coming soon</p>
              <p className="mt-1 text-sm text-muted">
                Publish additional updates in Sanity Studio to fill out your article grid.
              </p>
            </div>
          )}

          {results.length > visibleCount && (
            <div className="mt-14 text-center">
              <button
                type="button"
                onClick={() => setVisibleCount((n) => n + PAGE_SIZE)}
                className="inline-flex h-12 items-center rounded-full bg-navy-800 px-6 text-sm font-semibold text-white transition-colors duration-150 hover:bg-navy-700"
              >
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>

      <CtaBanner
        title="Have a question about your digital presence?"
        text="Our team is happy to point you in the right direction — no obligation."
      />
    </>
  );
}
