import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGuide, guideHref, listGuides } from "@/lib/guides";
import { pageMetadata } from "@/lib/metadata";
import { GuidePage, guideAlternates } from "@/views/GuidesPages";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return listGuides("fr").map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const guide = getGuide("fr", (await params).slug);
  if (!guide) return {};
  return pageMetadata({ lang: "fr", title: `${guide.title} | MonitorFlow`, description: guide.description, path: guideHref("fr", guide.slug), alternates: guideAlternates(guide), type: "article" });
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const guide = getGuide("fr", (await params).slug);
  if (!guide) notFound();
  return <GuidePage guide={guide} />;
}
