// The "How to monitor" guides, read at build time from content/guides/
// (pulled from the product repository by scripts/fetch-guides.mjs).
//
// English guides sit at the root of docs/guides/, French ones in fr/. Each has
// front matter: title, description, slug, lang and translation (the slug of
// the other language). Links between guides are relative .md links in the
// repository; they become site URLs here, and links to the rest of the
// product docs go to GitHub.

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, posix } from "node:path";
import { Marked, type Tokens } from "marked";
import { site } from "@/config/site";
import type { Lang } from "@/lib/i18n";

const ROOT = join(process.cwd(), "content", "guides");

export interface GuideMeta {
  title: string;
  description: string;
  slug: string;
  lang: Lang;
  translation: string | null;
}

export interface Guide extends GuideMeta {
  html: string;
}

interface Source {
  ref: string;
  commit: string;
}

function source(): Source {
  const file = join(ROOT, ".source.json");
  if (!existsSync(file)) return { ref: "main", commit: "main" };
  return JSON.parse(readFileSync(file, "utf8")) as Source;
}

/** Splits `---` front matter (flat `key: value` lines) from the body. */
export function parseFrontMatter(text: string): { data: Record<string, string>; body: string } {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  if (!m) return { data: {}, body: text };
  const data: Record<string, string> = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = /^([A-Za-z_][\w-]*):\s*(.*)$/.exec(line);
    if (!kv) continue;
    let v = kv[2].trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1).replace(/\\"/g, '"');
    }
    data[kv[1]] = v;
  }
  return { data, body: text.slice(m[0].length) };
}

/** The site URL of a guide or of a language's index. */
export function guideHref(lang: Lang, slug?: string): string {
  const base = lang === "fr" ? "/fr/guides/" : "/guides/";
  return slug ? `${base}${slug}/` : base;
}

/**
 * Turns a link written in a guide into a site URL. `fromDir` is the guide's
 * folder relative to docs/guides ("" for English, "fr" for French).
 */
export function rewriteHref(href: string, fromDir: string, ref = "main"): string {
  if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("#") || href.startsWith("/")) return href;
  const [path, hash] = href.split("#", 2);
  const anchor = hash ? `#${hash}` : "";
  const resolved = posix.normalize(posix.join(fromDir || ".", path));
  if (resolved.startsWith("../")) {
    // Outside docs/guides: the rest of the product documentation.
    const inDocs = posix.normalize(posix.join("docs", resolved.slice(3)));
    return `${site.github}/blob/${ref}/${inDocs}${anchor}`;
  }
  if (!resolved.endsWith(".md")) return `${site.github}/blob/${ref}/docs/guides/${resolved}${anchor}`;
  const lang: Lang = resolved.startsWith("fr/") ? "fr" : "en";
  const file = posix.basename(resolved, ".md");
  return (file === "README" ? guideHref(lang) : guideHref(lang, file)) + anchor;
}

/** GitHub-style heading anchors, so `page#section` links keep working. */
export function headingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/\s/g, "-");
}

function render(markdown: string, fromDir: string): string {
  const { ref } = source();
  const marked = new Marked({ gfm: true });
  marked.use({
    walkTokens(token) {
      if (token.type === "link") (token as Tokens.Link).href = rewriteHref((token as Tokens.Link).href, fromDir, ref);
    },
    renderer: {
      heading({ tokens, depth, text }) {
        const inner = this.parser.parseInline(tokens);
        return `<h${depth} id="${headingId(text)}">${inner}</h${depth}>\n`;
      },
    },
  });
  const html = marked.parse(markdown, { async: false }) as string;
  // Wide tables scroll inside their own box, never the page.
  return html.replace(/<table>/g, '<div class="table-wrap"><table>').replace(/<\/table>/g, "</table></div>");
}

function dirOf(lang: Lang): string {
  return lang === "fr" ? join(ROOT, "fr") : ROOT;
}

function readGuide(lang: Lang, file: string): Guide {
  const { data, body } = parseFrontMatter(readFileSync(join(dirOf(lang), file), "utf8"));
  const slug = data.slug || file.replace(/\.md$/, "");
  return {
    title: data.title ?? slug,
    description: data.description ?? "",
    slug,
    lang,
    translation: data.translation || null,
    // The page draws its own title, so the guide's first heading goes.
    html: render(body.replace(/^\s*#\s+.+\n/, ""), lang === "fr" ? "fr" : ""),
  };
}

const cache = new Map<string, Guide[]>();

/** Every guide of a language, in file order, without the index. */
export function listGuides(lang: Lang): Guide[] {
  const hit = cache.get(lang);
  if (hit) return hit;
  const dir = dirOf(lang);
  if (!existsSync(dir)) {
    throw new Error("No guides in content/guides: run `npm run guides` to pull them from the product repository.");
  }
  const guides = readdirSync(dir)
    .filter((f) => f.endsWith(".md") && f !== "README.md")
    .sort()
    .map((f) => readGuide(lang, f));
  cache.set(lang, guides);
  return guides;
}

export function getGuide(lang: Lang, slug: string): Guide | undefined {
  return listGuides(lang).find((g) => g.slug === slug);
}

/** The guides index (docs/guides/README.md), with its sections. */
export function getGuidesIndex(lang: Lang): Guide {
  return readGuide(lang, "README.md");
}
