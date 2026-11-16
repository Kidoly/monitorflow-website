import { contact } from "@/config/contact";
import { site } from "@/config/site";
import { copyFor } from "@/content";
import { langNames, routes, type Alternates, type Lang } from "@/lib/i18n";

export function Footer({ lang, alternates }: { lang: Lang; alternates: Alternates }) {
  const c = copyFor(lang);
  const t = c.footer;
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <a className="brand" href={routes.home[lang]}>
              <img className="only-light" src="/brand/slime-violette-petit.svg" alt="" width={28} height={28} />
              <img className="only-dark" src="/brand/slime-sombre-petit.svg" alt="" width={28} height={28} />
              <span>MonitorFlow</span>
            </a>
            <p className="muted" style={{ marginTop: 12, maxWidth: 360 }}>{t.tagline}</p>
          </div>
          <div>
            <h2>{t.product}</h2>
            <ul>
              <li><a href={`${routes.home[lang]}#features`}>{c.nav.features}</a></li>
              <li><a href={routes.pricing[lang]}>{c.nav.pricing}</a></li>
              <li><a href={routes.guides[lang]}>{c.nav.guides}</a></li>
              <li><a href={site.demoUrl}>{c.nav.demo}</a></li>
              <li><a href={site.latestRelease}>{t.releases}</a></li>
              <li><a href={`${site.github}#readme`}>{t.docs}</a></li>
            </ul>
          </div>
          <div>
            <h2>{t.help}</h2>
            <ul>
              <li><a href={contact.community.href}>{t.community}</a></li>
              <li><a href={contact.issues.href}>{t.issues}</a></li>
              <li>
                {contact.support.href ? (
                  <a href={contact.support.href}>{t.support}</a>
                ) : (
                  <span className="muted">{t.support} ({t.supportSoon})</span>
                )}
              </li>
              <li><a href={contact.sales.href}>{t.sales}</a></li>
              <li><a href={contact.security.policy}>{t.security}</a></li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <span>MonitorFlow {site.version}. {t.license} {t.privacy}</span>
          <span>
            {(["en", "fr"] as Lang[]).map((l, i) => (
              <span key={l}>
                {i > 0 ? " · " : ""}
                {l === lang ? (
                  <span aria-current="true">{langNames[l]}</span>
                ) : (
                  <a href={alternates[l] ?? routes.home[l]} hrefLang={l} lang={l}>{langNames[l]}</a>
                )}
              </span>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
