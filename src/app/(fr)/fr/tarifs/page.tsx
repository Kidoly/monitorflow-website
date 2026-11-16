import { copyFor } from "@/content";
import { pageAlternates, routes } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { PricingPage } from "@/views/PricingPage";

const c = copyFor("fr").meta;
export const metadata = pageMetadata({ lang: "fr", title: c.pricingTitle, description: c.pricingDescription, path: routes.pricing.fr, alternates: pageAlternates("pricing") });

export default function Page() {
  return <PricingPage lang="fr" />;
}
