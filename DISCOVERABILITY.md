# Getting found

Two halves. The technical half is built and needs nothing from you. The half
that actually decides whether people find you is the second one, and only you
can do it.

Be realistic about the goal. You are not going to rank for "blockchain
analyst" — that is a global commercial term and chasing it wastes effort. The
target is different and very winnable:

> **When someone hears your name in a meeting, a DM or on a panel and searches
> it, this site is the first result.**

"Chimdalu Egwu" is a distinctive name with almost no competition. That is a
fight you win, and it is the one that matters — because searching your name is
what a recruiter, a collaborator or a programme reviewer actually does.

---

## Part 1 — already done, no action needed

| | What it does |
| --- | --- |
| `sitemap-index.xml` | Lists every page for search engines. Regenerates on each deploy. |
| `robots.txt` | Tells crawlers everything is open, and points at the sitemap. |
| Canonical URLs | One official address per page, so nothing competes with itself. |
| Person structured data | Your name, headline, education, photo and **every social profile**, machine-readable. |
| WebSite structured data | Names the site, so a search for you resolves to it as a brand. |
| Breadcrumbs | Interior pages show `Home › Pillars › …` in results instead of a raw URL. |
| Open Graph + Twitter card | A real preview image and headline when a link is shared anywhere. |
| Page titles | Every page leads with your headline, not with the site name. |
| Descriptions | Every page under 160 characters, so none get cut off mid-sentence. |
| Favicons | SVG plus PNG and Apple touch icon, for crawlers that ignore SVG. |
| 404 page | Marked `noindex`, so an error page never appears in results. |
| Speed | Static HTML, no JavaScript framework, ~1.9MB total. Speed is a ranking factor and this is close to the ceiling. |

**Nothing above needs maintaining.** New pages inherit all of it.

---

## Part 2 — what only you can do

Ranked by how much difference each one actually makes.

### 1. Link to the site from every profile you already have ★ highest impact

This is the single biggest lever, it is free, and it takes about fifteen
minutes. Search engines find new sites mainly by following links. Right now
the site links **out** to all your profiles — but if none of them link
**back**, the site is close to invisible.

Every one of these has a website field. Fill in all of them:

- [ ] **LinkedIn** — Edit profile → Contact info → Website. Also paste it in
      your About section.
- [ ] **X / Twitter** — Edit profile → Website.
- [ ] **GitHub** — Settings → Profile → Website. Also add it to your profile
      README if you have one.
- [ ] **Substack** (`@chimdalunnenne`) — Settings → your page → links.
- [ ] **DataInByte Substack** (`@datainbyte`) — same.
- [ ] **Dune** (`datainbyte`) — profile settings → website.
- [ ] **TikTok** — profile → edit → website.
- [ ] **Millennium Fellows profile** — if the profile lets you add a link, or
      email them and ask.

LinkedIn and GitHub matter most: both are trusted, crawled constantly, and
they carry your real name next to the link, which is exactly the signal that
connects "Chimdalu Egwu" to this site.

**Also put the link where people already read you.** The end of a Substack
post, your X bio, the description of a Dune dashboard. A link people actually
click is worth more than one nobody does.

### 2. Google Search Console ★ high impact, one-time

Without this you are waiting for Google to stumble across the site. With it,
you are handing over the map and can watch what happens.

1. Open <https://search.google.com/search-console>
2. **Add property** → choose **URL prefix** → paste your site address
3. Choose the **HTML tag** method. It shows a tag like
   `<meta name="google-site-verification" content="AbC123..." />`
4. Copy **only** the `content` value
5. Open `src/data/profile.ts`, find the `verification` block near the bottom,
   and paste it in:
   ```ts
   export const verification = {
     google: 'AbC123...',
     bing: null,
   };
   ```
6. Commit and push. Wait for the deploy to finish, then click **Verify**.
7. Once verified: **Sitemaps** in the left menu → enter `sitemap-index.xml` →
   Submit.
8. Then **URL Inspection** → paste your homepage → **Request indexing**.

After a week or two, Search Console tells you the thing no guesswork can:
the actual words people typed before they landed on your site.

### 3. A custom domain ★ high impact, small cost

`chimdalu-portfolio.vercel.app` works and can be indexed — but it reads as
temporary, and it puts your work on somebody else's brand. Something like
`chimdaluegwu.com` is roughly $10–15 a year and changes how the site is read
by anyone deciding whether to take you seriously.

When you buy one:
1. Add it in Vercel → your project → Settings → Domains, and follow the DNS
   instructions your registrar gives you.
2. Change **one line** in `astro.config.mjs`:
   ```js
   site: 'https://your-new-domain.com',
   ```
   That updates canonical URLs, the sitemap, `robots.txt`, Open Graph tags and
   the structured data together.
3. Keep the Vercel address working and pointing at the new one — Vercel does
   this automatically — so old links do not break.
4. Add the new domain as a **separate property** in Search Console.

Do this *before* step 1 if you can, so you only paste links once.

### 4. Bing Webmaster Tools ★ small but nearly free

Bing feeds ChatGPT search and DuckDuckGo, which is a growing share of how
people look things up. <https://www.bing.com/webmasters> — it can import
everything directly from Search Console in one click. Same `verification`
block in `profile.ts` has a `bing` field if you need the tag method.

### 5. Keep publishing ★ compounding

Search engines favour sites that change. Every piece added to
`src/content/writing/` is a new indexable page with your name on it, and every
Substack post that links back is another path to the site. This is slow and it
compounds — it is the only part of this list that keeps paying.

---

## What not to bother with

- **Buying backlinks or using "SEO packages"** — actively harmful, and for a
  name query completely unnecessary.
- **Keyword-stuffing your pages** — the writing is the strongest thing you
  have. Damaging it to repeat "blockchain analyst" would be a bad trade.
- **Chasing competitive head terms** — "data analyst", "blockchain" and the
  like are contested by companies with budgets. Your name is not.
- **Meta keywords tag** — ignored by every search engine since roughly 2009.

---

## What to expect, honestly

| When | What |
| --- | --- |
| A few days after Search Console + backlinks | Site starts appearing for your exact full name |
| 2–4 weeks | Your name reliably returns the site; interior pages get indexed |
| 2–3 months | Longer phrases start bringing people in — the ones Search Console will show you |

If nothing is indexed after three weeks, check Search Console → **Pages** for
the reason. It will name it. The usual causes are that the site was never
submitted, or that no external page links to it — steps 1 and 2 above.

## Checking it worked

- Search `site:chimdalu-portfolio.vercel.app` in Google — lists every indexed
  page. Zero results means it has not been indexed yet.
- Search your name in a private window (so your own history does not flatter
  the result).
- Paste a page into <https://search.google.com/test/rich-results> to confirm
  the structured data is read correctly.
- Paste a link into <https://www.opengraph.xyz> to see the share preview.

---

One caveat on my side: this sandbox cannot reach the live site, so everything
above was verified against the built output rather than the deployed page.
Worth a quick look at the real site once it deploys.
