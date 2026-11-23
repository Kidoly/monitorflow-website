import { test } from "node:test";
import assert from "node:assert/strict";
import { isHidden, withoutHidden } from "./hidden-guides.ts";

test("guides about moving from another tool are hidden", () => {
  assert.equal(isHidden("move-from-another-tool"), true);
  assert.equal(isHidden("venir-d-un-autre-outil"), true);
  assert.equal(isHidden("migrer-depuis-x"), true);
  assert.equal(isHidden("monitor-nginx"), false);
});

test("lines linking to a hidden guide go, and so does their empty section", () => {
  const md = [
    "Intro.",
    "",
    "## Moving",
    "",
    "- [Move](move-from-x.md): text",
    "- [Move](fr/venir-d-un-autre-outil.md#a): text",
    "",
    "## Servers",
    "",
    "- [Disk](monitor-disk-space.md): text",
    "",
    "## Moving from another tool",
    "",
    "See [this](move-from-x.md).",
  ].join("\n");
  assert.equal(withoutHidden(md), ["Intro.", "", "## Servers", "", "- [Disk](monitor-disk-space.md): text", ""].join("\n"));
});

test("a section keeps its subsections, and code is left alone", () => {
  const md = ["## A", "### B", "text", "", "```sh", "# one", "# two", "```"].join("\n");
  assert.equal(withoutHidden(md), md);
});
