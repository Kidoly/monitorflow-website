// The Open Graph image (1200 x 630), drawn once at build time.

import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export async function GET() {
  const fonts = join(process.cwd(), "node_modules", "@fontsource", "inter", "files");
  const [bold, regular, logo] = await Promise.all([
    readFile(join(fonts, "inter-latin-700-normal.woff")),
    readFile(join(fonts, "inter-latin-400-normal.woff")),
    readFile(join(process.cwd(), "public", "brand", "slime-violette.svg"), "utf8"),
  ]);
  const logoSrc = `data:image/svg+xml;base64,${Buffer.from(logo).toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 96px", background: "#17151f", color: "#ededef", fontFamily: "Inter" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
          <img src={logoSrc} width={168} height={168} alt="" />
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -3 }}>MonitorFlow</div>
        </div>
        <div style={{ marginTop: 48, fontSize: 44, lineHeight: 1.3, color: "#d4d4d8", maxWidth: 1000 }}>
          Watch, alert and update your Linux and Windows servers. All from one web page.
        </div>
        <div style={{ marginTop: 36, fontSize: 30, color: "#cfa8ff" }}>Free and open source</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Inter", data: bold, weight: 700, style: "normal" },
        { name: "Inter", data: regular, weight: 400, style: "normal" },
      ],
    },
  );
}
