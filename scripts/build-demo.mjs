// Builds the live demo: the real web interface of the product, answering
// from made-up data in the browser (docs/demo.md in Kidoly/monitorflow).
// It lands in public/demo/, so the site build serves it at /demo/.
//
//   node scripts/build-demo.mjs               build (replace public/demo)
//   node scripts/build-demo.mjs --if-missing  build only when absent
//
// Environment:
//   MF_PRODUCT_DIR   a local checkout to build from instead of cloning
//   MF_PRODUCT_REPO  git URL (default: https://github.com/Kidoly/monitorflow.git)
//   MF_DEMO_REF      branch or tag (default: main, or the demo's pull request
//                    branch while main has no demo build yet)
//   NEXT_PUBLIC_SITE_URL  the site, for the demo banner's "Website" link

import { execFileSync, spawnSync } from "node:child_process";
import { cpSync, existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const dest = join(root, "public", "demo");
const repo = process.env.MF_PRODUCT_REPO ?? "https://github.com/Kidoly/monitorflow.git";
const site = (process.env.NEXT_PUBLIC_SITE_URL || "https://monitorflow.eu").replace(/\/+$/, "");
// Until Kidoly/monitorflow#524 is merged, main has no demo build.
const FALLBACK_REF = "web/static-demo";

if (process.argv.includes("--if-missing") && existsSync(join(dest, "index.html"))) process.exit(0);

function hasDemoBuild(webDir) {
  const pkg = JSON.parse(readFileSync(join(webDir, "package.json"), "utf8"));
  return Boolean(pkg.scripts?.["build:demo"]);
}

function clone(ref) {
  const dir = mkdtempSync(join(tmpdir(), "mf-demo-"));
  const git = (...args) => execFileSync("git", args, { cwd: dir, stdio: ["ignore", "pipe", "inherit"] });
  git("init", "-q");
  git("remote", "add", "origin", repo);
  git("sparse-checkout", "set", "--no-cone", "/web/", "/docs/demo.md");
  git("fetch", "-q", "--depth", "1", "--filter=blob:none", "origin", ref);
  git("checkout", "-q", "FETCH_HEAD");
  return dir;
}

let checkout = process.env.MF_PRODUCT_DIR ? resolve(process.env.MF_PRODUCT_DIR) : null;
let tmp = null;
if (!checkout) {
  const wanted = process.env.MF_DEMO_REF;
  tmp = clone(wanted ?? "main");
  if (!wanted && !hasDemoBuild(join(tmp, "web"))) {
    rmSync(tmp, { recursive: true, force: true });
    console.log(`main has no demo build yet: using ${FALLBACK_REF}`);
    tmp = clone(FALLBACK_REF);
  }
  checkout = tmp;
}
const web = join(checkout, "web");
if (!hasDemoBuild(web)) {
  console.error(`No build:demo script in ${web}/package.json`);
  process.exit(1);
}

const run = (cmd, args, env = {}) => {
  const r = spawnSync(cmd, args, { cwd: web, stdio: "inherit", env: { ...process.env, ...env } });
  if (r.status !== 0) process.exit(r.status ?? 1);
};
// The product asks for Node 26; the demo build works on Node 20.9 and later.
run("npm", ["ci", "--no-audit", "--no-fund", "--engine-strict=false"]);
run("npm", ["run", "build:demo"], {
  NEXT_PUBLIC_MONITORFLOW_BASE_PATH: "/demo",
  NEXT_PUBLIC_MONITORFLOW_SITE_URL: site,
});

rmSync(dest, { recursive: true, force: true });
cpSync(join(web, "out"), dest, { recursive: true });
if (tmp) rmSync(tmp, { recursive: true, force: true });
console.log("Demo built into public/demo/ (served at /demo/)");
