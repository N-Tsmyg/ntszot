import { COMPANY_PHONE_DISPLAY, COMPANY_PHONE_TEL, DIAGNOSTIC_FEE } from "@/data/constants"
import { Phone } from "lucide-react"

interface MidPageCTAProps {
  heading?: string
  subtext?: string
}

export default function MidPageCTA({
  heading = "Ready to schedule your repair?",
  subtext = `${DIAGNOSTIC_FEE} diagnostic fee — waived completely if we fix it.`,
}: MidPageCTAProps) {
  return (
    <div className="my-10 rounded-xl bg-brand-navy px-6 py-8 text-center text-white">
      <p className="text-lg font-bold mb-1">{heading}</p>
      <p className="text-sm text-white/70 mb-5">{subtext}</p>
      <a
        href={COMPANY_PHONE_TEL}
        className="inline-flex items-center gap-2 rounded-md bg-brand-red px-6 py-3 text-base font-bold text-white hover:bg-brand-red-dark transition-colors"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        Call {COMPANY_PHONE_DISPLAY}
      </a>
    </div>
  )
}
