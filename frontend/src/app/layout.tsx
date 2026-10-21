import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "VisionSpring Agency | Digital Solutions. Real Growth.",
    template: "%s | VisionSpring Agency",
  },
  description:
    "VisionSpring Agency builds websites and grows brands through SEO, social media, digital advertising, and branding.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
