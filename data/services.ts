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
    h1: "Washer Repair in San Diego, CA — NTSZOT Appliance Repair",
    metaTitle: "Washer Repair San Diego | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Washing machine repair in San Diego — $80 service call includes diagnostic. 60-day warranty. All brands. Call (619) 488-4477. Mon–Fri 9AM–6PM, Sat 10AM–5PM.",
    primaryKeyword: "washing machine repair san diego",
    priceRange: "$300–$400",
    priceMin: 300,
    priceMax: 400,
    icon: "WashingMachine",
    shortDesc: "Front-load, top-load, all brands. Most repairs completed same visit.",
    relatedServiceSlugs: ["dryer-repair", "dishwasher-repair", "appliance-installation"],
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
    h1: "Dryer Repair in San Diego, CA — NTSZOT Appliance Repair",
    metaTitle: "Dryer Repair San Diego | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Dryer repair in San Diego — $80 service call includes diagnostic. 60-day warranty. Gas & electric. Call (619) 488-4477. Mon–Fri 9AM–6PM, Sat 10AM–5PM.",
    primaryKeyword: "dryer repair san diego",
    priceRange: "$300–$400",
    priceMin: 300,
    priceMax: 400,
    icon: "Dryer",
    shortDesc: "Gas and electric dryers. Heating, drum, and sensor repairs.",
    relatedServiceSlugs: ["washer-repair", "range-hood-repair", "appliance-installation"],
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
    h1: "Oven & Range Repair in San Diego, CA — NTSZOT Appliance Repair",
    metaTitle: "Oven Repair San Diego | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Oven, range & stove repair in San Diego — $80 service call includes diagnostic. Gas & electric. 60-day warranty. Call (619) 488-4477.",
    primaryKeyword: "oven repair san diego",
    priceRange: "$300–$400",
    priceMin: 300,
    priceMax: 400,
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
    h1: "Dishwasher Repair in San Diego, CA — NTSZOT Appliance Repair",
    metaTitle: "Dishwasher Repair San Diego | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Dishwasher repair in San Diego — $80 service call includes diagnostic. 60-day warranty. All brands. Call (619) 488-4477. Mon–Fri 9AM–6PM, Sat 10AM–5PM.",
    primaryKeyword: "dishwasher repair san diego",
    priceRange: "$300–$400",
    priceMin: 300,
    priceMax: 400,
    icon: "Dishwasher",
    shortDesc: "Drainage, leaks, door latches, and control boards. All brands.",
    relatedServiceSlugs: ["washer-repair", "refrigerator-repair", "appliance-installation"],
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
    h1: "Refrigerator Repair in San Diego, CA — NTSZOT Appliance Repair",
    metaTitle: "Refrigerator Repair San Diego | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Refrigerator repair in San Diego — $80 service call includes diagnostic. 60-day warranty. All brands. Call (619) 488-4477. Mon–Fri 9AM–6PM, Sat 10AM–5PM.",
    primaryKeyword: "refrigerator repair san diego",
    priceRange: "$300–$400",
    priceMin: 300,
    priceMax: 400,
    icon: "Refrigerator",
    shortDesc: "Cooling issues, ice makers, water dispensers. All brands.",
    relatedServiceSlugs: ["freezer-repair", "ice-maker-repair", "appliance-installation"],
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
    h1: "Freezer Repair in San Diego, CA — NTSZOT Appliance Repair",
    metaTitle: "Freezer Repair San Diego | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Freezer repair in San Diego — $80 service call includes diagnostic. 60-day warranty. All brands. Call (619) 488-4477. Mon–Fri 9AM–6PM, Sat 10AM–5PM.",
    primaryKeyword: "freezer repair san diego",
    priceRange: "$300–$400",
    priceMin: 300,
    priceMax: 400,
    icon: "Freezer",
    shortDesc: "Chest and upright freezers. Compressor, thermostat, and seal repairs.",
    relatedServiceSlugs: ["refrigerator-repair", "ice-maker-repair", "appliance-installation"],
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
    h1: "Ice Maker Repair in San Diego, CA — NTSZOT Appliance Repair",
    metaTitle: "Ice Maker Repair San Diego | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Ice maker repair in San Diego — $80 service call includes diagnostic. 60-day warranty. All brands. Call (619) 488-4477. Mon–Fri 9AM–6PM, Sat 10AM–5PM.",
    primaryKeyword: "ice maker repair san diego",
    priceRange: "$300–$400",
    priceMin: 300,
    priceMax: 400,
    icon: "IceMaker",
    shortDesc: "Built-in and freestanding ice makers. All brands.",
    relatedServiceSlugs: ["refrigerator-repair", "freezer-repair", "appliance-installation"],
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
    h1: "Microwave Repair in San Diego, CA — NTSZOT Appliance Repair",
    metaTitle: "Microwave Repair San Diego | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Microwave repair in San Diego — $80 service call includes diagnostic. Built-in and countertop. Call (619) 488-4477. Mon–Fri 9AM–6PM, Sat 10AM–5PM.",
    primaryKeyword: "microwave repair san diego",
    priceRange: "$300–$400",
    priceMin: 300,
    priceMax: 400,
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
    h1: "Range Hood Repair in San Diego, CA — NTSZOT Appliance Repair",
    metaTitle: "Range Hood Repair San Diego | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Range hood repair in San Diego — $80 service call includes diagnostic. 60-day warranty. All brands. Call (619) 488-4477. Mon–Fri 9AM–6PM, Sat 10AM–5PM.",
    primaryKeyword: "range hood repair san diego",
    priceRange: "$300–$400",
    priceMin: 300,
    priceMax: 400,
    icon: "RangeHood",
    shortDesc: "Fan, motor, lights, and control repairs. All brands.",
    relatedServiceSlugs: ["oven-range-stove-repair", "microwave-repair", "appliance-installation"],
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
    h1: "Appliance Installation in San Diego, CA — NTSZOT Appliance Repair",
    metaTitle: "Appliance Installation San Diego | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Appliance installation in San Diego — $250–$350. Includes connection, leveling & testing. Call (619) 488-4477.",
    primaryKeyword: "appliance installation san diego",
    priceRange: "$250–$350",
    priceMin: 250,
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
]

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
