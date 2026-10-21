import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { pricingCategories } from '../../data/pricing';
import { ButtonLink } from '../ButtonLink';
import { PackageCard } from '../PackageCard';
import { Reveal } from '../Reveal';
import { SectionHeading } from '../SectionHeading';

export function HomePackages() {
  const website = pricingCategories[0];
  return (
    <section className="bg-mist py-20 sm:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Packages"
          title="Website packages to get you started"
          description="Every quote is tailored to your requirements. See packages for SEO, social media, ads, branding, and apps on our pricing page."
          action={
          <ButtonLink to="/pricing" variant="secondary" iconRight={<ArrowRightIcon className="h-4 w-4" aria-hidden="true" />}>
              View All Packages
            </ButtonLink>
          } />
        
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {website.packages.map((pkg, i) =>
          <Reveal key={pkg.name} delay={i * 0.05} className="h-full">
              <PackageCard pkg={pkg} categoryTitle={website.title} serviceSlug={website.serviceSlug} />
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}