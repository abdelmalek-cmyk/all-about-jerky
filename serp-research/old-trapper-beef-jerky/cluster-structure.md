# Cluster Structure — `old trapper beef jerky` (hub + 5 spokes)

## Hub

**`/old-trapper-beef-jerky/`** — pillar page (this build).
- Primary: **old trapper beef jerky** (9,900/mo).
- Direct pillar-addressable volume (primary + all Tier 2 + Tier 3 folded): ~19,500/mo.
- Format: honest independent third-party review (see `serp-teardown.md`).
- Schema: Article + FAQPage + BreadcrumbList + **Review** (new schema type).

## Spokes (5, to be built in later sessions)

### Spoke 1 — `/best-beef-jerky-brands/` (broader brand listicle)
- Primary: **beef jerky brands** (3,600/mo) + `jerky brands` (1,900/mo) = 5,500 combined.
- Format: listicle of top 10-15 US beef jerky brands. Old Trapper is one entry.
- Rationale: adjacent-volume keyword from the same CSV. Site currently has no brands listicle. High-value pillar; the Old Trapper pillar links to it as the broader category.

### Spoke 2 — `/premium-beef-jerky/` (higher-tier brand guide)
- Primary: **premium beef jerky** (1,300/mo).
- Format: comparison guide — Country Archer, People's Choice, Chomps, Duke's, etc. vs mass-market.
- Rationale: distinct intent (premium vs mass-market). Old Trapper pillar mentions in comparison contexts.

### Spoke 3 — `/old-trapper-peppered-beef-jerky-review/` (deep flavor review)
- Primary: `old trapper peppered beef jerky` (590) + `old trapper beef jerky peppered` (320) + `old trapper peppered jerky` (50) = **960 combined**.
- Format: single-flavor deep dive review. The pillar's peppered H2 gives this a solid anchor summary; the spoke goes deeper (side-by-side vs competitor peppered brands, taste-test notes, ideal pairings).

### Spoke 4 — `/beef-jerky-brands-at-costco/` (retail-channel listicle)
- Primary: cluster of `[brand] beef jerky costco` tails including `old trapper beef jerky costco` (110), `costco old trapper beef jerky` (70), + Kirkland/Chef's Cut/People's Choice Costco variants.
- Format: retailer-scoped listicle — what's actually at Costco, what's worth buying.
- Rationale: high-conversion retail intent; low competition; leverages the Old Trapper pillar's where-to-buy section.

### Spoke 5 — `/beef-jerky-nutrition-comparison/` (macros comparison across brands)
- Primary: cluster of `[brand] beef jerky nutrition` tails including `old trapper beef jerky nutrition` (90), `old trapper jerky nutrition` (70), plus Chomps/Country Archer/Jack Link's nutrition.
- Format: nutrition comparison table across 8-10 brands with sodium, protein, fat, sugar per oz.
- Rationale: builds on the same nutrition-focused work we did in `/low-sodium-beef-jerky/`. Complements the pillar without duplicating it.

---

## Internal linking rules

**Pillar → spokes** (anchor text = spoke's primary keyword):
- "beef jerky brands" → `/best-beef-jerky-brands/`
- "premium beef jerky" → `/premium-beef-jerky/`
- "Old Trapper peppered review" → `/old-trapper-peppered-beef-jerky-review/`
- "beef jerky brands at Costco" → `/beef-jerky-brands-at-costco/`
- "beef jerky nutrition comparison" → `/beef-jerky-nutrition-comparison/`

**Spokes → pillar** (all spokes link back with anchor "Old Trapper beef jerky").

**Spokes ↔ siblings** (best-brands ↔ premium ↔ Costco ↔ nutrition — natural cross-links).

**Pillar → existing site pages** (already-live, high-value):
- `/best-meat-for-beef-jerky/` (anchor: "best cuts for homemade beef jerky") — the "if you'd rather make it yourself" alternative
- `/how-to-make-beef-jerky/` (anchor: "how to make beef jerky") — cross-reference for DIY intent
- `/beef-jerky-marinade/` (anchor: "beef jerky marinade") — for reader who wants to replicate Old Trapper flavors at home
- `/low-sodium-beef-jerky/` (anchor: "low sodium beef jerky") — natural link from the health H2 (Old Trapper is high-sodium)

**Existing pages → new pillar** (inbound link opportunities to open on this build):
- `/best-meat-for-beef-jerky/` — passing mention that "commercial brands like Old Trapper use bottom round" → link to `/old-trapper-beef-jerky/`
- `/low-sodium-beef-jerky/` — the brand-comparison section could mention Old Trapper as a high-sodium counterexample → link

---

## Ordering rule (from master prompt Phase 1)

**Default: search-volume-order H2s.** Overrides for intent logic — logged in `keyword-bank.md`. Every H2 targets a real-volume CSV keyword.
