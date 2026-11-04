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
  'A luxury beauty and hair online store featuring product collections, customer booking, and a smooth mobile shopping experience.',
  focus: [
    'Mobile-friendly online shopping catalog',
    'Direct customer booking & WhatsApp inquiries',
    'Fast-loading luxury visual experience',
    'Lipa na M-Pesa ready checkout flow'
  ],
  url: 'https://dallian.online/',
  status: 'published',
  featured: true,
  theme: { background: '#1B1412', surface: '#2B211D', accent: '#C9A27A', text: '#F6EFE9' }
},
{
  slug: 'urbanmall',
  title: 'UrbanMall',
  categories: ['E-commerce', 'Online Marketplace'],
  summary: 'A fast multi-vendor shopping marketplace built for Kenyan shoppers, featuring intuitive product search, category browsing, and simple checkout.',
  focus: [
    'Instant product search & category discovery',
    'Smooth mobile checkout for everyday shoppers',
    'Fast-loading online catalog with clear pricing',
    'Responsive across phones, tablets, and laptops'
  ],
  url: 'https://urbanmall.co.ke/',
  status: 'published',
  featured: true,
  theme: { background: '#FFFFFF', surface: '#F3F5F8', accent: '#1565C0', text: '#0B2A5B' }
},
{
  slug: 'synowatt-power-solar',
  title: 'Synowatt Power & Solar Ltd',
  categories: ['Corporate Website', 'Renewable Energy'],
  summary: 'A high-authority corporate website for a leading solar energy company in Kenya, designed to showcase solar solutions and capture client quote requests.',
  focus: [
    'Corporate credibility & professional brand presence',
    'Clear presentation of solar services and packages',
    'Simple quote request forms to capture new leads',
    'Fast, mobile-friendly browsing for commercial clients'
  ],
  url: 'https://synowatt.com/',
  status: 'published',
  featured: true,
  theme: { background: '#0E2A1F', surface: '#143828', accent: '#F2B705', text: '#F1F7F3' }
}];