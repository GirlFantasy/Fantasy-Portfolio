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
    /** The first, larger sentence. */
    lead: 'I am a final-year medical student at Ebonyi State University, a blockchain data analyst, and a data storyteller.',

    /** The paragraphs underneath. Add or remove whole lines freely. */
    paragraphs: [
      'These sound like separate lives. They are the same instinct applied to different systems — find where a system loses people, measure it honestly, and say what the measurement means in language someone can act on.',
      'In medicine that means asking why a patient\'s record never followed them. In on-chain analysis it means asking why a million new users arrived and almost none stayed. The subject changes. The question does not.',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  HOMEPAGE → section 08, "Let's connect"
  // ─────────────────────────────────────────────────────────────────────────
  contact: {
    intro:
      'Open to conversations about blockchain data analytics, Web3 research, health technology, and research collaborations.',
  },

  // ─────────────────────────────────────────────────────────────────────────
  //  ABOUT PAGE  (the /about page)
  // ─────────────────────────────────────────────────────────────────────────
  about: {
    /** Opening paragraphs, before the first heading. */
    opening: [
      'Those descriptions usually belong to different people. Holding them together is deliberate, and it is the most useful thing about how I work.',
    ],

    connectsHeading: 'What connects them',
    connectsParagraphs: [
      'Clinical medicine trains a specific habit of mind: gather what is actually observable, resist the explanation you want to be true, and be honest about the limits of what you know. That habit transfers almost perfectly to data analysis, and it is rarer there than it should be.',
      'Both fields also share a failure mode. Medicine can produce a diagnosis nobody explains to the patient. Analytics can produce a dashboard nobody reads. In both cases the work is technically complete and practically useless. So the third part of what I do — the storytelling — is not decoration on top of the analysis. It is the part that makes the analysis count.',
    ],

    whereHeading: 'Where I work',
    whereIntro: 'Three areas, each with its own page:',

    educationHeading: 'Education',

    nameHeading: 'The name',
    nameParagraph:
      'I publish some of my Web3 and data work as FANTASY. It is a creative name, not a separate identity — the research and the analysis are the same work.',
  },
} as const;
