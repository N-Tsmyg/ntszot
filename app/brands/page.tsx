import type { Metadata } from "next"
import Link from "next/link"
import { Phone } from "lucide-react"
import FAQSection from "@/components/FAQSection"
import BreadcrumbSchema from "@/components/BreadcrumbSchema"
import TrustBar from "@/components/TrustBar"
import { BRANDS } from "@/data/brands"
import {
  COMPANY_NAME,
  COMPANY_PHONE_DISPLAY,
  COMPANY_PHONE_TEL,
  COMPANY_WEBSITE,
  DIAGNOSTIC_FEE,
  WARRANTY_DAYS,
} from "@/data/constants"

export const metadata: Metadata = {
  title: "Appliance Repair by Brand — San Diego",
  description:
    "We repair all major appliance brands in San Diego — Samsung, LG, Whirlpool, GE, KitchenAid, Bosch, Sub-Zero, Thermador & more. $80 service call fee waived if we fix it. Call (619) 488-4477.",
  alternates: { canonical: `${COMPANY_WEBSITE}/brands/` },
  openGraph: {
    title: `Appliance Repair by Brand — San Diego | ${COMPANY_NAME}`,
    description:
      "12 brand-specific repair pages. $80 service call fee waived if we fix it. 60-day parts & labor warranty. All major brands, no restrictions.",
    url: `${COMPANY_WEBSITE}/brands/`,
  },
}

const BRANDS_FAQS = [
  {
    question: "Do you service all appliance brands?",
    answer: `Yes — NTSZOT Appliance Repair services all major brands with no restrictions. Samsung, LG, Whirlpool, GE, KitchenAid, Kenmore, Bosch, Electrolux, Miele, Sub-Zero, Thermador, Speed Queen, and more. One call handles it regardless of brand.`,
  },
  {
    question: "Are you factory-certified or manufacturer-authorized?",
    answer: `Our technician is experienced with all major appliance brands and their common failure modes. We do not claim factory or manufacturer certification — we let our diagnostics, our ${WARRANTY_DAYS}-day parts and labor warranty, and our customer results speak for us.`,
  },
  {
    question: "Can you repair premium brands like Sub-Zero and Thermador?",
    answer: `Yes. We service premium and luxury brands including Sub-Zero, Thermador, and Miele. Our technician is experienced with these appliances and their specific diagnostic sequences. Every repair is backed by a ${WARRANTY_DAYS}-day parts and labor warranty.`,
  },
  {
    question: "What if my brand isn't listed?",
    answer: `Call us at ${COMPANY_PHONE_DISPLAY} and we'll confirm. We service virtually all major brands — the 12 pages listed represent our most common service calls, not the limit of what we repair. Frigidaire, Maytag, Amana, Viking, Wolf, and many others are all within scope.`,
  },
]

const MAINSTREAM = BRANDS.filter((b) => b.tier === "mainstream")
const PREMIUM = BRANDS.filter((b) => b.tier === "premium")
const SPECIALTY = BRANDS.filter((b) => b.tier === "specialty")

