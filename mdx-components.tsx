import type { MDXComponents } from "mdx/types";
import AffiliateLink from "@/components/AffiliateLink";
import AffiliateProductBox from "@/components/AffiliateProductBox";
import PartDivider from "@/components/PartDivider";
import GrandparentNote from "@/components/GrandparentNote";
import ProTip from "@/components/ProTip";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    AffiliateLink,
    AffiliateProductBox,
    PartDivider,
    GrandparentNote,
    ProTip,
  };
}
