// Spider web internal link registry
// Every page must link: UP (hub), SIDEWAYS (related), DOWN (conversion)

// Which services cross-link to which
export const RELATED_SERVICES_MAP: Record<string, string[]> = {
  "washer-repair": ["dryer-repair", "dishwasher-repair", "annual-maintenance-plan"],
  "dryer-repair": ["washer-repair", "range-hood-repair", "annual-maintenance-plan"],
  "oven-range-stove-repair": ["microwave-repair", "range-hood-repair", "appliance-installation"],
  "dishwasher-repair": ["washer-repair", "refrigerator-repair", "annual-maintenance-plan"],
  "refrigerator-repair": ["freezer-repair", "ice-maker-repair", "annual-maintenance-plan"],
  "freezer-repair": ["refrigerator-repair", "ice-maker-repair", "annual-maintenance-plan"],
  "ice-maker-repair": ["refrigerator-repair", "freezer-repair", "annual-maintenance-plan"],
  "microwave-repair": ["oven-range-stove-repair", "range-hood-repair", "appliance-installation"],
  "range-hood-repair": ["oven-range-stove-repair", "microwave-repair", "annual-maintenance-plan"],
  "appliance-installation": ["washer-repair", "refrigerator-repair", "oven-range-stove-repair"],
  "annual-maintenance-plan": ["washer-repair", "refrigerator-repair", "dryer-repair"],
}

// Service slug → relevant blog post slugs (populated as posts are written)
export const SERVICE_BLOG_MAP: Record<string, string[]> = {
  "refrigerator-repair": ["refrigerator-not-cooling-san-diego", "samsung-appliance-repair-san-diego"],
  "dishwasher-repair": ["dishwasher-not-draining-san-diego"],
  "washer-repair": ["washer-needs-repair-signs-san-diego", "samsung-appliance-repair-san-diego"],
  "dryer-repair": ["dryer-taking-too-long-san-diego"],
  "oven-range-stove-repair": ["oven-not-heating-evenly-san-diego"],
  "annual-maintenance-plan": ["spring-appliance-maintenance-checklist-san-diego"],
}

// Blog post slug → related blog post slugs (for RelatedArticles cross-linking)
export const RELATED_POSTS_MAP: Record<string, string[]> = {
  "how-much-does-appliance-repair-cost-in-san-diego": [
    "dishwasher-not-draining-san-diego",
    "refrigerator-not-cooling-san-diego",
    "washer-needs-repair-signs-san-diego",
  ],
  "dishwasher-not-draining-san-diego": [
    "how-much-does-appliance-repair-cost-in-san-diego",
    "refrigerator-not-cooling-san-diego",
    "washer-needs-repair-signs-san-diego",
  ],
  "refrigerator-not-cooling-san-diego": [
    "how-much-does-appliance-repair-cost-in-san-diego",
    "dishwasher-not-draining-san-diego",
    "samsung-appliance-repair-san-diego",
  ],
  "washer-needs-repair-signs-san-diego": [
    "dryer-taking-too-long-san-diego",
    "spring-appliance-maintenance-checklist-san-diego",
    "samsung-appliance-repair-san-diego",
  ],
  "samsung-appliance-repair-san-diego": [
    "refrigerator-not-cooling-san-diego",
    "washer-needs-repair-signs-san-diego",
    "repair-vs-replace-appliance-san-diego",
  ],
  "dryer-taking-too-long-san-diego": [
    "washer-needs-repair-signs-san-diego",
    "spring-appliance-maintenance-checklist-san-diego",
    "refrigerator-not-cooling-san-diego",
  ],
  "repair-vs-replace-appliance-san-diego": [
    "how-much-does-appliance-repair-cost-in-san-diego",
    "washer-needs-repair-signs-san-diego",
    "spring-appliance-maintenance-checklist-san-diego",
  ],
  "oven-not-heating-evenly-san-diego": [
    "how-much-does-appliance-repair-cost-in-san-diego",
    "repair-vs-replace-appliance-san-diego",
    "refrigerator-not-cooling-san-diego",
  ],
  "spring-appliance-maintenance-checklist-san-diego": [
    "repair-vs-replace-appliance-san-diego",
    "dryer-taking-too-long-san-diego",
    "washer-needs-repair-signs-san-diego",
  ],
}

