# WNDW Appliance Repair — Internal Links Audit
**Updated:** 2026-04-22
**Rule:** Every page should have at least 3 inbound links from other pages on the site.

---

## Legend

| Symbol | Meaning |
|--------|---------|
| ✅ | 3+ inbound links — no action needed |
| ⚠️ | Under 3 inbound links — fix needed |
| 📅 | Future page — does not exist yet |

**Inbound link sources counted:**
- Global links (header nav, footer) count as 1 source each — not per-page
- Dynamic page grids (ServiceGrid on homepage, CityGrid, BrandGrid) count as 1 source
- Per-page contextual links (related cities, related services, related brands) count individually

---

## Summary

| Page Type | Count | Avg Inbound Links | Status |
|-----------|-------|-------------------|--------|
| Hub pages | 5 | 10+ | ✅ All good |
| Service pages | 11 | 5–6 | ✅ All good |
| Sub-service pages | 26 | 1 | ⚠️ All need fixing |
| City pages | 20 | 4–5 | ✅ All good |
| Brand pages | 12 | 4–5 | ✅ All good |
| Blog posts | 7 | 1–2 | ⚠️ All need fixing |
| Secondary pages | 7 | 1–2 | ⚠️ 4 need fixing |
| **Total existing** | **88** | | |
| Future blog posts | 15 | — | 📅 Planned |

---

## Hub Pages

| Page | URL | Inbound Sources | Count | Status |
|------|-----|-----------------|-------|--------|
| Homepage | `/` | Footer logo, all internal links | 10+ | ✅ |
| Services Hub | `/services/` | Header nav, footer, breadcrumbs, homepage CTA | 10+ | ✅ |
| Locations Hub | `/locations/` | Header nav, footer, homepage CTA, city page breadcrumbs | 10+ | ✅ |
| Brands Hub | `/brands/` | Header nav, footer, homepage, brand page breadcrumbs | 10+ | ✅ |
| Blog Hub | `/blog/` | Header nav, footer | 3+ | ✅ |

---

## Service Pages (11 pages)

All service pages receive inbound links from: homepage ServiceGrid, `/services/` hub, footer Column 1, and 2–3 related service pages via `RELATED_SERVICES_MAP`.

| Page | URL | Inbound Sources | Count | Status | Action |
|------|-----|-----------------|-------|--------|--------|
| Washer Repair | `/services/washer-repair/` | Homepage, hub, footer, dryer-repair, dishwasher-repair, annual-maintenance-plan, appliance-installation | 6 | ✅ | — |
| Dryer Repair | `/services/dryer-repair/` | Homepage, hub, footer, washer-repair, range-hood-repair, annual-maintenance-plan | 5 | ✅ | — |
| Oven / Range / Stove Repair | `/services/oven-range-stove-repair/` | Homepage, hub, footer, microwave-repair, range-hood-repair, appliance-installation | 5 | ✅ | — |
| Dishwasher Repair | `/services/dishwasher-repair/` | Homepage, hub, footer, washer-repair, refrigerator-repair, annual-maintenance-plan | 5 | ✅ | — |
| Refrigerator Repair | `/services/refrigerator-repair/` | Homepage, hub, footer, freezer-repair, ice-maker-repair, annual-maintenance-plan, appliance-installation, dishwasher-repair | 7 | ✅ | — |
| Freezer Repair | `/services/freezer-repair/` | Homepage, hub, footer, refrigerator-repair, ice-maker-repair, annual-maintenance-plan | 5 | ✅ | — |
| Ice Maker Repair | `/services/ice-maker-repair/` | Homepage, hub, footer, refrigerator-repair, freezer-repair, annual-maintenance-plan | 5 | ✅ | — |
| Microwave Repair | `/services/microwave-repair/` | Homepage, hub, footer, oven-range-stove-repair, range-hood-repair, appliance-installation | 5 | ✅ | — |
| Range Hood Repair | `/services/range-hood-repair/` | Homepage, hub, footer, oven-range-stove-repair, microwave-repair, dryer-repair, annual-maintenance-plan | 6 | ✅ | — |
| Appliance Installation | `/services/appliance-installation/` | Homepage, hub, footer, washer-repair, refrigerator-repair, oven-range-stove-repair, microwave-repair | 6 | ✅ | — |
| Annual Maintenance Plan | `/services/annual-maintenance-plan/` | Homepage, hub, footer, washer-repair, dryer-repair, dishwasher-repair, refrigerator-repair, ice-maker-repair, freezer-repair, range-hood-repair | 9 | ✅ | — |

