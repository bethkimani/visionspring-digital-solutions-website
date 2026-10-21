import type { PricingCategory } from '../types/content';

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
  { name: 'Starter Website', audience: 'Small businesses, freelancers, and personal brands', deliverables: ['Up to 5 pages', 'Mobile-responsive design', 'Contact form and WhatsApp button', 'Basic on-page SEO setup'], timeline: 'Typically 2–3 weeks' },
  { name: 'Business Website', audience: 'Growing businesses, schools, and institutions', deliverables: ['Up to 12 pages', 'Custom design aligned to your brand', 'Blog or news section', 'Analytics setup', 'Content management training'], timeline: 'Typically 3–6 weeks', recommended: true },
  { name: 'E-commerce Store', audience: 'Brands selling products online', deliverables: ['Product catalogue and categories', 'Cart and checkout', 'Payment integration where supported', 'Order management training'], timeline: 'Typically 4–8 weeks' }]

},
{
  id: 'seo',
  title: 'SEO',
  serviceSlug: 'seo',
  description: 'Improve how easily customers can find you on search engines. Rankings are never guaranteed.',
  packages: [
  { name: 'SEO Audit', audience: 'Businesses wanting a clear picture of where they stand', deliverables: ['Technical and on-page audit', 'Keyword opportunities', 'Speed review', 'Prioritised action plan'], timeline: 'One-off, typically 1–2 weeks' },
  { name: 'Local SEO', audience: 'Businesses serving customers in a specific area', deliverables: ['Google Business Profile optimization', 'Local keyword targeting', 'On-page improvements', 'Monthly report'], timeline: 'Monthly', recommended: true },
  { name: 'SEO Growth', audience: 'Businesses competing in broader search markets', deliverables: ['Ongoing technical SEO', 'Content optimization', 'Keyword tracking', 'Monthly performance review'], timeline: 'Monthly' }]

},
{
  id: 'social',
  title: 'Social Media Management',
  serviceSlug: 'social-media-management',
  description: 'Consistent, on-brand content tailored to your objectives and posting frequency.',
  packages: [
  { name: 'Essentials', audience: 'Businesses starting to post consistently', deliverables: ['1–2 platforms', 'Monthly content calendar', 'Branded posts and captions', 'Monthly summary'], timeline: 'Monthly' },
  { name: 'Growth', audience: 'Brands building an engaged community', deliverables: ['Up to 3 platforms', 'Content calendar and publishing', 'Community engagement', 'Monthly report'], timeline: 'Monthly', recommended: true },
  { name: 'Premium', audience: 'Organizations needing full-service social', deliverables: ['Multi-platform management', 'Short-form video concepts', 'Campaign planning', 'Detailed monthly reporting'], timeline: 'Monthly' }]

},
{
  id: 'google-ads',
  title: 'Google Ads Management',
  serviceSlug: 'google-ads',
  description: 'Search campaigns planned and optimized by us.',
  note: 'Management fees cover our work. Advertising spend is separate and paid directly to Google.',
  packages: [
  { name: 'Campaign Setup', audience: 'Businesses launching their first search campaign', deliverables: ['Campaign planning', 'Keyword research', 'Ad copy', 'Conversion tracking where supported'], timeline: 'One-off setup' },
  { name: 'Managed Search', audience: 'Businesses running ongoing campaigns', deliverables: ['Ongoing optimization', 'Keyword and bid adjustments', 'Ad testing', 'Monthly performance report'], timeline: 'Monthly', recommended: true }]

},
{
  id: 'meta-ads',
  title: 'Facebook and Instagram Ads',
  serviceSlug: 'meta-ads',
  description: 'Paid social campaigns with clear targeting and creative. Results are never guaranteed.',
  note: 'Management fees cover our work. Advertising spend is separate and paid directly to Meta.',
  packages: [
  { name: 'Campaign Launch', audience: 'Brands testing paid social for the first time', deliverables: ['Campaign strategy', 'Audience setup', 'Ad creatives', 'Launch and monitoring'], timeline: 'One-off launch' },
  { name: 'Managed Campaigns', audience: 'Brands running ongoing paid social', deliverables: ['Ongoing optimization', 'Lead generation campaigns', 'Retargeting where appropriate', 'Monthly analysis'], timeline: 'Monthly', recommended: true }]

},
{
  id: 'branding',
  title: 'Branding and Graphic Design',
  serviceSlug: 'branding-design',
  description: 'Identity and design assets that look consistent everywhere.',
  packages: [
  { name: 'Logo Package', audience: 'New businesses needing a professional mark', deliverables: ['Logo concepts', 'Revisions on chosen concept', 'Final files for print and web'], timeline: 'Typically 1–2 weeks' },
  { name: 'Brand Identity', audience: 'Businesses formalising how they look', deliverables: ['Logo and variations', 'Colour palette and typography', 'Business card design', 'Brand guidelines'], timeline: 'Typically 2–4 weeks', recommended: true },
  { name: 'Marketing Collateral', audience: 'Teams needing ready-to-use materials', deliverables: ['Company profile or brochure', 'Posters and flyers', 'Banners', 'Social media templates'], timeline: 'Scoped per project' }]

},
{
  id: 'web-apps',
  title: 'Custom Web Applications',
  serviceSlug: 'web-applications',
  description: 'Custom platforms scoped around your workflow.',
  packages: [
  { name: 'Discovery and Prototype', audience: 'Organizations validating an idea or workflow', deliverables: ['Requirements workshop', 'User flows', 'Clickable prototype', 'Build estimate'], timeline: 'Typically 2–4 weeks' },
  { name: 'Custom Platform', audience: 'Schools, businesses, and institutions ready to build', deliverables: ['Staged development', 'User roles and dashboards', 'Integrations where available', 'Deployment and training'], timeline: 'Scoped per project', recommended: true }]

},
{
  id: 'mobile',
  title: 'Mobile Applications',
  serviceSlug: 'mobile-app-development',
  description: 'Android and cross-platform apps for your customers or team.',
  packages: [
  { name: 'App Discovery', audience: 'Businesses planning a first app', deliverables: ['Feature definition', 'Interface design', 'Technical plan', 'Build estimate'], timeline: 'Typically 2–3 weeks' },
  { name: 'App Build', audience: 'Businesses ready to develop and launch', deliverables: ['Android or cross-platform build', 'API and database integration', 'Testing', 'Store deployment support'], timeline: 'Scoped per project', recommended: true }]

},
{
  id: 'combined',
  title: 'Combined Digital Growth',
  description: 'Bundled services for organizations that want one partner for their digital presence.',
  packages: [
  { name: 'Digital Starter', audience: 'Businesses establishing their online presence', deliverables: ['Business website', 'Google Business Profile setup', 'Social media profile setup', 'Launch graphics'], timeline: 'Scoped per project' },
  { name: 'Digital Growth', audience: 'Businesses ready to grow consistently online', deliverables: ['Website or redesign', 'Ongoing SEO', 'Social media management', 'Ads management (spend separate)', 'Monthly growth report'], timeline: 'Monthly, after launch', recommended: true }]

}];