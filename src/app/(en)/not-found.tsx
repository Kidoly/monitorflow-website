import { SiteFrame } from "@/components/SiteFrame";
import { en } from "@/content/en";
import { fr } from "@/content/fr";
import { routes } from "@/lib/i18n";

export const metadata = { title: en.meta.notFoundTitle };

// Static hosts serve this as 404.html for every unknown path, in either
// language, so it speaks both.
export default function NotFound() {
  return (
    <SiteFrame lang="en" alternates={{ en: "/", fr: "/fr/" }}>
      <section className="page-head">
        <div className="wrap">
          <h1>{en.notFound.title}</h1>
          <p className="lead">{en.notFound.text}</p>
          <p className="lead" lang="fr">{fr.notFound.title} {fr.notFound.text}</p>
          <div className="btn-row" style={{ justifyContent: "center", marginTop: 24 }}>
            <a className="btn primary" href={routes.home.en}>{en.notFound.home}</a>
            <a className="btn" href={routes.guides.en}>{en.nav.guides}</a>
            <a className="btn" href={routes.home.fr} lang="fr">{fr.notFound.home}</a>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
