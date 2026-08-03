# On-Page + AEO Reference — `/jerky-gun/`

Companion to `serp-teardown.md` and `keyword-bank.md`. Every item here is a build-time check.

---

## 1. On-page technical checklist

| Item | Value / Rule |
|---|---|
| **URL** | `https://allaboutjerky.com/jerky-gun/` (root-level pillar — matches other pillars like `/beef-jerky-marinade/`) |
| **Title tag** | `Jerky Gun Guide: How to Use, Best Brands & Recipe` (55 chars, keyword-first) |
| **Meta description** | `Jerky gun guide: how to use one, best brands (LEM, Nesco, Weston), and a foolproof ground beef jerky recipe. USDA-safe temps, cleaning tips, pro moves.` (150 chars) |
| **H1** | `Jerky Gun: The Complete Guide (How to Use, Best Brands & a Recipe)` (matches URL keyword) |
| **H2 map** | See section 3 below — every H2 is an exact-match keyword from `keyword-bank.md` |
| **Keyword density** | Natural — primary "jerky gun" 15–25 times across 2,000–2,400 words = 0.6–1.2% (safe) |
| **First 100 words** | Contains exact "jerky gun" phrase 2× (opener + first sentence after H1) |
| **Images** | 6 total (hero + 5 in-body via ContentImage); all `.webp`; all `alt=` contain "jerky gun" or a directly related keyword; keyword-aware filenames |
| **Internal links** | 5–8 outbound (existing site pages + 5 spoke stubs) — see `cluster-structure.md` |
| **External links** | 2 authoritative (USDA FSIS jerky safety + FoodSafety.gov ground meat temp), `rel="noopener"` for target=_blank |

---

## 2. AEO (Answer Engine Optimization)

### Answer-first opener (40–58 words, bolded, immediately after H1)

**Target draft (52 words):**
> **A jerky gun is a hand-operated extruder that pushes seasoned ground meat through a nozzle to form uniform jerky strips or snack sticks. Load 90/10 or leaner ground beef mixed with cure and seasoning, extrude onto a dehydrator tray, and dry at 160°F until the strips bend without snapping.**

### Question-shaped H2/H3s (mirror PAA)

| H2 (from keyword-bank.md) | PAA question it mirrors |
|---|---|
| What Is a Jerky Gun | "What is a jerky gun?" |
| How to Use a Jerky Gun | "How do you use a jerky gun?" |
| Ground Beef Jerky Gun Recipe | "How do you make jerky with a jerky gun?" |
| Best Jerky Gun Brands Compared | "What is the best jerky gun?" |
| Jerky Gun vs Jerky Slicer | Related-searches gap |
| Jerky Gun Tips (from a Pitmaster) | "What tips help using a jerky gun?" |

### Extractable formatting

- Short paragraphs (2–4 sentences).
- Numbered ordered lists for step-by-step sections.
- 2 comparison tables (brand-comparison + jerky-gun-vs-slicer).
- 1 recipe card (RecipeCardBlock) with printable step list.
- Bulleted tips block for the "Tips" H2.

### Self-contained facts (schema-friendly)

- Every numeric claim states its unit and source.
- USDA safety line cited directly with a link.
- No pronoun-referenced facts ("this one" / "that setting") — every sentence stands alone if lifted.

### Named entities

- LEM Products, Nesco, Weston, Hi Mountain Seasonings, Cabela's, Presto (brands).
- Prague Powder #1, Insta Cure #1 (curing salt names).
- USDA FSIS, FDA (authorities).
- Cole Mercer, Bozeman Montana (author E-E-A-T).

---

## 3. H2 map (final — 12 H2s, volume-ordered with logged overrides)

Per `keyword-bank.md` ordering-rule overrides:

