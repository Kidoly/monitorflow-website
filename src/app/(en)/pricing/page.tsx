import { copyFor } from "@/content";
import { pageAlternates, routes } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { PricingPage } from "@/views/PricingPage";

const c = copyFor("en").meta;
export const metadata = pageMetadata({ lang: "en", title: c.pricingTitle, description: c.pricingDescription, path: routes.pricing.en, alternates: pageAlternates("pricing") });

export default function Page() {
  return <PricingPage lang="en" />;
}
