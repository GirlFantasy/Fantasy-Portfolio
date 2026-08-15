# How to update your website

Written for you, not for a developer. You never need to touch design code.

Everything on the site comes from two places:

| What you want to change | Where to go |
| --- | --- |
| Your name, title, email, links, photo, CV | `src/data/profile.ts` |
| Projects, research, pillars, writing, leadership | `src/content/` |

Edit a file, save, commit, push. The site rebuilds and deploys itself.

---

## 1. After you graduate

This is the change the whole site was built around. Open `src/data/profile.ts`
and edit **one block**:

```ts
// ── CAREER STATUS ──
title: 'Final-year medical student',
titleFull: 'Final-year medical student, blockchain data analyst and data storyteller',
status: 'student',
```

Change it to, for example:

```ts
title: 'Medical Doctor',
titleFull: 'Medical doctor, blockchain data analyst and health-technology researcher',
status: 'physician',
```

That updates the hero, the About page, the search-engine description, the
structured data Google reads, and every other place your title appears. Nothing
else needs touching.

While you are in there, set `current: false` on your EBSU entry and add any new
education.

---

## 2. Add a new project or piece of research

Create one file in `src/content/work/`. Name it after the project, in lowercase
with hyphens — that becomes its web address.

`src/content/work/my-new-analysis.mdx`:

```mdx
---
title: 'Title of the project'
type: 'analysis'              # analysis | research | initiative | tool
domains: ['data', 'blockchain']   # medicine | data | blockchain — pick any
role: 'Independent analysis'
summary: 'One or two sentences. This is what shows on the homepage card.'
method: 'SQL · Dune'
metrics:
  - label: 'What you measured'
    value: '42%'
    note: 'How you measured it — always include this'
links:
  - label: 'Dashboard'
    href: 'https://dune.com/...'
    note: 'Dune'
pillar: 'blockchain-data'     # which pillar page it belongs under
featured: true                # show on the homepage?
caseStudy: true               # give it its own full page?
order: 1                      # lower numbers appear first
draft: false                  # true = hidden from the site
---

## Context

Write the case study here in plain Markdown.

## The question
## Data & method
## Findings
## Why it matters
```

That is the whole process. The project appears on the homepage, in `/work`, and
gets its own page at `/work/my-new-analysis`.

**Delete a project:** delete the file. **Hide it temporarily:** set
`draft: true`.

---

## 3. Add an article, thread or explainer

Create a file in `src/content/writing/`:

```mdx
---
title: 'Why Solana retention collapses after 60 days'
outlet: 'DataInByte'
format: 'thread'          # article | thread | explainer | video | dashboard
date: 2026-03-14
href: 'https://...'
domains: ['data', 'blockchain']
featured: true
draft: false
---
```

**Note:** since the homepage was restructured into three pillar pages, this
collection is not currently rendered anywhere. Writing links live directly in
`src/content/pillars/blockchain-data.mdx`. Add pieces there for now, or ask for
this collection to be wired back into the Data & Web3 page.

---

## 4. Add or reorder a Dune dashboard

The three featured dashboards live in `src/data/profile.ts` under
`datainbyte.dashboards`. Copy a block, paste the exact dashboard URL, done:

```ts
dashboards: [
  {
    title: 'SEI User Behavior Analysis',
    href: 'https://dune.com/datainbyte/sei-user-behavior-analysis',
    note: 'Ongoing',        // optional — omit if not needed
  },
  // ...
],
```

Order in the array is the order on the page.

---

## 5. Add a fellowship, role, award or competition placement

Create a file in `src/content/recognition/`:

```mdx
---
title: 'Role or award name'
organisation: 'Organisation'
period: '2026 — 2027'     # leave out entirely if unconfirmed — it shows "—"
category: 'fellowship'    # competition | fellowship | leadership | award | advocacy
placement: '3rd Place'    # competitions only — omit for everything else
summary: 'One or two sentences.'
links:
  - label: 'Profile'
    href: 'https://...'
order: 1
draft: false
---
```

**Note:** since the restructure, this collection is not currently rendered.
Awards and leadership now live directly in the pillar pages —
`src/content/pillars/blockchain-data.mdx` for competitions and
`medicine-global-health.mdx` for the fellowship. Edit those files, or ask for
this collection to be wired back in.

---

## 6. Add a job (after graduation)

`src/content/experience/` is empty and, since the restructure, is not rendered
anywhere yet. When you have post-graduation roles to add, send them over and I
will build the section. The intended shape is:

```mdx
---
role: 'House Officer'
organisation: 'Hospital name'
period: '2027 — present'
summary: 'One or two sentences.'
order: 1
draft: false
---
```

---

## 7. Edit a pillar page

The three pillar pages live in `src/content/pillars/`. The `intro:` line in the
frontmatter is what shows on the homepage; everything below the `---` is the
"Read more" page. Both are plain Markdown.

---

## 8. Your photo

Your portrait is already in. **To swap it for a better shot later:**

1. Go to [`public/`](https://github.com/GirlFantasy/Fantasy-Portfolio/tree/main/public)
   on GitHub
2. Click **Add file → Upload files**
3. Drag in your new photo, renamed to exactly **`portrait.jpg`**
4. Click **Commit changes**

It overwrites the old one and appears everywhere in about 90 seconds. No code
change needed.

**What makes a good one:** portrait orientation, at least 1000px wide, under
about 300KB. Anything larger will still work but slows the page down — send it
to me instead and I will compress it first.

**If the crop sits wrong**, the frame is 4:5 so taller photos get trimmed top
and bottom. Adjust one line in `src/data/profile.ts`:

```ts
objectPosition: '50% 0%',
```

The second number is top-to-bottom. `0%` keeps the very top of the photo,
`50%` centres it, `100%` keeps the bottom. Nudge it until your face sits well.

## 9. Your CV

Save it as `public/cv.pdf`, then set `cv.available: true` in `profile.ts`. A
download link appears in the footer and on the About page.

---

## 10. Running it on your own computer

```bash
npm install     # once
npm run dev     # then open http://localhost:4321
```

Changes appear as you save. `npm run build` checks everything before you push —
if you make a mistake in a frontmatter field, the build fails and tells you
exactly which file and field, so a typo can never quietly break the live site.

---

## A rule worth keeping

Every number on this site should carry a `note:` explaining how it was measured.
Analysts trust figures with a method attached and discount figures without one.
