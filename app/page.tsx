import type { Metadata } from "next";
import Link from "next/link";
import ResortCard from "@/components/ResortCard";
import TipCard from "@/components/TipCard";
import EmailCapture from "@/components/EmailCapture";
import { getAllMDXByType } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Pixie Dust Family | Honest Disney World Deluxe Resort Reviews",
  description:
    "Honest Walt Disney World Deluxe resort reviews from a real family with a toddler.",
};

const resorts = [
  { title: "Polynesian Village Resort", slug: "polynesian-village-resort-review", tier: "Deluxe", ourRating: 5, toddlerScore: 9.5, description: "The Monorail access and Lava Pool make this our top pick for families with young children.", rank: 1 },
  { title: "Animal Kingdom Lodge", slug: "animal-kingdom-lodge-review", tier: "Deluxe", ourRating: 5, toddlerScore: 10, description: "Giraffes outside your balcony. Genuinely unmatched wonder for toddlers.", rank: 2 },
  { title: "Beach Club Resort", slug: "beach-club-resort-review", tier: "Deluxe", ourRating: 4, toddlerScore: 9, description: "Stormalong Bay is the best pool at Walt Disney World. If pools matter, book here.", rank: 3 },
  { title: "Grand Floridian Resort & Spa", slug: "grand-floridian-resort-review", tier: "Deluxe", ourRating: 4, toddlerScore: 8, description: "Flagship luxury. Best for special occasions and grandparents who love elegance.", rank: 4 },
  { title: "Wilderness Lodge", slug: "wilderness-lodge-review", tier: "Deluxe", ourRating: 4, toddlerScore: 8.5, description: "National Park grandeur, geyser, and boat service to Magic Kingdom.", rank: 5 },
  { title: "BoardWalk Inn", slug: "boardwalk-inn-review", tier: "Deluxe", ourRating: 3, toddlerScore: 7.5, description: "Unique entertainment district. Better for return visitors and adults.", rank: 6 },
];

// Hand-drawn SVG icons for Family Promise section
function IconHeart() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 31c-1-.8-14-9.5-14-17.5A8.5 8.5 0 0 1 18 7.5 8.5 8.5 0 0 1 32 13.5C32 21.5 19 30.2 18 31z"
        stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

function IconStar() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 4l3.8 8.5 9.2 1-6.8 6.4 2 9.1L18 24.5 9.8 29l2-9.1L5 13.5l9.2-1z"
        stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

function IconCamera() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="10" width="28" height="20" rx="3" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="18" cy="20" r="5" stroke="#0072CE" strokeWidth="1.5"/>
      <path d="M13 10l2-4h6l2 4" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 4 L31 9 L31 19 C31 26 18 32 18 32 C18 32 5 26 5 19 L5 9 Z"
        stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M12 18l4 4 8-8" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconCompass() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="13" stroke="#0072CE" strokeWidth="1.5"/>
      <path d="M18 5v3M18 28v3M5 18h3M28 18h3" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M23 13l-4 9-4-9 4-4z" stroke="#0072CE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

const promises = [
  { Icon: IconHeart, title: "Real Family, Real Trips", body: "Every stay was paid out of pocket. No comped rooms. No press packages." },
  { Icon: IconStar, title: "Toddler-Tested", body: "Our son was 18 months on his first trip. These ratings come from lived experience." },
  { Icon: IconCamera, title: "Our Actual Photos", body: "Every image on this site is from our trips. No stock photos. Ever." },
  { Icon: IconShield, title: "Zero Sponsored Content", body: "Affiliate links exist, but they never touch what we write or how we score." },
  { Icon: IconCompass, title: "Grandparent Perspective", body: "Three generations travel together. Every review includes notes for older guests." },
];

const categoryLabel: Record<string, string> = {
  "tip-guide": "Guide",
  "comparison": "Comparison",
  "resort-review": "Resort Review",
};

const categoryHrefPrefix: Record<string, string> = {
  tips: "/tips",
  compare: "/compare",
  resorts: "/resorts",
};

