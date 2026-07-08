import { COMPANY_PHONE_DISPLAY, COMPANY_PHONE_TEL } from "@/data/constants"
import { Phone } from "lucide-react"

export default function StickyCallButton() {
  return (
    <a
      href={COMPANY_PHONE_TEL}
      aria-label={`Call ${COMPANY_PHONE_DISPLAY}`}
      className="md:hidden fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-brand-blue px-5 py-3 text-sm font-bold text-white shadow-lg hover:bg-brand-blue-dark transition-colors"
    >
      <Phone className="h-5 w-5" aria-hidden="true" />
      <span>{COMPANY_PHONE_DISPLAY}</span>
    </a>
  )
}
