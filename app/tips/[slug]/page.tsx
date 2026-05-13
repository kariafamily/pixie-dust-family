import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getMDXBySlug, getAllSlugs } from "@/lib/mdx";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import AuthorBox from "@/components/AuthorBox";
import RelatedPosts from "@/components/RelatedPosts";
import EmailCapture from "@/components/EmailCapture";
import AffiliateLink from "@/components/AffiliateLink";
import AffiliateProductBox from "@/components/AffiliateProductBox";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs("tips").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getMDXBySlug("tips", slug);
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
    alternates: { canonical: `https://pixiedustfamily.com/tips/${slug}` },
  };
}

export default async function TipPage({ params }: Props) {
  const { slug } = await params;
  const post = getMDXBySlug("tips", slug);
  if (!post) notFound();

  const { frontmatter: fm, content } = post;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: fm.title,
    description: fm.seoDescription,
    datePublished: fm.publishedAt,
    author: { "@type": "Organization", name: "Pixie Dust Family" },
    publisher: { "@type": "Organization", name: "Pixie Dust Family" },
  };

  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {fm.hasAffiliate && <AffiliateDisclosure />}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BreadcrumbNav
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Tips & Guides", href: "/tips" },
            { label: fm.title },
          ]}
        />

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            {fm.icon && <span className="text-3xl">{fm.icon}</span>}
            <div>
              {fm.category && (
                <span className="text-[#0072CE] text-xs font-semibold uppercase tracking-wide">
                  {fm.category}
                </span>
              )}
              {fm.readTime && (
                <span className="text-[#4A5568] text-xs ml-2">· {fm.readTime}</span>
              )}
            </div>
          </div>

          <h1
            className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-4"
            style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
          >
            {fm.title}
          </h1>

          {fm.publishedAt && (
            <p className="text-[#4A5568] text-sm">
              {new Date(fm.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
        </div>

        <article className="prose prose-lg max-w-none mb-12">
          <MDXRemote
            source={content}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            components={{ AffiliateLink, AffiliateProductBox }}
          />
        </article>

        <div className="mb-12">
          <AuthorBox />
        </div>

        {fm.relatedPosts && fm.relatedPosts.length > 0 && (
          <div className="mb-12">
            <RelatedPosts slugs={fm.relatedPosts} currentSlug={slug} />
          </div>
        )}

        {/* EmailCapture paused — PDF lead magnet not yet built. Re-enable after PDF is created and wired into ConvertKit welcome automation. */}
        {/* <EmailCapture /> */}
      </div>
    </div>
  );
}
