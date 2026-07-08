import type { Metadata } from "next"
import { Phone, Tag, ShieldCheck } from "lucide-react"
import FAQSection from "@/components/FAQSection"
import BreadcrumbSchema from "@/components/BreadcrumbSchema"
import TrustBar from "@/components/TrustBar"
import {
  COMPANY_NAME,
  COMPANY_PHONE_DISPLAY,
  COMPANY_PHONE_TEL,
  COMPANY_WEBSITE,
  DIAGNOSTIC_FEE,
  WARRANTY_DAYS,
  HOURS_WEEKDAY,
  HOURS_SUNDAY,
  FIRST_SERVICE_DISCOUNT,
} from "@/data/constants"

export const metadata: Metadata = {
  title: `Appliance Repair Specials — San Diego | ${COMPANY_NAME}`,
  description: `$${FIRST_SERVICE_DISCOUNT} off your first appliance repair in San Diego. Mention code WELCOME40 when you call. ${DIAGNOSTIC_FEE} service call fee waived if we fix it. ${WARRANTY_DAYS}-day warranty. Call (619) 488-4477.`,
  alternates: { canonical: `${COMPANY_WEBSITE}/specials/` },
  openGraph: {
    title: `Appliance Repair Specials — San Diego | ${COMPANY_NAME}`,
    description: `$${FIRST_SERVICE_DISCOUNT} off your first repair. Mention code WELCOME40 when you call. ${DIAGNOSTIC_FEE} service call fee waived if we fix it.`,
    url: `${COMPANY_WEBSITE}/specials/`,
  },
}

const SPECIALS_FAQS = [
  {
    question: `How do I redeem the $${FIRST_SERVICE_DISCOUNT} off first repair discount?`,
    answer: `Call us at ${COMPANY_PHONE_DISPLAY} and mention the code WELCOME40 when scheduling your appointment. The $${FIRST_SERVICE_DISCOUNT} discount is applied to the repair cost (parts + labor) at the time of service. No need to print anything or show a coupon — just mention the code when you call.`,
  },
  {
    question: "Does the $40 discount apply to the service call fee?",
    answer: `No — the WELCOME40 discount applies to the repair cost (parts + labor), not to the ${DIAGNOSTIC_FEE} service call fee. However, the service call fee is waived entirely when you proceed with the repair. For a first-time customer, that means $${FIRST_SERVICE_DISCOUNT} off the repair plus the ${DIAGNOSTIC_FEE} service call fee waived — a total of $120 in savings compared to paying both separately.`,
  },
  {
    question: "Is the WELCOME40 code available to existing customers?",
    answer: `The WELCOME40 discount is for first-time customers only. It cannot be combined with other offers or applied to diagnostic-only visits. One use per household.`,
  },
  {
    question: "Does the $40 discount apply to all appliance types?",
    answer: `Yes — WELCOME40 applies to any completed repair: washers, dryers, refrigerators, dishwashers, ovens, microwaves, range hoods, ice makers, freezers. It applies to the repair cost regardless of appliance type. Parts + labor must exceed $${FIRST_SERVICE_DISCOUNT} for the discount to apply.`,
  },
]

