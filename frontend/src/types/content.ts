import type { LucideIcon } from 'lucide-react';

export type ServiceSlug =
'website-development' |
'web-applications' |
'seo' |
'social-media-management' |
'google-ads' |
'meta-ads' |
'branding-design' |
'mobile-app-development';

export type ServiceVisualKind =
'website' |
'webapp' |
'seo' |
'social' |
'googleads' |
'metaads' |
'branding' |
'mobile';

export type ServiceGroup = 'Build' | 'Grow' | 'Brand';

export interface TitledText {
  title: string;
  text: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Service {
  slug: ServiceSlug;
  title: string;
  navTitle: string;
  group: ServiceGroup;
  icon: LucideIcon;
  visual: ServiceVisualKind;
  blurb: string;
  headline: string;
  summary: string;
  intro: string;
  cardDeliverables: string[];
  problems: TitledText[];
  solutions: TitledText[];
  benefits: TitledText[];
  process: TitledText[];
  faqs: Faq[];
  related: ServiceSlug[];
  whatsappMessage: string;
  showcase: 'projects' | 'illustration';
  note?: string;
}

/** published = visible with live link · coming-soon = labelled preview, no link · draft = hidden */
export type ProjectStatus = 'published' | 'coming-soon' | 'draft';

export interface ProjectTheme {
  background: string;
  surface: string;
  accent: string;
  text: string;
}

export interface Project {
  slug: string;
  title: string;
  categories: string[];
  summary: string;
  focus: string[];
  url?: string;
  /** Real screenshot URL. When omitted, a clearly labelled representative preview is shown. */
  image?: string;
  technologies?: string[];
  status: ProjectStatus;
  featured?: boolean;
  theme: ProjectTheme;
}

export type BlogCategory =
'Website Development' |
'SEO and Google Visibility' |
'Social Media Marketing' |
'Digital Advertising' |
'Branding and Design' |
'E-commerce' |
'Business Technology' |
'School and Institutional Technology';

export interface PostSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  category: BlogCategory;
  image: string;
  imageAlt: string;
  readMinutes: number;
  /** sample = draft content for review; published = approved, requires publishedAt */
  status: 'sample' | 'published';
  publishedAt?: string;
  author?: string;
  featured?: boolean;
  intro: string;
  sections: PostSection[];
  relatedServices: ServiceSlug[];
}

export interface PricingPackage {
  name: string;
  audience: string;
  deliverables: string[];
  timeline?: string;
  /** Leave undefined until official prices are confirmed — "Custom pricing" is shown instead. */
  price?: string;
  recommended?: boolean;
}

export interface PricingCategory {
  id: string;
  title: string;
  serviceSlug?: ServiceSlug;
  description: string;
  packages: PricingPackage[];
  note?: string;
}

export type SocialPlatform = 'facebook' | 'instagram' | 'tiktok' | 'linkedin' | 'youtube';

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  /** Leave empty until the official profile URL is confirmed — empty links stay hidden. */
  url: string;
}

export interface LegalSection {
  id: string;
  heading: string;
  paragraphs: string[];
}

export interface LegalDocumentContent {
  title: string;
  intro: string;
  sections: LegalSection[];
}