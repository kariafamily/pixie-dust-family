export interface RelatedArticle {
  slug: string;
  title: string;
  href: string;
  type: "resort-review" | "tip-guide" | "comparison" | "blog";
}

const related: Record<string, RelatedArticle[]> = {
  "animal-kingdom-lodge-review": [
    { slug: "animal-kingdom-lodge-vs-wilderness-lodge", title: "AKL vs. Wilderness Lodge", href: "/compare/animal-kingdom-lodge-vs-wilderness-lodge", type: "comparison" },
    { slug: "animal-kingdom-park-with-toddler", title: "Animal Kingdom Park with a Toddler", href: "/tips/animal-kingdom-park-with-toddler", type: "tip-guide" },
    { slug: "kilimanjaro-safaris-with-toddler", title: "Kilimanjaro Safaris with a Toddler", href: "/tips/kilimanjaro-safaris-with-toddler", type: "tip-guide" },
    { slug: "disney-world-with-grandparents", title: "Disney World with Grandparents", href: "/tips/disney-world-with-grandparents", type: "tip-guide" },
  ],
  "polynesian-village-resort-review": [
    { slug: "polynesian-vs-grand-floridian", title: "Polynesian vs. Grand Floridian", href: "/compare/polynesian-vs-grand-floridian", type: "comparison" },
    { slug: "ohana-character-breakfast-review", title: "'Ohana Character Breakfast Review", href: "/tips/ohana-character-breakfast-review", type: "tip-guide" },
    { slug: "magic-kingdom-with-toddler", title: "Magic Kingdom with a Toddler", href: "/tips/magic-kingdom-with-toddler", type: "tip-guide" },
    { slug: "disney-world-with-grandparents", title: "Disney World with Grandparents", href: "/tips/disney-world-with-grandparents", type: "tip-guide" },
  ],
  "beach-club-resort-review": [
    { slug: "best-disney-resort-pool-for-toddlers", title: "Best Disney Resort Pool for Toddlers", href: "/compare/best-disney-resort-pool-for-toddlers", type: "comparison" },
    { slug: "epcot-flower-and-garden-festival-with-toddlers", title: "EPCOT Flower & Garden with Toddlers", href: "/tips/epcot-flower-and-garden-festival-with-toddlers", type: "tip-guide" },
    { slug: "disney-world-nap-strategy", title: "Disney World Nap Strategy", href: "/tips/disney-world-nap-strategy", type: "tip-guide" },
  ],
  "wilderness-lodge-review": [
    { slug: "animal-kingdom-lodge-vs-wilderness-lodge", title: "AKL vs. Wilderness Lodge", href: "/compare/animal-kingdom-lodge-vs-wilderness-lodge", type: "comparison" },
    { slug: "magic-kingdom-with-toddler", title: "Magic Kingdom with a Toddler", href: "/tips/magic-kingdom-with-toddler", type: "tip-guide" },
    { slug: "best-stroller-for-disney-world", title: "Best Stroller for Disney World", href: "/tips/best-stroller-for-disney-world", type: "tip-guide" },
  ],
  "grand-floridian-resort-review": [
    { slug: "polynesian-vs-grand-floridian", title: "Polynesian vs. Grand Floridian", href: "/compare/polynesian-vs-grand-floridian", type: "comparison" },
    { slug: "magic-kingdom-with-toddler", title: "Magic Kingdom with a Toddler", href: "/tips/magic-kingdom-with-toddler", type: "tip-guide" },
    { slug: "disney-world-with-grandparents", title: "Disney World with Grandparents", href: "/tips/disney-world-with-grandparents", type: "tip-guide" },
  ],
  "boardwalk-inn-review": [
    { slug: "best-disney-resort-pool-for-toddlers", title: "Best Disney Resort Pool for Toddlers", href: "/compare/best-disney-resort-pool-for-toddlers", type: "comparison" },
    { slug: "epcot-flower-and-garden-festival-with-toddlers", title: "EPCOT Flower & Garden with Toddlers", href: "/tips/epcot-flower-and-garden-festival-with-toddlers", type: "tip-guide" },
    { slug: "disney-world-with-toddler-complete-guide", title: "Disney World with a Toddler: Complete Guide", href: "/tips/disney-world-with-toddler-complete-guide", type: "tip-guide" },
  ],
};

export function getRelatedArticles(slug: string): RelatedArticle[] {
  return related[slug] ?? [];
}
