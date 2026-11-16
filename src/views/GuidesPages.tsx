import { icons } from "@/components/Icons";
import { SiteFrame } from "@/components/SiteFrame";
import { site } from "@/config/site";
import { copyFor } from "@/content";
import { getGuide, getGuidesIndex, guideHref, type Guide } from "@/lib/guides";
import { pageAlternates, routes, type Alternates, type Lang } from "@/lib/i18n";

export function guideAlternates(guide: Guide): Alternates {
  const other: Lang = guide.lang === "en" ? "fr" : "en";
  const alt: Alternates = { [guide.lang]: guideHref(guide.lang, guide.slug) };
  if (guide.translation && getGuide(other, guide.translation)) alt[other] = guideHref(other, guide.translation);
  return alt;
}

export function GuidesIndexPage({ lang }: { lang: Lang }) {
  const c = copyFor(lang).guides;
  const index = getGuidesIndex(lang);
  return (
    <SiteFrame lang={lang} alternates={pageAlternates("guides")} current="guides">
      <section className="page-head" style={{ textAlign: "left" }}>
        <div className="wrap">
          <h1>{c.title}</h1>
          <p className="lead" style={{ margin: 0 }}>{c.lead}</p>
        </div>
      </section>
      <section className="wrap">
        {/* The index comes from docs/guides/README.md: sections and links stay in step with the repository. */}
        <div className="guides-index" dangerouslySetInnerHTML={{ __html: index.html }} />
      </section>
    </SiteFrame>
  );
}

export function GuidePage({ guide }: { guide: Guide }) {
  const lang = guide.lang;
  const t = copyFor(lang);
  const c = t.guides;
  const alternates = guideAlternates(guide);
  const other: Lang = lang === "en" ? "fr" : "en";
  const file = lang === "fr" ? `fr/${guide.slug}.md` : `${guide.slug}.md`;
  return (
    <SiteFrame lang={lang} alternates={alternates} current="guides">
      <article className="wrap">
        <div className="article">
          <nav className="crumbs" aria-label="Breadcrumb">
            <ol>
              <li><a href={routes.home[lang]}>MonitorFlow</a></li>
              <li><a href={routes.guides[lang]}>{c.breadcrumb}</a></li>
            </ol>
            {alternates[other] ? <a href={alternates[other]} hrefLang={other} lang={other}>{c.otherLang}</a> : null}
          </nav>
          <h1>{guide.title}</h1>
          <p className="description">{guide.description}</p>
          <div className="prose" dangerouslySetInnerHTML={{ __html: guide.html }} />
          <aside className="guide-cta">
            <h2>{c.ctaTitle}</h2>
            <p>{c.ctaText}</p>
            <div className="btn-row">
              <a className="btn primary" href={`${routes.home[lang]}#install`}>{t.hero.install}</a>
              <a className="btn" href={site.demoUrl}>{icons.play}{t.hero.demo}</a>
            </div>
          </aside>
          <p className="muted small" style={{ marginTop: 24 }}>
            {c.sourceNote} <a href={`${site.github}/blob/main/docs/guides/${file}`}>{c.edit}</a>
          </p>
        </div>
      </article>
    </SiteFrame>
  );
}
