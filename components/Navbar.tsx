import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 font-sans">
      {/* 1. TOP MINI-BAR */}
      <div className="bg-[#070B19] text-white/60 border-b border-white/5 text-xs py-2 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Contact Links */}
          <div className="flex items-center gap-6">
            <a href="tel:0116628626" className="flex items-center gap-1.5 hover:text-[#0088CC] transition-colors">
              <Phone size={12} />
              <span>0116628626</span>
            </a>
            <a href="mailto:hello@kihatomarketing.co.ke" className="flex items-center gap-1.5 hover:text-[#0088CC] transition-colors">
              <Mail size={12} />
              <span>hello@kihatomarketing.co.ke</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-[11px] font-medium text-white/50">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">TikTok</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <div className="bg-[#0A1128] text-white py-5 px-4 md:px-8 border-b border-white/5">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          {/* Logo - Joe Kihato Marketing */}
          <Link href="/" className="font-serif text-xl md:text-2xl font-bold tracking-tight">
            Joe Kihato<span className="text-sm font-sans font-normal tracking-wide text-white/60 block md:inline md:ml-2">Marketing</span>
          </Link>

          {/* Custom Nav Links matching your request */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] text-white/70">
            <Link href="/" className="text-white font-medium hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="#video-editing" className="hover:text-white transition-colors">
              Video Editing
            </Link>
            <Link href="#social-media-marketing" className="hover:text-white transition-colors">
              Social Media Marketing
            </Link>
            <Link href="#services" className="hover:text-white transition-colors">
              Services
            </Link>
          </nav>

          {/* CTA Button */}
          <div>
            <a 
              href="https://wa.me/254116628626" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#0088CC] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#0077B3] transition-all duration-150"
            >
              Message me on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
