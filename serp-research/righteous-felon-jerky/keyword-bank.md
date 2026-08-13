# Keyword Bank — `righteous felon jerky` pillar

**Source:** SEMrush Keyword Overview (US Desktop 2026-08-12), 2 CSVs: broad-match (~18 keywords) + question-keywords (10).

## Filter notes

The broad-match CSV includes two categories of keywords:
- **RF-branded keywords** (target for THIS pillar)
- **Generic side-cluster keywords** (`craft jerky` 1300, `craft beef jerky` 480, `the good jerky` 110, `jrky` 30 misspelling, `og hickory beef stick` 90 could be branded or generic) — these belong to different pillars (potentially a future `/craft-beef-jerky-brands/`).

The sidebar Keyword Strategy shows biltong/meat-stick generics — those are entirely different pillars, not this one.

---

## Tier 1 — Head + Primary

| Keyword | US Vol | Global | KD | CPC | Comp Density | Intent |
|---|---|---|---|---|---|---|
| **righteous felon jerky** *(primary)* | **6,600** | 6,900 | **23** | $2.71 | 1.00 | Navigational |

Related head-tier synonyms (folded into pillar naturally):
- righteous felon beef jerky (from `beef jerky righteous felon` 30/mo reversed)
- rf beef jerky (30/mo)
- rf beef sticks (50/mo)

---

## Tier 2 — Cluster heads (H2 candidates, each ≥ 40/mo)

Per user's volume-backed rule (every H2 = real-volume keyword):

