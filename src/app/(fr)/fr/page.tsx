import { copyFor } from "@/content";
import { pageAlternates, routes } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { HomePage } from "@/views/HomePage";

const c = copyFor("fr").meta;
export const metadata = pageMetadata({ lang: "fr", title: c.homeTitle, description: c.homeDescription, path: routes.home.fr, alternates: pageAlternates("home") });

export default function Page() {
  return <HomePage lang="fr" />;
}
