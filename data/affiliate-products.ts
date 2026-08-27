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