export default function SpecialsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Specials", href: "/specials/" },
        ]}
      />

      {/* Hero */}
      <section className="bg-brand-slate text-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Appliance Repair Specials — San Diego
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-6 max-w-2xl mx-auto">
            First-time customer offer: ${FIRST_SERVICE_DISCOUNT} off your first repair. Mention code{" "}
            <span className="font-extrabold text-white">WELCOME40</span> when you call.
          </p>
          <a
            href={COMPANY_PHONE_TEL}
            className="inline-flex items-center gap-3 rounded-lg bg-brand-blue px-8 py-4 text-xl font-extrabold text-white hover:bg-brand-blue-dark transition-colors shadow-lg"
          >
            <Phone className="h-6 w-6" aria-hidden="true" />
            {COMPANY_PHONE_DISPLAY}
          </a>
          <p className="mt-4 text-sm text-white/50">
            {HOURS_WEEKDAY} · {HOURS_SUNDAY}
          </p>
        </div>
      </section>

      <TrustBar />

      {/* Main offer */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

          {/* Offer card */}
          <div className="rounded-2xl border-2 border-brand-blue bg-red-50 p-8 mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-4 py-1.5 text-sm font-bold text-white mb-4">
              <Tag className="h-4 w-4" aria-hidden="true" />
              First-Time Customer Offer
            </div>
            <div className="text-6xl font-extrabold text-brand-blue mb-2">
              ${FIRST_SERVICE_DISCOUNT} Off
            </div>
            <p className="text-xl font-bold text-brand-slate mb-1">Your First Repair</p>
            <p className="text-gray-600 text-sm mb-6">
              Applied to parts + labor. Not valid on diagnostic-only visits.
            </p>
            <div className="inline-block bg-white border-2 border-brand-slate rounded-xl px-8 py-4 mb-6">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Promo Code</p>
              <p className="text-3xl font-extrabold text-brand-slate tracking-widest">WELCOME40</p>
            </div>
            <p className="text-sm text-gray-600 font-medium mb-6">
              Mention <strong>WELCOME40</strong> when you call to schedule — no coupon needed.
            </p>
            <a
              href={COMPANY_PHONE_TEL}
              className="inline-flex items-center gap-3 rounded-lg bg-brand-blue px-8 py-4 text-lg font-extrabold text-white hover:bg-brand-blue-dark transition-colors shadow-md"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call &amp; Mention WELCOME40
            </a>
          </div>

          {/* Savings breakdown */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 mb-10">
            <h2 className="text-lg font-bold text-brand-slate mb-4">
              Your Total First-Visit Savings
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm border-b border-gray-200 pb-3">
                <span className="text-gray-700">WELCOME40 repair discount</span>
                <span className="font-bold text-brand-blue">-${FIRST_SERVICE_DISCOUNT}.00</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-gray-200 pb-3">
                <span className="text-gray-700">{DIAGNOSTIC_FEE} service call fee — waived when you repair</span>
                <span className="font-bold text-brand-blue">-$80.00</span>
              </div>
              <div className="flex justify-between items-center text-base font-extrabold pt-1">
                <span className="text-brand-slate">Total first-visit savings</span>
                <span className="text-brand-blue">$120.00</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Compared to paying the service call fee separately and not using a promo code. Savings apply when you proceed with a repair.
            </p>
          </div>

          {/* Offer terms */}
          <div className="text-sm text-gray-600 space-y-2 mb-10">
            <p className="font-semibold text-brand-slate">Offer Terms</p>
            <ul className="space-y-1 list-disc list-inside text-gray-500">
              <li>Valid for first-time customers only — one use per household</li>
              <li>Applied to repair cost (parts + labor) — not to diagnostic-only visits</li>
              <li>Cannot be combined with other offers or discounts</li>
              <li>Mention code <strong className="text-brand-slate">WELCOME40</strong> when scheduling by phone — no coupon or printout required</li>
              <li>Applies to all appliance types and brands</li>
            </ul>
          </div>

          {/* Maintenance plan callout */}
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-brand-slate/10 p-3 shrink-0">
                <ShieldCheck className="h-6 w-6 text-brand-slate" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-brand-slate mb-1">
                  Annual Maintenance Plan — $350/year + parts
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Two maintenance visits per year covering all major appliances in your home. We clean condenser coils, check door seals, inspect drain lines, and clear dryer lint — the small tasks that prevent the big failures. Parts and replacement filters are additional.
                </p>
                <a
                  href={COMPANY_PHONE_TEL}
                  className="text-sm font-semibold text-brand-blue hover:underline"
                >
                  Ask about the maintenance plan when you call →
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <FAQSection faqs={SPECIALS_FAQS} heading="Specials FAQ" />

      {/* Final CTA */}
      <section className="bg-brand-slate py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold mb-3">
            Ready to save $120 on your first repair?
          </h2>
          <p className="text-white/70 mb-2">
            Call and mention code <strong className="text-white">WELCOME40</strong> to claim your $40 discount.
          </p>
          <p className="text-white/50 text-sm mb-6">
            {DIAGNOSTIC_FEE} service call fee waived if we fix it. {WARRANTY_DAYS}-day warranty on every repair.
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
