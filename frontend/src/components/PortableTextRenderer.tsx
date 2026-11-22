'use client';

import React from 'react';
import Link from 'next/link';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { urlForImage } from '@/sanity/image';

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Parses inline markdown:
 * - [text](url) -> Clickable link (with external target="_blank" safety)
 * - **text** or __text__ -> Bold <strong>
 * - *text* or _text_ -> Italic <em>
 * - `code` -> Inline <code>
 * Supports nested structures (e.g. bold or italic wrapping a link).
 */
export function renderInlineMarkdown(text: string, keyPrefix = 0): React.ReactNode {
  if (!text) return null;

  const regex =
    /(!?\[([^\]]+)\]\(([^)]+)\))|(\*\*([^*]+)\*\*)|(__([^_]+)__)|(\*([^*]+)\*)|(_([^_]+)_)|(`([^`]+)`)/g;

  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let counter = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const key = `${keyPrefix}-${counter++}`;

    // Link: [text](url)
    if (match[2] && match[3]) {
      const linkText = match[2];
      const linkUrl = match[3];
      const isExternal =
        (linkUrl.startsWith('http://') || linkUrl.startsWith('https://')) &&
        !linkUrl.includes('visionspringagency.com');
      const isWhatsApp = linkUrl.includes('wa.me');
      const isInternalNextLink = linkUrl.startsWith('/') || linkUrl.includes('visionspringagency.com');

      const innerContent = renderInlineMarkdown(linkText, counter * 100);

      if (isInternalNextLink) {
        // If it contains full domain, turn into relative pathname
        const href = linkUrl.replace(/^https?:\/\/(www\.)?visionspringagency\.com/, '') || '/';
        nodes.push(
          <Link
            key={key}
            href={href}
            className="font-medium text-ocean underline decoration-sky-soft underline-offset-4 transition-colors hover:text-ocean-dark"
          >
            {innerContent}
          </Link>
        );
      } else {
        nodes.push(
          <a
            key={key}
            href={linkUrl}
            target={isExternal || isWhatsApp ? '_blank' : undefined}
            rel={isExternal || isWhatsApp ? 'noopener noreferrer' : undefined}
            className="font-medium text-ocean underline decoration-sky-soft underline-offset-4 transition-colors hover:text-ocean-dark"
          >
            {innerContent}
          </a>
        );
      }
    }
    // Bold: **text** or __text__
    else if (match[5] || match[7]) {
      const boldText = match[5] || match[7];
      nodes.push(
        <strong key={key} className="font-bold text-navy-900">
          {renderInlineMarkdown(boldText, counter * 100)}
        </strong>
      );
    }
    // Italic: *text* or _text_
    else if (match[9] || match[11]) {
      const italicText = match[9] || match[11];
      nodes.push(
        <em key={key} className="italic text-slate-700">
          {renderInlineMarkdown(italicText, counter * 100)}
        </em>
      );
    }
    // Code: `text`
    else if (match[13]) {
      nodes.push(
        <code
          key={key}
          className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-ocean"
        >
          {match[13]}
        </code>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes.length === 1 && typeof nodes[0] === 'string' ? nodes[0] : nodes;
}

interface ParsedTable {
  type: 'table';
  headers: string[];
  rows: string[][];
}

interface ParsedHeading {
  type: 'h2' | 'h3';
  text: string;
}

interface ParsedList {
  type: 'ul' | 'ol';
  items: string[];
}

interface ParsedQuote {
  type: 'quote';
  text: string;
}

interface ParsedParagraph {
  type: 'p';
  text: string;
}

interface ParsedHr {
  type: 'hr';
}

type ParsedMarkdownBlock =
  | ParsedTable
  | ParsedHeading
  | ParsedList
  | ParsedQuote
  | ParsedParagraph
  | ParsedHr;

/**
 * Splits text into structured Markdown blocks:
 * tables, H2, H3, bullet lists, numbered lists, blockquotes, horizontal rules, and paragraphs.
 */
function parseMarkdownDocument(text: string): ParsedMarkdownBlock[] {
  const lines = text.split(/\r?\n/);
  const blocks: ParsedMarkdownBlock[] = [];
  let i = 0;

  while (i < lines.length) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    if (!line) {
      i++;
      continue;
    }

    // Markdown Table: lines starting and ending with |
    if (line.startsWith('|') && line.endsWith('|')) {
      const tableLines = [line];
      let j = i + 1;
      while (
        j < lines.length &&
        lines[j].trim().startsWith('|') &&
        lines[j].trim().endsWith('|')
      ) {
        tableLines.push(lines[j].trim());
        j++;
      }

      if (tableLines.length >= 2 && tableLines[1].includes('---')) {
        const parseRow = (rowStr: string) =>
          rowStr
            .replace(/^\|/, '')
            .replace(/\|$/, '')
            .split('|')
            .map((c) => c.trim());

        const headers = parseRow(tableLines[0]);
        const dataRows = tableLines.slice(2).map(parseRow);
        blocks.push({ type: 'table', headers, rows: dataRows });
        i = j;
        continue;
      }
    }

    // Heading 2
    if (line.startsWith('## ')) {
      blocks.push({ type: 'h2', text: line.replace(/^##\s+/, '') });
      i++;
      continue;
    }

    // Heading 3
    if (line.startsWith('### ')) {
      blocks.push({ type: 'h3', text: line.replace(/^###\s+/, '') });
      i++;
      continue;
    }

    // Unordered Bullet List (- , * , • )
    if (/^[-*•]\s+/.test(line)) {
      const items = [line.replace(/^[-*•]\s+/, '')];
      let j = i + 1;
      while (j < lines.length && /^[-*•]\s+/.test(lines[j].trim())) {
        items.push(lines[j].trim().replace(/^[-*•]\s+/, ''));
        j++;
      }
      blocks.push({ type: 'ul', items });
      i = j;
      continue;
    }

    // Ordered Numbered List (1. , 2. )
    if (/^\d+\.\s+/.test(line)) {
      const items = [line.replace(/^\d+\.\s+/, '')];
      let j = i + 1;
      while (j < lines.length && /^\d+\.\s+/.test(lines[j].trim())) {
        items.push(lines[j].trim().replace(/^\d+\.\s+/, ''));
        j++;
      }
      blocks.push({ type: 'ol', items });
      i = j;
      continue;
    }

    // Blockquote
    if (line.startsWith('>')) {
      blocks.push({ type: 'quote', text: line.replace(/^>\s*/, '') });
      i++;
      continue;
    }

    // Horizontal Rule
    if (/^(\*{3,}|-{3,}|_{3,})$/.test(line)) {
      blocks.push({ type: 'hr' });
      i++;
      continue;
    }

    // Normal paragraph
    blocks.push({ type: 'p', text: line });
    i++;
  }

  return blocks;
}

/**
 * Renders a Markdown Table with responsive styling and mobile scroll.
 */
function MarkdownTableView({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-line bg-white shadow-sm ring-1 ring-slate-900/5">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm sm:text-base">
          <thead>
            <tr className="border-b border-line bg-slate-50/90">
              {headers.map((h, i) => (
                <th
                  key={i}
                  scope="col"
                  className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-navy-900 sm:px-6 sm:text-sm"
                >
                  {renderInlineMarkdown(h)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line text-navy-800">
            {rows.map((row, rIdx) => (
              <tr
                key={rIdx}
                className={`transition-colors hover:bg-sky-soft/40 ${
                  rIdx % 2 === 1 ? 'bg-slate-50/40' : 'bg-white'
                }`}
              >
                {row.map((cell, cIdx) => (
                  <td
                    key={cIdx}
                    className={`px-5 py-4 leading-relaxed sm:px-6 ${
                      cIdx === 0
                        ? 'font-semibold text-navy-900'
                        : 'font-medium text-slate-700'
                    }`}
                  >
                    {renderInlineMarkdown(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/**
 * Takes raw text (which may contain multiple markdown elements like tables, headings, lists)
 * and renders rich, accessible React elements.
 */
function renderMarkdownEnhancedBlock(text: string, defaultChildren: React.ReactNode) {
  const hasMarkdownSyntax =
    text.includes('\n') ||
    text.includes('|') ||
    /^(##|###|[-*•]\s|\d+\.\s|>)/m.test(text) ||
    /(\*\*|__|\*|_|\[.*\]\(.*\)|`)/.test(text);

  if (!hasMarkdownSyntax) {
    return (
      <p className="mb-6 text-base leading-relaxed text-navy-800/85 sm:text-lg">
        {defaultChildren}
      </p>
    );
  }

  const parsedBlocks = parseMarkdownDocument(text);

  return (
    <>
      {parsedBlocks.map((b, idx) => {
        if (b.type === 'table') {
          return <MarkdownTableView key={`tbl-${idx}`} headers={b.headers} rows={b.rows} />;
        }

        if (b.type === 'h2') {
          const id = slugify(b.text);
          return (
            <h2
              key={`h2-${idx}`}
              id={id}
              className="mt-12 mb-4 scroll-mt-28 text-2xl font-extrabold tracking-tight text-navy-800 sm:text-3xl"
            >
              {renderInlineMarkdown(b.text)}
            </h2>
          );
        }

        if (b.type === 'h3') {
          const id = slugify(b.text);
          return (
            <h3
              key={`h3-${idx}`}
              id={id}
              className="mt-8 mb-3 scroll-mt-28 text-xl font-bold text-navy-800 sm:text-2xl"
            >
              {renderInlineMarkdown(b.text)}
            </h3>
          );
        }

        if (b.type === 'ul') {
          return (
            <ul key={`ul-${idx}`} className="my-6 ml-6 list-disc space-y-2.5 text-navy-800/85">
              {b.items.map((item, itemIdx) => (
                <li key={itemIdx} className="pl-1 text-base leading-relaxed sm:text-lg">
                  {renderInlineMarkdown(item)}
                </li>
              ))}
            </ul>
          );
        }

        if (b.type === 'ol') {
          return (
            <ol key={`ol-${idx}`} className="my-6 ml-6 list-decimal space-y-2.5 text-navy-800/85">
              {b.items.map((item, itemIdx) => (
                <li key={itemIdx} className="pl-1 text-base leading-relaxed sm:text-lg">
                  {renderInlineMarkdown(item)}
                </li>
              ))}
            </ol>
          );
        }

        if (b.type === 'quote') {
          return (
            <blockquote
              key={`quote-${idx}`}
              className="my-8 rounded-r-xl border-l-4 border-ocean bg-slate-50 px-6 py-4 italic text-navy-800"
            >
              {renderInlineMarkdown(b.text)}
            </blockquote>
          );
        }

        if (b.type === 'hr') {
          return <hr key={`hr-${idx}`} className="my-10 border-line" />;
        }

        if (b.type === 'p') {
          return (
            <p
              key={`p-${idx}`}
              className="mb-6 text-base leading-relaxed text-navy-800/85 sm:text-lg"
            >
              {renderInlineMarkdown(b.text)}
            </p>
          );
        }

        return null;
      })}
    </>
  );
}

