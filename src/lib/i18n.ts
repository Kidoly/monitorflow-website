// Languages and the URL of each page in each language. English lives at the
// root, French under /fr/.

export type Lang = "en" | "fr";
export const langs: Lang[] = ["en", "fr"];

export type PageId = "home" | "pricing" | "guides";

export const routes: Record<PageId, Record<Lang, string>> = {
  home: { en: "/", fr: "/fr/" },
  pricing: { en: "/pricing/", fr: "/fr/tarifs/" },
  guides: { en: "/guides/", fr: "/fr/guides/" },
};

/** The same page in each language, for hreflang links and the language switch. */
export type Alternates = Partial<Record<Lang, string>>;

export function pageAlternates(page: PageId): Alternates {
  return { ...routes[page] };
}

export const langNames: Record<Lang, string> = { en: "English", fr: "Français" };
