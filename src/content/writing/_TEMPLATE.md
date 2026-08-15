# Adding a piece of writing

This folder is empty. Right now the site links to your *channels* — Substack, X,
the Drive archive — but not to individual pieces. Add files here and a
"Selected writing" section appears on the relevant pillar page, newest first.

**To add one:** copy the block below into a new file in this folder named after
the piece, e.g. `activation-where-web3-adoption-begins.mdx`.

Files ending in `.md` (like this one) are ignored. Your entries must end `.mdx`.

```mdx
---
title: 'Activation: Where Web3 Adoption Begins'
outlet: 'DataInByte'
format: 'article'
date: 2025-03-14
summary: 'One sentence on what the piece argues. Optional — delete the line if you would rather just show the title.'
href: 'https://datainbyte.substack.com/p/activation-where-web3-adoption-begins'
domains: ['data', 'blockchain']
pillar: 'blockchain-data'
featured: false
draft: false
---
```

## Field notes

- **pillar** — this is the important one. It decides which page the piece shows
  up on. Use exactly one of:
  - `medicine-global-health`
  - `blockchain-healthcare`
  - `blockchain-data`

  Omit the line entirely and the piece stays hidden — useful for drafting.

- **format** — one of `article`, `thread`, `explainer`, `video`, `dashboard`.
  Anything else fails the build with a clear message.
- **date** — `YYYY-MM-DD`. Optional, but dated pieces sort above undated ones.
- **href** — the real published URL, pasted exactly. Never edit a URL by hand to
  make it look tidier.
- **domains** — any of `medicine`, `data`, `blockchain`. Controls the colour dot.
