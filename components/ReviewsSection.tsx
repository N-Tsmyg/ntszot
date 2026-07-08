import { Star } from "lucide-react"

const PLACEHOLDER_REVIEWS = [
  {
    name: "Maria T.",
    location: "San Diego, CA",
    text: "Our refrigerator stopped cooling on a Friday night. NTSZOT came out Saturday morning, diagnosed the problem, and fixed it the same visit. The $80 service call fee was waived since we did the repair. Honest and fast.",
    rating: 5,
  },
  {
    name: "James R.",
    location: "La Jolla, CA",
    text: "Called about our Bosch dishwasher not draining. Technician arrived within the 3-hour window, explained exactly what was wrong before touching anything, and had it running in under an hour. 60-day warranty gives real peace of mind.",
    rating: 5,
  },
  {
    name: "Sandra M.",
    location: "Chula Vista, CA",
    text: "I manage several rental units and NTSZOT is my go-to for appliance issues. They work around my schedule, show up when they say they will, and the upfront pricing makes authorizing repairs easy.",
    rating: 5,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
      ))}
    </div>
  )
}

export default function ReviewsSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-brand-slate mb-1">
            What San Diego Homeowners Say
          </h2>
          <p className="text-sm text-gray-500">
            ⭐⭐⭐⭐⭐ 5.0 · Google Reviews
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PLACEHOLDER_REVIEWS.map((r) => (
            <div
              key={r.name}
              className="rounded-xl bg-white border border-gray-200 p-6 flex flex-col gap-3"
            >
              <Stars count={r.rating} />
              <p className="text-sm text-gray-700 leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
              <div>
                <p className="text-sm font-semibold text-brand-slate">{r.name}</p>
                <p className="text-xs text-gray-500">{r.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
