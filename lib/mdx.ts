import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface MDXFrontmatter {
  title: string;
  slug: string;
  type: "resort-review" | "tip-guide" | "comparison" | "blog";
  resort?: string;
  tier?: string;
  ourRating?: number;
  toddlerScore?: number;
  grandparentScore?: number;
  poolRating?: number;
  diningRating?: number;
  locationRating?: number;
  bestFor?: string[];
  dateVisited?: string;
  stayLength?: string;
  travelParty?: string;
  heroImage?: string;
  galleryImages?: string[];
  images?: string[];
  seoTitle?: string;
  seoDescription?: string;
  affiliateKey?: string;
  relatedPosts?: string[];
  publishedAt?: string;
  excerpt?: string;
  category?: string;
  readTime?: string;
  icon?: string;
}

export interface MDXContent {
  frontmatter: MDXFrontmatter;
  content: string;
  slug: string;
}

const contentDir = path.join(process.cwd(), "content");

function readMDXFile(filePath: string): MDXContent | null {
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    return {
      frontmatter: data as MDXFrontmatter,
      content,
      slug: data.slug || path.basename(filePath, path.extname(filePath)),
    };
  } catch {
    return null;
  }
}

function getMDXFilesInDir(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => path.join(dir, f));
}

export function getMDXBySlug(type: string, slug: string): MDXContent | null {
  const dir = path.join(contentDir, type);
  const files = getMDXFilesInDir(dir);
  for (const file of files) {
    const parsed = readMDXFile(file);
    if (parsed && (parsed.slug === slug || path.basename(file, ".mdx") === slug)) {
      return parsed;
    }
  }
  return null;
}

export function getAllMDXByType(type: string): MDXFrontmatter[] {
  const dir = path.join(contentDir, type);
  const files = getMDXFilesInDir(dir);
  return files
    .map((f) => readMDXFile(f))
    .filter(Boolean)
    .map((c) => c!.frontmatter)
    .sort((a, b) => {
      if (!a.publishedAt || !b.publishedAt) return 0;
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
}

export async function getAllMDXContent(): Promise<MDXFrontmatter[]> {
  const types = ["resorts", "tips", "compare", "blog"];
  const all: MDXFrontmatter[] = [];
  for (const type of types) {
    all.push(...getAllMDXByType(type));
  }
  return all;
}

export function getAllSlugs(type: string): string[] {
  return getAllMDXByType(type).map((f) => f.slug);
}
