"use client";

import Script from "next/script";

export default function EmailCapture() {
  return (
    <section className="bg-[#003D7A] text-white rounded-2xl p-8 sm:p-12">
      <div className="max-w-xl mx-auto text-center">
        <span className="inline-block bg-[#0072CE] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
          FREE
        </span>
        <h2
          className="text-2xl sm:text-3xl font-bold mb-3"
          style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
        >
          The Disney Toddler Packing List We Actually Use
        </h2>
        <p className="text-white/80 mb-6">
          27 items field-tested across multiple WDW trips. The things we&apos;d never leave home without — and a few things we wish we&apos;d left behind.
        </p>

        {/* Kit inline form embed */}
        <div className="mb-4">
          <Script
            async
            data-uid="9294666"
            src="https://pixiedustfamily.ck.page/9294666/index.js"
            strategy="lazyOnload"
          />
        </div>

        <p className="text-white/40 text-xs">
          No spam, ever. Unsubscribe anytime. We respect your privacy.{" "}
          <a href="/privacy-policy" className="underline hover:text-white/60">
            Privacy Policy
          </a>
        </p>
      </div>
    </section>
  );
}
