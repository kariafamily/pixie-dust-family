export const AMAZON_TRACKING_ID = "pixiedustfami-20";

export interface AffiliateProduct {
  id: string;
  name: string;
  brand?: string;
  shortDescription?: string;
  affiliateProgram: "amazon" | "cj" | "impact" | "direct";
  amazonAsin?: string;    // for affiliateProgram === 'amazon' only
  affiliateUrl?: string;  // for cj / impact / direct (full pre-built URL)
  image?: string;
  category:
    | "apparel"
    | "gear"
    | "food"
    | "safety"
    | "sleep"
    | "entertainment"
    | "travel"
    | "health"
    | "photography"
    | "books"
    | "tickets"
    | "lodging"
    | "rental"
    | "insurance"
    | "other";
  priceRange?: string;
}

export function getAffiliateUrl(product: AffiliateProduct): string {
  if (product.affiliateProgram === "amazon") {
    if (!product.amazonAsin) {
      throw new Error(
        `[affiliate] Product "${product.id}" is set to affiliateProgram "amazon" but is missing amazonAsin.`
      );
    }
    return `https://www.amazon.com/dp/${product.amazonAsin}/?tag=${AMAZON_TRACKING_ID}`;
  }

  if (
    product.affiliateProgram === "cj" ||
    product.affiliateProgram === "impact" ||
    product.affiliateProgram === "direct"
  ) {
    if (!product.affiliateUrl) {
      throw new Error(
        `[affiliate] Product "${product.id}" (program: ${product.affiliateProgram}) is missing affiliateUrl.`
      );
    }
    return product.affiliateUrl;
  }

  throw new Error(
    `[affiliate] Product "${product.id}" has unrecognized affiliateProgram: "${product.affiliateProgram}".`
  );
}

// Add products here as affiliate links are built out.
// Key is the productId used in MDX via <AffiliateLink productId="..." /> and <AffiliateProductBox productId="..." />.
export const products: Record<string, AffiliateProduct> = {};

products['undercover-tourist-akl'] = {
  id: 'undercover-tourist-akl',
  name: "Disney's Animal Kingdom Lodge Booking",
  brand: 'Undercover Tourist',
  shortDescription: "Save up to $660 on stays at Disney's Animal Kingdom Lodge through Undercover Tourist.",
  affiliateProgram: 'cj',
  affiliateUrl: 'https://www.jdoqocy.com/click-101751510-12983285',
  category: 'lodging',
  priceRange: 'Up to $660 off select stays',
};

products['undercover-tourist-fl-resident-tickets'] = {
  id: 'undercover-tourist-fl-resident-tickets',
  name: 'Florida Resident Disney Park Hopper Plus Tickets',
  brand: 'Undercover Tourist',
  shortDescription: 'Save $12 on 4-Day FL Resident Disney Select Park Hopper Plus tickets through Undercover Tourist.',
  affiliateProgram: 'cj',
  affiliateUrl: 'https://www.kqzyfj.com/click-101751510-13278616',
  category: 'tickets',
  priceRange: '$12 off select tickets',
};

products['undercover-tourist-wdw-hotels'] = {
  id: 'undercover-tourist-wdw-hotels',
  name: 'Discounted Walt Disney World Hotels',
  brand: 'Undercover Tourist',
  shortDescription: 'Compare current discounts on Disney-owned hotels through Undercover Tourist, an authorized Disney seller.',
  affiliateProgram: 'cj',
  affiliateUrl: 'https://www.anrdoezrs.net/click-101751510-12603822',
  category: 'lodging',
  priceRange: 'Varies by resort and dates',
};

products['flower-magic-kingdom-womens-tshirt'] = {
  id: 'flower-magic-kingdom-womens-tshirt',
  name: 'Floral Magic Kingdom Castle Silhouette Tee',
  shortDescription: "A floral Mickey silhouette tee — subtle from a distance, clearly Disney up close.",
  affiliateProgram: 'amazon',
  amazonAsin: 'B0FG3BLK98',
  category: 'apparel',
};

products['meet-me-at-magic-kingdom-tshirt'] = {
  id: 'meet-me-at-magic-kingdom-tshirt',
  name: '"Meet Me at the Castle" Princess Tee',
  shortDescription: 'A grey princess tee, perfect for a Magic Kingdom castle photo session.',
  affiliateProgram: 'amazon',
  amazonAsin: 'B0CZ957JQB',
  category: 'apparel',
};

products['magic-kingdom-sequin-castle-tshirt'] = {
  id: 'magic-kingdom-sequin-castle-tshirt',
  name: 'Sequin Castle Top',
  shortDescription: 'A sequin castle top that catches the light during fireworks.',
  affiliateProgram: 'amazon',
  amazonAsin: 'B0DP7GQ5HG',
  category: 'apparel',
};

