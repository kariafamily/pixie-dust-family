"use client";

import { useState } from "react";

interface StickyAffiliateBannerProps {
  resortName: string;
  affiliateKey: string;
}

export default function StickyAffiliateBanner({ resortName, affiliateKey }: StickyAffiliateBannerProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#003D7A] text-white border-t border-[#0072CE] shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <p className="text-sm hidden sm:block">
          Planning to stay at {resortName}?
        </p>
        <a
          href="/plan-your-trip"
          className="bg-[#0072CE] hover:bg-[#005fa3] text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors whitespace-nowrap"
        >
          Staying at {resortName}? Book here →
        </a>
        <button
          onClick={() => setDismissed(true)}
          className="text-white/60 hover:text-white transition-colors shrink-0"
          aria-label="Dismiss banner"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
