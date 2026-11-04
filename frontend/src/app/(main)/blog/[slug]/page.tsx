import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeftIcon, ArrowRightIcon, ClockIcon, InfoIcon } from 'lucide-react';
import { getPostBySlug, getAllPosts } from '@/sanity/api';
import { services } from '@/data/services';
import { formatPostDate } from '@/utils/dates';
import { PostCard } from '@/components/PostCard';
import { ButtonLink } from '@/components/ButtonLink';
import { CtaBanner } from '@/components/CtaBanner';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { ShareButtons } from '@/components/ShareButtons';
import { PortableTextRenderer } from '@/components/PortableTextRenderer';

export const revalidate = 60;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found | VisionSpring Agency',
      description: 'The requested article could not be found.',
    };
  }

  const title = post.seoTitle || `${post.title} | VisionSpring Agency`;
  const description = post.metaDescription || post.excerpt;

  return {
    title,
    description,
    keywords: post.focusKeyword ? [post.focusKeyword] : undefined,
    alternates: post.canonicalUrl ? { canonical: post.canonicalUrl } : undefined,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author] : ['VisionSpring Agency'],
      images: [
        {
          url: post.image,
          alt: post.imageAlt || post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [post.image],
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => (a.category === post.category ? -1 : 1))
    .slice(0, 3);

  const relatedServices = (post.relatedServices || [])
    .map((s) => services.find((x) => x.slug === s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  // Schema.org Article Structured Data (JSON-LD) for Google Page 1 ranking
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: [post.image],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author || 'VisionSpring Agency',
    },
    publisher: {
      '@type': 'Organization',
      name: 'VisionSpring Agency',
      logo: {
        '@type': 'ImageObject',
        url: 'https://visionspring.agency/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://visionspring.agency/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>

      <article>
        <header className="bg-hero relative overflow-hidden text-white">
          <div className="bg-grid-lines absolute inset-0" aria-hidden="true" />
          <div className="container-site relative max-w-4xl py-16 sm:py-20">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors duration-150 hover:text-white"
            >
              <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
              All articles
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full bg-white/10 px-3 py-1 font-semibold text-growth-light">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-white/70">
                <ClockIcon className="h-4 w-4" aria-hidden="true" />
                {post.readMinutes} min read
              </span>
              {post.publishedAt && (
                <time dateTime={post.publishedAt} className="text-white/70">
                  {formatPostDate(post.publishedAt)}
                </time>
              )}
              {post.author && <span className="text-white/70">By {post.author}</span>}
            </div>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/75">{post.intro}</p>
          </div>
        </header>

        <div className="container-site -mt-0 pt-10">
          <img
            src={post.image}
            alt={post.imageAlt}
            className="mx-auto aspect-[21/9] w-full max-w-6xl rounded-[2rem] object-cover shadow-md"
          />
        </div>

        <div className="container-site grid gap-12 py-14 lg:grid-cols-12">
          {/* Left Sticky Sidebar: Table of Contents & Share */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28 space-y-8">
              {post.sections && post.sections.length > 0 && (
                <nav aria-label="Table of contents">
                  <p className="text-sm font-semibold text-navy-800">In this article</p>
                  <ol className="mt-4 space-y-2 border-l border-line">
                    {post.sections.map((s) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className="-ml-px block border-l-2 border-transparent pl-4 text-sm text-muted transition-colors duration-150 hover:border-ocean hover:text-navy-800"
                        >
                          {s.heading}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              <ShareButtons
                title={post.title}
                url={`https://visionspring.agency/blog/${post.slug}`}
              />
            </div>
          </aside>

          {/* Main Article Content */}
          <div className="lg:col-span-6">
            {/* Render Sanity Portable Text if present */}
            {post.body ? (
              <PortableTextRenderer value={post.body} />
            ) : (
              /* Fallback: render sections from local dataset */
              post.sections?.map((s) => (
                <section key={s.id} id={s.id} className="scroll-mt-28 [&:not(:first-child)]:mt-12">
                  <h2 className="text-2xl font-extrabold leading-tight text-navy-800 sm:text-[1.7rem]">
                    {s.heading}
                  </h2>
                  {s.paragraphs.map((p) => (
                    <p key={p} className="mt-4 text-[17px] leading-[1.8] text-navy-800/85">
                      {p}
                    </p>
                  ))}
                  {s.bullets && (
                    <ul className="mt-5 space-y-2.5">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-[17px] text-navy-800/85">
                          <span
                            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-growth"
                            aria-hidden="true"
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))
            )}

            <div className="mt-14 rounded-3xl bg-navy-950 p-8 text-white">
              <h2 className="text-2xl font-extrabold">Need Help With This?</h2>
              <p className="mt-2 text-white/70">
                Our team can put these ideas into practice for your organization.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink
                  to="/contact#consultation-form"
                  variant="light"
                >
                  Talk to Our Team
                </ButtonLink>
                <ButtonLink
                  href={`https://wa.me/254112280703?text=${encodeURIComponent(
                    `Hello VisionSpring Agency, I read "${post.title}" and would like some help.`
                  )}`}
                  variant="whatsapp"
                  icon={<WhatsAppIcon className="h-4 w-4" />}
                >
                  WhatsApp Us
                </ButtonLink>
              </div>
            </div>
          </div>

          {/* Right Sticky Sidebar: Related Services */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-semibold text-navy-800">Services that can help</p>
              <ul className="mt-4 space-y-2">
                {relatedServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group flex items-start gap-3 rounded-2xl border border-line p-4 transition-colors duration-150 hover:border-ocean/40"
                    >
                      <s.icon
                        className="mt-0.5 h-5 w-5 shrink-0 text-ocean"
                        aria-hidden="true"
                      />
                      <span>
                        <span className="block text-sm font-semibold text-navy-800 group-hover:text-ocean">
                          {s.navTitle}
                        </span>
                        <span className="mt-0.5 block text-xs text-muted">{s.blurb}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </article>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="bg-mist py-20">
          <div className="container-site">
            <div className="flex items-end justify-between gap-6">
              <h2 className="text-2xl font-extrabold text-navy-800 sm:text-3xl">
                Related articles
              </h2>
              <Link
                href="/blog"
                className="hidden items-center gap-1.5 text-sm font-semibold text-ocean hover:text-ocean-dark sm:inline-flex"
              >
                All articles
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-3">
              {relatedPosts.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner
        title="Turn insight into action"
        text="Ready to improve your website, visibility, or brand? Let’s talk about what would make the biggest difference."
      />
    </>
  );
}
