# Keyword Bank — `jerky gun` pillar

**Source:** SEMrush Keyword Overview (US, Desktop, 2026-08-03), `jerky-gun_broad-match_us_2026-08-03.csv` (34 broad-match variants), `jerky-gun_broad-match_us_2026-08-03 (1).csv` (6 how-to variants).

---

## Tier 1 — Head + Primary

| Keyword | US Vol | Global Vol | KD | CPC | Intent | SERP Features |
|---|---|---|---|---|---|---|
| **jerky gun** *(primary)* | **5,400** | 6,900 | **10** | $0.28 | Commercial | (from Overview screenshot — full SERP-feature list not in Overview view; see broad-match variants for signals) |

---

## Tier 2 — Cluster heads (spoke candidates, ≥ 100/mo)

| Keyword | Vol | KD | Intent | Notes |
|---|---|---|---|---|
| lem jerky gun | 880 | 15 | Info + Transactional | Brand spoke → LEM Jerky Cannon® review page |
| smoking gun jerky | 390 | 34 | Info + Navigational | *Different product* (culinary smoking gun); intent-splits — skip |
| cabela's jerky gun | 210 | 21 | Info + Transactional | Retailer spoke (bundle with Cabelas 70/mo variant) |
| jerky gun recipe | 210 | 10 | Informational | Recipe collection spoke |
| beef jerky gun walmart | 170 | 30 | Info + Transactional | Retailer spoke |
| jerky gun recipes | 170 | 9 | Informational | Merge with `jerky gun recipe` (same intent, plural) |
| lem products jerky gun | 170 | 13 | Info + Transactional | Alt-phrasing → same LEM spoke |
| nesco jerky gun | 170 | 12 | Info + Transactional | Brand spoke |
| deer jerky gun | 110 | 5 | Info + Transactional | Game-meat variant → covered as pillar H3, not a spoke |

## Tier 3 — Long-tail / modifiers (< 100/mo, cluster tail)

| Keyword | Vol | KD | Intent | Home |
|---|---|---|---|---|
| ground beef jerky gun | 90 | 7 | Info + Commercial | Pillar body — the recipe demo |
| hamburger jerky gun | 90 | 9 | Info | Pillar body (synonym for ground beef) |
| weston jerky gun | 90 | 6 | Info + Transactional | Brand-comparison table on pillar |
| cabelas jerky gun | 70 | 25 | Info | Merged into `cabela's jerky gun` spoke |
| how to use a jerky gun | 70 | 14 | Info | Pillar H2 |
| how to use jerky gun | 70 | 20 | Info | Merged with above |
| nesco beef jerky gun | 70 | 16 | Info + Transactional | Brand table row |
| what is a jerky gun | 70 | 13 | Info | Pillar answer-first opener + H2 |
| jerky cannon gun | 50 | 9 | Info | Pillar body (LEM branding synonym) |
| jerky gun tips | 50 | 11 | Info + Commercial | Pillar H2 |
| jerky maker gun | 50 | 9 | Info + Transactional | Synonym — folded into body |
| jerky shooter gun | 50 | 9 | Info | Synonym — folded into body |
| milwaukee jerky gun | 50 | 21 | Info | Novelty (DIY caulk-gun conversion) — pillar body sidebar |
| walmart jerky gun | 50 | 29 | Info + Transactional | Retailer body mention |
| beef jerky gun recipe | 40 | 13 | Info | Recipe spoke |
| diy jerky gun | 40 | 11 | Info | Pillar body sidebar (Milwaukee/caulk-gun DIY) |
| food dehydrator jerky gun | 40 | 13 | Info + Transactional | Pillar body (dehydrator pairing) |
| how to make beef jerky with a jerky gun | 40 | 0 | Info | Pillar H2 + Recipe schema |
| how to make jerky with a jerky gun | 40 | 6 | Info | Merged with above |
| how to make jerky with jerky gun | 40 | 8 | Info | Merged with above |
| jerky gun tractor supply | 40 | 22 | Info | Retailer body mention |
| jerky tube gun | 40 | 4 | Info | Synonym — folded into body |
| chard jerky gun | 30 | 6 | Info | Brand-table row |
| mossy oak jerky gun | 30 | 22 | Info | Brand-table row |

**Total pillar-addressable volume:** ~8,720 (primary 5,400 + variants).

---

## SERP-feature map (per keyword group → what to build)

| Group | Features that fire | On-page asset that earns it |
|---|---|---|
| Primary head (`jerky gun`, `what is a jerky gun`) | AI Overview, Image pack, Video carousel, PAA, Sitelinks | Answer-first opener (40–58 words) + 6 keyword-alt images + FAQPage schema |
| Recipe cluster (`jerky gun recipe(s)`, `beef jerky gun recipe`, `how to make jerky with a jerky gun`) | AI Overview, Recipes, Video, PAA | Embedded Recipe schema (RecipeCardBlock) with ground-beef jerky gun recipe |
| Brand cluster (`lem jerky gun`, `nesco jerky gun`, `weston jerky gun`, `cabela's jerky gun`) | Sitelinks, Image pack, Popular products, Knowledge panel, PAA | Brand-by-brand comparison table on pillar; separate LEM spoke |
| How-to cluster (`how to use a jerky gun`, `jerky gun tips`) | Video, PAA, Short videos, AI Overview | Step-by-step H2 with numbered ordered list; USDA-cited temp block |
| Ground-meat cluster (`ground beef jerky gun`, `hamburger jerky gun`, `deer jerky gun`) | AI Overview, Video carousel, PAA, Recipes | Pillar H2 + game/deer sidebar (game-meat safety note) |
| DIY cluster (`diy jerky gun`, `milwaukee jerky gun`) | Video carousel, Image pack | Sidebar block; not a full spoke (thin volume) |
| Retailer cluster (`walmart`, `tractor supply`, `cabela's`, `beef jerky gun walmart`) | Popular products, Related searches | Brand table row with "where to buy" column (no affiliate links yet — rank-first) |

---

## Overrides against pure-volume ordering (H2 order in the pillar)

Per master-prompt Phase 1 rule: *"default to search-volume order, BUT override it when intent logic demands."*

- **What is a jerky gun (70)** goes *before* the higher-volume brand keywords (`lem jerky gun` 880), because a definition H2 must precede brand comparison — otherwise the reader can't judge brands.
- **How to use a jerky gun (70+70)** goes *before* the recipe H2 (`jerky gun recipe` 210), because you must know the tool operates before a recipe makes sense.
- **Ground beef jerky gun (90)** goes *before* game-meat variants because ground beef is the default reader assumption.
- **Brand table (LEM 880 + Nesco 170 + Weston 90 + others)** goes *after* how-to, because brand choice is downstream of "does this thing work for me at all."

Final H2 order: definition → nozzle types → meat prep → cure → load → operate → temperature → doneness → cleaning → troubleshooting → brand comparison → jerky-gun-vs-slicer → recipe card → FAQ.
