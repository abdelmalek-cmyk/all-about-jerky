# On-Page + AEO Reference — `/low-sodium-beef-jerky/`

Companion to `serp-teardown.md` and `keyword-bank.md`. Every item here is a build-time check.

---

## 1. On-page technical checklist

| Item | Value / Rule |
|---|---|
| **URL** | `https://allaboutjerky.com/low-sodium-beef-jerky/` (root-level pillar — matches `/beef-jerky-marinade/`, `/beef-jerky-seasoning/` pattern) |
| **Title tag** | `Low Sodium Beef Jerky: Best Brands & Homemade Recipe` (52 chars, keyword-first) |
| **Meta description** | `Low sodium beef jerky guide: best brands under 200 mg per serving, homemade recipe, and honest answers on how much sodium is in regular beef jerky.` (149 chars) |
| **H1** | `Low Sodium Beef Jerky: The Complete Guide (Brands, Sodium Facts & a Recipe)` |
| **H2 map** | See section 3 below |
| **Keyword density** | Natural — "low sodium beef jerky" 20–30× across 2,000–2,400 words = 0.8–1.4% |
| **First 100 words** | Contains exact "low sodium beef jerky" 2–3× |
| **Images** | 6 total (hero + 5 in-body via ContentImage); alts contain "low sodium beef jerky" or a direct sibling keyword; keyword-aware filenames |
| **Internal links** | 5–8 outbound (existing site pages + spoke placeholders) |
| **External links** | 2–3 authoritative (USDA FoodData Central + American Heart Association sodium guidance) |
| **Long-form additions** | TOC block after answer-box + H2 id attributes + back-to-top link (per `references/on-page-seo.md` category 15) |

---

## 2. AEO (Answer Engine Optimization)

### Answer-first opener (40–58 words, bolded, immediately after H1)

**Target draft (55 words):**
> **Low sodium beef jerky is jerky with under 200 mg of sodium per one-ounce serving — roughly half the sodium of a standard jerky bag. Brands like Country Archer, Jerky Gent, and Strollo's meet this bar; you can also make it at home with a dry-brine technique that skips the soy sauce and cuts salt in half.**

### Question-shaped H2/H3s (mirror PAA)

| H2 | PAA question it mirrors |
|---|---|
| What Counts as Low Sodium Beef Jerky | "What counts as low sodium?" |
| How Much Sodium Is in Regular Beef Jerky | "How much sodium in beef jerky?" |
| Best Low Sodium Beef Jerky Brands | "What is the best low sodium beef jerky?" |
| How to Make Low Sodium Beef Jerky | "How do you make low sodium beef jerky?" |
| Is Low Sodium Beef Jerky Actually Healthy | "What is the healthiest beef jerky?" |

### Extractable formatting

- Short paragraphs (2–4 sentences).
- Numbered ordered lists for the recipe steps.
- 3 comparison tables (brand-sodium comparison, regular-vs-low-sodium contrast, dry-brine vs wet-marinade).
- 1 recipe card (RecipeCardBlock) with printable step list.
- Bulleted "no-salt-added" sub-section.

### Named entities

- **Brands:** Country Archer, Jerky Gent, Savage Jerky, Jerky Outpost, Strollo's, People's Choice, Krave (low-sodium line), Wilde, Chomps, Duke's, Mission Meats, Field Trip.
- **Sodium standards:** American Heart Association (<2,300 mg/day), USDA FoodData Central, DASH diet, Men's Journal healthy-jerky criteria (<500 mg/serving, <5 g added sugar).
- **Ingredients:** eye of round, top round, Prague Powder #1, low-sodium soy sauce (still to avoid), coconut aminos, MSG (as sodium substitute).
- **Author:** Cole Mercer, All About Jerky pitmaster.

---

## 3. H2 map (final — 10 H2s, revised per user rule: every H2 must target a real-volume keyword)

Reader-first logical order preserved (sodium context → category exists → brands → recipe → health → sub-categories).

