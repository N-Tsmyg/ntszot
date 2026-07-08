import { Star, ExternalLink } from "lucide-react"

// TODO: Replace placeholder reviews below with real NTSZOT Google reviews.
// Real reviews link: https://share.google/W6qtceRXWmVWXIE88
// Once you have the review texts, paste them here replacing the placeholder content.
const REVIEWS = [
  {
    name: "Placeholder — Add Real Review",
    location: "San Diego, CA",
    text: "Real Google review text goes here. Ask the business owner to share 3–5 top reviews from their Google Business Profile to display in this section.",
    rating: 5,
    isPlaceholder: true,
  },
  {
    name: "Placeholder — Add Real Review",
    location: "Chula Vista, CA",
    text: "Real Google review text goes here. Once real reviews are available, replace this placeholder text with the actual customer review.",
    rating: 5,
    isPlaceholder: true,
  },
  {
    name: "Placeholder — Add Real Review",
    location: "La Mesa, CA",
    text: "Real Google review text goes here. Each review card needs a customer name, city, and their actual review text from Google.",
    rating: 5,
    isPlaceholder: true,
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
