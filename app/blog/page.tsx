import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import EmailCapture from "@/components/EmailCapture";
import { getAllMDXByType } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Disney Family Blog | Tips, Stories & Updates",
  description: "Blog posts from a real Disney family — trip updates, tips for parents, and honest thoughts on everything Walt Disney World.",
};

export default function BlogPage() {
  const posts = getAllMDXByType("blog");

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BreadcrumbNav crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

        <div className="mb-10">
          <h1
            className="text-4xl font-bold text-[#0D1B2A] mb-4"
            style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
          >
            The Pixie Dust Family Blog
          </h1>
          <p className="text-[#4A5568]">Trip reports, tips, and honest thoughts from our Disney adventures.</p>
        </div>

        {posts.length === 0 ? (
          <div className="bg-[#E8F4FD] border border-[#D1E3F5] rounded-2xl p-10 text-center mb-16">
            <p className="text-[#4A5568]">Blog posts coming soon. Check back after our next trip!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                date={post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
                  : ""}
                category={post.category || "Blog"}
                title={post.title}
                excerpt={post.seoDescription || ""}
                href={`/blog/${post.slug}`}
              />
            ))}
          </div>
        )}

        <div className="max-w-3xl mx-auto">
          <EmailCapture />
        </div>
      </div>
    </div>
  );
}
