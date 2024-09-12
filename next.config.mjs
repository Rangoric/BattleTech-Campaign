/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: true },
  experimental: { images: { unoptimized: true } },
  basePath: "/BattleTech-Campaign",
};

export default nextConfig;
