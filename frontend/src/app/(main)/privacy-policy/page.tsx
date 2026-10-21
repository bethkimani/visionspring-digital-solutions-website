"use client";
import React from 'react';
import { usePageMeta } from '@/hooks/usePageMeta';
import { privacyPolicy } from '@/data/legal';
import { LegalDocument } from '@/components/LegalDocument';

export default function PrivacyPolicyPage() {
  usePageMeta('Privacy Policy', 'How VisionSpring Agency collects, uses, and protects personal information submitted through this website.');
  return <LegalDocument doc={privacyPolicy} />;
}