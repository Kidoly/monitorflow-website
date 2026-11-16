import { site } from "@/config/site";
import { copyFor } from "@/content";
import { routes, type Alternates, type Lang, type PageId } from "@/lib/i18n";
import { icons } from "./Icons";
import { ThemeToggle } from "./ThemeToggle";

export function Header({ lang, alternates, current }: { lang: Lang; alternates: Alternates; current?: PageId }) {
  const t = copyFor(lang).nav;
  const other: Lang = lang === "en" ? "fr" : "en";
  const otherHref = alternates[other] ?? routes.home[other];
  const links = [
    { href: `${routes.home[lang]}#features`, label: t.features, id: undefined },
    { href: routes.pricing[lang], label: t.pricing, id: "pricing" as const },
    { href: routes.guides[lang], label: t.guides, id: "guides" as const },
    { href: site.demoUrl, label: t.demo, id: undefined },
  ];
  return (
    <header className="header">
      <div className="wrap header-inner">
        <a className="brand" href={routes.home[lang]} aria-label={t.home}>
          <img className="only-light" src="/brand/slime-violette-petit.svg" alt="" width={32} height={32} />
          <img className="only-dark" src="/brand/slime-sombre-petit.svg" alt="" width={32} height={32} />
          <span>MonitorFlow</span>
        </a>
        <nav className="nav" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} aria-current={l.id && l.id === current ? "page" : undefined}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="header-tools">
          <a className="icon-btn" href={otherHref} hrefLang={other} lang={other} aria-label={other === "fr" ? "Français" : "English"}>
            {other.toUpperCase()}
          </a>
          <ThemeToggle labels={t.theme} />
          <a className="icon-btn" href={site.github} aria-label="GitHub">
            {icons.github}
          </a>
          <details className="mobile-nav">
            <summary className="icon-btn menu-toggle" aria-label={t.menu}>{icons.menu}</summary>
            <nav className="mobile-panel" aria-label="Main">
              {links.map((l) => (
                <a key={l.href} href={l.href}>{l.label}</a>
              ))}
              <a href={site.github}>{t.github}</a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
