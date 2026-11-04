import type { SocialLink } from '../types/content';

export const site = {
  name: 'VisionSpring Agency',
  tagline: 'Digital Solutions. Real Growth.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.visionspringagency.com',
  description:
  'VisionSpring Agency helps businesses build their digital presence through website development, web applications, SEO, social media management, digital advertising, and creative branding.',
  email: 'visionspringagency@gmail.com',
  whatsappUrl: 'https://wa.me/254112280703',
  whatsappDefaultMessage: "Hello VisionSpring Agency, I'd like to talk about a project.",
  logoUrl: "/logo.png",
  /**
   * Connect a form service (e.g. a Formspree or Getform endpoint URL) to accept enquiries online.
   * While empty, the form never pretends to send — visitors are offered email and WhatsApp instead.
   */
  formEndpoint: ''
};

/** Add official profile URLs when available. Empty URLs are hidden automatically. */
export const socialLinks: SocialLink[] = [
  { platform: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61595464059183' },
  { platform: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/visionspringagency/' },
  { platform: 'tiktok', label: 'TikTok', url: 'https://www.tiktok.com/@visionspringagency?lang=en-GB' },
  { platform: 'linkedin', label: 'LinkedIn', url: '' },
  { platform: 'youtube', label: 'YouTube', url: '' }
];