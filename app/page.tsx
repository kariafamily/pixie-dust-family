import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Pixie Dust Family | Honest Disney World Deluxe Resort Reviews",
  description:
    "Honest Walt Disney World Deluxe resort reviews from a real family with a toddler. Real photos, toddler scores, and tips from a South Florida family who actually stays there.",
};

const resorts = [
  {
    slug: "animal-kingdom-lodge-review",
    name: "Animal Kingdom Lodge",
    score: 10,
    verdict: "The only resort where your toddler wakes up to giraffes. Nothing else comes close.",
    compareLabel: "vs. Wilderness Lodge",
    compareHref: "/compare/animal-kingdom-lodge-vs-wilderness-lodge",
    accent: "#2d6a2d",
    badge: "★ OUR #1 PICK",
    badgeGold: true,
    heroImage: "/images/resorts/animal-kingdom-lodge/animal-kingdom-lodge-savanna-wide-view.jpg",
  },
  {
    slug: "polynesian-village-resort-review",
    name: "Polynesian Village Resort",
    score: 9.5,
    verdict: "Monorail access, Dole Whip at midnight, and a lobby that feels like vacation the moment you walk in.",
    compareLabel: "vs. Grand Floridian",
    compareHref: "/compare/polynesian-vs-grand-floridian",
    accent: "#2d5a8a",
    badge: "#2",
    badgeGold: false,
    heroImage: "/images/resorts/polynesian/polynesian-beach-castle-view.jpg",
  },
  {
    slug: "beach-club-resort-review",
    name: "Beach Club Resort",
    score: 9.2,
    verdict: "Stormalong Bay is the best pool in all of Walt Disney World. Full stop.",
    compareLabel: "vs. BoardWalk Inn",
    compareHref: "/compare/best-disney-resort-pool-for-toddlers",
    accent: "#1a6b8a",
    badge: "#3",
    badgeGold: false,
    heroImage: null,
  },
  {
    slug: "wilderness-lodge-review",
    name: "Wilderness Lodge",
    score: 8.5,
    verdict: "A cozy Pacific Northwest lodge hiding inside Disney World. Underrated and underpriced.",
    compareLabel: "vs. Animal Kingdom Lodge",
    compareHref: "/compare/animal-kingdom-lodge-vs-wilderness-lodge",
    accent: "#7a5a2a",
    badge: "#4",
    badgeGold: false,
    heroImage: "/images/resorts/wilderness-lodge/wilderness-lodge-waterfall-exterior.jpg",
  },
  {
    slug: "grand-floridian-resort-review",
    name: "Grand Floridian Resort & Spa",
    score: 8,
    verdict: "Stunning Victorian grandeur and a Magic Kingdom castle view that earns its price tag — barely.",
    compareLabel: "vs. Polynesian Village",
    compareHref: "/compare/polynesian-vs-grand-floridian",
    accent: "#8a2a50",
    badge: "#5",
    badgeGold: false,
    heroImage: "/images/resorts/grand-floridian/grand-floridian-exterior.jpg",
  },
  {
    slug: "boardwalk-inn-review",
    name: "BoardWalk Inn",
    score: 7.5,
    verdict: "Great EPCOT access and a lively boardwalk atmosphere. Better for adults than toddlers, honestly.",
    compareLabel: "vs. Beach Club",
    compareHref: "/compare/best-disney-resort-pool-for-toddlers",
    accent: "#4a3a8a",
    badge: "#6",
    badgeGold: false,
    heroImage: null,
  },
];

