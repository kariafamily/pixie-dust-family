import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [["remark-gfm"]],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      { source: "/tips/:slug", destination: "/blog/:slug", permanent: true },
      { source: "/tips", destination: "/blog", permanent: true },
    ];
  },
};

export default withMDX(nextConfig);
