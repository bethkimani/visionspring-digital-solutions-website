'use client';

import React, { useEffect, useState } from 'react';
import { CheckIcon, CopyIcon } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { SocialIcon } from '@/components/SocialIcon';

interface ShareButtonsProps {
  title: string;
  url?: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState(url || '');

  // Hydrate client window URL safely after initial render to avoid SSR hydration mismatch
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(url || window.location.href);
    }
  }, [url]);

  const copyLink = async () => {
    const textToCopy = shareUrl || (typeof window !== 'undefined' ? window.location.href : '');
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div>
      <p className="text-sm font-semibold text-navy-800">Share</p>
      <div className="mt-3 flex gap-2">
        <a
          href={`https://wa.me/?text=${encodeURIComponent(`${title} ${shareUrl}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-mist text-navy-800 transition-colors duration-150 hover:bg-growth-dark hover:text-white"
        >
          <WhatsAppIcon className="h-4 w-4" />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-mist text-navy-800 transition-colors duration-150 hover:bg-ocean hover:text-white"
        >
          <SocialIcon platform="linkedin" />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-mist text-navy-800 transition-colors duration-150 hover:bg-ocean hover:text-white"
        >
          <SocialIcon platform="facebook" />
        </a>
        <button
          type="button"
          onClick={copyLink}
          aria-label="Copy link"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-mist text-navy-800 transition-colors duration-150 hover:bg-navy-800 hover:text-white"
        >
          {copied ? (
            <CheckIcon className="h-4 w-4" aria-hidden="true" />
          ) : (
            <CopyIcon className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </div>
      <p className="mt-2 h-4 text-xs text-growth-dark" aria-live="polite">
        {copied ? 'Link copied' : ''}
      </p>
    </div>
  );
}