1. **How Much Sodium Is in Beef Jerky** (kw: `how much sodium in beef jerky` 70 + `how much sodium is in beef jerky` 70 + `does beef jerky have a lot of sodium` 40 = **180**) — USDA-cited direct answer (info-gain #2)
2. **Is There a Low Sodium Beef Jerky** (kw: `is there a low sodium beef jerky` 20 + `is there low sodium beef jerky` 20 = 40) — category confirmation
3. **Best Low Sodium Beef Jerky Brands** (kw: primary kw variant + brand tails; part of 4,400 primary head) — brand-sodium comparison table (info-gain #1)
4. **How to Make Low Sodium Beef Jerky** (kw: `how to make low sodium beef jerky` 20 + `low salt jerky recipe` cluster) — embedded RecipeCardBlock; dry-brine technique folded in as tips (info-gain #3)
5. **What Is the Healthiest Beef Jerky** (kw: `what is the healthiest beef jerky` 140 + `what is the healthiest jerky` 140 + `what beef jerky is healthy` 110 = **390**) — AHA/heart-health context folded in (bonus info-gain)
6. **Are Archer Beef Sticks Healthy** (kw: `are archer beef sticks healthy` 90) — brand-specific answer
7. **Reduced Sodium Beef Jerky** (kw: cluster `reduced sodium jerky`) — adjacent term
8. **No Salt Beef Jerky** (kw: cluster `no salt jerky`) — stricter sub-category
9. **Low Sodium Jerky (Turkey, Chicken, and Other Meats)** (kw: cluster `low sodium jerky`) — non-beef variants
10. **Low Sodium Meat Sticks** (kw: cluster `low sodium meat sticks`) — adjacent product category

**Total H2s: 10. Target range: 10–12. ✓**

**Cut vs original 12-H2 draft (folded into existing H2 bodies):**
- ~~What Counts as Low Sodium~~ → answer-first opener + H2 #1 lead
- ~~Why Beef Jerky Is So High in Sodium~~ → H2 #1 body
- ~~Dry-Brine vs Wet Marinade~~ → H2 #4 recipe tips
- ~~Low Sodium and Heart Health~~ → H2 #5 body (AHA cite)
- ~~Where to Buy~~ → H2 #3 body

---

## 4. Schema plan (JSON-LD blocks)

- **Article** — via PillarLayout (auto)
- **BreadcrumbList** — via PillarLayout (auto)
- **FAQPage** — via PillarLayout (pass 8 PAA Q&A pairs)
- **Recipe** — via RecipeCardBlock inside H2 #5 (dry-brine low-sodium recipe)

---

## 5. Competitor gap analysis (from `serp-teardown.md`)

| Gap | Content pages | My pillar |
|---|---|---|
| Sodium threshold definition | SpendingTime mentions <115 mg/serving but no dedicated H2 | H2 #1 — clear definition with brackets |
| USDA-cited sodium data for regular jerky | Nobody | H2 #2 — direct-answer block with USDA FDC link |
| Brand-by-brand sodium comparison table | Nobody consolidates | H2 #4 — 8-brand table with mg/serving |
| Dry-brine technique explained | SpendingTime touches on it | H2 #7 — dedicated comparison table |
| No-salt-added sub-category | Nobody | H2 #8 — specific brands + DIY approach |
| Brand-specific: Country Archer answer | Archer press page (bias) | H2 #9 — neutral answer |
| Heart-health / AHA framing | Nobody | H2 #10 — heart-health context with AHA cite |
| Recipe schema on the pillar | SpendingTime has one | RecipeCardBlock inside H2 #5 |

---

## 6. On-page SEO spec (from `references/on-page-seo.md`)

All 15 categories addressed automatically by the site's PillarLayout + RecipeCardBlock + BaseLayout. Long-form additions (category 15) included: TOC + H2 id attributes + back-to-top link (following `/jerky-gun/` + `/vegan-jerky/` pattern).
