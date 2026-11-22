import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { getAllPosts } from '@/sanity/api';
import { ButtonLink } from '../ButtonLink';
import { SectionHeading } from '../SectionHeading';
import { HomeBlogCarousel } from './HomeBlogCarousel';

export async function HomeBlog() {
  const posts = await getAllPosts();

  // Prioritize high-intent commercial and local SEO guides on the homepage.
  // Order below is the display order. Slugs that don't exist yet are skipped,
  // so 'website-cost-in-kenya' will appear automatically once you publish it.
  const prioritySlugs = [
    'website-cost-in-kenya',
    'local-seo-in-kenya-how-to-get-your-business-on-the-first-page-of-google',
    'how-kenyan-businesses-can-improve-google-visibility',
    'professional-website-for-business-kenya',
  ];

  const prioritized = prioritySlugs
    .map((slug) => posts.find((p) => p.slug === slug))
    .filter((p): p is (typeof posts)[number] => Boolean(p));
  const remaining = posts.filter((p) => !prioritySlugs.includes(p.slug));
  const selected = [...prioritized, ...remaining].slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/70">
      <div className="container-site">
        <SectionHeading
          eyebrow="Expert Guides &amp; Insights"
          title="Web Design, SEO &amp; Digital Growth Guides for Kenya"
          description="Actionable, transparent guides to help Kenyan business owners understand website pricing, Google SEO ranking, and digital marketing."
          action={
            <ButtonLink
              to="/blog"
              variant="outline"
              iconRight={<ArrowRightIcon className="h-4 w-4" aria-hidden="true" />}
            >
              Explore All Articles
            </ButtonLink>
          }
        />

        <HomeBlogCarousel posts={selected} />
      </div>
    </section>
  );
}