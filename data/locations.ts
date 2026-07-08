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
    metaTitle: "Appliance Repair San Diego | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Appliance repair in San Diego — $80 service call fee waived if we fix it. 60-day warranty. All brands. 6 days a week. Call (619) 488-4477.",
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
    metaTitle: "Appliance Repair Chula Vista | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Appliance repair in Chula Vista — $80 service call fee waived if we fix it. 60-day warranty. All brands. 6 days a week. Call (619) 488-4477.",
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
    metaTitle: "Appliance Repair La Mesa | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Appliance repair in La Mesa — $80 service call fee waived if we fix it. 60-day warranty. All brands. 6 days a week. Call (619) 488-4477.",
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
    metaTitle: "Appliance Repair El Cajon | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Appliance repair in El Cajon — $80 service call fee waived if we fix it. 60-day warranty. All brands. 6 days a week. Call (619) 488-4477.",
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
    metaTitle: "Appliance Repair Santee | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Appliance repair in Santee — $80 service call fee waived if we fix it. 60-day warranty. All brands. 6 days a week. Call (619) 488-4477.",
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
    metaTitle: "Appliance Repair La Jolla | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Appliance repair in La Jolla — $80 service call fee waived if we fix it. 60-day warranty. Sub-Zero, Miele, all brands. Call (619) 488-4477.",
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
    metaTitle: "Appliance Repair Del Mar | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Appliance repair in Del Mar — $80 service call fee waived if we fix it. 60-day warranty. All brands. 6 days a week. Call (619) 488-4477.",
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
    metaTitle: "Appliance Repair Poway | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Appliance repair in Poway — $80 service call fee waived if we fix it. 60-day warranty. All brands. 6 days a week. Call (619) 488-4477.",
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
    metaTitle: "Appliance Repair Rancho Bernardo | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Appliance repair in Rancho Bernardo — $80 service call fee waived if we fix it. 60-day warranty. All brands. Call (619) 488-4477.",
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
    metaTitle: "Appliance Repair National City | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Appliance repair in National City — $80 service call fee waived if we fix it. 60-day warranty. All brands. Call (619) 488-4477.",
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
    metaTitle: "Appliance Repair Ramona | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Appliance repair in Ramona — $80 service call fee waived if we fix it. 60-day warranty. All brands. 6 days a week. Call (619) 488-4477.",
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
    metaTitle: "Appliance Repair Fallbrook | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Appliance repair in Fallbrook — $80 service call fee waived if we fix it. 60-day warranty. All brands. 6 days a week. Call (619) 488-4477.",
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
    metaTitle: "Appliance Repair Oceanside | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Appliance repair in Oceanside — $80 service call fee waived if we fix it. 60-day warranty. All brands. 6 days a week. Call (619) 488-4477.",
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
    metaTitle: "Appliance Repair San Marcos | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Appliance repair in San Marcos — $80 service call fee waived if we fix it. 60-day warranty. All brands. 6 days a week. Call (619) 488-4477.",
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
    metaTitle: "Appliance Repair Encinitas | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Appliance repair in Encinitas — $80 service call fee waived if we fix it. 60-day warranty. All brands. 6 days a week. Call (619) 488-4477.",
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
    metaTitle: "Appliance Repair Escondido | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Appliance repair in Escondido — $80 service call fee waived if we fix it. 60-day warranty. All brands. 6 days a week. Call (619) 488-4477.",
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
    metaTitle: "Appliance Repair Valley Center | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Appliance repair in Valley Center — $80 service call fee waived if we fix it. 60-day warranty. All brands. 6 days a week. Call (619) 488-4477.",
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
    metaTitle: "Appliance Repair Lemon Grove | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Appliance repair in Lemon Grove — $80 service call fee waived if we fix it. 60-day warranty. All brands. 6 days a week. Call (619) 488-4477.",
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
    metaTitle: "Appliance Repair Carlsbad | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Appliance repair in Carlsbad — $80 service call fee waived if we fix it. 60-day warranty. All brands. 6 days a week. Call (619) 488-4477.",
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
    metaTitle: "Appliance Repair Vista | NTSZOT Appliance Repair | (619) 488-4477",
    metaDescription:
      "Appliance repair in Vista — $80 service call fee waived if we fix it. 60-day warranty. All brands. 6 days a week. Call (619) 488-4477.",
  },
]

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug)
}