export default function BrandsHubPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Brands", href: "/brands/" },
        ]}
      />

      {/* Page header */}
      <section className="bg-brand-slate text-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Appliance Repair by Brand — San Diego
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-6 max-w-2xl mx-auto">
            We service all major brands in San Diego County — no brand runaround, no restrictions.{" "}
            {DIAGNOSTIC_FEE} diagnostic fee waived if we fix it. {WARRANTY_DAYS}-day warranty on every repair.
          </p>
          <a
            href={COMPANY_PHONE_TEL}
            className="inline-flex items-center gap-3 rounded-lg bg-brand-blue px-8 py-4 text-xl font-extrabold text-white hover:bg-brand-blue-dark transition-colors shadow-lg"
          >
            <Phone className="h-6 w-6" aria-hidden="true" />
            {COMPANY_PHONE_DISPLAY}
          </a>
          <p className="mt-4 text-sm text-white/50">
            Mon–Fri 9:00 AM–6:00 PM · Sat 10:00 AM–5:00 PM · Sun closed
          </p>
        </div>
      </section>

      <TrustBar />

      {/* Intro */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-base leading-relaxed">
            Whatever brand is in your kitchen or laundry room, NTSZOT Appliance Repair services it. Our technician is experienced with all major appliance brands — from mainstream manufacturers to premium luxury lines. Select your brand below for specific repair information, common issues, and pricing.
          </p>
        </div>
      </section>

      {/* Mainstream brands */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-brand-slate mb-6">Mainstream Brands</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {MAINSTREAM.map((b) => (
              <Link
                key={b.slug}
                href={`/brands/${b.slug}/`}
                className="flex flex-col gap-1 rounded-xl border border-gray-200 bg-gray-50 p-5 text-center hover:border-brand-blue hover:bg-red-50 transition-colors"
              >
                <p className="font-bold text-brand-slate">{b.name}</p>
                <p className="text-xs text-gray-500 leading-snug">
                  {b.appliancesServiced.slice(0, 3).join(", ")}
                  {b.appliancesServiced.length > 3 ? " & more" : ""}
                </p>
                <span className="mt-1 text-xs font-medium text-brand-blue">View repairs →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Premium brands */}
      <section className="py-8 pb-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-brand-slate mb-6">Premium & Specialty Brands</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {[...PREMIUM, ...SPECIALTY].map((b) => (
              <Link
                key={b.slug}
                href={`/brands/${b.slug}/`}
                className="flex flex-col gap-1 rounded-xl border border-gray-200 bg-gray-50 p-5 text-center hover:border-brand-blue hover:bg-red-50 transition-colors"
              >
                <p className="font-bold text-brand-slate">{b.name}</p>
                <p className="text-xs text-gray-500 leading-snug">
                  {b.tier === "specialty" ? "Specialty" : "Premium"} ·{" "}
                  {b.appliancesServiced.slice(0, 2).join(", ")}
                </p>
                <span className="mt-1 text-xs font-medium text-brand-blue">View repairs →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* No brand restrictions callout */}
      <section className="py-10 bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-brand-slate mb-4">
            Not seeing your brand? We still service it.
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            The 12 brands above represent our most frequent service calls — not the limit of what we repair. We also service Frigidaire, Maytag, Amana, Viking, Wolf, GE Profile, GE Café, Fisher & Paykel, Bertazzoni, Dacor, and many others. Call us and we&apos;ll confirm availability.
          </p>
          <a
            href={COMPANY_PHONE_TEL}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-blue px-6 py-3 text-sm font-extrabold text-white hover:bg-brand-blue-dark transition-colors shadow"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {COMPANY_PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <FAQSection
        faqs={BRANDS_FAQS}
        heading="Appliance Brand Repair — Frequently Asked Questions"
      />

      {/* Final CTA */}
      <section className="bg-brand-slate py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold mb-3">
            Appliance broken? We service every major brand.
          </h2>
          <p className="text-white/70 mb-6">
            {DIAGNOSTIC_FEE} diagnostic fee waived if we fix it. {WARRANTY_DAYS}-day parts &amp; labor warranty on every repair.
          </p>
          <a
            href={COMPANY_PHONE_TEL}
            className="inline-flex items-center gap-3 rounded-lg bg-brand-blue px-8 py-4 text-xl font-extrabold text-white hover:bg-brand-blue-dark transition-colors shadow-lg"
          >
            <Phone className="h-6 w-6" aria-hidden="true" />
            {COMPANY_PHONE_DISPLAY}
          </a>
          <p className="mt-4 text-sm text-white/60">
            Mon–Fri 9:00 AM–6:00 PM · Sat 10:00 AM–5:00 PM · Sun closed
          </p>
        </div>
      </section>
    </>
  )
}
