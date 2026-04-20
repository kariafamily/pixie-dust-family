import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import EmailCapture from "@/components/EmailCapture";
import { getAllMDXByType, MDXFrontmatter } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Disney World Guides & Articles | Pixie Dust Family",
  description:
    "Planning guides, packing lists, nap strategies, stroller reviews, resort comparisons — everything a real family with a toddler needs for Walt Disney World.",
};

type ArticleEntry = MDXFrontmatter & { _dir: string; _href: string };

const categoryLabel: Record<string, string> = {
  "tip-guide": "Guide",
  "comparison": "Comparison",
  "resort-review": "Resort Review",
  "blog": "Blog",
};

function formatDate(dateStr?: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const tips: ArticleEntry[] = getAllMDXByType("tips").map((f) => ({
    ...f,
    _dir: "tips",
    _href: `/tips/${f.slug}`,
  }));
  const compares: ArticleEntry[] = getAllMDXByType("compare").map((f) => ({
    ...f,
    _dir: "compare",
    _href: `/compare/${f.slug}`,
  }));
  const resortReviews: ArticleEntry[] = getAllMDXByType("resorts").map((f) => ({
    ...f,
    _dir: "resorts",
    _href: `/resorts/${f.slug}`,
  }));

  const all = [...tips, ...compares, ...resortReviews].sort((a, b) => {
    if (!a.publishedAt || !b.publishedAt) return 0;
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BreadcrumbNav crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

        <div className="mb-12">
          <p className="text-[#0072CE] text-sm font-semibold uppercase tracking-wider mb-3">
            Guides, Tips &amp; Reviews
          </p>
          <h1
            className="text-[clamp(2.2rem,5vw,3.5rem)] font-light text-[#0D1B2A] mb-4 leading-tight"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            The Pixie Dust Family Blog
          </h1>
          <p className="text-[#4A5568] max-w-xl leading-relaxed">
            Planning guides, honest resort reviews, packing lists, stroller picks, and everything else we&apos;ve learned taking a toddler to Walt Disney World.
          </p>
        </div>

        {/* Guides */}
        <div className="mb-14">
          <h2
            className="text-2xl font-light text-[#0D1B2A] mb-6 pb-3 border-b border-[#D1E3F5]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Planning Guides &amp; Tips
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>

        {/* Comparisons */}
        <div className="mb-14">
          <h2
            className="text-2xl font-light text-[#0D1B2A] mb-6 pb-3 border-b border-[#D1E3F5]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Resort Comparisons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {compares.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>

        {/* Resort Reviews */}
        <div className="mb-14">
          <h2
            className="text-2xl font-light text-[#0D1B2A] mb-6 pb-3 border-b border-[#D1E3F5]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Resort Reviews
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resortReviews.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <EmailCapture />
        </div>
      </div>
    </div>
  );
}

function ArticleCard({ article }: { article: ArticleEntry }) {
  const label = categoryLabel[article.type] ?? "Article";
  return (
    <Link
      href={article._href}
      className="pixie-hover group block bg-white rounded-2xl border border-[#D1E3F5] hover:border-[#0072CE] transition-colors p-6"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-[#0072CE] text-xs font-semibold uppercase tracking-wider">
          {label}
        </span>
        {article.publishedAt && (
          <span className="text-[#4A5568] text-xs">
            {new Date(article.publishedAt).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
          </span>
        )}
      </div>
      <h3
        className="text-[#0D1B2A] text-xl font-light mb-3 group-hover:text-[#003D7A] transition-colors leading-snug"
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
      >
        {article.title}
      </h3>
      {article.seoDescription && (
        <p className="text-[#4A5568] text-sm leading-relaxed line-clamp-3 mb-4">
          {article.seoDescription}
        </p>
      )}
      <span className="text-[#0072CE] text-xs font-medium tracking-wide group-hover:underline">
        Read More →
      </span>
    </Link>
  );
}
