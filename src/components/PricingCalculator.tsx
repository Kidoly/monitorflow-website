"use client";

import { useId, useState } from "react";
import { quote, tiers, type TierId } from "@/config/pricing";
import { copyFor } from "@/content";
import type { Lang } from "@/lib/i18n";
import { formatEuros } from "@/lib/format";

export function PricingCalculator({ lang }: { lang: Lang }) {
  const copy = copyFor(lang).pricing;
  const id = useId();
  const [servers, setServers] = useState(40);
  const [tierId, setTierId] = useState<TierId>("standard");
  const [central, setCentral] = useState(2);
  const c = copy.calculator;
  const tier = tiers.find((t) => t.id === tierId)!;
  const q = quote(tier, servers, central);
  const eur = (n: number) => formatEuros(n, lang);

  return (
    <div className="calc">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="field">
          <label htmlFor={`${id}-servers`}>{c.servers}</label>
          <input
            id={`${id}-servers`}
            type="number"
            inputMode="numeric"
            min={1}
            max={100000}
            step={1}
            value={Number.isFinite(servers) ? servers : ""}
            onChange={(e) => setServers(Math.min(100000, Math.max(0, e.target.valueAsNumber || 0)))}
            aria-describedby={`${id}-servers-hint`}
          />
          <span className="hint" id={`${id}-servers-hint`}>{c.serversHint}</span>
        </div>
        <div className="field">
          <label htmlFor={`${id}-tier`}>{c.tier}</label>
          <select id={`${id}-tier`} value={tierId} onChange={(e) => setTierId(e.target.value as TierId)}>
            {tiers.map((t) => (
              <option key={t.id} value={t.id}>{copy.tiers[t.id].name}</option>
            ))}
          </select>
        </div>
        {tier.perCentralServerYear ? (
          <div className="field">
            <label htmlFor={`${id}-central`}>{c.centralServers}</label>
            <input
              id={`${id}-central`}
              type="number"
              inputMode="numeric"
              min={tier.minCentralServers}
              max={20}
              value={central}
              onChange={(e) => setCentral(Math.min(20, Math.max(0, e.target.valueAsNumber || 0)))}
            />
          </div>
        ) : null}
      </form>
      <div className="calc-result" aria-live="polite">
        <div className="muted small">{c.result}</div>
        {tier.perServerMonth === null ? (
          <>
            <div className="total">{copy.free}</div>
            <p className="muted" style={{ marginTop: 8 }}>{c.communityResult}</p>
          </>
        ) : (
          <>
            <div className="total">{eur(q.total)}</div>
            <div className="muted small">{c.perMonth} {eur(Math.round(q.total / 12))} {c.perMonthSuffix}</div>
            <ul>
              <li>
                {c.billed(q.billedServers)}
                {q.billedServers > servers ? ` (${c.minimumApplied})` : ""}: {eur(q.serversTotal)}
              </li>
              {q.discountPercent > 0 ? <li>{c.discount(q.discountPercent)}</li> : null}
              {q.centralServers > 0 ? <li>{c.central(q.centralServers, eur(q.centralTotal))}</li> : null}
            </ul>
          </>
        )}
        <p className="muted small" style={{ margin: "12px 0 0" }}>{c.note}</p>
      </div>
    </div>
  );
}
