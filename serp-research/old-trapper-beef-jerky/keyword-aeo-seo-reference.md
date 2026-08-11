# On-Page + AEO Reference — `/old-trapper-beef-jerky/`

Companion to `serp-teardown.md` and `keyword-bank.md`. Every item here is a build-time check.

---

## 1. On-page technical checklist

| Item | Value / Rule |
|---|---|
| **URL** | `https://allaboutjerky.com/old-trapper-beef-jerky/` (root-level pillar — brand-review pattern) |
| **Title tag** | `Old Trapper Beef Jerky Review: Flavors, Nutrition & Verdict` (60 chars) |
| **Meta description** | `Honest Old Trapper beef jerky review from a pitmaster: every flavor rated, nutrition + gluten-free check, where to buy, and whether it's worth it.` (150 chars) |
| **H1** | `Old Trapper Beef Jerky: An Honest Review from a Pitmaster` |
| **H2 map** | See section 3 below — 12 H2s, all volume-backed |
| **Keyword density** | Natural — "Old Trapper" appears 30-45× across 2,200-2,500 words = 1.4-2.0% (product-review pages naturally have higher brand-name density; safe) |
| **First 100 words** | Contains "Old Trapper beef jerky" phrase 2-3× |
| **Images** | 6 total (hero + 5 in-body via ContentImage); all `.webp`; alts contain "Old Trapper"; keyword-aware filenames |
| **Internal links** | 4-6 outbound (existing site pages + 5 spoke stubs) |
| **External links** | 2-3 authoritative (Old Trapper's own site for brand facts + USDA FSIS for sodium/nutrition context) |
| **Long-form additions** | TOC + H2 ids + back-to-top (long-form ≥1500 words) |

---

## 2. AEO (Answer Engine Optimization)

### Answer-first opener (40–58 words, bolded, immediately after H1)

**Target draft (54 words):**
> **Old Trapper is a mass-market American beef jerky brand founded in 1969, best known for its Old Fashioned and Peppered flavors sold at Walmart, Costco, and Sam's Club. It's not premium — the texture is soft and sodium runs high — but it's honest value jerky at $1-1.50 per ounce, widely available, and worth trying if you're new to the category.**

### Question-shaped H2/H3s (mirror PAA + CSV questions)

| H2 (from keyword-bank.md) | PAA/CSV question it mirrors |
|---|---|
| Is Old Trapper Beef Jerky Gluten Free | "Is Old Trapper beef jerky gluten-free?" (210+90+70/mo) |
| Old Trapper Beef Jerky Nutrition | "Nutrition facts" cluster (90+70/mo) |
| Is Old Trapper Beef Jerky Healthy | "Is Old Trapper beef jerky healthy?" (90/mo) |
| Is Old Trapper Beef Jerky Good | "Is Old Trapper beef jerky good?" (90/mo) — verdict + Reddit engagement |
| Where to Buy Old Trapper Beef Jerky | Where-to-buy cluster |

### Extractable formatting

- Short paragraphs (2–4 sentences).
- Bullet lists for flavor characteristics.
- 2 tables: flavor lineup + nutrition per flavor.
- Bulleted where-to-buy list.
- Direct-answer FAQ block.

### Named entities

- **Brand:** Old Trapper (Old Trapper Smoked Products, LLC).
- **Products:** Old Fashioned, Peppered, Hot & Spicy, Teriyaki, Zero Sugar, Double Eagle, Beef Sticks, Kippered Beef, Deli Style Beef Sticks, Pepperoni Sticks, Jerky Rounds, Jalapeno Beef Sticks.
- **Retailers:** Walmart, Costco, Sam's Club, Amazon, 7-Eleven.
- **Competitor brands** (for comparison context): Jack Link's, Krave, Country Archer, People's Choice, Chomps.
- **Authorities:** USDA FSIS (for sodium context), American Heart Association (for daily sodium ceiling).
- **Author:** Cole Mercer, Bozeman Montana pitmaster.

---

## 3. H2 map (final — 12 H2s, per keyword-bank.md ordering, all volume-backed)

Reader-first order (flavors → product line → health/nutrition → buying → verdict):

1. **Old Trapper Old Fashioned Beef Jerky** (kw: 590) — flagship, start here
2. **Old Trapper Peppered Beef Jerky** (kw: 590 + 320 + 50 = **960**)
3. **Old Trapper Hot and Spicy Beef Jerky** (kw: 320 + 260 + 210 + 140 + 90 = **1,020**)
4. **Old Trapper Teriyaki Beef Jerky** (kw: 320 + 260 + 50 = **630**)
5. **Old Trapper Zero Sugar Beef Jerky** (kw: 110)
6. **Old Trapper Double Eagle Beef Jerky** (kw: 170 + 110 + 40 + Double Eagle Coins 390 sidebar = 710)
7. **Old Trapper Beef Sticks** (kw: 390 + Deli 110 + Kippered 90 + Pepperoni 90 + Jalapeno 70 + Rounds 260 = **1,010**) — product line beyond jerky
8. **Is Old Trapper Beef Jerky Gluten Free** (kw: 210 + 90 + 70 = **370**)
9. **Old Trapper Beef Jerky Nutrition** (kw: 90 + 70 = 160)
10. **Is Old Trapper Beef Jerky Healthy** (kw: 90)
11. **Where to Buy Old Trapper Beef Jerky** (kw: Costco 110+70, Walmart 170, Sam's tails)
12. **Is Old Trapper Beef Jerky Good** (kw: 90) — verdict + Reddit criticism engagement (info-gain)

**Total H2s: 12. All volume-backed. ✓**

---

## 4. Schema plan (JSON-LD blocks)

- **Article** — via PillarLayout (auto)
- **BreadcrumbList** — via PillarLayout (auto)
- **FAQPage** — via PillarLayout (pass 8 PAA Q&A pairs)
- **Review** — NEW schema type for this site. Not currently in the RecipeSchema.astro or any existing component. **NEEDS: create `src/components/ReviewSchema.astro`** OR emit inline JSON-LD `<script>` in the pillar body pointing at `Product` (Old Trapper) with `reviewRating` + `reviewBody` + `author` (Cole Mercer).

**Approach:** Emit inline `<script type="application/ld+json">` block for Review — simpler than creating a component for a schema type only this one pillar uses. If we add more brand reviews later, refactor to a `ReviewSchema.astro`.

**Rating decision:** Per site red line "no fabricated ratings" — the Review schema needs a numeric rating. Options:
1. **Skip Review schema entirely.** Ship Article + FAQPage + Breadcrumb only. Simplest.
2. **Cole's real rating.** Cole assigns an honest overall rating (e.g., 3.5/5) based on his stated review criteria — this isn't "fabricated" because Cole IS the author expressing his opinion. The site's "no fabricated data" rule is about invented facts (star ratings for products Cole didn't test, prices we don't know), not about Cole's own opinion.
3. **Aggregate rating from a source.** Cite an averaged rating from a real source (e.g., Amazon's 4.4 stars from ~10K reviews). Sourcable = safe.

**Recommendation:** Option 2 (Cole's real rating) + optional aggregate from a real source. The Review is the whole point of the page; skipping the schema wastes the SEO signal.

**No RecipeSchema** — this is a review, not a recipe. The RecipeSchema build gate won't fire.

---

## 5. Competitor gap analysis (from `serp-teardown.md`)

| Gap | SERP status | My pillar |
|---|---|---|
| Independent editorial review | 0 content pages rank | The pillar IS this |
| Engagement with negative Reddit sentiment | Reddit #3 = "avoid" — no other page addresses | H2 #12 body + FAQ engage the criticism directly |
| Flavor-by-flavor honest ranking | Nobody does this for Old Trapper | H2s #1-6 cover each flavor |
| Nutrition + gluten-free clarity | Brand's own site is opaque about macros; PAA fires | H2 #8, #9, #10 with label-verified data |
| Product-line coverage (beef sticks, kippered, rounds) | Only brand site covers | H2 #7 |
| Old Trapper Double Eagle collectible context | 390/mo search but nobody explains | H2 #6 sidebar |
| Review schema | 0 pages have it | This pillar (NEW schema type for the site) |

---

## 6. Voice positioning — first branded review

**Cole's stance:**
- **Honest and respectful.** Not a hit piece, not a puff piece.
- **Acknowledges what Old Trapper does well:** widely available, honest value, real beef (not formed/pressed), decades-old brand with genuine heritage.
- **Names weaknesses fairly:** soft texture (not a chew-heavy jerky), high sodium (comes with cured mass-market territory), added sugar in most flavors, thin slice profile.
- **Engages the Reddit "avoid" criticism directly:** what people actually complain about + whether that criticism is fair.
- **NO manufactured drama.** No "shocking truth" or "you'll never believe" framing.
- **Cole's authority:** 15+ year pitmaster, makes his own jerky, has run every commercial brand through his mouth. That's the credential.

**Red lines:**
- No invented prices (varies too much by retailer/promotion).
- No invented star ratings sourced from imagination (Amazon aggregate IS sourceable and safe).
- No invented "taste-test scores."
- No comparison to competitors we haven't fairly tested (mention Country Archer, People's Choice by name = OK; ranking them "better" than Old Trapper without direct comparison = not OK).

---

## 7. On-page SEO spec (from `references/on-page-seo.md`)

All 15 categories addressed automatically by the site's PillarLayout + inline Review schema + BaseLayout + this session's pillar work. Long-form (category 15) additions required (TOC + H2 ids + back-to-top per site pattern from `/jerky-gun/`, `/vegan-jerky/`, `/low-sodium-beef-jerky/`, `/meat-for-beef-jerky-in-dehydrator/`).