---

## Sub-Service Pages (26 pages)

All sub-service pages currently receive **1 inbound link** — only from their parent service page. Need 2 more each.

**Fix (deferred):** Add "Other [Appliance] Repairs" sibling links section to the sub-service page template. This will bring each sub-service to 3–4 inbound links (parent + 2–3 siblings).

### Washer Sub-Services

| Page | URL | Inbound Sources | Count | Status | Action |
|------|-----|-----------------|-------|--------|--------|
| Washer Drain Pump Repair | `/services/washer-repair/drain-pump-repair/` | washer-repair (parent) | 1 | ⚠️ | Add sibling links (deferred) |
| Washing Machine Door Seal Replacement | `/services/washer-repair/door-seal-replacement/` | washer-repair (parent) | 1 | ⚠️ | Add sibling links (deferred) |
| Washer Lid Switch Repair | `/services/washer-repair/lid-switch-repair/` | washer-repair (parent) | 1 | ⚠️ | Add sibling links (deferred) |
| Washing Machine Door Lock Repair | `/services/washer-repair/door-lock-repair/` | washer-repair (parent) | 1 | ⚠️ | Add sibling links (deferred) |
| Washer Not Spinning Repair | `/services/washer-repair/not-spinning-repair/` | washer-repair (parent) | 1 | ⚠️ | Add sibling links (deferred) |

### Dryer Sub-Services

| Page | URL | Inbound Sources | Count | Status | Action |
|------|-----|-----------------|-------|--------|--------|
| Dryer Heating Element Replacement | `/services/dryer-repair/heating-element-replacement/` | dryer-repair (parent) | 1 | ⚠️ | Add sibling links (deferred) |
| Gas Dryer Igniter Replacement | `/services/dryer-repair/igniter-replacement/` | dryer-repair (parent) | 1 | ⚠️ | Add sibling links (deferred) |
| Dryer Drum Belt Replacement | `/services/dryer-repair/drum-belt-replacement/` | dryer-repair (parent) | 1 | ⚠️ | Add sibling links (deferred) |
| Dryer Not Heating Repair | `/services/dryer-repair/not-heating-repair/` | dryer-repair (parent) | 1 | ⚠️ | Add sibling links (deferred) |
| Noisy Dryer Repair | `/services/dryer-repair/noisy-dryer-repair/` | dryer-repair (parent) | 1 | ⚠️ | Add sibling links (deferred) |

### Dishwasher Sub-Services

| Page | URL | Inbound Sources | Count | Status | Action |
|------|-----|-----------------|-------|--------|--------|
| Dishwasher Drain Pump Repair | `/services/dishwasher-repair/drain-pump-repair/` | dishwasher-repair (parent) | 1 | ⚠️ | Add sibling links (deferred) |
| Dishwasher Not Draining Repair | `/services/dishwasher-repair/not-draining-repair/` | dishwasher-repair (parent) | 1 | ⚠️ | Add sibling links (deferred) |
| Dishwasher Door Latch Repair | `/services/dishwasher-repair/door-latch-repair/` | dishwasher-repair (parent) | 1 | ⚠️ | Add sibling links (deferred) |
| Dishwasher Leaking Repair | `/services/dishwasher-repair/leaking-repair/` | dishwasher-repair (parent) | 1 | ⚠️ | Add sibling links (deferred) |

### Refrigerator Sub-Services

