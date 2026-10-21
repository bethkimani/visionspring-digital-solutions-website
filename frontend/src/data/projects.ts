import type { Project } from '../types/content';

/**
 * To add a project, copy one entry and update its fields.
 * - status 'published' shows the project and its live link.
 * - status 'coming-soon' shows a labelled preview without a link (leave url empty).
 * - status 'draft' keeps it hidden from visitors.
 * - image: paste a real screenshot URL; without one a labelled representative preview is shown.
 */
export const projects: Project[] = [
{
  slug: 'dallian-luxe-hair',
  title: 'Dallian Luxe Hair',
  categories: ['E-commerce', 'Beauty & Lifestyle'],
  summary:
  'A beauty and hair brand website presenting products, collections, services, and a premium customer experience.',
  focus: ['Product and collection presentation', 'Service information for customers', 'Premium, brand-led visual experience', 'Mobile-friendly browsing'],
  url: 'https://dallian.online/',
  status: 'published',
  featured: true,
  theme: { background: '#1B1412', surface: '#2B211D', accent: '#C9A27A', text: '#F6EFE9' }
},
{
  slug: 'urbanmall',
  title: 'UrbanMall',
  categories: ['E-commerce', 'Digital Marketplace'],
  summary: 'An online marketplace project designed to present products and provide a modern digital shopping experience.',
  focus: ['Product discovery and categories', 'Modern shopping experience', 'Marketplace-style product presentation', 'Responsive across devices'],
  url: 'https://urbanmall.co.ke/',
  status: 'published',
  featured: true,
  theme: { background: '#FFFFFF', surface: '#F3F5F8', accent: '#1565C0', text: '#0B2A5B' }
},
{
  slug: 'synowatt-power-solar',
  title: 'Synowatt Power & Solar Ltd',
  categories: ['Corporate Website', 'Renewable Energy'],
  summary: 'A corporate website showcasing solar energy services and renewable energy solutions.',
  focus: ['Corporate presence and credibility', 'Solar service presentation', 'Renewable energy solutions overview', 'Clear routes to enquire'],
  url: 'https://synowatt.com/',
  status: 'published',
  featured: true,
  theme: { background: '#0E2A1F', surface: '#143828', accent: '#F2B705', text: '#F1F7F3' }
}];