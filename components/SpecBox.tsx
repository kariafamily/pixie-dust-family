import Link from "next/link";

interface SpecBoxProps {
  ourRating: number;
  toddlerScore: number;
  pricePerNight?: string;
  pricingContext?: string;
  location?: string;
  transport?: string;
  pool?: string;
  bestRoom?: string;
  bookingUrl?: string;
  dateVisited?: string;
  stayLength?: string;
}

function Stars({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} style={{ color: i < rating ? "#C9963A" : "#E2DDD6", fontSize: "18px" }}>★</span>
      ))}
    </div>
  );
}

const quickFacts: { key: keyof SpecBoxProps; label: string }[] = [
  { key: "location", label: "Location" },
  { key: "transport", label: "Transportation" },
  { key: "pool", label: "Pool" },
  { key: "bestRoom", label: "Best Room Type" },
  { key: "dateVisited", label: "When We Visited" },
  { key: "stayLength", label: "Length of Stay" },
];

export default function SpecBox({
  ourRating,
  toddlerScore,
  pricePerNight,
  pricingContext,
  location,
  transport,
  pool,
  bestRoom,
  bookingUrl,
  dateVisited,
  stayLength,
}: SpecBoxProps) {
  const facts = quickFacts.filter(({ key }) => {
    const val = { location, transport, pool, bestRoom, dateVisited, stayLength }[key as string];
    return !!val;
  });

  return (
    <div
      className="rounded-2xl bg-white overflow-hidden not-prose"
      style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)", border: "1px solid #E2DDD6" }}
    >
      {/* Top row: ratings + booking CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 border-b" style={{ borderColor: "#E2DDD6" }}>
        <div className="flex items-center gap-6">
          <div>
            <Stars rating={ourRating} />
            <p className="text-xs mt-1" style={{ color: "#6B7280" }}>Our Rating</p>
          </div>
          <div className="w-px h-10" style={{ backgroundColor: "#E2DDD6" }} />
          <div>
            <p
              className="font-bold text-2xl leading-none"
              style={{ color: "#C9963A", fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {toddlerScore}/10
            </p>
            <p className="text-xs mt-1" style={{ color: "#6B7280" }}>Toddler Score</p>
          </div>
          <div className="w-px h-10" style={{ backgroundColor: "#E2DDD6" }} />
          <Link
            href="#how-we-score"
            className="text-xs underline"
            style={{ color: "#0072CE" }}
          >
            How we score →
          </Link>
        </div>

        {bookingUrl && (
          <div className="flex-shrink-0">
            <a
              href={bookingUrl}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="inline-flex flex-col items-center px-5 py-2.5 rounded-xl text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#0072CE" }}
            >
              <span className="text-sm font-semibold">Check Availability →</span>
              <span className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.8)" }}>
                via Undercover Tourist (saves up to 25%)
              </span>
            </a>
          </div>
        )}
      </div>

      {/* What We Paid */}
      {pricePerNight && (
        <div className="mx-6 my-5 rounded-xl px-5 py-4" style={{ backgroundColor: "#FDF6EC", border: "1px solid #C9963A" }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#C9963A" }}>What We Paid</p>
          <p
            className="font-bold text-xl leading-snug"
            style={{ color: "#1A1A2E", fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            {pricePerNight}
          </p>
          {pricingContext && (
            <p className="text-sm mt-1" style={{ color: "#6B7280" }}>
              {pricingContext}{" "}
              <Link href="/tips/disney-world-trip-cost-breakdown" className="underline" style={{ color: "#0072CE" }}>
                Cost breakdown →
              </Link>
            </p>
          )}
        </div>
      )}

      {/* Quick facts grid */}
      {facts.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t" style={{ borderColor: "#E2DDD6" }}>
          {facts.map(({ key, label }) => {
            const val = { location, transport, pool, bestRoom, dateVisited, stayLength }[key as string];
            return (
              <div key={key} className="px-6 py-3 border-b sm:even:border-l" style={{ borderColor: "#E2DDD6" }}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "#6B7280" }}>{label}</p>
                <p className="text-sm" style={{ color: "#1A1A2E" }}>{val}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
