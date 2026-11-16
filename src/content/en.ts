// English copy. Plain words, short sentences, and only what the product does
// today (roadmap items are labelled "Coming"). The French copy in fr.ts has
// the same shape.

export const en = {
  meta: {
    homeTitle: "MonitorFlow: watch, alert and update your Linux and Windows servers",
    homeDescription:
      "Free and open source server monitoring for Linux and Windows: alerts, updates in waves and AI fixes a person approves, all from one web page.",
    pricingTitle: "Pricing: free and open source, support if you want it | MonitorFlow",
    pricingDescription:
      "Every feature to watch, alert on, update and fix servers is free, with no limit. Subscriptions add support, a tested update channel and high availability.",
    guidesTitle: "How to monitor your servers: step-by-step guides | MonitorFlow",
    guidesDescription:
      "Step-by-step guides to monitor databases, web servers, Linux and Windows services, disks and logs with MonitorFlow, and get alerted.",
    notFoundTitle: "Page not found | MonitorFlow",
  },
  nav: {
    skip: "Skip to content",
    features: "Features",
    pricing: "Pricing",
    guides: "Guides",
    demo: "Live demo",
    github: "GitHub",
    menu: "Menu",
    home: "MonitorFlow home",
    language: "Language",
    theme: { label: "Theme", system: "Theme: follows your system", light: "Theme: light", dark: "Theme: dark" },
  },
  hero: {
    badge: "Free and open source",
    status: "Early development",
    version: "Latest release",
    title: "Watch, alert and update your Linux and Windows servers.",
    lead:
      "All from one web page. Install one central server, then a small program, called an agent, on each server you want to watch. MonitorFlow tells you when something goes wrong and keeps your servers up to date.",
    audience: "For a company running its own servers, a service provider running them for customers, and your homelab.",
    demo: "Try the live demo",
    install: "Install in 5 minutes",
    github: "View on GitHub",
    earlyNote:
      "MonitorFlow is in early development: it works and is used, and it changes quickly. Read the release notes before you rely on it.",
  },
  video: {
    title: "MonitorFlow in one minute",
    note: "With sound. Captions in English and French.",
    fallback: "Your browser cannot play this video.",
    download: "Download the video",
  },
  audiences: {
    title: "One product, whoever runs the servers",
    items: [
      {
        title: "A company with its own servers",
        text: "One central server and your servers, in one place. No customers, no extra screens: what you do not need stays out of sight.",
      },
      {
        title: "A service provider (MSP)",
        text: "Customers, sites, alerts routed per customer and roles per customer or site. They appear once you add a second customer, and a customer you give access to sees only their own servers.",
      },
      {
        title: "Your homelab",
        text: "The same software, free, with no limit on servers, users or features. No trial, no key to enter, no nag screen. Ever.",
      },
    ],
  },
  how: {
    title: "How it works",
    lead: "A central server, an agent on each server, and a relay where you need one. Each installed with one command.",
    items: [
      {
        title: "An agent on each server",
        text: "A small program that measures CPU, memory, disks, services, ports and logs, and sends them to the central server. Linux (any distribution with systemd, x86_64 or ARM64) and Windows.",
      },
      {
        title: "Outbound only, encrypted",
        text: "Agents only connect out: nothing to open in the firewall of the servers you watch. Every connection uses mutual TLS (mTLS): it is encrypted, and both sides prove who they are with certificates.",
      },
      {
        title: "A relay for remote sites",
        text: "Optional. At a remote site, one relay carries the traffic of the servers behind it, keeps their data while the link is down, and can keep a local copy of the packages.",
      },
      {
        title: "The central server does the rest",
        text: "One Linux machine stores metrics and logs, opens alerts, sends notifications, runs updates and serves the web interface.",
      },
    ],
    diagramAlt:
      "MonitorFlow architecture: agents on your Linux and Windows servers, and a relay at a remote site, connect out to the central server. The central server runs the web interface, the MonitorFlow server, its databases and the updater, and reaches out to an AI provider, package repositories and notification channels.",
  },
  features: {
    title: "What it does",
    items: [
      {
        id: "monitoring",
        title: "Watch everything that matters",
        points: [
          "CPU, memory, disks, disk I/O, services and ports",
          "Logs: journald, the Windows Event Log and log files",
          "Proxmox containers, LVM and ZFS snapshots",
          "Your own Bash or PowerShell scripts as checks",
          "Sensible limits out of the box, changed per server or per site",
        ],
      },
      {
        id: "alerts",
        title: "Alerts that reach the right person",
        points: [
          "Email, webhook, Slack, Teams and Discord",
          "Silences for planned work",
          "On-call rotations, with covers for holidays",
          "Acknowledge an alert to say you are on it. Nobody does? Administrators are told after 15 minutes, by default",
          "Related incidents grouped: at most one message a minute",
        ],
      },
      {
        id: "updates",
        title: "Updates in waves, when you choose",
        points: [
          "Local copies (mirrors) of the Debian, Ubuntu and Rocky Linux and AlmaLinux package repositories",
          "On demand by default: packages are fetched when first needed, so mirrors fit in about 100 GB",
          "Update campaigns in waves, during the hours you choose, stopped on failure",
          "Windows Update, and apps through winget, Flatpak and Snap",
        ],
      },
      {
        id: "dashboards",
        title: "Dashboards and a wall screen",
        points: [
          "Build your own dashboards from any metric",
          "Wall screen or TV mode: full screen, large text, refreshes by itself",
          "A read-only display link that needs no sign-in, and that you can revoke",
        ],
      },
      {
        id: "integrations",
        title: "An API for everything",
        points: [
          "A public API (/api/v1) documented with OpenAPI, and Swagger UI on every install",
          "Signed outgoing webhooks for incidents, acknowledgements, servers and updates",
          "Signed plugins, installed from the web interface, to add checks and channels",
        ],
      },
      {
        id: "simple",
        title: "Simple to run",
        points: [
          "One command installs the central server, one adds a server",
          "Update the central server in two clicks: a backup first, and it rolls back on its own if something fails",
          "Agents and relays upgrade themselves, server by server",
          "A backup every day, the last seven kept",
        ],
      },
    ],
  },
  ai: {
    eyebrow: "AI that proposes, a person approves",
    title: "Nothing runs without a person saying yes.",
    lead:
      "When an alert opens, an AI reads the context, diagnoses the problem and suggests a command. You read it, then click Approve and run, or not.",
    points: [
      {
        title: "Any provider, or none outside",
        text: "Anthropic, OpenAI, any OpenAI-compatible API, or a local model (Ollama, llama.cpp, vLLM) so nothing leaves your network. Secrets are removed from what is sent.",
      },
      {
        title: "Risk tiers",
        text: "Commands that only look, like reading disk usage, may run on their own. Anything that changes a server waits for a person. Dangerous commands are refused outright, whatever the model says.",
      },
      {
        title: "Your servers agree first",
        text: "A server accepts commands only if it was installed to. AI is off until an administrator turns it on.",
      },
      {
        title: "Everything is written down",
        text: "Every proposal, approval, command and output goes to an audit log that cannot be quietly changed.",
      },
    ],
    approve: "Approve and run",
    mock: {
      alert: "Disk /var at 95% on web-02",
      diagnosis: "Old journal logs are filling /var.",
      suggested: "Suggested command",
      risk: "Changes the server: waits for a person",
      audit: "Written to the audit log",
    },
  },
  msp: {
    title: "For service providers, out of sight until you need it",
    text:
      "Customers keep their servers, sites and notifications apart, and a user's role can cover everything, one customer or one site. A single company never sees any of it: customers appear once you add a second one.",
  },
  install: {
    title: "Up and running in 5 minutes",
    lead: "Nothing to clone, build or edit.",
    steps: [
      {
        title: "Install the central server",
        text: "On a Linux machine, run this. It asks one question, the public name, then prints the address of the web interface and a one-time link to create the administrator.",
      },
      {
        title: "Add your servers",
        text: "In the web interface, open Administration › Add servers and copy the command, with its token. The same command works for every Linux server. For Windows, the same page shows a PowerShell line.",
      },
      {
        title: "Watch them arrive",
        text: "Within seconds, each server appears under its own name, online, with its first graphs.",
      },
    ],
    copy: "Copy",
    copied: "Copied",
    requirementsTitle: "What you need",
    requirements: [
      "A Linux machine with 2 vCPU and 4 GB of RAM for a few dozen servers. Docker is installed for you if it is missing.",
      "Ports 443 and 80 (web interface), 7443 and 7445 (agents and relays), 7480 (packages, if you use updates).",
      "Servers to watch: any Linux with systemd (x86_64 or ARM64), or Windows.",
    ],
    fullGuide: "Full install guide",
  },
  coming: {
    title: "Coming",
    lead: "On the roadmap, not in a release yet.",
    items: [
      "Sign in through your own identity provider: OpenID Connect, or LDAP over TLS (LDAPS)",
      "Move your checks over from another monitoring tool, with a preview first",
      "A connection to PSA tools (the ticketing tools of service providers): a ticket per incident",
    ],
    roadmap: "Read the roadmap",
  },
  cta: {
    title: "Free and open source. For good.",
    text:
      "MonitorFlow is licensed AGPL-3.0-or-later. Every feature to watch, alert on, update and fix servers is free, with no limit. Subscriptions add support and high availability for those who want them.",
    pricing: "See pricing",
  },
  pricing: {
    title: "Free to use. Support if you want it.",
    lead:
      "Everything to watch, alert on, update and fix your servers is free and open source, with no limit on servers, users or features. For a homelab as for a company. No nag screens, ever.",
    proposed: "Proposed prices, subject to change. Euros, excluding VAT, billed yearly, per managed server.",
    principles: [
      {
        title: "Free means free",
        text: "The free Community edition has every feature except high availability. No limit, no time limit, no key.",
      },
      {
        title: "A subscription buys peace of mind",
        text: "Support with response times, the tested update channel, validated distribution snapshots and, in Enterprise, high availability.",
      },
      {
        title: "Nothing ever stops",
        text: "When a subscription ends, monitoring, alerts and updates keep working. A single central server never needs a key.",
      },
    ],
    perServerMonth: "per server per month",
    free: "Free",
    forever: "forever",
    minimum: "Minimum",
    noMinimum: "No minimum",
    minServers: (n: number, yearly: string) => `${n} servers (${yearly} a year)`,
    enterprisePrice: (perCentral: string) => `Premium + ${perCentral} per central server per year`,
    minCentral: (n: number) => `${n} central servers`,
    contact: "Contact us",
    install: "Install it now",
    demo: "Try the live demo",
    mostPopular: "Most common",
    tiers: {
      community: {
        name: "Community",
        tagline: "For homelabs, evaluation and any team that supports itself.",
        features: ["Every feature except high availability", "Community forum", "Updates from the main channel", "No limit on servers or users"],
      },
      basic: {
        name: "Basic",
        tagline: "For small companies.",
        features: ["Tested update channel", "Validated distribution snapshots", "5 support tickets a year", "Answer by the next business day"],
      },
      standard: {
        name: "Standard",
        tagline: "For production fleets.",
        features: ["Everything in Basic", "Unlimited tickets", "Answer within 4 business hours"],
      },
      premium: {
        name: "Premium",
        tagline: "For critical environments and large MSPs.",
        features: ["Everything in Standard", "Answer within 1 hour for a critical incident", "Remote assistance"],
      },
      enterprise: {
        name: "Enterprise",
        tagline: "When the platform must survive the loss of a host.",
        features: ["Everything in Premium", "High availability: more than one central server, added with one command"],
      },
    },
    volume: {
      title: "Volume pricing for MSPs",
      text: (steps: { percent: number; from: string }[]) =>
        `${steps.map((s) => `${s.percent}% off from ${s.from} servers`).join(", ")}. Relays are free.`,
    },
    calculator: {
      title: "Estimate your yearly price",
      servers: "Managed servers",
      serversHint: "Machines with an agent. Relays are free.",
      tier: "Subscription",
      centralServers: "Central servers",
      result: "Per year",
      perMonth: "about",
      perMonthSuffix: "per month",
      billed: (n: number) => `Billed for ${n} servers`,
      minimumApplied: "the tier's minimum",
      discount: (p: number) => `${p}% volume discount`,
      central: (n: number, total: string) => `${n} central servers: ${total}`,
      communityResult: "Free, for any number of servers.",
      note: "Excluding VAT. Proposed prices.",
    },
    faqTitle: "Questions",
    faq: [
      {
        q: "Is it really free?",
        a: "Yes, without limits. Every feature to watch, alert on, update and fix servers is in the free Community edition, under the AGPL-3.0-or-later license, for any number of servers and users. Only high availability (more than one central server) needs a subscription.",
      },
      {
        q: "What happens when my subscription ends?",
        a: "Nothing stops. Monitoring, alerts, updates and your central servers keep running. You lose support and the tested update channel, and you cannot add central servers beyond the first.",
      },
      {
        q: "Can I host it myself?",
        a: "Always. Today it is the only way: you install the central server on your own machine with one command.",
      },
      {
        q: "Is there a hosted version?",
        a: "Not yet.",
      },
      {
        q: "What counts as a server?",
        a: "A machine with a MonitorFlow agent on it. Relays and the central server do not count.",
      },
      {
        q: "Can I pay by card?",
        a: "Not yet: there is no checkout. Contact us and we will sort it out together.",
      },
    ],
  },
  guides: {
    title: "How to monitor your servers",
    lead: "Step-by-step guides: what can go wrong, what MonitorFlow checks, how to add the check and what to look at first when it fires.",
    breadcrumb: "Guides",
    otherLang: "Lire en français",
    ctaTitle: "Not using MonitorFlow yet?",
    ctaText: "Free and open source. Install the central server in one command, or look around the live demo first.",
    sourceNote: "This guide comes from the MonitorFlow repository.",
    edit: "Suggest a change",
  },
  footer: {
    tagline: "Watch, alert and update your Linux and Windows servers. All from one web page.",
    product: "Product",
    releases: "Releases",
    docs: "Documentation",
    help: "Help",
    community: "Questions and community",
    issues: "Bugs and feature requests",
    support: "Support for subscribers",
    supportSoon: "coming soon",
    sales: "Sales and Enterprise",
    security: "Report a security issue",
    license: "Licensed AGPL-3.0-or-later.",
    privacy: "No cookies, no tracking.",
  },
  notFound: {
    title: "This page does not exist.",
    text: "It may have moved. The guides and the home page are good places to start.",
    home: "Home",
  },
};

export type Copy = typeof en;
