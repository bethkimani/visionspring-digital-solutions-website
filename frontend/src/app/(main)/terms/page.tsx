"use client";
import React from 'react';
import { usePageMeta } from '@/hooks/usePageMeta';
import { termsAndConditions } from '@/data/legal';
import { LegalDocument } from '@/components/LegalDocument';

export default function TermsPage() {
  usePageMeta('Terms and Conditions', 'Terms and conditions for using the VisionSpring Agency website.');
  return <LegalDocument doc={termsAndConditions} />;
}