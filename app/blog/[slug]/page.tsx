import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { BgVideo } from "@/components/bg-video";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getPost, posts } from "@/lib/posts";
import { amazonUrl, btnGold, goldTimes, sectionTitle, wrap } from "@/lib/ui";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "The 9 Pillars" };
  return {
    title: `${post.title} — The 9 Pillars`,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }: Props) {
  return (
    <main className="min-h-screen bg-[#001908] text-white">
      <SiteHeader />
      <Suspense fallback={<div className={`${wrap} py-24 text-sm tracking-[0.16em] text-[#ffb30f] uppercase`}>Loading the essay…</div>}>
        <BlogArticle params={params} />
      </Suspense>
    </main>
  );
}

async function BlogArticle({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = posts.filter((item) => item.slug !== post.slug);

  return (
    <>
      <article>
        <img className="block h-[min(70vh,720px)] w-full object-cover max-[640px]:aspect-[4/3] max-[640px]:h-auto" src={post.image} alt={post.imageAlt} />
        <div className="mx-auto w-full max-w-[1140px] px-4 pt-20 pb-16 text-left max-[960px]:pt-14 max-[960px]:pb-12">
          <div className="w-full text-left">
            <a className="text-sm tracking-[0.18em] text-[#ffb30f] uppercase transition hover:text-white" href="/#blogs">
              Back to blogs
            </a>
            <p className="mt-6 mb-2 text-left text-sm tracking-[0.16em] text-[#ffb30f] uppercase">{post.date}</p>
            <h1 className={`${sectionTitle} ${goldTimes} text-left`}>{post.title}</h1>
            <div className="mt-8 space-y-5 text-left text-base leading-[1.75]">
              {post.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="m-0 text-left">
                  {paragraph}
                </p>
              ))}
            </div>
            <a
              className={`${btnGold} mt-10 h-[50px] w-[213px] font-serif text-[22px] font-bold uppercase`}
              href={amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Now
            </a>
            <section className="mt-16 border-t border-[#f6b521]/30 pt-10 text-left">
              <h2 className={`${goldTimes} m-0 text-left font-serif text-[clamp(28px,3vw,40px)] leading-tight font-bold uppercase`}>
                More from the book
              </h2>
              <div className="mt-6 grid w-full grid-cols-2 gap-6 max-[640px]:grid-cols-1">
                {others.map((item) => (
                  <a key={item.slug} className="group block w-full overflow-hidden border border-black bg-[#fffaef] text-left text-black no-underline" href={`/blog/${item.slug}`}>
                    <img className="block aspect-[4/3] w-full object-cover" src={item.image} alt="" />
                    <div className="px-5 py-4 font-[family-name:var(--font-blog),Nunito,sans-serif]">
                      <h3 className="m-0 text-[15px] leading-tight font-bold uppercase">{item.title}</h3>
                      <p className="mt-1.5 mb-0 text-[15px] leading-snug font-light">{item.excerpt}</p>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>
      <div className="relative isolate pt-16">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <BgVideo src="/video/gemini_generated_video_da132b58.mp4" poster="/video/gemini_generated_video_da132b58.jpg" />
          <div className="absolute inset-0 bg-[#001908]/75" />
        </div>
        <SiteFooter />
      </div>
    </>
  );
}
