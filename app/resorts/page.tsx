import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Disney World Deluxe Resort Reviews | All Resorts Ranked | Pixie Dust Family",
  description:
    "Every Disney World Deluxe resort reviewed by a real family with a toddler. Toddler scores, pool ratings, grandparent notes, and honest recommendations.",
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
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        {resort.heroImage ? (
          <Image src={resort.heroImage} alt={resort.name} fill className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw" />
        ) : (
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${resort.accent}44 0%, #003D7A 100%)` }} />
        )}
        <div className="absolute top-3 left-3">
          <span className="text-xs font-bold px-2.5 py-1 rounded-full"
            style={{ backgroundColor: resort.badgeGold ? "#C9963A" : "rgba(0,0,0,0.55)", color: "#ffffff", backdropFilter: "blur(4px)" }}>
            {resort.badge}
          </span>
        </div>
      </div>
      <div className="p-5" style={{ borderLeft: `3px solid ${resort.accent}` }}>
        <h3 className="font-bold text-lg mb-1 leading-snug"
          style={{ color: "#1A1A2E", fontFamily: "var(--font-playfair), Georgia, serif" }}>
          {resort.name}
        </h3>
        <p className="font-bold text-sm mb-2" style={{ color: "#C9963A" }}>Toddler Score: {resort.score}/10</p>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "#6B7280" }}>{resort.verdict}</p>
        <div className="flex items-center justify-between">
          <Link href={`/resorts/${resort.slug}`} className="text-sm font-semibold transition-colors hover:text-[#003D7A]"
            style={{ color: "#0072CE" }}>Read review →</Link>
          <Link href={resort.compareHref} className="text-xs transition-colors hover:text-[#003D7A]"
            style={{ color: "#6B7280" }}>{resort.compareLabel} →</Link>
        </div>
      </div>
    </div>
  );
}

export default function ResortsPage() {
  return (
    <div>
      {/* Navy header */}
      <section className="py-14 px-6" style={{ backgroundColor: "#003D7A" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#C9963A", letterSpacing: "0.1em" }}>
            All Six Resorts · Paid Stays Only
          </p>
          <h1
            className="font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
          >
            Every Deluxe Resort, Reviewed With a Toddler
          </h1>
          <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            We&apos;ve stayed at all six. These rankings are based on real, paid visits with our toddler and grandparents — no press stays, no comped rooms.
          </p>
        </div>
      </section>

      {/* Editorial guide box */}
      <section className="max-w-4xl mx-auto px-6 mt-8">
        <div className="rounded-2xl px-6 py-5 flex gap-4" style={{ backgroundColor: "#E8F4FD", border: "1px solid #D1E3F5" }}>
          <span className="text-xl flex-shrink-0 mt-0.5">ℹ️</span>
          <p className="text-sm leading-relaxed" style={{ color: "#003D7A" }}>
            <strong>First time here?</strong> Toddler under 3 →{" "}
            <Link href="/resorts/animal-kingdom-lodge-review" className="underline font-semibold">Animal Kingdom Lodge</Link>.
            Need monorail →{" "}
            <Link href="/resorts/polynesian-village-resort-review" className="underline font-semibold">Polynesian</Link>.
            Best pool in Disney World →{" "}
            <Link href="/resorts/beach-club-resort-review" className="underline font-semibold">Beach Club</Link>.
            Want to understand pricing before you pick →{" "}
            <Link href="/tips/disney-world-toddler-packing-list" className="underline font-semibold">read our cost breakdown first</Link>.
          </p>
        </div>
      </section>

      {/* Resort grid */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {resorts.map((resort) => (
            <ResortCard key={resort.slug} resort={resort} />
          ))}
        </div>
      </section>
    </div>
  );
}
