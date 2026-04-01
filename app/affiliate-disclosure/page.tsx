import type { Metadata } from "next";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | Pixie Dust Family",
  description: "FTC-required affiliate disclosure for Pixie Dust Family.",
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BreadcrumbNav crumbs={[{ label: "Home", href: "/" }, { label: "Affiliate Disclosure" }]} />

        <h1
          className="text-4xl font-bold text-[#0D1B2A] mb-2"
          style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
        >
          Affiliate Disclosure
        </h1>
        <p className="text-[#4A5568] text-sm mb-8">Last updated: January 2025</p>

        <div className="prose prose-lg max-w-none text-[#4A5568] space-y-6">
          <section>
            <p>
              Pixie Dust Family participates in affiliate marketing programs, which means we may earn commissions when you click certain links and make purchases or bookings. This is disclosed in compliance with the U.S. Federal Trade Commission (FTC) guidelines on endorsements and testimonials.
            </p>
          </section>

          <section>
            <h2 className="text-[#0D1B2A]">What This Means</h2>
            <p>
              When you click an affiliate link and make a purchase or booking, we may receive a small commission from the retailer or booking platform at no additional cost to you. The price you pay is the same whether or not you use our affiliate links.
            </p>
          </section>

          <section>
            <h2 className="text-[#0D1B2A]">Our Affiliate Relationships</h2>
            <p>We maintain affiliate relationships with the following types of companies:</p>
            <ul>
              <li>Hotel booking platforms (Booking.com, Expedia)</li>
              <li>Disney vacation specialists (Get Away Today)</li>
              <li>Amazon Associates program (for gear recommendations)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#0D1B2A]">Our Editorial Independence</h2>
            <p>
              Our editorial opinions are never influenced by our affiliate relationships. We review and recommend products and services based on our actual experiences. We do not accept payment for positive reviews, and we do not allow affiliate partners to review or approve our content before publication.
            </p>
            <p>
              All of our resort reviews are based on real, paid stays that we funded ourselves. We have never received a complimentary hotel stay in exchange for coverage.
            </p>
          </section>

          <section>
            <h2 className="text-[#0D1B2A]">Amazon Associates</h2>
            <p>
              Pixie Dust Family is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. As an Amazon Associate, we earn from qualifying purchases.
            </p>
          </section>

          <section>
            <h2 className="text-[#0D1B2A]">Questions?</h2>
            <p>
              If you have questions about our affiliate relationships or editorial policy, please{" "}
              <a href="/contact" className="text-[#0072CE] underline">contact us</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
