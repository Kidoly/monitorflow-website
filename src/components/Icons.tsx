// A few line icons, drawn inline so no icon font or library is loaded.

import type { ReactNode, SVGProps } from "react";

function Icon({ children, ...props }: SVGProps<SVGSVGElement> & { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>
      {children}
    </svg>
  );
}

export const icons = {
  monitoring: (
    <Icon><path d="M3 12h4l3-8 4 16 3-8h4" /></Icon>
  ),
  alerts: (
    <Icon><path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></Icon>
  ),
  updates: (
    <Icon><path d="M21 12a9 9 0 0 1-15.5 6.2L3 16" /><path d="M3 21v-5h5" /><path d="M3 12a9 9 0 0 1 15.5-6.2L21 8" /><path d="M21 3v5h-5" /></Icon>
  ),
  dashboards: (
    <Icon><rect x="3" y="3" width="7" height="9" rx="1.5" /><rect x="14" y="3" width="7" height="5" rx="1.5" /><rect x="14" y="12" width="7" height="9" rx="1.5" /><rect x="3" y="16" width="7" height="5" rx="1.5" /></Icon>
  ),
  integrations: (
    <Icon><path d="m16 18 6-6-6-6" /><path d="m8 6-6 6 6 6" /></Icon>
  ),
  simple: (
    <Icon><path d="m5 12 5 5L20 7" /></Icon>
  ),
  network: (
    <Icon><rect x="9" y="2" width="6" height="5" rx="1" /><rect x="2" y="17" width="6" height="5" rx="1" /><rect x="16" y="17" width="6" height="5" rx="1" /><path d="M12 7v5M5 17v-3h14v3" /></Icon>
  ),
  machines: (
    <Icon><rect x="2" y="4" width="20" height="14" rx="2" /><rect x="5" y="7" width="6" height="4" rx=".5" /><rect x="13" y="7" width="6" height="4" rx=".5" /><path d="M8 21h8" /></Icon>
  ),
  reports: (
    <Icon><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z" /><path d="M14 3v6h6" /><path d="M8 17v-3M12 17v-6M16 17v-2" /></Icon>
  ),
  agent: (
    <Icon><rect x="3" y="4" width="18" height="7" rx="1.5" /><rect x="3" y="13" width="18" height="7" rx="1.5" /><path d="M7 7.5h.01M7 16.5h.01" /></Icon>
  ),
  lock: (
    <Icon><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></Icon>
  ),
  relay: (
    <Icon><circle cx="12" cy="10" r="2" /><path d="M12 12v9M8 21h8" /><path d="M8.5 6.5a5 5 0 0 0 0 7M15.5 6.5a5 5 0 0 1 0 7M5.6 3.6a9 9 0 0 0 0 12.8M18.4 3.6a9 9 0 0 1 0 12.8" /></Icon>
  ),
  central: (
    <Icon><path d="M12 3 3 8l9 5 9-5-9-5Z" /><path d="m3 13 9 5 9-5" /></Icon>
  ),
  building: (
    <Icon><rect x="4" y="3" width="16" height="18" rx="1.5" /><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3" /></Icon>
  ),
  people: (
    <Icon><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18.5 20a6.5 6.5 0 0 0-3-5.5" /></Icon>
  ),
  home: (
    <Icon><path d="m3 11 9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-5h4v5" /></Icon>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" /></svg>
  ),
  play: (
    <Icon><polygon points="7 4 20 12 7 20 7 4" /></Icon>
  ),
  arrow: (
    <Icon><path d="M5 12h14M13 6l6 6-6 6" /></Icon>
  ),
  menu: (
    <Icon><path d="M4 7h16M4 12h16M4 17h16" /></Icon>
  ),
  sun: (
    <Icon><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></Icon>
  ),
  moon: (
    <Icon><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /></Icon>
  ),
  system: (
    <Icon><rect x="3" y="4" width="18" height="12" rx="1.5" /><path d="M8 20h8M12 16v4" /></Icon>
  ),
  shield: (
    <Icon><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></Icon>
  ),
  log: (
    <Icon><path d="M14 3H6a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 6 21h12a1.5 1.5 0 0 0 1.5-1.5V8.5L14 3Z" /><path d="M14 3v5.5h5.5M8.5 13h7M8.5 17h5" /></Icon>
  ),
  spark: (
    <Icon><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" /></Icon>
  ),
};
