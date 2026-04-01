import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import EmailCapture from "@/components/EmailCapture";
import { getAllMDXByType } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Disney World Resort Comparisons | Head-to-Head Reviews",
  description:
    "Side-by-side comparisons of Disney World Deluxe resorts — Polynesian vs Grand Floridian, AKL vs Wilderness Lodge, best pools for toddlers, and more.",
};

export default function ComparePage() {
  const comparisons = getAllMDXByType("compare");

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BreadcrumbNav crumbs={[{ label: "Home", href: "/" }, { label: "Resort Comparisons" }]} />

        <div className="mb-10">
          <p className="text-[#0072CE] text-sm font-semibold uppercase tracking-wider mb-2">
            Head-to-Head
          </p>
          <h1
            className="text-4xl font-bold text-[#0D1B2A] mb-4"
            style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
          >
            Disney World Resort Comparisons
          </h1>
          <p className="text-[#4A5568] max-w-2xl">
            Can&apos;t decide between two resorts? We&apos;ve done the side-by-side so you don&apos;t have to.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {comparisons.map((comparison) => (
            <Link
              key={comparison.slug}
              href={`/compare/${comparison.slug}`}
              className="group block p-6 bg-white border border-[#D1E3F5] rounded-2xl hover:border-[#0072CE] hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">⚖️</span>
                <span className="text-[#0072CE] text-xs font-semibold uppercase tracking-wide">
                  Comparison
                </span>
              </div>
              <h2
                className="font-semibold text-[#0D1B2A] mb-2 group-hover:text-[#0072CE] transition-colors"
                style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
              >
                {comparison.title}
              </h2>
              {comparison.seoDescription && (
                <p className="text-[#4A5568] text-sm line-clamp-2 mb-3">
                  {comparison.seoDescription}
                </p>
              )}
              <span className="text-[#0072CE] text-sm font-semibold group-hover:underline">
                Read Comparison →
              </span>
            </Link>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <EmailCapture />
        </div>
      </div>
    </div>
  );
}
