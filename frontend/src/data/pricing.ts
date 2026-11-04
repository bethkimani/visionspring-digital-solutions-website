import type { PricingCategory, Faq } from '../types/content';

export const pricingFaqs: Faq[] = [
  {
    question: 'How do payments work?',
    answer:
      'Payment terms are set out in your written quotation. Projects typically involve a deposit before work begins, with the balance tied to agreed milestones or completion.',
  },
  {
    question: 'How long will my project take?',
    answer:
      'Timelines depend on scope and how quickly content and feedback are provided. Indicative timelines are shown on each package and confirmed in your quote.',
  },
  {
    question: 'How many revisions are included?',
    answer:
      'Each quote specifies the revision rounds included. Additional changes outside the agreed scope can be quoted separately.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer:
      'Yes. Maintenance, updates, and ongoing marketing can be arranged after launch as a separate monthly agreement.',
  },
  {
    question: 'Is advertising spend included in ads management?',
    answer:
      'No. Advertising budgets are paid directly to Google or Meta. Our fee covers planning, setup, optimization, and reporting.',
  },
];

/**
 * Editable packages. Add a `price` (e.g. 'From KES 45,000') once official prices are confirmed.
 * Until then, "Custom pricing" is shown with a quote request.
 */
export const pricingCategories: PricingCategory[] = [
{
  id: 'website',
  title: 'Website Development',
  serviceSlug: 'website-development',
  description: 'Professional, responsive websites that build trust and turn visitors into enquiries.',
  packages: [
  { name: 'Starter Website', audience: 'Small businesses, service providers, and startups', deliverables: ['Up to 5 custom pages', 'Mobile-first responsive design', 'WhatsApp chat button & contact form', 'Google Maps & search indexing'], timeline: 'Typically 2–3 weeks' },
  { name: 'Business Website', audience: 'Growing businesses, schools, and institutions', deliverables: ['Up to 12 custom pages', 'Brand-aligned modern design', 'Blog or company news section', 'Google Analytics & on-page SEO setup', 'Training to update text and photos'], timeline: 'Typically 3–5 weeks', recommended: true },
  { name: 'E-commerce Store', audience: 'Businesses selling products online', deliverables: ['Product catalogue and shopping cart', 'Lipa na M-Pesa (STK Push) & card checkout', 'Automated order notifications', 'Easy product & order management training'], timeline: 'Typically 4–6 weeks' }]

},
{
  id: 'seo',
  title: 'SEO',
  serviceSlug: 'seo',
  description: 'Help customers find your business when they search on Google.',
  packages: [
  { name: 'SEO Audit', audience: 'Businesses wanting a clear evaluation of their Google visibility', deliverables: ['Technical health & mobile speed audit', 'High-intent keyword opportunities in Kenya', 'Competitor search comparison', 'Prioritised step-by-step action plan'], timeline: 'Typically 1–2 weeks' },
  { name: 'Local SEO & Google Maps', audience: 'Businesses serving customers in a specific city or area', deliverables: ['Google Business Profile setup & verification', 'Local Google Maps keyword optimization', 'Customer review strategy guidance', 'Monthly local ranking & call report'], timeline: 'Monthly', recommended: true },
  { name: 'SEO Growth', audience: 'Businesses competing for high-value search rankings', deliverables: ['Ongoing technical SEO & speed tuning', 'Targeted search content optimization', 'High-value keyword ranking tracking', 'Monthly performance & inquiry report'], timeline: 'Monthly' }]

},
{
  id: 'social',
  title: 'Social Media Management',
  serviceSlug: 'social-media-management',
  description: 'Consistent, on-brand social media content tailored to your business goals.',
  packages: [
  { name: 'Essentials', audience: 'Businesses starting to post consistently', deliverables: ['1–2 platforms (FB / IG)', 'Monthly content calendar', 'Branded post graphics and captions', 'Monthly performance summary'], timeline: 'Monthly' },
  { name: 'Growth', audience: 'Brands building an active community and customer base', deliverables: ['Up to 3 platforms', 'Content calendar and scheduled publishing', 'Customer inquiry & comment responses', 'Monthly growth & reach report'], timeline: 'Monthly', recommended: true },
  { name: 'Premium', audience: 'Businesses needing full-service social media presence', deliverables: ['Multi-platform management', 'Short-form video reel concepts', 'Promotional campaign planning', 'Detailed monthly ROI reporting'], timeline: 'Monthly' }]

},
{
  id: 'google-ads',
  title: 'Google Ads Management',
  serviceSlug: 'google-ads',
  description: 'Targeted search ads that connect you with customers looking to buy today.',
  note: 'Management fees cover our work. Advertising spend is separate and paid directly to Google.',
  packages: [
  { name: 'Campaign Setup', audience: 'Businesses launching their first search campaign', deliverables: ['Campaign strategy & location targeting in Kenya', 'High-intent keyword research', 'High-converting ad copy', 'Phone call & WhatsApp tracking setup'], timeline: 'One-off setup' },
  { name: 'Managed Search', audience: 'Businesses running ongoing search campaigns', deliverables: ['Ongoing budget and bid optimization', 'Keyword and negative keyword tuning', 'Ad copy testing for higher clicks', 'Monthly lead & cost report'], timeline: 'Monthly', recommended: true }]

},
{
  id: 'meta-ads',
  title: 'Facebook and Instagram Ads',
  serviceSlug: 'meta-ads',
  description: 'Targeted ads that put your products and services in front of the right buyers.',
  note: 'Management fees cover our work. Advertising spend is separate and paid directly to Meta.',
  packages: [
  { name: 'Campaign Launch', audience: 'Brands testing paid social ads for the first time', deliverables: ['Targeted audience selection in Kenya', 'Ad image & video design', 'Direct WhatsApp & lead campaign setup', 'Launch and initial monitoring'], timeline: 'One-off launch' },
  { name: 'Managed Campaigns', audience: 'Brands running continuous social advertising', deliverables: ['Ongoing audience testing & optimization', 'Direct WhatsApp & lead generation ads', 'Retargeting past website visitors', 'Monthly sales & inquiry analysis'], timeline: 'Monthly', recommended: true }]

},
{
  id: 'branding',
  title: 'Branding and Graphic Design',
  serviceSlug: 'branding-design',
  description: 'Identity and marketing designs that make your business look professional and credible.',
  packages: [
  { name: 'Logo Package', audience: 'New businesses needing a professional mark', deliverables: ['Multiple logo concepts', 'Revisions on your chosen direction', 'Final high-res files for print and web'], timeline: 'Typically 1–2 weeks' },
  { name: 'Brand Identity', audience: 'Businesses formalising their corporate image', deliverables: ['Logo and variations', 'Brand colour palette & typography', 'Business card & letterhead design', 'Brand usage guidelines'], timeline: 'Typically 2–3 weeks', recommended: true },
  { name: 'Marketing Collateral', audience: 'Teams needing ready-to-use promotional materials', deliverables: ['Professional company profile or brochure PDF', 'Promotional posters & flyers', 'Event banners and rollups', 'Social media design templates'], timeline: 'Scoped per project' }]

},
{
  id: 'web-apps',
  title: 'Custom Web Applications',
  serviceSlug: 'web-applications',
  description: 'Custom platforms and portals built around how your organization runs.',
  packages: [
  { name: 'Discovery and Prototype', audience: 'Organizations validating an idea or system workflow', deliverables: ['Requirements workshop', 'System workflow mapping', 'Interactive screen prototype', 'Detailed build proposal and quote'], timeline: 'Typically 2–3 weeks' },
  { name: 'Custom Platform', audience: 'Schools, businesses, and institutions ready to build', deliverables: ['Staged milestone development', 'User roles (Admin, Staff, Customer)', 'M-Pesa, SMS & database integrations', 'Deployment, hosting setup & staff training'], timeline: 'Scoped per project', recommended: true }]

},
{
  id: 'mobile',
  title: 'Mobile Applications',
  serviceSlug: 'mobile-app-development',
  description: 'Android and cross-platform apps for your customers or staff.',
  packages: [
  { name: 'App Discovery', audience: 'Businesses planning a first mobile app', deliverables: ['Feature definition & user flows', 'Mobile interface design (UI/UX)', 'Technical architecture plan', 'Detailed build estimate and timeline'], timeline: 'Typically 2–3 weeks' },
  { name: 'App Build', audience: 'Businesses ready to develop and launch on app stores', deliverables: ['Android or cross-platform app build', 'M-Pesa & API payment integrations', 'Testing on real mobile devices', 'Google Play Store deployment support'], timeline: 'Scoped per project', recommended: true }]

},
{
  id: 'combined',
  title: 'Combined Digital Growth',
  description: 'Bundled services for organizations that want one dependable partner for everything online.',
  packages: [
  { name: 'Digital Starter', audience: 'Businesses establishing a strong online presence', deliverables: ['Mobile-friendly business website', 'Google Business Profile & Maps setup', 'Social media profiles setup', 'Launch banner graphics'], timeline: 'Scoped per project' },
  { name: 'Digital Growth', audience: 'Businesses ready to generate steady customer leads online', deliverables: ['Business website or modern redesign', 'Ongoing Google search optimization (SEO)', 'Social media management & regular posting', 'Targeted Google or Meta ads management', 'Monthly growth & customer leads report'], timeline: 'Monthly, after launch', recommended: true }]

}];