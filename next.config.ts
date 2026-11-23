import { existsSync, readFileSync } from "node:fs";
import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// The latest product release, found at build time by scripts/fetch-release.mjs.
const releaseFile = "content/release.json";
const release = existsSync(releaseFile) ? (JSON.parse(readFileSync(releaseFile, "utf8")) as { version?: string }) : {};

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
  env: { NEXT_PUBLIC_MF_VERSION: release.version ?? "" },
  ...(isDev && {
    // The live demo is a built static site in public/demo/ (scripts/build-demo.mjs).
    // A static host serves `/demo/x/` from `/demo/x/index.html`; `next dev`
    // only serves files, so in development these rewrites do the same.
    // Files (scripts, styles, images) are served before rewrites apply.
    async rewrites() {
      return [
        { source: "/demo", destination: "/demo/index.html" },
        { source: "/demo/:path+", destination: "/demo/:path+/index.html" },
      ];
    },
  }),
};

export default config;
