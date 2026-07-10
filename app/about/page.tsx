import { DarkSection, CreamSection, Eyebrow } from '@/components/LayoutBlocks';
import { ArrowLeft, MessageSquare, Heart } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden bg-brand-cream min-h-screen">
      {/* Header Banner */}
      <div className="bg-brand-charcoal py-12 px-4 md:px-8 border-b border-brand-mutedDark">
        <div className="max-w-3xl mx-auto flex flex-col space-y-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-brand-orange hover:text-brand-cream transition w-fit"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-brand-cream tracking-tight">
            My Story
          </h1>
          <p className="text-brand-orange text-xs md:text-sm tracking-[0.2em] uppercase font-semibold">
            Kuria Kihato · Digital Mentor · Web Designer · Direct Copywriter
          </p>
        </div>
      </div>

      {/* Main Narrative Content */}
      <CreamSection>
        <div className="max-w-3xl mx-auto space-y-12 text-brand-charcoal">
          
          {/* Section 1: Where It Started */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-charcoal border-b border-brand-mutedLight/30 pb-2">
              Where It Started
            </h2>
            <div className="text-brand-mutedDark font-light leading-relaxed space-y-4 text-base md:text-lg">
              <p>
                I finished high school in 2024 with an A- in KCSE. On paper, things looked good. But when 2025 began, reality hit fast.
              </p>
              <p>
                I went back to my former school, Kigumo Bendera, and worked as a peer teacher. It was my first job - my first time earning my own money. That single change opened my eyes to rent, food, responsibilities, everything that comes with real independence.
              </p>
              <p>
                University was coming next, and I knew one thing for sure: I didn't want to be a burden. I wanted to carry myself, and if possible, help at home instead of adding to the pressure.
              </p>
              <p className="font-medium text-brand-charcoal italic">
                So I started asking myself two questions:
              </p>
              <blockquote className="border-l-2 border-brand-orange pl-4 my-2 italic text-brand-mutedDark">
                "How will I make money while in school?" <br />
                "What skill can I learn that can actually change my life?"
              </blockquote>
              <p>
                That question is what pushed me online - and by God's favour, I found a YouTuber named Tyson 4D. That's where I first heard about copywriting: the idea that words alone can persuade, influence, and make people buy. It shocked me. I never knew writing could be a skill that pays.
              </p>
              <p>
                I got curious. I kept watching. I started practicing - badly at first, but a little better each time. That curiosity is where my journey began, and I'm still building it every day.
              </p>
            </div>
          </section>

          {/* Section 2: The Turning Point */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-charcoal border-b border-brand-mutedLight/30 pb-2">
              The Turning Point
            </h2>
            <div className="text-brand-mutedDark font-light leading-relaxed space-y-4 text-base md:text-lg">
              <p>
                I was terrible at saving. Every time I got paid, the money disappeared. With university on the way, I knew that lifestyle wasn't sustainable.
              </p>
              <p>
                So I told myself: instead of struggling to save what I don't have, let me learn a skill that can actually make me money.
              </p>
              <p>
                I found Tyson 4D's video on copywriting, and something clicked. Around the same time, I was also being pushed by something deeper—a fear of insecurity. I had seen people struggle with the basics. I had seen families under real pressure. I didn't want to depend on anyone to survive, and I wanted the freedom that comes from earning your own way.
              </p>
              <p>
                My cousin was a big part of this too. He paid my rent. He paid my school fees. He did it all through mastering digital skills, without ever complaining. I admired that independence, and I wanted to build the same for myself.
              </p>
              <p className="font-serif text-xl italic text-brand-charcoal pt-2">
                That was the moment I chose copywriting - and everything started from there.
              </p>
            </div>
          </section>

          {/* Section 3: The Struggles */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-charcoal border-b border-brand-mutedLight/30 pb-2">
              The Struggles
            </h2>
            <div className="text-brand-mutedDark font-light leading-relaxed space-y-4 text-base md:text-lg">
              <p>
                Nothing about this has been smooth. Most of my biggest challenges came from myself.
              </p>
              <p>
                <strong className="text-brand-charcoal font-semibold">Inconsistency</strong> was the first one. Football used to take up almost all my free time in high school, and old habits kept pulling me back even after I started copywriting. I lost hours, days, sometimes weeks to it.
              </p>
              <p>
                <strong className="text-brand-charcoal font-semibold">No mentor</strong> was the second. Nobody to guide me, correct my mistakes, or point me the right way. I had to figure most things out alone, and that cost me months.
              </p>
              <p>
                <strong className="text-brand-charcoal font-semibold">People doubting me</strong> was another. Some said copywriting wasn't real, that it wouldn't work, and laughed because I wasn't earning yet. I kept believing anyway—I believe God guides steps, not comfort zones.
              </p>
              <p>
                And then there's <strong className="text-brand-charcoal font-semibold">balance</strong>. I'm now in my second month at Kenyatta University, studying Computer Science. Between CATs, lectures, and assignments, some days are exhausting, and some days I don't know what to focus on first. But I'm learning, slowly, how to manage it.
              </p>
              <p className="italic font-medium text-brand-orange">
                These struggles didn't stop me. They shaped me.
              </p>
            </div>
          </section>

          {/* Section 4: What I've Discovered */}
          <section className="space-y-4 bg-brand-charcoal/5 p-6 md:p-8 rounded-2xl border border-brand-mutedLight/40">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-charcoal mb-4">
              What I've Discovered
            </h2>
            <p className="text-brand-mutedDark text-sm md:text-base italic mb-4">
              Even without clients yet, I've learned things that matter more than money right now:
            </p>
            <ul className="space-y-4 text-brand-mutedDark font-light text-base">
              <li className="flex items-start gap-2">
                <span className="text-brand-orange mt-1.5">&#9642;</span>
                <span><strong className="text-brand-charcoal font-semibold">Control what you can control.</strong> Life is unpredictable, so I focus on doing my best today instead of stressing about tomorrow.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange mt-1.5">&#9642;</span>
                <span><strong className="text-brand-charcoal font-semibold">Master yourself first.</strong> I had to face my own habits - wasted time, distractions, and moments where I pushed so hard I forgot my relationship with God. Now I'm learning to balance the hustle with my faith.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange mt-1.5">&#9642;</span>
                <span><strong className="text-brand-charcoal font-semibold">Focus on one thing.</strong> I once wanted to learn everything - copywriting, content creation, editing. That was just confusion. Now I've committed fully to copywriting.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange mt-1.5">&#9642;</span>
                <span><strong className="text-brand-charcoal font-semibold">Stay positive and keep going.</strong> Progress is slow, but consistency and faith are opening doors.</span>
              </li>
            </ul>
          </section>

          {/* Section 5: Small Wins So Far */}
          <section className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-charcoal border-b border-brand-mutedLight/30 pb-2">
              Small Wins So Far
            </h2>
            <ul className="space-y-3 text-brand-mutedDark font-light text-base md:text-lg">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                <span>I write better and with more structure—I know how to build an email and approach a sales page with a repeatable system.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                <span>I've started an actual portfolio, keeping and organizing my work for future clients.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                <span>I manage my time better than before, and I can feel the discipline paying off.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                <span>I feel a sense of peace and hope—not because everything is perfect, but because I'm growing.</span>
              </li>
            </ul>
          </section>

          {/* Section 6: My Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <section className="space-y-3 border border-brand-mutedLight/40 p-6 rounded-xl bg-brand-cream shadow-sm">
              <h3 className="font-serif text-xl font-bold text-brand-charcoal flex items-center gap-2">
                <MessageSquare size={18} className="text-brand-orange" /> My Mission
              </h3>
              <p className="text-brand-mutedDark font-light text-sm md:text-base leading-relaxed">
                If someone wants help, I will help them. Anyone who wants to learn a skill, grow, or find direction—I'm open to teaching what I know, including the mistakes I've made along the way.
              </p>
              <p className="text-brand-mutedDark font-light text-sm md:text-base leading-relaxed">
                And in my work, I don't just want to get paid. I want the businesses I work with to genuinely grow because of the words I write. Seeing real results from my copy is what makes this worth it.
              </p>
            </section>

            <section className="space-y-3 border border-brand-mutedLight/40 p-6 rounded-xl bg-brand-cream shadow-sm">
              <h3 className="font-serif text-xl font-bold text-brand-charcoal flex items-center gap-2">
                <Heart size={18} className="text-brand-orange" /> My Vision
              </h3>
              <p className="text-brand-mutedDark font-light text-sm md:text-base leading-relaxed">
                I don't know exactly what the future holds, but I know the direction I'm walking in. I want to be someone who helps people genuinely—giving value, guidance, and support, and making a real impact in the community around me.
              </p>
              <p className="text-brand-mutedDark font-light text-sm md:text-base leading-relaxed">
                Above everything, I want my life and my work to reflect God's grace and guidance. I'm good at writing. I'm growing every day. And I want to use that gift to create real impact one step, one client, one lesson at a time.
              </p>
            </section>
          </div>

          {/* Bottom Navigation & Sign-off */}
          <div className="pt-12 text-center border-t border-brand-mutedLight/30 flex flex-col items-center justify-center space-y-4">
            <div className="font-serif italic font-bold text-xl text-brand-charcoal">
              — Kuria Kihato (Joel Omogol)
            </div>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-brand-charcoal text-brand-cream px-6 py-3 rounded-full text-sm font-medium hover:bg-opacity-90 transition shadow-sm"
            >
              <ArrowLeft size={16} /> Return to Portfolio
            </Link>
          </div>

        </div>
      </CreamSection>
    </main>
  );
}
