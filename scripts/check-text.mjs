// Fails when a file contains the em dash character (U+2014), which the
// project never uses: in copy, code, pulled guides and the built site alike.
//
//   node scripts/check-text.mjs <path>...

import { readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join } from "node:path";

const TEXT = new Set([".ts", ".tsx", ".mjs", ".js", ".css", ".md", ".html", ".json", ".xml", ".txt", ".vtt", ".yml", ".svg"]);
const FORBIDDEN = String.fromCodePoint(0x2014);
const problems = [];

function walk(path) {
  const stat = statSync(path, { throwIfNoEntry: false });
  if (!stat) return;
  if (stat.isDirectory()) {
    for (const name of readdirSync(path)) {
      if (name === "node_modules" || name === ".next") continue;
      walk(join(path, name));
    }
    return;
  }
  if (!TEXT.has(extname(path))) return;
  readFileSync(path, "utf8").split("\n").forEach((line, i) => {
    if (line.includes(FORBIDDEN)) problems.push(`${path}:${i + 1}`);
  });
}

const paths = process.argv.slice(2);
for (const p of paths.length ? paths : ["."]) walk(p);
if (problems.length) {
  console.error("Em dash (U+2014) found, rewrite these lines:\n" + problems.join("\n"));
  process.exit(1);
}
