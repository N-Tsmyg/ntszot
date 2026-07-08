import { COMPANY_PHONE_DISPLAY, COMPANY_PHONE_TEL, DIAGNOSTIC_FEE } from "@/data/constants"
import { Phone, ShieldCheck } from "lucide-react"

interface HeroProps {
  headline: string
  subheadline: string
  urgencyNote?: string
  hideDiagnosticNote?: boolean
}

export default function Hero({ headline, subheadline, urgencyNote, hideDiagnosticNote }: HeroProps) {
  return (
    <section className="bg-brand-slate text-white py-14 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4">
          {headline}
        </h1>
        <p className="text-lg sm:text-xl text-white/80 mb-6 max-w-2xl mx-auto">
          {subheadline}
        </p>
        {urgencyNote && (
          <p className="text-sm text-white/60 mb-6">{urgencyNote}</p>
        )}
        <a
          href={COMPANY_PHONE_TEL}
          className="inline-flex items-center gap-3 rounded-lg bg-brand-blue px-8 py-4 text-xl font-extrabold text-white hover:bg-brand-blue-dark transition-colors shadow-lg"
        >
          <Phone className="h-6 w-6" aria-hidden="true" />
          {COMPANY_PHONE_DISPLAY}
        </a>
        {!hideDiagnosticNote && (
          <p className="mt-4 text-sm text-white/50">
            {DIAGNOSTIC_FEE} service call fee — waived completely if we repair it
          </p>
        )}
        <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm text-white/90">
          <ShieldCheck className="h-4 w-4 text-white/70 shrink-0" aria-hidden="true" />
          60-Day Parts &amp; Labor Warranty — Technician returns free if anything goes wrong
        </div>
      </div>
    </section>
  )
}
