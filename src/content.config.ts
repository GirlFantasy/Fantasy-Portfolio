import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const domain = z.enum(['medicine', 'data', 'blockchain']);

const link = z.object({
  label: z.string(),
  href: z.string().url(),
  /** Optional note rendered as mono metadata, e.g. "profile" or "dashboard". */
  note: z.string().optional(),
});

/**
 * PILLARS — the three parts of your professional identity.
 * Each renders an intro block on the homepage and its own "read more" page.
 */
const pillars = defineCollection({
  loader: glob({ base: './src/content/pillars', pattern: '**/*.mdx' }),
  schema: z.object({
    order: z.number(),
    numeral: z.string(),
    title: z.string(),
    /** Rendered as mono metadata above the title. */
    kicker: z.string(),
    domains: z.array(domain).min(1),
    /**
     * The opening paragraphs, one string per paragraph.
     *
     *   • The pillar page shows ALL of them, under the title.
     *   • The homepage shows only the FIRST TWO, so the directory stays
     *     scannable. Put the paragraph you most want a visitor to read first.
     *
     * A single-paragraph intro is still written as a one-item list.
     */
    intro: z.array(z.string()).min(1),
    links: z.array(link).default([]),
    /**
     * Optional photo gallery. Drop images into public/ and list them here;
     * `folder` links out to the full archive.
     */
    gallery: z
      .object({
        folder: z.string().url().optional(),
        caption: z.string().optional(),
        images: z
          .array(z.object({ src: z.string(), alt: z.string() }))
          .default([]),
      })
      .optional(),
    draft: z.boolean().default(false),
  }),
});

/**
 * WORK — one collection, three surfaces.
 * `featured: true`        → homepage Selected Work
 * `type: 'research'`      → Research listings
 * `caseStudy: true`       → generates /work/<id> with the full case-study page
 *
 * To add a project: drop a new .mdx file in src/content/work/. That is all.
 */
const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.mdx' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['analysis', 'research', 'initiative', 'tool']),
    domains: z.array(domain).min(1),
    /** Free text — leave blank rather than guessing. */
    period: z.string().optional(),
    role: z.string().optional(),
    /** Never claim a publication status that has not been confirmed. */
    status: z.string().optional(),
    summary: z.string(),
    method: z.string().optional(),
    metrics: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
          /** Methodology note shown beneath the figure. Keeps numbers defensible. */
          note: z.string().optional(),
        })
      )
      .default([]),
    links: z.array(link).default([]),
    /** Which pillar this belongs to, by pillar id. */
    pillar: z.string().optional(),
    featured: z.boolean().default(false),
    caseStudy: z.boolean().default(false),
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

/**
 * WRITING — individual articles, threads and explainers.
 *
 * Empty until you add pieces. Drop a .mdx file in src/content/writing/ with a
 * `pillar` matching one of the pillar ids, and a "Selected writing" section
 * appears on that pillar page automatically. See _TEMPLATE.md in that folder.
 */
const writing = defineCollection({
  loader: glob({ base: './src/content/writing', pattern: '**/*.mdx' }),
  schema: z.object({
    title: z.string(),
    /** Where it was published, e.g. "DataInByte" or "X". */
    outlet: z.string(),
    format: z.enum(['article', 'thread', 'explainer', 'video', 'dashboard']),
    date: z.coerce.date().optional(),
    summary: z.string().optional(),
    href: z.string().url(),
    domains: z.array(domain).default([]),
    /** Which pillar page this appears on, by pillar id. Omit to hide it. */
    pillar: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

/**
 * RECOGNITION — fellowships, leadership roles, awards, advocacy.
 *
 * THIS IS THE ONLY PLACE AWARDS ARE RECORDED. It feeds two surfaces:
 *   • the compact ledger on /about — every entry, newest section first
 *   • the full write-up on a pillar page — only entries with a `pillar` set,
 *     which render the MDX body beneath the heading
 *
 * So: keep the frontmatter short (it is what the ledger shows), and put the
 * detailed prose in the body (it is what the pillar page shows).
 */
const recognition = defineCollection({
  loader: glob({ base: './src/content/recognition', pattern: '**/*.mdx' }),
  schema: z.object({
    title: z.string(),
    organisation: z.string(),
    /** Leave undefined until confirmed — renders as "—" rather than a guess. */
    period: z.string().optional(),
    /** e.g. "3rd Place". Rendered as the leading figure on competition entries. */
    placement: z.string().optional(),
    category: z.enum(['competition', 'fellowship', 'leadership', 'award', 'advocacy']),
    summary: z.string(),
    links: z.array(link).default([]),
    /**
     * Which pillar page carries the full write-up, by pillar id.
     * Omit it and the entry still appears in the /about ledger — use that for
     * anything a pillar page already tells better in its own prose.
     */
    pillar: z.string().optional(),
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

/**
 * EXPERIENCE — where post-graduation roles go.
 *
 * Empty by design. The moment you add your first .mdx file here, an
 * "Experience" section appears on /about. Nothing else needs changing.
 * See _TEMPLATE.md in that folder for the shape.
 */
const experience = defineCollection({
  loader: glob({ base: './src/content/experience', pattern: '**/*.mdx' }),
  schema: z.object({
    role: z.string(),
    organisation: z.string(),
    period: z.string(),
    summary: z.string(),
    links: z.array(link).default([]),
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

export const collections = { pillars, work, writing, recognition, experience };
