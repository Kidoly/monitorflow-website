import type { ReactNode } from "react";
import { Document } from "@/components/Document";

export default function FrenchLayout({ children }: { children: ReactNode }) {
  return <Document lang="fr">{children}</Document>;
}
