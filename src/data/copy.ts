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
      'The descriptions of what I do usually belong to different people. Holding them together is deliberate, and it is the most useful thing about the changes I am working to effect.',
    ],

    connectsHeading: 'What connects them',
    connectsParagraphs: [
      'Clinical medicine trains a specific habit of mind: gather what is actually observable, resist the explanation you want to be true, and be honest about the limits of what you know. That habit transfers almost perfectly to data analysis, and the need for collaborations to effect social impact solutions.',
    ],

    whereHeading: 'Where I work',
    whereIntro: 'Three areas, each with its own page:',

    educationHeading: 'Education',

    nameHeading: 'The name',
    nameParagraph:
      'I publish some of my Web3 and data work as FANTASY. It is a creative name, not a separate identity — the research and the analysis are the same work.',
  },
} as const;
