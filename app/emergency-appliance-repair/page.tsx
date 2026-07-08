import type { Metadata } from "next"
import Link from "next/link"
import { Phone, AlertCircle, Clock, CheckCircle2 } from "lucide-react"
import TrustBar from "@/components/TrustBar"
import FAQSection from "@/components/FAQSection"
import BreadcrumbSchema from "@/components/BreadcrumbSchema"
import {
  COMPANY_NAME,
  COMPANY_PHONE_DISPLAY,
  COMPANY_PHONE_TEL,
  COMPANY_WEBSITE,
  DIAGNOSTIC_FEE,
  WARRANTY_DAYS,
  HOURS_WEEKDAY,
  HOURS_SUNDAY,
} from "@/data/constants"

export const metadata: Metadata = {
  title: "Emergency Appliance Repair San Diego | Same-Day Service",
  description:
    "Emergency appliance repair in San Diego — same-day service 6 days a week. $80 service call fee waived if we fix it. 60-day warranty. Refrigerators, washers, ovens & more. Call (619) 488-4477.",
  alternates: { canonical: `${COMPANY_WEBSITE}/emergency-appliance-repair/` },
  openGraph: {
    title: `Emergency Appliance Repair San Diego | Same-Day | ${COMPANY_NAME}`,
    description:
      "Same-day appliance repair in San Diego. 6 days a week, 3-hour arrival window. $80 service call fee waived if we repair it. 60-day warranty.",
    url: `${COMPANY_WEBSITE}/emergency-appliance-repair/`,
  },
}

const EMERGENCY_FAQS = [
  {
    question: "Do you offer same-day appliance repair in San Diego?",
    answer: `Yes. In most cases our technician can arrive the same day — typically within a 3-hour window. We are available ${HOURS_WEEKDAY} and ${HOURS_SUNDAY}, 6 days a week. Weekend and evening appointments are available at no surcharge.`,
  },
  {
    question: "Is there an emergency surcharge or after-hours fee?",
    answer: `No. NTSZOT Appliance Repair does not charge an emergency surcharge or after-hours premium. You pay the flat ${DIAGNOSTIC_FEE} service call fee regardless of when you call. If you proceed with the repair, the ${DIAGNOSTIC_FEE} is waived. Every repair carries a ${WARRANTY_DAYS}-day parts and labor warranty.`,
  },
  {
    question: "Which appliances qualify as emergencies?",
    answer: `Any appliance failure that affects your home or business immediately: refrigerators or freezers that stop cooling (food safety risk), washers that flood or won't drain, ovens or ranges that won't heat before a meal, and dishwashers with active leaks. Call us and we will assess the situation and get a technician out as quickly as possible.`,
  },
  {
    question: "What areas do you serve for emergency repairs?",
    answer: `We cover all of San Diego County for emergency service — including San Diego, Chula Vista, La Mesa, El Cajon, La Jolla, Del Mar, Poway, Encinitas, Escondido, Carlsbad, Oceanside, and 10 more cities. Coverage is the same 6 days a week.`,
  },
]

const EMERGENCY_APPLIANCES = [
  {
    name: "Refrigerator Not Cooling",
    urgency: "Food safety — act within 4 hours",
    detail:
      "A refrigerator that loses cooling puts food at risk within hours. Our technician checks compressor operation, fan motors, condenser coils, and refrigerant levels — most cooling failures are diagnosed and repaired same visit.",
  },
  {
    name: "Freezer Stopped Freezing",
    urgency: "Food safety — act within 24 hours",
    detail:
      "A chest or upright freezer that stops maintaining temperature risks weeks of frozen food. Call us before food reaches the thaw point — we carry common freezer parts on the service vehicle.",
  },
  {
    name: "Washer Flooding or Won't Drain",
    urgency: "Water damage risk",
    detail:
      "Standing water in a washer or water on the laundry room floor is a water damage situation. Our technician locates the source — drain pump, inlet valve, hose failure — and repairs it before the next cycle runs.",
  },
  {
    name: "Oven or Range Not Working",
    urgency: "Meal service affected",
    detail:
      "An oven that won't heat or a stove with dead burners affects your household immediately — especially on a weekend or holiday. We service gas and electric ranges and arrive with common heating elements and igniters on the vehicle.",
  },
  {
    name: "Dishwasher Leaking",
    urgency: "Water damage risk",
    detail:
      "An active dishwasher leak — from the door, base, or under-counter plumbing — should not wait. Our technician identifies the source (door gasket, inlet valve, spray arm crack) and makes a lasting repair.",
  },
]

