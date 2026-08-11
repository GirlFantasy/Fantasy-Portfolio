# Chimdalu Nnenne Egwu — Portfolio

Personal portfolio for **Chimdalu Nnenne Egwu** — Medicine × Data × Blockchain.

**→ To update the site, read [CONTENT_GUIDE.md](./CONTENT_GUIDE.md).** You will
not need to touch design code.

---

## Stack

| | |
| --- | --- |
| Framework | [Astro 5](https://astro.build) — zero JS by default |
| Content | Content Collections + MDX, validated with Zod |
| Styling | Tailwind CSS v4 (CSS-first tokens) |
| Fonts | Newsreader, Inter, IBM Plex Mono — self-hosted via Fontsource |
| Motion | CSS + one IntersectionObserver. No animation library |
| Deploy | Vercel (static output) |

## Commands

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site → dist/
npm run preview   # serve the built site locally
```

## Structure

```
src/
├── data/profile.ts       ← identity, title, links, photo, CV. Single source of truth
├── content.config.ts     ← content schemas (the rules for your frontmatter)
├── content/
│   ├── pillars/          ← the three parts of the work
│   ├── work/             ← projects & research (one collection, three surfaces)
│   ├── writing/          ← articles, threads, explainers
│   ├── recognition/      ← fellowships, leadership, awards
│   └── experience/       ← post-graduation roles (empty until needed)
├── components/
│   ├── ui/               ← SiteMark, DomainTag, SectionHeader, Note, ThemeToggle
│   ├── sections/         ← Hero
│   └── viz/              ← CohortGrid, Intersection
├── layouts/BaseLayout.astro
├── pages/                ← index, about, work/, pillars/, 404
└── styles/global.css     ← the whole design system
```

## Design system

Defined entirely in `src/styles/global.css`.

- **Light "Plate"** — warm paper. **Dark "Field"** — deep ink. Both first-class,
  with an auto/light/dark toggle.
- **Neutrals do the work.** Colour is used as *taxonomy*, never decoration:
  Medicine (surgical green), Data (ink blue), Blockchain (oxidised copper).
  Interaction stays monochrome so hue always carries meaning.
- All text colours meet **WCAG AA**; ratios are noted in the token comments.
- Motion is entrance-only and fully disabled under `prefers-reduced-motion`.

## Notes

- Every number displayed should carry a methodology `note:`.
- Content is validated at build time — a bad frontmatter field fails the build
  rather than shipping broken.
- No content on this site is invented. Unverified details are marked with
  `<Note>` blocks, which disappear when `showEditorialNotes` is set to `false`.
