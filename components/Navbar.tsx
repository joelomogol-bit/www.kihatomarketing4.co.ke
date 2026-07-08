import Link from 'next/link';
import { Phone, Mail, MessageSquare } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50">
      {/* 1. TOP MINI-BAR */}
      <div className="bg-[#121212] text-white/80 border-b border-white/5 text-xs py-2 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Contact Links */}
          <div className="flex items-center gap-6">
            <a href="tel:0758991116" className="flex items-center gap-1.5 hover:text-brand-orange transition-colors">
              <Phone size={12} />
              <span>0758 991 116</span>
            </a>
            <a href="mailto:hello@elvisw.online" className="flex items-center gap-1.5 hover:text-brand-orange transition-colors">
              <Mail size={12} />
              <span>hello@elvisw.online</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider font-medium text-white/60">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">TikTok</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <div className="bg-[#221F1D] text-white py-4 px-4 md:px-8 shadow-md">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl font-bold tracking-tight">
            Elvis W<span className="text-brand-orange">.</span>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-white/80">
            <Link href="/" className="text-white border-b-2 border-brand-orange pb-1 font-semibold">
              Home
            </Link>
            <Link href="#about" className="hover:text-white transition-colors pb-1">
              About
            </Link>
            <Link href="#masterclasses" className="hover:text-white transition-colors pb-1">
              Masterclasses
            </Link>
            <Link href="#speaking" className="hover:text-white transition-colors pb-1">
              Speaking
            </Link>
            <Link href="/blog" className="hover:text-white transition-colors pb-1">
              Blog
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors pb-1">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div>
            <a 
              href="https://wa.me/254116628626" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-brand-orange text-white text-xs md:text-sm font-semibold tracking-wide px-5 py-2.5 rounded-xl hover:bg-opacity-90 transition inline-flex items-center gap-1.5"
            >
              <MessageSquare size={14} />
              Message me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
