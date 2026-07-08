export type Hook = "A" | "B" | "C"

export interface Location {
  name: string
  slug: string
  zip: string
  gmbEnabled: boolean
  hook: Hook
  landmark1: string
  landmark2: string
  adjacentCities: string[]
  localVernacular: string
  metaTitle: string
  metaDescription: string
}

export const LOCATIONS: Location[] = [
  {
    name: "San Diego",
    slug: "san-diego-appliance-repair",
    zip: "92101",
    gmbEnabled: true,
    hook: "A",
    landmark1: "Balboa Park",
    landmark2: "Petco Park",
    adjacentCities: ["La Jolla", "Chula Vista", "National City"],
    localVernacular: "marine layer humidity and coastal salt air that corrode appliance coils and door seals",
    metaTitle: "Appliance Repair San Diego | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Appliance repair in San Diego — $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. 7 days a week. Call (858) 264-3138.",
  },
  {
    name: "Chula Vista",
    slug: "chula-vista-appliance-repair",
    zip: "91910",
    gmbEnabled: true,
    hook: "B",
    landmark1: "Otay Ranch Town Center",
    landmark2: "Chula Vista Bayfront",
    adjacentCities: ["National City", "San Diego", "Lemon Grove"],
    localVernacular: "hard water scale (300+ ppm) that damages dishwashers and washing machines",
    metaTitle: "Appliance Repair Chula Vista | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Appliance repair in Chula Vista — $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. 7 days a week. Call (858) 264-3138.",
  },
  {
    name: "La Mesa",
    slug: "la-mesa-appliance-repair",
    zip: "91941",
    gmbEnabled: true,
    hook: "C",
    landmark1: "La Mesa Village",
    landmark2: "Grossmont Center",
    adjacentCities: ["El Cajon", "Lemon Grove", "San Diego"],
    localVernacular: "inland heat and Santa Ana wind dust that clog dryer vents and refrigerator coils",
    metaTitle: "Appliance Repair La Mesa | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Appliance repair in La Mesa — $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. 7 days a week. Call (858) 264-3138.",
  },
  {
    name: "El Cajon",
    slug: "el-cajon-appliance-repair",
    zip: "92020",
    gmbEnabled: true,
    hook: "A",
    landmark1: "Parkway Plaza",
    landmark2: "El Cajon Valley",
    adjacentCities: ["Santee", "La Mesa", "Lemon Grove"],
    localVernacular: "hot valley summers and Santa Ana winds that push dust into appliance vents and coils",
    metaTitle: "Appliance Repair El Cajon | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Appliance repair in El Cajon — $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. 7 days a week. Call (858) 264-3138.",
  },
  {
    name: "Santee",
    slug: "santee-appliance-repair",
    zip: "92071",
    gmbEnabled: true,
    hook: "B",
    landmark1: "Santee Lakes Recreation Preserve",
    landmark2: "Trolley Square",
    adjacentCities: ["El Cajon", "Lakeside", "Poway"],
    localVernacular: "canyon breeze and inland dust that accelerate lint buildup in dryers",
    metaTitle: "Appliance Repair Santee | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Appliance repair in Santee — $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. 7 days a week. Call (858) 264-3138.",
  },
  {
    name: "La Jolla",
    slug: "la-jolla-appliance-repair",
    zip: "92037",
    gmbEnabled: true,
    hook: "C",
    landmark1: "La Jolla Cove",
    landmark2: "UC San Diego",
    adjacentCities: ["San Diego", "Del Mar", "Pacific Beach"],
    localVernacular: "coastal salt air and marine layer that corrode refrigerator condenser coils and washer drums",
    metaTitle: "Appliance Repair La Jolla | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Appliance repair in La Jolla — $85 diagnostic fee waived if we fix it. 90-day warranty. Sub-Zero, Miele, all brands. Call (858) 264-3138.",
  },
  {
    name: "Del Mar",
    slug: "del-mar-appliance-repair",
    zip: "92014",
    gmbEnabled: true,
    hook: "A",
    landmark1: "Del Mar Fairgrounds",
    landmark2: "Del Mar Beach",
    adjacentCities: ["Solana Beach", "La Jolla", "Carmel Valley"],
    localVernacular: "oceanfront salt air and marine layer humidity that accelerate appliance corrosion",
    metaTitle: "Appliance Repair Del Mar | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Appliance repair in Del Mar — $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. 7 days a week. Call (858) 264-3138.",
  },
  {
    name: "Poway",
    slug: "poway-appliance-repair",
    zip: "92064",
    gmbEnabled: true,
    hook: "B",
    landmark1: "Lake Poway",
    landmark2: "Poway Town Center",
    adjacentCities: ["Rancho Bernardo", "Santee", "San Diego"],
    localVernacular: "inland valley heat and Santa Ana dust that clog filters and shorten appliance life",
    metaTitle: "Appliance Repair Poway | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Appliance repair in Poway — $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. 7 days a week. Call (858) 264-3138.",
  },
  {
    name: "Rancho Bernardo",
    slug: "rancho-bernardo-appliance-repair",
    zip: "92128",
    gmbEnabled: true,
    hook: "C",
    landmark1: "Westfield North County",
    landmark2: "Rancho Bernardo Community Park",
    adjacentCities: ["Poway", "Escondido", "San Marcos"],
    localVernacular: "hard water and warm inland temperatures that strain refrigerator compressors",
    metaTitle: "Appliance Repair Rancho Bernardo | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Appliance repair in Rancho Bernardo — $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. Call (858) 264-3138.",
  },
  {
    name: "National City",
    slug: "national-city-appliance-repair",
    zip: "91950",
    gmbEnabled: true,
    hook: "A",
    landmark1: "National City Civic Center",
    landmark2: "Paradise Creek Educational Park",
    adjacentCities: ["Chula Vista", "San Diego", "Lemon Grove"],
    localVernacular: "coastal proximity and hard water that wear down dishwasher and washing machine components",
    metaTitle: "Appliance Repair National City | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Appliance repair in National City — $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. Call (858) 264-3138.",
  },
  {
    name: "Ramona",
    slug: "ramona-appliance-repair",
    zip: "92065",
    gmbEnabled: true,
    hook: "B",
    landmark1: "Ramona Community Park",
    landmark2: "Lake Sutherland",
    adjacentCities: ["Poway", "Santee", "Escondido"],
    localVernacular: "rural valley heat and Santa Ana winds that push fine dust into appliance motors and vents",
    metaTitle: "Appliance Repair Ramona | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Appliance repair in Ramona — $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. 7 days a week. Call (858) 264-3138.",
  },
  {
    name: "Fallbrook",
    slug: "fallbrook-appliance-repair",
    zip: "92028",
    gmbEnabled: true,
    hook: "C",
    landmark1: "Fallbrook Village",
    landmark2: "Pala Mesa Golf Resort",
    adjacentCities: ["Vista", "Oceanside", "San Marcos"],
    localVernacular: "avocado grove dust and dry inland air that accelerate appliance filter and coil buildup",
    metaTitle: "Appliance Repair Fallbrook | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Appliance repair in Fallbrook — $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. 7 days a week. Call (858) 264-3138.",
  },
  {
    name: "Oceanside",
    slug: "oceanside-appliance-repair",
    zip: "92054",
    gmbEnabled: true,
    hook: "A",
    landmark1: "Oceanside Pier",
    landmark2: "Oceanside Harbor",
    adjacentCities: ["Carlsbad", "Vista", "San Marcos"],
    localVernacular: "ocean salt air and coastal humidity that corrode appliance coils and electrical connections",
    metaTitle: "Appliance Repair Oceanside | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Appliance repair in Oceanside — $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. 7 days a week. Call (858) 264-3138.",
  },
  {
    name: "San Marcos",
    slug: "san-marcos-appliance-repair",
    zip: "92069",
    gmbEnabled: true,
    hook: "B",
    landmark1: "Cal State San Marcos",
    landmark2: "San Marcos Creek District",
    adjacentCities: ["Escondido", "Vista", "Carlsbad"],
    localVernacular: "inland valley heat and hard water that degrade dishwasher filters and washing machine components",
    metaTitle: "Appliance Repair San Marcos | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Appliance repair in San Marcos — $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. 7 days a week. Call (858) 264-3138.",
  },
  {
    name: "Encinitas",
    slug: "encinitas-appliance-repair",
    zip: "92024",
    gmbEnabled: true,
    hook: "C",
    landmark1: "Moonlight Beach",
    landmark2: "Leucadia Blvd",
    adjacentCities: ["Carlsbad", "Del Mar", "Solana Beach"],
    localVernacular: "coastal salt air and marine layer that corrode refrigerator condenser coils and stainless steel door seals",
    metaTitle: "Appliance Repair Encinitas | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Appliance repair in Encinitas — $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. 7 days a week. Call (858) 264-3138.",
  },
  {
    name: "Escondido",
    slug: "escondido-appliance-repair",
    zip: "92025",
    gmbEnabled: true,
    hook: "A",
    landmark1: "California Center for the Arts",
    landmark2: "Westfield North County",
    adjacentCities: ["San Marcos", "Rancho Bernardo", "Valley Center"],
    localVernacular: "hot inland summers and hard water that stress compressors and leave mineral deposits in appliances",
    metaTitle: "Appliance Repair Escondido | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Appliance repair in Escondido — $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. 7 days a week. Call (858) 264-3138.",
  },
  {
    name: "Valley Center",
    slug: "valley-center-appliance-repair",
    zip: "92082",
    gmbEnabled: true,
    hook: "B",
    landmark1: "Valley Center Community Park",
    landmark2: "Harrah's Resort Southern California",
    adjacentCities: ["Escondido", "Ramona", "San Marcos"],
    localVernacular: "rural heat, well water, and Santa Ana dust that accelerate appliance wear",
    metaTitle: "Appliance Repair Valley Center | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Appliance repair in Valley Center — $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. 7 days a week. Call (858) 264-3138.",
  },
  {
    name: "Lemon Grove",
    slug: "lemon-grove-appliance-repair",
    zip: "91945",
    gmbEnabled: true,
    hook: "C",
    landmark1: "Lemon Grove Historical Society",
    landmark2: "Lemon Grove Town Square",
    adjacentCities: ["La Mesa", "National City", "El Cajon"],
    localVernacular: "hard water and warm inland temperatures that build mineral scale in dishwashers and washing machines",
    metaTitle: "Appliance Repair Lemon Grove | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Appliance repair in Lemon Grove — $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. 7 days a week. Call (858) 264-3138.",
  },
  {
    name: "Carlsbad",
    slug: "carlsbad-appliance-repair",
    zip: "92008",
    gmbEnabled: true,
    hook: "A",
    landmark1: "Carlsbad Village",
    landmark2: "LEGOLAND California",
    adjacentCities: ["Oceanside", "Encinitas", "Vista"],
    localVernacular: "coastal salt air and marine layer that corrode appliance coils and accelerate wear on coastal homes",
    metaTitle: "Appliance Repair Carlsbad | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Appliance repair in Carlsbad — $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. 7 days a week. Call (858) 264-3138.",
  },
  {
    name: "Vista",
    slug: "vista-appliance-repair",
    zip: "92083",
    gmbEnabled: true,
    hook: "B",
    landmark1: "Moonlight Amphitheatre",
    landmark2: "Vista Village",
    adjacentCities: ["Oceanside", "San Marcos", "Fallbrook"],
    localVernacular: "inland valley heat and hard water that degrade appliance components faster than coastal areas",
    metaTitle: "Appliance Repair Vista | WNDW Appliance Repair | (858) 264-3138",
    metaDescription:
      "Appliance repair in Vista — $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. 7 days a week. Call (858) 264-3138.",
  },
]

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug)
}
