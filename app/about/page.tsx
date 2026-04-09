import type { Metadata } from "next";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import EmailCapture from "@/components/EmailCapture";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Our Family Story | About Pixie Dust Family",
  description:
    "We're an Orlando-area family with a toddler and grandparents who love Walt Disney World. No real names, no sponsored posts — just honest reviews from a real family.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BreadcrumbNav crumbs={[{ label: "Home", href: "/" }, { label: "About" }]} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-12">
          <div>
            <p className="text-[#0072CE] text-sm font-semibold uppercase tracking-wider mb-3">Our Story</p>
            <h1
              className="text-4xl font-bold text-[#0D1B2A] mb-6"
              style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
            >
              Just a Real Family Who Loves Disney
            </h1>
            <div className="prose prose-lg max-w-none text-[#4A5568] space-y-4">
              <p>
                We&apos;re an Orlando-area family — husband, wife, and a toddler who has been to Walt Disney World more times than most adults we know. We started bringing him when he was 18 months old. He&apos;s been back every year since.
              </p>
              <p>
                We keep our names off this site intentionally. Not because we&apos;re secretive, but because this blog is about the experiences, not us. Our son&apos;s privacy matters more than our personal brand.
              </p>
              <p>
                We bring the grandparents whenever we can. They&apos;re in their 70s and came into this skeptically. Now they&apos;re the ones asking when we&apos;re going back. Watching three generations experience Disney together is something we didn&apos;t expect to love as much as we do.
              </p>
              <p>
                We&apos;ve stayed at every Deluxe resort on this site. We paid for every room. Nobody comped us, nobody reviewed our posts before publishing, and nobody sponsored any of our trips.
              </p>
              <p>
                What we write is what we actually experienced. When something is bad, we say it. When something exceeded expectations, we say that too.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {/* PHOTO SLOT: replace with real family vacation photo */}
            <PhotoPlaceholder label="Our family at Walt Disney World" aspectRatio="4/3" />
            {/* PHOTO SLOT: replace with real vacation photo */}
            <PhotoPlaceholder label="At the Animal Kingdom Lodge savanna" aspectRatio="4/3" />
          </div>
        </div>

        <div className="bg-[#E8F4FD] border border-[#D1E3F5] rounded-2xl p-8 mb-12">
          <h2
            className="text-2xl font-bold text-[#0D1B2A] mb-4"
            style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
          >
            What Makes This Blog Different
          </h2>
          <ul className="space-y-3">
            {[
              "Every review is from a real, paid stay — we&apos;ve never been comped a room",
              "We include a Toddler Score and Grandparent Score on every resort review",
              "We write about things we didn&apos;t love as clearly as things we did",
              "No sponsored content, period",
              "We update reviews after return visits — our opinions evolve with the resorts",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#0072CE] mt-1 shrink-0">✓</span>
                <span
                  className="text-[#0D1B2A]"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="max-w-3xl mx-auto">
          <EmailCapture />
        </div>
      </div>
    </div>
  );
}
