import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getMDXBySlug, getAllSlugs } from "@/lib/mdx";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import RelatedPosts from "@/components/RelatedPosts";
import EmailCapture from "@/components/EmailCapture";
import AuthorBox from "@/components/AuthorBox";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs("compare").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getMDXBySlug("compare", slug);
  if (!post) return {};
  const { frontmatter: fm } = post;
  return {
    title: fm.seoTitle || fm.title,
    description: fm.seoDescription,
    alternates: { canonical: `https://pixiedustfamily.com/compare/${slug}` },
  };
}

export default async function ComparisonPage({ params }: Props) {
  const { slug } = await params;
  const post = getMDXBySlug("compare", slug);
  if (!post) notFound();

  const { frontmatter: fm, content } = post;

  return (
    <div className="pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BreadcrumbNav
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Compare", href: "/compare" },
            { label: fm.title },
          ]}
        />

        <div className="mb-8">
          <span className="text-[#0072CE] text-xs font-semibold uppercase tracking-wide">
            Resort Comparison
          </span>
          <h1
            className="text-3xl sm:text-4xl font-bold text-[#0D1B2A] mt-2 mb-4"
            style={{ fontFamily: "var(--font-playfair-display), Georgia, serif" }}
          >
            {fm.title}
          </h1>
          {fm.publishedAt && (
            <p className="text-[#4A5568] text-sm">
              {new Date(fm.publishedAt).toLocaleDateString("en-US", {
                year: "numeric", month: "long", day: "numeric",
              })}
            </p>
          )}
        </div>

        <article className="prose prose-lg max-w-none mb-12">
          <MDXRemote source={content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </article>

        <div className="mb-12">
          <AuthorBox />
        </div>

        {fm.relatedPosts && fm.relatedPosts.length > 0 && (
          <div className="mb-12">
            <RelatedPosts slugs={fm.relatedPosts} currentSlug={slug} />
          </div>
        )}

        <EmailCapture />
      </div>
    </div>
  );
}
