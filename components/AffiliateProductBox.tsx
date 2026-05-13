"use client";

import Image from "next/image";
import { products, getAffiliateUrl } from "@/data/affiliate-products";
import type { AffiliateProduct } from "@/data/affiliate-products";

interface Props {
  productId: string;
  variant?: "default" | "compact";
}

const BOOKING_CATEGORIES: AffiliateProduct["category"][] = [
  "tickets",
  "lodging",
  "rental",
];

function getButtonLabel(product: AffiliateProduct): string {
  if (product.affiliateProgram === "amazon") return "Check Price on Amazon";
  if (BOOKING_CATEGORIES.includes(product.category)) return "Book Now";
  return "Check Price";
}

export default function AffiliateProductBox({ productId, variant = "default" }: Props) {
  const product = products[productId];

  if (!product) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        `[AffiliateProductBox] No product found for productId: "${productId}". Rendering nothing.`
      );
    }
    return null;
  }

  const url = getAffiliateUrl(product);
  const buttonLabel = getButtonLabel(product);

  if (variant === "compact") {
    return (
      <a
        href={url}
        target="_blank"
        rel="sponsored nofollow noopener noreferrer"
        data-affiliate-link="true"
        data-affiliate-program={product.affiliateProgram}
        className="flex items-center gap-3 p-3 border border-[#D1E3F5] rounded-xl hover:border-[#0072CE] hover:bg-[#E8F4FD] transition-all group not-prose"
      >
        {product.image && (
          <div className="w-14 h-14 flex-shrink-0 relative rounded-lg overflow-hidden bg-white border border-[#D1E3F5]">
            <Image src={product.image} alt={product.name} fill className="object-contain p-1" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-[#0D1B2A] group-hover:text-[#003D7A] transition-colors line-clamp-2">
            {product.name}
          </p>
          {product.brand && (
            <p className="text-xs text-[#4A5568] mt-0.5">{product.brand}</p>
          )}
          {product.priceRange && (
            <p className="text-xs text-[#4A5568]">{product.priceRange}</p>
          )}
        </div>
        <span className="text-xs font-semibold text-[#003D7A] group-hover:text-[#0072CE] whitespace-nowrap transition-colors">
          {buttonLabel} →
        </span>
      </a>
    );
  }

  return (
    <div className="not-prose my-6 border border-[#D1E3F5] rounded-2xl bg-[#E8F4FD] overflow-hidden">
      <div className="flex flex-col sm:flex-row gap-0">
        {product.image && (
          <div className="sm:w-40 w-full h-48 sm:h-auto flex-shrink-0 relative bg-white border-b sm:border-b-0 sm:border-r border-[#D1E3F5]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-4"
            />
          </div>
        )}
        <div className="flex-1 p-5 flex flex-col justify-between">
          <div>
            {product.brand && (
              <p className="text-xs text-[#4A5568] mb-1">{product.brand}</p>
            )}
            <h3
              className="text-lg font-bold text-[#0D1B2A] mb-2"
              style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
            >
              {product.name}
            </h3>
            {product.shortDescription && (
              <p className="text-sm text-[#4A5568] mb-3">{product.shortDescription}</p>
            )}
            {product.priceRange && (
              <p className="text-sm font-semibold text-[#003D7A] mb-4">{product.priceRange}</p>
            )}
          </div>
          <div>
            <a
              href={url}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              data-affiliate-link="true"
              data-affiliate-program={product.affiliateProgram}
              className="inline-block bg-[#003D7A] hover:bg-[#0072CE] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              {buttonLabel} →
            </a>
            <p className="text-xs text-[#4A5568] italic mt-2">Affiliate link</p>
          </div>
        </div>
      </div>
    </div>
  );
}
