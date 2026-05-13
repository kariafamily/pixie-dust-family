"use client";

import { products, getAffiliateUrl } from "@/data/affiliate-products";

interface Props {
  productId: string;
  children: React.ReactNode;
}

export default function AffiliateLink({ productId, children }: Props) {
  const product = products[productId];

  if (!product) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        `[AffiliateLink] No product found for productId: "${productId}". Rendering as plain text.`
      );
    }
    return <>{children}</>;
  }

  return (
    <a
      href={getAffiliateUrl(product)}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      className="text-[#003D7A] underline hover:text-[#0072CE] transition-colors"
      data-affiliate-link="true"
      data-affiliate-program={product.affiliateProgram}
    >
      {children}
    </a>
  );
}
