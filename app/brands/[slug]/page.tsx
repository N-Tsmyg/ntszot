import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Phone } from "lucide-react"

import { BRANDS, getBrandBySlug } from "@/data/brands"
import { SERVICES } from "@/data/services"
import {
  COMPANY_PHONE_DISPLAY,
  COMPANY_PHONE_TEL,
  COMPANY_WEBSITE,
  DIAGNOSTIC_FEE,
  WARRANTY_DAYS,
  CARD_FEE_PERCENT,
  HOURS_WEEKDAY,
  HOURS_SUNDAY,
} from "@/data/constants"
import { BRAND_SERVICE_MAP, RELATED_BRANDS_MAP } from "@/utils/internalLinks"

import Hero from "@/components/Hero"
import TrustBar from "@/components/TrustBar"
import DifferentiatorsSection from "@/components/DifferentiatorsSection"
import FAQSection, { type FAQ } from "@/components/FAQSection"
import MidPageCTA from "@/components/MidPageCTA"
import BreadcrumbSchema from "@/components/BreadcrumbSchema"

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return BRANDS.map((brand) => ({ slug: brand.slug }))
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const brand = getBrandBySlug(slug)
  if (!brand) return {}

  return {
    title: brand.metaTitle,
    description: brand.metaDescription,
    alternates: {
      canonical: `${COMPANY_WEBSITE}/brands/${brand.slug}/`,
    },
    openGraph: {
      title: brand.metaTitle,
      description: brand.metaDescription,
      url: `${COMPANY_WEBSITE}/brands/${brand.slug}/`,
    },
  }
}

// ─── Helper: resolve service name from slug ───────────────────────────────────

function getServiceName(serviceSlug: string): string {
  const svc = SERVICES.find((s) => s.slug === serviceSlug)
  return svc ? svc.name : serviceSlug
}

// ─── Helper: appliance → service-slug mapping ─────────────────────────────────

const APPLIANCE_SERVICE_SLUG: Record<string, string> = {
  Refrigerators: "refrigerator-repair",
  Washers: "washer-repair",
  Dryers: "dryer-repair",
  Dishwashers: "dishwasher-repair",
  "Ovens & Ranges": "oven-range-stove-repair",
  "Ranges & Cooktops": "oven-range-stove-repair",
  Ovens: "oven-range-stove-repair",
  Microwaves: "microwave-repair",
  Freezers: "freezer-repair",
  "Ice Makers": "ice-maker-repair",
  "Wine Coolers": "refrigerator-repair",
}

// ─── Helper: one-line description per appliance ───────────────────────────────

const APPLIANCE_DESC: Record<string, string> = {
  Refrigerators:
    "Cooling failures, ice makers, water dispensers, and compressor issues — diagnosed and repaired same visit when parts are on-hand.",
  Washers:
    "Drainage problems, error codes, spin failures, and door latch issues on front-load and top-load models.",
  Dryers:
    "No-heat repairs, thermal fuse replacements, drum bearing failures, and airflow sensor problems on gas and electric models.",
  Dishwashers:
    "Draining faults, error codes, door latch problems, control board failures, and water inlet valve replacements.",
  "Ovens & Ranges":
    "Igniter replacements, bake and broil element failures, temperature sensor calibration, and control board repairs.",
  "Ranges & Cooktops":
    "Star burner igniter replacements, gas valve issues, electric element failures, and surface control repairs.",
  Ovens:
    "Bake element failures, convection fan issues, door seal replacements, and oven control board repairs.",
  Microwaves:
    "No-heat faults, magnetron and diode failures, turntable motor replacements, and door interlock repairs.",
  Freezers:
    "Not-freezing diagnosis, defrost heater failures, thermostat replacements, and door gasket issues.",
  "Ice Makers":
    "Ice production failures, water inlet valve replacements, ice mold thermostat repairs, and control module diagnostics.",
  "Wine Coolers":
    "Compressor diagnostics, thermoelectric module failures, temperature control repairs, and door seal replacements.",
}

function getApplianceDesc(appliance: string): string {
  return (
    APPLIANCE_DESC[appliance] ??
    `Full diagnosis and repair for ${appliance.toLowerCase()}, including control board, mechanical, and sensor failures.`
  )
}

// ─── Helper: one-paragraph explanation per symptom ────────────────────────────

