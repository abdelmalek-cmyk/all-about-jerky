# Cluster Structure — `jerky gun` (hub + 5 spokes)

## Hub

**`/jerky-gun/`** — pillar page (this build).
- Primary keyword: **jerky gun** (5,400/mo).
- Total pillar-addressable volume (primary + short-tail merged): ~4,600 covered directly on the page.
- Format: comprehensive guide + embedded recipe (see `serp-teardown.md`).

## Spokes (5, to be built in later sessions)

### Spoke 1 — `/lem-jerky-gun/` (LEM Jerky Cannon® review)
- Primary: **lem jerky gun** (880) + `lem products jerky gun` (170) = 1,050 combined.
- Format: brand-focused informational review (specs from the LEM product page, use cases, pairings — no fabricated ratings).
- Owns: LEM Jerky Cannon feature set, capacity, accessories, seasoning kits, hand-wash rule.
- Links up: pillar `/jerky-gun/` (anchor "jerky gun").
- Links across: `/nesco-jerky-gun/`, `/weston-jerky-gun/`.

### Spoke 2 — `/jerky-gun-recipes/` (recipe collection)
- Primary: **jerky gun recipes** (170) + `jerky gun recipe` (210) + `beef jerky gun recipe` (40) = 420 combined.
- Format: recipe listicle — 6 to 8 seasoning/flavor variations for ground-beef jerky gun jerky, each with its own Recipe schema.
- Owns: cross-recipe cluster feeding the pillar's single embedded recipe.
- Links up: pillar `/jerky-gun/`, `/ground-beef-jerky/`.

### Spoke 3 — `/nesco-jerky-gun/` (Nesco brand)
- Primary: **nesco jerky gun** (170) + `nesco beef jerky gun` (70) = 240 combined.
- Format: brand comparison-lite (Nesco lineup vs Nesco dehydrator pairing).
- Links across: LEM, Weston spokes.

### Spoke 4 — `/how-to-use-a-jerky-gun/` (deep tutorial + video-first)
- Primary: **how to use a jerky gun** (70) + `how to use jerky gun` (70) + `how to make jerky with a jerky gun` (40 × 3 variants) = 260+ combined.
- Format: step-by-step tutorial with numbered lists, higher image density, HowTo schema.
- Distinct from pillar: the pillar covers "how to use" as one H2; this spoke IS the tutorial, deeper.
- Reason to split: three "how to make jerky with a jerky gun" long-tails all lead here; the pillar can't rank for all of them without dilution.

### Spoke 5 — `/jerky-gun-vs-jerky-slicer/` (comparison)
- Primary: no exact-match keyword — targets the gap identified in `serp-teardown.md` and pulls related searches for `jerky slicer`, `jerky knife`, `jerky cutter`, `ground vs whole muscle jerky`.
- Format: comparison guide (which tool to buy, when to use each, cost + texture + shelf-life tables).
- Reason to include: no other site owns the comparison and it lets us internally link to both the pillar and the existing `/how-to-make-beef-jerky/` and `/ground-beef-jerky/` pages.

---

## Internal linking rules

**Pillar → spokes** (anchor text = spoke's primary keyword):
- "LEM jerky gun" → `/lem-jerky-gun/`
- "jerky gun recipes" → `/jerky-gun-recipes/`
- "Nesco jerky gun" → `/nesco-jerky-gun/`
- "how to use a jerky gun" → `/how-to-use-a-jerky-gun/`
- "jerky gun vs jerky slicer" → `/jerky-gun-vs-jerky-slicer/`

**Spokes → pillar** (all spokes link back with anchor "jerky gun" in a related-links block).

**Spokes ↔ siblings** (LEM ↔ Nesco ↔ Weston; recipes ↔ how-to; comparison ↔ how-to).

**Pillar → existing site pages** (already-live, high-value):
- `/ground-beef-jerky/` (anchor: "ground beef jerky") — most relevant existing pillar for the recipe H2
- `/how-to-make-beef-jerky/` (anchor: "how to make beef jerky") — funnel from operate H2
- `/best-dehydrator-for-jerky/` (anchor: "best dehydrator for jerky") — dehydrator-pairing sidebar
- `/beef-jerky-marinade/` (anchor: "beef jerky marinade") — cure section
- `/beef-jerky-seasoning/` (anchor: "beef jerky seasoning") — flavor variants sidebar

**Existing pages → new pillar** (inbound link opportunities to open on this build):
- `/ground-beef-jerky/` — add a "shape it like a pro with a jerky gun" mention → link to `/jerky-gun/`
- `/how-to-make-beef-jerky/` — the "shaping" section can mention the jerky gun as an option → link to `/jerky-gun/`
- `/best-dehydrator-for-jerky/` — passing mention of jerky gun pairing

---

## Ordering rule (from master prompt Phase 1)

**Default: search-volume-order H2s.** Overrides for intent logic — logged in `keyword-bank.md` under "Overrides." Applies to: definition-before-brand, tutorial-before-recipe, ground-before-game.
