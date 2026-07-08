import { Clock, Search, FileText, Wrench } from "lucide-react"
import { DIAGNOSTIC_FEE, WARRANTY_DAYS } from "@/data/constants"

const STEPS = [
  {
    icon: Clock,
    number: "1",
    title: "We Arrive",
    description: `Technician dispatched with a confirmed 3-hour arrival window. No all-day waiting.`,
  },
  {
    icon: Search,
    number: "2",
    title: "We Diagnose",
    description: `Full inspection of the reported problem. The ${DIAGNOSTIC_FEE} diagnostic fee covers this visit entirely.`,
  },
  {
    icon: FileText,
    number: "3",
    title: "We Quote",
    description: `Upfront itemized quote before any work begins. You approve or walk — no pressure, no charge beyond the diagnostic fee.`,
  },
  {
    icon: Wrench,
    number: "4",
    title: "We Repair",
    description: `Same-visit repair in most cases. Every repair backed by a ${WARRANTY_DAYS}-day parts & labor warranty.`,
  },
]

export default function RepairProcess() {
  return (
    <section className="py-14 bg-white border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-brand-navy text-center mb-10">
          How It Works
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {/* Connector line between steps on desktop */}
              {index < STEPS.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gray-200"
                  aria-hidden="true"
                />
              )}
              <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy shadow-md">
                <step.icon className="h-7 w-7 text-white" aria-hidden="true" />
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-red text-[10px] font-extrabold text-white">
                  {step.number}
                </span>
              </div>
              <h3 className="text-base font-bold text-brand-navy mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