// City slug → featured services to highlight on that page
export const CITY_SERVICE_MAP: Record<string, string[]> = {
  "la-jolla-appliance-repair": ["refrigerator-repair", "dishwasher-repair", "annual-maintenance-plan"],
  "del-mar-appliance-repair": ["refrigerator-repair", "dishwasher-repair", "annual-maintenance-plan"],
  "rancho-bernardo-appliance-repair": ["washer-repair", "refrigerator-repair", "annual-maintenance-plan"],
  "chula-vista-appliance-repair": ["washer-repair", "dishwasher-repair", "refrigerator-repair"],
  // Default: washer, dryer, refrigerator for all others
}

export function getFeaturedServicesForCity(citySlug: string): string[] {
  return CITY_SERVICE_MAP[citySlug] ?? ["washer-repair", "dryer-repair", "refrigerator-repair"]
}

// City slug → adjacent city slugs (for cross-linking)
export const RELATED_CITIES_MAP: Record<string, string[]> = {
  "san-diego-appliance-repair": ["la-jolla-appliance-repair", "chula-vista-appliance-repair", "national-city-appliance-repair"],
  "chula-vista-appliance-repair": ["national-city-appliance-repair", "san-diego-appliance-repair", "lemon-grove-appliance-repair"],
  "la-mesa-appliance-repair": ["el-cajon-appliance-repair", "lemon-grove-appliance-repair", "san-diego-appliance-repair"],
  "el-cajon-appliance-repair": ["santee-appliance-repair", "la-mesa-appliance-repair", "lemon-grove-appliance-repair"],
  "santee-appliance-repair": ["el-cajon-appliance-repair", "poway-appliance-repair", "ramona-appliance-repair"],
  "la-jolla-appliance-repair": ["san-diego-appliance-repair", "del-mar-appliance-repair"],
  "del-mar-appliance-repair": ["la-jolla-appliance-repair", "encinitas-appliance-repair", "carlsbad-appliance-repair"],
  "poway-appliance-repair": ["rancho-bernardo-appliance-repair", "santee-appliance-repair", "escondido-appliance-repair"],
  "rancho-bernardo-appliance-repair": ["poway-appliance-repair", "escondido-appliance-repair", "san-marcos-appliance-repair"],
  "national-city-appliance-repair": ["chula-vista-appliance-repair", "san-diego-appliance-repair", "lemon-grove-appliance-repair"],
  "ramona-appliance-repair": ["poway-appliance-repair", "santee-appliance-repair", "escondido-appliance-repair"],
  "fallbrook-appliance-repair": ["vista-appliance-repair", "oceanside-appliance-repair", "san-marcos-appliance-repair"],
  "oceanside-appliance-repair": ["carlsbad-appliance-repair", "vista-appliance-repair", "san-marcos-appliance-repair"],
  "san-marcos-appliance-repair": ["escondido-appliance-repair", "vista-appliance-repair", "carlsbad-appliance-repair"],
  "encinitas-appliance-repair": ["carlsbad-appliance-repair", "del-mar-appliance-repair"],
  "escondido-appliance-repair": ["san-marcos-appliance-repair", "rancho-bernardo-appliance-repair", "valley-center-appliance-repair"],
  "valley-center-appliance-repair": ["escondido-appliance-repair", "ramona-appliance-repair", "san-marcos-appliance-repair"],
  "lemon-grove-appliance-repair": ["la-mesa-appliance-repair", "national-city-appliance-repair", "el-cajon-appliance-repair"],
  "carlsbad-appliance-repair": ["oceanside-appliance-repair", "encinitas-appliance-repair", "vista-appliance-repair"],
  "vista-appliance-repair": ["oceanside-appliance-repair", "san-marcos-appliance-repair", "fallbrook-appliance-repair"],
}

