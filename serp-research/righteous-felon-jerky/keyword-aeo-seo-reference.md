# On-Page + AEO Reference — `/righteous-felon-jerky/`

Companion to `serp-teardown.md` and `keyword-bank.md`. Build-time check.

---

## 1. On-page technical checklist

| Item | Value / Rule |
|---|---|
| **URL** | `https://allaboutjerky.com/righteous-felon-jerky/` (root-level pillar — branded-review pattern from `/old-trapper-beef-jerky/`) |
| **Title tag** | `Righteous Felon Jerky Review: Flavors, Brand Story & Verdict` (60 chars) |
| **Meta description** | `Honest Righteous Felon Craft Jerky review from a pitmaster: every flavor rated, brand story, where to buy, and how it compares to mass-market and craft peers.` (155 chars) |
| **H1** | `Righteous Felon Jerky: An Honest Review from a Pitmaster` |
| **H2 map** | See section 3 below — 12 H2s, all volume-backed |
| **Keyword density** | Natural — "Righteous Felon" appears 30-45× across 2,200-2,500 words = 1.4-2.0% (product-review pages naturally have higher brand-name density) |
| **First 100 words** | Contains "Righteous Felon jerky" phrase 2-3× |
| **Images** | 6 total (hero + 5 in-body); all `.webp`; alts contain "Righteous Felon"; keyword-aware filenames |
| **Internal links** | 4-6 outbound (existing site pages + 5 spoke stubs) |
| **External links** | 2-3 authoritative (RF's own site for verifiable brand facts + potentially USDA for nutrition context) |
| **Long-form additions** | TOC + H2 ids + back-to-top (long-form ≥1500 words) |

---

## 2. AEO (Answer Engine Optimization)

### Answer-first opener (40–58 words, bolded, immediately after H1)

**Target draft (54 words):**
> **Righteous Felon is a craft beef jerky brand founded in 2011 in Chester County, Pennsylvania, known for bold outlaw-themed flavors like OG Hickory, Habanero Escobar, and Bourbon Franklin. Made from pasture-raised American black angus with no added hormones or preservatives, it sits firmly in the premium tier at roughly $3.50 per ounce.**

### Question-shaped H2/H3s (mirror PAA + CSV questions)

| H2 (from keyword-bank.md) | PAA/CSV question it mirrors |
|---|---|
| Where Is Righteous Felon Jerky Made | "Where is Righteous Felon jerky made?" (30/mo) |
| Who Owns Righteous Felon Jerky | "Who owns Righteous Felon jerky?" (30 combined) |
| Is Righteous Felon Jerky Healthy | "Is Righteous Felon jerky healthy?" (20) |
| Is Righteous Felon Jerky Halal | "Is Righteous Felon jerky halal?" (10) — unique long-tail |
| Is Righteous Felon Jerky Good | "Is Righteous Felon jerky good?" (30) |
| Where to Buy Righteous Felon Jerky | "Where to buy Righteous Felon jerky?" (150 combined) |

### Extractable formatting

- Short paragraphs (2–4 sentences).
- Bullet lists for flavor characteristics.
- 1-2 tables: flavor lineup with heat/flavor profile + craft-vs-mass comparison.
- Bulleted where-to-buy list.
- Direct-answer FAQ block.

### Named entities

- **Brand:** Righteous Felon Craft Jerky (Righteous Felon).
- **Founders/People:** Brendan "El Jefe" Cawley (founder), David "Mastermind" Martinsek (CFO), Collin "Chillstorm" Phelan (VP Ecommerce), Arielle (per manifesto — spouse of founder).
- **Location:** Chester County, Pennsylvania.
- **Founded:** 2011 (per manifesto).
- **Beef Jerky Products (verified):** OG Hickory, Bootleggin BBQ, Habanero Escobar, Teriyaki Balboa, Truffle-O Soldier, Bourbon Franklin, Maryland Monroe, Seoul Survivor.
- **Turkey Products:** Fowl Capone Turkey Jerky.
- **Biltong Products:** Darth Garlic Biltong, Nelson Mandilla Biltong, Ancho Villa Biltong.
- **Legacy/Collab Products:** Baby Blues BBQ (may be discontinued or collab-specific).
- **Retailers:** Amazon, JerkyBrands, Troopster, Hannaford, RF direct (righteousfelon.com).
- **Competitor brands (comparison context):** Country Archer, People's Choice, Chomps (craft peers); Old Trapper, Jack Link's (mass-market contrast).
- **Meat sourcing:** American family farms, pasture-raised black angus.
- **Author:** Cole Mercer, Bozeman Montana pitmaster.

---

## 3. H2 map (final — 12 H2s, per keyword-bank.md ordering, all volume-backed)

1. **Righteous Felon OG Hickory Beef Jerky** (kw: `og hickory beef stick` 90) — flagship first (override: intent-logic; flagship before highest-vol)
2. **Righteous Felon Habanero Escobar Beef Jerky** (kw: 210 — highest-vol flavor)
3. **Righteous Felon Baby Blues BBQ Beef Jerky** (kw: 140 — with legacy/collab clarification)
4. **Righteous Felon Beef Sticks** (kw: 390 + 210 + 50 = **650 combined**)
5. **Righteous Felon Meat Sticks** (kw: 210) — product-line synonym
6. **Righteous Felon Turkey Jerky** (kw: 70 + 50 = **120 combined**)
7. **Where Is Righteous Felon Jerky Made** (kw: 30) — Chester County PA
8. **Who Owns Righteous Felon Jerky** (kw: 20 + 10 = 30 combined) — founders + brand story
9. **Is Righteous Felon Jerky Healthy** (kw: 20)
10. **Is Righteous Felon Jerky Halal** (kw: 10) — unique long-tail
11. **Where to Buy Righteous Felon Jerky** (kw: 30 + 70 + 30 + 20 = **150 combined**)
12. **Is Righteous Felon Jerky Good** (kw: 30 + 40 review + 40 story = **110 combined**) — verdict + Cole's rating

**Total H2s: 12. All volume-backed. ✓**

---

## 4. Schema plan (JSON-LD blocks)

- **Article** — via PillarLayout (auto)
- **BreadcrumbList** — via PillarLayout (auto)
- **FAQPage** — via PillarLayout (pass 8 PAA Q&A pairs)
- **Review** — inline JSON-LD, same pattern as Old Trapper pillar. Rating = Cole's declared opinion.

**Rating decision (recommendation for approval gate):** ~4.0/5. Craft tier is higher than Old Trapper's 3.5/5 (mass-market). Not a 5/5 because:
- Premium price ($3.50/oz) is a real barrier vs mass-market accessibility
- Availability is inconsistent (Fowl Capone showed "sold out" on JerkyBrands)
- Flavor naming is polarizing (love the cheek OR find it try-hard)

Where RF earns above 3.5:
- Pasture-raised black angus sourcing (verifiable)
- No preservatives / clean label
- Bold, distinctive flavors that mass-market doesn't attempt
- Genuine craft/small-batch positioning (not marketing fiction)

Ask user to approve 4.0/5 or adjust.

**No RecipeSchema** — review, not recipe. Build gate won't fire.

---

## 5. Competitor gap analysis (from `serp-teardown.md`)

| Gap | SERP status | My pillar |
|---|---|---|
| Independent editorial review | 0 content pages rank | The pillar IS this |
| Factual brand story (vs the 1000-word outlaw fiction on RF's manifesto) | Only RF's own tongue-in-cheek narrative exists | H2 #7-8 body — real facts (2011, Chester County, Brendan Cawley) |
| Flavor-by-flavor honest ranking | Nobody does this for RF | H2s #1-3 cover top 3 flavors; body covers other 8 flavors |
| Craft vs mass-market comparison | Nobody frames RF this way | H2 #12 body cross-links to `/old-trapper-beef-jerky/` for direct comparison |
| Halal clarification | Zero pages address the halal question despite 10/mo | H2 #10 — direct answer (verified from label if available) |
| Baby Blues BBQ clarification | Nobody explains this discontinued/collab product | H2 #3 body — honest note that current lineup shows Bootleggin BBQ |
| Review schema | 0 pages have it | Inline `<script>` block (same pattern as Old Trapper) |

---

## 6. Voice positioning — second branded review

**Cole's stance (different from Old Trapper):**
- **Craft-respect tone.** RF is a legit craft brand with real sourcing standards; Cole engages it seriously as a peer craft product.
- **Distinguishes from mass-market.** RF isn't Jack Link's or Old Trapper; comparison set is Country Archer, People's Choice, Chomps.
- **Acknowledges the outlaw branding.** Cole can enjoy the cheek without pretending it doesn't exist. RF's manifesto is 1,000 words of criminal-narrative pastiche — recognize it, don't get too swept up in it.
- **Honest about trade-offs:** premium price, distribution gaps, occasional stockout inconsistency.
- **Names cheeky flavor names respectfully.** Habanero Escobar, Darth Garlic, Nelson Mandilla — these are the actual product names on RF's own site. Not fabricated. Use them.

**Red lines:**
- No invented prices (verified $6.99/2oz on JerkyBrands and Troopster — safe to cite as a data point)
- No invented star ratings from imagination
- No fabricated flavor descriptions — RF's own site describes each flavor; adapt honestly
- No manufacturing-drama claims we can't source

---

## 7. On-page SEO spec (from `references/on-page-seo.md`)

All 15 categories addressed automatically by site's PillarLayout + inline Review schema + BaseLayout + this session's pillar work. Long-form (category 15) additions required (TOC + H2 ids + back-to-top per site pattern from previous 6 pillars).
