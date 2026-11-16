import { icons } from "@/components/Icons";
import { PricingCalculator } from "@/components/PricingCalculator";
import { SiteFrame } from "@/components/SiteFrame";
import { contact } from "@/config/contact";
import { quote, tiers, volumeDiscounts } from "@/config/pricing";
import { site } from "@/config/site";
import { copyFor } from "@/content";
import { formatEuros } from "@/lib/format";
import { pageAlternates, routes, type Lang } from "@/lib/i18n";

export function PricingPage({ lang }: { lang: Lang }) {
  const c = copyFor(lang);
  const p = c.pricing;
  const eur = (n: number) => formatEuros(n, lang);
  const eurExact = (n: number) =>
    new Intl.NumberFormat(lang === "fr" ? "fr-FR" : "en-IE", { style: "currency", currency: "EUR", minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(n);
  const nf = new Intl.NumberFormat(lang === "fr" ? "fr-FR" : "en-GB");
  const steps = [...volumeDiscounts].sort((a, b) => a.fromServers - b.fromServers).map((d) => ({ percent: d.percent, from: nf.format(d.fromServers) }));

  return (
    <SiteFrame lang={lang} alternates={pageAlternates("pricing")} current="pricing">
      <section className="page-head">
        <div className="wrap">
          <h1>{p.title}</h1>
          <p className="lead">{p.lead}</p>
          <div className="btn-row" style={{ justifyContent: "center", marginTop: 24 }}>
            <a className="btn primary" href={`${routes.home[lang]}#install`}>{p.install}</a>
            <a className="btn" href={site.demoUrl}>{icons.play}{p.demo}</a>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }} aria-labelledby="tiers-title">
        <div className="wrap">
          <h2 id="tiers-title" className="sr-only">{c.nav.pricing}</h2>
          <div className="grid three">
            {p.principles.map((x) => (
              <div key={x.title}>
                <h3>{x.title}</h3>
                <p className="muted small">{x.text}</p>
              </div>
            ))}
          </div>

          <div className="tiers">
            {tiers.map((tier) => {
              const t = p.tiers[tier.id];
              const isFree = tier.perServerMonth === null;
              const min = quote(tier, 0);
              return (
                <article key={tier.id} className={`tier${tier.id === "community" ? " featured" : ""}`} aria-labelledby={`tier-${tier.id}`}>
                  <h2 id={`tier-${tier.id}`}>{t.name}</h2>
                  <p className="tagline">{t.tagline}</p>
                  <div className="price">
                    {isFree ? (
                      <>
                        <span className="amount">{p.free}</span>
                        <span className="unit">{p.forever}</span>
                      </>
                    ) : tier.perCentralServerYear ? (
                      <span className="unit" style={{ fontSize: ".9375rem", color: "var(--text)", fontWeight: 600 }}>
                        {p.enterprisePrice(eur(tier.perCentralServerYear))}
                      </span>
                    ) : (
                      <>
                        <span className="amount">{eurExact(tier.perServerMonth!)}</span>
                        <span className="unit">{p.perServerMonth}</span>
                      </>
                    )}
                  </div>
                  <div className="minimum">
                    {p.minimum}:{" "}
                    {isFree
                      ? p.noMinimum
                      : tier.minCentralServers
                        ? p.minCentral(tier.minCentralServers)
                        : p.minServers(tier.minServers, eur(min.total))}
                  </div>
                  <ul className="checks">
                    {t.features.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                  {isFree ? (
                    <a className="btn primary" href={`${routes.home[lang]}#install`}>{p.install}</a>
                  ) : (
                    <a className="btn" href={contact.sales.href}>{p.contact}</a>
                  )}
                </article>
              );
            })}
          </div>

          {steps.length ? (
            <div className="callout">
              <h2>{p.volume.title}</h2>
              <p>{p.volume.text(steps)}</p>
            </div>
          ) : null}
          <p className="muted small" style={{ marginTop: 16 }}>{p.proposed}</p>
        </div>
      </section>

      <section className="section alt" aria-labelledby="calc-title">
        <div className="wrap">
          <div className="section-head"><h2 id="calc-title">{p.calculator.title}</h2></div>
          <PricingCalculator lang={lang} />
        </div>
      </section>

      <section className="section" aria-labelledby="faq-title">
        <div className="wrap">
          <div className="section-head"><h2 id="faq-title">{p.faqTitle}</h2></div>
          <div className="faq">
            {p.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
