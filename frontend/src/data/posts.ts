import type { BlogCategory, Post } from '../types/content';
import { blogImages } from './blogImages';

export const blogCategories: BlogCategory[] = [
'Website Development',
'SEO and Google Visibility',
'Social Media Marketing',
'Digital Advertising',
'Branding and Design',
'E-commerce',
'Business Technology',
'School and Institutional Technology'];


/**
 * All articles below are SAMPLE drafts for review. Before launch, change status to 'published',
 * add a real `publishedAt` date (YYYY-MM-DD) and, if confirmed, an `author`.
 */
export const posts: Post[] = [
{
  slug: 'why-every-business-needs-a-professional-website',
  title: 'Why Every Business Needs a Professional Website',
  excerpt: 'Social media pages are useful, but a website you own is where customers go to decide whether to trust you.',
  metaDescription: 'Why a professional website matters for credibility, enquiries, and growth — and what it should include.',
  category: 'Website Development',
  image: blogImages.website,
  imageAlt: 'Laptop displaying a clean business website on a desk',
  readMinutes: 5,
  status: 'sample',
  featured: true,
  intro: 'Many businesses start online with a social media page — and that is a great first step. But as you grow, customers increasingly look for a website to confirm you are established, trustworthy, and easy to work with.',
  sections: [
  { id: 'credibility', heading: 'A website builds credibility', paragraphs: ['Before contacting a business, most people look it up. A clear, professional website reassures them that you are real, active, and serious about what you do.', 'Unlike social platforms, your website is a space you control — your message, your design, and your structure, without competing posts or algorithm changes.'] },
  { id: 'enquiries', heading: 'It works for you around the clock', paragraphs: ['A well-structured website answers common questions, explains your services, and makes it easy to get in touch at any hour.'], bullets: ['Clear service descriptions', 'Visible contact options, including WhatsApp', 'Simple enquiry forms', 'Directions or service areas'] },
  { id: 'search', heading: 'It helps customers find you', paragraphs: ['A website gives search engines something to understand and show. Combined with good SEO and a Google Business Profile, it can help customers discover you when they search for what you offer.'] },
  { id: 'getting-started', heading: 'Getting started', paragraphs: ['You do not need a huge website to begin. A focused site with a homepage, services, about, and contact page is often enough to make a strong impression — and it can grow with your business.'] }],

  relatedServices: ['website-development', 'seo']
},
{
  slug: 'how-kenyan-businesses-can-improve-google-visibility',
  title: 'How Kenyan Businesses Can Improve Their Google Visibility',
  excerpt: 'Practical steps — from your Google Business Profile to page speed — that help local customers find you.',
  metaDescription: 'Practical SEO and local search steps Kenyan businesses can take to improve visibility on Google.',
  category: 'SEO and Google Visibility',
  image: blogImages.seo,
  imageAlt: 'Professional reviewing search analytics on a laptop',
  readMinutes: 6,
  status: 'sample',
  intro: 'When someone nearby searches for a service you offer, will they find you? Improving your Google visibility starts with a few fundamentals that any business can put in place.',
  sections: [
  { id: 'business-profile', heading: 'Complete your Google Business Profile', paragraphs: ['Your Google Business Profile can appear in local results and on maps. Make sure your business name, category, hours, phone number, and website are accurate, and add genuine photos.'] },
  { id: 'keywords', heading: 'Use the words customers use', paragraphs: ['Think about how customers describe what they need — and include those phrases naturally in your page titles, headings, and content. Mention the areas you serve where relevant.'] },
  { id: 'speed', heading: 'Make your website fast and mobile-friendly', paragraphs: ['Many people search on mobile data. Compress images, avoid unnecessary scripts, and make sure pages are easy to use on small screens.'] },
  { id: 'patience', heading: 'Be consistent and patient', paragraphs: ['SEO is not instant and no one can guarantee rankings. Consistent improvements to content, technical health, and local signals tend to build visibility over time.'] }],

  relatedServices: ['seo', 'website-development']
},
{
  slug: 'social-media-mistakes-small-businesses-should-avoid',
  title: 'Social Media Mistakes Small Businesses Should Avoid',
  excerpt: 'Inconsistent posting, off-brand visuals, and ignored comments — and what to do instead.',
  metaDescription: 'Common social media mistakes small businesses make and simple ways to avoid them.',
  category: 'Social Media Marketing',
  image: blogImages.social,
  imageAlt: 'Hand holding a phone showing a grid of social media posts',
  readMinutes: 4,
  status: 'sample',
  intro: 'Social media can be a powerful way to stay connected with customers — but a few common mistakes can quietly undo your efforts.',
  sections: [
  { id: 'inconsistency', heading: 'Posting only when you remember', paragraphs: ['Irregular posting makes it hard for followers to remember you. A simple monthly content calendar keeps you consistent without daily stress.'] },
  { id: 'off-brand', heading: 'Letting your visuals drift', paragraphs: ['Using different colours, fonts, and styles in every post weakens recognition. Templates based on your brand identity keep everything cohesive.'] },
  { id: 'ignoring', heading: 'Ignoring comments and messages', paragraphs: ['Social media is a conversation. Unanswered questions can cost you customers — set aside time each day to respond.'] },
  { id: 'selling', heading: 'Only ever selling', paragraphs: ['Mix promotional posts with helpful tips, behind-the-scenes moments, and stories about how you help customers.'], bullets: ['Educational tips', 'Behind-the-scenes content', 'Answers to common questions', 'Offers and announcements'] }],

  relatedServices: ['social-media-management', 'branding-design']
},
{
  slug: 'choosing-the-right-website-for-your-business',
  title: 'Choosing the Right Website for Your Business',
  excerpt: 'Business site, landing page, or online store? How to match the type of website to your goals.',
  metaDescription: 'How to choose between a business website, landing page, portfolio, or e-commerce store.',
  category: 'Website Development',
  image: blogImages.website,
  imageAlt: 'Laptop showing a website layout in a bright office',
  readMinutes: 5,
  status: 'sample',
  intro: 'Not every business needs the same kind of website. The right choice depends on what you want visitors to do.',
  sections: [
  { id: 'business-website', heading: 'Business websites', paragraphs: ['Ideal for service providers who want to explain what they do and generate enquiries. Typically includes home, about, services, and contact pages.'] },
  { id: 'landing-pages', heading: 'Landing pages', paragraphs: ['A single focused page for a campaign, event, or product launch — great for advertising, where visitors should take one clear action.'] },
  { id: 'ecommerce', heading: 'E-commerce stores', paragraphs: ['If you sell products, an online store with a catalogue, cart, and checkout lets customers buy without waiting for a reply.'] },
  { id: 'decide', heading: 'How to decide', paragraphs: ['Start with the single most important action you want visitors to take — call, enquire, book, or buy — and choose the website type that makes that action easiest.'] }],

  relatedServices: ['website-development', 'web-applications']
},
{
  slug: 'website-design-trends-that-improve-user-experience',
  title: 'Website Design Trends That Improve User Experience',
  excerpt: 'The design choices worth adopting are the ones that make websites easier to use — not just prettier.',
  metaDescription: 'Website design approaches that genuinely improve user experience and accessibility.',
  category: 'Website Development',
  image: blogImages.brand,
  imageAlt: 'Brand stationery and colour swatches on a desk',
  readMinutes: 4,
  status: 'sample',
  intro: 'Design trends come and go. The ones worth following make websites clearer, faster, and more accessible for everyone.',
  sections: [
  { id: 'clarity', heading: 'Clear, generous layouts', paragraphs: ['Whitespace and strong headings help visitors scan quickly and find what they need.'] },
  { id: 'mobile', heading: 'Mobile-first thinking', paragraphs: ['Designing for small screens first leads to simpler navigation and more focused content on every device.'] },
  { id: 'accessibility', heading: 'Accessibility by default', paragraphs: ['Good colour contrast, readable text sizes, and keyboard-friendly navigation help all visitors — including people with disabilities.'] },
  { id: 'motion', heading: 'Purposeful motion', paragraphs: ['Subtle animation can guide attention and confirm actions. Too much motion slows pages down and distracts.'] }],

  relatedServices: ['website-development', 'branding-design']
},
{
  slug: 'how-schools-can-use-technology-to-improve-administration',
  title: 'How Schools Can Use Technology to Improve Administration',
  excerpt: 'From admissions to fee tracking, digital tools can reduce paperwork and improve communication with parents.',
  metaDescription: 'Ways schools can use websites and management systems to simplify administration.',
  category: 'School and Institutional Technology',
  image: blogImages.school,
  imageAlt: 'School administrator using a tablet in a school office',
  readMinutes: 6,
  status: 'sample',
  intro: 'School administration involves enormous amounts of information. The right technology can reduce paperwork, save staff time, and keep parents better informed.',
  sections: [
  { id: 'website', heading: 'A clear school website', paragraphs: ['A school website gives parents one trusted place for admissions information, calendars, news, and contact details.'] },
  { id: 'management-systems', heading: 'School management systems', paragraphs: ['A management system can bring student records, attendance, fees, and reports into one secure platform.'], bullets: ['Student records', 'Attendance tracking', 'Fee management', 'Reports and communication'] },
  { id: 'communication', heading: 'Better communication with parents', paragraphs: ['Digital notices and portals help parents stay informed without relying on paper letters.'] },
  { id: 'start-small', heading: 'Start with the biggest pain point', paragraphs: ['Rather than digitising everything at once, start with the process that costs the most time — then expand.'] }],

  relatedServices: ['web-applications', 'website-development']
},
{
  slug: 'digital-advertising-for-small-businesses',
  title: 'Digital Advertising for Small Businesses',
  excerpt: 'How Google and Meta ads differ, how budgets work, and how to set realistic expectations.',
  metaDescription: 'An introduction to Google Ads and Facebook and Instagram ads for small businesses.',
  category: 'Digital Advertising',
  image: blogImages.seo,
  imageAlt: 'Charts and analytics on a laptop screen',
  readMinutes: 5,
  status: 'sample',
  intro: 'Digital advertising lets small businesses reach new customers with budgets they control. Understanding the options helps you spend wisely.',
  sections: [
  { id: 'google-vs-meta', heading: 'Google Ads vs. Facebook and Instagram ads', paragraphs: ['Google search ads reach people actively searching for something. Facebook and Instagram ads reach people based on interests and demographics — great for building awareness.'] },
  { id: 'budgets', heading: 'How budgets work', paragraphs: ['Ad spend is paid directly to the platform. If you work with an agency, its management fee is separate from that spend.'] },
  { id: 'expectations', heading: 'Set realistic expectations', paragraphs: ['No one can guarantee sales from advertising. Start with a test budget, measure what happens, and refine.'] },
  { id: 'landing', heading: 'Send people somewhere useful', paragraphs: ['Ads work best when they lead to a clear landing page or WhatsApp conversation that matches the ad’s promise.'] }],

  relatedServices: ['google-ads', 'meta-ads']
},
{
  slug: 'how-to-build-a-consistent-brand-identity',
  title: 'How to Build a Consistent Brand Identity',
  excerpt: 'A logo is only the start. Colours, type, tone, and templates make your brand recognisable.',
  metaDescription: 'Steps to build a consistent brand identity across print, web, and social media.',
  category: 'Branding and Design',
  image: blogImages.brand,
  imageAlt: 'Business cards and colour swatches in navy, blue, and green',
  readMinutes: 4,
  status: 'sample',
  intro: 'Customers recognise brands that look and sound the same everywhere. Consistency builds familiarity — and familiarity builds trust.',
  sections: [
  { id: 'foundations', heading: 'Define your foundations', paragraphs: ['Agree on your logo, colour palette, and typography, and document how each should be used.'] },
  { id: 'voice', heading: 'Find your voice', paragraphs: ['Decide how your brand speaks — friendly, formal, bold — and keep that tone across your website, posts, and messages.'] },
  { id: 'templates', heading: 'Create templates', paragraphs: ['Templates for social posts, flyers, and documents make it easy to stay on-brand, even when you are busy.'] },
  { id: 'review', heading: 'Review regularly', paragraphs: ['Look at your materials side by side every few months and fix anything that has drifted.'] }],

  relatedServices: ['branding-design', 'social-media-management']
},
{
  slug: 'ecommerce-strategies-for-growing-online-sales',
  title: 'E-commerce Strategies for Growing Online Sales',
  excerpt: 'Better product pages, simpler checkout, and smarter promotion — the fundamentals of a growing store.',
  metaDescription: 'Practical e-commerce strategies to improve product pages, checkout, and promotion.',
  category: 'E-commerce',
  image: blogImages.social,
  imageAlt: 'Phone showing colourful product and social posts',
  readMinutes: 5,
  status: 'sample',
  intro: 'Launching an online store is the beginning. Growing it depends on making products easy to find, easy to trust, and easy to buy.',
  sections: [
  { id: 'product-pages', heading: 'Make product pages do the selling', paragraphs: ['Use clear photos, honest descriptions, prices, and delivery information so customers can decide confidently.'] },
  { id: 'checkout', heading: 'Simplify checkout', paragraphs: ['Every extra step can lose a customer. Keep forms short and offer payment methods your customers already use where supported.'] },
  { id: 'promotion', heading: 'Promote consistently', paragraphs: ['Combine social media content, paid campaigns, and search visibility to bring the right people to your store.'] },
  { id: 'support', heading: 'Make help easy to reach', paragraphs: ['A visible WhatsApp button or contact option answers questions before they become abandoned carts.'] }],

  relatedServices: ['website-development', 'meta-ads']
},
{
  slug: 'website-speed-and-customer-experience',
  title: 'Website Speed and Its Importance for Customer Experience',
  excerpt: 'Slow websites lose visitors. Here is why speed matters and what usually slows sites down.',
  metaDescription: 'Why website speed matters for customer experience and common ways to improve it.',
  category: 'Business Technology',
  image: blogImages.seo,
  imageAlt: 'Performance charts on a laptop',
  readMinutes: 4,
  status: 'sample',
  intro: 'People expect websites to load quickly — especially on mobile data. Speed affects how customers feel about your business before they read a single word.',
  sections: [
  { id: 'why-speed', heading: 'Why speed matters', paragraphs: ['Slow pages frustrate visitors and many will leave before a page finishes loading. Speed is also one of many signals search engines consider.'] },
  { id: 'common-causes', heading: 'Common causes of slow websites', paragraphs: ['Most speed problems come from a handful of issues.'], bullets: ['Large, uncompressed images', 'Too many plugins or scripts', 'Slow or overloaded hosting', 'No caching'] },
  { id: 'fixes', heading: 'Practical improvements', paragraphs: ['Compress and resize images, remove unused scripts, enable caching, and choose reliable hosting.'] },
  { id: 'measure', heading: 'Measure regularly', paragraphs: ['Use free tools to check performance after major updates so new content does not quietly slow things down.'] }],

  relatedServices: ['seo', 'website-development']
}];