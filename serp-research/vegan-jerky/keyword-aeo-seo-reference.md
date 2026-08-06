# On-Page + AEO Reference — `/vegan-jerky/`

Companion to `serp-teardown.md` and `keyword-bank.md`. Every item here is a build-time check.

---

## 1. On-page technical checklist

| Item | Value / Rule |
|---|---|
| **URL** | `https://allaboutjerky.com/vegan-jerky/` (root-level pillar — matches `/fruit-jerky/`, `/venison-jerky/` non-meat/adjacent pattern) |
| **Title tag** | `Vegan Jerky Guide: What It Is, Best Brands & Recipe` (54 chars, keyword-first) |
| **Meta description** | `Vegan jerky guide: what it's made of, how to make it at home with soy curls, best brands (Louisville, Primal, Pan's) and how it compares to beef jerky.` (150 chars) |
| **H1** | `Vegan Jerky: The Complete Guide (What It Is, Brands & a Recipe)` |
| **H2 map** | See section 3 below |
| **Keyword density** | Natural — primary "vegan jerky" 20–30× across 2,200–2,500 words = 0.8–1.4% |
| **First 100 words** | Contains exact "vegan jerky" phrase 2–3× |
| **Images** | 6 total (hero + 5 in-body via ContentImage); all `.webp`; alts contain "vegan jerky" or a direct keyword; keyword-aware filenames |
| **Internal links** | 5–8 outbound (existing site pages + 5 spoke stubs) |
| **External links** | 2–3 authoritative (USDA FoodData Central for macros; brand websites for verification of what they're made of) |
| **Long-form additions** | TOC block after answer-box + H2 id attributes + back-to-top link (per `references/on-page-seo.md` category 15) |

---

## 2. AEO (Answer Engine Optimization)

### Answer-first opener (40–58 words, bolded, immediately after H1)

**Target draft (54 words):**
> **Vegan jerky is a plant-based chewy snack designed to mimic beef jerky, made from ingredients like soy protein, seitan (wheat gluten), mushrooms, pea protein, or jackfruit. It delivers similar salty, savory, umami-rich flavor and comparable protein per serving, and comes as both store-bought brands (Louisville Vegan Jerky, Pan's, Primal Strips) and homemade recipes.**

### Question-shaped H2/H3s (mirror PAA)

| H2 (from keyword-bank.md) | PAA question it mirrors |
|---|---|
| What Is Vegan Jerky | "What is vegan jerky?" + "made from/of/out of" |
| What Vegan Jerky Is Made Of | "What is vegan jerky made of?" |
| Is Beef Jerky Vegan | "Is beef jerky vegan?" (also "is Beyond Meat jerky vegan?") |
| How to Make Vegan Jerky | "How do you make vegan jerky?" |
| Best Vegan Jerky Brands | "Where to buy vegan jerky?" |
| Is Vegan Jerky Healthy | "Is vegan jerky healthy?" |

### Extractable formatting

- Short paragraphs (2–4 sentences).
- Numbered ordered lists for the recipe steps.
- 3 comparison tables (ingredient categories, brand comparison, nutritional vs beef).
- 1 recipe card (RecipeCardBlock) with printable step list.
- Bulleted tips block for the "How to Make" H2.

### Named entities

- **Brands:** Louisville Vegan Jerky Co (LVJCO), Primal Strips (Primal Spirit Foods), Pan's Mushroom Jerky, Beyond Meat, Country Archer, Perky Jerky, All Vegetarian, Little Jasmine, Unisoy, Noble Jerky, Off-Piste Provisions, BeLeaf, Jack & Friends, eat meati, AGRO, Savory Wild, Eat the Change, May Wah.
- **Ingredients:** soy protein isolate, textured vegetable protein (TVP), seitan/vital wheat gluten, pea protein, portabella/king oyster mushrooms, jackfruit, mycelium, soy curls (Butler brand).
- **Retailers:** Whole Foods, Amazon, Sprouts, Trader Joe's.
- **Authorities:** USDA FoodData Central.
- **Author:** Cole Mercer, All About Jerky pitmaster.

---

## 3. H2 map (final — 12 H2s, per keyword-bank.md ordering)

1. **What Is Vegan Jerky** (kw: `what is vegan jerky` 20 + `vegan jerky` head)
2. **What Vegan Jerky Is Made Of** (kw: `what is vegan jerky made from / of / out of` 60 combined) — ingredient-source guide (info-gain #1: none of the top 3 organize by ingredient this way)
3. **Is Beef Jerky Vegan** (kw: `is beef jerky vegan` 20 + `is beyond meat jerky vegan` 20 + `is beyond jerky vegan` 0) — direct-answer block (info-gain #2)
4. **How to Make Vegan Jerky** (kw: `how to make vegan jerky` 20 + `how to make vegan beef jerky` 20 + `how to make vegan jerky in dehydrator` 20 + long-tails) — embedded RecipeCardBlock
5. **Best Vegan Jerky Brands** (kw: `where to buy vegan jerky` 20 + `where to buy louisville vegan jerky` 20 + all brand-specific tails) — brand-comparison table
6. **Is Vegan Jerky Healthy** (kw: `is vegan jerky healthy` 20) — nutritional-comparison table vs beef jerky (info-gain #3)
7. **Louisville Vegan Jerky Company** (kw: `louisville vegan jerky` cluster) — highest-authority brand in the SERP
8. **Soy-Free and Gluten-Free Vegan Jerky** (kw: `is vegan jerky gluten free` + `how to make non soy vegan jerky` long-tails) — dietary sub-cluster (info-gain #4)
9. **Why Is Vegan Jerky So Expensive** (kw: `why is vegan jerky so expensive`)
10. **Where to Buy Vegan Jerky** (kw: buying cluster, `where would vegan jerky be found in a store`)
11. **Vegan Jerky vs Beef Jerky** — direct comparison (protein, price, ethics, texture) — folds `are there vegan alternatives to jerky` long-tails
12. **Homemade vs Store-Bought Vegan Jerky** — decision guide + wrap-up

**Total H2s: 12. Target range: 10–12. ✓**

---

## 4. Schema plan (JSON-LD blocks)

- **Article** — via PillarLayout (auto)
- **BreadcrumbList** — via PillarLayout (auto)
- **FAQPage** — via PillarLayout (pass 8 PAA Q&A pairs)
- **Recipe** — via RecipeCardBlock inside H2 #4 (soy-curl oven-baked vegan jerky)

---

## 5. Competitor gap analysis (from `serp-teardown.md`)

| Gap | Content pages | My pillar |
|---|---|---|
| Ingredient-source organized (soy/seitan/mushroom/pea/jackfruit) | Each mentions ingredients, none organizes by category | H2 #2 — dedicated ingredient breakdown |
| "Is beef jerky vegan?" direct answer | None cover it head-on | H2 #3 — direct-answer block + FAQ entry |
| Vegan vs beef nutritional comparison table | None | H2 #6 — proper macros table |
| Soy-free / gluten-free sub-cluster | None; only brief allergen mentions | H2 #8 |
| Recipe schema on the pillar | Only SarahsVeganKitchen has Recipe schema | RecipeCardBlock inside H2 #4 |
| TOC / long-form structure | None | Site's established pattern from `/jerky-gun/` |

---

## 6. Voice positioning (needs user approval — see outline proposal)

Cole Mercer is a beef pitmaster. Writing vegan jerky requires deliberate tone:

- **Do:** genuine curiosity, honest respect for craft, tried-it-himself framing, name real brands.
- **Don't:** patronize vegans, use "carnivore vs vegan" framing, make "at least it's not real meat" jokes, position vegan as a lesser option.
- **Voice adaptation:** Cole opens by acknowledging his beef background, then treats vegan jerky as a legitimate adjacent craft. First-person humble curiosity. E.g.: *"I've spent 15 years making beef jerky. When my niece went vegan last summer, I had to figure out how to send her a care package that wasn't just cured nothing. This is what I learned."*

---

## 7. On-page SEO spec (from `references/on-page-seo.md`)

All 15 categories addressed automatically by the site's PillarLayout + RecipeCardBlock + BaseLayout + this session's pillar work. Long-form additions (category 15) must be included: TOC block + H2 id attributes + back-to-top link (following `/jerky-gun/` pattern).
