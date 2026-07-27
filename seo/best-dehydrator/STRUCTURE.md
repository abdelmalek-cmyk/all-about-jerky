# Best Dehydrator for Jerky — Page Structure (AFFILIATE BUYING GUIDE)

The site's FIRST affiliate / monetization page. A product buying guide, NOT a recipe. This is the start of the affiliate phase.

## The page
### `/best-dehydrator-for-jerky/` — AFFILIATE BUYING GUIDE
- **Primary:** best dehydrator for jerky (1,600) + best food dehydrator for jerky (880) + best dehydrator for beef jerky (590)
- **Volume:** 7,600/mo · 87 keywords · median KD 26 · intent COMMERCIAL (buying decision)
- **Pattern:** top-level src/pages/best-dehydrator-for-jerky.astro. Use a Article/BlogPosting layout, NOT the recipe pillar layout. No recipe card.

## Why this page (the affiliate strategy)
Intent is commercial — people choosing which dehydrator to buy. The SERP is review articles + weak forum threads, no shops dominating, so a genuinely useful buying guide can rank. This page monetizes via affiliate links AND funnels the site's existing recipe traffic toward a purchase. It's the template for future gear guides (best jerky gun, best meat slicer).

## Required components (DIFFERENT from recipe pages)
- NO Recipe schema, NO recipe card.
- Article (or BlogPosting) schema + BreadcrumbList + FAQPage.
- OPTIONAL ItemList for the ranked product shortlist (appropriate for "best of" lists).
- Product/Review markup ONLY if writing real reviews — never fabricate ratings/review counts.
- FTC affiliate disclosure near the top (legally required).
- Affiliate link placeholders (href="AFFILIATE_LINK_X") for the user to fill — do NOT invent URLs.

## Structure (H2s by volume; see keywords-AEO.md for the full mapping)
1. Best Dehydrator for Jerky — intro + top pick (answer-first) + comparison table (1,600)
2. The ranked picks — 4-6 dehydrators, pros/cons, specs, affiliate buttons (880/390)
3. By use-case — budget (under $100, KD 13), commercial, by meat (deer KD 11)
4. How to choose — buying criteria (temp range, thermostat, wattage, trays)
5. Best temperature for dehydrating jerky — 540/mo cluster, KD 15-18 (easy)
6. Best meat & cut — 970/mo, link to existing /best-meat-for-beef-jerky/
7. Best recipe & marinade for dehydrator — link to existing recipe/marinade pages

## Content rules
- Genuine buying criteria + honest pros/cons = what beats jerkyholic. Not a thin affiliate grab.
- Don't fabricate product specs — use verifiable ones (tray count, wattage, temp range) or describe generally. Flag that the user should verify current specs/prices.
- Reinforce the 160F/165F safety angle in the temperature section (ties to site authority).

## Images
Custom hero (best-dehydrator-for-jerky.webp) is fine to generate. Product images have affiliate/copyright rules — use ContentImage placeholders; user sources compliant product images.

## Nav & linking
- Nav: NOT a recipe/meat. Create a "Gear" or "Reviews" section (holds future buying guides) or place under Guides. Add to sitemap.xml.
- Outbound: /dehydrator-beef-jerky/, /best-meat-for-beef-jerky/, /beef-jerky-marinade/, /guides/beef-jerky-time-and-temperature/.
- Inbound (CRITICAL for affiliate funnel): add links FROM /dehydrator-beef-jerky/ and other dehydrator pages TO this guide ("Need a dehydrator? See our picks"). This turns existing recipe traffic into affiliate clicks.

## Deploy note
Pure static via wrangler.jsonc. No Node built-ins (fs/path) in the bundle.

Companion files: keywords-AEO.md and keyword-bank.csv (87 keywords by section + is_question).
