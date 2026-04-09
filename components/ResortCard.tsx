import Link from "next/link";
import PhotoPlaceholder from "./PhotoPlaceholder";

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
      className="pixie-hover group block bg-white rounded-2xl overflow-hidden border border-[#E8DAD7] hover:border-[#C4978F] transition-colors"
    >
      {/* Photo */}
      <div className="relative overflow-hidden">
        {/* PHOTO SLOT: replace with real vacation photo */}
        <PhotoPlaceholder label={`${title} — resort photo`} aspectRatio="4/3" />
        {rank && (
          <div className="absolute top-3 left-3 bg-[#C9A55A] text-white text-xs font-medium px-2.5 py-1 rounded-full tracking-wide">
            #{rank}
          </div>
        )}
        <div className="absolute top-3 right-3 bg-[#FAF8F4] text-[#6B5248] text-xs px-2.5 py-1 rounded-full border border-[#E8DAD7]">
          {tier}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="text-[#2C1F1A] text-xl font-light mb-2 group-hover:text-[#A67B73] transition-colors leading-snug"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          {title}
        </h3>

        {/* Scores as clean number pills */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-[#6B5248] bg-[#F5EDEB] px-2.5 py-1 rounded-full border border-[#E8DAD7]">
            ★ {ourRating}/5
          </span>
          <span className="text-xs text-[#6B5248] bg-[#EDF1EC] px-2.5 py-1 rounded-full border border-[#E8DAD7]">
            👶 {toddlerScore}/10
          </span>
        </div>

        <p className="text-[#6B5248] text-sm leading-relaxed line-clamp-2 mb-4">
          {description}
        </p>

        <span className="text-[#C9A55A] text-xs font-medium tracking-wide group-hover:underline">
          Read Review →
        </span>
      </div>
    </Link>
  );
}
