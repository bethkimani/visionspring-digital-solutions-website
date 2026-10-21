import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { values } from '../../data/about';
import { ButtonLink } from '../ButtonLink';
import { Reveal } from '../Reveal';

export function HomeAbout() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <p className="mb-4 text-sm font-semibold text-growth-dark">About VisionSpring Agency</p>
          <h2 className="text-3xl font-extrabold leading-[1.12] text-navy-800 sm:text-[2.6rem]">
            We combine technology, creativity, and digital strategy to help organizations be <span className="text-ocean">seen</span>, <span className="text-ocean">trusted</span>, and <span className="text-growth-dark">chosen</span>.
          </h2>
        </Reveal>
        <Reveal className="lg:col-span-5 lg:pt-10" delay={0.08}>
          <p className="text-lg leading-relaxed text-muted">
            VisionSpring Agency is a digital marketing and technology agency serving businesses, schools, institutions, startups, entrepreneurs, and e-commerce brands in Kenya and internationally.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-8">
            {values.map((v) =>
            <li key={v.title} className="flex items-center gap-3">
                <v.icon className="h-5 w-5 text-ocean" aria-hidden="true" />
                <span className="font-display font-bold text-navy-800">{v.title}</span>
              </li>
            )}
          </ul>
          <ButtonLink to="/about" variant="outline" className="mt-8" iconRight={<ArrowRightIcon className="h-4 w-4" aria-hidden="true" />}>
            Learn More About Us
          </ButtonLink>
        </Reveal>
      </div>
    </section>);

}