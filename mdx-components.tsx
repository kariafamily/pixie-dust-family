import type { MDXComponents } from "mdx/types";
import AffiliateLink from "@/components/AffiliateLink";
import AffiliateProductBox from "@/components/AffiliateProductBox";

// This file is required for @next/mdx page-level MDX component registration.
// For next-mdx-remote content, components are passed via the <MDXRemote components={...}> prop.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    AffiliateLink,
    AffiliateProductBox,
  };
}
