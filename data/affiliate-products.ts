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
