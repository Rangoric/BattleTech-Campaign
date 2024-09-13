import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import mdxMermaid from "mdx-mermaid";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: true },
  basePath: "/BattleTech-Campaign",
  pageExtensions: ["md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, [mdxMermaid, { output: "svg" }]],
  },
});

export default withMDX(nextConfig);
