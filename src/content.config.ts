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
    /** 30–60 words. Shown on the homepage. Body MDX is the "read more" page. */
    intro: z.string(),
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
 * Empty for now: the homepage falls back to showing channels from profile.ts.
 * Add pieces here as they publish and they appear automatically.
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
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

/**
 * RECOGNITION — fellowships, leadership roles, awards, advocacy.
 * Rendered as an append-only ledger, most recent first.
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
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

/**
 * EXPERIENCE — intentionally empty. This is where post-graduation roles go.
 * The site renders this section only when entries exist.
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
