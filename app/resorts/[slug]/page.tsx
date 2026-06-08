import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getMDXBySlug, getAllSlugs } from "@/lib/mdx";
import { getRelatedArticles } from "@/lib/related-articles";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import AffiliateLink from "@/components/AffiliateLink";
import AffiliateProductBox from "@/components/AffiliateProductBox";
import PartDivider from "@/components/PartDivider";
import GrandparentNote from "@/components/GrandparentNote";
import ProTip from "@/components/ProTip";
import SpecBox from "@/components/SpecBox";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs("resorts").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getMDXBySlug("resorts", slug);
  if (!post) return {};
  const { frontmatter: fm } = post;
  return {
    title: fm.seoTitle || fm.title,
    description: fm.seoDescription,
    openGraph: {
      title: fm.seoTitle || fm.title,
      description: fm.seoDescription,
      type: "article",
      publishedTime: fm.publishedAt,
    },
    alternates: { canonical: `https://pixiedustfamily.com/resorts/${slug}` },
  };
}

export default async function ResortPage({ params }: Props) {
  const { slug } = await params;
  const post = getMDXBySlug("resorts", slug);
  if (!post) notFound();

  const { frontmatter: fm, content } = post;
  const related = getRelatedArticles(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "LodgingBusiness",
      name: fm.resort || fm.title,
      address: { "@type": "PostalAddress", addressLocality: "Orlando", addressRegion: "FL" },
    },
    reviewRating: { "@type": "Rating", ratingValue: fm.ourRating, bestRating: 5 },
    author: { "@type": "Organization", name: "Pixie Dust Family" },
    datePublished: fm.publishedAt,
    reviewBody: fm.seoDescription,
  };

  return (
    <div className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {fm.hasAffiliate && <AffiliateDisclosure />}

      {/* Full-width hero image — 260px, gradient overlay */}
      {fm.heroImage && (
        <div className="relative w-full overflow-hidden" style={{ height: "260px" }}>
          <Image
            src={fm.heroImage}
            alt={fm.heroAlt || fm.resort || fm.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Bottom-to-top gradient overlay */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 55%, transparent 100%)" }}
          />
          {/* H1 and badge overlaid bottom-left */}
          <div className="absolute bottom-0 left-0 px-6 pb-5 max-w-3xl">
            {fm.tier && (
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)", backdropFilter: "blur(4px)" }}
              >
                {fm.tier} Resort
              </span>
            )}
            <h1
              className="text-white text-2xl sm:text-3xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
            >
              {fm.resort || fm.title}
            </h1>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BreadcrumbNav
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Resorts", href: "/resorts" },
            { label: fm.resort || fm.title },
          ]}
        />

        {/* Spec Box */}
        {(fm.ourRating || fm.toddlerScore) && (
          <div className="mb-8">
            <SpecBox
              ourRating={fm.ourRating ?? 4}
              toddlerScore={fm.toddlerScore ?? 8}
              pricePerNight={fm.pricePerNight}
              pricingContext={fm.pricingContext}
              location={fm.location}
              transport={fm.transport}
              pool={fm.pool}
              bestRoom={fm.bestRoom}
              bookingUrl={fm.bookingUrl}
              dateVisited={fm.dateVisited}
              stayLength={fm.stayLength}
            />
          </div>
        )}

        {/* Table of contents */}
        {fm.toc && fm.toc.length > 0 && (
          <div
            className="rounded-xl px-6 py-5 mb-8 not-prose"
            style={{ backgroundColor: "#E8F4FD", border: "1px solid #D1E3F5" }}
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#003D7A" }}>
              In This Review
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {fm.toc.map((item, i) => (
                <a
                  key={i}
                  href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
                  className="text-sm transition-colors hover:text-[#003D7A]"
                  style={{ color: "#0072CE" }}
                >
                  {i + 1}. {item}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Article body */}
        <article className="prose prose-lg max-w-none mb-12">
          <MDXRemote
            source={content}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            components={{ AffiliateLink, AffiliateProductBox, PartDivider, GrandparentNote, ProTip }}
          />
        </article>

        {/* Related articles */}
        {related.length > 0 && (
          <div className="mb-12 not-prose">
            <h2
              className="text-xl font-bold mb-5"
              style={{ color: "#1A1A2E", fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Related Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((article) => (
                <Link
                  key={article.slug}
                  href={article.href}
                  className="block rounded-xl p-4 transition-all hover:-translate-y-0.5"
                  style={{
                    border: "1px solid #E2DDD6",
                    backgroundColor: "#fff",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  }}
                >
                  <span
                    className="text-xs font-semibold uppercase tracking-wider block mb-1"
                    style={{ color: "#0072CE" }}
                  >
                    {article.type === "comparison" ? "Comparison" : article.type === "resort-review" ? "Resort Review" : "Guide"}
                  </span>
                  <span className="text-sm font-medium" style={{ color: "#1A1A2E" }}>
                    {article.title} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Compare CTA */}
        {fm.compareTo && fm.compareUrl && (
          <div
            className="rounded-xl px-6 py-5 mb-8 not-prose flex items-center justify-between gap-4"
            style={{ backgroundColor: "#E8F4FD", border: "1px solid #D1E3F5" }}
          >
            <p className="text-sm" style={{ color: "#003D7A" }}>
              <strong>Deciding between resorts?</strong> Compare {fm.resort || "this resort"} vs. {fm.compareTo}
            </p>
            <Link
              href={fm.compareUrl}
              className="text-sm font-semibold whitespace-nowrap transition-opacity hover:opacity-70"
              style={{ color: "#0072CE" }}
            >
              See Comparison →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
