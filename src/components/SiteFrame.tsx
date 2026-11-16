import type { ReactNode } from "react";
import { copyFor } from "@/content";
import type { Alternates, Lang, PageId } from "@/lib/i18n";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function SiteFrame({ lang, alternates, current, children }: { lang: Lang; alternates: Alternates; current?: PageId; children: ReactNode }) {
  return (
    <>
      <a className="skip" href="#main">{copyFor(lang).nav.skip}</a>
      <Header lang={lang} alternates={alternates} current={current} />
      <main id="main">{children}</main>
      <Footer lang={lang} alternates={alternates} />
    </>
  );
}
