import React from 'react';
import { TriangleAlertIcon } from 'lucide-react';
import type { LegalDocumentContent } from '../types/content';
import { legalReviewNotice } from '../data/legal';
import { PageHero } from './PageHero';

export function LegalDocument({ doc }: {doc: LegalDocumentContent;}) {
  return (
    <>
      <PageHero breadcrumbs={[{ label: 'Home', to: '/' }, { label: doc.title }]} title={doc.title} description={doc.intro} />
      <section className="py-16 sm:py-20">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <nav aria-label="On this page" className="lg:sticky lg:top-28">
              <p className="text-sm font-semibold text-navy-800">On this page</p>
              <ol className="mt-4 space-y-2 border-l border-line">
                {doc.sections.map((s) =>
                <li key={s.id}>
                    <a href={`#${s.id}`} className="-ml-px block border-l-2 border-transparent pl-4 text-sm text-muted transition-colors duration-150 hover:border-ocean hover:text-navy-800">
                      {s.heading}
                    </a>
                  </li>
                )}
              </ol>
            </nav>
          </aside>
          <div className="lg:col-span-8">
            <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900" role="note">
              <TriangleAlertIcon className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              <p>{legalReviewNotice}</p>
            </div>
            <div className="mt-10 space-y-12">
              {doc.sections.map((s) =>
              <section key={s.id} id={s.id} className="scroll-mt-28">
                  <h2 className="text-2xl font-extrabold text-navy-800">{s.heading}</h2>
                  {s.paragraphs.map((p) =>
                <p key={p} className="mt-4 text-base leading-[1.8] text-muted">
                      {p}
                    </p>
                )}
                </section>
              )}
            </div>
          </div>
        </div>
      </section>
    </>);

}