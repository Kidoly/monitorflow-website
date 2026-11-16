import type { Lang } from "./i18n";

/** Whole euros, the way each language writes them: €1,200 or 1 200 €. */
export function formatEuros(n: number, lang: Lang): string {
  return new Intl.NumberFormat(lang === "fr" ? "fr-FR" : "en-IE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}
