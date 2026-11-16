"use client";

// Cycles the theme: follows the system, then light, then dark. The choice is
// kept in this browser only (localStorage, no cookie); the inline script in
// the document head applies it before the first paint.

import { useEffect, useState } from "react";
import { icons } from "./Icons";

type Theme = "system" | "light" | "dark";
const ORDER: Theme[] = ["system", "light", "dark"];

function read(): Theme {
  try {
    const t = localStorage.getItem("theme");
    return t === "light" || t === "dark" ? t : "system";
  } catch {
    return "system";
  }
}

export function ThemeToggle({ labels }: { labels: Record<Theme, string> }) {
  const [theme, setTheme] = useState<Theme>("system");
  useEffect(() => setTheme(read()), []);

  function next() {
    const t = ORDER[(ORDER.indexOf(theme) + 1) % ORDER.length];
    setTheme(t);
    const root = document.documentElement;
    if (t === "system") delete root.dataset.theme;
    else root.dataset.theme = t;
    try {
      if (t === "system") localStorage.removeItem("theme");
      else localStorage.setItem("theme", t);
    } catch {
      // Storage blocked: the choice lasts for this page only.
    }
  }

  const icon = theme === "light" ? icons.sun : theme === "dark" ? icons.moon : icons.system;
  return (
    <button type="button" className="icon-btn" onClick={next} aria-label={labels[theme]} title={labels[theme]}>
      {icon}
    </button>
  );
}

/** Runs in the head before paint, so a chosen theme never flashes. */
export const themeScript =
  "try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}";
