// Serves a built static site locally, the way a static host would:
// `/path/` serves `/path/index.html`, unknown paths serve `/404.html`.
//
//   node scripts/serve.mjs out [port]

import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";

const root = resolve(process.argv[2] ?? "out");
const port = Number(process.argv[3] ?? 3000);
const TYPES = {
  ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript",
  ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".webp": "image/webp",
  ".avif": "image/avif", ".ico": "image/x-icon", ".woff2": "font/woff2", ".woff": "font/woff",
  ".mp4": "video/mp4", ".vtt": "text/vtt", ".xml": "application/xml", ".txt": "text/plain",
};

createServer((req, res) => {
  const url = decodeURIComponent(new URL(req.url ?? "/", "http://x").pathname);
  let file = normalize(join(root, url));
  if (!file.startsWith(root)) { res.writeHead(403).end(); return; }
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, "index.html");
  let status = 200;
  if (!existsSync(file)) { file = join(root, "404.html"); status = 404; }
  const type = TYPES[extname(file)] ?? "application/octet-stream";
  const size = statSync(file).size;
  // Byte ranges, as static hosts answer them: browsers seek in a video this
  // way, and some refuse to play one without it.
  const range = status === 200 && /^bytes=(\d*)-(\d*)$/.exec(req.headers.range ?? "");
  if (range && (range[1] || range[2])) {
    const start = range[1] ? Number(range[1]) : Math.max(0, size - Number(range[2]));
    const end = range[1] && range[2] ? Math.min(Number(range[2]), size - 1) : size - 1;
    if (start > end || start >= size) {
      res.writeHead(416, { "content-range": `bytes */${size}` }).end();
      return;
    }
    res.writeHead(206, { "content-type": type, "accept-ranges": "bytes", "content-range": `bytes ${start}-${end}/${size}`, "content-length": end - start + 1 });
    createReadStream(file, { start, end }).pipe(res);
    return;
  }
  res.writeHead(status, { "content-type": type, "accept-ranges": "bytes", "content-length": size });
  createReadStream(file).pipe(res);
}).listen(port, () => console.log(`http://localhost:${port}/`));