products['magic-kingdom-dreams-come-true-tshirt'] = {
  id: 'magic-kingdom-dreams-come-true-tshirt',
  name: '"Where Dreams Come True" Castle Graphic Tee (Black)',
  shortDescription: 'A black castle graphic tee for a low-key-but-still-Disney day.',
  affiliateProgram: 'amazon',
  amazonAsin: 'B0CSFPTDFM',
  category: 'apparel',
};

products['floyu-belle-book-shop-tshirt'] = {
  id: 'floyu-belle-book-shop-tshirt',
  name: 'Belle "Book Shop" Tee (Dark Grey)',
  shortDescription: 'A dark grey Belle "Book Shop" tee that works as everyday wear, not just park wear.',
  affiliateProgram: 'amazon',
  amazonAsin: 'B0CYSJFF8Z',
  category: 'apparel',
};

products['disney-snow-white-happy-face-tshirt'] = {
  id: 'disney-snow-white-happy-face-tshirt',
  name: 'Snow White "Happy" Tee',
  shortDescription: 'A Snow White "Happy" graphic tee.',
  affiliateProgram: 'amazon',
  amazonAsin: 'B092P864JB',
  category: 'apparel',
};

products['disney-snow-white-doc-tshirt'] = {
  id: 'disney-snow-white-doc-tshirt',
  name: 'Snow White "Doc" Tee',
  shortDescription: 'A Snow White "Doc" graphic tee, ordered as a pair with the "Happy" tee.',
  affiliateProgram: 'amazon',
  amazonAsin: 'B09KP1YRC8',
  category: 'apparel',
};

products['alice-wonderland-mad-here-tshirt'] = {
  id: 'alice-wonderland-mad-here-tshirt',
  name: 'Alice in Wonderland "We\'re All Mad Here" Tee',
  shortDescription: 'An Alice in Wonderland tee for early rope-drop mornings.',
  affiliateProgram: 'amazon',
  amazonAsin: 'B084WZ664Y',
  category: 'apparel',
};

products['disney-toy-story-nervous-rex-vneck-tshirt'] = {
  id: 'disney-toy-story-nervous-rex-vneck-tshirt',
  name: '"I\'m a Nervous Rex" V-Neck Tee',
  shortDescription: 'A Toy Story "Nervous Rex" v-neck — a stress-relief shirt for a long park day.',
  affiliateProgram: 'amazon',
  amazonAsin: 'B07V7R3BL2',
  category: 'apparel',
};

products['disney-toy-story-slinky-namaste-crop-top'] = {
  id: 'disney-toy-story-slinky-namaste-crop-top',
  name: 'Slinky Dog "Namaste" Crop Top',
  shortDescription: 'A Slinky Dog "Namaste" crop top.',
  affiliateProgram: 'amazon',
  amazonAsin: 'B0BHCM4L9R',
  category: 'apparel',
};

products['disney-peter-pan-tinkerbell-long-sleeve-tshirt'] = {
  id: 'disney-peter-pan-tinkerbell-long-sleeve-tshirt',
  name: 'Peter Pan Tinker Bell Starry Night Long Sleeve',
  shortDescription: 'A Tinker Bell starry-night long sleeve for Florida\'s few cold-weather park days.',
  affiliateProgram: 'amazon',
  amazonAsin: 'B07Q636384',
  category: 'apparel',
};

products['disney-legend-goofy-long-sleeve-tshirt'] = {
  id: 'disney-legend-goofy-long-sleeve-tshirt',
  name: '"Legend" Goofy Long Sleeve',
  shortDescription: 'A casual "Legend" Goofy long sleeve for travel days.',
  affiliateProgram: 'amazon',
  amazonAsin: 'B0C28VCQ8C',
  category: 'apparel',
};

products['disney-peter-pan-so-fly-tshirt'] = {
  id: 'disney-peter-pan-so-fly-tshirt',
  name: 'Peter Pan "So Fly" Silhouette Tee',
  shortDescription: 'A Peter Pan "So Fly" silhouette graphic tee.',
  affiliateProgram: 'amazon',
  amazonAsin: 'B077JHFC8S',
  category: 'apparel',
};

products['disney-mickey-pluto-retro-tshirt'] = {
  id: 'disney-mickey-pluto-retro-tshirt',
  name: 'Mickey & Pluto Retro Line Tee',
  shortDescription: 'A retro-line Mickey & Pluto tee — popular enough to buy twice.',
  affiliateProgram: 'amazon',
  amazonAsin: 'B0823JM6RW',
  category: 'apparel',
};

products['disney-three-caballeros-classic-tshirt'] = {
  id: 'disney-three-caballeros-classic-tshirt',
  name: 'Three Caballeros Classic Tee',
  shortDescription: 'A classic Three Caballeros tee, available in matching adult and kid sizes.',
  affiliateProgram: 'amazon',
  amazonAsin: 'B09S1BSXPM',
  category: 'apparel',
};

