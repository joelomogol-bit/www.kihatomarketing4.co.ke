import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Premium Brand Engine Portfolio',
  description: 'High performance digital solutions for creators and companies.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;1,9..144,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-brand-charcoal text-brand-cream selection:bg-brand-orange selection:text-brand-cream antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
