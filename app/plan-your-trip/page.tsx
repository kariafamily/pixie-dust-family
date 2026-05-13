import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Plan Your Disney World Trip | Resources & Booking",
  description:
    "Everything you need to plan a Walt Disney World trip with a toddler — booking resources, our resort rankings, packing lists, and planning guides.",
};

const resources = [
  {
    emoji: "🏨",
    title: "Read Our Resort Reviews",
    description: "Compare every Disney Deluxe resort with toddler scores, pool ratings, and grandparent notes.",
    href: "/resorts",
    cta: "See All Reviews",
    bg: "bg-[#003D7A]",
  },
  {
    emoji: "📋",
    title: "Get the Toddler Packing List",
    description: "27 items field-tested across multiple WDW trips. The things we'd never leave home without.",
    href: "/tips/disney-world-toddler-packing-list",
    cta: "View Packing List",
    bg: "bg-[#0072CE]",
  },
  {
    emoji: "🗺️",
    title: "Complete Toddler Guide",
    description: "Everything you need to know — nap strategy, best rides, character meetings, and what to skip.",
    href: "/tips/disney-world-with-toddler-complete-guide",
    cta: "Read the Guide",
    bg: "bg-[#003D7A]",
  },
  {
    emoji: "⚖️",
    title: "Compare Resorts",
    description: "Can't decide between two resorts? We've done the side-by-side comparisons.",
    href: "/compare",
    cta: "See Comparisons",
    bg: "bg-[#0072CE]",
  },
];

export default function PlanYourTripPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BreadcrumbNav crumbs={[{ label: "Home", href: "/" }, { label: "Plan Your Trip" }]} />

        <div className="text-center mb-12">
          <p className="text-[#0072CE] text-sm font-semibold uppercase tracking-wider mb-3">Planning Hub</p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-[#0D1B2A] mb-4"
            style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
          >
            Plan Your Disney World Trip
          </h1>
          <p className="text-[#4A5568] max-w-xl mx-auto text-lg">
            Everything in one place — resort reviews, guides, packing lists, and the honest advice we wish we had before our first trip.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {resources.map((resource) => (
            <Link
              key={resource.href}
              href={resource.href}
              className={`group block ${resource.bg} text-white rounded-2xl p-8 hover:opacity-90 transition-opacity`}
            >
              <span className="text-4xl mb-4 block">{resource.emoji}</span>
              <h2
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
              >
                {resource.title}
              </h2>
              <p className="text-white/80 mb-4 text-sm">{resource.description}</p>
              <span className="text-white font-semibold group-hover:underline text-sm">
                {resource.cta} →
              </span>
            </Link>
          ))}
        </div>

        {/* Affiliate note */}
        <div className="bg-[#F5F8FF] border border-[#D1E3F5] rounded-2xl p-6 mb-12">
          <h2
            className="text-xl font-bold text-[#0D1B2A] mb-3"
            style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
          >
            A Note on Booking
          </h2>
          <p className="text-[#4A5568] text-sm leading-relaxed">
            Some links on this site are affiliate links — if you book through them, we may earn a small commission at no extra cost to you. We only recommend services we&apos;ve actually used or that we&apos;d genuinely consider using. Our editorial opinions are never influenced by affiliate relationships. See our{" "}
            <Link href="/affiliate-disclosure" className="text-[#0072CE] underline">
              full affiliate disclosure
            </Link>{" "}
            for details.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* EmailCapture paused — PDF lead magnet not yet built. Re-enable after PDF is created and wired into ConvertKit welcome automation. */}
          {/* <EmailCapture /> */}
        </div>
      </div>
    </div>
  );
}