interface PortableTextChild {
  _type?: string;
  _key?: string;
  text?: string;
  marks?: string[];
}

interface PortableTextBlockItem {
  _type?: string;
  _key?: string;
  style?: string;
  children?: PortableTextChild[];
  [key: string]: unknown;
}

function extractRawBlockText(children?: unknown): string {
  if (!Array.isArray(children)) return '';
  return children
    .map((c: unknown) => {
      if (c && typeof c === 'object' && 'text' in c) {
        return (c as PortableTextChild).text || '';
      }
      return '';
    })
    .join('');
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => {
      const rawText = extractRawBlockText(value?.children);
      const heading = rawText || children?.toString() || '';
      const id = slugify(heading);
      return (
        <h2
          id={id}
          className="mt-12 mb-4 scroll-mt-28 text-2xl font-extrabold tracking-tight text-navy-800 sm:text-3xl"
        >
          {rawText ? renderInlineMarkdown(rawText) : children}
        </h2>
      );
    },
    h3: ({ children, value }) => {
      const rawText = extractRawBlockText(value?.children);
      const heading = rawText || children?.toString() || '';
      const id = slugify(heading);
      return (
        <h3
          id={id}
          className="mt-8 mb-3 scroll-mt-28 text-xl font-bold text-navy-800 sm:text-2xl"
        >
          {rawText ? renderInlineMarkdown(rawText) : children}
        </h3>
      );
    },
    normal: ({ value, children }) => {
      const rawText = extractRawBlockText(value?.children);
      return renderMarkdownEnhancedBlock(rawText, children);
    },
    blockquote: ({ children }) => (
      <blockquote className="my-8 rounded-r-xl border-l-4 border-ocean bg-slate-50 px-6 py-4 italic text-navy-800">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-6 ml-6 list-disc space-y-2.5 text-navy-800/85">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="my-6 ml-6 list-decimal space-y-2.5 text-navy-800/85">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children, value }) => {
      const rawText = extractRawBlockText(value?.children);
      return (
        <li className="pl-1 text-base leading-relaxed text-navy-800/85 sm:text-lg">
          {rawText ? renderInlineMarkdown(rawText) : children}
        </li>
      );
    },
    number: ({ children, value }) => {
      const rawText = extractRawBlockText(value?.children);
      return (
        <li className="pl-1 text-base leading-relaxed text-navy-800/85 sm:text-lg">
          {rawText ? renderInlineMarkdown(rawText) : children}
        </li>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const url = urlForImage(value);
      if (!url) return null;
      return (
        <figure className="my-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
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
    markdownTable: ({ value }: { value: { rawTable: string } }) => {
      if (!value?.rawTable) return null;
      const parsed = parseMarkdownDocument(value.rawTable);
      const tbl = parsed.find((p) => p.type === 'table') as ParsedTable | undefined;
      if (!tbl) return null;
      return <MarkdownTableView headers={tbl.headers} rows={tbl.rows} />;
    },
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-navy-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-slate-700">{children}</em>,
    link: ({ value, children }) => {
      const href = value?.href || '';
      const isExternal =
        (href.startsWith('http://') || href.startsWith('https://')) &&
        !href.includes('visionspringagency.com');
      const isWhatsApp = href.includes('wa.me');
      const isInternal = href.startsWith('/') || href.includes('visionspringagency.com');

      if (isInternal) {
        const cleanHref = href.replace(/^https?:\/\/(www\.)?visionspringagency\.com/, '') || '/';
        return (
          <Link
            href={cleanHref}
            className="font-medium text-ocean underline decoration-sky-soft underline-offset-4 transition-colors hover:text-ocean-dark"
          >
            {children}
          </Link>
        );
      }

      return (
        <a
          href={href}
          target={isExternal || isWhatsApp ? '_blank' : undefined}
          rel={isExternal || isWhatsApp ? 'noopener noreferrer' : undefined}
          className="font-medium text-ocean underline decoration-sky-soft underline-offset-4 transition-colors hover:text-ocean-dark"
        >
          {children}
        </a>
      );
    },
  },
};

/**
 * Pre-processes blocks:
 * If a table is split across consecutive individual blocks, merges them into a single `markdownTable` block.
 */
function preprocessPortableText(blocks: unknown): unknown[] {
  if (!Array.isArray(blocks)) return [];

  const result: unknown[] = [];
  let tableAccumulator: string[] = [];

  const flushTable = () => {
    if (tableAccumulator.length >= 2 && tableAccumulator[1].includes('---')) {
      result.push({
        _type: 'markdownTable',
        _key: `tbl-${Math.random().toString(36).substring(2, 9)}`,
        rawTable: tableAccumulator.join('\n'),
      });
      tableAccumulator = [];
      return true;
    }
    // Fallback if not valid table
    for (const line of tableAccumulator) {
      result.push({
        _type: 'block',
        _key: `bk-${Math.random().toString(36).substring(2, 9)}`,
        style: 'normal',
        children: [{ _type: 'span', text: line, marks: [] }],
      });
    }
    tableAccumulator = [];
    return false;
  };

  for (let i = 0; i < blocks.length; i++) {
    const rawBlock = blocks[i] as PortableTextBlockItem | undefined;
    if (rawBlock?._type === 'block') {
      const rawText = extractRawBlockText(rawBlock.children).trim();

      if (rawText.startsWith('|') && rawText.endsWith('|')) {
        tableAccumulator.push(rawText);
        continue;
      } else if (tableAccumulator.length > 0) {
        flushTable();
      }
    } else if (tableAccumulator.length > 0) {
      flushTable();
    }

    result.push(rawBlock);
  }

  if (tableAccumulator.length > 0) {
    flushTable();
  }

  return result;
}

export function PortableTextRenderer({ value }: { value: unknown }) {
  if (!value) return null;

  // If a raw string is passed instead of blocks, render directly
  if (typeof value === 'string') {
    return (
      <div className="prose prose-slate max-w-none">
        {renderMarkdownEnhancedBlock(value, null)}
      </div>
    );
  }

  const preprocessed = preprocessPortableText(value);

  return (
    <div className="prose prose-slate max-w-none">
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <PortableText value={preprocessed as any} components={components} />
    </div>
  );
}
