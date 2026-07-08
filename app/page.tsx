 import { getSupabaseServer } from '@/lib/supabase';
import { DarkSection, CreamSection, Eyebrow } from '@/components/LayoutBlocks';
import LeadMagnet from '@/components/LeadMagnet';
import ContactForm from '@/components/ContactForm';
import { ArrowUpRight, MessageSquare, Mail, Layers } from 'lucide-react';
import Link from 'next/link';

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

  const fallbackSettings = {
    hero_eyebrow: 'SOCIAL MEDIA MARKETER · WEB DEVELOPER · VIDEO EDITOR',
    hero_headline: 'Attention is the new currency.',
    hero_subheading: 'I build high-converting digital infrastructure and content engines for modern brands.',
    about_headline: 'Crafting digital leverage.',
    about_body: 'Story text here...',
    whatsapp_number: '254116628626', // Updated: Formatted fallback with Kenya routing prefix
    phone: '+254116628626',           // Updated: Formatted phone line fallback
    email: 'hello@example.com',
    office_address: 'Remote / New York',
    meetings_note: 'Meetings by appointment only.'
  };

  const currentSettings = settings || fallbackSettings;

  // Formatting utility to ensure standard phone syntax doesn't break the wa.me routing URL template
  const cleanWhatsappNumber = currentSettings.whatsapp_number.startsWith('0') 
    ? `254${currentSettings.whatsapp_number.slice(1)}` 
    : currentSettings.whatsapp_number;

  return (
    <main className="overflow-x-hidden">
      <DarkSection>
        <div className="pt-12 text-center md:text-left max-w-4xl">
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
              href={`https://wa.me/${cleanWhatsappNumber}`} // Fixed: Uses the cleaned up routing parameter variable
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
              ['0+', '0', '0'].map((val, i) => (
                <div key={i}>
                  <div className="font-serif text-3xl md:text-5xl text-brand-orange font-bold mb-1">{val}</div>
                  <div className="text-xs uppercase tracking-wider text-brand-mutedLight">Metric Placeholder</div>
                </div>
              ))
            )}
          </div>
        </div>
      </DarkSection>

      <div className="bg-brand-charcoal px-4 md:px-8">
        <div className="max-w-[1100px] mx-auto">
          <div className="w-full h-[300px] md:h-[500px] bg-brand-mutedDark rounded-2xl flex items-center justify-center border border-brand-mutedDark text-brand-mutedLight overflow-hidden relative">
            <span className="text-sm uppercase tracking-widest italic">[ High-Fidelity Hero Image Asset ]</span>
          </div>
        </div>
      </div>

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
              ['Brand Alpha', 'Vanguard Co', 'Apex Media'].map((l, i) => (
                <span key={i} className="font-serif text-sm tracking-widest font-bold uppercase text-brand-mutedLight/60">
                  {l}
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      <CreamSection id="about">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Eyebrow text="ABOUT ME" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-brand-charcoal leading-[1.1]">
              {currentSettings.about_headline}
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-brand-mutedDark font-light leading-relaxed text-base md:text-lg">
            <p className="whitespace-pre-line">{currentSettings.about_body}</p>
            <div className="font-serif italic font-bold pt-4 text-brand-charcoal text-xl">— Premium Strategy Specialist</div>
            <div className="pt-6">
              <Link href="/about" className="inline-flex items-center gap-1 font-semibold text-brand-orange hover:underline text-sm">
                Read my full story <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </CreamSection>

      <DarkSection>
        <div className="mb-16">
          <Eyebrow text="WHAT I DO" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-cream">Six ways I can help you grow.</h2>
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
                {service.cta_label || 'Learn more'} →
              </a>
            </div>
          )) : (
            <div className="col-span-3 text-center py-12 text-brand-mutedLight text-sm border border-dashed border-brand-mutedDark rounded-xl">
              Dashboard UI: Configuration metrics missing. Populating services array recommended.
            </div>
          )}
        </div>
      </DarkSection>

      <CreamSection>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 space-y-4">
            <Eyebrow text="RESOURCES" />
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-charcoal tracking-tight">The Toolkit.</h2>
            <p className="text-brand-mutedDark text-sm md:text-base font-light leading-relaxed">
              Accelerate execution loops with system blueprints gathered from active production architectures.
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
              Have a problem to solve or an ecosystem to engineer? Drop a dynamic briefing to sync schedules.
            </p>
            <div className="space-y-4 pt-6 text-sm text-brand-mutedLight">
              <div className="flex items-center gap-3">
                <MessageSquare size={16} className="text-brand-orange" />
                <span>WhatsApp Deep-link Enabled</span>
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
