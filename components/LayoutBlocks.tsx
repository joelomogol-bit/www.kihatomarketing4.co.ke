 import React from 'react';

export function DarkSection({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    // Updated: Changed border color to subtle light slate to blend with the light blue aesthetic
    <section id={id} className="bg-brand-charcoal text-brand-cream py-20 md:py-28 px-4 md:px-8 border-b border-brand-mutedLight/10">
      <div className="max-w-[1100px] mx-auto w-full">
        {children}
      </div>
    </section>
  );
}

export function CreamSection({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    // Clean: This will now elegantly render your #E0F2FE light blue with sharp slate text
    <section id={id} className="bg-brand-cream text-brand-charcoal py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto w-full">
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({ text }: { text: string }) {
  return (
    // Clean: Uses your deep sky blue accent color for section headings
    <span className="block text-xs font-sans tracking-[0.25em] uppercase text-brand-orange mb-4 font-semibold">
      {text}
    </span>
  );
}
