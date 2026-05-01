import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getMDXBySlug, getAllSlugs } from "@/lib/mdx";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import ResortHero from "@/components/ResortHero";
import QuickStats from "@/components/QuickStats";
import AffiliateBox from "@/components/AffiliateBox";
import TableOfContents from "@/components/TableOfContents";
import PhotoGallery from "@/components/PhotoGallery";
import ProConBox from "@/components/ProConBox";
import AuthorBox from "@/components/AuthorBox";
import RelatedPosts from "@/components/RelatedPosts";
import EmailCapture from "@/components/EmailCapture";
import StickyAffiliateBanner from "@/components/StickyAffiliateBanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs("resorts");
  return slugs.map((slug) => ({ slug }));
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
    alternates: {
      canonical: `https://pixiedustfamily.com/resorts/${slug}`,
    },
  };
}

const tocItems = [
  { id: "our-take", label: "Our Take", level: 2 as const },
  { id: "the-pool", label: "The Pool", level: 2 as const },
  { id: "dining", label: "Dining", level: 2 as const },
  { id: "the-room", label: "The Room", level: 2 as const },
  { id: "toddler-breakdown", label: "Toddler Breakdown", level: 2 as const },
  { id: "grandparent-notes", label: "Grandparent Notes", level: 2 as const },
  { id: "is-it-worth-the-price", label: "Is It Worth the Price?", level: 2 as const },
];

export default async function ResortPage({ params }: Props) {
  const { slug } = await params;
  const post = getMDXBySlug("resorts", slug);
  if (!post) notFound();

  const { frontmatter: fm, content } = post;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "LodgingBusiness",
      name: fm.resort || fm.title,
      address: { "@type": "PostalAddress", addressLocality: "Orlando", addressRegion: "FL" },
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: fm.ourRating,
      bestRating: 5,
    },
    author: { "@type": "Organization", name: "Pixie Dust Family" },
    datePublished: fm.publishedAt,
    reviewBody: fm.seoDescription,
  };

  const pros = [
    "Exceptional location on Disney property",
    "Beautiful theming throughout",
    "Excellent dining options on site",
    "Memorable experience for the whole family",
    "High-quality pool and recreation areas",
  ];

  const cons = [
    "Premium pricing within the Deluxe category",
    "Can be very busy during peak season",
    "Some areas require more walking",
  ];

  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BreadcrumbNav
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Resorts", href: "/resorts" },
            { label: fm.resort || fm.title },
          ]}
        />

        {/* Hero */}
        <div className="mb-6">
          <ResortHero
            title={fm.resort || fm.title}
            tier={fm.tier || "Deluxe"}
            ourRating={fm.ourRating || 5}
            toddlerScore={fm.toddlerScore || 8}
            dateVisited={fm.dateVisited}
            stayLength={fm.stayLength}
            heroImage={fm.heroImage}
          />
        </div>

        {/* Quick Stats */}
        <div className="mb-8">
          <QuickStats
            tier={fm.tier}
            bestFor={fm.bestFor}
            poolRating={fm.poolRating}
            toddlerScore={fm.toddlerScore}
            diningRating={fm.diningRating}
          />
        </div>

        {/* Top Affiliate Box */}
        {fm.affiliateKey && (
          <div className="mb-10">
            <AffiliateBox affiliateKey={fm.affiliateKey} placement="top" />
          </div>
        )}

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 mb-12">
          {/* Article content */}
          <article className="prose prose-lg max-w-none">
            <MDXRemote source={content} />
          </article>

          {/* Sidebar (desktop only) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <TableOfContents items={tocItems} />
              {fm.affiliateKey && (
                <AffiliateBox affiliateKey={fm.affiliateKey} placement="bottom" />
              )}
            </div>
          </aside>
        </div>

        {/* Photo Gallery */}
        <div className="mb-12">
          <PhotoGallery resortName={fm.resort} images={fm.images || fm.galleryImages || []} />
        </div>

        {/* Pros and Cons */}
        <div className="mb-12">
          <h2
            className="text-2xl font-bold text-[#0D1B2A] mb-6"
            style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
          >
            Pros & Cons
          </h2>
          <ProConBox pros={pros} cons={cons} />
        </div>

        {/* Bottom Affiliate Box */}
        {fm.affiliateKey && (
          <div className="mb-12">
            <AffiliateBox affiliateKey={fm.affiliateKey} placement="bottom" />
          </div>
        )}

        {/* Author Box */}
        <div className="mb-12">
          <AuthorBox
            dateVisited={fm.dateVisited}
            stayLength={fm.stayLength}
            travelParty={fm.travelParty}
          />
        </div>

        {/* Related Posts */}
        {fm.relatedPosts && fm.relatedPosts.length > 0 && (
          <div className="mb-12">
            <RelatedPosts slugs={fm.relatedPosts} currentSlug={slug} />
          </div>
        )}

        {/* Email Capture */}
        <div className="mb-16">
          <EmailCapture />
        </div>
      </div>

      {/* Sticky Banner */}
      {fm.affiliateKey && (
        <StickyAffiliateBanner
          resortName={fm.resort || fm.title}
          affiliateKey={fm.affiliateKey}
        />
      )}
    </div>
  );
}