| Page | URL | Inbound Sources | Count | Status | Action |
|------|-----|-----------------|-------|--------|--------|
| Water & Ice Dispenser Repair | `/services/refrigerator-repair/water-ice-dispenser-repair/` | refrigerator-repair (parent) | 1 | ⚠️ | Add sibling links (deferred) |
| Refrigerator Compressor Repair | `/services/refrigerator-repair/compressor-repair/` | refrigerator-repair (parent) | 1 | ⚠️ | Add sibling links (deferred) |
| Refrigerator Door Seal Replacement | `/services/refrigerator-repair/door-seal-replacement/` | refrigerator-repair (parent) | 1 | ⚠️ | Add sibling links (deferred) |
| Refrigerator Leaking Repair | `/services/refrigerator-repair/leaking-repair/` | refrigerator-repair (parent) | 1 | ⚠️ | Add sibling links (deferred) |

### Oven / Range / Stove Sub-Services

| Page | URL | Inbound Sources | Count | Status | Action |
|------|-----|-----------------|-------|--------|--------|
| Oven Igniter Replacement | `/services/oven-range-stove-repair/igniter-replacement/` | oven-range-stove-repair (parent) | 1 | ⚠️ | Add sibling links (deferred) |
| Oven Not Heating Repair | `/services/oven-range-stove-repair/not-heating-repair/` | oven-range-stove-repair (parent) | 1 | ⚠️ | Add sibling links (deferred) |
| Stove Burner Repair | `/services/oven-range-stove-repair/stove-burner-repair/` | oven-range-stove-repair (parent) | 1 | ⚠️ | Add sibling links (deferred) |
| Gas Stove Clicking Repair | `/services/oven-range-stove-repair/clicking-repair/` | oven-range-stove-repair (parent) | 1 | ⚠️ | Add sibling links (deferred) |

### Microwave Sub-Services

| Page | URL | Inbound Sources | Count | Status | Action |
|------|-----|-----------------|-------|--------|--------|
| Microwave Not Heating Repair | `/services/microwave-repair/not-heating-repair/` | microwave-repair (parent) | 1 | ⚠️ | Add sibling links (deferred) |
| Microwave No Power Repair | `/services/microwave-repair/no-power-repair/` | microwave-repair (parent) | 1 | ⚠️ | Add sibling links (deferred) |
| Microwave Door Repair | `/services/microwave-repair/door-repair/` | microwave-repair (parent) | 1 | ⚠️ | Add sibling links (deferred) |
| Microwave Sparking Repair | `/services/microwave-repair/sparking-repair/` | microwave-repair (parent) | 1 | ⚠️ | Add sibling links (deferred) |

---

## City Pages (20 pages)

All city pages receive inbound links from: homepage CityGrid, `/locations/` hub, footer (top 8 cities), and 2–3 adjacent cities via `RELATED_CITIES_MAP`.