| Keyword | Vol | KD | Intent | Where handled in pillar |
|---|---|---|---|---|
| righteous felon beef sticks | 390 | 23 | Info+Trans | Beef sticks H2 |
| righteous felon beef stick | 210 | 14 | Info+Trans | Merged into beef sticks H2 |
| righteous felon habanero beef jerky | 210 | (0 in CSV) | Info | Flavor H2 (highest-vol flavor) |
| righteous felon meat sticks | 210 | 15 | Info+Trans | Meat sticks H2 (product-line synonym) |
| righteous felon baby blues bbq beef jerky | 140 | 7 | Info | Flavor H2 (needs "legacy/collab" clarification) |
| og hickory beef stick | 90 | 10 | Info+Trans | RF OG Hickory H2 (RF's flagship) |
| righteous felon jerky where to buy | 70 | 14 | Info+Trans | Where-to-buy H2 |
| righteous felon turkey jerky | 70 | 11 | Info+Trans | Turkey jerky H2 |
| rf beef sticks | 50 | 16 | Info | Merged into beef sticks H2 |
| righteous felon turkey stick | 50 | 7 | Info+Trans | Merged into turkey jerky H2 |
| righteous felon beef jerky review | 40 | 9 | Info+Commercial | Merged into verdict H2 |
| righteous felon jerky story | 40 | 24 | Info | Brand story H2 |

---

## Tier 3 — Question keywords (from second CSV)

| Keyword | Vol | KD | Intent | Where handled |
|---|---|---|---|---|
| is righteous felon jerky good | 30 | — | Info | Verdict H2 |
| where is righteous felon jerky made | 30 | — | Info | Brand-story H2 body (Chester County PA) |
| where to buy righteous felon jerky | 30 | 18 | Trans | Merged into where-to-buy H2 |
| is righteous felon jerky healthy | 20 | — | Info | Health H2 |
| where can i buy righteous felon jerky | 20 | — | Info | Merged into where-to-buy |
| who owns righteous felon jerky | 20 | — | Info | Brand-story H2 body (Brendan Cawley et al.) |
| is righteous felon jerky halal | 10 | — | Info | Halal H2 (unique long-tail) |
| who owns righteous felon craft jerky | 10 | — | Info | Merged into who-owns |
| is righteous felon beef jerky healthy | 0 | — | Info | Merged into health H2 |
| is righteous felon jerky legit | 0 | — | Info | Body mention within verdict H2 |

---

## Tier 4 — Long-tail / body-fold (< 20/mo, folded into prose)

- beef jerky righteous felon (30) — synonym; folded
- rf beef jerky (30) — abbreviation; body mention
- jrky (30) — misspelling; NOT for this pillar (generic, would dilute focus)

---

## Generic keywords SKIPPED (they belong to separate future pillars)

Explicitly not folded here because they'd dilute the branded focus:

- **craft jerky** (1,300) → future `/craft-beef-jerky-brands/` pillar
- **craft beef jerky** (480) → same future pillar
- **the good jerky** (110) → generic; skip
- Biltong-related sidebar keywords → future biltong pillar
- Meat-stick generic sidebar keywords → covered by existing `/jerky-gun/` context

---

## Total pillar-addressable volume

- Head + synonyms: ~6,700/mo
- Tier 2 branded tails: ~1,400/mo
- Tier 3 questions: ~180/mo
- **Combined addressable: ~8,300/mo of RF-branded intent**

---

## SERP-feature map (per keyword group → what to build)

| Group | Features that fire | On-page asset that earns it |
|---|---|---|
| Primary head (`righteous felon jerky`) | Sitelinks, Video, PAA, Knowledge panel, Popular products | Answer-first opener + 6 keyword-alt images + FAQPage schema + brand-comparison table |
| Flavor cluster (Habanero Escobar, Baby Blues BBQ, OG Hickory) | Sitelinks, AI Overview, Reviews, Video, Related searches, Popular products | Per-flavor H2 with honest impressions (no invented scores) |
| Product-line cluster (Beef Sticks, Meat Sticks, Turkey Jerky) | Sitelinks, Video, PAA, Knowledge panel, Popular products | Product-line H2s with named-entity coverage |
| Question cluster (`is X good/healthy/halal`, `where made`, `who owns`) | AI Overview, PAA | Direct-answer H2s + FAQ entries with verified data |
| Where-to-buy | Sitelinks, Reviews, Popular products, Related searches | Where-to-buy H2 with retailer breakdown |
| Review (`righteous felon jerky review`) | AI Overview, Reviews, Video carousel | **Review schema (schema.org/Review)** — same pattern as Old Trapper pillar |

---

## Overrides against pure-volume ordering (H2 order in the pillar)

Per master-prompt Phase 1 rule: *"default to search-volume order, BUT override it when intent logic demands."*

- **Habanero Escobar (210) goes before OG Hickory (90)** by volume, but OG Hickory is RF's flagship/founding recipe. Cole should introduce the flagship first, then the highest-vol flavor. Override: **OG Hickory first, then Habanero Escobar**.
- **Product-line H2s** (beef sticks, meat sticks, turkey) go AFTER flavor H2s because flavor is the primary intent for a branded search — most people know beef jerky exists; they want to know what flavors RF makes.
- **Where-Made / Who-Owns / Brand Story** cluster together mid-pillar (reader has product context by that point).
- **Verdict H2 (Is RF Good)** goes last as summary + rating.

**Final H2 order:**
1. Righteous Felon OG Hickory Beef Jerky (90) — flagship flavor first
2. Righteous Felon Habanero Escobar Beef Jerky (210) — highest-vol flavor
3. Righteous Felon Baby Blues BBQ Beef Jerky (140) — legacy/collab flavor with clarification
4. Righteous Felon Beef Sticks (390+210+50 = **650 combined**) — product line
5. Righteous Felon Meat Sticks (210) — product line synonym
6. Righteous Felon Turkey Jerky (70+50 = **120 combined**) — non-beef product
7. Where Is Righteous Felon Jerky Made (30) — Chester County PA origin
8. Who Owns Righteous Felon Jerky (30 combined) — founder + brand
9. Is Righteous Felon Jerky Healthy (20) — nutrition
10. Is Righteous Felon Jerky Halal (10) — unique long-tail
11. Where to Buy Righteous Felon Jerky (150 combined) — retail breakdown
12. Is Righteous Felon Jerky Good (30 + 40 review + 40 story = **110 combined**) — verdict + Cole's rating

12 H2s, all volume-backed. ✓
