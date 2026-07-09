 'use strict';
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#0A1128] border-b border-white/5 sticky top-0 z-50 text-white">
      {/* Top Utilities - Hidden on small mobile screens to save space */}
      <div className="hidden sm:flex max-w-[1200px] mx-auto justify-between items-center py-2 px-4 md:px-8 text-xs text-white/60 border-b border-white/5">
        <div className="flex gap-4">
          <a href="tel:0116628626" className="hover:text-white transition">0116628626</a>
          <a href="mailto:hello@kihatomarketing.co.ke" className="hover:text-white transition">hello@kihatomarketing.co.ke</a>
        </div>
        <div className="flex gap-3">
          {['LinkedIn', 'TikTok', 'Instagram'].map((s) => (
            <a key={s} href="#" className="hover:text-white transition">{s}</a>
          ))}
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-[1200px] mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        {/* Brand Logo */}
        <Link href="/" className="group">
          <span className="font-serif text-xl font-bold tracking-tight block text-white">
            Joe Kihato<span className="text-[#0088CC]">.</span>
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 block -mt-1 group-hover:text-[#0088CC] transition">
            Marketing
          </span>
        </Link>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/#about" className="hover:text-white transition">About</Link>
          <Link href="/#services" className="hover:text-white transition">Services</Link>
          <Link href="/contact" className="hover:text-white transition text-[#0088CC]">Contact</Link>
          
          <a 
            href="https://wa.me/254116628626"
            className="bg-[#0088CC] hover:bg-[#0077B3] text-xs font-semibold px-4 py-2.5 rounded-xl transition flex items-center gap-2"
          >
            <MessageSquare size={14} />
            <span>Chat</span>
          </a>
        </div>

        {/* Mobile Toggle Button (Visible ONLY on Mobile) */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-white/80 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-[#0A1128] border-b border-white/10 px-4 pt-2 pb-6 space-y-4 animate-fadeIn">
          <div className="flex flex-col gap-4 text-base font-medium">
            <Link href="/" onClick={toggleMenu} className="p-2 border-b border-white/5 hover:text-[#0088CC]">Home</Link>
            <Link href="/#about" onClick={toggleMenu} className="p-2 border-b border-white/5 hover:text-[#0088CC]">About</Link>
            <Link href="/#services" onClick={toggleMenu} className="p-2 border-b border-white/5 hover:text-[#0088CC]">Services</Link>
            <Link href="/contact" onClick={toggleMenu} className="p-2 border-b border-white/5 text-[#0088CC]">Contact</Link>
          </div>

          <a 
            href="https://wa.me/254116628626"
            className="w-full bg-[#0088CC] text-center font-medium py-3 rounded-xl transition flex items-center justify-center gap-2 text-sm"
          >
            <MessageSquare size={16} />
            <span>Message me on WhatsApp</span>
          </a>
        </div>
      )}
    </nav>
  );
}
