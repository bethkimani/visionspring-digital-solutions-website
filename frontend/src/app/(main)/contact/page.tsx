import React, { Suspense } from "react";
import type { Metadata } from "next";
import { site } from "@/data/site";
import ContactPageClient from "@/components/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us & Request a Quote | Web Design & Software Nairobi — VisionSpring",
  description:
    "Ready to start your project? Contact VisionSpring Agency in Nairobi, Kenya for website design, custom software, SEO, and digital growth. Fast reply via WhatsApp or email.",
  keywords: [
    "Contact VisionSpring Agency",
    "Web Design Quote Nairobi Kenya",
    "Hire Software Developers Kenya",
    "Website Developer Contact Nairobi",
    "VisionSpring Agency WhatsApp Number",
    "Digital Marketing Consultation Kenya",
    "Web Development Agency Nairobi",
  ],
  alternates: {
    canonical: `${site.url}/contact`,
  },
  openGraph: {
    title: "Contact Us & Request a Quote | Web Design & Software Nairobi — VisionSpring",
    description:
      "Ready to start your project? Get in touch with VisionSpring Agency in Nairobi, Kenya for clear advice and an honest quote.",
    url: `${site.url}/contact`,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: `${site.url}/logo.png`,
        width: 512,
        height: 512,
        alt: "Contact VisionSpring Agency in Nairobi Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us & Request a Quote | Web Design & Software Nairobi — VisionSpring",
    description:
      "Ready to start your project? Get in touch with VisionSpring Agency in Nairobi, Kenya for clear advice and an honest quote.",
    images: [`${site.url}/logo.png`],
  },
};

export default function ContactPage() {
  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact VisionSpring Agency',
    description: 'Contact details and consultation request form for VisionSpring Agency.',
    url: `${site.url}/contact`,
    mainEntity: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
      telephone: '+254112280703',
      email: site.email,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+254112280703',
        contactType: 'customer support',
        availableLanguage: ['English', 'Swahili'],
      },
    },
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(contactJsonLd)}
      </script>

      <Suspense
        fallback={
          <div className="container-site py-24 text-center text-muted">
            Loading contact form…
          </div>
        }
      >
        <ContactPageClient />
      </Suspense>
    </>
  );
}