| Page | URL | Footer? | Adjacent Cities | Count | Status |
|------|-----|---------|-----------------|-------|--------|
| San Diego | `/san-diego-appliance-repair/` | ✓ | La Jolla, Chula Vista, National City | 5 | ✅ |
| Chula Vista | `/chula-vista-appliance-repair/` | ✓ | National City, San Diego, Lemon Grove | 5 | ✅ |
| La Mesa | `/la-mesa-appliance-repair/` | ✓ | El Cajon, Lemon Grove, San Diego | 5 | ✅ |
| El Cajon | `/el-cajon-appliance-repair/` | ✓ | Santee, La Mesa, Lemon Grove | 5 | ✅ |
| Santee | `/santee-appliance-repair/` | ✓ | El Cajon, Poway, Ramona | 5 | ✅ |
| La Jolla | `/la-jolla-appliance-repair/` | ✓ | San Diego, Del Mar | 4 | ✅ |
| Del Mar | `/del-mar-appliance-repair/` | ✓ | La Jolla, Encinitas, Carlsbad | 5 | ✅ |
| Poway | `/poway-appliance-repair/` | ✓ | Rancho Bernardo, Santee, Escondido | 5 | ✅ |
| Rancho Bernardo | `/rancho-bernardo-appliance-repair/` | — | Poway, Escondido, San Marcos | 4 | ✅ |
| National City | `/national-city-appliance-repair/` | — | Chula Vista, San Diego, Lemon Grove | 4 | ✅ |
| Ramona | `/ramona-appliance-repair/` | — | Poway, Santee, Escondido | 4 | ✅ |
| Fallbrook | `/fallbrook-appliance-repair/` | — | Vista, Oceanside, San Marcos | 4 | ✅ |
| Oceanside | `/oceanside-appliance-repair/` | — | Carlsbad, Vista, San Marcos | 4 | ✅ |
| San Marcos | `/san-marcos-appliance-repair/` | — | Escondido, Vista, Carlsbad | 4 | ✅ |
| Encinitas | `/encinitas-appliance-repair/` | — | Carlsbad, Del Mar | 3 | ✅ |
| Escondido | `/escondido-appliance-repair/` | — | San Marcos, Rancho Bernardo, Valley Center | 4 | ✅ |
| Valley Center | `/valley-center-appliance-repair/` | — | Escondido, Ramona, San Marcos | 4 | ✅ |
| Lemon Grove | `/lemon-grove-appliance-repair/` | — | La Mesa, National City, El Cajon | 4 | ✅ |
| Carlsbad | `/carlsbad-appliance-repair/` | — | Oceanside, Encinitas, Vista | 4 | ✅ |
| Vista | `/vista-appliance-repair/` | — | Oceanside, San Marcos, Fallbrook | 4 | ✅ |

> Footer counts the top 8 cities (San Diego, Chula Vista, La Mesa, El Cajon, Santee, La Jolla, Del Mar, Poway). All cities get homepage CityGrid + /locations/ hub.

---

## Brand Pages (12 pages)

All brand pages receive inbound links from: homepage BrandGrid, `/brands/` hub, footer (mainstream brands), and 2 related brand pages via `RELATED_BRANDS_MAP`.

| Page | URL | Footer? | Related Brands | Count | Status |
|------|-----|---------|----------------|-------|--------|
| Samsung | `/brands/samsung-appliance-repair-san-diego/` | ✓ | LG, GE | 4 | ✅ |
| LG | `/brands/lg-appliance-repair-san-diego/` | ✓ | Samsung, Whirlpool | 4 | ✅ |
| Whirlpool | `/brands/whirlpool-appliance-repair-san-diego/` | ✓ | KitchenAid, Kenmore | 4 | ✅ |
| GE | `/brands/ge-appliance-repair-san-diego/` | ✓ | Samsung, LG | 4 | ✅ |
| KitchenAid | `/brands/kitchenaid-appliance-repair-san-diego/` | ✓ | Whirlpool, Bosch | 4 | ✅ |
| Kenmore | `/brands/kenmore-appliance-repair-san-diego/` | ✓ | Whirlpool, LG | 4 | ✅ |
| Bosch | `/brands/bosch-appliance-repair-san-diego/` | ✓ | KitchenAid, Miele | 4 | ✅ |
| Electrolux | `/brands/electrolux-appliance-repair-san-diego/` | ✓ | Whirlpool, Kenmore | 4 | ✅ |
| Miele | `/brands/miele-appliance-repair-san-diego/` | — | Bosch, Thermador | 3 | ✅ |
| Sub-Zero | `/brands/sub-zero-appliance-repair-san-diego/` | — | Thermador, Miele | 3 | ✅ |
| Thermador | `/brands/thermador-appliance-repair-san-diego/` | — | Sub-Zero, Miele | 3 | ✅ |
| Speed Queen | `/brands/speed-queen-appliance-repair-san-diego/` | — | Whirlpool, Electrolux | 3 | ✅ |

> Footer includes 8 mainstream brands (Samsung through Electrolux). All brands get homepage BrandGrid + /brands/ hub.

