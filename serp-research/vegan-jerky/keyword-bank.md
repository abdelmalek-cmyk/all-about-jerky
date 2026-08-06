# Keyword Bank — `vegan jerky` pillar

**Source:** SEMrush Keyword Overview (US, Desktop, 2026-08-06), `vegan-jerky_all-keywords_us_2026-08-06.csv` (52 keywords, filtered).

## Filter notes

Removed 3 false-positive keywords from the CSV that are unrelated to vegan jerky:
- `how to stop new vegas jerkiness` (Fallout: New Vegas video game FPS issue)
- `how to stop new vegas jerkiness with high fps` (same game)
- `what does tales junktown jerky vendor do new vegas` (Fallout NPC)

Also deprioritized 3 hyper-local keywords with 0 volume:
- `where to get the best beef jerky in las vegas` (local intent, not vegan)
- `are 51 jerky near las vegas` (garbled — likely "Area 51 jerky")
- `where do they sell the card jerky in vegas` (unclear)

---

## Tier 1 — Head + Primary

| Keyword | US Vol | Global Vol | KD | CPC | Comp Density | Intent |
|---|---|---|---|---|---|---|
| **vegan jerky** *(primary)* | **2,900** | 4,900 | **32** | $0.74 | 1.00 | Informational |

Volume distribution: US 2,900 · UK 390 · CA 260 · DE 210 · AU 170 · CZ 110 · Other 830.

---

## Tier 2 — Cluster heads (spoke / body-topic candidates)

CSV lists ~12 keywords at 20/mo. Grouped by intent:

| Group | Keywords (all 20/mo unless noted) | Combined vol | Where handled |
|---|---|---|---|
| **How-to (recipe cluster)** | how to make vegan jerky · how to make vegan beef jerky · how to make vegan jerky in dehydrator | 60 | Pillar H2 + embedded Recipe |
| **What-is (definition cluster)** | what is vegan jerky · what is vegan jerky made from · what is vegan jerky made of · what is vegan jerky made out of | 80 | Pillar answer-first opener + H2 |
| **Comparison (is-it cluster)** | is beef jerky vegan · is beyond meat jerky vegan | 40 | Pillar H2 (direct-answer block, info-gain) |
| **Health cluster** | is vegan jerky healthy | 20 | Pillar H2 (nutritional comparison, info-gain) |
| **Buying cluster** | where to buy vegan jerky · where to buy louisville vegan jerky | 40 | Pillar body (brand-comparison table + where-to-buy list) |

**Total addressable ex-primary: ~240/mo covered on-page.**

---

## Tier 3 — Long-tail / modifiers (0/mo, informational body-fold)

Long-tails are 0/mo per SEMrush but they signal real (rare) intent. Fold into body prose naturally:

| Keyword | Home on the pillar |
|---|---|
| how to make chewy vegan jerky | Recipe → texture tips |
| how to make chewy vegan jerky with seitan | Ingredient section — seitan variant note |
| how to make homemade vegan jerky | Recipe H2 (synonym) |
| how to make vegan mushroom jerky | Ingredient section — mushroom variant |
| how to make vegan seitan jerky | Ingredient section — seitan variant |
| how to make vegan tofu jerky | Ingredient section — tofu variant note |
| how to make vegan jerky at home | Recipe H2 (synonym) |
| how to make vegan jerky out of soy curls / with soy curls | Recipe body (this IS the recipe) |
| how to make vegan eggplant jerky | Sidebar mention |
| how to make non soy vegan jerky | Soy-free sub-section (dietary sub-cluster) |
| how to make louisville vegan jerky | Brand entry — copycat guidance |
| can i make vegan jerky from seitan | Answered inline in recipe variants |
| how do you make vegan jerky · how make vegan jerky | Recipe H2 |
| are there vegan alternatives to jerky · vegan alternatives to meat jerky · vegan jerky alternatives | Intro / definition H2 |
| is beyond jerky vegan | Brand-comparison table row |
| is vegan jerky gluten free | Sub-cluster + FAQ answer |
| may wah vegan jerky | Brand-comparison table row (Asian-market brand) |
| is primal vegan jerky a dog treat | Brand entry — clarification note |
| what is louisville vegan jerky made of · what is vegan beef jerky made of | Ingredient section |
| where can i buy louisville / go slim / unisoy / primal vegan jerky | Where-to-buy section |
| where would vegan jerky be found in a store | Where-to-buy section |
| does whole foods sell vegan jerky · does whole foods sell louisville vegan jerky | Where-to-buy section |
| where is the louisville vegan jerky company located | Brand entry (LVJCO — Louisville, KY per CSV cluster) |
| why is vegan jerky so expensive | FAQ answer |

---

## SERP-feature map (per keyword group → what to build)

| Group | Features that fire | On-page asset that earns it |
|---|---|---|
| Primary head (`vegan jerky`) | AI Overview likely, PAA, Sitelinks (long-term) | Answer-first opener + 6 keyword-alt images + full FAQ schema |
| Recipe cluster (`how to make vegan jerky` variants) | Recipes, PAA, Video (can't earn from text) | Embedded Recipe schema with soy-curl oven recipe |
| What-is cluster | AI Overview, PAA | Answer-first opener + "What Is Vegan Jerky" H2 with named-entity definition |
| Comparison cluster (`is beef jerky vegan`) | PAA, AI Overview | Direct-answer H2 + FAQ entry |
| Buying cluster | Popular products, Related searches | Brand-comparison table + where-to-buy section (no affiliate links yet) |
| Brand-specific tails (`louisville vegan jerky` etc.) | Sitelinks, Knowledge panel (brand-owned; not earnable) | Brand-comparison table rows with named entities |

---

## Overrides against pure-volume ordering (H2 order in the pillar)

Per master-prompt Phase 1 rule: *"default to search-volume order, BUT override it when intent logic demands."*

- **"What Is Vegan Jerky" (80 combined)** goes first even though the recipe cluster (60) and "is beef jerky vegan" comparison (40) are lower volume — definition-before-anything-else is standard information architecture. Reader can't judge brands or make a recipe if they don't first know what the thing is.
- **"How to Make Vegan Jerky" (60)** goes before "Best Vegan Jerky Brands" (buying 40) — home cooks are more engaged than one-time buyers; the recipe is also the schema-carrying H2.
- **"Is Beef Jerky Vegan" (20)** goes early despite low volume — it's a definitional cleanup question that clears reader confusion before the deeper sections. Info-gain gold.
- **"Best Vegan Jerky Brands" (buying — where-to-buy tail)** goes AFTER recipe because Cole is a pitmaster; the site's authenticity requires "here's how to make it yourself first" before "here are the brands to buy."

Final H2 order: what-is → ingredients → is-beef-jerky-vegan → recipe → best brands → is-it-healthy → where-to-buy → soy-free/gluten-free variants → why-so-expensive → wrap-up.