products['jay-franco-mickey-beach-towel'] = {
  id: 'jay-franco-mickey-beach-towel',
  name: 'Mickey Mouse Beach Towel',
  shortDescription: 'A Mickey Mouse beach towel for pool days and beach trips.',
  affiliateProgram: 'amazon',
  amazonAsin: 'B09LG4HWSV',
  category: 'gear',
};

products['thermos-funtainer-mickey-food-jar'] = {
  id: 'thermos-funtainer-mickey-food-jar',
  name: 'Funtainer Mickey Mouse Food Jar',
  shortDescription: 'An insulated food jar in a Mickey Mouse design, keeps food warm or cold through a park day.',
  affiliateProgram: 'amazon',
  amazonAsin: 'B09WGCNYK7',
  category: 'food',
};

products['bumkins-disney-snack-bags'] = {
  id: 'bumkins-disney-snack-bags',
  name: 'Disney Reusable Snack Bags',
  shortDescription: 'Reusable, washable Disney-print snack bags for portioning toddler snacks.',
  affiliateProgram: 'amazon',
  amazonAsin: 'B0DSM2J9PC',
  category: 'food',
};

products['jl-childress-twocool-breastmilk-cooler'] = {
  id: 'jl-childress-twocool-breastmilk-cooler',
  name: 'TwoCool Breast Milk Cooler',
  shortDescription: 'An insulated cooler bag that keeps bottles of breast milk cold on the go.',
  affiliateProgram: 'amazon',
  amazonAsin: 'B084WLBRMH',
  category: 'food',
};

products['simple-modern-minnie-water-bottle-32oz'] = {
  id: 'simple-modern-minnie-water-bottle-32oz',
  name: 'Minnie Mouse Insulated Water Bottle (32oz)',
  shortDescription: 'A 32oz insulated water bottle in a Minnie Mouse design.',
  affiliateProgram: 'amazon',
  amazonAsin: 'B0BNJYH4BM',
  category: 'gear',
};

products['whiskware-disney-stackable-snack-containers'] = {
  id: 'whiskware-disney-stackable-snack-containers',
  name: 'Disney Stackable Snack Containers',
  shortDescription: 'Stackable, spill-resistant snack containers with a Disney design.',
  affiliateProgram: 'amazon',
  amazonAsin: 'B0B6GQKCNY',
  category: 'food',
};

products['disney-mickey-teeny-compact-stroller'] = {
  id: 'disney-mickey-teeny-compact-stroller',
  name: 'Mickey Mouse Teeny Compact Stroller',
  shortDescription: 'A compact, umbrella-style stroller that folds small for park days and travel.',
  affiliateProgram: 'amazon',
  amazonAsin: 'B07GRJCRQ8',
  category: 'gear',
};

products['jl-childress-side-sling-cargo-net'] = {
  id: 'jl-childress-side-sling-cargo-net',
  name: 'Side Sling Stroller Cargo Net',
  shortDescription: 'A stroller cargo net that hangs off the side for extra storage.',
  affiliateProgram: 'amazon',
  amazonAsin: 'B088QLBHC8',
  category: 'gear',
};

products['jl-childress-stroller-organizer-xl'] = {
  id: 'jl-childress-stroller-organizer-xl',
  name: 'Stroller Organizer XL',
  shortDescription: 'An extra-large stroller organizer with cup holders and storage pockets.',
  affiliateProgram: 'amazon',
  amazonAsin: 'B084WKM7DP',
  category: 'gear',
};

products['fisher-price-mickey-friends-figures'] = {
  id: 'fisher-price-mickey-friends-figures',
  name: 'Mickey Mouse & Friends Figure Set',
  shortDescription: 'A set of small Mickey Mouse & Friends figures for quiet play in line or on the plane.',
  affiliateProgram: 'amazon',
  amazonAsin: 'B0DR3XZJSD',
  category: 'entertainment',
};

products['tonies-moana-audio-figurine'] = {
  id: 'tonies-moana-audio-figurine',
  name: 'Moana Audio Figurine',
  shortDescription: 'A Tonies audio figurine that plays Moana story and songs on a Toniebox — screen-free entertainment for travel.',
  affiliateProgram: 'amazon',
  amazonAsin: 'B093TPP32X',
  category: 'entertainment',
};

products['melissa-doug-mickey-magnets'] = {
  id: 'melissa-doug-mickey-magnets',
  name: 'Mickey Mouse Wooden Magnets',
  shortDescription: 'A wooden magnet activity set for quiet, screen-free play.',
  affiliateProgram: 'amazon',
  amazonAsin: 'B00P2SL7JI',
  category: 'entertainment',
};
