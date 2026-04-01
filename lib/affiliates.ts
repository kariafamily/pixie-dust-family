interface ResortAffiliateLinks {
  bookingCom: string;
  expedia: string;
  getAwayToday: string;
  label: string;
  disclaimer: string;
}

interface AmazonAffiliateLinks {
  babyZenYoyo: string;
  uppababyCruz: string;
  label: string;
  disclaimer: string;
}

type AffiliateLinks = ResortAffiliateLinks | AmazonAffiliateLinks;

export const affiliates: Record<string, AffiliateLinks> = {
  polynesian: {
    bookingCom: "BOOKING_COM_LINK_HERE",
    expedia: "EXPEDIA_LINK_HERE",
    getAwayToday: "GET_AWAY_TODAY_LINK_HERE",
    label: "Disney's Polynesian Village Resort",
    disclaimer: "Affiliate link — we may earn a commission at no extra cost to you.",
  },
  grandFloridian: {
    bookingCom: "BOOKING_COM_LINK_HERE",
    expedia: "EXPEDIA_LINK_HERE",
    getAwayToday: "GET_AWAY_TODAY_LINK_HERE",
    label: "Disney's Grand Floridian Resort & Spa",
    disclaimer: "Affiliate link — we may earn a commission at no extra cost to you.",
  },
  animalKingdomLodge: {
    bookingCom: "BOOKING_COM_LINK_HERE",
    expedia: "EXPEDIA_LINK_HERE",
    getAwayToday: "GET_AWAY_TODAY_LINK_HERE",
    label: "Disney's Animal Kingdom Lodge",
    disclaimer: "Affiliate link — we may earn a commission at no extra cost to you.",
  },
  wildernessLodge: {
    bookingCom: "BOOKING_COM_LINK_HERE",
    expedia: "EXPEDIA_LINK_HERE",
    getAwayToday: "GET_AWAY_TODAY_LINK_HERE",
    label: "Disney's Wilderness Lodge",
    disclaimer: "Affiliate link — we may earn a commission at no extra cost to you.",
  },
  beachClub: {
    bookingCom: "BOOKING_COM_LINK_HERE",
    expedia: "EXPEDIA_LINK_HERE",
    getAwayToday: "GET_AWAY_TODAY_LINK_HERE",
    label: "Disney's Beach Club Resort",
    disclaimer: "Affiliate link — we may earn a commission at no extra cost to you.",
  },
  boardwalkInn: {
    bookingCom: "BOOKING_COM_LINK_HERE",
    expedia: "EXPEDIA_LINK_HERE",
    getAwayToday: "GET_AWAY_TODAY_LINK_HERE",
    label: "Disney's BoardWalk Inn",
    disclaimer: "Affiliate link — we may earn a commission at no extra cost to you.",
  },
  amazon: {
    babyZenYoyo: "AMAZON_LINK_HERE",
    uppababyCruz: "AMAZON_LINK_HERE",
    label: "Amazon Associates",
    disclaimer: "As an Amazon Associate we earn from qualifying purchases.",
  },
};
