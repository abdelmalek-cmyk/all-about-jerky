# Technical SEO — 3 Things (Claude Handles the Rest)

> Site-level infrastructure, **not** per-page content. Technical SEO used to be a checklist of 50 things; now it's three steps. Run these **once when the site is built** (and re-run Lighthouse periodically) — they are separate from the page-writing phases in the master prompt, which is exactly the part that prompt marks as "covered separately."

**The whole job:** generate the sitemap, ship the robots.txt, paste the Lighthouse report. That's technical SEO in 2026.

---

## 1. `sitemap.xml` — a list of every page
A map of your site for Google. It tells the crawler every URL worth indexing, so nothing gets missed.

- Generate it from **all published pages** (pillar + spokes + every other live page).
- One `<url>` entry per page, each with a `<loc>`.
- Keep it current: regenerate whenever pages are added or removed.
- Reference it from `robots.txt` (see below) and submit it in Google Search Console.

**Shape:**
```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://example.com/</loc></url>
  <url><loc>https://example.com/blog/how-to-unclog-a-drain/</loc></url>
  <url><loc>https://example.com/services/emergency-plumber/</loc></url>
</urlset>
```

**Do this:** Claude generates it. You don't touch it again — it regenerates on build.

---

## 2. `robots.txt` — the crawler's rulebook
Tells bots where they can and can't go, and points them to your sitemap. One tiny file, site-wide.

- Allow the crawlable site; disallow admin/private paths.
- Always include the `Sitemap:` line pointing at the absolute sitemap URL.

**Shape:**
```
# robots.txt
User-agent: *
Allow: /
Disallow: /admin

Sitemap: https://example.com/sitemap.xml
```

**Do this:** Claude generates it once. Ship it at the site root (`/robots.txt`).

---

## 3. Google Lighthouse — your performance report
Scores your site on Performance (Core Web Vitals), SEO (meta + structure), Accessibility (WCAG checks), and Best Practices (HTTPS, console errors). Target green across all four.

- Run Lighthouse on the built site (Chrome DevTools, PageSpeed Insights, or CI).
- **Copy the report → paste it to Claude → it fixes everything** (oversized images, blocking fonts, render-blocking CSS, etc.).
- Re-run after fixes until scores are green; repeat periodically as the site grows.

**Do this:** Copy report → paste to Claude. It fixes images, fonts, and CSS blocking.

---

## Where this fits in the build
1. Write all pages (per the master prompt: Steal the SERP → keyword/cluster → voice → on-page-seo.md → write).
2. **Then run this file:** generate `sitemap.xml`, ship `robots.txt`, run Lighthouse and paste the report for fixes.
3. Submit the sitemap in Google Search Console.

Steps 1–2 above are one-time/site-level; Lighthouse (step 3 here) is the one you re-run over time. Everything per-page lives in `on-page-seo.md`; this file is the site-wide layer that completes it.
