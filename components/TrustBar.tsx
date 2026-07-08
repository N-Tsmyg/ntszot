import { ShieldCheck, Calendar, Star, DollarSign, BadgeCheck, Award } from "lucide-react"
import { DIAGNOSTIC_FEE, WARRANTY_DAYS } from "@/data/constants"

const TRUST_ITEMS = [
  {
    icon: DollarSign,
    label: `${DIAGNOSTIC_FEE} Diagnostic Fee`,
    sublabel: "Waived if we repair it",
  },
  {
    icon: ShieldCheck,
    label: `${WARRANTY_DAYS}-Day Warranty`,
    sublabel: "Parts & labor",
  },
  {
    icon: Calendar,
    label: "7 Days a Week",
    sublabel: "Mon–Sat 7AM–11PM · Sun 8AM–10PM",
  },
  {
    icon: Star,
    label: "All Major Brands",
    sublabel: "One call, one technician",
  },
  {
    icon: BadgeCheck,
    label: "Licensed & Insured",
    sublabel: "Full liability coverage",
  },
  {
    icon: Award,
    label: "3+ Yrs Experience",
    sublabel: "No trainees — ever",
  },
]

export default function TrustBar() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 py-4 sm:grid-cols-3 lg:grid-cols-6">
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="shrink-0 rounded-full bg-brand-red/10 p-2">
                <item.icon className="h-5 w-5 text-brand-red" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-navy">{item.label}</p>
                <p className="text-xs text-gray-500">{item.sublabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
