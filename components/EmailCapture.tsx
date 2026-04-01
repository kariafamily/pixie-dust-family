export default function EmailCapture() {
  const kitFormId = process.env.NEXT_PUBLIC_KIT_FORM_ID;

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

        {/* Kit (ConvertKit) form embed — add your form ID to .env.local */}
        {/* FORM SLOT: Replace the div below with your Kit embed script */}
        <div className="bg-white/10 border border-white/20 rounded-xl p-6 mb-4">
          {kitFormId ? (
            <script
              // Kit form embed goes here
              // Replace this comment with: data-uid={kitFormId}
              async
              src={`https://pixiedustfamily.kit.com/${kitFormId}/index.js`}
            />
          ) : (
            <div className="text-center">
              <p className="text-white/60 text-sm mb-3">
                [Kit email form will appear here]
              </p>
              <p className="text-white/40 text-xs">
                Set NEXT_PUBLIC_KIT_FORM_ID in your .env.local file
              </p>
              <div className="flex gap-2 mt-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2.5 rounded-l-full text-[#0D1B2A] text-sm focus:outline-none"
                  disabled
                />
                <button
                  className="bg-[#0072CE] text-white px-6 py-2.5 rounded-r-full text-sm font-semibold opacity-50"
                  disabled
                >
                  Get the List
                </button>
              </div>
            </div>
          )}
        </div>

        <p className="text-white/40 text-xs">
          No spam, ever. Unsubscribe anytime. We respect your privacy.{" "}
          <a href="/privacy-policy" className="underline hover:text-white/60">Privacy Policy</a>
        </p>
      </div>
    </section>
  );
}
