import type { Metadata } from "next"
import Link from "next/link"
import { Wrench, Phone } from "lucide-react"
import FAQSection from "@/components/FAQSection"
import BreadcrumbSchema from "@/components/BreadcrumbSchema"
import TrustBar from "@/components/TrustBar"
import { SERVICES } from "@/data/services"
import {
  COMPANY_NAME,
  COMPANY_PHONE_DISPLAY,
  COMPANY_PHONE_TEL,
  COMPANY_WEBSITE,
  DIAGNOSTIC_FEE,
  WARRANTY_DAYS,
} from "@/data/constants"

export const metadata: Metadata = {
  title: "Appliance Repair Services in San Diego",
  description:
    "All appliance repair services in San Diego — washers, dryers, refrigerators, dishwashers, ovens & more. $85 diagnostic fee waived if we fix it. 90-day warranty. Call (858) 264-3138.",
  alternates: { canonical: `${COMPANY_WEBSITE}/services/` },
  openGraph: {
    title: `Appliance Repair Services in San Diego | ${COMPANY_NAME}`,
    description:
      "11 appliance repair services in San Diego County. $85 diagnostic fee waived if we fix it. 90-day parts & labor warranty. All major brands.",
    url: `${COMPANY_WEBSITE}/services/`,
  },
}

const SERVICES_FAQS = [
  {
    question: "How much does appliance repair cost in San Diego?",
    answer: `Most repairs — washers, dryers, dishwashers, ovens, microwaves, and range hoods — fall in the $250–$350 range including parts and labor. Refrigerator, freezer, and ice maker repairs typically run $350–$900 depending on the component and brand. The $85 diagnostic fee is waived completely if you proceed with the repair.`,
  },
  {
    question: "How quickly can you come out for a repair?",
    answer:
      "In most cases our technician can arrive same day. Our goal is a 3-hour arrival window. We're available Mon–Sat 7:00 AM–11:00 PM and Sun 8:00 AM–10:00 PM — 7 days a week including most holidays.",
  },
  {
    question: "Do you service all appliance brands?",
    answer:
      "Yes — we service all major brands including Samsung, LG, Whirlpool, GE, KitchenAid, Bosch, Kenmore, Electrolux, Miele, Sub-Zero, Thermador, Speed Queen, and more. No brand restrictions, no runaround.",
  },
  {
    question: "What warranty do you provide on repairs?",
    answer: `Every repair comes with a ${WARRANTY_DAYS}-day parts and labor warranty. If the same issue comes back within ${WARRANTY_DAYS} days, our technician returns and fixes it at no charge.`,
  },
]

export default function ServicesHubPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services/" },
        ]}
      />

      {/* Page header */}
      <section className="bg-brand-navy text-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Appliance Repair Services in San Diego — WNDW Appliance Repair
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-6 max-w-2xl mx-auto">
            In-home repair across San Diego County. {DIAGNOSTIC_FEE} diagnostic fee waived if we fix it. {WARRANTY_DAYS}-day warranty on every repair. All major brands.
          </p>
          <a
            href={COMPANY_PHONE_TEL}
            className="inline-flex items-center gap-3 rounded-lg bg-brand-red px-8 py-4 text-xl font-extrabold text-white hover:bg-brand-red-dark transition-colors shadow-lg"
          >
            <Phone className="h-6 w-6" aria-hidden="true" />
            {COMPANY_PHONE_DISPLAY}
          </a>
          <p className="mt-4 text-sm text-white/50">
            Mon–Sat 7:00 AM–11:00 PM · Sun 8:00 AM–10:00 PM
          </p>
        </div>
      </section>

      <TrustBar />

      {/* Intro paragraph */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-base leading-relaxed text-center">
            WNDW Appliance Repair services all major home appliances in San Diego County. Whether your refrigerator stopped cooling, your washer won&apos;t drain, or your oven won&apos;t light, our technician comes to your home, diagnoses the problem, and completes the repair — in most cases same visit. Browse all 11 services below.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-8 pb-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                className="group flex flex-col items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-5 text-center hover:border-brand-red hover:bg-red-50 transition-colors"
              >
                <div className="rounded-full bg-brand-red/10 p-3 group-hover:bg-brand-red/20 transition-colors">
                  <Wrench className="h-6 w-6 text-brand-red" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-navy">{s.name}</p>
                  <p className="mt-0.5 text-xs text-gray-500">{s.priceRange}</p>
                  <p className="mt-1 text-xs text-gray-400 leading-snug hidden sm:block">{s.shortDesc}</p>
                </div>
                <span className="text-xs font-medium text-brand-red group-hover:underline">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty services */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-brand-navy mb-4 uppercase tracking-wide">
            Specialty Services
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/emergency-appliance-repair/"
              className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-navy hover:border-brand-red transition-colors"
            >
              Emergency Appliance Repair
            </Link>
            <Link
              href="/property-management-appliance-repair/"
              className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-navy hover:border-brand-red transition-colors"
            >
              Property Management
            </Link>
            <Link
              href="/vacation-rental-appliance-repair/"
              className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-navy hover:border-brand-red transition-colors"
            >
              Vacation Rental Repairs
            </Link>
          </div>
        </div>
      </section>

      {/* Why WNDW blurb */}
      <section className="py-10 bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">
            Why San Diego Homeowners Call WNDW
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Every service call starts with a flat {DIAGNOSTIC_FEE} diagnostic fee — waived completely if you proceed with the repair. Every completed repair is backed by a {WARRANTY_DAYS}-day parts and labor warranty. Our technician arrives in a stocked service vehicle, so most repairs are done in a single visit. We serve all of San Diego County, 7 days a week.
          </p>
          <p className="text-sm text-gray-500">
            Card payments accepted with a 3.5% processing fee. No fee on cash, check, Zelle, or Venmo.
          </p>
        </div>
      </section>

      <FAQSection
        faqs={SERVICES_FAQS}
        heading="Appliance Repair Services — Frequently Asked Questions"
      />

      {/* Final CTA */}
      <section className="bg-brand-navy py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold mb-3">
            Ready to schedule your appliance repair?
          </h2>
          <p className="text-white/70 mb-6">
            {DIAGNOSTIC_FEE} diagnostic fee waived if we fix it. {WARRANTY_DAYS}-day parts &amp; labor warranty on every repair.
          </p>
          <a
            href={COMPANY_PHONE_TEL}
            className="inline-flex items-center gap-3 rounded-lg bg-brand-red px-8 py-4 text-xl font-extrabold text-white hover:bg-brand-red-dark transition-colors shadow-lg"
          >
            <Phone className="h-6 w-6" aria-hidden="true" />
            {COMPANY_PHONE_DISPLAY}
          </a>
          <p className="mt-4 text-sm text-white/60">
            Mon–Sat 7:00 AM–11:00 PM · Sun 8:00 AM–10:00 PM
          </p>
        </div>
      </section>
    </>
  )
}
