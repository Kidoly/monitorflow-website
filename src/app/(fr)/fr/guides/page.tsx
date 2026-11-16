import { copyFor } from "@/content";
import { pageAlternates, routes } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { GuidesIndexPage } from "@/views/GuidesPages";

const c = copyFor("fr").meta;
export const metadata = pageMetadata({ lang: "fr", title: c.guidesTitle, description: c.guidesDescription, path: routes.guides.fr, alternates: pageAlternates("guides") });

export default function Page() {
  return <GuidesIndexPage lang="fr" />;
}
