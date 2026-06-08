import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllMDXByType, MDXFrontmatter } from "@/lib/mdx";
import BlogClientFilter from "./BlogClientFilter";

export const metadata: Metadata = {
  title: "The Blog | Disney World Stories & Tips | Pixie Dust Family",
  description:
    "Stories from the parks, dining reviews, strategy guides, and trip reports from a real family visiting Disney World with a toddler.",
};

type BlogPost = MDXFrontmatter & { _href: string };

export default function BlogPage() {
  const allPosts: BlogPost[] = getAllMDXByType("blog").map((f) => ({
    ...f,
    _href: `/blog/${f.slug}`,
  }));

  const sorted = [...allPosts].sort((a, b) => {
    const dA = a.date || a.publishedAt || "";
    const dB = b.date || b.publishedAt || "";
    return dB.localeCompare(dA);
  });

  const featured = sorted.find((p) => p.featured) ?? sorted[0] ?? null;
  const rest = sorted.filter((p) => p !== featured);

  return (
    <div>
      {/* Navy header */}
      <section className="py-14 px-6" style={{ backgroundColor: "#003D7A" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#C9963A", letterSpacing: "0.1em" }}>
            Stories from the Parks
          </p>
          <h1
            className="font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            The Blog
          </h1>
          <p className="text-base max-w-lg mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Parks, strategy, dining, and trip reports — all from a real family who visits multiple times a year.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {allPosts.length === 0 ? (
          <p className="text-center py-20 text-sm" style={{ color: "#6B7280" }}>
            No posts yet — check back soon.
          </p>
        ) : (
          <>
            {/* Featured post */}
            {featured && (
              <div className="mb-12">
                <Link href={featured._href}
                  className="group block bg-white rounded-2xl overflow-hidden transition-all hover:shadow-[0_6px_24px_rgba(0,0,0,0.10)] hover:-translate-y-0.5"
                  style={{ border: "1px solid #E2DDD6" }}>
                  {featured.heroImage && (
                    <div className="relative w-full" style={{ height: "180px" }}>
                      <Image src={featured.heroImage} alt={featured.title} fill className="object-cover" sizes="100vw" />
                      <div className="absolute top-3 left-3">
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                          style={{ backgroundColor: "#C9963A", color: "#ffffff" }}>
                          FEATURED
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="p-6" style={{ borderLeft: "3px solid #0072CE" }}>
                    {featured.category && (
                      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#6B7280" }}>
                        {featured.category}
                      </span>
                    )}
                    <h2
                      className="font-bold text-xl mt-1 mb-2 leading-snug group-hover:text-[#003D7A] transition-colors"
                      style={{ color: "#1A1A2E", fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      {featured.title}
                    </h2>
                    {(featured.excerpt || featured.seoDescription) && (
                      <p className="text-sm leading-relaxed mb-3 line-clamp-2" style={{ color: "#6B7280" }}>
                        {featured.excerpt || featured.seoDescription}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold" style={{ color: "#0072CE" }}>Read →</span>
                      {(featured.date || featured.publishedAt) && (
                        <span className="text-xs" style={{ color: "#6B7280" }}>
                          {new Date((featured.date || featured.publishedAt)!).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {rest.length > 0 && <BlogClientFilter posts={rest} />}
          </>
        )}
      </div>
    </div>
  );
}
