# Adding a role

This folder is empty on purpose. It is where jobs, housemanship, residency and
any other professional post go after graduation.

**To add one:** copy the block below into a new file in this folder named
something like `house-officer-lasuth.mdx`. That is the whole job — an
"Experience" section appears on the About page automatically the moment the
first file exists, and disappears again if you remove them all.

Files ending in `.md` (like this one) are ignored. Your entries must end `.mdx`.

```mdx
---
role: 'House Officer'
organisation: 'Name of the hospital'
period: 'March 2027 — present'
summary: 'One or two sentences about what the role actually involves. Written plainly — this is read, not skimmed.'
links: []
order: 1
draft: false
---
```

## Field notes

- **order** — lower numbers appear first. Give your newest role `order: 1` and
  push the older ones down.
- **draft** — set `true` to keep an entry in the folder without publishing it.
- **links** — optional. Leave as `[]` if there is nothing to link. Otherwise:

  ```yaml
  links:
    - label: 'Department page'
      href: 'https://example.org/department'
      note: 'hospital'
  ```

- **period** — free text, so `'2027 — present'` and `'March–September 2027'`
  are both fine. Write it however it reads best.
