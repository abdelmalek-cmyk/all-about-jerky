---
description: End-to-end blog-post pipeline — pick a keyword from SEMrush CSV, teardown the SERP, propose the pillar outline for one approval, then ship the pillar page + Midjourney prompts using the site's canonical template.
argument-hint: [optional-keyword]
---

# /new-article — Automated Blog-Post Pipeline

Generate a complete, rank-ready blog post from just two inputs: SEMrush screenshots and keywords.csv. Every post reuses the site's established template and passes through the same 4-layer SEO system already built for this site.

## Inputs (only things the user provides)

- **SEMrush screenshots** — Keyword Overview + top-10 SERP/ranking view.
- **keywords.csv** — the keyword list to pick from.
- **(Optional) a specific keyword** after the command (e.g. `/new-article jerky gun` → `$ARGUMENTS`). If none given, pick the best opportunity from the CSV (high volume × low KD × weak content competition) and state why.

## Reference files (load these — never reinvent)

- `references/voice.md`, `references/humour.md`, `references/opinions.md`, `references/stories.md`, `references/stats.md` — the house voice (Cole Mercer).
- `references/on-page-seo.md` — the 15-category, 80+ item on-page spec (read before writing any page).
- `references/technical-seo.md` — the site-level sitemap / robots.txt / Lighthouse layer.
- The existing pillars `src/pages/jamaican-jerk-seasoning.astro`, `src/pages/jerky-gun.astro`, `src/pages/vegan-jerky.astro` — the canonical template: PillarLayout + RecipeCardBlock + ContentImage + the 4-schema pattern. Reuse this exact structure every time.

---

## The Pipeline

