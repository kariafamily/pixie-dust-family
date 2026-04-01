import type { Metadata } from "next";
import Link from "next/link";
import ResortCard from "@/components/ResortCard";
import TipCard from "@/components/TipCard";
import EmailCapture from "@/components/EmailCapture";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

export const metadata: Metadata = {
  title: "Pixie Dust Family | Honest Disney World Deluxe Resort Reviews",
  description:
    "Honest Walt Disney World Deluxe resort reviews from a real family with a toddler. Real photos, toddler scores, and tips from an Orlando-area family who actually stays there.",
};

const resorts = [
  {
    title: "Polynesian Village Resort",
    slug: "polynesian-village-resort-review",
    tier: "Deluxe",
    ourRating: 5,
    toddlerScore: 9.5,
    description: "The Monorail access and Lava Pool make this our #1 pick for families with toddlers.",
    rank: 1,
  },
  {
    title: "Animal Kingdom Lodge",
    slug: "animal-kingdom-lodge-review",
    tier: "Deluxe",
    ourRating: 5,
    toddlerScore: 10,
    description: "Giraffes outside your balcony. Genuinely unmatched wow-factor for young children.",
    rank: 2,
  },
  {
    title: "Beach Club Resort",
    slug: "beach-club-resort-review",
    tier: "Deluxe",
    ourRating: 4,
    toddlerScore: 9,
    description: "Stormalong Bay is the best pool at Walt Disney World. If pools matter, book here.",
    rank: 3,
  },
  {
    title: "Grand Floridian Resort & Spa",
    slug: "grand-floridian-resort-review",
    tier: "Deluxe",
    ourRating: 4,
    toddlerScore: 8,
    description: "Flagship luxury. Best for special occasions and grandparents who love elegance.",
    rank: 4,
  },
  {
    title: "Wilderness Lodge",
    slug: "wilderness-lodge-review",
    tier: "Deluxe",
    ourRating: 4,
    toddlerScore: 8.5,
    description: "National Park grandeur with a geyser, boat to Magic Kingdom, and great value.",
    rank: 5,
  },
  {
    title: "BoardWalk Inn",
    slug: "boardwalk-inn-review",
    tier: "Deluxe",
    ourRating: 3,
    toddlerScore: 7.5,
    description: "Unique entertainment district. Better for adults and return Disney visitors.",
    rank: 6,
  },
];

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <p className="text-[#0072CE] text-sm font-semibold uppercase tracking-widest mb-4">
                Walt Disney World · Orlando, Florida
              </p>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0D1B2A] mb-6 leading-tight"
                style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
              >
                Real Disney Magic.{" "}
                <em className="text-[#0072CE]">Real Toddler</em>{" "}
                Chaos.
              </h1>
              <p className="text-[#4A5568] text-lg sm:text-xl leading-relaxed mb-8">
                Honest Walt Disney World Deluxe resort reviews from a family who actually stays there — husband, wife, one opinionated 2-year-old, and the grandparents trying to keep up.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["🏨 Deluxe Resorts Only", "👶 Toddler Tested", "📸 Our Real Photos"].map((pill) => (
                  <span
                    key={pill}
                    className="bg-[#E8F4FD] text-[#003D7A] text-sm font-medium px-4 py-2 rounded-full border border-[#D1E3F5]"
                  >
                    {pill}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/resorts"
                  className="bg-[#0072CE] hover:bg-[#005fa3] text-white font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  See Our Resort Rankings
                </Link>
                <Link
                  href="/tips/disney-world-toddler-packing-list"
                  className="border-2 border-[#0072CE] text-[#0072CE] hover:bg-[#E8F4FD] font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  Get Free Packing List
                </Link>
              </div>
            </div>

            {/* Right: Photos */}
            <div className="flex flex-col gap-4">
              {/* PHOTO SLOT: replace with real vacation photo */}
              <PhotoPlaceholder label="Our family at the Polynesian pool" aspectRatio="16/9" />
              {/* PHOTO SLOT: replace with real vacation photo */}
              <PhotoPlaceholder label="View from Animal Kingdom Lodge balcony" aspectRatio="16/9" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#E8F4FD] py-6 border-y border-[#D1E3F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 text-center">
            {[
              "6+ Deluxe Resorts Reviewed",
              "All Photos From Our Trips",
              "Toddler-Tested Tips",
              "Multigenerational Advice",
              "Zero Sponsored Content",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-[#0072CE]">✓</span>
                <span className="text-[#003D7A] text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resort Rankings */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#0072CE] text-sm font-semibold uppercase tracking-wider mb-2">
              Our Honest Rankings
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-4"
              style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
            >
              Walt Disney World Deluxe Resorts, Ranked
            </h2>
            <p className="text-[#4A5568] max-w-xl mx-auto">
              We&apos;ve stayed at these. We&apos;ve done nap schedules in these rooms. These rankings are real.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resorts.map((resort) => (
              <ResortCard key={resort.slug} {...resort} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/resorts"
              className="bg-[#003D7A] hover:bg-[#002d5a] text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              View All Resort Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* About Our Family */}
      <section className="bg-[#E8F4FD] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Photo */}
            <div className="relative">
              {/* PHOTO SLOT: replace with real vacation photo */}
              <PhotoPlaceholder label="Our family at Walt Disney World" aspectRatio="4/3" />
              <div className="absolute bottom-4 right-4 bg-[#003D7A] text-white text-xs font-bold px-4 py-2 rounded-full">
                6+ Deluxe Resorts · Real Family Reviews
              </div>
            </div>

            {/* Right: Text */}
            <div>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-4"
                style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
              >
                We&apos;re Just a Real Family Who Loves Disney
              </h2>
              <p className="text-[#4A5568] mb-4">
                We&apos;re an Orlando-area family — husband, wife, and a toddler who has opinions about everything. We started taking Disney trips when she was 18 months old and haven&apos;t stopped. The grandparents come whenever they can.
              </p>
              <p className="text-[#4A5568] mb-6">
                We paid for every stay. Nobody comp&apos;d our rooms. Nobody reviewed our drafts. What you read here is what we actually experienced.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "No sponsored content, ever",
                  "Every review is from a real, paid stay",
                  "Grandparent-specific notes in every resort review",
                  "Toddler score on every property",
                  "Honest about what we didn't love",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-[#0D1B2A] text-sm">
                    <span className="text-[#0072CE] mt-0.5">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="text-[#0072CE] font-semibold hover:underline"
              >
                Read Our Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Top Guides */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#0D1B2A]"
              style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
            >
              Start Here
            </h2>
          </div>

          {/* Featured card */}
          <Link
            href="/tips/disney-world-with-toddler-complete-guide"
            className="group block bg-[#003D7A] text-white rounded-2xl p-8 sm:p-10 mb-6 hover:bg-[#002d5a] transition-colors"
          >
            <span className="text-[#0072CE] text-xs font-bold uppercase tracking-widest mb-3 block bg-[#E8F4FD] text-[#0072CE] px-3 py-1 rounded-full w-fit">
              Complete Guide
            </span>
            <h3
              className="text-2xl sm:text-3xl font-bold mb-3"
              style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
            >
              The Complete Guide to Disney World with a Toddler
            </h3>
            <p className="text-white/80 mb-4">
              Everything we wish we knew before our first trip — nap strategy, best rides, character meetings, what to skip, and how to actually enjoy it.
            </p>
            <span className="text-[#0072CE] font-semibold group-hover:underline">
              Read the Full Guide →
            </span>
          </Link>

          {/* 2x2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TipCard
              icon="🏝"
              category="Resort Review"
              title="Polynesian Village Resort: Our #1 Pick"
              description="Monorail access, volcano pool, character dining — this is the resort we return to."
              readTime="8 min read"
              href="/resorts/polynesian-village-resort-review"
            />
            <TipCard
              icon="👴"
              category="Planning Guide"
              title="Disney World with Grandparents"
              description="Multigenerational trips are magical — if you plan for different stamina and preferences."
              readTime="8 min read"
              href="/tips/disney-world-with-grandparents"
            />
            <TipCard
              icon="🛒"
              category="Gear Guide"
              title="Best Stroller for Disney World"
              description="We've tested multiple strollers at WDW. Here's what works and what causes problems."
              readTime="6 min read"
              href="/tips/best-stroller-for-disney-world"
            />
            <TipCard
              icon="🦒"
              category="Resort Comparison"
              title="AKL vs Wilderness Lodge"
              description="Two nature-themed resorts. One has live giraffes. Here's how we compare them."
              readTime="5 min read"
              href="/compare/animal-kingdom-lodge-vs-wilderness-lodge"
            />
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <EmailCapture />
        </div>
      </section>
    </div>
  );
}
