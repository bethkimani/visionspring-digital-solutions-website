import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
  action?: React.ReactNode;
  as?: 'h1' | 'h2';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  action,
  as = 'h2'
}: SectionHeadingProps) {
  const Heading = as;
  const centered = align === 'center';
  return (
    <div
      className={`flex flex-col gap-6 ${centered ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between'}`}>
      
      <div className={centered ? 'max-w-2xl' : 'max-w-2xl'}>
        {eyebrow &&
        <p className={`mb-3 text-sm font-semibold ${tone === 'dark' ? 'text-growth-dark' : 'text-growth-light'}`}>
            {eyebrow}
          </p>
        }
        <Heading
          className={`text-3xl font-extrabold leading-[1.1] sm:text-4xl ${tone === 'dark' ? 'text-navy-800' : 'text-white'}`}>
          
          {title}
        </Heading>
        {description &&
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${tone === 'dark' ? 'text-muted' : 'text-white/70'}`}>
            {description}
          </p>
        }
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>);

}