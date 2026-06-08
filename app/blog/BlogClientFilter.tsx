"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { MDXFrontmatter } from "@/lib/mdx";

type BlogPost = MDXFrontmatter & { _href: string };

const CATEGORIES = ["ALL", "PARKS", "EPCOT", "STRATEGY", "DINING", "RESORTS"] as const;

export default function BlogClientFilter({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<string>("ALL");

  const filtered = active === "ALL"
    ? posts
    : posts.filter((p) => p.category?.toUpperCase() === active);

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
            style={{
              backgroundColor: active === cat ? "#003D7A" : "#F5F0E8",
              color: active === cat ? "#ffffff" : "#6B7280",
              border: `1px solid ${active === cat ? "#003D7A" : "#E2DDD6"}`,
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Post grid */}
      {filtered.length === 0 ? (
        <p className="text-center py-12 text-sm" style={{ color: "#6B7280" }}>No posts in this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {filtered.map((post) => {
            const dateStr = post.date || post.publishedAt;
            return (
              <Link key={post.slug} href={post._href}
                className="group flex gap-4 bg-white rounded-xl p-4 transition-all hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:-translate-y-0.5"
                style={{ border: "1px solid #E2DDD6", borderLeft: "3px solid #0072CE" }}>
                {post.heroImage && (
                  <div className="relative flex-shrink-0 rounded-lg overflow-hidden" style={{ width: "88px", height: "88px" }}>
                    <Image src={post.heroImage} alt={post.title} fill className="object-cover" sizes="88px" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  {post.category && (
                    <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#6B7280" }}>
                      {post.category}
                    </span>
                  )}
                  <h3
                    className="font-bold text-sm mt-0.5 mb-1 leading-snug group-hover:text-[#003D7A] transition-colors line-clamp-2"
                    style={{ color: "#1A1A2E", fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {post.title}
                  </h3>
                  {(post.excerpt || post.seoDescription) && (
                    <p className="text-xs leading-relaxed line-clamp-2 mb-2" style={{ color: "#6B7280" }}>
                      {post.excerpt || post.seoDescription}
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold" style={{ color: "#0072CE" }}>Read →</span>
                    {dateStr && (
                      <span className="text-xs" style={{ color: "#9ca3af" }}>
                        {new Date(dateStr).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