function getSymptomExplanation(symptom: string): string {
  // Generic BLUF responses keyed on common patterns
  const lower = symptom.toLowerCase()

  if (lower.includes("not cooling") || lower.includes("not making ice") || lower.includes("ice maker not working")) {
    return `The most common cause is a failed evaporator fan motor, a clogged defrost drain, or a refrigerant issue. Our technician will check compressor operation and temperature sensors first — most cooling failures are diagnosed and repaired in a single visit.`
  }
  if (lower.includes("not draining") || lower.includes("won't drain")) {
    return `A clogged drain pump, blocked drain hose, or failed pump motor is usually the culprit. Our technician inspects the drain path and pump assembly, clearing blockages or replacing the pump as needed.`
  }
  if (lower.includes("not heating") || lower.includes("no heat")) {
    return `For dryers and ovens, a blown thermal fuse or failed heating element is the most frequent cause. Our technician tests continuity on all heating components and replaces what has failed — parts are commonly stocked on the service vehicle.`
  }
  if (lower.includes("error code") || lower.includes("e24") || lower.includes("dc error") || lower.includes("oe error") || lower.includes("d80") || lower.includes("lc error") || lower.includes("f-code") || lower.includes("flow sense")) {
    return `Error codes point to a specific fault detected by the appliance's control board. Our technician reads the code, confirms the underlying failure (sensor, valve, motor, or wiring), and repairs the root cause — not just the code.`
  }
  if (lower.includes("not spinning") || lower.includes("won't spin")) {
    return `A worn drive belt, failed motor coupling, or lid/door lock fault typically prevents a washer from spinning. Our technician tests each component systematically and replaces the failed part in one visit.`
  }
  if (lower.includes("leaking")) {
    return `Leaks typically originate from a worn door gasket, cracked drain hose, failed water inlet valve, or loose hose clamp. Our technician traces the source and makes a lasting repair — not a patch.`
  }
  if (lower.includes("beeping") || lower.includes("alarm")) {
    return `Persistent beeping usually signals a fault code or a door/sensor alarm. Our technician identifies the trigger — whether it's a temperature excursion, a door switch fault, or a control board issue — and resolves the root cause.`
  }
  if (lower.includes("not cleaning") || lower.includes("clean light blinking")) {
    return `Poor cleaning results often trace back to clogged spray arms, a failing wash pump, or a control board signal that has locked the wash cycle. Our technician runs a full diagnostic before recommending any parts replacement.`
  }
  if (lower.includes("lid lock") || lower.includes("door latch")) {
    return `A failed lid or door lock prevents the appliance from starting a cycle as a safety measure. Our technician tests the lock assembly and wiring harness and replaces the lock mechanism if it has failed.`
  }
  if (lower.includes("not starting") || lower.includes("igniter")) {
    return `Start failures can stem from a failed thermal fuse, control board fault, wiring issue, or door switch problem. Our technician works through the sequence from power supply to motor control to isolate the fault.`
  }
  if (lower.includes("temperature")) {
    return `Off-temperature readings usually mean a faulty oven sensor or thermostat. Our technician measures actual vs. set temperatures, tests the sensor, and calibrates or replaces it as needed.`
  }
  if (lower.includes("taking too long") || lower.includes("multiple cycles")) {
    return `Extended dry times usually mean restricted airflow — a clogged exhaust duct, failed moisture sensor, or weak heating element. Our technician checks the full air path and heating system to identify the cause.`
  }
  if (lower.includes("burner not lighting") || lower.includes("igniter not working")) {
    return `A faulty spark igniter, clogged burner ports, or a failed spark module is typically responsible. Our technician cleans burner assemblies and tests the igniter circuit before replacing any parts.`
  }

  // Fallback
  return `Our technician diagnoses the root cause using manufacturer-specific diagnostic procedures and repairs the failed component. Most repairs are completed in a single visit when parts are available on the service vehicle.`
}