export default function EmergencyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Emergency Appliance Repair", href: "/emergency-appliance-repair/" },
        ]}
      />

      {/* Hero — urgent tone */}
      <section className="bg-brand-slate text-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue/20 border border-brand-blue/30 px-4 py-1.5 text-sm font-medium text-white/90 mb-6">
            <AlertCircle className="h-4 w-4 text-brand-blue" aria-hidden="true" />
            Available 6 days a week — including evenings and weekends
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Emergency Appliance Repair in San Diego — Same-Day Service
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-6 max-w-2xl mx-auto">
            Refrigerator stopped cooling? Washer flooding? Oven not heating before dinner?
            Our technician arrives today. {DIAGNOSTIC_FEE} service call fee waived if we repair it.
          </p>
          <a
            href={COMPANY_PHONE_TEL}
            className="inline-flex items-center gap-3 rounded-lg bg-brand-blue px-8 py-4 text-xl font-extrabold text-white hover:bg-brand-blue-dark transition-colors shadow-lg"
          >
            <Phone className="h-6 w-6" aria-hidden="true" />
            {COMPANY_PHONE_DISPLAY}
          </a>
          <p className="mt-4 text-sm text-white/50">
            {HOURS_WEEKDAY} · {HOURS_SUNDAY} · No surcharge for evenings or weekends
          </p>
        </div>
      </section>

      <TrustBar />

      {/* How fast we come */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border-l-4 border-brand-blue bg-red-50 p-6">
            <p className="font-semibold text-brand-slate text-base leading-relaxed">
              In most cases, our technician arrives within a 3-hour window on the same day you call.
              We are available {HOURS_WEEKDAY} and {HOURS_SUNDAY} with no emergency premium.
              The flat {DIAGNOSTIC_FEE} service call fee is waived if you proceed with the repair.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency appliances */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-slate mb-8">
            Emergency Appliance Situations We Handle in San Diego
          </h2>
          <div className="space-y-6">
            {EMERGENCY_APPLIANCES.map((item) => (
              <div key={item.name} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-bold text-brand-slate">{item.name}</h3>
                  <span className="shrink-0 rounded-full bg-red-50 border border-brand-blue/20 px-3 py-0.5 text-xs font-medium text-brand-blue">
                    {item.urgency}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No surcharge callout */}
      <section className="py-10 bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-slate mb-8 text-center">
            What to Expect When You Call
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white border border-gray-200 p-6 text-center">
              <Clock className="h-8 w-8 text-brand-blue mx-auto mb-3" aria-hidden="true" />
              <p className="font-semibold text-brand-slate mb-1">3-Hour Arrival Window</p>
              <p className="text-sm text-gray-600">
                Our technician is dispatched with a confirmed arrival window — you are not left waiting all day.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-gray-200 p-6 text-center">
              <AlertCircle className="h-8 w-8 text-brand-blue mx-auto mb-3" aria-hidden="true" />
              <p className="font-semibold text-brand-slate mb-1">Diagnosis + Upfront Quote</p>
              <p className="text-sm text-gray-600">
                Your technician diagnoses the problem and provides a firm quote before any repair work begins. No surprises.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-gray-200 p-6 text-center">
              <CheckCircle2 className="h-8 w-8 text-brand-blue mx-auto mb-3" aria-hidden="true" />
              <p className="font-semibold text-brand-slate mb-1">{WARRANTY_DAYS}-Day Warranty</p>
              <p className="text-sm text-gray-600">
                Every completed repair carries a {WARRANTY_DAYS}-day parts and labor warranty. No emergency exception — same guarantee, same day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* No surcharge */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-brand-slate mb-4">
            No Emergency Surcharge. No After-Hours Premium.
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            NTSZOT Appliance Repair does not charge extra for evenings, weekends, or urgent calls. You pay the flat {DIAGNOSTIC_FEE} service call fee — waived if we repair it — plus the cost of parts and labor. That&apos;s it. The only variation is the complexity of the repair itself, which your technician quotes upfront before any work begins.
          </p>
          <p className="text-xs text-gray-400">
            Card payments accepted with a 3.5% processing fee. No fee on cash, check, Zelle, or Venmo.
          </p>
        </div>
      </section>

      <FAQSection
        faqs={EMERGENCY_FAQS}
        heading="Emergency Appliance Repair San Diego — FAQ"
      />

      {/* Internal links */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-brand-slate mb-4 uppercase tracking-wide">
            Related Services
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/refrigerator-repair/" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-slate hover:border-brand-blue transition-colors">
              Refrigerator Repair
            </Link>
            <Link href="/services/washer-repair/" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-slate hover:border-brand-blue transition-colors">
              Washer Repair
            </Link>
            <Link href="/services/freezer-repair/" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-slate hover:border-brand-blue transition-colors">
              Freezer Repair
            </Link>
            <Link href="/services/oven-range-stove-repair/" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-slate hover:border-brand-blue transition-colors">
              Oven & Range Repair
            </Link>
            <Link href="/services/dishwasher-repair/" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-slate hover:border-brand-blue transition-colors">
              Dishwasher Repair
            </Link>
            <Link href="/contact/" className="rounded-lg border border-brand-blue bg-red-50 px-4 py-2 text-sm font-medium text-brand-blue hover:bg-brand-blue hover:text-white transition-colors">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-slate py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold mb-3">
            Appliance emergency? Call now — we come today.
          </h2>
          <p className="text-white/70 mb-6">
            {DIAGNOSTIC_FEE} service call fee waived if we fix it. {WARRANTY_DAYS}-day warranty.
            No surcharge for same-day or weekend service.
          </p>
          <a
            href={COMPANY_PHONE_TEL}
            className="inline-flex items-center gap-3 rounded-lg bg-brand-blue px-8 py-4 text-xl font-extrabold text-white hover:bg-brand-blue-dark transition-colors shadow-lg"
          >
            <Phone className="h-6 w-6" aria-hidden="true" />
            {COMPANY_PHONE_DISPLAY}
          </a>
          <p className="mt-4 text-sm text-white/60">
            {HOURS_WEEKDAY} · {HOURS_SUNDAY}
          </p>
        </div>
      </section>
    </>
  )
}
