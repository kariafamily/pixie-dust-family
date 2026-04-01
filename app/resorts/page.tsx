import type { Metadata } from "next";
import ResortCard from "@/components/ResortCard";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Disney World Deluxe Resort Reviews | All Resorts Ranked",
  description:
    "Every Disney World Deluxe resort reviewed by a real family with a toddler. Toddler scores, pool ratings, grandparent notes, and honest recommendations.",
};

const resorts = [
  {
    title: "Polynesian Village Resort",
    slug: "polynesian-village-resort-review",
    tier: "Deluxe",
    ourRating: 5,
    toddlerScore: 9.5,
    description: "The Monorail access and Lava Pool make this our #1 pick for families with toddlers. Ohana character breakfast is exceptional.",
    rank: 1,
  },
  {
    title: "Animal Kingdom Lodge",
    slug: "animal-kingdom-lodge-review",
    tier: "Deluxe",
    ourRating: 5,
    toddlerScore: 10,
    description: "Giraffes outside your balcony. Genuinely unmatched wow-factor for young children. Our daughter still talks about it.",
    rank: 2,
  },
  {
    title: "Beach Club Resort",
    slug: "beach-club-resort-review",
    tier: "Deluxe",
    ourRating: 4,
    toddlerScore: 9,
    description: "Stormalong Bay is the best pool at Walt Disney World. EPCOT walkability is a game-changer.",
    rank: 3,
  },
  {
    title: "Grand Floridian Resort & Spa",
    slug: "grand-floridian-resort-review",
    tier: "Deluxe",
    ourRating: 4,
    toddlerScore: 8,
    description: "Flagship luxury. Best for special occasions, grandparents, and serious fine dining lovers.",
    rank: 4,
  },
  {
    title: "Wilderness Lodge",
    slug: "wilderness-lodge-review",
    tier: "Deluxe",
    ourRating: 4,
    toddlerScore: 8.5,
    description: "National Park grandeur, geyser, and boat service to Magic Kingdom. Often more affordable within the Deluxe tier.",
    rank: 5,
  },
  {
    title: "BoardWalk Inn",
    slug: "boardwalk-inn-review",
    tier: "Deluxe",
    ourRating: 3,
    toddlerScore: 7.5,
    description: "Unique entertainment district. Better for adults and return Disney visitors than first-time toddler families.",
    rank: 6,
  },
];

export default function ResortsPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BreadcrumbNav crumbs={[{ label: "Home", href: "/" }, { label: "Resorts" }]} />

        <div className="mb-10">
          <p className="text-[#0072CE] text-sm font-semibold uppercase tracking-wider mb-2">
            All Reviews
          </p>
          <h1
            className="text-4xl font-bold text-[#0D1B2A] mb-4"
            style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
          >
            Walt Disney World Deluxe Resort Reviews
          </h1>
          <p className="text-[#4A5568] max-w-2xl">
            We&apos;ve stayed at every Deluxe resort on this list with a toddler and grandparents. These reviews are based on real paid stays — ranked by our honest assessment of overall family experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {resorts.map((resort) => (
            <ResortCard key={resort.slug} {...resort} />
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <EmailCapture />
        </div>
      </div>
    </div>
  );
}
