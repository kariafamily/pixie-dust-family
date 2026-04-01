import type { Metadata } from "next";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Privacy Policy | Pixie Dust Family",
  description: "Privacy policy for Pixie Dust Family — how we collect and use data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BreadcrumbNav crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />

        <h1
          className="text-4xl font-bold text-[#0D1B2A] mb-2"
          style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
        >
          Privacy Policy
        </h1>
        <p className="text-[#4A5568] text-sm mb-8">Last updated: January 2025</p>

        <div className="prose prose-lg max-w-none text-[#4A5568] space-y-6">
          <section>
            <h2 className="text-[#0D1B2A]">Information We Collect</h2>
            <p>
              We collect information you voluntarily provide when you subscribe to our email list, including your email address. We also collect anonymized analytics data through Google Analytics 4 to understand how visitors use our site.
            </p>
          </section>

          <section>
            <h2 className="text-[#0D1B2A]">How We Use Your Information</h2>
            <p>
              Email addresses are used only to send you content you&apos;ve subscribed to receive. We never sell or share your email address with third parties for marketing purposes. Analytics data is used to improve our content and user experience.
            </p>
          </section>

          <section>
            <h2 className="text-[#0D1B2A]">Cookies</h2>
            <p>
              We use cookies for analytics (Google Analytics 4) and potentially for affiliate tracking purposes when you click links to third-party booking sites. You can disable cookies in your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-[#0D1B2A]">Third-Party Services</h2>
            <p>
              This site uses Google Analytics 4 for traffic analysis and Kit (formerly ConvertKit) for email list management. Both are subject to their respective privacy policies. Affiliate links may be tracked by booking platforms such as Booking.com, Expedia, and Get Away Today.
            </p>
          </section>

          <section>
            <h2 className="text-[#0D1B2A]">Email Unsubscribe</h2>
            <p>
              Every email we send includes an unsubscribe link. You can remove yourself from our list at any time.
            </p>
          </section>

          <section>
            <h2 className="text-[#0D1B2A]">Children&apos;s Privacy</h2>
            <p>
              We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-[#0D1B2A]">Contact</h2>
            <p>
              Questions about this privacy policy? Contact us through our{" "}
              <a href="/contact" className="text-[#0072CE] underline">contact page</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
