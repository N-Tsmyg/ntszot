import Link from "next/link"
import { BRANDS } from "@/data/brands"

export default function BrandGrid() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-brand-slate mb-2 text-center">
          All Major Brands Serviced
        </h2>
        <p className="text-center text-gray-500 text-sm mb-8">
          One call, one technician — no brand runaround.
        </p>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {BRANDS.map((b) => (
            <Link
              key={b.slug}
              href={`/brands/${b.slug}/`}
              className="flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-4 text-sm font-semibold text-brand-slate hover:border-brand-blue hover:text-brand-blue transition-colors text-center"
            >
              {b.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
