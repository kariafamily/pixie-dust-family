"use client";

import Script from "next/script";

export default function EmailCapture() {
  return (
    <section className="bg-[#003D7A] text-white rounded-3xl p-10 sm:p-14">
      <div className="max-w-xl mx-auto text-center">

        <span
          className="inline-block bg-[#E8F4FD] text-[#003D7A] text-xs font-semibold tracking-luxury uppercase px-3 py-1 rounded-full mb-5"
        >
          ✦ Disney Planning Email
        </span>

        <h2
          className="text-[clamp(1.8rem,4vw,2.8rem)] font-light mb-4 leading-snug"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Disney With a Toddler —
          <em className="block" style={{ fontStyle: "italic", color: "#0072CE" }}>
            Real Tips by Email
          </em>
        </h2>

        <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
          Honest planning tips from a real family. No spam, ever. As a welcome gift, we&apos;ll
          send you our complete Disney toddler packing list.
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
