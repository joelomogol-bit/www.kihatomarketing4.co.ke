import { getSupabaseServer } from '@/lib/supabase';
import { CreamSection, Eyebrow } from '@/components/LayoutBlocks';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const revalidate = 60;

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const supabase = getSupabaseServer();
  const { data: post } = await supabase.from('posts').select('*').eq('slug', params.slug).single();

  if (!post) notFound();

  return (
    <main className="bg-brand-cream min-h-screen text-brand-charcoal">
      <CreamSection>
        <div className="max-w-2xl mx-auto space-y-6">
          <Link href="/blog" className="text-xs text-brand-orange font-semibold uppercase tracking-widest hover:underline">
            ← Return to Index
          </Link>
          <div className="pt-4">
            <Eyebrow text={post.category} />
            <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight leading-tight">{post.title}</h1>
            <p className="text-xs text-brand-mutedLight font-medium mt-2">
              Published: {new Date(post.published_at).toLocaleDateString()}
            </p>
          </div>
          <div className="w-full h-72 bg-brand-charcoal/10 rounded-2xl border border-brand-mutedLight/20" />
          <article className="prose prose-stone pt-6 text-brand-mutedDark font-light leading-relaxed space-y-6">
            <p className="whitespace-pre-wrap">{post.body_markdown}</p>
          </article>
        </div>
      </CreamSection>
    </main>
  );
}
