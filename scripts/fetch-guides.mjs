// Pulls the "How to monitor" guides from the product repository into
// content/guides/, so the site always publishes what the product repo holds.
//
//   node scripts/fetch-guides.mjs              fetch (replace content/guides)
//   node scripts/fetch-guides.mjs --if-missing fetch only when absent
//
// Environment:
//   MF_PRODUCT_DIR   a local checkout to copy from instead of cloning
//   MF_PRODUCT_REPO  git URL (default: https://github.com/Kidoly/monitorflow.git)
//   MF_PRODUCT_REF   branch or tag (default: main)

import { execFileSync } from "node:child_process";
import { cpSync, existsSync, mkdtempSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const dest = join(root, "content", "guides");
const repo = process.env.MF_PRODUCT_REPO ?? "https://github.com/Kidoly/monitorflow.git";
const ref = process.env.MF_PRODUCT_REF ?? "main";
const localDir = process.env.MF_PRODUCT_DIR;

if (process.argv.includes("--if-missing") && existsSync(join(dest, "README.md"))) {
  process.exit(0);
}

let source;
let commit = "local";
let tmp;
if (localDir) {
  source = join(resolve(localDir), "docs", "guides");
} else {
  tmp = mkdtempSync(join(tmpdir(), "mf-guides-"));
  const git = (...args) => execFileSync("git", args, { cwd: tmp, stdio: ["ignore", "pipe", "inherit"] }).toString().trim();
  git("init", "-q");
  git("remote", "add", "origin", repo);
  git("sparse-checkout", "set", "--no-cone", "/docs/guides/");
  git("fetch", "-q", "--depth", "1", "--filter=blob:none", "origin", ref);
  git("checkout", "-q", "FETCH_HEAD");
  commit = git("rev-parse", "HEAD");
  source = join(tmp, "docs", "guides");
}

if (!existsSync(join(source, "README.md"))) {
  console.error(`No guides found in ${source}`);
  process.exit(1);
}

rmSync(dest, { recursive: true, force: true });
cpSync(source, dest, { recursive: true });
writeFileSync(join(dest, ".source.json"), JSON.stringify({ repo, ref, commit }, null, 2) + "\n");
if (tmp) rmSync(tmp, { recursive: true, force: true });

const count = (dir) => readdirSync(dir).filter((f) => f.endsWith(".md") && f !== "README.md").length;
console.log(`Guides: ${count(dest)} in English, ${count(join(dest, "fr"))} in French (${ref} ${commit.slice(0, 7)})`);
