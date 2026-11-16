import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { guideHref, listGuides } from "@/lib/guides";
import { routes, type Alternates } from "@/lib/i18n";
import { guideAlternates } from "@/views/GuidesPages";

export const dynamic = "force-static";

function entry(path: string, alternates: Alternates, priority: number): MetadataRoute.Sitemap[number] {
  const languages: Record<string, string> = {};
  for (const [l, p] of Object.entries(alternates)) if (p) languages[l] = site.url + p;
  return { url: site.url + path, changeFrequency: "weekly", priority, alternates: { languages } };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const out: MetadataRoute.Sitemap = [];
  for (const page of ["home", "pricing", "guides"] as const) {
    for (const l of ["en", "fr"] as const) out.push(entry(routes[page][l], routes[page], page === "home" ? 1 : 0.8));
  }
  for (const l of ["en", "fr"] as const) {
    for (const g of listGuides(l)) out.push(entry(guideHref(l, g.slug), guideAlternates(g), 0.6));
  }
  return out;
}
