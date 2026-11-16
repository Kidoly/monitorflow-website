// Every contact link of the site, in one place. Ask the owner before
// publishing any address. An entry with `href: null` is shown as
// "coming soon" instead of a link.

const repo = "https://github.com/Kidoly/monitorflow";

export interface ContactLink {
  href: string | null;
  policy?: string;
}

export const contact = {
  /** Questions and help between users. The forum, once it exists. */
  community: { href: `${repo}/discussions` },
  /** Bugs and feature requests. */
  issues: { href: `${repo}/issues` },
  /** Support for subscribers: the support desk, once it exists. */
  support: { href: null },
  /** Sales and Enterprise: a form or address from the owner, once given. */
  sales: { href: `${repo}/issues/new?title=${encodeURIComponent("Enterprise subscription")}` },
  /** Security reports: private, never a public issue (SECURITY.md). */
  security: { href: `${repo}/security/advisories/new`, policy: `${repo}/blob/main/SECURITY.md` },
} as const satisfies Record<string, ContactLink>;
