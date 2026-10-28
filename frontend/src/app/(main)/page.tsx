import type { Metadata } from 'next';
import { HomeHero } from '@/components/home/HomeHero';
import { HomeAbout } from '@/components/home/HomeAbout';
import { HomeServices } from '@/components/home/HomeServices';
import { HomePortfolio } from '@/components/home/HomePortfolio';
import { HomeSocial } from '@/components/home/HomeSocial';
import { HomeWhyProcess } from '@/components/home/HomeWhyProcess';
import { HomeBlog } from '@/components/home/HomeBlog';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: {
    absolute: 'VisionSpring Agency — Websites, SEO, Social Media & Digital Marketing',
  },
  description:
    'VisionSpring Agency builds websites, web applications, and mobile apps, and grows brands through SEO, social media management, digital advertising, and branding.',
  openGraph: {
    title: 'VisionSpring Agency — Websites, SEO, Social Media & Digital Marketing',
    description:
      'VisionSpring Agency builds websites, web applications, and mobile apps, and grows brands through SEO, social media management, digital advertising, and branding.',
    type: 'website',
    siteName: 'VisionSpring Agency',
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomePortfolio />
      <HomeSocial />
      <HomeWhyProcess />
      <HomeBlog />
      <CtaBanner
        title="Ready to start your next project?"
        text="Tell us where you want your business to go. We’ll recommend the right digital solution — and give you a clear, honest quote."
      />
    </>
  );
}