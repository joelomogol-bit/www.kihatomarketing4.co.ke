 import React from 'react';
import Link from 'next/link';
import { MessageSquare, Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-[#0A1128] text-white min-h-screen font-sans selection:bg-[#0088CC]">
      
      {/* SECTION 1: HERO CONTAINER */}
      <section className="max-w-[1200px] mx-auto pt-16 pb-20 px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="block text-xs font-semibold tracking-[0.2em] uppercase text-[#0088CC] mb-6">
            CONTACT
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-8">
            Let's talk<span className="text-[#0088CC]">.</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-lg mb-10">
            Quick and easy. Reach me directly on WhatsApp, give me a call, or send an email. No corporate bottlenecks, no waiting rooms. The fastest way to kickstart your project is right below.
          </p>
          
          {/* Direct Quick Action Button Row */}
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://wa.me/254116628626"
              className="bg-[#0088CC] hover:bg-[#0077B3] text-white font-medium text-sm px-6 py-3.5 rounded-xl transition inline-flex items-center gap-2"
            >
              <MessageSquare size={16} />
              <span>Chat on WhatsApp</span>
            </a>
            <a 
              href="tel:0116628626"
              className="border border-white/20 hover:border-white/40 text-white font-medium text-sm px-6 py-3.5 rounded-xl transition inline-flex items-center gap-2"
            >
              <Phone size={16} />
              <span>Call Joe</span>
            </a>
            <a 
              href="mailto:hello@kihatomarketing.co.ke"
              className="border border-white/20 hover:border-white/40 text-white font-medium text-sm px-6 py-3.5 rounded-xl transition inline-flex items-center gap-2"
            >
              <Mail size={16} />
              <span>Email me</span>
            </a>
          </div>
        </div>

        {/* Hero Banner Image Box */}
        <div className="relative w-full aspect-[4/5] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
          <img 
            src="/images/contact-hero.jpg" 
            alt="Joe Kihato - Marketing Strategist" 
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
            <span className="text-xs uppercase tracking-widest text-[#0088CC] font-bold mb-1">Available for Contracts</span>
            <p className="text-sm text-white/60">Ruiru, Nairobi, Kenya Hub</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: GRID CONTACT CHANNELS */}
      <section className="bg-[#070B19] py-20 px-4 md:px-8 border-y border-white/5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 - WhatsApp */}
          <div className="bg-[#0A1128] p-8 rounded-2xl border border-white/5 flex flex-col justify-between min-h-[260px]">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#0088CC]/10 flex items-center justify-center text-[#0088CC] mb-6">
                <MessageSquare size={20} />
              </div>
              <h3 className="text-lg font-bold font-serif mb-2">WhatsApp</h3>
              <p className="text-2xl font-bold tracking-tight mb-4 text-white">0116628626</p>
              <p className="text-sm text-white/50 leading-relaxed">
                The quickest way to reach me. Drop a message any time and I'll get back to you, usually the same hour.
              </p>
            </div>
            <a href="https://wa.me/254116628626" className="mt-8 bg-[#0088CC] hover:bg-[#0077B3] text-center text-sm font-medium py-3 rounded-xl transition block">
              Chat on WhatsApp
            </a>
          </div>

          {/* Card 2 - Direct Line */}
          <div className="bg-[#0A1128] p-8 rounded-2xl border border-white/5 flex flex-col justify-between min-h-[260px]">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#0088CC]/10 flex items-center justify-center text-[#0088CC] mb-6">
                <Phone size={20} />
              </div>
              <h3 className="text-lg font-bold font-serif mb-2">Call Direct</h3>
              <p className="text-2xl font-bold tracking-tight mb-4 text-white">0116628626</p>
              <p className="text-sm text-white/50 leading-relaxed">
                Prefer to talk things out? Call me directly. Best for quick consultation bookings and immediate requirements discovery.
              </p>
            </div>
            <a href="tel:0116628626" className="mt-8 bg-[#0088CC] hover:bg-[#0077B3] text-center text-sm font-medium py-3 rounded-xl transition block">
              Call Joe
            </a>
          </div>

          {/* Card 3 - Email Inbox */}
          <div className="bg-[#0A1128] p-8 rounded-2xl border border-white/5 flex flex-col justify-between min-h-[260px]">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#0088CC]/10 flex items-center justify-center text-[#0088CC] mb-6">
                <Mail size={20} />
              </div>
              <h3 className="text-lg font-bold font-serif mb-2">Email</h3>
              <p className="text-xl font-bold tracking-tight mb-4 text-white break-all">hello@kihatomarketing.co.ke</p>
              <p className="text-sm text-white/50 leading-relaxed">
                Best for technical project proposals, data specifications, and long-form consulting briefs. I read everything.
              </p>
            </div>
            <a href="mailto:hello@kihatomarketing.co.ke" className="mt-8 bg-[#0088CC] hover:bg-[#0077B3] text-center text-sm font-medium py-3 rounded-xl transition block">
              Send an email
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 3: PHYSICAL OFFICE META & EMBEDDED MAP LOCATOR */}
      <section className="max-w-[1200px] mx-auto py-24 px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <span className="block text-xs font-semibold tracking-[0.2em] uppercase text-[#0088CC] mb-6">
            THE OFFICE
          </span>
          <h2 className="font-serif text-4xl font-bold tracking-tight mb-8">
            Find me in Nairobi<span className="text-[#0088CC]">.</span>
          </h2>

          <div className="border-t border-white/10 divide-y divide-white/10 text-sm mb-8">
            <div className="py-4 grid grid-cols-3">
              <span className="text-xs uppercase tracking-wider text-[#0088CC] font-bold">BUILDING</span>
              <span className="col-span-2 text-white/80">Kenyatta University Hub, Main Campus</span>
            </div>
            <div className="py-4 grid grid-cols-3">
              <span className="text-xs uppercase tracking-wider text-[#0088CC] font-bold">AREA</span>
              <span className="col-span-2 text-white/80">Ruiru / Thika Road, Nairobi</span>
            </div>
            <div className="py-4 grid grid-cols-3">
              <span className="text-xs uppercase tracking-wider text-[#0088CC] font-bold">SUITE</span>
              <span className="col-span-2 text-white/80">3rd Floor, Innovation & Tech Wing</span>
            </div>
            <div className="py-4 grid grid-cols-3">
              <span className="text-xs uppercase tracking-wider text-[#0088CC] font-bold">ON ARRIVAL</span>
              <span className="col-span-2 text-white/80">Ask for Joe Kihato at the reception lobby</span>
            </div>
          </div>

          <p className="text-xs text-white/50 italic mb-6">
            Meetings by appointment only. Message me first on WhatsApp to set a time.
          </p>

          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="border border-white/20 hover:bg-white/5 text-white text-xs font-medium tracking-wide px-5 py-3 rounded-lg transition inline-flex items-center gap-2"
          >
            <MapPin size={14} />
            <span>Get directions</span>
          </a>
        </div>

        <div className="lg:col-span-7 bg-[#070B19] border border-white/10 rounded-2xl overflow-hidden aspect-video relative shadow-xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.023258529323!2d36.9248455!3d-1.1764687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f6280436cf3%3A0x600100f9eb11c471!2sKenyatta%20University!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske" 
            className="w-full h-full border-0 grayscale opacity-80 contrast-125 invert" 
            allowFullScreen={false} 
            loading="lazy"
          />
        </div>
      </section>

      {/* SECTION 4: SOCIAL DISTRIBUTION FOOTPRINT ROW */}
      <section className="bg-[#070B19] py-20 px-4 md:px-8 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto">
          <span className="block text-xs font-semibold tracking-[0.2em] uppercase text-[#0088CC] mb-6">
            FOLLOW ALONG
          </span>
          <h2 className="font-serif text-4xl font-bold tracking-tight mb-4">
            Where I post, daily.
          </h2>
          <p className="text-white/60 text-base mb-10 max-w-xl">
            Join thousands of growth-minded creators across multiple platforms. Come for the marketing strategies, stay for the engineering execution.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {[
              { name: 'LinkedIn', handle: '@joekihato' },
              { name: 'TikTok', handle: '@joekihato_mktg' },
              { name: 'Instagram', handle: '@joekihato.mktg' },
              { name: 'Facebook', handle: 'joe.kihato' },
              { name: 'YouTube', handle: '@joekihatomarketing' }
            ].map((social) => (
              <a 
                key={social.name} 
                href="#" 
                className="bg-[#0A1128] p-6 rounded-xl border border-white/5 hover:border-[#0088CC]/40 transition text-center group"
              >
                <p className="font-bold text-white group-hover:text-[#0088CC] transition-colors mb-1">{social.name}</p>
                <p className="text-xs text-white/40">{social.handle}</p>
              </a>
            ))}
          </div>

          <div className="bg-[#0A1128] border border-white/5 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70">
              All my direct communication runs through <span className="text-[#0088CC] font-semibold">WhatsApp</span> and <span className="text-[#0088CC] font-semibold">email</span>. For the quickest setup, WhatsApp wins every time.
            </p>
            <a href="https://wa.me/254116628626" className="bg-[#0088CC] hover:bg-[#0077B3] text-white text-xs font-semibold px-6 py-3 rounded-xl whitespace-nowrap transition">
              Message me now
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 5: COMPREHENSIVE COMPACT ROOT FOOTER */}
      <footer className="bg-[#050814] py-16 px-4 md:px-8 text-sm text-white/60">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          
          <div className="md:col-span-4">
            <h3 className="font-serif text-xl font-bold text-white mb-4">Joe Kihato<span className="text-[#0088CC]">.</span></h3>
            <p className="leading-relaxed mb-6 max-w-xs text-white/50">
              Attention is the new currency. I build high-converting digital architecture and content engines for modern brands.
            </p>
            <div className="flex flex-wrap gap-2">
              {['LinkedIn', 'TikTok', 'Instagram', 'Facebook', 'YouTube'].map(s => (
                <a key={s} href="#" className="text-xs bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full transition">{s}</a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">EXPLORE</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/#about" className="hover:text-white transition-colors">About</Link>
              <Link href="/#video-editing" className="hover:text-white transition-colors">Video Editing</Link>
              <Link href="/#social-media-marketing" className="hover:text-white transition-colors">Social Media Marketing</Link>
              <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">SERVICES</h4>
            <div className="flex flex-col gap-2.5 text-white/50">
              <span>Funnel Strategy</span>
              <span>Copywriting</span>
              <span>Video Editing</span>
              <span>Web Development</span>
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">GET IN TOUCH</h4>
            <div className="flex flex-col gap-4">
              <div>
                <span className="block text-[10px] uppercase font-bold text-[#0088CC]">WHATSAPP</span>
                <a href="https://wa.me/254116628626" className="text-white hover:underline">0116628626</a>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-[#0088CC]">CALL DIRECT</span>
                <a href="tel:0116628626" className="text-white hover:underline">0116628626</a>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-[#0088CC]">EMAIL</span>
                <a href="mailto:hello@kihatomarketing.co.ke" className="text-white hover:underline break-all">hello@kihatomarketing.co.ke</a>
              </div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-[#0088CC]">OFFICE MAP</span>
                <p className="text-white/70 text-xs">Kenyatta University Hub, Main Campus, Ruiru, Nairobi, Kenya</p>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-[1200px] mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between text-xs text-white/30 gap-4">
          <p>&copy; {new Date().getFullYear()} Joe Kihato Marketing. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
