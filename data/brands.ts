export type BrandTier = "mainstream" | "premium" | "specialty"

export interface Brand {
  id: string
  name: string
  slug: string
  tier: BrandTier
  h1: string
  metaTitle: string
  metaDescription: string
  primaryKeyword: string
  appliancesServiced: string[]
  topSymptoms: string[]
  contentNote: string
}

export const BRANDS: Brand[] = [
  {
    id: "samsung",
    name: "Samsung",
    slug: "samsung-appliance-repair-san-diego",
    tier: "mainstream",
    h1: "Samsung Appliance Repair in San Diego, CA — NTSZOT Appliance Repair",
    metaTitle: "Samsung Appliance Repair San Diego",
    metaDescription:
      "Samsung appliance repair in San Diego — $80 service call fee waived if we fix it. 60-day warranty. Refrigerators, washers, dryers & more. Call (619) 488-4477.",
    primaryKeyword: "samsung appliance repair san diego",
    appliancesServiced: ["Refrigerators", "Washers", "Dryers", "Dishwashers", "Ovens & Ranges", "Microwaves"],
    topSymptoms: [
      "Samsung refrigerator not cooling",
      "Samsung ice maker not working",
      "Samsung washer DC error code",
      "Samsung dryer not heating",
      "Samsung dishwasher LC error code",
    ],
    contentNote:
      "Samsung appliances are known for ice maker failures in refrigerators and OE/DC error codes in washers. Mention these specifically.",
  },
  {
    id: "lg",
    name: "LG",
    slug: "lg-appliance-repair-san-diego",
    tier: "mainstream",
    h1: "LG Appliance Repair in San Diego, CA — NTSZOT Appliance Repair",
    metaTitle: "LG Appliance Repair San Diego",
    metaDescription:
      "LG appliance repair in San Diego — $80 service call fee waived if we fix it. 60-day warranty. Washers, refrigerators & more. Call (619) 488-4477.",
    primaryKeyword: "lg appliance repair san diego",
    appliancesServiced: ["Washers", "Dryers", "Refrigerators", "Dishwashers", "Ovens & Ranges", "Microwaves"],
    topSymptoms: [
      "LG washer won't drain",
      "LG washer OE error code",
      "LG refrigerator not cooling",
      "LG dryer D80 flow sense error",
      "LG dishwasher not draining",
    ],
    contentNote:
      "LG linear compressor failures are common. OE (drain) and LE (motor) error codes on washers are top search queries.",
  },
  {
    id: "whirlpool",
    name: "Whirlpool",
    slug: "whirlpool-appliance-repair-san-diego",
    tier: "mainstream",
    h1: "Whirlpool Appliance Repair in San Diego, CA — NTSZOT Appliance Repair",
    metaTitle: "Whirlpool Appliance Repair San Diego",
    metaDescription:
      "Whirlpool appliance repair in San Diego — $80 service call fee waived if we fix it. 60-day warranty. All Whirlpool appliances. Call (619) 488-4477.",
    primaryKeyword: "whirlpool appliance repair san diego",
    appliancesServiced: ["Washers", "Dryers", "Refrigerators", "Dishwashers", "Ovens & Ranges", "Microwaves"],
    topSymptoms: [
      "Whirlpool dryer not heating",
      "Whirlpool washer not spinning",
      "Whirlpool dishwasher not draining",
      "Whirlpool refrigerator ice maker not working",
      "Whirlpool oven not heating",
    ],
    contentNote:
      "Whirlpool thermal fuse failures in dryers are extremely common. Also manufactures KitchenAid and Maytag on shared platforms.",
  },
  {
    id: "ge",
    name: "GE",
    slug: "ge-appliance-repair-san-diego",
    tier: "mainstream",
    h1: "GE Appliance Repair in San Diego, CA — NTSZOT Appliance Repair",
    metaTitle: "GE Appliance Repair San Diego",
    metaDescription:
      "GE appliance repair in San Diego — $80 service call fee waived if we fix it. 60-day warranty. GE & GE Profile appliances. Call (619) 488-4477.",
    primaryKeyword: "ge appliance repair san diego",
    appliancesServiced: ["Refrigerators", "Washers", "Dryers", "Dishwashers", "Ovens & Ranges", "Microwaves"],
    topSymptoms: [
      "GE refrigerator not making ice",
      "GE dishwasher not draining",
      "GE washer lid lock issue",
      "GE oven F-code error",
      "GE Profile refrigerator not cooling",
    ],
    contentNote: "GE Profile is a premium GE line worth mentioning — higher job value. F-code oven errors are common search queries.",
  },
  {
    id: "kitchenaid",
    name: "KitchenAid",
    slug: "kitchenaid-appliance-repair-san-diego",
    tier: "mainstream",
    h1: "KitchenAid Appliance Repair in San Diego, CA — NTSZOT Appliance Repair",
    metaTitle: "KitchenAid Appliance Repair San Diego",
    metaDescription:
      "KitchenAid appliance repair in San Diego — $80 service call fee waived if we fix it. 60-day warranty. Dishwashers, refrigerators & more. Call (619) 488-4477.",
    primaryKeyword: "kitchenaid appliance repair san diego",
    appliancesServiced: ["Dishwashers", "Refrigerators", "Washers", "Dryers", "Ovens & Ranges"],
    topSymptoms: [
      "KitchenAid dishwasher not draining",
      "KitchenAid dishwasher beeping",
      "KitchenAid refrigerator not making ice",
      "KitchenAid oven not heating",
      "KitchenAid dishwasher clean light blinking",
    ],
    contentNote:
      "KitchenAid is a premium Whirlpool brand. Dishwashers are the #1 KitchenAid repair call. Clean light blinking = control board signal.",
  },
  {
    id: "kenmore",
    name: "Kenmore",
    slug: "kenmore-appliance-repair-san-diego",
    tier: "mainstream",
    h1: "Kenmore Appliance Repair in San Diego, CA — NTSZOT Appliance Repair",
    metaTitle: "Kenmore Appliance Repair San Diego",
    metaDescription:
      "Kenmore appliance repair in San Diego — $80 service call fee waived if we fix it. 60-day warranty. All Kenmore models. Call (619) 488-4477.",
    primaryKeyword: "kenmore appliance repair san diego",
    appliancesServiced: ["Washers", "Dryers", "Refrigerators", "Dishwashers", "Ovens & Ranges"],
    topSymptoms: [
      "Kenmore washer not draining",
      "Kenmore dryer not heating",
      "Kenmore refrigerator not cooling",
      "Kenmore dishwasher not cleaning",
      "Kenmore oven igniter not working",
    ],
    contentNote:
      "Kenmore is a Sears brand manufactured by LG, Whirlpool, and Electrolux. Large installed base from the Sears era — high demand for repair.",
  },
  {
    id: "bosch",
    name: "Bosch",
    slug: "bosch-appliance-repair-san-diego",
    tier: "mainstream",
    h1: "Bosch Appliance Repair in San Diego, CA — NTSZOT Appliance Repair",
    metaTitle: "Bosch Appliance Repair San Diego",
    metaDescription:
      "Bosch appliance repair in San Diego — $80 service call fee waived if we fix it. 60-day warranty. Dishwashers, refrigerators & more. Call (619) 488-4477.",
    primaryKeyword: "bosch appliance repair san diego",
    appliancesServiced: ["Dishwashers", "Refrigerators", "Ovens & Ranges", "Washers"],
    topSymptoms: [
      "Bosch dishwasher not draining",
      "Bosch dishwasher E24 error",
      "Bosch refrigerator not cooling",
      "Bosch oven not heating",
      "Bosch dishwasher door latch problem",
    ],
    contentNote:
      "Bosch dominates the premium dishwasher market in San Diego. E24 error (drain hose/pump) is the most searched Bosch repair query.",
  },
  {
    id: "electrolux",
    name: "Electrolux",
    slug: "electrolux-appliance-repair-san-diego",
    tier: "mainstream",
    h1: "Electrolux Appliance Repair in San Diego, CA — NTSZOT Appliance Repair",
    metaTitle: "Electrolux Appliance Repair San Diego",
    metaDescription:
      "Electrolux appliance repair in San Diego — $80 service call fee waived if we fix it. 60-day warranty. Washers, dryers & more. Call (619) 488-4477.",
    primaryKeyword: "electrolux appliance repair san diego",
    appliancesServiced: ["Washers", "Dryers", "Refrigerators", "Dishwashers", "Ovens & Ranges"],
    topSymptoms: [
      "Electrolux washer not draining",
      "Electrolux dryer not heating",
      "Electrolux refrigerator not cooling",
      "Electrolux dishwasher error code",
      "Electrolux oven temperature off",
    ],
    contentNote: "Electrolux also manufactures Frigidaire. Can note shared engineering platform in content.",
  },
  {
    id: "miele",
    name: "Miele",
    slug: "miele-appliance-repair-san-diego",
    tier: "premium",
    h1: "Miele Appliance Repair in San Diego, CA — NTSZOT Appliance Repair",
    metaTitle: "Miele Appliance Repair San Diego",
    metaDescription:
      "Miele appliance repair in San Diego — $80 service call fee waived if we fix it. 60-day warranty. Dishwashers, washers & more. Call (619) 488-4477.",
    primaryKeyword: "miele appliance repair san diego",
    appliancesServiced: ["Dishwashers", "Washers", "Dryers", "Refrigerators"],
    topSymptoms: [
      "Miele dishwasher not draining",
      "Miele dishwasher intake fault",
      "Miele washer not spinning",
      "Miele dryer not heating",
      "Miele refrigerator not cooling",
    ],
    contentNote:
      "Miele users value quality above price. Tone should reflect the premium nature — emphasize 60-day warranty and technician experience. Do NOT claim factory-certified.",
  },
  {
    id: "sub-zero",
    name: "Sub-Zero",
    slug: "sub-zero-appliance-repair-san-diego",
    tier: "premium",
    h1: "Sub-Zero Appliance Repair in San Diego, CA — NTSZOT Appliance Repair",
    metaTitle: "Sub-Zero Appliance Repair San Diego",
    metaDescription:
      "Sub-Zero refrigerator repair in San Diego — $80 service call fee waived if we fix it. 60-day warranty. All Sub-Zero models. Call (619) 488-4477.",
    primaryKeyword: "sub-zero appliance repair san diego",
    appliancesServiced: ["Refrigerators", "Wine Coolers", "Freezers", "Ice Makers"],
    topSymptoms: [
      "Sub-Zero refrigerator not cooling",
      "Sub-Zero ice maker not working",
      "Sub-Zero alarm beeping",
      "Sub-Zero refrigerator leaking",
      "Sub-Zero wine cooler not cooling",
    ],
    contentNote:
      "Sub-Zero owners have $5,000–$12,000+ invested in their appliance. Lead with 60-day warranty and upfront quote. Emphasize confidence over price.",
  },
  {
    id: "thermador",
    name: "Thermador",
    slug: "thermador-appliance-repair-san-diego",
    tier: "premium",
    h1: "Thermador Appliance Repair in San Diego, CA — NTSZOT Appliance Repair",
    metaTitle: "Thermador Appliance Repair San Diego",
    metaDescription:
      "Thermador appliance repair in San Diego — $80 service call fee waived if we fix it. 60-day warranty. Ranges, dishwashers & more. Call (619) 488-4477.",
    primaryKeyword: "thermador appliance repair san diego",
    appliancesServiced: ["Ranges & Cooktops", "Ovens", "Dishwashers", "Refrigerators"],
    topSymptoms: [
      "Thermador range not heating",
      "Thermador oven not heating",
      "Thermador dishwasher not draining",
      "Thermador cooktop burner not lighting",
      "Thermador refrigerator not cooling",
    ],
    contentNote:
      "Thermador is premium professional kitchen equipment. Star Burner ranges are the flagship product. Content should reference professional-grade cooking equipment.",
  },
  {
    id: "speed-queen",
    name: "Speed Queen",
    slug: "speed-queen-appliance-repair-san-diego",
    tier: "specialty",
    h1: "Speed Queen Appliance Repair in San Diego, CA — NTSZOT Appliance Repair",
    metaTitle: "Speed Queen Appliance Repair San Diego",
    metaDescription:
      "Speed Queen washer & dryer repair in San Diego — $80 service call fee waived if we fix it. 60-day warranty. All models. Call (619) 488-4477.",
    primaryKeyword: "speed queen appliance repair san diego",
    appliancesServiced: ["Washers", "Dryers"],
    topSymptoms: [
      "Speed Queen washer not spinning",
      "Speed Queen dryer not heating",
      "Speed Queen washer lid lock issue",
      "Speed Queen dryer taking too long",
      "Speed Queen washer not draining",
    ],
    contentNote:
      "Speed Queen users chose this brand for durability and longevity. Frame content around expert maintenance to extend appliance life. Annual Maintenance Plan is a natural fit.",
  },
]

export function getBrandBySlug(slug: string): Brand | undefined {
  return BRANDS.find((b) => b.slug === slug)
}
