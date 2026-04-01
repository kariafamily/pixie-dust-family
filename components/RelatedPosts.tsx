import Link from "next/link";
import { getAllMDXContent, MDXFrontmatter } from "@/lib/mdx";

interface RelatedPostsProps {
  slugs: string[];
  currentSlug?: string;
}

export default async function RelatedPosts({ slugs, currentSlug }: RelatedPostsProps) {
  // Try to load related posts from all content types
  const allContent = await getAllMDXContent();
  const related = slugs
    .map((slug) => allContent.find((p) => p.slug === slug && p.slug !== currentSlug))
    .filter(Boolean) as MDXFrontmatter[];

  if (related.length === 0) return null;

  const getHref = (post: MDXFrontmatter) => {
    switch (post.type) {
      case "resort-review": return `/resorts/${post.slug}`;
      case "tip-guide": return `/tips/${post.slug}`;
      case "comparison": return `/compare/${post.slug}`;
      default: return `/blog/${post.slug}`;
    }
  };

  return (
    <div>
      <h2
        className="text-2xl font-bold text-[#0D1B2A] mb-6"
        style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
      >
        You Might Also Like
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {related.slice(0, 3).map((post) => (
          <Link
            key={post.slug}
            href={getHref(post)}
            className="group block p-5 bg-white border border-[#D1E3F5] rounded-2xl hover:border-[#0072CE] hover:shadow-md transition-all"
          >
            <span className="text-[#0072CE] text-xs font-semibold uppercase tracking-wide block mb-2">
              {post.type === "resort-review" ? "Resort Review" :
               post.type === "tip-guide" ? "Guide" :
               post.type === "comparison" ? "Comparison" : "Blog"}
            </span>
            <h3
              className="font-semibold text-[#0D1B2A] group-hover:text-[#0072CE] transition-colors leading-snug"
              style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
            >
              {post.title}
            </h3>
            <span className="text-[#0072CE] text-sm mt-2 block group-hover:underline">
              Read More →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
