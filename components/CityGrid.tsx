import Link from "next/link"
import { LOCATIONS } from "@/data/locations"
import { MapPin } from "lucide-react"

export default function CityGrid() {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-brand-slate mb-2 text-center">
          Serving All of San Diego County
        </h2>
        <p className="text-center text-gray-500 text-sm mb-8">
          In-home repair across 20 cities. Mon–Fri 9AM–6PM, Sat 10AM–5PM · Sun closed.
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {LOCATIONS.map((loc) => (
            <Link
              key={loc.slug}
              href={`/${loc.slug}/`}
              className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-brand-slate hover:border-brand-blue hover:bg-blue-50 transition-colors"
            >
              <MapPin className="h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
              {loc.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
