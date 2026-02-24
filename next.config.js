/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "" : "",
  images: {
    unoptimized: true,
    remotePatterns: [new URL("https://avatars.githubusercontent.com")],
  },
  trailingSlash: true,
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
