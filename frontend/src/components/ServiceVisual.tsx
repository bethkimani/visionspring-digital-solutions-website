import React from 'react';
import type { ServiceVisualKind } from '../types/content';
import { socialSamples } from '../data/socialSamples';
import { BrowserFrame } from './mockups/BrowserFrame';
import { WebsiteMockup } from './mockups/WebsiteMockup';
import { PhoneFrame } from './mockups/PhoneFrame';
import { AppScreenMockup } from './mockups/AppScreenMockup';
import { DashboardMockup } from './mockups/DashboardMockup';
import { SearchAdMockup } from './mockups/SearchAdMockup';
import { SocialPostMockup } from './mockups/SocialPostMockup';
import { SeoReportMockup } from './mockups/SeoReportMockup';
import { ContentCalendarMockup } from './mockups/ContentCalendarMockup';
import { BrandBoardMockup } from './mockups/BrandBoardMockup';
import { ProfileGridMockup } from './mockups/ProfileGridMockup';

export function ServiceVisual({ kind }: {kind: ServiceVisualKind;}) {
  switch (kind) {
    case 'website':
      return (
        <div className="relative mx-auto max-w-[560px] pb-10">
          <BrowserFrame>
            <WebsiteMockup title="A website your customers trust" />
          </BrowserFrame>
          <div className="absolute -bottom-2 right-4 w-32 sm:w-36">
            <PhoneFrame>
              <AppScreenMockup title="Book a visit" />
            </PhoneFrame>
          </div>
        </div>);

    case 'webapp':
      return (
        <div className="relative mx-auto max-w-[560px]">
          <BrowserFrame url="portal.yourorganization.co.ke">
            <div className="grid grid-cols-12 bg-mist">
              <div className="col-span-3 space-y-2 bg-navy-800 p-3">
                <span className="block h-3 w-12 rounded-full bg-white/80" />
                {[0, 1, 2, 3, 4].map((i) =>
                <span key={i} className={`block h-2 rounded-full ${i === 1 ? 'bg-growth-light' : 'bg-white/25'}`} style={{ width: `${60 + i % 3 * 12}%` }} />
                )}
              </div>
              <div className="col-span-9 p-3">
                <DashboardMockup title="Operations dashboard" className="shadow-none" />
              </div>
            </div>
          </BrowserFrame>
        </div>);

    case 'seo':
      return (
        <div className="relative mx-auto grid max-w-[540px] gap-4 sm:grid-cols-5">
          <SeoReportMockup className="sm:col-span-3" />
          <SearchAdMockup query="seo services near me" className="self-end sm:col-span-2" />
        </div>);

    case 'social':
      return (
        <div className="relative mx-auto grid max-w-[540px] grid-cols-2 gap-4">
          <SocialPostMockup sample={socialSamples[2]} />
          <ContentCalendarMockup className="self-end" />
        </div>);

    case 'googleads':
      return (
        <div className="relative mx-auto max-w-[520px] space-y-4">
          <SearchAdMockup query="school website design" />
          <DashboardMockup title="Campaign performance" className="ml-auto w-10/12" />
        </div>);

    case 'metaads':
      return (
        <div className="relative mx-auto flex max-w-[520px] items-end justify-center gap-4">
          <div className="w-44">
            <PhoneFrame>
              <ProfileGridMockup />
            </PhoneFrame>
          </div>
          <SocialPostMockup sample={socialSamples[3]} className="w-52" />
        </div>);

    case 'branding':
      return <BrandBoardMockup className="mx-auto max-w-[460px]" />;
    case 'mobile':
      return (
        <div className="relative mx-auto flex max-w-[460px] items-end justify-center gap-4">
          <div className="w-40 translate-y-6">
            <PhoneFrame>
              <AppScreenMockup title="Your orders" accent="#14A971" />
            </PhoneFrame>
          </div>
          <div className="w-44">
            <PhoneFrame>
              <AppScreenMockup title="Good morning" />
            </PhoneFrame>
          </div>
        </div>);

  }
}