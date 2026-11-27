// Finds the latest MonitorFlow release (the highest vX.Y.Z tag of the product
// repository) and writes it to content/release.json, which next.config.ts
// hands to the pages as NEXT_PUBLIC_MF_VERSION. Without network access it
// keeps the file it finds, or leaves the version in src/config/site.ts.
//
//   node scripts/fetch-release.mjs              fetch and write
//   node scripts/fetch-release.mjs --if-missing fetch only when absent
//   node scripts/fetch-release.mjs --print      print the version, write nothing
//
// Environment:
//   MF_PRODUCT_REPO  git URL (default: https://github.com/Kidoly/monitorflow.git)

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const file = join(root, "content", "release.json");
const repo = process.env.MF_PRODUCT_REPO ?? "https://github.com/Kidoly/monitorflow.git";
const print = process.argv.includes("--print");

if (!print && process.argv.includes("--if-missing") && existsSync(file)) process.exit(0);

let out;
try {
  out = execFileSync("git", ["ls-remote", "--tags", "--refs", repo, "v*"], { stdio: ["ignore", "pipe", "pipe"], timeout: 30_000 }).toString();
} catch (err) {
  if (print) {
    console.error(`Could not list the releases of ${repo}`);
    process.exit(1);
  }
  console.warn(`Could not list the releases of ${repo}: keeping the version already known.`);
  process.exit(0);
}

const versions = [...out.matchAll(/refs\/tags\/v(\d+)\.(\d+)\.(\d+)$/gm)]
  .map((m) => m.slice(1, 4).map(Number))
  .sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
if (!versions.length) {
  console.error(`No vX.Y.Z tag in ${repo}`);
  process.exit(print ? 1 : 0);
}
const version = versions.at(-1).join(".");

if (print) {
  console.log(version);
} else {
  mkdirSync(join(root, "content"), { recursive: true });
  writeFileSync(file, JSON.stringify({ version }, null, 2) + "\n");
  console.log(`Latest release: ${version}`);
}
