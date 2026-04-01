import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/mdx";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pixiedustfamily.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const resortSlugs = getAllSlugs("resorts");
  const tipSlugs = getAllSlugs("tips");
  const compareSlugs = getAllSlugs("compare");
  const blogSlugs = getAllSlugs("blog");

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/resorts`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/tips`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/compare`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/plan-your-trip`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contact`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/affiliate-disclosure`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const resortPages: MetadataRoute.Sitemap = resortSlugs.map((slug) => ({
    url: `${baseUrl}/resorts/${slug}`,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const tipPages: MetadataRoute.Sitemap = tipSlugs.map((slug) => ({
    url: `${baseUrl}/tips/${slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const comparePages: MetadataRoute.Sitemap = compareSlugs.map((slug) => ({
    url: `${baseUrl}/compare/${slug}`,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...resortPages, ...tipPages, ...comparePages, ...blogPages];
}
