import Link from "next/link";
import PhotoPlaceholder from "./PhotoPlaceholder";
import RatingStars from "./RatingStars";
import ToddlerScore from "./ToddlerScore";

interface ResortCardProps {
  title: string;
  slug: string;
  tier: string;
  ourRating: number;
  toddlerScore: number;
  description: string;
  rank?: number;
}

export default function ResortCard({
  title,
  slug,
  tier,
  ourRating,
  toddlerScore,
  description,
  rank,
}: ResortCardProps) {
  return (
    <Link
      href={`/resorts/${slug}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-[#D1E3F5] hover:border-[#0072CE] transition-all hover:shadow-lg"
    >
      <div className="relative">
        {/* PHOTO SLOT: replace with real vacation photo */}
        <PhotoPlaceholder label={`${title} — resort photo`} aspectRatio="16/9" />
        {rank && (
          <div className="absolute top-3 left-3 bg-[#003D7A] text-white text-xs font-bold px-2.5 py-1 rounded-full">
            #{rank} Our Pick
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white text-[#003D7A] text-xs font-semibold px-2.5 py-1 rounded-full border border-[#D1E3F5]">
          {tier}
        </div>
      </div>

      <div className="p-5">
        <h3
          className="font-semibold text-[#0D1B2A] text-lg mb-1 group-hover:text-[#0072CE] transition-colors"
          style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
        >
          {title}
        </h3>

        <div className="flex items-center gap-3 mb-3">
          <RatingStars rating={ourRating} size="sm" />
          <ToddlerScore score={toddlerScore} size="sm" showLabel={false} />
        </div>

        <p className="text-[#4A5568] text-sm leading-relaxed line-clamp-2 mb-4">
          {description}
        </p>

        <span className="text-[#0072CE] text-sm font-semibold group-hover:underline">
          Read Review →
        </span>
      </div>
    </Link>
  );
}
