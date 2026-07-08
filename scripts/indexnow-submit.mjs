/**
 * IndexNow — submit all site URLs to Bing for instant indexing.
 * Run: node scripts/indexnow-submit.mjs
 */

const KEY = "ed9c04ddec0a4dc39cde6a7db95bd35a";
const HOST = "wndwappliancerepair.com";
const BASE = `https://${HOST}`;

const URLS = [
  `${BASE}/`,
  `${BASE}/about/`,
  `${BASE}/contact/`,
  `${BASE}/faq/`,
  `${BASE}/specials/`,
  `${BASE}/emergency-appliance-repair/`,
  `${BASE}/property-management-appliance-repair/`,
  `${BASE}/vacation-rental-appliance-repair/`,
  `${BASE}/locations/`,
  `${BASE}/blog/`,

  // Services
  `${BASE}/services/`,
  `${BASE}/services/washer-repair/`,
  `${BASE}/services/dryer-repair/`,
  `${BASE}/services/oven-range-stove-repair/`,
  `${BASE}/services/dishwasher-repair/`,
  `${BASE}/services/refrigerator-repair/`,
  `${BASE}/services/freezer-repair/`,
  `${BASE}/services/ice-maker-repair/`,
  `${BASE}/services/microwave-repair/`,
  `${BASE}/services/range-hood-repair/`,
  `${BASE}/services/appliance-installation/`,
  `${BASE}/services/annual-maintenance-plan/`,

  // Brands
  `${BASE}/brands/`,
  `${BASE}/brands/samsung-appliance-repair-san-diego/`,
  `${BASE}/brands/lg-appliance-repair-san-diego/`,
  `${BASE}/brands/whirlpool-appliance-repair-san-diego/`,
  `${BASE}/brands/ge-appliance-repair-san-diego/`,
  `${BASE}/brands/kitchenaid-appliance-repair-san-diego/`,
  `${BASE}/brands/kenmore-appliance-repair-san-diego/`,
  `${BASE}/brands/bosch-appliance-repair-san-diego/`,
  `${BASE}/brands/electrolux-appliance-repair-san-diego/`,
  `${BASE}/brands/miele-appliance-repair-san-diego/`,
  `${BASE}/brands/sub-zero-appliance-repair-san-diego/`,
  `${BASE}/brands/thermador-appliance-repair-san-diego/`,
  `${BASE}/brands/speed-queen-appliance-repair-san-diego/`,

  // Cities
  `${BASE}/san-diego-appliance-repair/`,
  `${BASE}/chula-vista-appliance-repair/`,
  `${BASE}/la-mesa-appliance-repair/`,
  `${BASE}/el-cajon-appliance-repair/`,
  `${BASE}/santee-appliance-repair/`,
  `${BASE}/la-jolla-appliance-repair/`,
  `${BASE}/del-mar-appliance-repair/`,
  `${BASE}/poway-appliance-repair/`,
  `${BASE}/rancho-bernardo-appliance-repair/`,
  `${BASE}/national-city-appliance-repair/`,
  `${BASE}/ramona-appliance-repair/`,
  `${BASE}/fallbrook-appliance-repair/`,
  `${BASE}/oceanside-appliance-repair/`,
  `${BASE}/san-marcos-appliance-repair/`,
  `${BASE}/encinitas-appliance-repair/`,
  `${BASE}/escondido-appliance-repair/`,
  `${BASE}/valley-center-appliance-repair/`,
  `${BASE}/lemon-grove-appliance-repair/`,
  `${BASE}/carlsbad-appliance-repair/`,
  `${BASE}/vista-appliance-repair/`,

  // Sub-service pages
  `${BASE}/services/washer-repair/drain-pump-repair/`,
  `${BASE}/services/washer-repair/door-seal-replacement/`,
  `${BASE}/services/washer-repair/lid-switch-repair/`,
  `${BASE}/services/washer-repair/door-lock-repair/`,
  `${BASE}/services/washer-repair/not-spinning-repair/`,
  `${BASE}/services/dryer-repair/heating-element-replacement/`,
  `${BASE}/services/dryer-repair/igniter-replacement/`,
  `${BASE}/services/dryer-repair/drum-belt-replacement/`,
  `${BASE}/services/dryer-repair/not-heating-repair/`,
  `${BASE}/services/dryer-repair/noisy-dryer-repair/`,
  `${BASE}/services/dishwasher-repair/drain-pump-repair/`,
  `${BASE}/services/dishwasher-repair/not-draining-repair/`,
  `${BASE}/services/dishwasher-repair/door-latch-repair/`,
  `${BASE}/services/dishwasher-repair/leaking-repair/`,
  `${BASE}/services/refrigerator-repair/water-ice-dispenser-repair/`,
  `${BASE}/services/refrigerator-repair/compressor-repair/`,
  `${BASE}/services/refrigerator-repair/door-seal-replacement/`,
  `${BASE}/services/refrigerator-repair/leaking-repair/`,
  `${BASE}/services/oven-range-stove-repair/igniter-replacement/`,
  `${BASE}/services/oven-range-stove-repair/not-heating-repair/`,
  `${BASE}/services/oven-range-stove-repair/stove-burner-repair/`,
  `${BASE}/services/oven-range-stove-repair/clicking-repair/`,
  `${BASE}/services/microwave-repair/not-heating-repair/`,
  `${BASE}/services/microwave-repair/no-power-repair/`,
  `${BASE}/services/microwave-repair/door-repair/`,
  `${BASE}/services/microwave-repair/sparking-repair/`,

  // Blog posts (add new slugs here as posts are published)
  `${BASE}/blog/spring-appliance-maintenance-checklist-san-diego/`,
  `${BASE}/blog/samsung-appliance-repair-san-diego/`,
  `${BASE}/blog/how-much-does-appliance-repair-cost-in-san-diego/`,
  `${BASE}/blog/dishwasher-not-draining-san-diego/`,
  `${BASE}/blog/refrigerator-not-cooling-san-diego/`,
  `${BASE}/blog/washer-needs-repair-signs-san-diego/`,
  `${BASE}/blog/dryer-taking-too-long-san-diego/`,
  `${BASE}/blog/repair-vs-replace-appliance-san-diego/`,
  `${BASE}/blog/oven-not-heating-evenly-san-diego/`,
];

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: `${BASE}/${KEY}.txt`,
  urlList: URLS,
};

console.log(`Submitting ${URLS.length} URLs to IndexNow (Bing)...`);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

if (res.ok || res.status === 200 || res.status === 202) {
  console.log(`✓ Accepted (HTTP ${res.status}) — Bing will crawl shortly.`);
} else {
  const body = await res.text();
  console.error(`✗ Error ${res.status}: ${body}`);
  process.exit(1);
}
