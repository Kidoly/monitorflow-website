import assert from "node:assert/strict";
import { test } from "node:test";
import { quote, tiers } from "./pricing.ts";

const tier = (id: string) => tiers.find((t) => t.id === id)!;

test("community is free whatever the size", () => {
  assert.equal(quote(tier("community"), 5000).total, 0);
});

test("minimums match the proposed prices", () => {
  assert.equal(quote(tier("basic"), 1).total, 600);
  assert.equal(quote(tier("standard"), 10).total, 1200);
  assert.equal(quote(tier("premium"), 0).total, 4200);
});

test("volume discounts start at 500 and 2,000 servers", () => {
  assert.equal(quote(tier("standard"), 499).discountPercent, 0);
  assert.equal(quote(tier("standard"), 500).total, 500 * 48 * 0.8);
  assert.equal(quote(tier("standard"), 2000).total, 2000 * 48 * 0.65);
});

test("enterprise adds central servers, at least two", () => {
  const q = quote(tier("enterprise"), 100, 1);
  assert.equal(q.centralServers, 2);
  assert.equal(q.total, 100 * 84 + 5000);
});
