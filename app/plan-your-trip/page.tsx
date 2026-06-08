import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plan Your Disney World Trip | Pixie Dust Family",
  description:
    "Every article we've written, organized the way a first-time planner thinks. Pick your resort, plan your days, know what it costs, and pack right.",
};

const sections = [
  {
    emoji: "🏨",
    title: "Pick Your Resort",
    links: [
      { label: "Animal Kingdom Lodge Review", href: "/resorts/animal-kingdom-lodge-review" },
      { label: "Polynesian Village Resort Review", href: "/resorts/polynesian-village-resort-review" },
      { label: "Beach Club Resort Review", href: "/resorts/beach-club-resort-review" },
      { label: "Wilderness Lodge Review", href: "/resorts/wilderness-lodge-review" },
      { label: "Grand Floridian Resort & Spa Review", href: "/resorts/grand-floridian-resort-review" },
      { label: "BoardWalk Inn Review", href: "/resorts/boardwalk-inn-review" },
    ],
  },
  {
    emoji: "📅",
    title: "Plan Your Days",
    links: [
      { label: "How Many Days at Disney World with a Toddler", href: "#" },
      { label: "Best Time of Year to Visit with a Toddler", href: "#" },
      { label: "Magic Kingdom with a Toddler", href: "/tips/magic-kingdom-with-toddler" },
      { label: "Animal Kingdom Park with a Toddler", href: "/tips/animal-kingdom-park-with-toddler" },
      { label: "EPCOT Flower & Garden Festival with Toddlers", href: "/tips/epcot-flower-and-garden-festival-with-toddlers" },
    ],
  },
  {
    emoji: "💰",
    title: "Know What It Costs",
    links: [
      { label: "Disney World Trip Cost Breakdown", href: "#" },
      { label: "Is the Disney Dining Plan Worth It?", href: "#" },
      { label: "Disney World Resort vs. Off-Site Hotels", href: "#" },
    ],
  },
  {
    emoji: "🎒",
    title: "Pack & Prepare",
    links: [
      { label: "Disney World Toddler Packing List", href: "/tips/disney-world-toddler-packing-list" },
      { label: "Best Stroller for Disney World", href: "/tips/best-stroller-for-disney-world" },
      { label: "Disney World Nap Strategy", href: "/tips/disney-world-nap-strategy" },
      { label: "Disney World with a Toddler: Complete Guide", href: "/tips/disney-world-with-toddler-complete-guide" },
    ],
  },
  {
    emoji: "🍽️",
    title: "Where to Eat",
    links: [
      { label: "'Ohana Character Breakfast Review", href: "/tips/ohana-character-breakfast-review" },
      { label: "Kilimanjaro Safaris with a Toddler", href: "/tips/kilimanjaro-safaris-with-toddler" },
    ],
  },
  {
    emoji: "👴👵",
    title: "With Grandparents",
    links: [
      { label: "Disney World with Grandparents", href: "/tips/disney-world-with-grandparents" },
    ],
  },
];

export default function PlanYourTripPage() {
  return (
    <div>
      {/* Dark navy gradient header */}
      <section
        className="py-16 px-6"
        style={{ background: "linear-gradient(135deg, #001A3D 0%, #003D7A 100%)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#C9963A", letterSpacing: "0.1em" }}>
            Everything in One Place
          </p>
          <h1
            className="font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Plan Your Trip
          </h1>
          <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Every article we&apos;ve written, organized the way a first-time planner thinks. Start here, work through each section, leave with a real plan.
          </p>
        </div>
      </section>

      {/* Content sections */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-6">
        {sections.map((section) => (
          <div key={section.title} className="rounded-2xl overflow-hidden" style={{ border: "1px solid #E2DDD6" }}>
            {/* Section header */}
            <div className="flex items-center gap-3 px-6 py-4" style={{ backgroundColor: "#003D7A" }}>
              <span className="text-xl">{section.emoji}</span>
              <h2
                className="font-bold text-white text-lg"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {section.title}
              </h2>
            </div>
            {/* Links */}
            <div className="bg-white">
              {section.links.map((link, i) => (
                <Link
                  key={link.href + i}
                  href={link.href}
                  className="flex items-center justify-between px-6 py-3.5 text-sm transition-colors hover:bg-[#E8F4FD]"
                  style={{
                    borderBottom: i < section.links.length - 1 ? "1px solid #F5F0E8" : "none",
                    color: "#1A1A2E",
                  }}
                >
                  <span>{link.label}</span>
                  <span style={{ color: "#0072CE" }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
