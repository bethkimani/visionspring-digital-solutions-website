'use client';

import React from 'react';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { urlForImage } from '@/sanity/image';

function renderMarkdownEnhancedBlock(text: string, defaultChildren: React.ReactNode) {
  const lines = text.split('\n');
  const hasMarkdownMarkers = lines.some((l) => /^(##|###|[-*]\s)/.test(l.trim()));

  if (!hasMarkdownMarkers) {
    return (
      <p className="mb-6 text-base leading-relaxed text-muted sm:text-lg">
        {defaultChildren}
      </p>
    );
  }

  const elements: React.ReactNode[] = [];
  let currentList: string[] = [];

  const flushList = (keyPrefix: number) => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`ul-${keyPrefix}`} className="mb-6 ml-6 list-disc space-y-2 text-muted">
          {currentList.map((item, idx) => (
            <li key={idx} className="text-base leading-relaxed sm:text-lg">
              {item}
            </li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  lines.forEach((rawLine, index) => {
    const line = rawLine.trim();

    if (line.startsWith('## ')) {
      flushList(index);
      const heading = line.replace(/^##\s+/, '');
      const id = heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      elements.push(
        <h2
          key={`h2-${index}`}
          id={id}
          className="mt-12 mb-4 scroll-mt-28 text-2xl font-bold tracking-tight text-navy-800 sm:text-3xl"
        >
          {heading}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      flushList(index);
      const heading = line.replace(/^###\s+/, '');
      const id = heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      elements.push(
        <h3
          key={`h3-${index}`}
          id={id}
          className="mt-8 mb-3 scroll-mt-28 text-xl font-semibold text-navy-800 sm:text-2xl"
        >
          {heading}
        </h3>
      );
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      currentList.push(line.replace(/^[-*]\s+/, ''));
    } else if (line.length > 0) {
      flushList(index);
      elements.push(
        <p key={`p-${index}`} className="mb-6 text-base leading-relaxed text-muted sm:text-lg">
          {line}
        </p>
      );
    }
  });

  flushList(lines.length);

  return <>{elements}</>;
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => {
      const text = children?.toString() || '';
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return (
        <h2 id={id} className="mt-12 mb-4 scroll-mt-28 text-2xl font-bold tracking-tight text-navy-800 sm:text-3xl">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const text = children?.toString() || '';
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return (
        <h3 id={id} className="mt-8 mb-3 scroll-mt-28 text-xl font-semibold text-navy-800 sm:text-2xl">
          {children}
        </h3>
      );
    },
    normal: ({ value, children }) => {
      // If the block contains raw markdown like ## or bullet lines, render them properly
      const rawText = (value?.children || []).map((c: any) => c.text || '').join('');
      return renderMarkdownEnhancedBlock(rawText, children);
    },
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-ocean bg-mist/60 px-6 py-4 italic text-navy-800 rounded-r-xl">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mb-6 ml-6 list-disc space-y-2 text-muted">{children}</ul>,
    number: ({ children }) => <ol className="mb-6 ml-6 list-decimal space-y-2 text-muted">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="text-base leading-relaxed sm:text-lg">{children}</li>,
    number: ({ children }) => <li className="text-base leading-relaxed sm:text-lg">{children}</li>,
  },
  types: {
    image: ({ value }) => {
      const url = urlForImage(value);
      if (!url) return null;
      return (
        <figure className="my-10">
          <img
            src={url}
            alt={value.alt || 'VisionSpring article illustration'}
            className="w-full rounded-2xl object-cover shadow-sm"
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-muted">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-navy-800">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target ? 'noopener noreferrer' : undefined}
          className="font-medium text-ocean underline decoration-sky-soft underline-offset-4 hover:text-ocean-dark transition-colors"
        >
          {children}
        </a>
      );
    },
  },
};

export function PortableTextRenderer({ value }: { value: any }) {
  if (!value) return null;
  return (
    <div className="prose prose-slate max-w-none">
      <PortableText value={value} components={components} />
    </div>
  );
}
