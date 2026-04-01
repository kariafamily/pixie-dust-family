import PhotoPlaceholder from "./PhotoPlaceholder";
import RatingStars from "./RatingStars";
import ToddlerScore from "./ToddlerScore";

interface ResortHeroProps {
  title: string;
  tier: string;
  ourRating: number;
  toddlerScore: number;
  dateVisited?: string;
  stayLength?: string;
}

export default function ResortHero({
  title,
  tier,
  ourRating,
  toddlerScore,
  dateVisited,
  stayLength,
}: ResortHeroProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-none sm:rounded-2xl">
      {/* PHOTO SLOT: replace with real hero vacation photo */}
      <div className="relative">
        <PhotoPlaceholder label={`${title} — hero photo`} aspectRatio="2/1" className="rounded-none sm:rounded-2xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#003D7A]/80 via-transparent to-transparent rounded-none sm:rounded-2xl" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#0072CE] text-white text-xs font-semibold px-3 py-1 rounded-full">
              {tier} Resort
            </span>
            {dateVisited && (
              <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                Visited {dateVisited}
              </span>
            )}
          </div>
          <h1
            className="text-white text-3xl sm:text-5xl font-bold mb-3 leading-tight"
            style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
          >
            {title}
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <RatingStars rating={ourRating} size="md" />
              <span className="text-white/80 text-sm">{ourRating}/5</span>
            </div>
            <ToddlerScore score={toddlerScore} size="md" />
            {stayLength && (
              <span className="text-white/80 text-sm">
                🗓 {stayLength} stay
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
