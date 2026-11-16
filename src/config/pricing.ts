// Proposed prices (2026-11-16), a first proposal for the owner to adjust.
// Euros, excluding VAT, billed yearly, per managed server (a machine with an
// agent). Relays are free. Change the numbers here only: the pricing page,
// its table and its calculator all read this file.

export type TierId = "community" | "basic" | "standard" | "premium" | "enterprise";

export interface Tier {
  id: TierId;
  /** Euros per managed server per month; null for Community. */
  perServerMonth: number | null;
  /** Fewest servers billed. */
  minServers: number;
  /** Enterprise only: euros per central server per year, on top of Premium. */
  perCentralServerYear?: number;
  /** Enterprise only: fewest central servers billed. */
  minCentralServers?: number;
  /** Paid support tickets per year; null for unlimited, 0 for none. */
  ticketsPerYear: number | null;
}

export const currency = "EUR";

export const tiers: Tier[] = [
  { id: "community", perServerMonth: null, minServers: 0, ticketsPerYear: 0 },
  { id: "basic", perServerMonth: 2, minServers: 25, ticketsPerYear: 5 },
  { id: "standard", perServerMonth: 4, minServers: 25, ticketsPerYear: null },
  { id: "premium", perServerMonth: 7, minServers: 50, ticketsPerYear: null },
  {
    id: "enterprise",
    perServerMonth: 7,
    minServers: 50,
    perCentralServerYear: 2500,
    minCentralServers: 2,
    ticketsPerYear: null,
  },
];

/** MSP volume pricing: the largest step reached applies to every server. */
export const volumeDiscounts = [
  { fromServers: 2000, percent: 35 },
  { fromServers: 500, percent: 20 },
];

export interface Quote {
  billedServers: number;
  perServerYear: number;
  discountPercent: number;
  serversTotal: number;
  centralServers: number;
  centralTotal: number;
  total: number;
}

/** The yearly price of a tier for a number of servers (and central servers, for Enterprise). */
export function quote(tier: Tier, servers: number, centralServers = 0): Quote {
  const n = Math.max(0, Math.floor(servers));
  if (tier.perServerMonth === null) {
    return { billedServers: n, perServerYear: 0, discountPercent: 0, serversTotal: 0, centralServers: 0, centralTotal: 0, total: 0 };
  }
  const billedServers = Math.max(n, tier.minServers);
  const discountPercent = volumeDiscounts.find((d) => billedServers >= d.fromServers)?.percent ?? 0;
  const perServerYear = tier.perServerMonth * 12;
  const serversTotal = Math.round(billedServers * perServerYear * (1 - discountPercent / 100));
  const c = tier.perCentralServerYear ? Math.max(Math.floor(centralServers), tier.minCentralServers ?? 0) : 0;
  const centralTotal = c * (tier.perCentralServerYear ?? 0);
  return { billedServers, perServerYear, discountPercent, serversTotal, centralServers: c, centralTotal, total: serversTotal + centralTotal };
}