---

## Blog Posts (7 published)

Blog posts currently receive inbound links from: `/blog/` hub (all posts), service pages via `SERVICE_BLOG_MAP` (4 posts only).

**Note:** `RELATED_POSTS_MAP` exists in code but is NOT yet rendered on blog pages — those cross-links don't count until the template is updated (deferred fix).

| Post | URL | Inbound Sources | Count | Status | Action |
|------|-----|-----------------|-------|--------|--------|
| Appliance Repair Cost San Diego | `/blog/how-much-does-appliance-repair-cost-in-san-diego/` | /blog/ hub | 1 | ⚠️ | Add to SERVICE_BLOG_MAP for 1–2 services; enable RELATED_POSTS rendering (deferred) |
| Dishwasher Not Draining | `/blog/dishwasher-not-draining-san-diego/` | /blog/ hub, dishwasher-repair service page | 2 | ⚠️ | Enable RELATED_POSTS rendering (deferred) |
| Refrigerator Not Cooling | `/blog/refrigerator-not-cooling-san-diego/` | /blog/ hub, refrigerator-repair service page | 2 | ⚠️ | Enable RELATED_POSTS rendering (deferred) |
| 5 Signs Your Washer Needs Repair | `/blog/washer-needs-repair-signs-san-diego/` | /blog/ hub, washer-repair service page | 2 | ⚠️ | Enable RELATED_POSTS rendering (deferred) |
| Dryer Taking Too Long | `/blog/dryer-taking-too-long-san-diego/` | /blog/ hub, dryer-repair service page | 2 | ⚠️ | Enable RELATED_POSTS rendering (deferred) |
| Repair vs. Replace | `/blog/repair-vs-replace-appliance-san-diego/` | /blog/ hub | 1 | ⚠️ | Add to RELATED_POSTS_MAP; enable rendering (deferred) |
| Oven Not Heating Evenly | `/blog/oven-not-heating-evenly-san-diego/` | /blog/ hub | 1 | ⚠️ | Add to SERVICE_BLOG_MAP for oven-range-stove-repair ✅ Done; enable RELATED_POSTS rendering (deferred) |

**Deferred fix (single task):** Add "Related Articles" section to `app/blog/[slug]/page.tsx` using existing `getRelatedPosts()` function. Update `RELATED_POSTS_MAP` to include all 7 posts with 3 related posts each.

---

## Secondary Pages (7 pages)

| Page | URL | Inbound Sources | Count | Status | Action |
|------|-----|-----------------|-------|--------|--------|
| FAQ | `/faq/` | Header nav, footer | 2 | ⚠️ | Add link from /about/ page and 1 service page |
| About | `/about/` | Header nav, footer | 2 | ⚠️ | Add link from /contact/ page or homepage |
| Contact | `/contact/` | Header nav, footer, CTA buttons on every page | 10+ | ✅ | — |
| Specials | `/specials/` | Footer only | 1 | ⚠️ | Add to header nav or link from 2 service pages |
| Emergency Repair | `/emergency-appliance-repair/` | Footer only | 1 | ⚠️ | Link from refrigerator-repair and washer-repair service pages (natural context) |
| Property Management | `/property-management-appliance-repair/` | Footer only | 1 | ⚠️ | Link from /about/ and /services/ hub pages |
| Vacation Rental | `/vacation-rental-appliance-repair/` | Footer only | 1 | ⚠️ | Link from /about/ and blog post on vacation rental topic (row 13 on calendar) |

---

## Future Pages (Planned — 📅)

These pages do not exist yet. Listed here so inbound links can be planned before creation.

### Future Blog Posts (Content Calendar)

