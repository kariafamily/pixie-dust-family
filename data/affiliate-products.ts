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
