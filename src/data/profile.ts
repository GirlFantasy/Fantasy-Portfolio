/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR IDENTITY
 * ─────────────────────────────────────────────────────────────────────────────
 *  Nothing in this site hardcodes a job title, a school, an email or a link.
 *  Everything reads from this file. To evolve the site as your career changes,
 *  edit here — never in a component.
 *
 *  ► AFTER GRADUATION (expected Feb 2027), change only the CAREER STATUS block.
 *    The whole site updates: hero, meta description, schema.org, footer, CV.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const profile = {
  // ── Identity ───────────────────────────────────────────────────────────────
  name: 'Chimdalu Nnenne Egwu',
  shortName: 'Chimdalu Egwu',
  /** Creative/brand name. Deliberately secondary — never the primary identity. */
  creativeName: 'FANTASY',

  /**
   * ─── THE HIERARCHY ───────────────────────────────────────────────────────
   *  A visitor should be able to answer "what does she do?" in one glance,
   *  before reading a single paragraph. These four lines are ranked, and the
   *  site renders them in this order everywhere they appear together.
   *
   *    1. field      — the domain you work in. What a recruiter files you under.
   *    2. headline   — your one-line professional identity. THE answer.
   *    3. positioning— the three-domain taxonomy. A signature, not a title.
   *    4. title      — current status/context. Changes with your career.
   *
   *  Resist adding a fifth. The point of this block is that it is short.
   * ─────────────────────────────────────────────────────────────────────────
   */
  field: 'Blockchain Analytics & Health Technology',
  headline: 'Blockchain Analyst & Health Technology Researcher',
  positioning: 'Medicine × Data × Blockchain',

  // ── CAREER STATUS ──────────────────────────────────────────────────────────
  //    ▲ THIS IS THE BLOCK YOU EDIT AFTER GRADUATION ▲
  title: 'Final-year medical student',
  /**
   * The long-form list of everything you are. Used only where a full account
   * is genuinely wanted — schema.org, and nowhere a visitor reads at a glance.
   * The headline above is what the pages actually show.
   */
  titleFull: 'Final-year medical student, blockchain data analyst, blockchain in healthcare researcher, SDG5 advocate',
  /** 'student' | 'graduate' | 'physician' — drives conditional copy site-wide. */
  status: 'student' as 'student' | 'graduate' | 'physician',
  // ───────────────────────────────────────────────────────────────────────────

  location: 'Lagos State, Nigeria',

  /**
   * The opening lines under your name. One entry per paragraph — add or remove
   * whole lines freely. This is the text most visitors read first.
   */
  statement: [
    'I work at the intersection of medicine, data, and emerging technology using research, analytics, and blockchain to explore better ways of solving problems in healthcare and beyond.',
  ],

  education: [
    {
      institution: 'Ebonyi State University',
      abbr: 'EBSU',
      school: 'College of Medicine',
      programme: 'Bachelor of Medicine, Bachelor of Surgery (MBBS)',
      period: 'September 2019 — expected February 2027',
      expected: 'February 2027',
      current: true,
    },
  ],

  /** Taken from your CV. Add a new block whenever you complete another. */
  certifications: [
    {
      title: 'SQL: A Practical Introduction for Querying Databases',
      issuer: 'IBM (Coursera)',
      period: 'Sept 2024 — Jan 2025',
    },
    {
      title: 'Data Analytics — Spreadsheets, SQL, R, Tableau, Power BI',
      issuer: 'Google (Coursera)',
      period: 'Sept 2023 — Dec 2024',
    },
    {
      title: 'Strategies of Content Marketing',
      issuer: 'University of California, Davis (Coursera)',
      period: 'Aug 2023 — Aug 2024',
    },
    {
      title: 'Technical Writing',
      issuer: 'Aptlearn',
      period: 'Sept 2022 — Aug 2023',
    },
    {
      title: 'Creative Writing',
      issuer: 'Creative-in-Business',
      period: 'Nov 2020 — Feb 2021',
    },
  ],

  /** Roles held within medical student bodies. */
  medicalRoles: [
    'Secretary Technical Officer, NiMSA',
    'Local Officer, Mental Health Advocate, EMSA',
  ],

  // ── Contact ────────────────────────────────────────────────────────────────
  /** Primary address — used for the main mailto links and schema.org. */
  email: 'nnennechimdalu@gmail.com',
  /** Second address, shown alongside the first. Set to null to hide it. */
  emailSecondary: 'hollafantasy@gmail.com' as string | null,

  /**
   * Only verified links live here. Never add a URL that has not been confirmed.
   * `handle` is what renders; `href` is never modified.
   */
  socials: {
    x: {
      label: 'X',
      handle: '@IamFantasy__',
      href: 'https://x.com/IamFantasy__',
    },
    linkedin: {
      label: 'LinkedIn',
      handle: 'chimdalunnenne',
      href: 'https://www.linkedin.com/in/chimdalunnenne',
    },
    github: {
      label: 'GitHub',
      handle: 'GirlFantasy',
      href: 'https://github.com/GirlFantasy',
    },
    tiktok: {
      label: 'TikTok',
      handle: '@chimdalunnenne',
      href: 'https://www.tiktok.com/@chimdalunnenne',
    },
    substack: {
      label: 'Substack',
      handle: '@chimdalunnenne',
      href: 'https://substack.com/@chimdalunnenne',
    },
    dune: {
      label: 'Dune',
      handle: 'datainbyte',
      href: 'https://dune.com/datainbyte',
    },
    datainbyteSubstack: {
      label: 'DataInByte on Substack',
      handle: '@datainbyte',
      href: 'https://substack.com/@datainbyte',
    },
    web3Writing: {
      label: 'Web3 writing archive',
      handle: 'Google Drive',
      href: 'https://drive.google.com/drive/folders/1VfjGqrmN8XJ4uCA8WpAdlc8zziYE8rd2',
    },
    hppArchive: {
      label: 'Her Path to Power — project archive',
      handle: 'Google Drive',
      href: 'https://drive.google.com/drive/folders/1TpPstTCuPbZ0paNW8kmoQSUmV6CI5MFs',
    },
    abuseResearch: {
      label: 'Peer-to-peer sexual abuse research',
      handle: 'Google Drive',
      href: 'https://drive.google.com/drive/folders/1y2-g_7efAkWT13il6vkzxFBZGQLD21-U',
    },
    millenniumFellows: {
      label: 'Millennium Fellowship',
      handle: 'Fellow profile',
      href: 'https://www.millenniumfellows.org/fellow/2025/ebsu/chimdalu-nnenne-egwu',
    },
  },

  /** Channels surfaced in the Writing section, in display order. */
  writingChannels: ['datainbyteSubstack', 'substack', 'x', 'tiktok'] as const,

  /** Compact link set for the nav/footer. */
  primarySocials: ['x', 'linkedin', 'github', 'substack'] as const,

  // ── Assets ─────────────────────────────────────────────────────────────────
  /**
   * ► TO SWAP YOUR PHOTO LATER: save the new one over `public/portrait.jpg`,
   *   keeping that exact filename. Nothing here needs to change.
   *   Portrait orientation, at least 1000px wide, ideally under 300KB.
   */
  portrait: {
    src: '/portrait.jpg',
    alt: 'Portrait of Chimdalu Nnenne Egwu',
    /** Set to false to fall back to a plain monogram tile. */
    isReal: true,
    /**
     * Which part of the photo stays visible when it is cropped to the frame.
     * First number is left→right, second is top→bottom.
     * Lower second number = keeps more of the top (head); higher = more of
     * the bottom. Try '50% 0%' or '50% 40%' if a new photo sits wrong.
     */
    objectPosition: '50% 0%',
  },

  /**
   * Your CV lives at /public/cv.pdf. Set `available: true` to show the download
   * link in the footer and on the About page.
   */
  cv: {
    href: '/cv.pdf',
    available: true,
  },

  /**
   * Hero availability line. Set to null to hide it entirely.
   * e.g. 'Open to blockchain data analytics and health-tech research roles'
   */
  availability: null as string | null,


  // ── DataInByte ─────────────────────────────────────────────────────────────
  datainbyte: {
    name: 'DataInByte',
    tagline: 'Web3 Data Stories',
    /** Not currently rendered — the live description is the pillar page intro. */
    description:
      'DataInByte is my onchain adoption intelligence project, focused on how blockchain products actually grow — measuring activation, retention, and drop-off rather than relying on vanity metrics. It tracks what activates users, how long they stay, where they drop off, and whether growth persists after the incentive wave.',

    /**
     * Featured Dune dashboards, in display order.
     * To add one: copy a block, paste the exact dashboard URL. Nothing else.
     */
    dashboards: [
      {
        title: 'SEI User Behavior Analysis',
        href: 'https://dune.com/datainbyte/sei-user-behavior-analysis',
        note: 'Ongoing',
      },
      {
        title: 'Robinhood Chain — Tokenized Stock Overview',
        href: 'https://dune.com/datainbyte/robinhood-chain-tokenized-stock-overview',
      },
      {
        title: 'Arbitrum User Activation: Growth at What Cost?',
        href: 'https://dune.com/datainbyte/arbitrum-user-activation',
      },
    ],
  },
} as const;

