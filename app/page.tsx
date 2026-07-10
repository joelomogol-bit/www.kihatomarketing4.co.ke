 import { getSupabaseServer } from '@/lib/supabase';
import { DarkSection, CreamSection, Eyebrow } from '@/components/LayoutBlocks';
import LeadMagnet from '@/components/LeadMagnet';
import ContactForm from '@/components/ContactForm';
import { ArrowUpRight, MessageSquare, Mail, Layers, Megaphone, Compass } from 'lucide-react';
import Link from 'next/link';

// Forces the server to evaluate this page dynamically per request, fixing the 'cookies' build crash
export const dynamic = 'force-dynamic';
export const revalidate = 60;

export default async function HomePage() {
  const supabase = getSupabaseServer();

  const [
    { data: settings },
    { data: stats },
    { data: logos },
    { data: services },
    { data: resources },
    { data: posts },
    { data: gallery }
  ] = await Promise.all([
    supabase.from('site_settings').select('*').single(),
    supabase.from('site_stats').select('*').order('sort_order', { ascending: true }),
    supabase.from('logos').select('*').order('sort_order', { ascending: true }),
    supabase.from('services').select('*').order('sort_order', { ascending: true }),
    supabase.from('resources').select('*').order('sort_order', { ascending: true }),
    supabase.from('posts').select('*').order('published_at', { ascending: false }).limit(3),
    supabase.from('gallery_images').select('*').order('sort_order', { ascending: true })
  ]);

  // Updated fallback values with your exact phrasing adjustments
  const fallbackSettings = {
    hero_eyebrow: 'PERSONAL DEVELOPMENT MENTOR · DIGITAL MARKETER · WEBSITE DESIGNER',
    hero_headline: 'Turning complex digital systems into clear direction.',
    hero_subheading: 'I help people navigate human life challenges, deploy high-converting digital marketing systems, and build robust responsive website infrastructure.',
    about_headline: 'From peer teaching to engineering modern human and technical systems.',
    about_body: `When you look online today, it is incredibly easy to burn months drifting through broad concepts without finding a clear, honest blueprint. I chose to break that cycle by diving directly into web infrastructure frameworks, tactical digital marketing layout structures, and personal growth psychology.

Beyond deploying apps, my true focus is mentoring individuals. Having started as a peer teacher, I understand the points of friction encountered when trying to establish real independence. I break down step-by-step systems designed to help you calibrate focus, clear confusion, and build actionable lifestyle and technical habits that stick.`,
    whatsapp_number: '254116628626', 
    phone: '+254116628626',           
    email: 'joelomogol@gmail.com',
    office_address: 'Nairobi, Kenya',
    meetings_note: 'Consultation syncs arranged via message routing only.'
  };

  const currentSettings = settings || fallbackSettings;

  const cleanWhatsappNumber = currentSettings.whatsapp_number.startsWith('0') 
    ? `254${currentSettings.whatsapp_number.slice(1)}` 
    : currentSettings.whatsapp_number;

  return (
    <main className="overflow-x-hidden">
      <DarkSection>
        <div className="pt-12 text-center md:text-left max-w-4xl">
          {/* Updated Hero Tag with your new branding layout */}
          <span className="inline-block text-xs tracking-[0.3em] font-medium uppercase text-brand-orange mb-6">
            {currentSettings.hero_eyebrow}
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-brand-cream leading-[1.05] mb-8">
            {currentSettings.hero_headline}
          </h1>
          <p className="text-brand-mutedLight text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-10">
            {currentSettings.hero_subheading}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-16">
            <a 
              href={`https://wa.me/${cleanWhatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-orange text-brand-cream px-8 py-4 rounded-full font-medium tracking-wide hover:bg-opacity-90 transition flex items-center justify-center gap-2 text-sm"
            >
              <MessageSquare size={16} /> Message me on WhatsApp
            </a>
            <a href="#contact" className="border border-brand-mutedDark text-brand-cream px-8 py-4 rounded-full font-medium tracking-wide hover:bg-brand-mutedDark transition text-sm text-center">
              Book a project
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-12 border-t border-brand-mutedDark max-w-2xl">
            {stats && stats.length > 0 ? stats.map((stat: any) => (
              <div key={stat.id}>
                <div className="font-serif text-3xl md:text-5xl text-brand-orange font-bold mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-brand-mutedLight">{stat.label}</div>
              </div>
            )) : (
              [
                { val: '100%', label: 'Focus Driven' },
                { val: 'ROI', label: 'Marketing Funnels' },
                { val: 'UI/UX', label: 'Clean Code' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="font-serif text-3xl md:text-5xl text-brand-orange font-bold mb-1">{stat.val}</div>
                  <div className="text-xs uppercase tracking-wider text-brand-mutedLight">{stat.label}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </DarkSection>

      <div className="bg-brand-cream py-10 border-b border-brand-mutedLight/20 px-4 md:px-8">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-xs tracking-widest font-semibold uppercase text-brand-mutedLight text-center md:text-left">
            TRUSTED BY TEAMS AND BRANDS I'VE WORKED WITH
          </span>
          <div className="flex flex-wrap gap-8 items-center justify-center">
            {logos && logos.length > 0 ? logos.map((logo: any) => (
              <span key={logo.id} className="font-serif text-lg tracking-wider font-bold text-brand-charcoal opacity-70">
                {logo.name}
              </span>
            )) : (
              ['Samy Hair Stylist', "Perfume O'Clock", 'Apex Media Engine'].map((l, i) => (
                <span key={i} className="font-serif text-sm tracking-widest font-bold uppercase text-brand-charcoal/60">
                  {l}
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      {/* About Me Layout: Text Left, Photo Right */}
      <CreamSection id="about">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7 space-y-6">
            <div>
              <Eyebrow text="ABOUT ME" />
              <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-brand-charcoal leading-[1.1] mb-6">
                {currentSettings.about_headline}
              </h2>
            </div>
            <div className="text-brand-mutedDark font-light leading-relaxed text-base md:text-lg space-y-4">
              <p className="whitespace-pre-line">{currentSettings.about_body}</p>
              {/* Updated signature string layout to show Kihato Kuria explicitly */}
              <div className="font-serif italic font-bold pt-4 text-brand-charcoal text-xl">— Kihato Kuria</div>
              <div className="pt-4">
                <Link href="/about" className="inline-flex items-center gap-1 font-semibold text-brand-orange hover:underline text-sm">
                  Read my full story <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="w-full bg-brand-mutedLight/10 rounded-2xl overflow-hidden border border-brand-mutedLight/30 shadow-sm aspect-[4/5]">
              <img 
                src="/images/joel-about.jpg" 
                alt="Kihato Kuria profile" 
                className="w-full h-full object-cover transition duration-300 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </CreamSection>

      {/* The Services Placement Grid Section */}
      <DarkSection id="services">
        <div className="mb-16">
          <Eyebrow text="SERVICES OFFERED" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-cream">Strategic solutions engineered for impact.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services && services.length > 0 ? services.map((service: any, idx: number) => (
            <div key={service.id} className="border border-brand-mutedDark p-8 rounded-2xl bg-brand-charcoal/40 flex flex-col justify-between hover:border-brand-orange/40 transition group">
              <div>
                <span className="block font-serif text-brand-orange text-xl font-bold mb-4">0{idx + 1}</span>
                <h3 className="font-serif text-xl font-bold text-brand-cream mb-3">{service.title}</h3>
                <p className="text-brand-mutedLight text-sm leading-relaxed mb-6 line-clamp-3">{service.description}</p>
              </div>
              <a href={service.cta_link || '#contact'} className="inline-flex items-center gap-1 text-xs text-brand-orange uppercase font-semibold tracking-wider group-hover:translate-x-1 transition-transform">
                {service.cta_label || 'Inquire Now'} →
              </a>
            </div>
          )) : (
            [
              { 
                t: 'Personal Development & Life Strategy', 
                d: 'One-on-one and group mentoring loops unpacking focus tactics, actionable behavioral changes, and structural mindset habits to clear real-world confusion.',
                icon: <Compass className="text-brand-orange mb-4" size={24} />
              },
              { 
                t: 'Full-Funnel Digital Marketing', 
                d: 'Engineered customer avatar profiling blueprints, targeted ad layout copy frameworks, and structural direct-response funnels designed to convert organic attention into business revenue.',
                icon: <Megaphone className="text-brand-orange mb-4" size={24} />
              },
              { 
                t: 'Responsive Website Architecture', 
                d: 'Building custom, lightning-fast web applications and high-fidelity landing portfolios tailored with clean modern interfaces and dynamic code logic.',
                icon: <Layers className="text-brand-orange mb-4" size={24} />
              }
            ].map((srv, idx) => (
              <div key={idx} className="border border-brand-mutedDark p-8 rounded-2xl bg-brand-charcoal/40 flex flex-col justify-between hover:border-brand-orange/40 transition group">
                <div>
                  {srv.icon}
                  <h3 className="font-serif text-xl font-bold text-brand-cream mb-3">{srv.t}</h3>
                  <p className="text-brand-mutedLight text-sm leading-relaxed mb-6 font-light">{srv.d}</p>
                </div>
                <a href="#contact" className="inline-flex items-center gap-1 text-xs text-brand-orange uppercase font-semibold tracking-wider group-hover:translate-x-1 transition-transform">
                  Secure Consultation →
                </a>
              </div>
            ))
          )}
        </div>
      </DarkSection>

      <CreamSection>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 space-y-4">
            <Eyebrow text="RESOURCES" />
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-charcoal tracking-tight">The Toolkit.</h2>
            <p className="text-brand-mutedDark text-sm md:text-base font-light leading-relaxed">
              Accelerate execution loops with conversion-focused templates and strategic planning roadmaps gathered from active systems.
            </p>
          </div>
          <div className="md:col-span-7">
            <LeadMagnet />
          </div>
        </div>
      </CreamSection>

      <DarkSection>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <Eyebrow text="FROM THE BLOG" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-cream">Ideas worth your time.</h2>
          </div>
          <Link href="/blog" className="text-brand-orange font-semibold hover:underline text-sm inline-flex items-center gap-1">
            Visit the blog <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts && posts.length > 0 ? posts.map((post: any) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block space-y-4">
              <div className="w-full h-48 bg-brand-mutedDark rounded-xl border border-brand-mutedDark overflow-hidden relative" />
              <div className="space-y-2">
                <span className="text-[10px] tracking-widest font-semibold text-brand-orange uppercase">{post.category}</span>
                <h3 className="font-serif text-xl text-brand-cream group-hover:text-brand-orange transition-colors duration-200 line-clamp-2 font-bold">
                  {post.title}
                </h3>
                <p className="text-brand-mutedLight text-xs line-clamp-2 font-light leading-relaxed">{post.excerpt}</p>
              </div>
            </Link>
          )) : (
            <div className="col-span-3 text-center py-8 text-brand-mutedLight text-xs tracking-wider">
              No recent publications available. Editorial schedule launching shortly.
            </div>
          )}
        </div>
      </DarkSection>

      <CreamSection>
        <div className="mb-12 text-center md:text-left">
          <Eyebrow text="IN ACTION" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-charcoal">Behind the work.</h2>
        </div>
        {gallery && gallery.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {gallery.map((img: any) => (
              <div key={img.id} className="aspect-square bg-brand-mutedLight/20 rounded-2xl border border-brand-mutedLight/20 overflow-hidden relative">
                <img src={img.image_url} alt={img.alt_text} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-brand-charcoal/5 text-brand-mutedLight text-sm p-12 text-center rounded-2xl border border-dashed border-brand-mutedLight/30">
            Photos coming soon. Dashboard uploads currently indexing.
          </div>
        )}
      </CreamSection>

      <DarkSection id="contact">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-6">
            <div>
              <Eyebrow text="GET IN TOUCH" />
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-cream tracking-tight">Let's build something.</h2>
            </div>
            <p className="text-brand-mutedLight font-light text-sm md:text-base leading-relaxed">
              Have a problem to solve, an interactive app to engineer, or a community assembly scheduling down details? Submit a strategy brief.
            </p>
            <div className="space-y-4 pt-6 text-sm text-brand-mutedLight">
              <div className="flex items-center gap-3">
                <MessageSquare size={16} className="text-brand-orange" />
                <span>WhatsApp Connection Active</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-brand-orange" />
                <span>{currentSettings.email}</span>
              </div>
              <div className="text-xs text-brand-orange italic font-medium pt-4">{currentSettings.meetings_note}</div>
            </div>
          </div>
          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </DarkSection>
    </main>
  );
}
