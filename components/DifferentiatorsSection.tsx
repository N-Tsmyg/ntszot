import { DIFFERENTIATORS } from "@/data/constants"
import { ShieldCheck } from "lucide-react"

export default function DifferentiatorsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-brand-slate mb-8 text-center">
          Why San Diego Homeowners Call NTSZOT
        </h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {DIFFERENTIATORS.map((d) => (
            <div key={d.id} className="flex gap-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow p-5">
              <ShieldCheck
                className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue"
                aria-hidden="true"
              />
              <div>
                <p className="font-semibold text-brand-slate text-sm">{d.headline}</p>
                <p className="mt-1 text-xs text-gray-600 leading-relaxed">{d.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
