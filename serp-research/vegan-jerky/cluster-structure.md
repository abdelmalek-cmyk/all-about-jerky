# Cluster Structure — `vegan jerky` (hub + 5 spokes)

## Hub

**`/vegan-jerky/`** — pillar page (this build).
- Primary: **vegan jerky** (2,900/mo).
- Direct pillar-addressable volume: ~3,140 (primary + all 12 keyword-cluster heads absorbed).
- Format: hybrid guide + embedded recipe (see `serp-teardown.md`).

## Spokes (5, to be built in later sessions)

### Spoke 1 — `/vegan-jerky-recipes/` (recipe collection)
- Primary keyword: `how to make vegan jerky` + variants (~60/mo combined).
- Format: recipe listicle — 5+ soy-curl, seitan, mushroom, tofu, and eggplant recipes, each with own Recipe schema.
- Owns: cross-recipe cluster feeding the pillar's single embedded recipe.
- Links up: `/vegan-jerky/`.

### Spoke 2 — `/best-vegan-jerky-brands/` (brand deep-dive)
- Primary: `where to buy vegan jerky` + brand-specific tails (~40+/mo).
- Format: brand listicle — 8-12 brand entries with honest impressions (no fabricated ratings).
- Owns: the brand-comparison intent the pillar table only skims.
- Links up: `/vegan-jerky/`.

### Spoke 3 — `/soy-curls-jerky/` (ingredient-focused recipe)
- Primary: `how to make vegan jerky with soy curls` + `how to make vegan jerky out of soy curls` (~0/mo but strong long-tail).
- Format: dedicated soy-curl technique + recipe page.
- Rationale: soy curls are the go-to home vegan-jerky ingredient; deserves its own page for topical authority.
- Links up: `/vegan-jerky/`, `/vegan-jerky-recipes/`.

### Spoke 4 — `/is-vegan-jerky-healthy/` (nutrition deep-dive)
- Primary: `is vegan jerky healthy` (20/mo).
- Format: comparison guide + macros table + protein/sodium/fat analysis by brand.
- Rationale: 20/mo is small but conversion-quality intent; also a distinct AEO target.
- Links up: `/vegan-jerky/`.

### Spoke 5 — `/louisville-vegan-jerky-review/` (brand-specific review)
- Primary: `where to buy louisville vegan jerky` + `what is louisville vegan jerky made of` + brand tails (~40+/mo combined).
- Format: honest brand review (LVJCO is the #1 brand in the SERP).
- Rationale: LVJCO owns slot 1 with brand authority; a comparison review from a jerky-focused site can rank alongside for adjacent queries.
- Links up: `/vegan-jerky/`, `/best-vegan-jerky-brands/`.

---

## Internal linking rules

**Pillar → spokes** (anchor text = spoke's primary keyword):
- "vegan jerky recipes" → `/vegan-jerky-recipes/`
- "best vegan jerky brands" → `/best-vegan-jerky-brands/`
- "soy curls jerky" → `/soy-curls-jerky/`
- "is vegan jerky healthy" → `/is-vegan-jerky-healthy/`
- "Louisville Vegan Jerky" → `/louisville-vegan-jerky-review/`

**Spokes → pillar** (all spokes link back with anchor "vegan jerky" in a related-links block).

**Spokes ↔ siblings** (brand review ↔ best-brands listicle; recipes ↔ soy-curl page; healthy ↔ best-brands).

**Pillar → existing site pages** (already-live, high-value):
- `/ground-beef-jerky/` (anchor: "ground beef jerky") — comparison in the "vegan vs beef" section
- `/best-meat-for-beef-jerky/` (anchor: "traditional beef jerky") — cross-reference for beef readers
- `/how-to-make-beef-jerky/` (anchor: "how to make beef jerky") — cross-reference
- `/best-dehydrator-for-jerky/` (anchor: "dehydrator") — mentioned in the how-to section
- `/fruit-jerky/` (anchor: "fruit jerky") — site's other non-meat pillar; natural sibling

**Existing pages → new pillar** (inbound link opportunities):
- `/fruit-jerky/` — the site's existing non-meat pillar; add "curious about plant-based? see our vegan jerky guide"
- Possibly `/beef-jerky-seasoning/` — passing mention that "seasonings also work with vegan bases like soy curls → see vegan jerky"

---

## Ordering rule (from master prompt Phase 1)

**Default: search-volume-order H2s.** Overrides for intent logic — logged in `keyword-bank.md`.
