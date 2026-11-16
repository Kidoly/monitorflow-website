import { copyFor } from "@/content";
import { pageAlternates, routes } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { GuidesIndexPage } from "@/views/GuidesPages";

const c = copyFor("en").meta;
export const metadata = pageMetadata({ lang: "en", title: c.guidesTitle, description: c.guidesDescription, path: routes.guides.en, alternates: pageAlternates("guides") });

export default function Page() {
  return <GuidesIndexPage lang="en" />;
}