### STEP 1 — Pick the keyword
From keywords.csv (or the user's chosen `$ARGUMENTS`), select the primary keyword. Pull its exact metrics (volume, global, KD, CPC, intent) from the SEMrush Keyword Overview screenshot. **Never invent numbers** — read them from the screenshot.

### STEP 2 — Steal the SERP (Phase 0)
Run the 8-step SERP teardown and save `serp-research/[keyword]/serp-teardown.md`:
1. Read the top-10 SERP screenshot (or use Exa `web_search_exa` + `web_fetch_exa` to read the top-3 pages' full content if web tools are on).
2. Extract from the top-3 content pages: word count → average (±20% target), H2 count → average, image count → average, schema type → majority, format → majority (listicle/tutorial/guide/comparison).
3. Build the topic-coverage checklist (every subtopic all 3 winners share = mandatory) + 1–2 gap topics for information gain.
4. List the exact People-Also-Ask questions for the FAQ.
5. Name the winner-type and the gap to exploit (thin product pages = easy win).

**The One Metric:** every section must **end the search** — fully answer its intent so the reader never needs another result. Match the SERP for form; end the search for the win.

### STEP 3 — Build the research artifacts (Phase 1)
Save alongside the teardown in `serp-research/[keyword]/`:
- `keyword-bank.md` — tiered keywords + SERP-feature map (real metrics only).
- `cluster-structure.md` — pillar + 5 spokes, combined volumes, internal-linking rules. Ordering: default to volume, override when intent logic demands (log each override).
- `keyword-aeo-seo-reference.md` — on-page + AEO checklist + competitor-gap analysis for this keyword.

### ⛔ APPROVAL GATE (the one stop)
Post the proposed pillar outline for sign-off before writing the full draft:
- URL, title (≤60), target word count, H2 count, image count, schema list.
- The H2 map (each H2 = exact keyword + volume, overrides logged).
- The 3+ named information-gain elements.
- The image plan (filenames + alts).

**Wait for "approved" (or adjustments).** This matches the site's STEP-0-propose-first workflow and prevents shipping the wrong thing. Everything after this is automatic.

### STEP 4 — Write the pillar (Phase 3), in the house voice
Using the exact PillarLayout + RecipeCardBlock template:
- Match the SERP format + length (±20%), H2 count, image count, majority schema.
- Every H2 = an exact-match keyword; long-tails folded into the body.
- Answer-first opener (40–58 words, bolded) for the featured snippet / AI Overview.
- RecipeCardBlock with prep/cook/yield, numbered steps, Cole Mercer byline.
- FAQ = the exact PAA questions, 2–4 sentence standalone answers.
- ≥3 information-gain elements from the teardown.
- E-E-A-T by topic risk: safety claims (temperatures, doses, storage) cite real authorities (USDA FSIS, FDA); cultural/product topics get accurate origin + honest comparison.
- **No fabricated data** — no invented prices, nutrition, ratings, or specs. If unavailable, say so.
- Voice check against `references/` (~1 light joke per ~250 words, serious-face pivot for safety bits).

### STEP 5 — Apply the on-page SEO spec (Phase 4)
Satisfy every applicable item in `references/on-page-seo.md`: front-matter (title, meta, canonical, OG 1200×630, Twitter card, lang, viewport), keyword-forward slug, one H1, logical H2→H3, image alts + hyphenated `.webp` filenames + width/height (prevents CLS) + lazy-load, 3–5 internal links with descriptive anchors, **2–3 authoritative external links** (`rel="noopener"`, new tab), and all 4 schemas (Article + BreadcrumbList + FAQPage + Recipe). Add the inbound internal link from the most relevant existing page.

For 1500+ word posts (long-form category 15): add `.toc` block after answer-box + `id` attributes on every H2 + `.back-to-top` link at page end.

### STEP 6 — Generate Midjourney prompts (user generates the images)
**Do not auto-fetch stock photos.** Instead, output one ready-to-paste Midjourney prompt for each image slot in the approved image plan, using the exact keyword-aware filenames assigned (e.g. `jerky-gun-hero.webp`). The user generates the images in Midjourney and drops them into `public/images/`.

Adapt this food-photography template for every prompt:
- Each prompt starts with exactly: `amateur photo with interesting details and texture from Reddit taken with iPhone 15 Pro that hooks users for a juicy, mouthwatering` — then immediately the English subject of that specific slot (translate to English regardless of source language).
- Amateur, photorealistic, homemade vibe; normal kitchen setting; natural lighting; close-up from a human eye-level side angle.
- Real, clear, uncluttered background — no extra ingredients, no rustic props.
- Vivid, enticing, mouthwatering; vibrant colors and rich texture.
- Square to match the site: `--ar 1:1 --style raw --v 6` (site standard 1254×1254).
- For a cut/sliced item where the interior matters (layered/stuffed/pie), show a single slice and describe the interior using neutral terms (showing / displaying / featuring).

This is usually a tool/process/guide article, not one plated dish — so each prompt shows its OWN subject (hero tool shot, nozzles/parts, meat prep, loading, the finished recipe shot, a brand line-up, cleaning), NOT the same finished dish repeated. Make the recipe/finished-food slot the most mouthwatering. Draw visual inspiration from the competitor product photos where relevant (clean, well-lit, subject-focused).

**Hard word rules (check every prompt):**
- No double quotation marks.
- The word "revealing" must be absent.
- Never use: patriotic, breasts, cutting, chest, bosom.
- Simple, concise, straightforward language; no clichés or metaphors.

Output the prompts as a numbered list, each labelled with its target filename.

**Guard:** the page stays valid without the images — `ContentImage` renders nothing until a file lands, so nothing breaks. But never let the crop step run for the recipe image before that `.webp` exists (a missing recipe image caused a stale "missing image field" flag in GSC). Generate the recipe crops only after the user confirms the recipe `.webp` is in place.

### STEP 7 — Technical SEO + build (Phase 6, site-level)
Per `references/technical-seo.md`: regenerate `sitemap.xml` to include the new page (add to `public/sitemap.xml` and the `generate-crops.mjs` `methodHeroes` list for the recipe hero), confirm `robots.txt` points at it, then run a clean build.

**Never push a pillar with a Recipe card before its recipe `.webp` is on disk and its crops are generated.** Doing so ships a Recipe schema with a missing `image` field — Google Search Console flags it as invalid and the page loses rich-results eligibility until the next crawl (which can be days). This has happened twice; `src/components/RecipeSchema.astro` now enforces the rule as a hard build gate — `astro build` will throw a clear error in PROD if the recipe image is missing, so a broken pillar physically cannot be pushed. Dev mode keeps the silent-omit so writers can iterate on a page before its `.webp` exists.

The page ships and renders correctly **without** the non-recipe ContentImages (they show nothing until files land — no schema penalty). Only the recipe image is gated. Once the user drops the generated `.webp` files into `public/images/`, run the crop + responsive + build scripts:

```bash
cd beef-jerky && node scripts/generate-crops.mjs && node scripts/generate-responsive.mjs && npm run build
```

Verify a clean build (page count +1, zero console errors, all 4 schemas render — the Recipe `image` field populates once the recipe `.webp` and its crops exist).

### STEP 8 — Ship + QA report
Commit and push. Then post the Phase 5 QA table (target vs actual): word count, H2 count, image slots, schema types, answer-first opener length, FAQ pairs, named info-gain elements, safety citation present, 0 fabricated numbers, voice check, 0 console errors. Finish with the reminder to click REQUEST INDEXING in GSC for the new URL, and note the 5 spoke stubs to build later.

---

## Standing rules (apply every run)

- **Same template every time** — reuse the canonical PillarLayout/RecipeCardBlock structure; don't redesign per post.
- **One approval gate only** (after STEP 3). Everything else is automatic.
- **No invented data, ever** — this is the site's red line and Google penalizes fabricated nutrition/ratings.
- **Token discipline** — one page per session; load only the reference files this run needs; read secrets from `process.env`.
- **Tools:** Exa (`web_search_exa`, `web_fetch_exa`) for SERP/web reading; Context7 only for Astro/framework docs during build — never for competitor pages.
