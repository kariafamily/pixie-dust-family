import type { Metadata } from "next";
import Link from "next/link";
import ResortCard from "@/components/ResortCard";
import TipCard from "@/components/TipCard";
import EmailCapture from "@/components/EmailCapture";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

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

export default function HomePage() {
  return (
    <div className="pt-16 bg-[#F5F8FF]">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      {/* Asymmetric: text takes 55% left, stacked polaroids bleed right      */}
      <section className="min-h-[92vh] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center">

            {/* Left: Copy */}
            <div className="max-w-2xl">
              <p
                className="tracking-luxury text-[#0072CE] text-xs uppercase mb-6"
                style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
              >
                Walt Disney World · Deluxe Resorts · Orlando, Florida
              </p>

              {/* Oversized editorial headline — Cormorant at its best */}
              <h1
                className="font-display text-[clamp(3rem,7vw,5.5rem)] leading-[1.05] font-light text-[#0D1B2A] mb-8"
              >
                Real Magic.{" "}
                <em className="display-italic text-[#0072CE]">Real Toddler</em>{" "}
                Chaos.
              </h1>

              <p className="text-[#4A5568] text-lg leading-relaxed mb-10 max-w-lg">
                Honest Walt Disney World Deluxe resort reviews from a family who actually stays there —
                husband, wife, one opinionated two-year-old, and grandparents trying to keep up.
              </p>

              {/* Pill badges */}
              <div className="flex flex-wrap gap-3 mb-10">
                {["🏨 Deluxe Only", "👶 Toddler Tested", "📸 Our Real Photos"].map((p) => (
                  <span
                    key={p}
                    className="bg-[#E8F4FD] text-[#003D7A] text-xs font-medium px-4 py-2 rounded-full border border-[#D1E3F5] tracking-wide"
                  >
                    {p}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
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
                  Free Packing List
                </Link>
              </div>
            </div>

            {/* Right: Stacked Polaroids — the signature visual element */}
            {/* Two photos, slight counter-rotation, bottom one peeking behind  */}
            <div className="relative hidden lg:block h-[520px]">
              {/* Back photo — rotated clockwise, slightly lower */}
              <div
                className="polaroid absolute top-16 right-0 w-[260px]"
                style={{ transform: "rotate(3.5deg)" }}
              >
                {/* PHOTO SLOT: replace with real vacation photo */}
                <PhotoPlaceholder label="View from Animal Kingdom Lodge balcony" aspectRatio="4/3" />
                <p className="text-center text-xs text-[#4A5568] mt-3 font-display italic">Animal Kingdom Lodge, 2024</p>
              </div>

              {/* Front photo — counter-rotated, higher and left */}
              <div
                className="polaroid absolute top-0 left-0 w-[280px] z-10"
                style={{ transform: "rotate(-2.5deg)" }}
              >
                {/* PHOTO SLOT: replace with real vacation photo */}
                <PhotoPlaceholder label="Our family at the Polynesian pool" aspectRatio="4/3" />
                <p className="text-center text-xs text-[#4A5568] mt-3 font-display italic">Polynesian Village, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAMILY PROMISE ───────────────────────────────────────────────── */}
      {/* Replaces the generic trust bar with something personal + editorial  */}
      <section className="bg-[#E8F4FD] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          {/* Section label */}
          <p className="tracking-luxury text-[#0072CE] text-xs uppercase mb-4">
            Our Commitment
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-light text-[#0D1B2A] mb-3">
            A Family Promise
          </h2>
          <div className="divider-blue mx-auto mb-12" />

          {/* Five promise cards with hand-drawn icons */}
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

          {/* Signature sign-off — Great Vibes gives it a handwritten feel */}
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

      {/* ── RESORT RANKINGS — ZIG-ZAG FEATURE ───────────────────────────── */}
      {/* Featured top 2, then 2×2 grid below — breaks the flat-box pattern  */}
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

          {/* Top pick — full-width asymmetric feature card */}
          <Link
            href={`/resorts/${resorts[0].slug}`}
            className="pixie-hover group block bg-white rounded-3xl overflow-hidden border border-[#D1E3F5] mb-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] items-stretch">
              <div className="p-10 flex flex-col justify-center">
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
                <p className="text-[#4A5568] leading-relaxed mb-6 max-w-lg">
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
              </div>
              <div className="bg-[#E8F4FD] min-h-[280px] flex items-center justify-center p-6">
                {/* PHOTO SLOT: replace with real Polynesian photo */}
                <div className="polaroid w-full" style={{ transform: "rotate(-1.5deg)" }}>
                  <PhotoPlaceholder label="Polynesian Village Resort" aspectRatio="4/3" />
                </div>
              </div>
            </div>
          </Link>

          {/* #2 pick — asymmetric reverse */}
          <Link
            href={`/resorts/${resorts[1].slug}`}
            className="pixie-hover group block bg-white rounded-3xl overflow-hidden border border-[#D1E3F5] mb-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] items-stretch">
              <div className="bg-[#E8F4FD] min-h-[280px] flex items-center justify-center p-6">
                {/* PHOTO SLOT: replace with real AKL photo */}
                <div className="polaroid w-full" style={{ transform: "rotate(2deg)" }}>
                  <PhotoPlaceholder label="Animal Kingdom Lodge savanna" aspectRatio="4/3" />
                </div>
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#E8F4FD] text-[#0072CE] text-xs font-semibold px-3 py-1 rounded-full border border-[#0072CE]/30 tracking-wide">
                    #2 Best for Toddlers
                  </span>
                </div>
                <h3 className="font-display text-4xl font-light text-[#0D1B2A] mb-3 group-hover:text-[#003D7A] transition-colors">
                  {resorts[1].title}
                </h3>
                <p className="text-[#4A5568] leading-relaxed mb-6 max-w-lg">
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
              </div>
            </div>
          </Link>

          {/* Remaining 4 resorts — standard grid */}
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

      {/* ── ABOUT — OFFSET LAYERING ──────────────────────────────────────── */}
      {/* Large photo bleeds left; text block overlaps it from the right       */}
      <section className="bg-[#E8F4FD] py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">

            {/* Image column — larger, with a smaller "accent" photo overlapping */}
            <div className="relative mb-12 lg:mb-0">
              {/* Main photo */}
              <div className="polaroid" style={{ transform: "rotate(-1deg)" }}>
                {/* PHOTO SLOT: replace with real family photo */}
                <PhotoPlaceholder label="Our family at Walt Disney World" aspectRatio="4/3" className="w-full" />
              </div>
              {/* Offset smaller polaroid — overlaps top-right corner */}
              <div
                className="polaroid absolute -top-6 -right-6 w-[180px] z-10 hidden sm:block"
                style={{ transform: "rotate(4deg)" }}
              >
                {/* PHOTO SLOT: replace with real photo */}
                <PhotoPlaceholder label="Magic Kingdom at night" aspectRatio="1/1" />
                <p className="text-center text-xs text-[#4A5568] mt-2 font-display italic">Magic Kingdom, 2024</p>
              </div>
            </div>

            {/* Text column — indented to create overlap feeling on large screens */}
            <div className="lg:pl-16">
              <p className="tracking-luxury text-[#0072CE] text-xs uppercase mb-4">Our Story</p>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-[#0D1B2A] mb-2">
                Just a Real Family
              </h2>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] display-italic text-[#0072CE] mb-6">
                Who Loves Disney
              </h2>
              <div className="divider-blue mb-8" />

              <p className="text-[#4A5568] leading-relaxed mb-4">
                We&apos;re an Orlando-area family. Husband, wife, a toddler with opinions, and grandparents
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
          </div>
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

          {/* Featured guide — wide, champagne background */}
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

          {/* 2×2 tip cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <TipCard icon="🏝" category="Resort Review" title="Polynesian Village: Our #1 Pick" description="Monorail access, volcano pool, character dining — why we keep returning." readTime="8 min" href="/resorts/polynesian-village-resort-review" />
            <TipCard icon="👴" category="Planning" title="Disney World with Grandparents" description="Multigenerational trips are magical when you plan for different stamina levels." readTime="8 min" href="/tips/disney-world-with-grandparents" />
            <TipCard icon="🛒" category="Gear" title="Best Stroller for Disney World" description="We've tested several. Here's what works and what you'll regret." readTime="6 min" href="/tips/best-stroller-for-disney-world" />
            <TipCard icon="⚖️" category="Comparison" title="AKL vs. Wilderness Lodge" description="Two nature-themed resorts. One has live giraffes. Here's how they compare." readTime="5 min" href="/compare/animal-kingdom-lodge-vs-wilderness-lodge" />
          </div>
        </div>
      </section>

      {/* ── EMAIL CAPTURE ────────────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <EmailCapture />
        </div>
      </section>

    </div>
  );
}
