# On-Page SEO — Do These On Every Page

> The comprehensive on-page SEO checklist: **15 categories · 80+ items** — the complete on-page spec for blog posts and service pages.
> **Every page-generation task reads this file before generating any page.** Technical SEO (sitemaps, robots.txt, Core Web Vitals) is covered separately.

---

## 1. Head & Metadata — what Google indexes first
- [ ] **Title tag** — 50–60 chars, primary keyword near the start.
- [ ] **Meta description** — 150–160 chars, keyword + benefit + soft CTA.
- [ ] **Canonical URL** set to prevent duplicates.
- [ ] **Open Graph** — `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `og:type`.
- [ ] **Twitter Card** — `summary_large_image`, title, description, image.
- [ ] **Language** attribute on `<html>` (e.g. `lang="en"`).
- [ ] **Viewport meta** tag for responsive rendering.
- [ ] **Favicon** + `apple-touch-icon`.
- [ ] **Charset meta** — `<meta charset="utf-8">`.

## 2. URL Structure — clean, readable, keyword-forward
- [ ] **Short slug** — under 60 chars.
- [ ] **Primary keyword** in the slug.
- [ ] **Hyphens** only — never underscores.
- [ ] **Lowercase** only.
- [ ] **No stop words** ("the", "a", "of") unless necessary.
- [ ] **Logical hierarchy** — `/services/[slug]`, `/blog/[slug]`.

## 3. Headings — structure for skimmers & bots
- [ ] **Exactly one H1** per page, contains primary keyword.
- [ ] **Logical H2 → H3** hierarchy — never skip levels.
- [ ] **H2s** use supporting keywords + questions from the cluster.
- [ ] **No keyword stuffing** — write naturally.

## 4. Copy & Body — answer the query, fast
- [ ] **Primary keyword** in the first 100 words.
- [ ] **Direct answer** to the query in the first paragraph.
- [ ] **Length** matches SERP average (within 20% of top-3).
- [ ] **Short paragraphs** (1–4 sentences).
- [ ] **Readability** — 8th–10th grade level.
- [ ] **Active voice** preferred.
- [ ] **Bold key phrases** — sparingly.
- [ ] **Bullets & numbered lists** where appropriate.

## 5. FAQ Section — every blog post
- [ ] **4–8 questions** from the SEMrush Questions tab + "People Also Ask".
- [ ] **Direct answers** — 2–4 sentences each.
- [ ] **FAQ schema** (JSON-LD) applied.

## 6. Images — every image is a ranking signal
- [ ] **Alt text** describes image + keyword where natural.
- [ ] **Filenames** — descriptive, hyphens, e.g. `emergency-plumber-toronto.webp`.
- [ ] **WebP**, compressed under 200 KB.
- [ ] **Width/height** attributes specified — prevents CLS.
- [ ] **Lazy loading** (`loading="lazy"`) for below-fold.
- [ ] **Responsive srcset** where needed.
- [ ] **Featured/hero image** for social sharing.

## 7. Internal Links — pass authority across the site
- [ ] **3–5 internal links** per post.
- [ ] Link to **related blog posts** & **relevant service pages**.
- [ ] **Descriptive anchor text** — never "click here" or "read more".
- [ ] **Contextually placed** in body copy.
- [ ] **Breadcrumbs** on every page.

## 8. External Links — cite authority, don't hoard it
- [ ] **2–3 external links** to authoritative sources (.gov, .edu, major industry).
- [ ] **Relevant** to the topic.
- [ ] Open in **new tab** with `rel="noopener"`.
- [ ] `rel="nofollow"` for sponsored links.

## 9. Schema Markup — JSON-LD in `<head>`
- [ ] **Article** schema on blog posts.
- [ ] **LocalBusiness** schema — most specific subtype (Plumber, Dentist…).
- [ ] **Service** schema on service pages.
- [ ] **FAQ** schema wherever a FAQ section exists.
- [ ] **BreadcrumbList** schema on every page.
- [ ] **Organization** schema site-wide.
- [ ] **Author/Person** schema for bylines.

## 10. E-E-A-T Signals — Experience · Expertise · Authority · Trust
- [ ] **Author byline** with name on every blog post.
- [ ] **Author bio** with credentials (years, qualifications).
- [ ] Link to **author's dedicated page**.
- [ ] **Published date** displayed.
- [ ] **"Last updated" date** when refreshed.
- [ ] **Real stories, numbers, opinions** from the business voice file.
- [ ] **Cite authoritative sources.**
- [ ] **About page** with full company credentials.
- [ ] **Contact page** — real address, phone, hours.

## 11. Accessibility — a11y signals = SEO signals
- [ ] **Semantic HTML5** — `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`.
- [ ] **ARIA labels** on interactive elements where needed.
- [ ] **Color contrast** meets WCAG AA (4.5:1 body text).
- [ ] **Focus indicators** visible on interactive elements.
- [ ] **Alt text** on all images (empty `alt=""` for decorative).
- [ ] **Descriptive link text.**
- [ ] **Skip-to-content** link for keyboard users.

## 12. Mobile & Responsive — mobile-first indexing
- [ ] **Responsive layout** (Tailwind handles this).
- [ ] **Touch targets** minimum 48×48 px.
- [ ] **Body font** minimum 16 px.
- [ ] **No horizontal scroll** at any viewport.
- [ ] **No intrusive interstitials.**

## 13. Social Preview — shareable card
- [ ] **OG image** optimized — 1200×630, under 1 MB.
- [ ] **Twitter Card image** — 1200×600.
- [ ] **Compelling `og:description`** — different from meta if valuable.

## 14. Conversion Elements — capture the lead *(service pages only)*
- [ ] **Primary CTA** above the fold.
- [ ] **Phone number** with click-to-call (`tel:`).
- [ ] **Multiple CTA placements** throughout the page.
- [ ] **Trust signals** — reviews, ratings, licenses, years.
- [ ] **Testimonials** with names (photos where possible).
- [ ] **Service-area coverage** listed.
- [ ] **Business hours** displayed.
- [ ] **Physical address** with embedded map.

## 15. Long-Form Content — 1500+ word posts
- [ ] **Table of contents** with anchor links at the top.
- [ ] **Jump links** for each H2.
- [ ] **Back-to-top** button.

---

### How to use this file
1. **Read this file before generating any page** (blog post or service page).
2. Treat every box as a requirement unless a category is explicitly marked page-type-specific (e.g. category 14 = service pages only; category 15 = long-form only).
3. In the QA gate, confirm each applicable category is satisfied before marking the page done.
4. This is the **universal technical spec**; a keyword-specific reference (e.g. `keyword-aeo-seo-reference.md`) layers the per-topic details on top of it — they complement, not replace, each other.
