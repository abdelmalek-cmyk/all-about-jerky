# Best Dehydrator for Jerky — Page Structure (INFORMATIONAL, no affiliate yet)

An informational buying-advice article. NOT affiliate, NOT a recipe. Goal: RANK and bring traffic. Affiliate comes later once there are visitors.

## The page
### `/best-dehydrator-for-jerky/`
- **Primary:** best dehydrator for jerky (1,600) + best food dehydrator for jerky (880) + best dehydrator for beef jerky (590)
- **Volume:** 7,600/mo · 87 keywords · median KD 26 · Commercial intent
- **Pattern:** top-level src/pages/best-dehydrator-for-jerky.astro, Article/BlogPosting layout (NOT recipe pillar, NOT affiliate).

## Goal
Rank by being the most useful "how to choose a dehydrator for jerky" resource. Teach buying CRITERIA and trade-offs, not product SKUs. The SERP is advice articles (jerkyholic, seriouseats) — beatable with genuine depth. Brings traffic now; affiliate links can be layered onto the same page later without a rewrite.

## What this is NOT (for now)
- NO affiliate links, buy buttons, or affiliate disclosure.
- NO Product/Review/aggregateRating schema, NO product-purchase ItemList.
- Naming general well-known models as teaching EXAMPLES is OK (no buy links, no invented specs/prices), framed as education not a sales list.

## Schema
Article/BlogPosting (author Cole Mercer, ISO dates) + BreadcrumbList + FAQPage. No commercial schema.

## Structure (H2s lead with real-volume keywords, ordered by volume — see keywords-AEO.md)
1. best dehydrator for jerky (1,600) — intro + answer-first (the CRITERIA, not a product)
2. best food dehydrator for jerky (880) — the buying criteria (temp range, thermostat, wattage, trays)
3. best meat dehydrator for jerky (390) — dehydrator TYPES explained
4. best temp for dehydrating jerky (140+140, KD 15-18) — temp table, easy win
5. use-cases: under $100 (KD 13), commercial, deer (KD 11)
6. best meat for jerky dehydrator (170+170) — summarize + link to /best-meat-for-beef-jerky/
7. best marinade/recipe for dehydrator — link to /dehydrator-beef-jerky/, /beef-jerky-marinade/

## Content rules
- Genuine buying advice = ranking substance. No invented specs/prices.
- Reinforce 160F/165F safety in the temp section (ties to site authority).

## Images
Custom hero (best-dehydrator-for-jerky.webp). ContentImage pattern. No product/affiliate images.

## Nav & linking
- Nav: under Guides (informational; no "Gear/Reviews" section yet since no affiliate). Add to sitemap.xml.
- Outbound: /dehydrator-beef-jerky/, /best-meat-for-beef-jerky/, /beef-jerky-marinade/, /guides/beef-jerky-time-and-temperature/.
- Inbound: from /dehydrator-beef-jerky/ etc. to this guide ("Choosing a dehydrator? Read our guide").

## Deploy note
Pure static via wrangler.jsonc. No Node built-ins in the bundle.

## Future (not now)
Keep structure so affiliate links drop in later (use-case + criteria sections are natural spots). Add NOTHING affiliate now.

Companion files: keywords-AEO.md, keyword-bank.csv (87 keywords by section + is_question).
