import { client } from './client';
import { urlForImage } from './image';
import { isSanityConfigured } from './env';
import { posts as fallbackPosts } from '@/data/posts';
import type { Post, BlogCategory } from '@/types/content';

export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  category,
  mainImage {
    asset,
    alt,
    caption
  },
  excerpt,
  author {
    name,
    role,
    avatar
  },
  publishedAt,
  readMinutes,
  featured,
  body,
  seoTitle,
  metaDescription,
  focusKeyword,
  canonicalUrl
}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  category,
  mainImage {
    asset,
    alt,
    caption
  },
  excerpt,
  author {
    name,
    role,
    avatar
  },
  publishedAt,
  readMinutes,
  featured,
  body,
  seoTitle,
  metaDescription,
  focusKeyword,
  canonicalUrl
}`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractExcerptFromBody(body: any, fallback: string): string {
  if (!body || !Array.isArray(body)) return fallback;
  const firstBlock = body.find((b: any) => b._type === 'block' && b.children);
  if (firstBlock && Array.isArray(firstBlock.children)) {
    const text = firstBlock.children.map((c: any) => c.text || '').join('').trim();
    if (text.length > 200) {
      return text.slice(0, 197) + '...';
    }
    if (text.length > 0) return text;
  }
  return fallback;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractHeadingsFromBody(body: any): Array<{ id: string; heading: string; paragraphs: string[] }> {
  if (!body || !Array.isArray(body)) return [];
  const sections: Array<{ id: string; heading: string; paragraphs: string[] }> = [];

  for (const block of body) {
    if (block._type === 'block') {
      const text = (block.children || []).map((c: any) => c.text || '').join('');

      // Native Sanity H2 block
      if (block.style === 'h2' && text.trim()) {
        const title = text.trim();
        const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        sections.push({ id, heading: title, paragraphs: [] });
        continue;
      }

      // Markdown style ## Heading (matches ## at start of line or string)
      const regex = /(?:^|\n|\r)##\s+([^\n\r#]+)/g;
      let match;
      while ((match = regex.exec(text)) !== null) {
        const title = match[1].trim();
        if (title.length > 0 && title.length < 100) {
          const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          sections.push({ id, heading: title, paragraphs: [] });
        }
      }
    }
  }

  return sections;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapSanityPostToPost(doc: any): Post {
  let imageUrl = '/logo.png';
  if (doc.mainImage) {
    const built = urlForImage(doc.mainImage);
    if (built) {
      imageUrl = built;
    }
  }

  const excerpt = doc.excerpt?.trim() || extractExcerptFromBody(doc.body, 'Insights and practical guides from VisionSpring Agency.');

  return {
    slug: doc.slug || '',
    title: doc.title || '',
    excerpt,
    metaDescription: doc.metaDescription || excerpt,
    category: (doc.category || 'Website Development') as BlogCategory,
    image: imageUrl,
    imageAlt: doc.mainImage?.alt || doc.title || 'VisionSpring article cover',
    readMinutes: doc.readMinutes || 5,
    status: 'published',
    publishedAt: doc.publishedAt ? new Date(doc.publishedAt).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
    author: doc.author?.name || 'VisionSpring Editorial Team',
    featured: Boolean(doc.featured),
    intro: excerpt,
    body: doc.body || null,
    sections: extractHeadingsFromBody(doc.body),
    seoTitle: doc.seoTitle || doc.title,
    focusKeyword: doc.focusKeyword || '',
    canonicalUrl: doc.canonicalUrl || '',
    relatedServices: ['website-development', 'seo', 'web-applications'],
  };
}

/**
 * Retrieve all blog posts.
 * If Sanity has published posts, returns them.
 * Gracefully falls back to bundled static articles if Sanity has not yet been populated.
 */
export async function getAllPosts(): Promise<Post[]> {
  if (!isSanityConfigured || !client) {
    return fallbackPosts;
  }

  try {
    const rawPosts = await client.fetch(POSTS_QUERY);
    if (!rawPosts || rawPosts.length === 0) {
      return fallbackPosts;
    }
    return rawPosts.map(mapSanityPostToPost);
  } catch (err) {
    console.warn('Failed to fetch posts from Sanity, using fallback posts:', err);
    return fallbackPosts;
  }
}

/**
 * Retrieve a single post by slug.
 */
export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  if (!isSanityConfigured || !client) {
    return fallbackPosts.find((p) => p.slug === slug);
  }

  try {
    const rawPost = await client.fetch(POST_BY_SLUG_QUERY, { slug });
    if (!rawPost) {
      return fallbackPosts.find((p) => p.slug === slug);
    }
    return mapSanityPostToPost(rawPost);
  } catch (err) {
    console.warn(`Failed to fetch post "${slug}" from Sanity, using fallback:`, err);
    return fallbackPosts.find((p) => p.slug === slug);
  }
}