/** The three domains. Drives the taxonomic colour system. */
export const domains = {
  medicine: { label: 'Medicine', token: 'medicine' },
  data: { label: 'Data', token: 'data' },
  blockchain: { label: 'Blockchain', token: 'blockchain' },
} as const;

export type DomainKey = keyof typeof domains;
export type SocialKey = keyof typeof profile.socials;

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SEARCH ENGINE VERIFICATION
 * ─────────────────────────────────────────────────────────────────────────────
 *  To prove to Google (and Bing) that this site is yours, so you can submit the
 *  sitemap and watch what people search to find you:
 *
 *  1. Go to https://search.google.com/search-console
 *  2. Add a property → "URL prefix" → paste your site address
 *  3. Choose the "HTML tag" method. You will be shown a tag like:
 *       <meta name="google-site-verification" content="AbC123..." />
 *  4. Copy ONLY the content value and paste it below, between the quotes.
 *  5. Commit and push, wait for the deploy, then click Verify.
 *
 *  Leave these as null and nothing is added to the page.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const verification = {
  google: null as string | null,
  bing: null as string | null,
};

export const seo = {
  /** Leads with the headline: it is what a search result must answer. */
  title: `${profile.shortName} — ${profile.headline}`,
  description: `${profile.name} — ${profile.headline}. ${profile.statement[0]}`,
  keywords: [
    'blockchain analyst',
    'health technology researcher',
    'blockchain analytics',
    'blockchain data analyst',
    'on-chain analytics',
    'blockchain in healthcare',
    'electronic health records',
    'Web3 research',
    'data storytelling',
    'health technology',
    'Nigeria',
    'SDG5 advocate',
  ],
} as const;