1. **What Is a Jerky Gun** (kw: `what is a jerky gun` 70) — definition-before-brand override
2. **Jerky Gun Nozzles: Flat, Double, and Round** — folds `jerky tube gun` 40 + covers the nozzle checklist item
3. **What Ground Beef to Use in a Jerky Gun** (kw: `ground beef jerky gun` 90 + `hamburger jerky gun` 90) — meat-prep must precede cure
4. **Do You Need Cure for Jerky Gun Jerky** — safety H2, cures for `deer jerky gun` 110 tail
5. **How to Load a Jerky Gun** (kw: folds `jerky maker gun` 50 + `jerky shooter gun` 50) — loading precedes operating
6. **How to Use a Jerky Gun** (kw: `how to use a jerky gun` 70 + `how to use jerky gun` 70) — the operate H2
7. **What Temperature to Dehydrate Ground Beef Jerky** — folds `food dehydrator jerky gun` 40; USDA-cited
8. **Ground Beef Jerky Gun Recipe** (kw: `beef jerky gun recipe` 40 + `how to make beef jerky with a jerky gun` 40 + all 3 how-to-make variants; embedded RecipeCardBlock)
9. **Jerky Gun Tips (from a Pitmaster)** (kw: `jerky gun tips` 50) — mid-batch recovery playbook here (info-gain #3)
10. **Best Jerky Gun Brands Compared** (kw: `lem jerky gun` 880 + `nesco jerky gun` 170 + `weston jerky gun` 90 + `cabela's jerky gun` 210 + `hi mountain jerky gun` implied + `chard jerky gun` 30 + `mossy oak jerky gun` 30) — brand-comparison table (info-gain #1)
11. **Jerky Gun vs Jerky Slicer** — technique comparison (info-gain #2)
12. **Jerky Gun Cleaning and Care** — cleaning checklist item; folds `diy jerky gun` 40 DIY sidebar

**Total H2s: 12. Target range: 10–12. ✓**

---

## 4. Schema plan (JSON-LD blocks)

Delivered via existing site infrastructure:

- **Article** — via `PillarLayout.astro` (auto: headline, author=Cole Mercer, datePublished, dateModified, image)
- **BreadcrumbList** — via `PillarLayout.astro` (auto: Home → Jerky Gun)
- **FAQPage** — via `PillarLayout.astro` (pass `faqs=` prop with 8 PAA Q&A pairs)
- **Recipe** — via `RecipeCardBlock.astro` (embedded inside the H2 "Ground Beef Jerky Gun Recipe")

No custom JSON-LD strings needed — all four are wired into the existing layouts.

---

## 5. Competitor gap analysis (from `serp-teardown.md`)

| Gap | Content pages | My pillar |
|---|---|---|
| Brand-by-brand comparison table | None have it (product pages sell one brand) | H2 #10 — 6-brand comparison table |
| Jerky gun vs jerky slicer | None cover the choice | H2 #11 — full comparison |
| Mid-batch recovery playbook (jam, spit, warm meat) | All hand-wave "troubleshooting" | H2 #9 pitmaster tips — step-by-step recovery |
| USDA-cited safety data (160°F ground meat, storage) | thechefstoday mentions 160°F; none cite the source | H2 #7 links directly to FSIS jerky safety guidance |
| Answer-first snippet block | Only one attempts a bolded lead | 40–58-word bolded opener under H1 |
| Recipe schema on the pillar | Only ninnescahmade has Recipe schema | RecipeCardBlock inside H2 #8 |

---

## 6. On-page SEO spec (from site's `references/on-page-seo.md`)

The site's PillarLayout + RecipeCardBlock + BaseLayout satisfy all 15 categories automatically for this pillar:

- **Metadata:** title, meta description, canonical, og:image, twitter:image (PillarLayout `image=` prop)
- **URL:** clean root-level, hyphenated, no params
- **Headings:** one H1, hierarchical H2/H3
- **Images:** WebP, keyword alts, width/height (ContentImage auto-injects dims + srcset)
- **Schema:** Article + Breadcrumb + FAQPage (layout) + Recipe (card)
- **E-E-A-T:** Cole Mercer byline, About link, USDA citation, 15+ yr pitmaster claim (from author bio)
- **Accessibility:** semantic HTML, alt text on every image, sufficient contrast (global.css tokens)
- **Mobile:** responsive images, data-table with `overflow-x:auto`
- **Social:** ShareBar top + bottom (Pinterest gets the `image=` for the pin)
- **Long-form:** 2,000–2,400 words, 12 H2s, 6 images — matches the site's other pillar builds