export function getRelatedCities(citySlug: string): string[] {
  return RELATED_CITIES_MAP[citySlug] ?? []
}

export function getRelatedPosts(slug: string): string[] {
  return RELATED_POSTS_MAP[slug] ?? []
}

// Brand slug → service page slugs it should link to
export const BRAND_SERVICE_MAP: Record<string, string[]> = {
  "samsung-appliance-repair-san-diego": ["refrigerator-repair", "washer-repair", "dryer-repair", "dishwasher-repair"],
  "lg-appliance-repair-san-diego": ["washer-repair", "refrigerator-repair", "dryer-repair", "dishwasher-repair"],
  "whirlpool-appliance-repair-san-diego": ["washer-repair", "dryer-repair", "dishwasher-repair", "oven-range-stove-repair"],
  "ge-appliance-repair-san-diego": ["refrigerator-repair", "dishwasher-repair", "washer-repair", "oven-range-stove-repair"],
  "kitchenaid-appliance-repair-san-diego": ["dishwasher-repair", "refrigerator-repair", "oven-range-stove-repair"],
  "kenmore-appliance-repair-san-diego": ["washer-repair", "dryer-repair", "refrigerator-repair", "dishwasher-repair"],
  "bosch-appliance-repair-san-diego": ["dishwasher-repair", "refrigerator-repair", "oven-range-stove-repair"],
  "electrolux-appliance-repair-san-diego": ["washer-repair", "dryer-repair", "refrigerator-repair", "dishwasher-repair"],
  "miele-appliance-repair-san-diego": ["dishwasher-repair", "washer-repair", "dryer-repair", "refrigerator-repair"],
  "sub-zero-appliance-repair-san-diego": ["refrigerator-repair", "freezer-repair", "ice-maker-repair"],
  "thermador-appliance-repair-san-diego": ["oven-range-stove-repair", "dishwasher-repair", "refrigerator-repair"],
  "speed-queen-appliance-repair-san-diego": ["washer-repair", "dryer-repair", "annual-maintenance-plan"],
}

// Related brands (cross-link between brand pages)
export const RELATED_BRANDS_MAP: Record<string, string[]> = {
  "samsung-appliance-repair-san-diego": ["lg-appliance-repair-san-diego", "ge-appliance-repair-san-diego"],
  "lg-appliance-repair-san-diego": ["samsung-appliance-repair-san-diego", "whirlpool-appliance-repair-san-diego"],
  "whirlpool-appliance-repair-san-diego": ["kitchenaid-appliance-repair-san-diego", "kenmore-appliance-repair-san-diego"],
  "ge-appliance-repair-san-diego": ["samsung-appliance-repair-san-diego", "lg-appliance-repair-san-diego"],
  "kitchenaid-appliance-repair-san-diego": ["whirlpool-appliance-repair-san-diego", "bosch-appliance-repair-san-diego"],
  "kenmore-appliance-repair-san-diego": ["whirlpool-appliance-repair-san-diego", "lg-appliance-repair-san-diego"],
  "bosch-appliance-repair-san-diego": ["kitchenaid-appliance-repair-san-diego", "miele-appliance-repair-san-diego"],
  "electrolux-appliance-repair-san-diego": ["whirlpool-appliance-repair-san-diego", "kenmore-appliance-repair-san-diego"],
  "miele-appliance-repair-san-diego": ["bosch-appliance-repair-san-diego", "thermador-appliance-repair-san-diego"],
  "sub-zero-appliance-repair-san-diego": ["thermador-appliance-repair-san-diego", "miele-appliance-repair-san-diego"],
  "thermador-appliance-repair-san-diego": ["sub-zero-appliance-repair-san-diego", "miele-appliance-repair-san-diego"],
  "speed-queen-appliance-repair-san-diego": ["whirlpool-appliance-repair-san-diego", "electrolux-appliance-repair-san-diego"],
}
