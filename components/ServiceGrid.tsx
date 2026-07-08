import Link from "next/link"
import { SERVICES } from "@/data/services"
import { Wrench } from "lucide-react"

export default function ServiceGrid() {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-brand-slate mb-2 text-center">
          Appliance Repair Services
        </h2>
        <p className="text-center text-gray-500 text-sm mb-8">
          All major brands. In-home service. Most repairs completed same visit.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}/`}
              className="group flex flex-col items-center gap-3 rounded-2xl bg-white shadow-md hover:shadow-xl p-5 text-center ring-1 ring-gray-100 hover:ring-brand-blue transition-all duration-200"
            >
              <div className="rounded-full bg-brand-blue/10 p-4 group-hover:bg-brand-blue/20 transition-colors">
                <Wrench className="h-6 w-6 text-brand-blue" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-slate">{s.name}</p>
                <p className="mt-0.5 text-xs text-gray-500">{s.priceRange}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
