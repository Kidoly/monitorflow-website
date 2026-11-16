import { CopyButton } from "@/components/CopyButton";
import { icons } from "@/components/Icons";
import { PromoVideo } from "@/components/PromoVideo";
import { SiteFrame } from "@/components/SiteFrame";
import { install, site } from "@/config/site";
import { copyFor } from "@/content";
import { pageAlternates, routes, type Lang } from "@/lib/i18n";

const README_INSTALL = `${site.github}#get-started-in-5-minutes`;
const ROADMAP = `${site.github}/blob/main/docs/roadmap.md`;

export function HomePage({ lang }: { lang: Lang }) {
  const c = copyFor(lang);
  const featureIcons = [icons.monitoring, icons.alerts, icons.updates, icons.dashboards, icons.integrations, icons.simple];
  const howIcons = [icons.agent, icons.lock, icons.relay, icons.central];
  const audienceIcons = [icons.building, icons.people, icons.home];

  return (
    <SiteFrame lang={lang} alternates={pageAlternates("home")} current="home">
      <section className="hero">
        <div className="wrap">
          <div className="hero-inner">
            <div className="pills">
              <span className="pill accent">{c.hero.badge}</span>
              <span className="pill warn"><span className="dot" aria-hidden="true" />{c.hero.status}</span>
              <a className="pill" href={site.latestRelease}>{c.hero.version}{lang === "fr" ? " : " : ": "}{site.version}</a>
            </div>
            <h1>{c.hero.title}</h1>
            <p className="lead">{c.hero.lead}</p>
            <p className="audience">{c.hero.audience}</p>
            <div className="btn-row">
              <a className="btn primary" href={site.demoUrl}>{icons.play}{c.hero.demo}</a>
              <a className="btn" href="#install">{c.hero.install}</a>
              <a className="btn" href={site.github}>{icons.github}{c.hero.github}</a>
            </div>
          </div>
          <PromoVideo lang={lang} copy={c.video} />
          <p className="early" style={{ textAlign: "center" }}>{c.hero.earlyNote}</p>
        </div>
      </section>

      <section className="section" aria-labelledby="audiences">
        <div className="wrap">
          <div className="section-head"><h2 id="audiences">{c.audiences.title}</h2></div>
          <div className="grid three">
            {c.audiences.items.map((a, i) => (
              <div className="card" key={a.title}>
                <div className="icon">{audienceIcons[i]}</div>
                <h3>{a.title}</h3>
                <p className="muted">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt" aria-labelledby="how">
        <div className="wrap">
          <div className="section-head">
            <h2 id="how">{c.how.title}</h2>
            <p className="lead">{c.how.lead}</p>
          </div>
          <div className="grid four">
            {c.how.items.map((h, i) => (
              <div className="card" key={h.title}>
                <div className="icon">{howIcons[i]}</div>
                <h3>{h.title}</h3>
                <p className="muted">{h.text}</p>
              </div>
            ))}
          </div>
          <figure className="diagram" style={{ margin: "32px 0 0" }}>
            <img className="only-light" src="/images/architecture.webp" alt={c.how.diagramAlt} width={2520} height={1580} loading="lazy" decoding="async" />
            <img className="only-dark" src="/images/architecture-dark.webp" alt={c.how.diagramAlt} width={2520} height={1580} loading="lazy" decoding="async" />
          </figure>
        </div>
      </section>

      <section className="section" id="features" aria-labelledby="features-title">
        <div className="wrap">
          <div className="section-head"><h2 id="features-title">{c.features.title}</h2></div>
          <div className="grid three">
            {c.features.items.map((f, i) => (
              <div className="card" key={f.id} id={f.id}>
                <div className="icon">{featureIcons[i]}</div>
                <h3>{f.title}</h3>
                <ul className="checks">
                  {f.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt" id="ai" aria-labelledby="ai-title">
        <div className="wrap ai-grid">
          <div>
            <span className="eyebrow">{c.ai.eyebrow}</span>
            <h2 id="ai-title" className="ai-title">{c.ai.title}</h2>
            <p className="lead">{c.ai.lead}</p>
            <div className="grid two" style={{ marginTop: 24 }}>
              {c.ai.points.map((p) => (
                <div key={p.title}>
                  <h3>{p.title}</h3>
                  <p className="muted small">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mock" role="img" aria-label={`${c.ai.mock.alert}. ${c.ai.mock.diagnosis} ${c.ai.mock.suggested}: journalctl --vacuum-size=500M. ${c.ai.mock.risk}.`}>
            <div className="mock-head">{icons.alerts}<span>{c.ai.mock.alert}</span></div>
            <div className="mock-body">
              <div>
                <div className="mock-label">AI</div>
                <div>{c.ai.mock.diagnosis}</div>
              </div>
              <div>
                <div className="mock-label">{c.ai.mock.suggested}</div>
                <pre><code>journalctl --vacuum-size=500M</code></pre>
              </div>
              <div className="mock-actions">
                <span className="btn primary" aria-hidden="true">{c.ai.approve}</span>
                <span className="pill warn">{c.ai.mock.risk}</span>
              </div>
            </div>
            <div className="mock-foot">{icons.log}<span>{c.ai.mock.audit}</span></div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="msp">
        <div className="wrap">
          <div className="card" style={{ display: "grid", gap: 8 }}>
            <h2 id="msp" style={{ fontSize: "1.375rem" }}>{c.msp.title}</h2>
            <p className="muted" style={{ maxWidth: 820 }}>{c.msp.text}</p>
          </div>
        </div>
      </section>

      <section className="section alt" id="install" aria-labelledby="install-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="install-title">{c.install.title}</h2>
            <p className="lead">{c.install.lead}</p>
          </div>
          <div className="install-grid">
            <ol className="steps" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {c.install.steps.map((s, i) => (
                <li className="step" key={s.title}>
                  <h3>{s.title}</h3>
                  <p className="muted">{s.text}</p>
                  {i < 2 ? (
                    <div className="code">
                      <pre><code>{i === 0 ? install.server : install.agent}</code></pre>
                      <CopyButton text={i === 0 ? install.server : install.agent} label={c.install.copy} done={c.install.copied} />
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
            <aside className="card">
              <h3>{c.install.requirementsTitle}</h3>
              <ul className="checks" style={{ marginBottom: 20 }}>
                {c.install.requirements.map((r) => <li key={r}>{r}</li>)}
              </ul>
              <a href={README_INSTALL}>{c.install.fullGuide}</a>
            </aside>
          </div>
        </div>
      </section>

      <section className="section coming" aria-labelledby="coming">
        <div className="wrap">
          <div className="section-head">
            <span className="pill accent">{c.coming.title}</span>
            <h2 id="coming" className="sr-only">{c.coming.title}</h2>
            <p className="lead" style={{ marginTop: 12 }}>{c.coming.lead}</p>
          </div>
          <ul>
            {c.coming.items.map((item) => (
              <li key={item}><span className="pill">{c.coming.title}</span><span>{item}</span></li>
            ))}
          </ul>
          <a href={ROADMAP}>{c.coming.roadmap}</a>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="cta">
        <div className="wrap">
          <div className="cta-band">
            <h2 id="cta">{c.cta.title}</h2>
            <p>{c.cta.text}</p>
            <div className="btn-row">
              <a className="btn" href="#install">{c.hero.install}</a>
              <a className="btn ghost" href={site.demoUrl}>{c.hero.demo}</a>
              <a className="btn ghost" href={routes.pricing[lang]}>{c.cta.pricing}</a>
            </div>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
