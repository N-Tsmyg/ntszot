import { Star, ExternalLink } from "lucide-react"

const REVIEWS = [
  {
    name: "Steven Jew",
    location: "San Diego, CA",
    text: "First American warranty connected me with this company when my dishwasher screen went blank. Diagnosis was the next day and after a 10 minute consult, a part was ordered and installed a week later in 20 minutes. I'd probably contact them directly in the future if I had another appliance that wasn't covered under warranty.",
    rating: 5,
  },
  {
    name: "Ming Lao",
    location: "San Diego, CA",
    text: "Hard working team who will keep at it until the work is done. We have Andrew and his team fixing the dryer, which is not an easy task. They did not give up and we are happy with the final result. THANK YOU NTSZOT.",
    rating: 5,
  },
  {
    name: "Paula Maglione",
    location: "San Diego, CA",
    text: "NTS ZOT, Inc. and specifically Amantai were great. Appointments timely, DW diagnosed, part ordered and installed with no issue. Amantai was efficient and courteous. Would use this vendor again.",
    rating: 5,
  },
]

const GOOGLE_REVIEWS_URL = "https://share.google/W6qtceRXWmVWXIE88"

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
            What San Diego Homeowners Say About NTSZOT
          </h2>
          <p className="text-sm text-gray-500 mb-2">
            ⭐⭐⭐⭐⭐ Google Reviews
          </p>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-brand-blue hover:underline"
          >
            See all our Google Reviews
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
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
        <div className="text-center mt-6">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-brand-blue px-5 py-2.5 text-sm font-semibold text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
          >
            Read All Reviews on Google
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
