# Fruit Jerky — Page Structure

ONE new pillar page on allaboutjerky.com. This is the FIRST non-meat expansion (dried fruit strips / fruit leather) — it broadens the site beyond meat into plant-based, vegan, and kids-snack territory.

## The page

### `/fruit-jerky/` — PILLAR
- **Primary keyword:** fruit jerky (3,600, KD 41 — aspirational). Realistically leads for "how to make fruit jerky" (110) and "is solely fruit jerky healthy" (110, KD 7).
- **Targetable volume:** small — a few hundred genuinely servable searches (72% of the raw volume is the "Solely" brand, which we cannot serve since we do not sell products). Treat as BREADTH, not a volume play.
- **Pattern:** top-level `src/pages/fruit-jerky.astro` using PillarLayout, like the meat pillars.

## Strategy (important — different from the meat pages)
The head term and most volume belong to the brand "Solely." We win by: (1) owning the recipe/how-to intent, (2) intercepting Solely researchers with honest answers — "is solely fruit jerky healthy" is KD 7, the easiest keyword — then teaching the DIY version, (3) winning the mango/pineapple flavor long-tail. See keywords-AEO.md for the full logic.

## Required components (match the meat pages)
**Recipe card** — printable, for the core fruit-jerky recipe.
**Schema:** Recipe (image[] 1:1/4:3/16:9, author Cole Mercer, ISO dates, prep/cook/total, yield, category, cuisine, keywords, ingredients, instructions as HowToStep) + FAQPage + BreadcrumbList + Article. Nutrition ONLY if USDA-sourced, else omit. No aggregateRating.
**Images** via ContentImage pattern. Reference fruit-jerky.webp as hero + body images (mango, pineapple, dehydrator). List filenames for generation.

## Key differences from meat pages
- NO food-safety pre-heat — fruit has no pathogen risk. Dry at ~135°F (57°C). Simpler and safer; say so.
- Plant-based angle: use "vegan", "no sugar added", "whole food", "kid-friendly" where accurate.
- Author note: Cole Mercer is framed as a pitmaster (meat). For a fruit page, either broaden his bio slightly (dehydrating covers fruit too) or keep byline consistent — your call, but keep it consistent site-wide.

## Navigation & placement
This is NOT meat, so it does NOT belong in "Meat & Cut". Options: a standalone "Fruit Jerky" nav entry, or place under Recipes. Add to public/sitemap.xml.

## Internal linking (avoid orphaning)
- Outbound: /dehydrator-beef-jerky/ (shared appliance), and via the "fruit-flavored beef jerky" section → the beef pages.
- Inbound: add a link from /dehydrator-beef-jerky/ and /how-to-make-beef-jerky/ to the fruit page (e.g. "want a no-meat option? see fruit jerky"). Otherwise it will be orphaned as the lone non-meat page.

## Deploy note
Pure static via committed wrangler.jsonc. No Node built-ins (fs/path) in the bundle graph.

Companion files: fruit-jerky_keywords-AEO.md and fruit-jerky_keyword-bank.csv (84 keywords tagged by section + is_question).
