"use client";
import React from 'react';
import { BrowserFrame } from './mockups/BrowserFrame';
import { WebsiteMockup } from './mockups/WebsiteMockup';
import { PhoneFrame } from './mockups/PhoneFrame';
import { AppScreenMockup } from './mockups/AppScreenMockup';
import { DashboardMockup } from './mockups/DashboardMockup';
import { SearchAdMockup } from './mockups/SearchAdMockup';
import { SocialPostMockup } from './mockups/SocialPostMockup';
import { socialSamples } from '../data/socialSamples';

export function HeroComposition() {
  return (
    <div className="relative mx-auto h-[360px] w-full max-w-[500px] sm:h-[420px] lg:h-[400px] xl:h-[460px] xl:max-w-[560px]" aria-hidden="true">
      {/* 1. Base website mockup — anchored foundation */}
      <div className="absolute left-[6%] right-0 top-[4%] z-10">
        <BrowserFrame url="yourbusiness.co.ke">
          <WebsiteMockup />
        </BrowserFrame>
      </div>

      {/* 2. Top-right dashboard card — peels off & returns to top-right */}
      <div className="hero-animate-dashboard absolute -top-2 right-[-2%] z-20 hidden w-48 sm:block xl:w-54">
        <DashboardMockup />
      </div>

      {/* 3. Bottom-left mobile app mockup — peels off & returns to bottom-left */}
      <div className="hero-animate-phone absolute bottom-0 left-0 z-30 w-[32%] max-w-[145px] xl:max-w-[165px]">
        <PhoneFrame>
          <AppScreenMockup />
        </PhoneFrame>
      </div>

      {/* 4. Bottom-right search ad mockup — peels off & returns to bottom-right */}
      <div className="hero-animate-search-ad absolute bottom-[2%] right-0 z-20 w-[56%] max-w-[260px] xl:max-w-[290px]">
        <SearchAdMockup />
      </div>

      {/* 5. Mid-left social post card — peels off & returns to left */}
      <div className="hero-animate-social absolute left-[-3%] top-[26%] z-30 hidden w-36 lg:block xl:w-40">
        <SocialPostMockup sample={socialSamples[0]} />
      </div>
    </div>
  );
}
