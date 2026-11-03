import React from 'react';
import type { Metadata } from 'next';
import { getAllPosts } from '@/sanity/api';
import { BlogListClient } from './BlogListClient';

export const revalidate = 60; // Revalidate at most every 60 seconds

export const metadata: Metadata = {
  title: 'Latest Updates — Digital Insights & Practical Guides',
  description:
    'Practical guides for business owners, entrepreneurs, schools, and online brands — on websites, SEO, social media, advertising, and technology.',
  openGraph: {
    title: 'Latest Updates | VisionSpring Digital Solutions',
    description:
      'Practical guides for business owners, entrepreneurs, schools, and online brands — on websites, SEO, social media, advertising, and technology.',
    type: 'website',
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return <BlogListClient initialPosts={posts} />;
}
