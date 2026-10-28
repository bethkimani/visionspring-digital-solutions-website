import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

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
  title: {
    default: "VisionSpring Agency | Digital Solutions. Real Growth.",
    template: "%s | VisionSpring Agency",
  },
  description:
    "VisionSpring Agency builds websites and grows brands through SEO, social media, digital advertising, and branding.",
  openGraph: {
    title: "VisionSpring Agency | Digital Solutions. Real Growth.",
    description:
      "VisionSpring Agency builds websites and grows brands through SEO, social media, digital advertising, and branding.",
    type: "website",
    siteName: "VisionSpring Agency",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