| # | Planned Post | Planned URL | Link From (when created) |
|---|-------------|------------|--------------------------|
| 9 | Samsung Appliance Repair — Most Common Problems | `/blog/samsung-appliance-repair-san-diego/` | /brands/samsung-..., /blog/ hub, 2 related posts |
| 10 | Spring Appliance Maintenance Checklist | `/blog/spring-appliance-maintenance-san-diego/` | /services/annual-maintenance-plan/, /blog/ hub, 2 related posts |
| 11 | LG Washing Machine Error Codes | `/blog/lg-washing-machine-error-codes-san-diego/` | /brands/lg-..., /services/washer-repair/, /blog/ hub |
| 12 | Ice Maker Not Working | `/blog/ice-maker-not-working-san-diego/` | /services/ice-maker-repair/, /blog/ hub, 2 related posts |
| 13 | Appliance Repair for Vacation Rentals | `/blog/appliance-repair-vacation-rentals-san-diego/` | /vacation-rental-appliance-repair/, /blog/ hub, 2 related posts |
| 14 | Microwave Not Heating — Is Repair Worth It? | `/blog/microwave-not-heating-san-diego/` | /services/microwave-repair/, /blog/ hub, 2 related posts |
| 15 | Bosch Dishwasher Repair — Error Codes | `/blog/bosch-dishwasher-repair-san-diego/` | /brands/bosch-..., /services/dishwasher-repair/, /blog/ hub |
| 16 | Whirlpool Refrigerator Repair | `/blog/whirlpool-refrigerator-repair-san-diego/` | /brands/whirlpool-..., /services/refrigerator-repair/, /blog/ hub |
| 17 | Maintaining Appliances in SD's Coastal Climate | `/blog/appliance-maintenance-san-diego-coastal/` | /services/annual-maintenance-plan/, /blog/ hub, 2 related posts |
| 18 | Range Hood Not Working — Repair vs. Replace | `/blog/range-hood-not-working-san-diego/` | /services/range-hood-repair/, /blog/ hub, 2 related posts |
| 19 | Annual Maintenance Plan — What's Included | `/blog/annual-maintenance-plan-san-diego/` | /services/annual-maintenance-plan/, /blog/ hub, 2 related posts |
| 20 | Freezer Not Freezing | `/blog/freezer-not-freezing-san-diego/` | /services/freezer-repair/, /blog/ hub, 2 related posts |
| 21 | KitchenAid Appliance Repair — Common Problems | `/blog/kitchenaid-appliance-repair-san-diego/` | /brands/kitchenaid-..., /blog/ hub, 2 related posts |
| 22 | Summer Appliance Prep | `/blog/summer-appliance-prep-san-diego/` | /services/annual-maintenance-plan/, /blog/ hub, 2 related posts |
| 23 | GE Appliance Repair — What We Fix Most | `/blog/ge-appliance-repair-san-diego/` | /brands/ge-..., /blog/ hub, 2 related posts |

> **Rule for new posts:** Before publishing any blog post, add at least 2 service/brand page links to `SERVICE_BLOG_MAP` pointing to it, and add it to `RELATED_POSTS_MAP` with 3 related posts. This ensures 3+ inbound links from day one.

---

## Action Summary

### Done Now
- [x] Add `oven-range-stove-repair` → `oven-not-heating-evenly-san-diego` to `SERVICE_BLOG_MAP`

### Fix Next (small tasks, no new pages)
- [ ] **Blog post cross-links:** Add "Related Articles" section to `app/blog/[slug]/page.tsx`, update `RELATED_POSTS_MAP` with all 7 posts
- [ ] **Sub-service sibling links:** Add "Other [Appliance] Repairs" section to `app/services/[slug]/[subSlug]/page.tsx`
- [ ] **Secondary pages:** Add contextual links to `/emergency-appliance-repair/`, `/specials/`, `/property-management-...`, `/vacation-rental-...` from relevant service/hub pages

### Fix Before Each New Blog Post
- [ ] Add to `RELATED_POSTS_MAP` (3 related posts)
- [ ] Add to `SERVICE_BLOG_MAP` (relevant service page)
- [ ] Update existing posts' `RELATED_POSTS_MAP` entries to include the new post (reverse link)
