import type { NextConfig } from "next";

// A static export: plain files any web host can serve (GitHub Pages, a bucket,
// a plain web server). No Node runtime, no server-side code in production.
const config: NextConfig = {
  output: "export",
  // Every page becomes `<route>/index.html`, which any static host resolves.
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  // Static export has no image optimiser; images are prepared ahead of time
  // in modern formats (see public/images).
  images: { unoptimized: true },
};

export default config;
