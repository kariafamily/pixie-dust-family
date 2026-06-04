import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { getAllMDXByType, MDXFrontmatter } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Disney World Guides & Articles | Pixie Dust Family",
  description:
    "Planning guides, packing lists, nap strategies, stroller reviews, resort comparisons — everything a real family with a toddler needs for Walt Disney World.",
};

type ArticleEntry = MDXFrontmatter & { _href: string };

const categoryLabel: Record<string, string> = {
  "tip-guide":     "Guide",
  "comparison":    "Comparison",
  "resort-review": "Resort Review",
  "blog":          "Blog",
};

export default function BlogPage() {
  const blogPosts: ArticleEntry[] = getAllMDXByType("blog").map((f) => ({
    ...f,
    _href: `/blog/${f.slug}`,
  }));
  const tips: ArticleEntry[] = getAllMDXByType("tips").map((f) => ({
    ...f,
    _href: `/tips/${f.slug}`,
  }));
  const compares: ArticleEntry[] = getAllMDXByType("compare").map((f) => ({
    ...f,
    _href: `/compare/${f.slug}`,
  }));
  const resortReviews: ArticleEntry[] = getAllMDXByType("resorts").map((f) => ({
    ...f,
    _href: `/resorts/${f.slug}`,
  }));

  return (
    <div className="pt-16" style={{ color: '#1a1a1a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BreadcrumbNav crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#6b7280', letterSpacing: '0.05em' }}>
            Guides, Tips &amp; Reviews
          </p>
          <h1
            className="text-[clamp(2.2rem,5vw,3.5rem)] font-light text-[#0D1B2A] mb-4 leading-tight"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            The Pixie Dust Family Blog
          </h1>
          <p className="max-w-xl leading-relaxed" style={{ color: '#4b5563' }}>
            Planning guides, honest resort reviews, packing lists, stroller picks, and everything else we&apos;ve learned taking a toddler to Walt Disney World.
          </p>
        </div>

        {/* Latest Posts — only shown when content/blog/ has entries */}
        {blogPosts.length > 0 && (
          <Section title="Latest Posts">
            {blogPosts.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </Section>
        )}

        <Section title="Planning Guides &amp; Tips">
          {tips.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </Section>

        <Section title="Resort Comparisons">
          {compares.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </Section>

        <Section title="Resort Reviews">
          {resortReviews.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </Section>

        {/* YouTube banner */}
        <div className="mb-8 rounded-2xl overflow-hidden" style={{ backgroundColor: '#003087' }}>
          <div className="px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.05em' }}>
                Watch on YouTube
              </p>
              <h2
                className="text-2xl font-light text-white mb-2 leading-snug"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                See our Disney trips in action
              </h2>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Real footage, honest reactions, and our toddler&apos;s unfiltered Disney moments.
              </p>
            </div>
            <a
              href="https://www.youtube.com/@pixiedustfamily"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-80"
              style={{ border: '2px solid white' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Watch Now →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-14">
      <h2
        className="mb-6 pb-3 border-b border-[#e5e7eb]"
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          color: '#0a0a0a',
          fontWeight: 800,
          fontSize: 'clamp(1.4rem, 3vw, 1.75rem)',
        }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  );
}

function ArticleCard({ article }: { article: ArticleEntry }) {
  const label = categoryLabel[article.type] ?? "Article";

  return (
    <Link
      href={article._href}
      className="group block bg-white rounded-2xl border border-[#e5e7eb] overflow-hidden transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.10)] hover:-translate-y-0.5"
    >
      {/* Thumbnail — 16:9, shown when heroImage is present */}
      {article.heroImage && (
        <div className="relative w-full aspect-video bg-[#f3f4f6]">
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="p-6">
        {/* Category label + date */}
        <div className="flex items-center justify-between mb-2">
          <span style={{
            color: '#6b7280',
            fontSize: '11px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            {label}
          </span>
          {article.publishedAt && (
            <span className="text-xs" style={{ color: '#6b7280' }}>
              {new Date(article.publishedAt).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
            </span>
          )}
        </div>

        {/* Title — 2 lines */}
        <h3
          className="mb-2 leading-snug line-clamp-2"
          style={{
            color: '#0a0a0a',
            fontWeight: 700,
            fontSize: 'clamp(1.1rem, 2vw, 1.2rem)',
            fontFamily: "var(--font-playfair-display), Georgia, serif",
          }}
        >
          {article.title}
        </h3>

        {/* Excerpt — 2 lines */}
        {article.seoDescription && (
          <p className="text-sm leading-relaxed line-clamp-2 mb-4" style={{ color: '#4b5563', fontWeight: 400 }}>
            {article.seoDescription}
          </p>
        )}

        <span className="text-xs font-semibold" style={{ color: '#003087' }}>
          Read more →
        </span>
      </div>
    </Link>
  );
}
