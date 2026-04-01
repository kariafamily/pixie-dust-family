import type { Metadata } from "next";
import TipCard from "@/components/TipCard";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import EmailCapture from "@/components/EmailCapture";
import { getAllMDXByType } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Disney World Tips & Guides for Families with Toddlers",
  description:
    "Practical Disney World guides for families with young children — toddler planning, stroller picks, nap strategy, packing lists, and multigenerational trip advice.",
};

export default function TipsPage() {
  const tips = getAllMDXByType("tips");

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BreadcrumbNav crumbs={[{ label: "Home", href: "/" }, { label: "Tips & Guides" }]} />

        <div className="mb-10">
          <p className="text-[#0072CE] text-sm font-semibold uppercase tracking-wider mb-2">
            Guides & Tips
          </p>
          <h1
            className="text-4xl font-bold text-[#0D1B2A] mb-4"
            style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
          >
            Disney World Tips for Families
          </h1>
          <p className="text-[#4A5568] max-w-2xl">
            Real advice from a family that has made the mistakes so you don&apos;t have to.
          </p>
        </div>

        <div className="flex flex-col gap-4 mb-16">
          {tips.map((tip) => (
            <TipCard
              key={tip.slug}
              icon={tip.icon || "📝"}
              category={tip.category || "Guide"}
              title={tip.title}
              description={tip.seoDescription || ""}
              readTime={tip.readTime}
              href={`/tips/${tip.slug}`}
            />
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <EmailCapture />
        </div>
      </div>
    </div>
  );
}
