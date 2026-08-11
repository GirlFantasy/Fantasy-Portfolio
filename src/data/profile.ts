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
  positioning: 'Medicine × Data × Blockchain',

  // ── CAREER STATUS ──────────────────────────────────────────────────────────
  //    ▲ THIS IS THE BLOCK YOU EDIT AFTER GRADUATION ▲
  title: 'Final-year medical student',
  titleFull: 'Final-year medical student, blockchain data analyst, blockchain in healthcare researcher, SDG5 advocate',
  /** 'student' | 'graduate' | 'physician' — drives conditional copy site-wide. */
  status: 'student' as 'student' | 'graduate' | 'physician',
  // ───────────────────────────────────────────────────────────────────────────

  location: 'Ebonyi State, Nigeria',

  /**
   * Draft copy — rewrite freely. This is the one paragraph most people read.
   */
  statement:
    'I am a medical student, analyst, researcher, and SDG5 advocate exploring how data and innovation can solve problems that matter. My work sits at the intersection of healthcare, blockchain, research, and social impact - where I break down complex systems, communicate data-based solutions, and build initiatives that improve healthcare systems.',

  education: [
    {
      institution: 'Ebonyi State University',
      abbr: 'EBSU',
      school: 'College of Health Sciences',
      programme: 'MBBS',
      expected: 'February 2027',
      current: true,
    },
  ],

  // ── Contact ────────────────────────────────────────────────────────────────
  email: 'nnennechimdalu@gmail.com',

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
  /** Replace /public/portrait.jpg with your photo — no code change needed. */
  portrait: {
    src: '/portrait.jpg',
    alt: 'Portrait of Chimdalu Nnenne Egwu',
    /** Set to true once a real photo replaces the placeholder. */
    isReal: false,
  },

  /** Drop your PDF at /public/cv.pdf, then set `available: true`. */
  cv: {
    href: '/cv.pdf',
    available: false,
  },

  /**
   * Hero availability line. Set to null to hide it entirely.
   * e.g. 'Open to blockchain data analytics and health-tech research roles'
   */
  availability: null as string | null,

  /**
   * Editorial notes (<Note> blocks in MDX) mark content that still needs your
   * input. They are visible while the site is in draft so you can see the gaps.
   * ► Set this to false before launch and every note disappears site-wide.
   */
  showEditorialNotes: true,

  // ── DataInByte ─────────────────────────────────────────────────────────────
  datainbyte: {
    name: 'DataInByte',
    tagline: 'Web3 Data Stories',
    description:
      'DataInByte is building an onchain adoption intelligence system that measures how users interact with blockchain products through onchain user behavior analysis. It moves beyond vanity metrics like views, followers, and community size to track what activates users, how long they stay, where they drop off, and whether growth persists after the incentive wave.',

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

export const seo = {
  title: `${profile.shortName} — ${profile.positioning}`,
  description: `${profile.name}. ${profile.titleFull}. ${profile.statement}`,
  keywords: [
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
