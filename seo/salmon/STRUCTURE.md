# Salmon Jerky — Page Structure

ONE pillar page on allaboutjerky.com. Fish expansion (halal, content-intent). NOTE: "fish jerky" is a SEPARATE future article (/fish-jerky/) — excluded here; this page is salmon-specific.

## The page
### `/salmon-jerky/` — PILLAR
- **Primary:** salmon jerky (5,400) + salmon jerky recipe (1,300)
- **Volume (salmon-only):** 22,470/mo · 316 keywords · median KD 9.5 (very easy)
- **Pattern:** top-level src/pages/salmon-jerky.astro, PillarLayout — like /turkey-jerky/. NOT a collection.

## Why one page
97% human / 3% dog. Dog cluster (910/mo, but KD 1-2) is a section linking to /chicken-jerky-for-dogs/, not a separate page — like turkey.

## RULE: every H2/H3 and FAQ leads with an exact keyword that has real volume; H2s volume-ordered. See keywords-AEO.md for all receipts.

## Required components (match turkey/chicken)
- Recipe card (printable).
- Schema: Recipe (image[] 1:1/4:3/16:9, Cole Mercer, ISO dates, HowToStep) + FAQPage + BreadcrumbList + Article. Nutrition omitted unless USDA-sourced. No aggregateRating.
- Images via ContentImage. Hero salmon-jerky.webp (required for rich results) + body images.

## Structure (H2s by volume, all keyword-backed)
1. salmon jerky (5,400) — H1 + answer-first
2. salmon jerky recipe (1,300) — recipe card + steps
3. smoked salmon jerky (880) — big cluster; hot vs cold smoked
4. dried salmon (880)
5. dehydrated salmon (320)
6. candied salmon jerky (320)
7. alaska/alaskan salmon jerky (140+140) — salmon types
8. salmon jerky for dogs (170, KD 2) — section, links to chicken-dogs
9. health/nutrition (omega-3, all 20/mo terms)
+ FAQ (all questions have volume)

## CRITICAL — fish safety (the E-E-A-T differentiator, totally different from meat)
- PARASITE FREEZE STEP for raw/cold-smoked: -4F/-20C for 7 days (FDA). Most competitors omit this.
- Fish safe temp 145F (not beef 160 / poultry 165).
- Hot-smoked (cooked) vs cold-smoked (raw, needs freeze).
- Fatty fish = shorter shelf life, refrigerate.
- Dogs: salmon MUST be fully cooked (raw = salmon poisoning disease, fatal to dogs). Cite FDA/USDA/AKC. Do NOT copy meat temp rules.

## Nav, sitemap, links
- Nav: salmon isn't red meat/poultry. Place under Recipes, or start a "Fish & Seafood" group (future /fish-jerky/ joins it). Propose in STEP 0. Add to sitemap.
- Outbound: /dehydrator-beef-jerky/, /smoked-beef-jerky/, /chicken-jerky-for-dogs/, /guides/beef-jerky-time-and-temperature/.
- Inbound: from /smoked-beef-jerky/ and /dehydrator-beef-jerky/ (don't orphan).

## Deploy note
Pure static via wrangler.jsonc. No Node built-ins (fs/path) in the bundle.

Companion files: keywords-AEO.md, keyword-bank.csv (salmon-only, by section + is_question).
