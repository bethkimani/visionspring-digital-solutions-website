import React from 'react';
import type { Metadata } from 'next';
import { getAllPosts } from '@/sanity/api';
import { BlogListClient } from './BlogListClient';

export const revalidate = 60; // Revalidate at most every 60 seconds

export const metadata: Metadata = {
  title: 'Latest Updates & Business Guides | VisionSpring Agency Kenya',
  description:
    'Practical guides and actionable tips on website design, Google SEO rankings, M-Pesa online stores, and digital marketing for businesses in Kenya.',
  keywords: [
    'VisionSpring Blog',
    'Web Design Guides Kenya',
    'SEO Tips for Businesses Kenya',
    'Ecommerce Mpesa Guides',
    'Digital Marketing Advice Nairobi',
  ],
  openGraph: {
    title: 'Latest Updates & Business Guides | VisionSpring Agency Kenya',
    description:
      'Practical guides and actionable tips on website design, Google SEO rankings, M-Pesa online stores, and digital marketing for businesses in Kenya.',
    type: 'website',
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return <BlogListClient initialPosts={posts} />;
}
