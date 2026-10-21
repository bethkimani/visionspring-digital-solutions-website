import React from 'react';
import { reasons, processSteps } from '../../data/home';
import { Reveal } from '../Reveal';

export function HomeWhyProcess() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-site grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="mb-4 text-sm font-semibold text-growth-dark">Why VisionSpring</p>
            <h2 className="text-3xl font-extrabold leading-[1.1] text-navy-800 sm:text-4xl">A digital partner that puts your goals first</h2>
          </Reveal>
          <ul className="mt-10 divide-y divide-line border-t border-line">
            {reasons.map((r, i) =>
            <li key={r.title} className="py-5">
                <Reveal delay={Math.min(i * 0.04, 0.2)}>
                  <h3 className="text-lg font-bold text-navy-800">{r.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{r.text}</p>
                </Reveal>
              </li>
            )}
          </ul>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal>
            <div className="rounded-[2rem] bg-mist p-8 sm:p-10">
              <p className="mb-4 text-sm font-semibold text-growth-dark">How we work</p>
              <h2 className="text-2xl font-extrabold text-navy-800 sm:text-3xl">Four clear steps from idea to launch</h2>
              <ol className="relative mt-10 space-y-8">
                <span className="absolute bottom-3 left-[19px] top-3 w-px bg-line" aria-hidden="true" />
                {processSteps.map((s, i) =>
                <li key={s.title} className="relative flex gap-5">
                    <span className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-sm font-extrabold ${i === processSteps.length - 1 ? 'bg-growth-dark text-white' : 'bg-navy-800 text-white'}`}>
                      {i + 1}
                    </span>
                    <div className="pt-1.5">
                      <h3 className="font-bold text-navy-800">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{s.text}</p>
                    </div>
                  </li>
                )}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}