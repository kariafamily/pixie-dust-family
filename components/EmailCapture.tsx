"use client";

import Script from "next/script";

export default function EmailCapture() {
  return (
    <section className="bg-[#2C1F1A] text-white rounded-3xl p-10 sm:p-14">
      <div className="max-w-xl mx-auto text-center">

        <span
          className="inline-block text-[#C9A55A] text-xs tracking-luxury uppercase mb-5"
        >
          ✦ Free Download
        </span>

        <h2
          className="text-[clamp(1.8rem,4vw,2.8rem)] font-light mb-4 leading-snug"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          The Disney Toddler Packing List
          <em className="block" style={{ fontStyle: "italic", color: "#C4978F" }}>
            We Actually Use
          </em>
        </h2>

        <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
          27 items field-tested across multiple WDW trips — the things we&apos;d never leave
          home without, and a few we wish we&apos;d left behind.
        </p>

        {/* Kit inline form embed — form ID 9294666 */}
        <div className="mb-6">
          <Script
            async
            data-uid="9294666"
            src="https://pixiedustfamily.ck.page/9294666/index.js"
            strategy="lazyOnload"
          />
        </div>

        <p className="text-white/30 text-xs tracking-wide">
          No spam · Unsubscribe anytime ·{" "}
          <a href="/privacy-policy" className="underline hover:text-white/50 transition-colors">
            Privacy Policy
          </a>
        </p>
      </div>
    </section>
  );
}
