/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  ALL THE WRITING ON THE HOMEPAGE AND ABOUT PAGE
 * ═══════════════════════════════════════════════════════════════════════════
 *
 *  Every sentence below appears on the website. Change the words between the
 *  quote marks '...' and that is it — nothing else needs touching.
 *
 *  ► Keep the quote marks at the start and end of each line.
 *  ► Keep the comma at the end of each line.
 *  ► If you need an apostrophe inside a sentence, write \' — e.g. 'I don\'t'
 *
 *  These are my drafts. Replace them with your own voice.
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const copy = {
  // ─────────────────────────────────────────────────────────────────────────
  //  HOMEPAGE → section 01, "The intersection"
  // ─────────────────────────────────────────────────────────────────────────
  homeAbout: {
    /** Your name, set large in the serif face. */
    lead: 'Chimdalu Nnenne Egwu',

    /** The titles line beneath your name — rendered in bold italics. */
    credentials:
      'MBBS (in view), Blockchain Data Analyst, Blockchain in Healthcare Researcher, SDG5 Advocate',

    /**
     * Paragraphs BEFORE the pull quote. Add or remove whole lines freely.
     * The last one ends on a colon, because it leads straight into the
     * four questions below. Keep that if you reorder these.
     */
    paragraphs: [
      'Medicine taught me very early that good healthcare depends on more than what happens in front of a patient. Sometimes, the problem is the information that never gets there — the missing history, scattered data, or systems that were never built to work together. The more I noticed these gaps, the more I became interested in what happens beyond the clinical picture.',
      'I did not leave medicine; I started asking bigger questions about it. That curiosity led me into research, data analysis, blockchain, and health technology — different fields that keep bringing me back to the same questions:',
    ],

    /**
     * The pull quote — set large, in the serif, with an accent rule above it.
     * Each question renders on its own line. Set to null to remove the quote
     * entirely; move a sentence in or out of `paragraphs` to change what is
     * emphasised.
     */
    pullQuote: [
      'What is happening?',
      'Why is it happening?',
      'Who is affected?',
      'And what can we do differently?',
    ],

    /** Paragraphs AFTER the pull quote. The closing line lands last. */
    paragraphsAfter: [
      'Today, those questions shape the work I build, the research I pursue, and the problems I choose to explore.',
      'The subject changes. The questions do not.',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  HOMEPAGE → section 08, "Let's connect"
  // ─────────────────────────────────────────────────────────────────────────
  contact: {
    intro:
      'I\'m open to conversations around blockchain data analytics, health technology research, Web3, and social impact collaborations.',
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  ABOUT PAGE  (the /about page)
  // ─────────────────────────────────────────────────────────────────────────
  about: {
    /** Opening paragraphs, before the first heading. */
    opening: [
      'At first, these may sound like different paths. For me, they are connected. My work sits across medicine, global health, blockchain in healthcare, and blockchain data & analytics — using research, data, and technology to understand problems and explore what we can do differently.',
    ],

    connectsHeading: 'What connects them',
    connectsParagraphs: [
      'Medicine taught me to look closely at people and the systems around them. Research taught me to question assumptions. Data taught me to look for patterns. Blockchain opened up a different way of thinking about how digital systems work.',
      'Together, they shape the questions I ask and the work I choose to build.',
    ],

    whereHeading: 'Where I work',

    /**
     * One line per area, keyed by the pillar's filename in
     * src/content/pillars/. The heading and the link come from the pillar file
     * itself, so renaming a pillar updates this list automatically — only the
     * sentence below lives here.
     */
    areas: {
      'medicine-global-health':
        'I explore healthcare, women\'s health, gender equality, and global health through medicine, research, and advocacy.',
      'blockchain-healthcare':
        'I research how blockchain could be applied to healthcare, with a particular interest in health records, data ownership, interoperability, and trust.',
      'blockchain-data':
        'I use on-chain data to understand how blockchain products and ecosystems actually behave — from activation and retention to adoption and drop-off.',
    } as Record<string, string>,

    educationHeading: 'Education',

    nameHeading: 'The name',
    nameParagraph:
      'I publish some of my Web3 and data work as FANTASY. It is a creative name, not a separate identity — the research and the analysis are the same work.',
  },
} as const;
