import type { Metadata } from "next";
import { site } from "@/config/site";
import type { Alternates, Lang } from "./i18n";

/** Title, description, canonical URL, hreflang links and Open Graph for a page. */
export function pageMetadata(opts: { lang: Lang; title: string; description: string; path: string; alternates: Alternates; type?: "website" | "article" }): Metadata {
  const languages: Record<string, string> = {};
  if (opts.alternates.en) languages.en = opts.alternates.en;
  if (opts.alternates.fr) languages.fr = opts.alternates.fr;
  if (opts.alternates.en) languages["x-default"] = opts.alternates.en;
  return {
    metadataBase: new URL(site.url),
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.path, languages },
    openGraph: {
      type: opts.type ?? "website",
      siteName: site.name,
      title: opts.title,
      description: opts.description,
      url: opts.path,
      locale: opts.lang === "fr" ? "fr_FR" : "en_GB",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "MonitorFlow" }],
    },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description, images: ["/og.png"] },
    icons: {
      icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/brand/slime-violette-petit.svg", type: "image/svg+xml" }],
      apple: "/brand/apple-touch-icon.png",
    },
  };
}
