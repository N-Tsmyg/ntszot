import type { Metadata } from "next"
import Link from "next/link"
import { Phone, CheckCircle2, Building2 } from "lucide-react"
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
  COMPANY_EMAIL,
} from "@/data/constants"

export const metadata: Metadata = {
  title: "Property Management Appliance Repair San Diego",
  description:
    "Appliance repair for property managers in San Diego. Fast turnaround, 6 days/week, upfront quotes for remote authorization. $80 service call fee waived if we fix it. 60-day warranty. Call (619) 488-4477.",
  alternates: { canonical: `${COMPANY_WEBSITE}/property-management-appliance-repair/` },
  openGraph: {
    title: `Property Management Appliance Repair San Diego | ${COMPANY_NAME}`,
    description:
      "Fast appliance repair for San Diego property managers and landlords. Upfront quotes, 7-day availability, 60-day warranty reduces callbacks.",
    url: `${COMPANY_WEBSITE}/property-management-appliance-repair/`,
  },
}

const PM_FAQS = [
  {
    question: "Can you get authorization from me remotely before starting a repair?",
    answer: `Yes. Our technician calls or texts you with the diagnosis and upfront repair quote before any work begins. You approve or decline remotely — your tenant does not need to be involved in the authorization decision. This is standard for all our property management clients.`,
  },
  {
    question: "How quickly can you get to a unit after a tenant reports an issue?",
    answer: `In most cases same day, with a 3-hour arrival window. We are available ${HOURS_WEEKDAY} and ${HOURS_SUNDAY}, so weekend tenant calls don't wait until Monday. Fast turnaround protects your tenants, your reviews, and your lease renewals.`,
  },
  {
    question: "Do you offer a warranty on repairs?",
    answer: `Yes — every repair carries a ${WARRANTY_DAYS}-day parts and labor warranty. If the same issue recurs within ${WARRANTY_DAYS} days, our technician returns at no additional charge. This directly reduces repeat service calls, which is the highest-cost scenario for property managers.`,
  },
  {
    question: "Do you have a maintenance plan for rental properties?",
    answer: `Yes. The Annual Appliance Maintenance Plan is $350/year plus parts, covering two scheduled in-home visits. For properties with multiple units, we can discuss a service arrangement. Call or email us at ${COMPANY_EMAIL} to discuss your portfolio.`,
  },
  {
    question: "What appliance brands do you service?",
    answer: `All major brands — Samsung, LG, Whirlpool, GE, KitchenAid, Kenmore, Bosch, Electrolux, and more. No brand restrictions. Whether your units have builder-grade appliances or upgraded models, one call handles it.`,
  },
]

const PM_BENEFITS = [
  {
    heading: "Upfront quote — remote authorization ready",
    detail:
      "Your technician diagnoses the issue and provides a firm quote by phone or text. You approve from anywhere, no need to visit the unit. Repair begins only after your go-ahead.",
  },
  {
    heading: "7-day availability — weekend calls covered",
    detail: `${HOURS_WEEKDAY} and ${HOURS_SUNDAY}. Tenant emergencies don't happen on a Monday at 10 AM — and your maintenance line no longer has to wait until the next business day.`,
  },
  {
    heading: `${WARRANTY_DAYS}-day warranty reduces callbacks`,
    detail:
      "Every repair is backed by a 60-day parts and labor warranty. Fewer repeat service calls means lower long-term maintenance spend and fewer friction points with tenants.",
  },
  {
    heading: "All major brands — one vendor relationship",
    detail:
      "Whether your units have Samsung refrigerators, Whirlpool washers, or GE dishwashers, you call one number. No tracking down brand-specific vendors for each property.",
  },
  {
    heading: `${DIAGNOSTIC_FEE} service call fee — waived if we repair it`,
    detail: `The diagnostic fee is ${DIAGNOSTIC_FEE} per visit. If you authorize the repair, the fee is waived in full — you pay only for parts and labor. If you decline the repair (appliance needs replacement), you owe ${DIAGNOSTIC_FEE}.`,
  },
  {
    heading: "In-home service — no tenant coordination required",
    detail:
      "We come to the unit. Your tenant doesn't need to transport anything to a shop, and you don't need to arrange pickup. We work around the tenant's schedule within your availability constraints.",
  },
]

