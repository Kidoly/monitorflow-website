import type { ReactNode } from "react";
import type { Lang } from "@/lib/i18n";
import { themeScript } from "./ThemeToggle";
import "@/app/globals.css";

/** The html and body of every page; each language group has its own root layout. */
export function Document({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
