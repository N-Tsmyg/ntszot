import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, Phone } from "lucide-react"
import BreadcrumbSchema from "@/components/BreadcrumbSchema"
import TrustBar from "@/components/TrustBar"
import { LOCATIONS } from "@/data/locations"
import {
  COMPANY_NAME,
  COMPANY_PHONE_DISPLAY,
  COMPANY_PHONE_TEL,
  COMPANY_WEBSITE,
  DIAGNOSTIC_FEE,
  WARRANTY_DAYS,
} from "@/data/constants"

export const metadata: Metadata = {
  title: `Appliance Repair Service Areas in San Diego County | ${COMPANY_NAME}`,
  description:
    "NTSZOT Appliance Repair serves all of San Diego County — 20 cities including San Diego, Chula Vista, La Jolla, Carlsbad, Escondido, and more. $80 service call fee waived if we fix it.",
  alternates: { canonical: `${COMPANY_WEBSITE}/locations/` },
  openGraph: {
    title: `Appliance Repair Service Areas — San Diego County | ${COMPANY_NAME}`,
    description:
      "In-home appliance repair across 20 San Diego County cities. $80 service call fee waived if we fix it. 60-day warranty. 6 days a week.",
    url: `${COMPANY_WEBSITE}/locations/`,
  },
}

export default function LocationsHubPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/locations/" },
        ]}
      />

      {/* Hero */}
      <section className="bg-brand-slate text-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Appliance Repair Service Areas — San Diego County
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-6 max-w-2xl mx-auto">
            NTSZOT Appliance Repair serves 20 cities across San Diego County.{" "}
            {DIAGNOSTIC_FEE} service call fee waived if we fix it. {WARRANTY_DAYS}-day
            warranty on every repair. All major brands. 6 days a week.
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
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-base leading-relaxed text-center">
            We cover the full sweep of San Diego County — from the coastal communities
            of La Jolla and Del Mar to inland cities like Escondido, El Cajon, and
            Ramona. Whether you are on the coast dealing with salt-air corrosion on your
            refrigerator coils, or in an inland valley where hard water and Santa Ana
            dust wear your appliances down faster, our technician comes to your home,
            diagnoses the problem for a flat {DIAGNOSTIC_FEE} fee (waived if we repair
            it), and completes the work in most cases same visit.
          </p>
        </div>
      </section>

      {/* City grid */}
      <section className="py-8 pb-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-slate mb-8 text-center">
            All Service Areas
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/${loc.slug}/`}
                className="group flex flex-col gap-2 rounded-xl border border-gray-200 bg-gray-50 p-5 hover:border-brand-blue hover:bg-red-50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-brand-blue/10 p-1.5 group-hover:bg-brand-blue/20 transition-colors shrink-0">
                    <MapPin className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-semibold text-brand-slate">{loc.name}</p>
                </div>
                <p className="text-xs text-gray-500 leading-snug pl-8">
                  {loc.localVernacular.split(" ").slice(0, 8).join(" ")}…
                </p>
                <span className="text-xs font-medium text-brand-blue group-hover:underline pl-8">
                  View page →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why NTSZOT */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-brand-slate mb-4">
            One Company Covering All of San Diego County
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {COMPANY_NAME} is a San Diego County appliance repair company. We do not
            subcontract and do not charge different rates by zip code. Whether you are
            in Carlsbad or National City, the pricing structure is the same: flat{" "}
            {DIAGNOSTIC_FEE} service call fee (waived if we repair it), upfront quote
            before any work begins, and a {WARRANTY_DAYS}-day parts and labor warranty
            on every completed repair. Card payments are accepted with a 3.5%
            processing fee; no fee on cash, check, Zelle, or Venmo.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left mt-8">
            <div className="rounded-lg bg-white border border-gray-200 p-5">
              <p className="font-semibold text-brand-slate text-sm mb-1">
                Coastal Cities
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                La Jolla, Del Mar, Encinitas, Carlsbad, Oceanside — salt air and marine
                layer demand extra attention to coils and seals.
              </p>
            </div>
            <div className="rounded-lg bg-white border border-gray-200 p-5">
              <p className="font-semibold text-brand-slate text-sm mb-1">
                Inland Valley Cities
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                El Cajon, Santee, Escondido, Ramona, Valley Center — summer heat and
                Santa Ana winds accelerate dust buildup in vents and coils.
              </p>
            </div>
            <div className="rounded-lg bg-white border border-gray-200 p-5">
              <p className="font-semibold text-brand-slate text-sm mb-1">
                South Bay &amp; East County
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Chula Vista, National City, Lemon Grove, La Mesa — hard water scale
                (300+ ppm) degrades dishwashers and washing machine components faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-slate py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold mb-3">
            Appliance broken? We cover your city.
          </h2>
          <p className="text-white/70 mb-6">
            {DIAGNOSTIC_FEE} service call fee waived if we fix it. {WARRANTY_DAYS}-day
            parts &amp; labor warranty. Available 6 days a week.
          </p>
          <a
            href={COMPANY_PHONE_TEL}
            className="inline-flex items-center gap-3 rounded-lg bg-brand-blue px-8 py-4 text-xl font-extrabold text-white hover:bg-brand-blue-dark transition-colors shadow-lg"
          >
            <Phone className="h-6 w-6" aria-hidden="true" />
            {COMPANY_PHONE_DISPLAY}
          </a>
          <p className="mt-4 text-sm text-white/60">
            Mon–Fri 9:00 AM–6:00 PM · Sat 10:00 AM–5:00 PM · Sun closed · All major brands
          </p>
        </div>
      </section>
    </>
  )
}
