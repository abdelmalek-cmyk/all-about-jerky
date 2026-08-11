# On-Page + AEO Reference — `/meat-for-beef-jerky-in-dehydrator/`

Companion to `serp-teardown.md` and `keyword-bank.md`. Every item is a build-time check.

---

## 1. On-page technical checklist

| Item | Value / Rule |
|---|---|
| **URL** | `https://allaboutjerky.com/meat-for-beef-jerky-in-dehydrator/` (exact-match slug — differentiates from `/dehydrator-beef-jerky/` and `/best-meat-for-beef-jerky/`) |
| **Title tag** | `Best Meat for Beef Jerky in a Dehydrator (Ranked)` (52 chars, keyword-first) |
| **Meta description** | `Best meat for beef jerky in a dehydrator: eye of round tops the list, then top round, flank steak. Cuts ranked, time per cut, and a foolproof recipe.` (150 chars) |
| **H1** | `Meat for Beef Jerky in a Dehydrator: Which Cut to Use (Ranked)` |
| **H2 map** | See section 3 |
| **Keyword density** | Natural — primary phrase 12–18× across 1,700–1,900 words = 0.7–1.1% |
| **First 100 words** | Contains exact "meat for beef jerky in a dehydrator" 1–2× + eye of round pick |
| **Images** | 6 total (hero + 5 in-body); all `.webp`; keyword-aware alts + filenames |
| **Internal links** | 5+ (both existing sibling pillars + related pages) |
| **External links** | 2 authoritative (USDA FSIS jerky safety + osu.edu factsheet) |
| **Long-form additions** | TOC + H2 id attributes + back-to-top link (per category 15 of on-page-seo.md) |

---

## 2. AEO (Answer Engine Optimization)

### Answer-first opener (40–58 words, bolded)

**Target draft (54 words):**
> **The best meat for beef jerky in a dehydrator is eye of round — it's lean (under 5% fat), uniform in shape for easy slicing, and priced well. Top round, bottom round, and flank steak are strong runners-up. Trim all visible fat, slice ⅛-inch thick against the grain, and dehydrate at 160°F for 4–6 hours.**

### Question-shaped H2/H3s

| H2 (from keyword-bank.md) | PAA question it mirrors |
|---|---|
| Best Meat for Beef Jerky in a Dehydrator | "What is the best meat for beef jerky in a dehydrator?" |
| Best Cut of Meat for Beef Jerky in a Dehydrator | "What cut of beef is best for dehydrator jerky?" |
| What Meat to Use for Beef Jerky in a Dehydrator | "What meat to use for beef jerky in a dehydrator?" |
| How Lean Does the Meat Need to Be | "How lean does the meat need to be?" |
| What Temperature to Dehydrate Beef Jerky | "What temperature do you dehydrate beef jerky at?" |

### Named entities

- **Cuts:** eye of round, top round, bottom round, flank steak, sirloin tip, London broil, brisket (as a "why not" mention).
- **Authorities:** USDA FSIS, Ohio State University Extension.
- **Site pillars:** `/best-meat-for-beef-jerky/`, `/dehydrator-beef-jerky/`, `/jerky-gun/`, `/best-dehydrator-for-jerky/`.
- **Author:** Cole Mercer.

---

## 3. H2 map (final — 9 H2s, all volume-backed, reader-first order)

1. **Best Meat for Beef Jerky in a Dehydrator** (kw: `best meat for beef jerky in dehydrator` 170 + primary head 14,800) — direct-answer H2 with ranked list
2. **Best Cut of Meat for Beef Jerky in a Dehydrator** (kw: `best cut of meat for beef jerky in dehydrator` 20 + `best meat to use...` 20 = 40) — deeper cut analysis with comparison table (info-gain #1)
3. **What Meat to Use for Beef Jerky in a Dehydrator** (kw: `what meat to use for beef jerky in dehydrator` 20) — decision framework
4. **How Lean Should the Meat Be for Dehydrator Jerky** (kw: cluster `best meat for jerky` folded — leanness is the universal question)
5. **How to Slice Meat for Dehydrator Jerky** (kw: cluster `best cut of meat for jerky` folded — slicing follows cut choice)
6. **Beef Jerky Recipe for a Dehydrator** (kw: cluster `jerky in dehydrator`) — embedded RecipeCardBlock
7. **What Temperature to Dehydrate Beef Jerky** (kw: cluster `what temperature to dehydrate beef jerky`) — USDA-cited
8. **How Long Each Cut Takes in a Dehydrator** (kw: cluster time-related; info-gain #2 — nobody publishes this)
9. **Ground Beef vs Whole Muscle in a Dehydrator** (kw: adjacent cluster; info-gain #3 — none of top 3 covers this)

**Total H2s: 9. Target range: 8–10. ✓**

---

## 4. Schema plan

- **Article** — via PillarLayout (auto)
- **BreadcrumbList** — via PillarLayout (auto)
- **FAQPage** — via PillarLayout (8 PAA Q&A)
- **Recipe** — via RecipeCardBlock inside H2 #6 (beef jerky in dehydrator recipe with eye of round)

---

## 5. Competitor gap analysis

| Gap | Top 3 | This pillar |
|---|---|---|
| Cuts ranked by DEHYDRATOR fit specifically | None — all rank cuts generally | H2 #2 comparison table |
| Time-per-cut quantified | None | H2 #8 dedicated table |
| Ground vs whole muscle in dehydrator | jerkyholic mentions ground briefly; osu covers it separately as a class | H2 #9 direct comparison + cross-link to `/jerky-gun/` |
| Anti-cannibalization link out to sibling pillars | N/A | 5+ internal links so Google reads topic cluster, not duplicate |

---

## 6. Cannibalization mitigation (explicit)

Since user chose Option A (build new pillar despite the risk), the pillar is engineered to look and rank DIFFERENTLY from the two existing pillars:

- **H1 leads with "Meat"** (not "Dehydrator") → semantically distinct from `/dehydrator-beef-jerky/`
- **H2 #1 is the direct answer** (`Best Meat for...`) → semantically distinct from `/best-meat-for-beef-jerky/` (that page's H1 is "Best Meat for Beef Jerky")
- **Recipe is embedded but slimmer** than `/dehydrator-beef-jerky/`'s equivalent
- **Body links flow OUT** to both sibling pillars → passes signal that this page is the specific-intent hub while the older pillars serve their original intents
- **Add inbound link** from `/dehydrator-beef-jerky/` to reinforce the topic cluster