export default function PropertyManagementPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Property Management Appliance Repair", href: "/property-management-appliance-repair/" },
        ]}
      />

      {/* Hero */}
      <section className="bg-brand-slate text-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-medium text-white/80 mb-6">
            <Building2 className="h-4 w-4" aria-hidden="true" />
            For Property Managers &amp; Landlords in San Diego
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Property Management Appliance Repair in San Diego
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-6 max-w-2xl mx-auto">
            Fast in-home repair for rental units across San Diego County. Upfront quotes for remote authorization. 6 days a week. {WARRANTY_DAYS}-day warranty reduces callbacks. All major brands.
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

      {/* Quick Answer */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="quick-answer rounded-xl border-l-4 border-brand-blue bg-red-50 p-6">
            <p className="font-semibold text-brand-slate leading-relaxed">
              NTSZOT Appliance Repair works directly with property managers across San Diego County. Our technician visits the tenant unit, diagnoses the problem, and calls you with an upfront quote before any work begins. You authorize remotely. Every repair carries a {WARRANTY_DAYS}-day warranty — fewer callbacks, lower long-term cost.
            </p>
          </div>
        </div>
      </section>

      {/* Why NTSZOT for property managers */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-slate mb-8">
            Why San Diego Property Managers Use NTSZOT
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {PM_BENEFITS.map((benefit) => (
              <div key={benefit.heading} className="flex gap-4">
                <CheckCircle2
                  className="h-5 w-5 text-brand-blue shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-semibold text-brand-slate text-sm mb-1">{benefit.heading}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{benefit.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section className="py-10 bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-slate mb-6 text-center">
            Repair Pricing for Rental Properties
          </h2>
          <div className="space-y-3">
            <div className="rounded-lg border border-gray-200 bg-white p-5 flex justify-between items-center">
              <div>
                <p className="font-semibold text-brand-slate text-sm">Standard appliances</p>
                <p className="text-xs text-gray-500 mt-0.5">Washers, dryers, dishwashers, ovens, microwaves, range hoods</p>
              </div>
              <p className="font-bold text-brand-blue text-sm whitespace-nowrap">$250–$350</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5 flex justify-between items-center">
              <div>
                <p className="font-semibold text-brand-slate text-sm">Refrigeration units</p>
                <p className="text-xs text-gray-500 mt-0.5">Refrigerators, freezers, ice makers</p>
              </div>
              <p className="font-bold text-brand-blue text-sm whitespace-nowrap">$350–$900</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5 flex justify-between items-center">
              <div>
                <p className="font-semibold text-brand-slate text-sm">Appliance installation</p>
                <p className="text-xs text-gray-500 mt-0.5">Turnover units, replacements between tenants</p>
              </div>
              <p className="font-bold text-brand-blue text-sm whitespace-nowrap">$220–$350</p>
            </div>
            <div className="rounded-lg bg-red-50 border border-brand-blue/20 p-5">
              <p className="font-semibold text-brand-slate text-sm mb-1">
                Service call fee: {DIAGNOSTIC_FEE} — waived when we repair it
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                You are charged {DIAGNOSTIC_FEE} per service call. If you authorize the repair, the fee disappears from the invoice — you pay only parts and labor. If you decide not to repair (or the appliance needs replacement), you owe {DIAGNOSTIC_FEE} per visit.
              </p>
            </div>
            <p className="text-xs text-gray-400 pt-1">
              Card payments accepted with a 3.5% processing fee. No fee on check, Zelle, or Venmo. Invoices available on request.
            </p>
          </div>
        </div>
      </section>

      {/* Annual Maintenance Plan mention */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-brand-slate mb-4">
            Annual Maintenance Plan — $350/year plus parts
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            For properties where appliance reliability directly affects tenant satisfaction and lease renewals, the Annual Maintenance Plan provides two scheduled in-home visits per year. Each visit covers refrigerator condenser coils, dryer lint duct inspection, dishwasher filter cleaning, and a full appliance check to identify worn components before they fail. Parts needed during a visit are billed at cost.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Proactive maintenance reduces emergency service calls — the highest-cost scenario for any rental property. Contact us at{" "}
            <a href={`mailto:${COMPANY_EMAIL}`} className="text-brand-blue hover:underline">
              {COMPANY_EMAIL}
            </a>{" "}
            to discuss a plan for your portfolio.
          </p>
        </div>
      </section>

      <FAQSection
        faqs={PM_FAQS}
        heading="Property Management Appliance Repair — FAQ"
      />

      {/* Internal links */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-brand-slate mb-4 uppercase tracking-wide">Related Pages</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/vacation-rental-appliance-repair/" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-slate hover:border-brand-blue transition-colors">
              Vacation Rental Repair
            </Link>
            <Link href="/services/annual-maintenance-plan/" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-slate hover:border-brand-blue transition-colors">
              Annual Maintenance Plan
            </Link>
            <Link href="/services/appliance-installation/" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-slate hover:border-brand-blue transition-colors">
              Appliance Installation
            </Link>
            <Link href="/services/" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-slate hover:border-brand-blue transition-colors">
              All Services
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
            Tenant appliance issue? We handle it today.
          </h2>
          <p className="text-white/70 mb-6">
            {DIAGNOSTIC_FEE} service call fee waived if we repair it. {WARRANTY_DAYS}-day warranty on every repair.
            Upfront quote — remote authorization available.
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
