import {
  LayoutDashboardIcon,
  MessagesSquareIcon,
  MonitorSmartphoneIcon,
  MousePointerClickIcon,
  PenToolIcon,
  SearchCheckIcon,
  SmartphoneIcon,
  TargetIcon } from
'lucide-react';
import type { Service } from '../types/content';

export const services: Service[] = [
{
  slug: 'website-development',
  title: 'Website Design and Development',
  navTitle: 'Website Development',
  group: 'Build',
  icon: MonitorSmartphoneIcon,
  visual: 'website',
  blurb: 'Responsive websites and online stores',
  headline: 'Websites that make a strong first impression — and turn visitors into enquiries.',
  summary:
  'Modern, responsive websites for businesses, schools, institutions, portfolios, landing pages, and e-commerce stores — including redesigns and ongoing maintenance.',
  intro:
  'Your website is often the first conversation a customer has with your business. We design and build fast, mobile-friendly websites that explain what you do clearly and make it easy for people to get in touch.',
  cardDeliverables: ['Business and school websites', 'E-commerce stores', 'Landing pages and portfolios', 'Redesign and maintenance'],
  problems: [
  { title: 'Your current site looks outdated', text: 'An old design or broken layout on phones quietly tells visitors you may not be the right choice.' },
  { title: 'Visitors leave without contacting you', text: 'Unclear messaging and hidden contact options mean interested people never become enquiries.' },
  { title: 'You cannot sell or take bookings online', text: 'Without online ordering or enquiry tools, you miss customers who want to act immediately.' }],

  solutions: [
  { title: 'Business websites', text: 'Clear, credible websites that present your services and make enquiries effortless.' },
  { title: 'School and institution websites', text: 'Admissions information, news, events, and resources organised for parents and staff.' },
  { title: 'E-commerce stores', text: 'Product catalogues, carts, and checkouts with payment options where supported.' },
  { title: 'Landing pages', text: 'Focused pages for campaigns, launches, and lead generation.' },
  { title: 'Portfolio websites', text: 'Polished showcases for professionals, creatives, and personal brands.' },
  { title: 'Redesign and maintenance', text: 'Modernise an existing site and keep it secure, updated, and running smoothly.' }],

  benefits: [
  { title: 'Instant credibility', text: 'A professional site reassures customers before they ever speak to you.' },
  { title: 'Enquiries around the clock', text: 'Forms and WhatsApp buttons let customers reach you any time.' },
  { title: 'Built for mobile', text: 'Most visitors browse on phones — every layout is designed for them first.' },
  { title: 'Easy to update', text: 'Where included, we train you to update content without needing a developer.' }],

  process: [
  { title: 'Discover', text: 'We learn about your business, audience, and the actions you want visitors to take.' },
  { title: 'Design', text: 'You review page layouts and visual direction before development begins.' },
  { title: 'Build', text: 'We develop a fast, responsive site and test it across devices.' },
  { title: 'Launch and support', text: 'We go live, hand over, and offer maintenance if you need it.' }],

  faqs: [
  { question: 'How long does a website take?', answer: 'Timelines depend on size and complexity. A small business site is usually quicker than an e-commerce store — we confirm a timeline in your quote.' },
  { question: 'Will I be able to update the website myself?', answer: 'Where your package includes a content management system, we provide training so you can edit text, images, and posts.' },
  { question: 'Can you redesign my existing website?', answer: 'Yes. We review what works today, then modernise the design, structure, and performance.' },
  { question: 'Do you help with domains and hosting?', answer: 'We can advise on and help set up domains and hosting as part of your project. Third-party costs are confirmed in your quote.' }],

  related: ['seo', 'branding-design', 'web-applications'],
  whatsappMessage: "Hello VisionSpring Agency, I'm interested in Website Design and Development. Could we discuss my project?",
  showcase: 'projects'
},
{
  slug: 'web-applications',
  title: 'Web Application Development',
  navTitle: 'Web Applications',
  group: 'Build',
  icon: LayoutDashboardIcon,
  visual: 'webapp',
  blurb: 'Custom systems, portals, and dashboards',
  headline: 'Custom web platforms built around the way your organization actually works.',
  summary:
  'Custom platforms such as school management systems, booking systems, business dashboards, customer portals, marketplaces, and workflow applications.',
  intro:
  'When spreadsheets and off-the-shelf tools stop keeping up, a custom web application can bring your data, people, and processes into one place — accessible from any browser.',
  cardDeliverables: ['School management systems', 'Booking and reservation systems', 'Dashboards and customer portals', 'Marketplaces and workflow apps'],
  problems: [
  { title: 'Work lives in spreadsheets and paper', text: 'Manual records are slow to update, easy to lose, and hard to share.' },
  { title: 'Your tools do not talk to each other', text: 'Information is copied between systems, creating errors and wasted time.' },
  { title: 'Off-the-shelf software does not fit', text: 'Generic products force you to change how you work instead of supporting it.' }],

  solutions: [
  { title: 'School management systems', text: 'Student records, fees, attendance, and communication in one platform.' },
  { title: 'Booking systems', text: 'Online scheduling and reservations with availability management.' },
  { title: 'Business dashboards', text: 'Key information visualised so decisions are faster and clearer.' },
  { title: 'Customer portals', text: 'Secure areas where customers access orders, documents, or support.' },
  { title: 'Marketplaces', text: 'Multi-vendor platforms that connect buyers and sellers.' },
  { title: 'Workflow applications', text: 'Approvals, requests, and internal processes digitised end to end.' }],

  benefits: [
  { title: 'Time back for your team', text: 'Automate repetitive tasks and remove duplicate data entry.' },
  { title: 'One source of truth', text: 'Everyone works from the same, up-to-date information.' },
  { title: 'Access from anywhere', text: 'Browser-based tools work across offices, homes, and devices.' },
  { title: 'Grows with you', text: 'Features are added in stages as your needs evolve.' }],

  process: [
  { title: 'Map the workflow', text: 'We document how work happens today and where it breaks down.' },
  { title: 'Prototype', text: 'You click through key screens before we write production code.' },
  { title: 'Build in stages', text: 'Features are delivered in milestones you can test and review.' },
  { title: 'Deploy and train', text: 'We launch the platform and train your team to use it confidently.' }],

  faqs: [
  { question: 'How is a custom application priced?', answer: 'Pricing depends on features, user roles, and integrations. We often start with a discovery phase to define scope and provide an accurate estimate.' },
  { question: 'Can it connect to payment providers or existing systems?', answer: 'Where a provider offers a suitable API, integration can be scoped into your project.' },
  { question: 'Who owns the finished application?', answer: 'Ownership and licensing are agreed in writing in your project agreement before work begins.' },
  { question: 'Do you provide support after launch?', answer: 'Yes, ongoing support and improvements can be arranged as a separate agreement.' }],

  related: ['website-development', 'mobile-app-development', 'branding-design'],
  whatsappMessage: "Hello VisionSpring Agency, I'd like to discuss a custom web application for my organization.",
  showcase: 'illustration'
},
{
  slug: 'seo',
  title: 'Search Engine Optimization (SEO)',
  navTitle: 'SEO',
  group: 'Grow',
  icon: SearchCheckIcon,
  visual: 'seo',
  blurb: 'Search visibility and local SEO',
  headline: 'Help the right customers find you when they search.',
  summary:
  'SEO audits, keyword research, on-page and technical SEO, speed improvements, local SEO, Google Business Profile optimization, content optimization, and performance monitoring.',
  intro:
  'Customers search before they buy. We improve the technical health, content, and local presence of your website so search engines can understand it — and people can find it.',
  note: 'We do not promise guaranteed Google rankings. Results depend on competition, search engine algorithms, and factors outside any agency’s control — we focus on proven best practices and transparent reporting.',
  cardDeliverables: ['SEO audits and keyword research', 'On-page and technical SEO', 'Local SEO and Google Business Profile', 'Performance monitoring'],
  problems: [
  { title: 'You do not appear when customers search', text: 'People looking for exactly what you offer are finding competitors instead.' },
  { title: 'Your website is slow', text: 'Slow pages frustrate visitors and can hold back search performance.' },
  { title: 'You are missing from local results', text: 'An incomplete Google Business Profile makes you hard to find nearby.' }],

  solutions: [
  { title: 'SEO audit', text: 'A clear review of technical, content, and on-page issues with priorities.' },
  { title: 'Keyword research', text: 'Find the terms your customers actually use when searching.' },
  { title: 'On-page SEO', text: 'Titles, headings, and content structured for people and search engines.' },
  { title: 'Technical SEO and speed', text: 'Fix crawl issues, improve page speed, and strengthen site health.' },
  { title: 'Local SEO', text: 'Google Business Profile optimization and local search signals.' },
  { title: 'Content optimization and monitoring', text: 'Improve existing pages and track performance over time.' }],

  benefits: [
  { title: 'Sustained visibility', text: 'Organic search can bring steady traffic without paying per click.' },
  { title: 'More qualified visitors', text: 'Reach people already looking for your products or services.' },
  { title: 'Better experience', text: 'Speed and structure improvements help every visitor, not just search engines.' },
  { title: 'Clear reporting', text: 'Understand what changed, why, and what comes next.' }],

  process: [
  { title: 'Audit', text: 'We assess your site’s technical health, content, and current visibility.' },
  { title: 'Strategy', text: 'We agree target keywords, priorities, and realistic expectations.' },
  { title: 'Optimize', text: 'We implement technical, on-page, and local improvements.' },
  { title: 'Monitor and report', text: 'We track progress and adjust based on what the data shows.' }],

  faqs: [
  { question: 'How long does SEO take to show results?', answer: 'SEO is a long-term effort. Some technical improvements help quickly, while visibility for competitive terms usually builds over months.' },
  { question: 'Can you guarantee first-page rankings?', answer: 'No. Nobody can honestly guarantee rankings. We apply best practices and report transparently on progress.' },
  { question: 'What is local SEO?', answer: 'Local SEO helps you appear for searches in your area — for example through an optimized Google Business Profile and location-relevant content.' },
  { question: 'Do I need ongoing SEO?', answer: 'Search results and competitors change constantly, so ongoing work helps protect and build visibility. A one-off audit is also available.' }],

  related: ['website-development', 'google-ads', 'social-media-management'],
  whatsappMessage: "Hello VisionSpring Agency, I'd like to improve my website's search visibility. Can we talk about SEO?",
  showcase: 'illustration'
},
{
  slug: 'social-media-management',
  title: 'Social Media Management',
  navTitle: 'Social Media Management',
  group: 'Grow',
  icon: MessagesSquareIcon,
  visual: 'social',
  blurb: 'Content, publishing, and engagement',
  headline: 'Consistent, on-brand social media your audience looks forward to.',
  summary:
  'Social media strategy, content calendars, branded posts, captions, publishing, community engagement, brand consistency, and monthly reporting.',
  intro:
  'Showing up consistently on social media builds familiarity and trust. We plan, design, write, and publish content that reflects your brand — so you can focus on running your business.',
  cardDeliverables: ['Strategy and content calendars', 'Branded posts and captions', 'Publishing and engagement', 'Monthly reporting'],
  problems: [
  { title: 'Posting is inconsistent', text: 'Long gaps between posts make your brand easy to forget.' },
  { title: 'Content looks off-brand', text: 'Mismatched visuals and tone weaken how professional you appear.' },
  { title: 'No time to engage', text: 'Comments and messages go unanswered while you run your business.' }],

  solutions: [
  { title: 'Social media strategy', text: 'Goals, audiences, platforms, and content themes defined up front.' },
  { title: 'Content calendars', text: 'Monthly plans you approve before anything is published.' },
  { title: 'Branded posts', text: 'Designed graphics and templates that keep every post on-brand.' },
  { title: 'Captions and copy', text: 'Clear, engaging writing in your brand’s voice.' },
  { title: 'Publishing', text: 'Scheduled posting at a frequency agreed with you.' },
  { title: 'Engagement and reporting', text: 'Community management and a monthly performance summary.' }],

  benefits: [
  { title: 'Stay top of mind', text: 'Regular, quality content keeps your brand visible.' },
  { title: 'Look professional', text: 'A consistent visual identity across every platform.' },
  { title: 'Save time', text: 'Hand off planning, design, and publishing to a dedicated team.' },
  { title: 'Learn what works', text: 'Monthly reports show which content resonates with your audience.' }],

  process: [
  { title: 'Brand and audience review', text: 'We study your brand, competitors, and the people you want to reach.' },
  { title: 'Plan', text: 'We create a monthly content calendar for your approval.' },
  { title: 'Create and approve', text: 'We design posts and write captions; you review before publishing.' },
  { title: 'Publish, engage, report', text: 'We post, respond, and share insights each month.' }],

  faqs: [
  { question: 'Which platforms do you manage?', answer: 'We can work across Facebook, Instagram, TikTok, and LinkedIn, depending on where your audience is.' },
  { question: 'How many posts will I get?', answer: 'Posting frequency is tailored to your goals and budget and agreed in your package.' },
  { question: 'Do I approve content before it goes live?', answer: 'Yes. Every content calendar is shared for your review and approval.' },
  { question: 'Are paid ads included?', answer: 'Paid advertising is a separate service, and ad spend is paid directly to the platform.' }],

  related: ['meta-ads', 'branding-design', 'seo'],
  whatsappMessage: "Hello VisionSpring Agency, I'm interested in Social Media Management for my business.",
  showcase: 'illustration'
},
{
  slug: 'google-ads',
  title: 'Google Ads Management',
  navTitle: 'Google Ads',
  group: 'Grow',
  icon: MousePointerClickIcon,
  visual: 'googleads',
  blurb: 'Search campaigns and optimization',
  headline: 'Search ads that reach people actively looking for what you offer.',
  summary:
  'Campaign planning, keyword research, search advertisements, ad copy, conversion tracking where supported, optimization, and performance reports.',
  intro:
  'Google Ads can place your business in front of people at the exact moment they search. We plan, write, launch, and refine campaigns so your budget is spent with intention.',
  note: 'Our management fee covers planning, setup, optimization, and reporting. Your advertising spend is separate — it is paid directly to Google and set by you.',
  cardDeliverables: ['Campaign planning and keywords', 'Search ads and ad copy', 'Conversion tracking where supported', 'Optimization and reports'],
  problems: [
  { title: 'Ad spend disappears without results', text: 'Broad targeting and weak ads can spend budget on the wrong searches.' },
  { title: 'You cannot tell what is working', text: 'Without tracking, it is impossible to know which ads drive enquiries.' },
  { title: 'Campaigns are set and forgotten', text: 'Unmanaged campaigns drift as competition and costs change.' }],

  solutions: [
  { title: 'Campaign planning', text: 'Goals, budgets, locations, and structure defined before launch.' },
  { title: 'Keyword research', text: 'Target high-intent searches and exclude irrelevant ones.' },
  { title: 'Search advertisements', text: 'Ads built to match what your customers are searching for.' },
  { title: 'Ad copywriting', text: 'Clear, compelling copy with strong calls to action.' },
  { title: 'Conversion tracking', text: 'Measure calls, forms, and other actions where supported.' },
  { title: 'Optimization and reporting', text: 'Ongoing refinement with clear monthly reports.' }],

  benefits: [
  { title: 'Reach high-intent customers', text: 'Show up when people are actively searching.' },
  { title: 'Control your budget', text: 'You decide how much to spend, and we work to use it well.' },
  { title: 'Measurable activity', text: 'See impressions, clicks, and tracked actions clearly.' },
  { title: 'Fast visibility', text: 'Campaigns can appear in search soon after approval.' }],

  process: [
  { title: 'Plan', text: 'We define goals, budget, audience, and campaign structure.' },
  { title: 'Build', text: 'We research keywords, write ads, and set up tracking.' },
  { title: 'Launch', text: 'Campaigns go live once you approve them.' },
  { title: 'Optimize and report', text: 'We refine performance and report each month.' }],

  faqs: [
  { question: 'Is advertising spend included in your fee?', answer: 'No. Our fee covers management. Ad spend is separate and paid directly to Google.' },
  { question: 'What budget do I need?', answer: 'It depends on your industry, competition, and goals. We help you choose a realistic starting budget.' },
  { question: 'Can you guarantee leads or sales?', answer: 'No. We cannot guarantee specific results, but we work to improve performance and report transparently.' },
  { question: 'How will I see performance?', answer: 'You receive regular reports showing spend, clicks, and tracked actions where supported.' }],

  related: ['seo', 'meta-ads', 'website-development'],
  whatsappMessage: "Hello VisionSpring Agency, I'd like help with Google Ads management.",
  showcase: 'illustration'
},
{
  slug: 'meta-ads',
  title: 'Facebook and Instagram Ads',
  navTitle: 'Facebook & Instagram Ads',
  group: 'Grow',
  icon: TargetIcon,
  visual: 'metaads',
  blurb: 'Targeted paid social campaigns',
  headline: 'Put your brand in front of the right audiences on Facebook and Instagram.',
  summary:
  'Campaign strategy, audience targeting, advertising creatives, lead generation, retargeting where appropriate, and campaign performance analysis.',
  intro:
  'Paid social lets you reach people based on location, interests, and behaviour. We combine sharp targeting with scroll-stopping creative to support your marketing goals.',
  note: 'We do not guarantee sales or specific advertising results. Ad spend is paid directly to Meta and is separate from our management fee.',
  cardDeliverables: ['Campaign strategy', 'Audience targeting', 'Ad creatives', 'Lead generation and retargeting'],
  problems: [
  { title: 'Boosted posts are not delivering', text: 'Boosting without a strategy often reaches the wrong people.' },
  { title: 'Creative does not stop the scroll', text: 'Generic visuals blend into busy feeds and get ignored.' },
  { title: 'Interested people slip away', text: 'Visitors who showed interest are never reminded to return.' }],

  solutions: [
  { title: 'Campaign strategy', text: 'Objectives, budgets, and placements aligned with your goals.' },
  { title: 'Audience targeting', text: 'Reach relevant people by location, interests, and behaviour.' },
  { title: 'Ad creatives', text: 'Images, carousels, and short videos designed for feeds and stories.' },
  { title: 'Lead generation', text: 'Campaigns built to collect enquiries from interested people.' },
  { title: 'Retargeting', text: 'Re-engage past visitors and followers where appropriate.' },
  { title: 'Performance analysis', text: 'Regular reviews of what is working and what to change.' }],

  benefits: [
  { title: 'Precise reach', text: 'Spend on audiences most likely to care about your offer.' },
  { title: 'Visual storytelling', text: 'Show products and services in formats people engage with.' },
  { title: 'Flexible budgets', text: 'Start small, learn, and adjust as you go.' },
  { title: 'Actionable insights', text: 'Understand which messages and audiences respond best.' }],

  process: [
  { title: 'Strategy', text: 'We define goals, audiences, and offers.' },
  { title: 'Creative', text: 'We design ads and write copy for your approval.' },
  { title: 'Launch', text: 'Campaigns go live with tracking in place where possible.' },
  { title: 'Analyse and refine', text: 'We review results and optimize continuously.' }],

  faqs: [
  { question: 'Is ad spend included?', answer: 'No. Ad spend is paid directly to Meta and is separate from our management fee.' },
  { question: 'Will ads guarantee sales?', answer: 'No. Advertising results vary and cannot be guaranteed, but we work to improve performance over time.' },
  { question: 'Do you create the ad designs?', answer: 'Yes. Creative design and copywriting are part of campaign management.' },
  { question: 'Can you run both Facebook and Instagram ads?', answer: 'Yes. Both are managed through Meta’s advertising platform.' }],

  related: ['social-media-management', 'google-ads', 'branding-design'],
  whatsappMessage: "Hello VisionSpring Agency, I'd like to run Facebook and Instagram ads for my business.",
  showcase: 'illustration'
},
{
  slug: 'branding-design',
  title: 'Branding and Graphic Design',
  navTitle: 'Branding & Design',
  group: 'Brand',
  icon: PenToolIcon,
  visual: 'branding',
  blurb: 'Logos, identity, and print',
  headline: 'A brand identity that looks professional everywhere it appears.',
  summary:
  'Logo design, brand identity, company profiles, business cards, posters, flyers, brochures, banners, social media graphics, and merchandise designs.',
  intro:
  'A strong brand makes you recognisable and trustworthy. We design identities and marketing materials that look consistent across print, digital, and everything in between.',
  cardDeliverables: ['Logo and brand identity', 'Company profiles and brochures', 'Business cards, posters, flyers', 'Social graphics and merchandise'],
  problems: [
  { title: 'Your brand looks inconsistent', text: 'Different colours, fonts, and styles make your business feel less established.' },
  { title: 'You have no professional logo', text: 'A homemade mark can hold back how customers perceive your quality.' },
  { title: 'Materials are needed fast', text: 'Last-minute posters and profiles often end up rushed and off-brand.' }],

  solutions: [
  { title: 'Logo design', text: 'A distinctive mark designed to work at every size.' },
  { title: 'Brand identity', text: 'Colours, typography, and guidelines that keep everything consistent.' },
  { title: 'Company profiles', text: 'Professional documents that present your business with confidence.' },
  { title: 'Print collateral', text: 'Business cards, posters, flyers, and brochures.' },
  { title: 'Banners and signage', text: 'Large-format designs for events, shops, and offices.' },
  { title: 'Social graphics and merchandise', text: 'Templates, branded apparel, and promotional items.' }],

  benefits: [
  { title: 'Recognition', text: 'A consistent look helps customers remember you.' },
  { title: 'Trust', text: 'Professional design signals a professional business.' },
  { title: 'Efficiency', text: 'Templates and guidelines make future materials faster to create.' },
  { title: 'Stand out', text: 'Thoughtful design helps you differentiate in a crowded market.' }],

  process: [
  { title: 'Brief', text: 'We learn about your business, audience, and personality.' },
  { title: 'Concepts', text: 'We present design directions for your feedback.' },
  { title: 'Refine', text: 'We develop the chosen direction through agreed revisions.' },
  { title: 'Deliver', text: 'You receive final files ready for print and digital use.' }],

  faqs: [
  { question: 'How many logo concepts will I see?', answer: 'The number of concepts and revisions is set out in your package and quote.' },
  { question: 'What files will I receive?', answer: 'You receive final files suitable for print and digital use, as agreed in your project.' },
  { question: 'Can you work with my existing logo?', answer: 'Yes. We can refresh an existing logo or build a full identity around it.' },
  { question: 'Do you handle printing?', answer: 'We prepare print-ready files and can advise on printing. Print costs are separate.' }],

  related: ['social-media-management', 'website-development', 'meta-ads'],
  whatsappMessage: "Hello VisionSpring Agency, I'm interested in Branding and Graphic Design.",
  showcase: 'illustration'
},
{
  slug: 'mobile-app-development',
  title: 'Mobile Application Development',
  navTitle: 'Mobile Apps',
  group: 'Build',
  icon: SmartphoneIcon,
  visual: 'mobile',
  blurb: 'Android and cross-platform apps',
  headline: 'Mobile apps that put your business in your customers’ pockets.',
  summary:
  'Android and cross-platform applications, business apps, interface design, API and database integration, testing, and deployment support.',
  intro:
  'A well-designed app can make ordering, booking, learning, or managing work far more convenient. We design and build mobile apps that are simple to use and reliable to run.',
  cardDeliverables: ['Android and cross-platform apps', 'Interface design', 'API and database integration', 'Testing and deployment'],
  problems: [
  { title: 'Customers expect mobile convenience', text: 'People want to order, book, and track things from their phones.' },
  { title: 'Field teams rely on paper', text: 'Staff on the move cannot capture or access information easily.' },
  { title: 'An idea without a technical partner', text: 'You know what you want to build but not how to get there.' }],

  solutions: [
  { title: 'Android apps', text: 'Native-feeling apps for the most widely used mobile platform in Kenya.' },
  { title: 'Cross-platform apps', text: 'One codebase serving Android and iOS where appropriate.' },
  { title: 'Business apps', text: 'Internal tools for teams, sales, and operations.' },
  { title: 'Interface design', text: 'Intuitive screens designed around how people use phones.' },
  { title: 'API and database integration', text: 'Connect your app to data, payments, and services where available.' },
  { title: 'Testing and deployment', text: 'Quality checks and support publishing to app stores.' }],

  benefits: [
  { title: 'Always within reach', text: 'Your service is a tap away on customers’ home screens.' },
  { title: 'Better engagement', text: 'Apps enable faster, more personal interactions.' },
  { title: 'Efficient operations', text: 'Teams capture and access information wherever they are.' },
  { title: 'Room to grow', text: 'Start with core features and expand over time.' }],

  process: [
  { title: 'Define', text: 'We clarify users, core features, and platforms.' },
  { title: 'Design', text: 'We design screens and flows for your review.' },
  { title: 'Develop and test', text: 'We build iteratively and test on real devices.' },
  { title: 'Deploy and support', text: 'We help publish your app and plan updates.' }],

  faqs: [
  { question: 'Do you build for Android, iOS, or both?', answer: 'We build Android apps and cross-platform apps that can run on both, depending on your needs.' },
  { question: 'How long does an app take?', answer: 'It depends on features and complexity. A discovery phase helps define an accurate timeline.' },
  { question: 'Will you publish the app to the stores?', answer: 'We provide deployment support. Developer account fees are paid by the app owner.' },
  { question: 'Can the app connect to my website or system?', answer: 'Yes, where the system provides an API or we build one as part of the project.' }],

  related: ['web-applications', 'website-development', 'branding-design'],
  whatsappMessage: "Hello VisionSpring Agency, I'd like to discuss building a mobile app.",
  showcase: 'illustration'
}];