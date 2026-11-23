// Guides about moving from another monitoring tool name that tool, and this
// site never names other products. Those guides stay in the product
// repository and off the site, together with every line that links to them.

import { posix } from "node:path";

const HIDDEN = /^(move-from-|migrer-depuis-|venir-d-un-autre-outil$)/;

export function isHidden(slug: string): boolean {
  return HIDDEN.test(slug);
}

function linksHidden(line: string): boolean {
  for (const m of line.matchAll(/\]\(([^)#\s]+?)\.md(?:#[^)]*)?\)/g)) {
    if (isHidden(posix.basename(m[1]))) return true;
  }
  return false;
}

/**
 * Drops the lines that link to a hidden guide, then any heading left with
 * nothing under it (the next heading is of the same or a higher level, or
 * the page ends). Fenced code is left as it is.
 */
export function withoutHidden(markdown: string): string {
  const lines: { text: string; heading: number }[] = [];
  let fence = false;
  for (const text of markdown.split("\n")) {
    if (/^\s*(```|~~~)/.test(text)) fence = !fence;
    else if (!fence && linksHidden(text)) continue;
    const heading = fence ? 0 : (/^(#{1,6})\s/.exec(text)?.[1].length ?? 0);
    lines.push({ text, heading });
  }
  const out: string[] = [];
  for (let i = 0; i < lines.length; i++) {
    const { heading } = lines[i];
    if (heading) {
      let j = i + 1;
      while (j < lines.length && lines[j].text.trim() === "") j++;
      const next = j < lines.length ? lines[j].heading : 1;
      if (next && next <= heading) {
        i = j - 1;
        continue;
      }
    }
    out.push(lines[i].text);
  }
  return out.join("\n");
}
