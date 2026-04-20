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
    <div className="relative w-full overflow-hidden rounded-none sm:rounded-2xl bg-gradient-to-br from-[#003D7A] via-[#00519e] to-[#0072CE]">
      <div className="px-6 sm:px-10 py-14 sm:py-20">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {tier} Resort
          </span>
          {dateVisited && (
            <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
              Visited {dateVisited}
            </span>
          )}
        </div>
        <h1
          className="text-white text-3xl sm:text-5xl font-bold mb-4 leading-tight max-w-3xl"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
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
  );
}
