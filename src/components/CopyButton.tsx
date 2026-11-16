"use client";

import { useState } from "react";

export function CopyButton({ text, label, done }: { text: string; label: string; done: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // No clipboard access: the command stays selectable by hand.
    }
  }
  return (
    <button type="button" className="copy" onClick={copy} aria-live="polite">
      {copied ? done : label}
    </button>
  );
}
