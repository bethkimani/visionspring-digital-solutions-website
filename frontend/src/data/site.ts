import type { SocialLink } from '../types/content';

export const site = {
  name: 'VisionSpring Agency',
  tagline: 'Digital Solutions. Real Growth.',
  description:
  'VisionSpring Agency helps businesses build their digital presence through website development, web applications, SEO, social media management, digital advertising, and creative branding.',
  email: 'visionspringagency@gmail.com',
  whatsappUrl: 'https://wa.me/254112280703',
  whatsappDefaultMessage: "Hello VisionSpring Agency, I'd like to talk about a project.",
  logoUrl: "/vision%20logo.jpeg",
  /**
   * Connect a form service (e.g. a Formspree or Getform endpoint URL) to accept enquiries online.
   * While empty, the form never pretends to send — visitors are offered email and WhatsApp instead.
   */
  formEndpoint: ''
};

/** Add official profile URLs when available. Empty URLs are hidden automatically. */
export const socialLinks: SocialLink[] = [
{ platform: 'facebook', label: 'Facebook', url: '' },
{ platform: 'instagram', label: 'Instagram', url: '' },
{ platform: 'tiktok', label: 'TikTok', url: '' },
{ platform: 'linkedin', label: 'LinkedIn', url: '' },
{ platform: 'youtube', label: 'YouTube', url: '' }];