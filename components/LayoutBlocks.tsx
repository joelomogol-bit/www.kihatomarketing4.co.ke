import React from 'react';

export function DarkSection({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="bg-brand-charcoal text-brand-cream py-20 md:py-28 px-4 md:px-8 border-b border-brand-mutedDark">
      <div className="max-w-[1100px] mx-auto w-full">
        {children}
      </div>
    </section>
  );
}

export function CreamSection({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="bg-brand-cream text-brand-charcoal py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto w-full">
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({ text }: { text: string }) {
  return (
    <span className="block text-xs font-sans tracking-[0.25em] uppercase text-brand-orange mb-4 font-semibold">
      {text}
    </span>
  );
}
