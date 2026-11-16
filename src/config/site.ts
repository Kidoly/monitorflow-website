// Everything about where the site lives, in one place.
//
// The domain: the owner may launch on monitorflow.net if monitorflow.eu is
// not bought yet. Set NEXT_PUBLIC_SITE_URL at build time (no trailing slash)
// and every canonical URL, the sitemap and Open Graph tags follow.

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://monitorflow.eu").replace(/\/+$/, "");

export const site = {
  name: "MonitorFlow",
  url: siteUrl,
  /**
   * The live demo of the web interface, built from the product repository
   * into /demo/ (scripts/build-demo.mjs). Set NEXT_PUBLIC_DEMO_URL to serve it
   * from its own address instead, such as https://demo.monitorflow.eu/.
   */
  demoUrl: process.env.NEXT_PUBLIC_DEMO_URL || "/demo/",
  github: "https://github.com/Kidoly/monitorflow",
  latestRelease: "https://github.com/Kidoly/monitorflow/releases/latest",
  /** Shown as "Latest release"; update with each release. */
  version: "0.6.0",
  license: "AGPL-3.0-or-later",
} as const;

// The promo video. It is a placeholder: swapping the final version is a file
// swap (same names) or a change of these paths. Nothing on the page depends
// on a given scene. Set NEXT_PUBLIC_VIDEO_URL to serve the video from a
// release asset instead of the site itself.
export const promoVideo = {
  src: process.env.NEXT_PUBLIC_VIDEO_URL || "/media/promo/monitorflow-promo.mp4",
  poster: "/media/promo/poster.webp",
  captions: { en: "/media/promo/captions.en.vtt", fr: "/media/promo/captions.fr.vtt" },
  width: 1920,
  height: 1080,
  seconds: 60,
} as const;

/** The two install commands, as published in the product README. */
export const install = {
  server:
    "curl -fsSL https://github.com/Kidoly/monitorflow/releases/latest/download/install-server.sh | sudo sh",
  agent:
    "curl -fsSL https://github.com/Kidoly/monitorflow/releases/latest/download/install.sh \\\n  | sudo MF_SERVER=monitor.example.com:7443 MF_TOKEN=mfe1.… sh",
} as const;
