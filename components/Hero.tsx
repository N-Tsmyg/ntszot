import { COMPANY_PHONE_DISPLAY, COMPANY_PHONE_TEL, DIAGNOSTIC_FEE, TECH_COUNT, WARRANTY_DAYS } from "@/data/constants"
import { Phone, MapPin, Users, ShieldCheck, DollarSign } from "lucide-react"

interface HeroProps {
  headline: string
  subheadline: string
  urgencyNote?: string
  hideDiagnosticNote?: boolean
}

const STAT_CARDS = [
  { icon: DollarSign, stat: "$80", label: "Service Call", sub: "Waived if we repair it" },
  { icon: ShieldCheck, stat: `${WARRANTY_DAYS}-Day`, label: "Warranty", sub: "Parts & labor" },
  { icon: Users, stat: `${TECH_COUNT}`, label: "Technicians", sub: "Factory-certified" },
  { icon: MapPin, stat: "18", label: "Cities Served", sub: "All San Diego County" },
]

export default function Hero({ headline, subheadline, urgencyNote, hideDiagnosticNote }: HeroProps) {
  return (
    <section className="bg-brand-slate text-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-5 lg:gap-12 lg:items-center">

          {/* Left col — text + CTA */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4">
              {headline}
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-6 max-w-2xl mx-auto lg:mx-0">
              {subheadline}
            </p>
            {urgencyNote && (
              <p className="text-sm text-white/60 mb-6">{urgencyNote}</p>
            )}
            <a
              href={COMPANY_PHONE_TEL}
              className="inline-flex items-center gap-3 rounded-full bg-brand-blue px-8 py-4 text-xl font-extrabold text-white hover:bg-brand-blue-dark transition-colors shadow-lg"
            >
              <Phone className="h-6 w-6" aria-hidden="true" />
              {COMPANY_PHONE_DISPLAY}
            </a>
            {!hideDiagnosticNote && (
              <p className="mt-4 text-sm text-white/50">
                {DIAGNOSTIC_FEE} service call fee — waived completely if we repair it
              </p>
            )}
          </div>

          {/* Right col — stat cards (desktop only) */}
          <div className="hidden lg:grid lg:col-span-2 grid-cols-2 gap-4 mt-0">
            {STAT_CARDS.map((card) => (
              <div
                key={card.label}
                className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm p-5 flex flex-col gap-2"
              >
                <div className="rounded-full bg-white/20 w-9 h-9 flex items-center justify-center">
                  <card.icon className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
                <p className="text-2xl font-extrabold text-white leading-none">{card.stat}</p>
                <div>
                  <p className="text-sm font-semibold text-white">{card.label}</p>
                  <p className="text-xs text-white/60">{card.sub}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
