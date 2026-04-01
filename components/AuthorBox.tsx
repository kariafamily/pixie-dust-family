import PhotoPlaceholder from "./PhotoPlaceholder";

interface AuthorBoxProps {
  dateVisited?: string;
  stayLength?: string;
  travelParty?: string;
}

export default function AuthorBox({ dateVisited, stayLength, travelParty }: AuthorBoxProps) {
  return (
    <div className="bg-[#F5F8FF] border border-[#D1E3F5] rounded-2xl p-6">
      <h3
        className="text-lg font-bold text-[#0D1B2A] mb-4"
        style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
      >
        About This Review
      </h3>
      <div className="flex gap-4">
        <div className="shrink-0 w-16 h-16 rounded-full overflow-hidden">
          {/* PHOTO SLOT: replace with real family photo */}
          <PhotoPlaceholder label="Family photo" aspectRatio="1/1" />
        </div>
        <div>
          <p className="font-semibold text-[#0D1B2A] mb-1">An Orlando-Area Family</p>
          <p className="text-[#4A5568] text-sm leading-relaxed mb-3">
            We&apos;re a husband-and-wife team based near Orlando who started visiting Walt Disney World Deluxe resorts when our toddler was just 18 months old. We bring the grandparents along whenever we can. These reviews are based on real, paid stays — no complimentary rooms, no PR trips.
          </p>
          {(dateVisited || stayLength || travelParty) && (
            <div className="flex flex-wrap gap-3 text-xs">
              {dateVisited && (
                <span className="bg-[#E8F4FD] text-[#003D7A] px-3 py-1 rounded-full font-medium">
                  📅 Visited: {dateVisited}
                </span>
              )}
              {stayLength && (
                <span className="bg-[#E8F4FD] text-[#003D7A] px-3 py-1 rounded-full font-medium">
                  🗓 {stayLength}
                </span>
              )}
              {travelParty && (
                <span className="bg-[#E8F4FD] text-[#003D7A] px-3 py-1 rounded-full font-medium">
                  👨‍👩‍👧 {travelParty}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
