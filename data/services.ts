export interface Service {
  id: string
  name: string
  slug: string
  h1: string
  metaTitle: string
  metaDescription: string
  primaryKeyword: string
  priceRange: string
  priceMin: number
  priceMax: number
  icon: string
  shortDesc: string
  relatedServiceSlugs: string[]
  topSymptoms: string[]
}

export const SERVICES: Service[] = [
  {
    id: "washer",
    name: "Washer Repair",
    slug: "washer-repair",
    h1: "Washer Repair in San Diego, CA — WNDW Appliance Repair",
    metaTitle: "Washer Repair San Diego | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Washing machine repair in San Diego — $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. Call (858) 264-3138. Mon–Sat 7AM–11PM.",
    primaryKeyword: "washing machine repair san diego",
    priceRange: "$250–$350",
    priceMin: 250,
    priceMax: 350,
    icon: "WashingMachine",
    shortDesc: "Front-load, top-load, all brands. Most repairs completed same visit.",
    relatedServiceSlugs: ["dryer-repair", "dishwasher-repair", "annual-maintenance-plan"],
    topSymptoms: [
      "Washer not draining",
      "Washer won't spin",
      "Washer leaking water",
      "Washer making loud noise",
      "Washer not starting",
    ],
  },
  {
    id: "dryer",
    name: "Dryer Repair",
    slug: "dryer-repair",
    h1: "Dryer Repair in San Diego, CA — WNDW Appliance Repair",
    metaTitle: "Dryer Repair San Diego | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Dryer repair in San Diego — $85 diagnostic fee waived if we fix it. 90-day warranty. Gas & electric. Call (858) 264-3138. Mon–Sat 7AM–11PM.",
    primaryKeyword: "dryer repair san diego",
    priceRange: "$250–$350",
    priceMin: 250,
    priceMax: 350,
    icon: "Dryer",
    shortDesc: "Gas and electric dryers. Heating, drum, and sensor repairs.",
    relatedServiceSlugs: ["washer-repair", "range-hood-repair", "annual-maintenance-plan"],
    topSymptoms: [
      "Dryer not heating",
      "Dryer takes multiple cycles",
      "Dryer making loud noise",
      "Dryer not starting",
      "Dryer lint or burning smell",
    ],
  },
  {
    id: "oven",
    name: "Oven / Range / Stove Repair",
    slug: "oven-range-stove-repair",
    h1: "Oven & Range Repair in San Diego, CA — WNDW Appliance Repair",
    metaTitle: "Oven Repair San Diego | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Oven, range & stove repair in San Diego — $85 diagnostic fee waived if we fix it. Gas & electric. 90-day warranty. Call (858) 264-3138.",
    primaryKeyword: "oven repair san diego",
    priceRange: "$250–$350",
    priceMin: 250,
    priceMax: 350,
    icon: "Oven",
    shortDesc: "Gas and electric ovens, ranges, stoves, and cooktops.",
    relatedServiceSlugs: ["microwave-repair", "range-hood-repair", "appliance-installation"],
    topSymptoms: [
      "Oven not heating",
      "Gas stove not lighting",
      "Oven temperature off",
      "Burner not working",
      "Oven door not closing",
    ],
  },
  {
    id: "dishwasher",
    name: "Dishwasher Repair",
    slug: "dishwasher-repair",
    h1: "Dishwasher Repair in San Diego, CA — WNDW Appliance Repair",
    metaTitle: "Dishwasher Repair San Diego | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Dishwasher repair in San Diego — $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. Call (858) 264-3138. Mon–Sat 7AM–11PM.",
    primaryKeyword: "dishwasher repair san diego",
    priceRange: "$250–$350",
    priceMin: 250,
    priceMax: 350,
    icon: "Dishwasher",
    shortDesc: "Drainage, leaks, door latches, and control boards. All brands.",
    relatedServiceSlugs: ["washer-repair", "refrigerator-repair", "annual-maintenance-plan"],
    topSymptoms: [
      "Dishwasher not draining",
      "Dishwasher leaking",
      "Dishwasher not cleaning dishes",
      "Dishwasher not drying",
      "Dishwasher not starting",
    ],
  },
  {
    id: "refrigerator",
    name: "Refrigerator Repair",
    slug: "refrigerator-repair",
    h1: "Refrigerator Repair in San Diego, CA — WNDW Appliance Repair",
    metaTitle: "Refrigerator Repair San Diego | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Refrigerator repair in San Diego — $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. Call (858) 264-3138. Mon–Sat 7AM–11PM.",
    primaryKeyword: "refrigerator repair san diego",
    priceRange: "$350–$900",
    priceMin: 350,
    priceMax: 900,
    icon: "Refrigerator",
    shortDesc: "Cooling issues, ice makers, water dispensers. All brands including Sub-Zero.",
    relatedServiceSlugs: ["freezer-repair", "ice-maker-repair", "annual-maintenance-plan"],
    topSymptoms: [
      "Refrigerator not cooling",
      "Refrigerator leaking water",
      "Ice maker not working",
      "Refrigerator making noise",
      "Refrigerator freezing food",
    ],
  },
  {
    id: "freezer",
    name: "Freezer Repair",
    slug: "freezer-repair",
    h1: "Freezer Repair in San Diego, CA — WNDW Appliance Repair",
    metaTitle: "Freezer Repair San Diego | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Freezer repair in San Diego — $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. Call (858) 264-3138. Mon–Sat 7AM–11PM.",
    primaryKeyword: "freezer repair san diego",
    priceRange: "$350–$900",
    priceMin: 350,
    priceMax: 900,
    icon: "Freezer",
    shortDesc: "Chest and upright freezers. Compressor, thermostat, and seal repairs.",
    relatedServiceSlugs: ["refrigerator-repair", "ice-maker-repair", "annual-maintenance-plan"],
    topSymptoms: [
      "Freezer not freezing",
      "Freezer frost buildup",
      "Freezer making noise",
      "Freezer running constantly",
      "Freezer not maintaining temperature",
    ],
  },
  {
    id: "ice-maker",
    name: "Ice Maker Repair",
    slug: "ice-maker-repair",
    h1: "Ice Maker Repair in San Diego, CA — WNDW Appliance Repair",
    metaTitle: "Ice Maker Repair San Diego | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Ice maker repair in San Diego — $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. Call (858) 264-3138. Mon–Sat 7AM–11PM.",
    primaryKeyword: "ice maker repair san diego",
    priceRange: "$350–$900",
    priceMin: 350,
    priceMax: 900,
    icon: "IceMaker",
    shortDesc: "Built-in and freestanding ice makers. All brands.",
    relatedServiceSlugs: ["refrigerator-repair", "freezer-repair", "annual-maintenance-plan"],
    topSymptoms: [
      "Ice maker not making ice",
      "Ice maker not working after reset",
      "Ice maker leaking",
      "Ice tastes bad",
      "Ice maker too slow",
    ],
  },
  {
    id: "microwave",
    name: "Microwave Repair",
    slug: "microwave-repair",
    h1: "Microwave Repair in San Diego, CA — WNDW Appliance Repair",
    metaTitle: "Microwave Repair San Diego | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Microwave repair in San Diego — $85 diagnostic fee waived if we fix it. Built-in and countertop. Call (858) 264-3138. Mon–Sat 7AM–11PM.",
    primaryKeyword: "microwave repair san diego",
    priceRange: "$250–$350",
    priceMin: 250,
    priceMax: 350,
    icon: "Microwave",
    shortDesc: "Built-in and over-the-range microwaves. All brands.",
    relatedServiceSlugs: ["oven-range-stove-repair", "range-hood-repair", "appliance-installation"],
    topSymptoms: [
      "Microwave not heating",
      "Microwave sparking",
      "Microwave turntable not spinning",
      "Microwave not starting",
      "Microwave door not closing",
    ],
  },
  {
    id: "range-hood",
    name: "Range Hood Repair",
    slug: "range-hood-repair",
    h1: "Range Hood Repair in San Diego, CA — WNDW Appliance Repair",
    metaTitle: "Range Hood Repair San Diego | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Range hood repair in San Diego — $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. Call (858) 264-3138. Mon–Sat 7AM–11PM.",
    primaryKeyword: "range hood repair san diego",
    priceRange: "$250–$350",
    priceMin: 250,
    priceMax: 350,
    icon: "RangeHood",
    shortDesc: "Fan, motor, lights, and control repairs. All brands.",
    relatedServiceSlugs: ["oven-range-stove-repair", "microwave-repair", "annual-maintenance-plan"],
    topSymptoms: [
      "Range hood fan not working",
      "Range hood light not working",
      "Range hood making noise",
      "Range hood not venting",
      "Range hood controls not responding",
    ],
  },
  {
    id: "installation",
    name: "Appliance Installation",
    slug: "appliance-installation",
    h1: "Appliance Installation in San Diego, CA — WNDW Appliance Repair",
    metaTitle: "Appliance Installation San Diego | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Appliance installation in San Diego — $220–$350. Includes connection, leveling & testing. Call (858) 264-3138.",
    primaryKeyword: "appliance installation san diego",
    priceRange: "$220–$350",
    priceMin: 220,
    priceMax: 350,
    icon: "Install",
    shortDesc: "Connection, leveling, testing. All appliance types.",
    relatedServiceSlugs: ["washer-repair", "refrigerator-repair", "oven-range-stove-repair"],
    topSymptoms: [
      "New refrigerator installation",
      "Washer and dryer installation",
      "Dishwasher installation",
      "Oven or range installation",
      "Appliance connection and testing",
    ],
  },
  {
    id: "maintenance",
    name: "Annual Maintenance Plan",
    slug: "annual-maintenance-plan",
    h1: "Annual Appliance Maintenance Plan in San Diego — WNDW Appliance Repair",
    metaTitle: "Appliance Maintenance San Diego | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Annual appliance maintenance in San Diego — $350/year + parts. 2 scheduled visits. Prevent breakdowns before they happen. Call (858) 264-3138.",
    primaryKeyword: "appliance maintenance san diego",
    priceRange: "$350/year + parts",
    priceMin: 350,
    priceMax: 350,
    icon: "Maintenance",
    shortDesc: "$350/year + parts. Two visits. Filters, lint, coils, and drains.",
    relatedServiceSlugs: ["washer-repair", "refrigerator-repair", "dryer-repair"],
    topSymptoms: [
      "Washer maintenance",
      "Dryer maintenance",
      "Refrigerator maintenance",
      "Dishwasher maintenance",
      "Oven / Range maintenance",
      "Range Hood maintenance",
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