// ─── Page component ───────────────────────────────────────────────────────────

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const brand = getBrandBySlug(slug)
  if (!brand) notFound()

  const isPremium = brand.tier === "premium"
  const isRefrigeration = brand.appliancesServiced.some((a) =>
    ["Refrigerators", "Freezers", "Wine Coolers", "Ice Makers"].includes(a)
  )

  // Service links for this brand (up to first 3)
  const brandServiceSlugs = (BRAND_SERVICE_MAP[brand.slug] ?? []).slice(0, 3)

  // Related brand(s) — just the first one
  const relatedBrandSlug = (RELATED_BRANDS_MAP[brand.slug] ?? [])[0]
  const relatedBrand = relatedBrandSlug ? BRANDS.find((b) => b.slug === relatedBrandSlug) : undefined

  // Price copy
  const standardPrice = "$250–$350"
  const refrigerationPrice = "$350–$900"

  // FAQs
  const faqs: FAQ[] = [
    {
      question: `How much does ${brand.name} appliance repair cost in San Diego?`,
      answer: `Most ${brand.name} appliance repairs in San Diego cost ${standardPrice}, including parts and labor.${isRefrigeration ? ` ${brand.name} refrigerator and refrigeration repairs typically run ${refrigerationPrice} depending on the part needed.` : ""} WNDW Appliance Repair charges an ${DIAGNOSTIC_FEE} diagnostic fee — waived completely when you proceed with the repair. If you decide not to repair, you owe the ${DIAGNOSTIC_FEE} and nothing else.`,
    },
    {
      question: `Do you repair all ${brand.name} models?`,
      answer: `Yes. Our technician is experienced with ${brand.name} appliances across all model generations, including ${brand.appliancesServiced.join(", ")}. Whether your unit is a current model or several years old, we carry common parts on the service vehicle and can source specialty components quickly.`,
    },
    {
      question: `Is your technician ${brand.name}-certified?`,
      answer: `Our technician is experienced with ${brand.name} appliances and their common failure modes. We do not claim factory or manufacturer certification — we let our diagnostics and 90-day warranty speak for themselves. Every repair is backed by a ${WARRANTY_DAYS}-day parts and labor warranty.`,
    },
    {
      question: `What ${brand.name} appliances break down most often in San Diego?`,
      answer: `Based on our service calls, the most common ${brand.name} issues we see are: ${brand.topSymptoms.slice(0, 3).join(", ")}. ${brand.topSymptoms[0]} is often the first symptom that prompts a call. San Diego's hard water and coastal humidity can accelerate wear on seals, sensors, and drain components.`,
    },
  ]

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Brands", href: "/brands/" },
          { name: brand.name, href: `/brands/${brand.slug}/` },
        ]}
      />

      {/* 1. Hero */}
      <Hero
        headline={brand.h1}
        subheadline={`We service all ${brand.name} appliances in San Diego — ${DIAGNOSTIC_FEE} diagnostic fee waived if we repair it. ${WARRANTY_DAYS}-day warranty on every repair.`}
      />

      {/* 2. TrustBar */}
      <TrustBar />

      {/* 3. Quick Answer Box */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="quick-answer rounded-xl border-l-4 border-brand-red bg-red-50 px-6 py-5">
            <p className="text-sm font-semibold text-brand-red uppercase tracking-wide mb-1">
              Quick Answer
            </p>
            <p className="text-gray-800 leading-relaxed">
              {brand.name} appliance repair in San Diego costs {standardPrice} for most appliances
              {isRefrigeration ? `, or ${refrigerationPrice} for refrigeration units` : ""}. WNDW
              Appliance Repair charges an {DIAGNOSTIC_FEE} diagnostic fee — waived completely when
              we complete the repair.{" "}
              {isPremium
                ? `For premium ${brand.name} appliances, you'll receive an upfront quote before any work begins and a ${WARRANTY_DAYS}-day warranty covering parts and labor.`
                : `Every repair includes a ${WARRANTY_DAYS}-day parts and labor warranty.`}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Appliances We Repair */}
      <section className="py-10 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-2">
            Which {brand.name} Appliances Do We Repair in San Diego?
          </h2>
          <p className="text-gray-600 mb-8">
            Our technician is familiar with {brand.name} systems across all appliance types. Here is
            what we service:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {brand.appliancesServiced.map((appliance) => {
              const svcSlug = APPLIANCE_SERVICE_SLUG[appliance]
              return (
                <div
                  key={appliance}
                  className="rounded-lg border border-gray-200 bg-white p-5"
                >
                  <h3 className="font-semibold text-brand-navy mb-1">
                    {svcSlug ? (
                      <Link
                        href={`/services/${svcSlug}/`}
                        className="hover:text-brand-red transition-colors"
                      >
                        {brand.name} {appliance}
                      </Link>
                    ) : (
                      `${brand.name} ${appliance}`
                    )}
                  </h3>
                  <p className="text-sm text-gray-600">{getApplianceDesc(appliance)}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. Common Problems */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-2">
            Common {brand.name} Problems We Fix
          </h2>
          <p className="text-gray-600 mb-8">
            These are the most frequent {brand.name} repair calls we receive in San Diego. Each
            symptom has a diagnosis path — our technician follows it on every visit.
          </p>
          <div className="space-y-6">
            {brand.topSymptoms.map((symptom) => (
              <div key={symptom} className="border-l-4 border-brand-red pl-5">
                <h3 className="font-semibold text-brand-navy mb-1">{symptom}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {getSymptomExplanation(symptom)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose WNDW for This Brand */}
      <section className="py-10 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-8">
            Why Choose WNDW for {brand.name} Repair in San Diego?
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {isPremium ? (
              <>
                <div className="rounded-lg bg-white border border-gray-200 p-5">
                  <p className="font-semibold text-brand-navy text-sm mb-1">
                    Upfront quote before any work begins
                  </p>
                  <p className="text-xs text-gray-600">
                    Our technician diagnoses the problem, explains the repair, and gives you a firm
                    price. Nothing proceeds without your approval. With a {brand.name} appliance,
                    you deserve clarity before committing.
                  </p>
                </div>
                <div className="rounded-lg bg-white border border-gray-200 p-5">
                  <p className="font-semibold text-brand-navy text-sm mb-1">
                    {WARRANTY_DAYS}-day parts and labor warranty
                  </p>
                  <p className="text-xs text-gray-600">
                    Every {brand.name} repair we complete is backed by a {WARRANTY_DAYS}-day
                    warranty. If the same problem returns within that window, we come back and
                    fix it at no extra charge.
                  </p>
                </div>
                <div className="rounded-lg bg-white border border-gray-200 p-5">
                  <p className="font-semibold text-brand-navy text-sm mb-1">
                    Technician experienced with {brand.name} systems
                  </p>
                  <p className="text-xs text-gray-600">
                    Our technician is experienced with {brand.name} appliances and their common
                    failure modes — including the diagnostic sequences specific to these machines.
                  </p>
                </div>
                <div className="rounded-lg bg-white border border-gray-200 p-5">
                  <p className="font-semibold text-brand-navy text-sm mb-1">
                    {DIAGNOSTIC_FEE} diagnostic fee — waived if we repair it
                  </p>
                  <p className="text-xs text-gray-600">
                    You pay {DIAGNOSTIC_FEE} for the diagnostic visit. If you proceed with the
                    repair, that fee is waived entirely. You only pay for parts and labor.
                  </p>
                </div>
                <div className="rounded-lg bg-white border border-gray-200 p-5 sm:col-span-2">
                  <p className="font-semibold text-brand-navy text-sm mb-1">
                    7 days a week — available when you need us
                  </p>
                  <p className="text-xs text-gray-600">
                    {HOURS_WEEKDAY} · {HOURS_SUNDAY}. Premium appliances don&apos;t break on
                    schedule — neither do we.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="rounded-lg bg-white border border-gray-200 p-5">
                  <p className="font-semibold text-brand-navy text-sm mb-1">
                    {DIAGNOSTIC_FEE} diagnostic fee — waived if we repair it
                  </p>
                  <p className="text-xs text-gray-600">
                    Your technician diagnoses the {brand.name} problem for {DIAGNOSTIC_FEE}. Approve
                    the repair, and the fee disappears from your bill entirely.
                  </p>
                </div>
                <div className="rounded-lg bg-white border border-gray-200 p-5">
                  <p className="font-semibold text-brand-navy text-sm mb-1">
                    {WARRANTY_DAYS}-day warranty on every repair
                  </p>
                  <p className="text-xs text-gray-600">
                    Every repair we complete on your {brand.name} appliance is backed by a{" "}
                    {WARRANTY_DAYS}-day parts and labor warranty — no questions asked.
                  </p>
                </div>
                <div className="rounded-lg bg-white border border-gray-200 p-5">
                  <p className="font-semibold text-brand-navy text-sm mb-1">
                    Technician familiar with {brand.name} appliances
                  </p>
                  <p className="text-xs text-gray-600">
                    Our technician is experienced with {brand.name} systems, including their common
                    error codes and failure modes, which means faster diagnosis and a more accurate
                    first-visit fix.
                  </p>
                </div>
                <div className="rounded-lg bg-white border border-gray-200 p-5">
                  <p className="font-semibold text-brand-navy text-sm mb-1">
                    Available 7 days a week
                  </p>
                  <p className="text-xs text-gray-600">
                    {HOURS_WEEKDAY} · {HOURS_SUNDAY}. Most independent shops close on weekends.
                    We don&apos;t.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 7. Pricing */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">
            How Much Does {brand.name} Appliance Repair Cost in San Diego?
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-gray-200 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-brand-navy">
                    {brand.name} standard appliances
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Washers, dryers, dishwashers, ovens, ranges, and microwaves.
                  </p>
                </div>
                <p className="text-lg font-bold text-brand-red whitespace-nowrap">
                  {standardPrice}
                </p>
              </div>
            </div>
            {isRefrigeration && (
              <div className="rounded-lg border border-gray-200 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-brand-navy">
                      {brand.name} refrigeration units
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Refrigerators, freezers, wine coolers, and ice makers.
                    </p>
                  </div>
                  <p className="text-lg font-bold text-brand-red whitespace-nowrap">
                    {refrigerationPrice}
                  </p>
                </div>
              </div>
            )}
            <div className="rounded-lg bg-red-50 border border-brand-red/20 p-5">
              <p className="font-semibold text-brand-navy mb-1">
                Diagnostic fee: {DIAGNOSTIC_FEE} — waived when we repair it
              </p>
              <p className="text-sm text-gray-600">
                Our technician visits your home and diagnoses the {brand.name} problem for{" "}
                {DIAGNOSTIC_FEE}. If you approve the repair, that fee is waived in full — you only
                pay for parts and labor. If you decline the repair, you owe {DIAGNOSTIC_FEE} and
                nothing more.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5">
              <p className="font-semibold text-brand-navy mb-1">
                {WARRANTY_DAYS}-day parts and labor warranty
              </p>
              <p className="text-sm text-gray-600">
                Every repair we complete includes a {WARRANTY_DAYS}-day warranty. Same problem
                within {WARRANTY_DAYS} days? We return and fix it at no additional charge.
              </p>
            </div>
            <p className="text-xs text-gray-400">
              Payment: cash, check, Zelle, Venmo (no fee). Card payments accepted with a{" "}
              {CARD_FEE_PERCENT}% processing fee, disclosed before payment.
            </p>
          </div>
        </div>
      </section>

      {/* 8. MidPageCTA */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <MidPageCTA
          heading={`Ready to schedule your ${brand.name} repair?`}
          subtext={`${DIAGNOSTIC_FEE} diagnostic fee — waived completely if we fix it. ${WARRANTY_DAYS}-day warranty on every repair.`}
        />
      </div>

      {/* 9. DifferentiatorsSection */}
      <DifferentiatorsSection />

      {/* 10. FAQSection */}
      <FAQSection
        faqs={faqs}
        heading={`${brand.name} Appliance Repair FAQ — San Diego`}
      />

      {/* 11. Final CTA */}
      <section className="bg-brand-navy py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold mb-3">
            {brand.name} appliance not working?
          </h2>
          <p className="text-white/70 mb-2">
            {DIAGNOSTIC_FEE} diagnostic fee waived if we fix it. {WARRANTY_DAYS}-day parts &amp;
            labor warranty on every repair.
          </p>
          <p className="text-white/50 text-sm mb-6">
            {HOURS_WEEKDAY} · {HOURS_SUNDAY}
          </p>
          <a
            href={COMPANY_PHONE_TEL}
            className="inline-flex items-center gap-3 rounded-lg bg-brand-red px-8 py-4 text-xl font-extrabold text-white hover:bg-brand-red-dark transition-colors shadow-lg"
          >
            <Phone className="h-6 w-6" aria-hidden="true" />
            {COMPANY_PHONE_DISPLAY}
          </a>

          {/* Internal links */}
          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="text-white/60 text-xs uppercase tracking-widest mb-4">
              Related pages
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/brands/" className="text-white/60 hover:text-white transition-colors">
                ← All brands
              </Link>
              {brandServiceSlugs.map((svcSlug) => (
                <Link
                  key={svcSlug}
                  href={`/services/${svcSlug}/`}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {getServiceName(svcSlug)}
                </Link>
              ))}
              {relatedBrand && (
                <Link
                  href={`/brands/${relatedBrand.slug}/`}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {relatedBrand.name} repair
                </Link>
              )}
              <Link
                href="/contact/"
                className="text-white/60 hover:text-white transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
