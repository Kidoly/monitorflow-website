// Texte français. Même forme que en.ts : mots simples, phrases courtes, et
// seulement ce que le produit fait aujourd'hui (la feuille de route est
// marquée « Bientôt »).

import type { Copy } from "./en";

export const fr: Copy = {
  meta: {
    homeTitle: "MonitorFlow : supervisez serveurs, réseau et sites web, réparez ce qui casse",
    homeDescription:
      "Supervision libre et open source des serveurs Linux et Windows, des équipements réseau et des sites web : alertes, rapports de disponibilité, mises à jour par vagues et corrections par IA validées par une personne.",
    pricingTitle: "Tarifs : libre et gratuit, du support si vous le voulez | MonitorFlow",
    pricingDescription:
      "Tout ce qu'il faut pour surveiller, alerter, mettre à jour et réparer vos serveurs est gratuit, sans limite. Les abonnements ajoutent le support, un canal de mises à jour testé et la haute disponibilité.",
    guidesTitle: "Comment surveiller vos serveurs : guides pas à pas | MonitorFlow",
    guidesDescription:
      "Des guides pas à pas pour surveiller serveurs, équipements réseau, sites web, bases de données, machines virtuelles, services Linux et Windows avec MonitorFlow.",
    notFoundTitle: "Page introuvable | MonitorFlow",
  },
  nav: {
    skip: "Aller au contenu",
    features: "Fonctions",
    pricing: "Tarifs",
    guides: "Guides",
    demo: "Démo en ligne",
    github: "GitHub",
    menu: "Menu",
    home: "Accueil MonitorFlow",
    language: "Langue",
    theme: { label: "Thème", system: "Thème : celui du système", light: "Thème : clair", dark: "Thème : sombre" },
  },
  hero: {
    badge: "Libre et open source",
    status: "Développement en cours",
    version: "Dernière version",
    title: "Surveillez vos serveurs et votre réseau. Réparez ce qui casse. Gardez tout à jour.",
    lead:
      "Le tout depuis une seule page web. Installez un serveur central, puis un petit programme, appelé agent, sur chaque serveur Linux ou Windows. Commutateurs, imprimantes, sites web et machines virtuelles sont surveillés sans agent. MonitorFlow vous prévient quand quelque chose ne va pas et garde vos serveurs à jour.",
    audience: "Pour une entreprise qui gère ses serveurs, un prestataire qui les gère pour ses clients, et votre homelab.",
    demo: "Essayer la démo en ligne",
    install: "Installer en 5 minutes",
    github: "Voir sur GitHub",
    earlyNote:
      "MonitorFlow est en cours de développement : il fonctionne et sert déjà, et il évolue vite. Lisez les notes de version avant de vous appuyer dessus.",
  },
  video: {
    title: "MonitorFlow en une minute",
    note: "Avec le son. Sous-titres en français et en anglais.",
    fallback: "Votre navigateur ne peut pas lire cette vidéo.",
    download: "Télécharger la vidéo",
  },
  audiences: {
    title: "Un seul produit, quel que soit qui gère les serveurs",
    items: [
      {
        title: "Une entreprise et ses serveurs",
        text: "Un serveur central et vos serveurs, au même endroit. Pas de clients, pas d'écrans en trop : ce dont vous n'avez pas besoin reste caché.",
      },
      {
        title: "Un prestataire (infogérance)",
        text: "Clients, sites, alertes envoyées par client et rôles par client ou par site. Ils apparaissent dès le deuxième client, et un client à qui vous donnez accès ne voit que ses propres serveurs.",
      },
      {
        title: "Votre homelab",
        text: "Le même logiciel, gratuit, sans limite de serveurs, d'utilisateurs ou de fonctions. Pas d'essai, pas de clé à saisir, pas de fenêtre qui insiste. Jamais.",
      },
    ],
  },
  how: {
    title: "Comment ça marche",
    lead: "Un serveur central, un agent sur chaque serveur, et un relais là où il en faut un. Chacun installé en une commande.",
    items: [
      {
        title: "Un agent sur chaque serveur",
        text: "Un petit programme qui mesure processeur, mémoire, disques, services, ports et journaux, et les envoie au serveur central. Linux (toute distribution avec systemd, x86_64 ou ARM64) et Windows.",
      },
      {
        title: "Sortant uniquement, chiffré",
        text: "Les agents ne font que se connecter vers l'extérieur : rien à ouvrir dans le pare-feu des serveurs surveillés. Chaque connexion utilise le TLS mutuel (mTLS) : elle est chiffrée, et les deux côtés prouvent qui ils sont avec des certificats.",
      },
      {
        title: "Un relais pour les sites distants",
        text: "Facultatif. Sur un site distant, un relais transporte le trafic des serveurs derrière lui, garde leurs données pendant une coupure du lien, surveille les équipements réseau du site et peut garder une copie locale des paquets.",
      },
      {
        title: "Le serveur central fait le reste",
        text: "Une machine Linux stocke métriques et journaux, vérifie équipements et sites web, ouvre les alertes, envoie les notifications, lance les mises à jour et sert l'interface web.",
      },
    ],
    diagramAlt:
      "Architecture de MonitorFlow : les agents de vos serveurs Linux et Windows, et un relais sur un site distant, se connectent vers le serveur central. Le serveur central fait tourner l'interface web, le serveur MonitorFlow, ses bases de données et l'outil de mise à jour, et contacte un fournisseur d'IA, les dépôts de paquets et les canaux de notification.",
  },
  features: {
    title: "Ce qu'il fait",
    items: [
      {
        id: "monitoring",
        title: "Surveiller vos serveurs",
        points: [
          "Processeur, mémoire, disques, entrées-sorties disque, trafic réseau, services et ports",
          "Journaux : journald, le journal d'événements Windows et les fichiers journaux",
          "Vos propres scripts Bash ou PowerShell comme vérifications",
          "Des seuils raisonnables d'office, modifiables par serveur ou par site",
          "Chaque vérification tourne au rythme choisi, de quelques secondes à quelques heures",
        ],
      },
      {
        id: "network",
        title: "Équipements réseau et sites web",
        points: [
          "Ping et ports TCP ou UDP de n'importe quelle adresse, depuis le serveur central ou un relais du site",
          "Commutateurs, routeurs, pare-feu, imprimantes, onduleurs et NAS en SNMP v1, v2c et v3, avec un modèle par type d'équipement",
          "N'importe quelle valeur SNMP, avec vos propres fichiers MIB",
          "Les sites web comme un visiteur les voit : code de réponse, texte attendu, temps de réponse, redirections et expiration du certificat",
          "Analysez une plage d'adresses et ajoutez ce qui est trouvé en un clic, à intervalle régulier si vous le voulez",
        ],
      },
      {
        id: "machines",
        title: "Hyperviseurs et machines virtuelles",
        points: [
          "Hôtes Proxmox VE trouvés tout seuls, leurs conteneurs et instantanés",
          "VMware vCenter et ESXi : hôtes, machines virtuelles et banques de données, sans agent dans chaque machine virtuelle",
          "Hôtes Hyper-V par l'agent Windows",
          "Chaque machine virtuelle reliée au serveur déjà surveillé",
          "Instantanés LVM et ZFS",
        ],
      },
      {
        id: "alerts",
        title: "Des alertes qui arrivent à la bonne personne",
        points: [
          "E-mail, webhook, Slack, Teams et Discord, envoyés par client et par site",
          "Dépendances : quand un commutateur tombe, ce qui est derrière n'ouvre pas d'alerte en plus",
          "Des règles sur les moyennes et les tendances : « le disque sera plein dans 3 jours »",
          "Mettez en silence une vérification ou tout un serveur, une fois ou chaque semaine ou chaque mois",
          "Astreintes à tour de rôle, et un rappel aux suivants quand personne ne prend l'alerte en charge",
        ],
      },
      {
        id: "updates",
        title: "Des mises à jour par vagues, quand vous le décidez",
        points: [
          "Copies locales (miroirs) des dépôts de paquets Debian, Ubuntu et de la famille RHEL",
          "À la demande par défaut : les paquets sont récupérés au premier besoin, les miroirs tiennent dans environ 100 Go",
          "Campagnes de mise à jour par vagues, aux heures que vous choisissez, arrêtées en cas d'échec",
          "Windows Update, et les applications via winget, Flatpak et Snap",
        ],
      },
      {
        id: "reports",
        title: "Une disponibilité que vous pouvez montrer",
        points: [
          "La disponibilité des serveurs, équipements et vérifications, sur un mois ou toute période",
          "Services métier : un groupe de vérifications avec sa propre règle et son objectif de SLA",
          "Les fenêtres de maintenance exclues des chiffres",
          "Rapports PDF et CSV envoyés par e-mail à intervalle régulier, par client",
        ],
      },
      {
        id: "dashboards",
        title: "Tableaux de bord et écran mural",
        points: [
          "Construisez vos tableaux de bord avec n'importe quelle métrique",
          "Mode écran mural ou télé : plein écran, grands caractères, rafraîchi tout seul",
          "Un lien d'affichage en lecture seule, sans connexion, révocable",
        ],
      },
      {
        id: "integrations",
        title: "S'intègre à vos outils",
        points: [
          "Connexion par votre fournisseur d'identité : OpenID Connect, ou LDAP sur TLS",
          "Reprenez hôtes, vérifications, seuils et canaux depuis un autre outil de supervision, avec un aperçu d'abord",
          "Une API publique documentée en OpenAPI : tout ce que fait l'interface web",
          "Webhooks sortants signés, et plugins signés pour ajouter vérifications et canaux",
        ],
      },
      {
        id: "simple",
        title: "Simple à faire tourner",
        points: [
          "Une commande installe le serveur central, une autre ajoute un serveur",
          "Mise à jour du serveur central en deux clics : une sauvegarde d'abord, et retour en arrière tout seul en cas d'échec",
          "Agents et relais se mettent à jour d'eux-mêmes, serveur par serveur",
          "Une sauvegarde par jour, les sept dernières gardées",
        ],
      },
    ],
  },
  ai: {
    eyebrow: "L'IA propose, une personne valide",
    title: "Rien ne s'exécute sans qu'une personne dise oui.",
    lead:
      "Quand une alerte s'ouvre, une IA lit le contexte, pose un diagnostic et propose une commande. Vous la lisez, puis cliquez sur Approuver et exécuter, ou non.",
    points: [
      {
        title: "Le fournisseur de votre choix, ou rien qui sort",
        text: "Anthropic, OpenAI, toute API compatible OpenAI, ou un modèle local (Ollama, llama.cpp, vLLM) pour que rien ne quitte votre réseau. Les secrets sont retirés de ce qui est envoyé.",
      },
      {
        title: "Des niveaux de risque",
        text: "Les commandes qui ne font que lire, comme l'espace disque, peuvent s'exécuter seules. Tout ce qui modifie un serveur attend une personne. Les commandes dangereuses sont refusées d'office, quoi que dise le modèle.",
      },
      {
        title: "Vos serveurs acceptent d'abord",
        text: "Un serveur n'accepte de commandes que s'il a été installé pour. L'IA reste éteinte tant qu'un administrateur ne l'active pas.",
      },
      {
        title: "Tout est écrit",
        text: "Chaque proposition, validation, commande et sortie va dans un journal d'audit qui ne peut pas être modifié en douce.",
      },
    ],
    approve: "Approuver et exécuter",
    mock: {
      alert: "Disque /var à 95 % sur web-02",
      diagnosis: "D'anciens journaux remplissent /var.",
      suggested: "Commande proposée",
      risk: "Modifie le serveur : attend une personne",
      audit: "Écrit dans le journal d'audit",
    },
  },
  msp: {
    title: "Pour les prestataires, caché tant que vous n'en avez pas besoin",
    text:
      "Les clients gardent leurs serveurs, sites et notifications à part, le rôle d'un utilisateur peut couvrir tout, un client ou un site, et chaque client a son propre rapport de disponibilité. Une entreprise seule n'en voit rien : les clients apparaissent dès que vous en ajoutez un deuxième.",
  },
  install: {
    title: "Prêt en 5 minutes",
    lead: "Rien à cloner, compiler ou modifier.",
    steps: [
      {
        title: "Installez le serveur central",
        text: "Sur une machine Linux, lancez ceci. Il pose une question, le nom public, puis affiche l'adresse de l'interface web et un lien à usage unique pour créer l'administrateur.",
      },
      {
        title: "Ajoutez vos serveurs",
        text: "Dans l'interface web, ouvrez Administration › Ajouter des serveurs et copiez la commande, avec son jeton. La même commande sert pour tous les serveurs Linux. Pour Windows, la même page donne une ligne PowerShell.",
      },
      {
        title: "Regardez-les arriver",
        text: "En quelques secondes, chaque serveur apparaît sous son nom, en ligne, avec ses premiers graphiques.",
      },
    ],
    copy: "Copier",
    copied: "Copié",
    requirementsTitle: "Ce qu'il vous faut",
    requirements: [
      "Une machine Linux avec 2 vCPU et 4 Go de mémoire : assez pour environ 8 000 serveurs lors de notre test de charge. Docker est installé pour vous s'il manque.",
      "Les ports 443 et 80 (interface web), 7443 et 7445 (agents et relais), 7480 (paquets, si vous utilisez les mises à jour).",
      "Les serveurs à surveiller : tout Linux avec systemd (x86_64 ou ARM64), ou Windows.",
    ],
    fullGuide: "Guide d'installation complet (en anglais)",
  },
  coming: {
    title: "Bientôt",
    lead: "Sur la feuille de route, pas encore dans une version.",
    items: [
      "Des vérifications prêtes à l'emploi pour bases de données, conteneurs et services cloud, sans script",
      "Des cartes du réseau tirées de la découverte, avec les états en direct",
      "Les flux réseau (NetFlow, sFlow, IPFIX) : quelles adresses et applications utilisent la bande passante",
      "Les montées de version majeures des distributions par vagues, de Debian 12 à 13 d'abord",
      "Une connexion aux outils PSA (les outils de tickets des prestataires) : un ticket par incident",
      "Une application mobile avec notifications",
    ],
    roadmap: "Lire la feuille de route",
  },
  cta: {
    title: "Libre et open source. Pour de bon.",
    text:
      "MonitorFlow est sous licence AGPL-3.0-or-later. Tout ce qu'il faut pour surveiller, alerter, mettre à jour et réparer des serveurs est gratuit, sans limite. Les abonnements ajoutent support et haute disponibilité pour qui le souhaite.",
    pricing: "Voir les tarifs",
  },
  pricing: {
    title: "Gratuit à l'usage. Du support si vous le voulez.",
    lead:
      "Tout ce qu'il faut pour surveiller, alerter, mettre à jour et réparer vos serveurs est libre et gratuit, sans limite de serveurs, d'utilisateurs ou de fonctions. Pour un homelab comme pour une entreprise. Aucune fenêtre qui insiste, jamais.",
    proposed: "Tarifs proposés, susceptibles d'évoluer. En euros, hors TVA, facturés à l'année, par serveur géré.",
    principles: [
      {
        title: "Gratuit veut dire gratuit",
        text: "L'édition Community gratuite a toutes les fonctions sauf la haute disponibilité. Sans limite, sans durée, sans clé.",
      },
      {
        title: "Un abonnement achète la tranquillité",
        text: "Du support avec des délais de réponse, le canal de mises à jour testé, des instantanés de distribution validés et, en Enterprise, la haute disponibilité.",
      },
      {
        title: "Rien ne s'arrête jamais",
        text: "Quand un abonnement se termine, supervision, alertes et mises à jour continuent. Un serveur central seul n'a jamais besoin de clé.",
      },
    ],
    perServerMonth: "par serveur et par mois",
    free: "Gratuit",
    forever: "pour toujours",
    minimum: "Minimum",
    noMinimum: "Sans minimum",
    minServers: (n: number, yearly: string) => `${n} serveurs (${yearly} par an)`,
    enterprisePrice: (perCentral: string) => `Premium + ${perCentral} par serveur central et par an`,
    minCentral: (n: number) => `${n} serveurs centraux`,
    contact: "Nous contacter",
    install: "L'installer maintenant",
    demo: "Essayer la démo en ligne",
    mostPopular: "Le plus courant",
    tiers: {
      community: {
        name: "Community",
        tagline: "Pour les homelabs, l'évaluation et toute équipe autonome.",
        features: ["Toutes les fonctions sauf la haute disponibilité", "Forum communautaire", "Mises à jour du canal principal", "Sans limite de serveurs ni d'utilisateurs"],
      },
      basic: {
        name: "Basic",
        tagline: "Pour les petites entreprises.",
        features: ["Canal de mises à jour testé", "Instantanés de distribution validés", "5 tickets de support par an", "Réponse le jour ouvré suivant"],
      },
      standard: {
        name: "Standard",
        tagline: "Pour les parcs en production.",
        features: ["Tout Basic", "Tickets illimités", "Réponse sous 4 heures ouvrées"],
      },
      premium: {
        name: "Premium",
        tagline: "Pour les environnements critiques et les grands prestataires.",
        features: ["Tout Standard", "Réponse sous 1 heure pour un incident critique", "Assistance à distance"],
      },
      enterprise: {
        name: "Enterprise",
        tagline: "Quand la plateforme doit survivre à la perte d'une machine.",
        features: ["Tout Premium", "Haute disponibilité : plusieurs serveurs centraux, ajoutés en une commande"],
      },
    },
    volume: {
      title: "Tarifs dégressifs pour les prestataires",
      text: (steps: { percent: number; from: string }[]) =>
        `${steps.map((s) => `${s.percent} % de remise dès ${s.from} serveurs`).join(", ")}. Les relais sont gratuits.`,
    },
    calculator: {
      title: "Estimez votre prix annuel",
      servers: "Serveurs gérés",
      serversHint: "Les machines avec un agent. Les relais sont gratuits.",
      tier: "Abonnement",
      centralServers: "Serveurs centraux",
      result: "Par an",
      perMonth: "environ",
      perMonthSuffix: "par mois",
      billed: (n: number) => `Facturé pour ${n} serveurs`,
      minimumApplied: "le minimum de l'offre",
      discount: (p: number) => `${p} % de remise sur volume`,
      central: (n: number, total: string) => `${n} serveurs centraux : ${total}`,
      communityResult: "Gratuit, quel que soit le nombre de serveurs.",
      note: "Hors TVA. Tarifs proposés.",
    },
    faqTitle: "Questions",
    faq: [
      {
        q: "Est-ce vraiment gratuit ?",
        a: "Oui, sans limite. Tout ce qu'il faut pour surveiller, alerter, mettre à jour et réparer des serveurs est dans l'édition Community gratuite, sous licence AGPL-3.0-or-later, quel que soit le nombre de serveurs et d'utilisateurs. Seule la haute disponibilité (plusieurs serveurs centraux) demande un abonnement.",
      },
      {
        q: "Que se passe-t-il quand mon abonnement se termine ?",
        a: "Rien ne s'arrête. Supervision, alertes, mises à jour et serveurs centraux continuent de tourner. Vous perdez le support et le canal de mises à jour testé, et ne pouvez plus ajouter de serveur central au-delà du premier.",
      },
      {
        q: "Puis-je l'héberger moi-même ?",
        a: "Toujours. C'est même la seule façon aujourd'hui : vous installez le serveur central sur votre machine en une commande.",
      },
      {
        q: "Existe-t-il une version hébergée ?",
        a: "Pas encore.",
      },
      {
        q: "Qu'est-ce qui compte comme un serveur ?",
        a: "Une machine sur laquelle tourne un agent MonitorFlow. Les relais et le serveur central ne comptent pas.",
      },
      {
        q: "Puis-je payer par carte ?",
        a: "Pas encore : il n'y a pas de paiement en ligne. Contactez-nous et nous trouverons une solution ensemble.",
      },
    ],
  },
  guides: {
    title: "Comment surveiller vos serveurs",
    lead: "Des guides pas à pas : ce qui peut mal tourner, ce que MonitorFlow vérifie, comment ajouter la vérification et quoi regarder en premier quand elle se déclenche.",
    breadcrumb: "Guides",
    otherLang: "Read in English",
    ctaTitle: "Vous n'utilisez pas encore MonitorFlow ?",
    ctaText: "Libre et gratuit. Installez le serveur central en une commande, ou faites d'abord un tour dans la démo en ligne.",
    sourceNote: "Ce guide vient du dépôt de MonitorFlow.",
    edit: "Proposer une modification",
  },
  footer: {
    tagline: "Surveillez, alertez et mettez à jour vos serveurs Linux et Windows. Depuis une seule page web.",
    product: "Produit",
    releases: "Versions",
    docs: "Documentation",
    help: "Aide",
    community: "Questions et communauté",
    issues: "Bugs et demandes de fonctions",
    support: "Support des abonnés",
    supportSoon: "bientôt",
    sales: "Ventes et Enterprise",
    security: "Signaler une faille de sécurité",
    license: "Sous licence AGPL-3.0-or-later.",
    privacy: "Pas de cookies, pas de pistage.",
  },
  notFound: {
    title: "Cette page n'existe pas.",
    text: "Elle a peut-être été déplacée. Les guides et l'accueil sont de bons points de départ.",
    home: "Accueil",
  },
};
