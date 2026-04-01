interface QuickStatsProps {
  location?: string;
  tier?: string;
  bestFor?: string[];
  poolRating?: number;
  toddlerScore?: number;
  diningRating?: number;
}

export default function QuickStats({
  location,
  tier,
  bestFor,
  poolRating,
  toddlerScore,
  diningRating,
}: QuickStatsProps) {
  const pills = [
    location && { icon: "📍", label: "Location", value: location },
    tier && { icon: "⭐", label: "Tier", value: tier },
    poolRating && { icon: "🏊", label: "Pool", value: `${poolRating}/10` },
    toddlerScore && { icon: "👶", label: "Toddler Score", value: `${toddlerScore}/10` },
    diningRating && { icon: "🍽", label: "Dining", value: `${diningRating}/10` },
    bestFor && bestFor.length > 0 && { icon: "💡", label: "Best For", value: bestFor.slice(0, 2).join(", ") },
  ].filter(Boolean) as { icon: string; label: string; value: string }[];

  return (
    <div className="bg-[#E8F4FD] border border-[#D1E3F5] rounded-2xl p-4 sm:p-6">
      <div className="flex flex-wrap gap-3">
        {pills.map((pill) => (
          <div
            key={pill.label}
            className="flex items-center gap-2 bg-white border border-[#D1E3F5] rounded-full px-4 py-2"
          >
            <span>{pill.icon}</span>
            <div>
              <span className="text-[#4A5568] text-xs block leading-none">{pill.label}</span>
              <span className="text-[#003D7A] text-sm font-semibold">{pill.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
