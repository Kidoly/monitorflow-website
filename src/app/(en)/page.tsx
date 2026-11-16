import { copyFor } from "@/content";
import { pageAlternates, routes } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { HomePage } from "@/views/HomePage";

const c = copyFor("en").meta;
export const metadata = pageMetadata({ lang: "en", title: c.homeTitle, description: c.homeDescription, path: routes.home.en, alternates: pageAlternates("home") });

export default function Page() {
  return <HomePage lang="en" />;
}
