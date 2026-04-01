import { affiliates } from "@/lib/affiliates";

interface AffiliateBoxProps {
  affiliateKey: string;
  placement?: "top" | "bottom";
}

export default function AffiliateBox({ affiliateKey, placement = "top" }: AffiliateBoxProps) {
  const aff = affiliates[affiliateKey];
  if (!aff) return null;

  return (
    <div className="bg-[#E8F4FD] border-2 border-[#0072CE] rounded-2xl p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-[#003D7A] font-semibold text-lg mb-1">
            Ready to book {aff.label}?
          </p>
          <p className="text-[#4A5568] text-sm">
            Compare rates and find the best price for your family.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 shrink-0">
          {"bookingCom" in aff && aff.bookingCom !== "BOOKING_COM_LINK_HERE" && (
            <a
              href={aff.bookingCom as string}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="bg-[#0072CE] hover:bg-[#005fa3] text-white font-semibold px-5 py-2.5 rounded-full text-sm text-center transition-colors"
            >
              Book on Booking.com
            </a>
          )}
          {"getAwayToday" in aff && aff.getAwayToday !== "GET_AWAY_TODAY_LINK_HERE" && (
            <a
              href={aff.getAwayToday as string}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="bg-[#003D7A] hover:bg-[#002d5a] text-white font-semibold px-5 py-2.5 rounded-full text-sm text-center transition-colors"
            >
              Get Away Today →
            </a>
          )}
          {(("bookingCom" in aff && aff.bookingCom === "BOOKING_COM_LINK_HERE") ||
            !("bookingCom" in aff)) && (
            <a
              href="/plan-your-trip"
              className="bg-[#0072CE] hover:bg-[#005fa3] text-white font-semibold px-5 py-2.5 rounded-full text-sm text-center transition-colors"
            >
              Book {aff.label} →
            </a>
          )}
        </div>
      </div>
      <p className="text-[#4A5568] text-xs mt-3">
        {aff.disclaimer}
      </p>
    </div>
  );
}