function ResortCard({ resort }: { resort: typeof resorts[0] }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-[0_6px_24px_rgba(0,0,0,0.10)] hover:-translate-y-0.5"
      style={{ border: "1px solid #E2DDD6" }}>

      {/* Photo area — 16:9 */}
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        {resort.heroImage ? (
          <Image
            src={resort.heroImage}
            alt={resort.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${resort.accent}33 0%, #003D7A 100%)` }} />
        )}
        {/* Badge */}
        <div className="absolute top-3 left-3">
          <span
            className="text-xs font-bold px-2.5 py-1 rounded-full"
            style={{
              backgroundColor: resort.badgeGold ? "#C9963A" : "rgba(0,0,0,0.55)",
              color: "#ffffff",
              backdropFilter: "blur(4px)",
            }}
          >
            {resort.badge}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5" style={{ borderLeft: `3px solid ${resort.accent}` }}>
        <h3
          className="font-bold text-lg mb-1 leading-snug"
          style={{ color: "#1A1A2E", fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          {resort.name}
        </h3>
        <p className="font-bold text-sm mb-2" style={{ color: "#C9963A" }}>
          Toddler Score: {resort.score}/10
        </p>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "#6B7280" }}>
          {resort.verdict}
        </p>
        <div className="flex items-center justify-between">
          <Link href={`/resorts/${resort.slug}`} className="text-sm font-semibold transition-colors hover:text-[#003D7A]"
            style={{ color: "#0072CE" }}>
            Read review →
          </Link>
          <Link href={resort.compareHref} className="text-xs transition-colors hover:text-[#003D7A]"
            style={{ color: "#6B7280" }}>
            {resort.compareLabel} →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section
        className="relative py-20 sm:py-28 px-6"
        style={{
          background: "radial-gradient(ellipse at 70% 40%, rgba(0,114,206,0.18) 0%, transparent 60%), linear-gradient(135deg, #001A3D 0%, #003D7A 60%, #002855 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="mb-5 font-bold uppercase tracking-widest"
            style={{ color: "#C9963A", fontSize: "11px", letterSpacing: "0.1em" }}
          >
            Walt Disney World · Deluxe Resorts · Toddler Travel
          </p>
          <h1
            className="text-white font-bold mb-5 leading-tight"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            }}
          >
            Real Disney Magic.<br />Real Toddler Chaos.
          </h1>
          <p className="text-lg mb-4 max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
            We&apos;re a South Florida family who visits Disney World multiple times a year with our toddler. We&apos;ve stayed at every Deluxe resort. Paid for all of it ourselves. Here&apos;s what we actually think.
          </p>
          <p className="text-sm italic mb-10" style={{ color: "rgba(255,255,255,0.5)" }}>
            No comped rooms. No sponsored content. Ever.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/plan-your-trip"
              className="inline-flex items-center px-8 py-3.5 rounded-xl text-white text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#0072CE", boxShadow: "0 4px 20px rgba(0,114,206,0.4)" }}
            >
              Plan Your Trip — Start Here
            </Link>
            <Link
              href="/resorts"
              className="inline-flex items-center px-8 py-3.5 rounded-xl text-white text-sm font-semibold transition-colors"
              style={{ border: "1.5px solid rgba(255,255,255,0.45)" }}
            >
              See Resort Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* ── EDITORIAL GUIDE BOX ────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 -mt-6 relative z-10">
        <div
          className="rounded-2xl px-6 py-5 flex gap-4"
          style={{ backgroundColor: "#E8F4FD", border: "1px solid #D1E3F5" }}
        >
          <span className="text-xl flex-shrink-0 mt-0.5">ℹ️</span>
          <p className="text-sm leading-relaxed" style={{ color: "#003D7A" }}>
            <strong>Not sure where to start?</strong> Traveling with a toddler under 3?{" "}
            Start with <Link href="/resorts/animal-kingdom-lodge-review" className="underline font-semibold">Animal Kingdom Lodge</Link>.
            Need monorail convenience?{" "}
            <Link href="/resorts/polynesian-village-resort-review" className="underline font-semibold">Polynesian Village</Link>.
            Best pool in Disney World?{" "}
            <Link href="/resorts/beach-club-resort-review" className="underline font-semibold">Beach Club, no contest</Link>.
          </p>
        </div>
      </section>

      {/* ── RESORT GRID ────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#6B7280" }}>All Six Resorts Reviewed</p>
          <h2
            className="font-bold text-3xl"
            style={{ color: "#1A1A2E", fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Walt Disney World Deluxe Resorts
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {resorts.map((resort) => (
            <ResortCard key={resort.slug} resort={resort} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/resorts"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: "#0072CE" }}
          >
            View All Reviews →
          </Link>
        </div>
      </section>
    </div>
  );
}
