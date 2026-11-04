import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import ClarityProvider from "@/components/providers/ClarityProvider";

const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || '';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: site.url ? new URL(site.url) : undefined,
  title: {
    default: "VisionSpring Agency | Digital Solutions. Real Growth.",
    template: "%s | VisionSpring Agency",
  },
  description:
    "VisionSpring Agency builds high-converting websites, custom web applications, and drives real business growth through SEO, digital advertising, and creative branding.",
  keywords: [
    "Website Development",
    "Web Applications",
    "Custom Software Kenya",
    "SEO Agency",
    "Digital Marketing Agency",
    "Social Media Management",
    "Digital Advertising",
    "Google Ads",
    "Meta Ads",
    "Branding and Design",
    "VisionSpring Agency",
  ],
  authors: [{ name: "VisionSpring Agency", url: site.url }],
  creator: "VisionSpring Agency",
  publisher: "VisionSpring Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VisionSpring Agency | Digital Solutions. Real Growth.",
    description:
      "VisionSpring Agency builds high-converting websites, custom web applications, and drives real business growth through SEO, digital advertising, and creative branding.",
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "VisionSpring Agency - Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VisionSpring Agency | Digital Solutions. Real Growth.",
    description:
      "VisionSpring Agency builds high-converting websites, custom web applications, and drives real business growth through SEO, digital advertising, and creative branding.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <ClarityProvider projectId={CLARITY_PROJECT_ID} />
        {children}
      </body>
    </html>
  );
}
