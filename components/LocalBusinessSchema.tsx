import {
  COMPANY_NAME,
  COMPANY_PHONE_SCHEMA,
  COMPANY_EMAIL,
  COMPANY_WEBSITE,
  GEO_LAT,
  GEO_LNG,
} from "@/data/constants"
import { SERVICES } from "@/data/services"
import { LOCATIONS } from "@/data/locations"

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${COMPANY_WEBSITE}/#organization`,
    name: COMPANY_NAME,
    telephone: COMPANY_PHONE_SCHEMA,
    email: COMPANY_EMAIL,
    url: COMPANY_WEBSITE,
    address: {
      "@type": "PostalAddress",
      streetAddress: "3712 Mt Abbey Ave",
      addressLocality: "San Diego",
      addressRegion: "CA",
      postalCode: "92111",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO_LAT,
      longitude: GEO_LNG,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "08:00",
        closes: "22:00",
      },
    ],
    areaServed: LOCATIONS.map((loc) => ({
      "@type": "City",
      name: loc.name,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Appliance Repair Services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          url: `${COMPANY_WEBSITE}/services/${s.slug}/`,
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "1",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
