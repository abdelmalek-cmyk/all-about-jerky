# Turkey Jerky — Page Structure

ONE new pillar page on allaboutjerky.com. Third meat expansion (after beef and chicken).

## The page

### `/turkey-jerky/` — PILLAR
- **Primary keyword:** turkey jerky (5,400) + turkey jerky recipe (1,300)
- **Targetable volume:** ~11,570/mo · 258 keywords · median KD **14 (easy)**
- **Pattern:** top-level `.astro` file using `PillarLayout` — exactly like `/chicken-jerky/`, `/dehydrator-beef-jerky/`, and the other beef method pillars. NOT a content collection.
- **File:** `src/pages/turkey-jerky.astro`

## Why one page (not a cluster like chicken)
The intent splits 95% human-recipe / 5% dog. Turkey's dog volume is only ~620/mo — far below the ~10K that justified a separate `/chicken-jerky-for-dogs/` page. One deep, comprehensive pillar concentrates topical authority instead of splitting it. Dogs get an H2 section that links out to the existing chicken dog-treat page.

## Required components (must match the chicken/beef pages)

**Recipe card** — the printable recipe card component used on the chicken and beef recipe pages. Non-negotiable: this page's core cluster (5,440/mo) is recipe intent, and the card is what makes it competitive with allrecipes/jerkyholic.

**Schema (JSON-LD), all of these:**
- `Recipe` — name, image[] (1:1 / 4:3 / 16:9 crops), author (Cole Mercer), datePublished + dateModified (ISO), prepTime, cookTime, totalTime, recipeYield, recipeCategory, recipeCuisine, keywords, recipeIngredient[], recipeInstructions[] as HowToStep. Nutrition ONLY if sourced from USDA FoodData Central — otherwise omit the property entirely (never an empty array, which fails validation).
- `FAQPage` — from the page's question keywords.
- `BreadcrumbList` — Home → Meat & Cut → Turkey Jerky.
- `Article` (via PillarLayout, as the other pillars do).

**Images** — hero + body images following the existing `ContentImage` pattern (renders nothing if the file is missing, so the page ships clean before images land). Filenames to reference and list for me to generate:
`turkey-jerky.webp` (hero, required for Recipe rich results), plus optional body images for the sticks, ground-turkey, and dehydrator sections.

## Navigation
Add "Turkey Jerky" to the **Meat & Cut** dropdown (desktop + mobile drawer), beside Chicken Jerky. Also add the URL to the hand-written `public/sitemap.xml`.

## Internal linking (avoid orphaning — the cuts-pages lesson)
**Outbound from `/turkey-jerky/`:**
- `/chicken-jerky/` — closest sibling (both poultry, both 165°F)
- `/chicken-jerky-for-dogs/` — from the dogs section
- `/guides/beef-jerky-time-and-temperature/` — the 160°F vs 165°F distinction is a natural hook
- `/dehydrator-beef-jerky/` — shared method
- `/smoked-beef-jerky/#traeger-pellet-grill` — from the smoker section
- `/venison-jerky/` — from the wild-turkey section (same hunter audience)
- `/guides/is-beef-jerky-healthy/` — from the health/vs-beef section

**Inbound TO `/turkey-jerky/` (must add):**
- `/chicken-jerky/` → turkey (most important — sibling poultry page)
- `/how-to-make-beef-jerky/` → turkey
- `/dehydrator-beef-jerky/` → turkey
- `/guides/is-beef-jerky-healthy/` → turkey (the "healthier than beef" angle)
- `/venison-jerky/` → turkey (wild turkey)
Use descriptive keyword anchors, never "click here".

Companion files: `turkey-jerky_keywords-AEO.md` (sections, keywords, questions, LSI, safety requirements) and `turkey-jerky_keyword-bank.csv` (258 keywords tagged by section + is_question).