export default function HomePage() {
  // Aggregate latest articles from tips + compare for the blog section
  const tips = getAllMDXByType("tips").map((f) => ({ ...f, _dir: "tips" }));
  const compares = getAllMDXByType("compare").map((f) => ({ ...f, _dir: "compare" }));
  const latestArticles = [...tips, ...compares]
    .sort((a, b) => {
      if (!a.publishedAt || !b.publishedAt) return 0;
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    })
    .slice(0, 3);

  return (
    <div className="pt-16 bg-[#F5F8FF]">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="flex items-center justify-center py-16 sm:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 w-full flex flex-col items-center text-center">

          {/* Pill tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["🏨 Deluxe Only", "👶 Toddler Tested", "📸 Our Real Photos"].map((p) => (
              <span
                key={p}
                className="bg-[#E8F4FD] text-[#003D7A] text-xs font-medium px-4 py-2 rounded-full border border-[#D1E3F5] tracking-wide"
              >
                {p}
              </span>
            ))}
          </div>

          {/* Sparkle cluster — matches favicon shape (4-pointed polygon stars) */}
          <div aria-hidden="true" className="mb-8">
            <svg
              viewBox="0 0 200 112"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[150px] sm:w-[200px] h-auto"
            >
              {/* Left flanking sparkle — Bright Blue */}
              <polygon points="30,16 34,34 52,38 34,42 30,60 26,42 8,38 26,34" fill="#0072CE" />
              {/* Right flanking sparkle — Bright Blue, slightly higher */}
              <polygon points="170,12 173,25 186,28 173,31 170,44 167,31 154,28 167,25" fill="#0072CE" />
              {/* Large center sparkle — Primary Blue */}
              <polygon points="100,23 108,57 142,65 108,73 100,107 92,73 58,65 92,57" fill="#003D7A" />
            </svg>
          </div>

          {/* Brand name */}
          <h1
            className="text-[clamp(2.25rem,5vw,3rem)] font-bold text-[#003D7A] mb-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
          >
            Pixie Dust Family
          </h1>

          {/* Intro line */}
          <p
            className="text-base sm:text-lg text-[#4A5568] mb-10 max-w-[600px] leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
          >
            Honest reviews of Disney&apos;s Deluxe resorts from a real family with a real toddler.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/resorts"
              className="pixie-hover-gold bg-[#0072CE] hover:bg-[#005fa3] text-white font-medium px-8 py-3.5 rounded-full text-sm tracking-wide transition-colors"
            >
              Our Resort Rankings
            </Link>
            <Link
              href="/tips/disney-world-toddler-packing-list"
              className="pixie-hover border border-[#0072CE] text-[#003D7A] hover:bg-[#E8F4FD] font-medium px-8 py-3.5 rounded-full text-sm tracking-wide transition-colors"
            >
              What to Pack
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAMILY PROMISE ───────────────────────────────────────────────── */}
      <section className="bg-[#E8F4FD] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="tracking-luxury text-[#0072CE] text-xs uppercase mb-4">
            Our Commitment
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-light text-[#0D1B2A] mb-3">
            A Family Promise
          </h2>
          <div className="divider-blue mx-auto mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-14">
            {promises.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="pixie-hover flex flex-col items-center gap-3 bg-white rounded-2xl p-6 border border-[#D1E3F5]"
              >
                <Icon />
                <h3 className="font-display text-base font-semibold text-[#0D1B2A] leading-snug">
                  {title}
                </h3>
                <p className="text-[#4A5568] text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <p className="text-[#4A5568] text-sm mb-3 tracking-wide">
            With love from our family to yours,
          </p>
          <p
            className="font-signature text-[#0072CE] text-5xl"
            style={{ fontFamily: "var(--font-great-vibes), cursive" }}
          >
            The Pixie Dust Family
          </p>
        </div>
      </section>

      {/* ── RESORT RANKINGS ─────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <p className="tracking-luxury text-[#0072CE] text-xs uppercase mb-4">Honest Rankings</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-light text-[#0D1B2A] mb-3">
              Walt Disney World Deluxe Resorts
            </h2>
            <div className="divider-blue mx-auto mb-4" />
            <p className="text-[#4A5568] max-w-md mx-auto text-sm leading-relaxed">
              We&apos;ve stayed at all of these. Nap schedules included. These rankings are real.
            </p>
          </div>

          {/* Top pick — full-width feature card */}
          <Link
            href={`/resorts/${resorts[0].slug}`}
            className="pixie-hover group block bg-white rounded-3xl overflow-hidden border border-[#D1E3F5] mb-6 p-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#E8F4FD] text-[#0072CE] text-xs font-semibold px-3 py-1 rounded-full border border-[#0072CE]/30 tracking-wide">
                #1 Our Top Pick
              </span>
              <span className="text-[#0072CE] text-xs border border-[#D1E3F5] px-3 py-1 rounded-full">
                Deluxe
              </span>
            </div>
            <h3 className="font-display text-4xl font-light text-[#0D1B2A] mb-3 group-hover:text-[#003D7A] transition-colors">
              {resorts[0].title}
            </h3>
            <p className="text-[#4A5568] leading-relaxed mb-6 max-w-2xl">
              {resorts[0].description}
            </p>
            <div className="flex items-center gap-6 mb-6">
              <div className="text-center">
                <p className="font-display text-3xl text-[#0072CE]">{resorts[0].toddlerScore}</p>
                <p className="text-xs text-[#4A5568] tracking-wide">Toddler Score</p>
              </div>
              <div className="w-px h-10 bg-[#D1E3F5]" />
              <div className="text-center">
                <p className="font-display text-3xl text-[#0072CE]">{resorts[0].ourRating}/5</p>
                <p className="text-xs text-[#4A5568] tracking-wide">Our Rating</p>
              </div>
            </div>
            <span className="text-[#0072CE] text-sm font-medium tracking-wide group-hover:underline">
              Read Full Review →
            </span>
          </Link>

          {/* #2 pick */}
          <Link
            href={`/resorts/${resorts[1].slug}`}
            className="pixie-hover group block bg-[#E8F4FD] rounded-3xl overflow-hidden border border-[#D1E3F5] mb-10 p-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-white text-[#0072CE] text-xs font-semibold px-3 py-1 rounded-full border border-[#0072CE]/30 tracking-wide">
                #2 Best for Toddlers
              </span>
            </div>
            <h3 className="font-display text-4xl font-light text-[#0D1B2A] mb-3 group-hover:text-[#003D7A] transition-colors">
              {resorts[1].title}
            </h3>
            <p className="text-[#4A5568] leading-relaxed mb-6 max-w-2xl">
              {resorts[1].description}
            </p>
            <div className="flex items-center gap-6 mb-6">
              <div className="text-center">
                <p className="font-display text-3xl text-[#0072CE]">{resorts[1].toddlerScore}</p>
                <p className="text-xs text-[#4A5568] tracking-wide">Toddler Score</p>
              </div>
              <div className="w-px h-10 bg-[#D1E3F5]" />
              <div className="text-center">
                <p className="font-display text-3xl text-[#0072CE]">{resorts[1].ourRating}/5</p>
                <p className="text-xs text-[#4A5568] tracking-wide">Our Rating</p>
              </div>
            </div>
            <span className="text-[#0072CE] text-sm font-medium tracking-wide group-hover:underline">
              Read Full Review →
            </span>
          </Link>

          {/* Remaining 4 resorts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {resorts.slice(2).map((resort) => (
              <ResortCard key={resort.slug} {...resort} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/resorts"
              className="pixie-hover inline-flex items-center gap-2 border border-[#0072CE] text-[#003D7A] hover:bg-[#E8F4FD] font-medium px-8 py-3.5 rounded-full text-sm tracking-wide transition-colors"
            >
              View All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section className="bg-[#E8F4FD] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="tracking-luxury text-[#0072CE] text-xs uppercase mb-4">Our Story</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-[#0D1B2A] mb-2">
            Just a Real Family
          </h2>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] display-italic text-[#0072CE] mb-6">
            Who Loves Disney
          </h2>
          <div className="divider-blue mb-8" />

          <p className="text-[#4A5568] leading-relaxed mb-4">
            We&apos;re a South Florida family. Husband, wife, a toddler with opinions, and grandparents
            who came in skeptically and now ask when we&apos;re going back.
          </p>
          <p className="text-[#4A5568] leading-relaxed mb-8">
            We started visiting Deluxe resorts when our son was 18 months old. Every review on
            this site is from a real, paid stay. Nobody ever comped us a room.
          </p>

          <ul className="space-y-3 mb-10">
            {[
              "6+ Deluxe resort reviews from real stays",
              "Grandparent notes in every single review",
              "No sponsored posts — ever",
              "Toddler score on every property we've visited",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-[#0072CE] text-lg mt-0.5">✦</span>
                <span className="text-[#4A5568] text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/about"
            className="pixie-hover inline-flex items-center gap-2 bg-[#0072CE] hover:bg-[#003D7A] text-white font-medium px-8 py-3.5 rounded-full text-sm tracking-wide transition-colors"
          >
            Read Our Story →
          </Link>
        </div>
      </section>

      {/* ── START HERE — EDITORIAL GUIDES ───────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="tracking-luxury text-[#0072CE] text-xs uppercase mb-4">Begin Here</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-light text-[#0D1B2A]">
              Start Planning
            </h2>
            <div className="divider-blue mx-auto mt-4" />
          </div>

          <Link
            href="/tips/disney-world-with-toddler-complete-guide"
            className="pixie-hover group block bg-[#E8F4FD] border border-[#0072CE]/30 rounded-3xl p-10 sm:p-12 mb-6"
          >
            <p className="tracking-luxury text-[#0072CE] text-xs uppercase mb-4">Complete Guide</p>
            <h3 className="font-display text-3xl sm:text-4xl font-light text-[#0D1B2A] mb-4 group-hover:text-[#003D7A] transition-colors max-w-2xl">
              The Complete Guide to Disney World with a Toddler
            </h3>
            <p className="text-[#4A5568] mb-6 max-w-xl leading-relaxed">
              Everything we wish we&apos;d known — nap strategy, best rides, character meetings,
              what to skip, and how to actually enjoy yourself.
            </p>
            <span className="text-[#0072CE] text-sm font-medium tracking-wide group-hover:underline">
              Read the Full Guide →
            </span>
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <TipCard icon="🏝" category="Resort Review" title="Polynesian Village: Our #1 Pick" description="Monorail access, volcano pool, character dining — why we keep returning." readTime="8 min" href="/resorts/polynesian-village-resort-review" />
            <TipCard icon="👴" category="Planning" title="Disney World with Grandparents" description="Multigenerational trips are magical when you plan for different stamina levels." readTime="8 min" href="/tips/disney-world-with-grandparents" />
            <TipCard icon="🛒" category="Gear" title="Best Stroller for Disney World" description="We've tested several. Here's what works and what you'll regret." readTime="6 min" href="/tips/best-stroller-for-disney-world" />
            <TipCard icon="⚖️" category="Comparison" title="AKL vs. Wilderness Lodge" description="Two nature-themed resorts. One has live giraffes. Here's how they compare." readTime="5 min" href="/compare/animal-kingdom-lodge-vs-wilderness-lodge" />
          </div>
        </div>
      </section>

      {/* ── LATEST FROM THE BLOG ─────────────────────────────────────────── */}
      {latestArticles.length > 0 && (
        <section className="bg-[#E8F4FD] py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="tracking-luxury text-[#0072CE] text-xs uppercase mb-4">Fresh Reads</p>
                <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-light text-[#0D1B2A]">
                  Latest from the Blog
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden sm:inline-flex text-[#0072CE] text-sm font-medium hover:underline tracking-wide"
              >
                All Articles →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {latestArticles.map((article) => {
                const dir = (article as typeof article & { _dir: string })._dir;
                const href = `${categoryHrefPrefix[dir] ?? "/blog"}/${article.slug}`;
                const label = categoryLabel[article.type] ?? "Article";
                return (
                  <Link
                    key={article.slug}
                    href={href}
                    className="pixie-hover group block bg-white rounded-2xl border border-[#D1E3F5] hover:border-[#0072CE] transition-colors p-6"
                  >
                    <span className="text-[#0072CE] text-xs font-semibold uppercase tracking-wider">
                      {label}
                    </span>
                    <h3
                      className="font-display text-xl font-light text-[#0D1B2A] mt-2 mb-3 group-hover:text-[#003D7A] transition-colors leading-snug"
                    >
                      {article.title}
                    </h3>
                    {article.seoDescription && (
                      <p className="text-[#4A5568] text-sm leading-relaxed line-clamp-2 mb-4">
                        {article.seoDescription}
                      </p>
                    )}
                    <span className="text-[#0072CE] text-xs font-medium tracking-wide group-hover:underline">
                      Read More →
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="text-center sm:hidden">
              <Link href="/blog" className="text-[#0072CE] text-sm font-medium hover:underline">
                All Articles →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── EMAIL CAPTURE ────────────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* EmailCapture paused — PDF lead magnet not yet built. Re-enable after PDF is created and wired into ConvertKit welcome automation. */}
          {/* <EmailCapture /> */}
        </div>
      </section>

    </div>
  );
}
