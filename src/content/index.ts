import type { Lang } from "@/lib/i18n";
import { en, type Copy } from "./en";
import { fr } from "./fr";

export function copyFor(lang: Lang): Copy {
  return lang === "fr" ? fr : en;
}
