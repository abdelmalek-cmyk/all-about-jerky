# Chicken Jerky — Cluster Structure (add to project context)

Two new pillar pages on allaboutjerky.com. This is the site's first expansion beyond beef — the two pages establish a "chicken jerky" sub-cluster. Same Astro content-collection pattern, same schema/SEO/AEO/E-E-A-T standards as the beef pages.

## The two pages

### 1. `/chicken-jerky/` — Humans / Recipe (PILLAR)
- **Primary keyword:** chicken jerky (5,400) + chicken jerky recipe (1,000)
- **Volume:** ~21.5K/mo · **Intent:** recipe / informational
- **Role:** the main chicken hub — how to make chicken jerky, by method (dehydrator, oven, air fryer, smoker/traeger), flavors (buffalo, teriyaki), sticks, safety (165°F).
- **Placement:** top-level route, like the beef method pillars.

### 2. `/chicken-jerky-for-dogs/` — Dog Treats (PILLAR)
- **Primary keyword:** chicken jerky for dogs (1,600, KD 10 — fastest win in the cluster)
- **Volume:** ~10K/mo · **Intent:** informational + safety-anxious
- **Role:** homemade single-ingredient dog treats — plain chicken only, safety-first, addresses the imported-jerky illness fears directly.
- **Placement:** top-level route; deliberately separate from the human page (different safety rules — no garlic/onion, which are toxic to dogs).

## Why two pages, not one
The keyword data splits cleanly: 65% human-recipe intent, 35% dog-treat intent. The two intents have incompatible content — the dog version must be plain chicken with zero seasoning (garlic and onion are toxic to dogs), while the human version is seasoned. Merging them would confuse Google's intent signal and create a page that serves neither well. Two focused pages each own their intent.

## Navigation
Add "Chicken Jerky" to the site. Options:
- Simplest: add both under an existing dropdown, or
- Add a short "Chicken" entry. Given the site is beef-first, a light touch is fine — the two pages linked from each other and from relevant beef pages (how-to-make, dehydrator, dogs guide) matters more than a nav slot.
Do NOT over-build nav for two pages.

## Internal linking (avoid orphaning — the lesson from the beef cuts pages)
- `/chicken-jerky/` ↔ `/chicken-jerky-for-dogs/` (link each to the other prominently).
- `/chicken-jerky/` → beef `/dehydrator-beef-jerky/`, `/how-to-make-beef-jerky/`, `/guides/beef-jerky-time-and-temperature/` (shared method/temp concepts).
- `/chicken-jerky-for-dogs/` → beef `/guides/can-dogs-eat-beef-jerky/` (natural topical sibling).
- Add inbound links FROM those beef pages back to the chicken pages with descriptive anchors. The existing `can-dogs-eat-beef-jerky` guide is the most important inbound source for the dog page.

## Content collection
Add both as entries matching the existing frontmatter/schema shape (recipes/pillars). The human page ships full Recipe JSON-LD; the dog page ships Recipe (plain-chicken treat recipe) + FAQPage. Both get BreadcrumbList and multi-aspect-ratio hero crops (1:1/4:3/16:9) like the beef recipes.

Companion files: `chicken-jerky_keywords-AEO.md` (per-page keywords, questions, LSI, safety notes) and `chicken-jerky_keyword-bank.csv` (all 687 keywords tagged by page_url + is_question).
