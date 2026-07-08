import { getSupabaseServer } from '@/lib/supabase';
import { CreamSection, Eyebrow } from '@/components/LayoutBlocks';
import Link from 'next/link';

export const revalidate = 60;

export default async function BlogIndexPage() {
  const supabase = getSupabaseServer();
  const { data: posts } = await supabase.from('posts').order('published_at', { ascending: false });

  return (
    <main className="bg-brand-cream min-h-screen text-brand-charcoal">
      <CreamSection>
        <div className="pt-8 mb-16">
          <Eyebrow text="THE INDEX" />
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight">Editorial & Logs</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts && posts.length > 0 ? posts.map((post: any) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group space-y-4 block">
              <div className="w-full h-64 bg-brand-charcoal/10 rounded-2xl border border-brand-mutedLight/20 relative overflow-hidden" />
              <div className="space-y-2">
                <span className="text-[10px] tracking-widest font-semibold text-brand-orange uppercase">{post.category}</span>
                <h2 className="font-serif text-2xl font-bold group-hover:text-brand-orange transition-colors duration-150">{post.title}</h2>
                <p className="text-brand-mutedDark text-sm font-light leading-relaxed line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          )) : (
            <p className="text-sm text-brand-mutedLight">No strategic archives published yet.</p>
          )}
        </div>
      </CreamSection>
    </main>
  );
}
