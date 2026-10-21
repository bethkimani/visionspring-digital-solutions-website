import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { posts } from '../../data/posts';
import { ButtonLink } from '../ButtonLink';
import { PostCard } from '../PostCard';
import { Reveal } from '../Reveal';
import { SectionHeading } from '../SectionHeading';

export function HomeBlog() {
  const selected = posts.slice(0, 3);
  return (
    <section className="py-20 sm:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Insights"
          title="Practical guides for growing online"
          action={
          <ButtonLink to="/blog" variant="outline" iconRight={<ArrowRightIcon className="h-4 w-4" aria-hidden="true" />}>
              Visit the Blog
            </ButtonLink>
          } />
        
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-6">
          {selected.map((post, i) =>
          <Reveal key={post.slug} delay={i * 0.05} className="h-full">
              <PostCard post={post} />
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}