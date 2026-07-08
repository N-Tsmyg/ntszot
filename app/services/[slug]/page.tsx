import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Phone, CheckCircle2 } from "lucide-react"
import Hero from "@/components/Hero"
import TrustBar from "@/components/TrustBar"
import MidPageCTA from "@/components/MidPageCTA"
import DifferentiatorsSection from "@/components/DifferentiatorsSection"
import FAQSection, { type FAQ } from "@/components/FAQSection"
import BreadcrumbSchema from "@/components/BreadcrumbSchema"
import { SERVICES, getServiceBySlug } from "@/data/services"
import { RELATED_SERVICES_MAP } from "@/utils/internalLinks"
import {
  COMPANY_PHONE_DISPLAY,
  COMPANY_PHONE_TEL,
  COMPANY_WEBSITE,
  DIAGNOSTIC_FEE,
  WARRANTY_DAYS,
  CARD_FEE_PERCENT,
  HOURS_WEEKDAY,
  HOURS_SATURDAY,
} from "@/data/constants"

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `${COMPANY_WEBSITE}/services/${service.slug}/` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${COMPANY_WEBSITE}/services/${service.slug}/`,
    },
  }
}

// ─── Symptom descriptions ─────────────────────────────────────────────────────

const SYMPTOM_DESCRIPTIONS: Record<string, string> = {
  // Washer
  "Washer not draining":
    "Standing water left in the drum after a cycle — usually a clogged pump filter, failed drain pump, or kinked drain hose.",
  "Washer won't spin":
    "Clothes come out soaking wet — often a worn drive belt, faulty lid switch (top-load), or motor control issue.",
  "Washer leaking water":
    "Water on the floor during or after a cycle — common causes include door boot seal failure, loose hose connections, or a cracked tub.",
  "Washer making loud noise":
    "Banging, grinding, or squealing during agitation or spin — typically worn drum bearings, a damaged spider arm, or foreign objects in the drum.",
  "Washer not starting":
    "No response when pressing start — can be a door latch failure, control board issue, or tripped thermal fuse.",

  // Dryer
  "Dryer not heating":
    "Clothes tumble but stay damp — usually a blown thermal fuse, failed heating element, or faulty igniter on gas models.",
  "Dryer takes multiple cycles":
    "Clothes require 2–3 cycles to dry — often restricted airflow from a clogged vent, lint screen buildup, or a weak heating element.",
  "Dryer making loud noise":
    "Squealing, thumping, or grinding sounds — typically worn drum support rollers, a damaged drum belt, or a faulty idler pulley.",
  "Dryer not starting":
    "Drum won't turn or dryer won't power on — can be a door switch failure, blown thermal fuse, or motor issue.",
  "Dryer lint or burning smell":
    "A burning smell during operation is a safety concern — most often caused by lint buildup in the exhaust duct or around the heating element.",

  // Oven / Range / Stove
  "Oven not heating":
    "Oven won't reach set temperature or stays cold — usually a failed bake element (electric) or faulty igniter (gas).",
  "Gas stove not lighting":
    "Burner clicks but won't light or stay lit — commonly a dirty or cracked igniter, clogged burner cap, or spark module failure.",
  "Oven temperature off":
    "Food burns or undercooks — often a failed temperature sensor, worn bake element, or calibration issue.",
  "Burner not working":
    "One or more burners won't heat — can be a failed coil element (electric) or blocked/cracked burner (gas).",
  "Oven door not closing":
    "Door won't latch or seal properly — typically worn door hinges, a broken door spring, or a misaligned gasket.",

  // Dishwasher
  "Dishwasher not draining":
    "Water pools at the bottom after the cycle — usually a clogged filter, failed drain pump, or blocked drain hose.",
  "Dishwasher leaking":
    "Water escaping from the door or base — often a worn door gasket, faulty inlet valve, or cracked spray arm.",
  "Dishwasher not cleaning dishes":
    "Dishes come out with food residue — commonly caused by clogged spray arms, failed wash pump, or improper water temperature.",
  "Dishwasher not drying":
    "Dishes remain wet after the cycle — usually a failed heating element or faulty vent assembly.",
  "Dishwasher not starting":
    "No response when pressing start — often a door latch failure, blown thermal fuse, or control board issue.",

  // Refrigerator
  "Refrigerator not cooling":
    "Food not staying cold or freezer section warm — can be dirty condenser coils, a failed evaporator fan, or a compressor issue.",
  "Refrigerator leaking water":
    "Puddles inside or under the unit — typically a clogged defrost drain, failed water inlet valve, or cracked ice maker fill tube.",
  "Ice maker not working":
    "No ice production or very slow output — usually a frozen fill tube, failed ice maker module, or faulty water inlet valve.",
  "Refrigerator making noise":
    "Buzzing, rattling, or clicking — often a dirty condenser fan, faulty evaporator fan, or compressor starting relay issue.",
  "Refrigerator freezing food":
    "Fresh food compartment freezing items — commonly a faulty damper control, failed thermistor, or temperature control issue.",

  // Freezer
  "Freezer not freezing":
    "Food thawing or temps rising above 0°F — usually compressor trouble, a failing thermostat, or a refrigerant issue.",
  "Freezer frost buildup":
    "Excessive ice forming inside — typically a failed defrost heater, defrost thermostat, or defrost control board.",
  "Freezer making noise":
    "Loud humming, rattling, or clicking — often a failing evaporator fan motor or compressor relay.",
  "Freezer running constantly":
    "Compressor never cycles off — commonly caused by a dirty condenser, faulty thermostat, or worn door gasket.",
  "Freezer not maintaining temperature":
    "Temperature fluctuates above target — usually a faulty thermostat, dirty condenser coils, or a door seal that isn't sealing.",

  // Ice Maker
  "Ice maker not making ice":
    "Zero ice production — typically a jammed ice maker arm, failed water inlet valve, or frozen fill tube.",
  "Ice maker not working after reset":
    "Ice maker was reset but still won't produce ice — may indicate a failed ice maker module or water supply issue.",
  "Ice maker leaking":
    "Water dripping inside the freezer — usually a cracked fill cup, failed inlet valve, or misaligned fill tube.",
  "Ice tastes bad":
    "Off-flavor or odor in ice — commonly an old water filter, contaminated water line, or a dirty ice bin.",
  "Ice maker too slow":
    "Production is low or very slow — often low water pressure, a partially clogged filter, or a failing harvest cycle.",

  // Microwave
  "Microwave not heating":
    "Food runs through the cycle cold — usually a failed magnetron, blown high-voltage fuse, or faulty diode.",
  "Microwave sparking":
    "Arcing or sparking inside — often a damaged waveguide cover, soiled interior, or a failing magnetron.",
  "Microwave turntable not spinning":
    "Rotating plate stops turning — typically a broken turntable motor, stripped coupler, or worn drive bushing.",
  "Microwave not starting":
    "No power or won't begin a cycle — can be a door interlock switch failure, blown line fuse, or control board issue.",
  "Microwave door not closing":
    "Door won't latch securely — usually a broken door latch, worn hook, or damaged door spring.",

  // Range Hood
  "Range hood fan not working":
    "Fan won't run on any speed — typically a failed motor, burned-out capacitor, or faulty speed switch.",
  "Range hood light not working":
    "Light bulb won't illuminate — usually a burned-out bulb, failed socket, or wiring issue.",
  "Range hood making noise":
    "Rattling or vibrating during operation — often loose mounting hardware, a worn fan blade, or motor bearing failure.",
  "Range hood not venting":
    "Smoke and odors stay in the kitchen — can be a clogged or missing duct, failed damper, or weak fan output.",
  "Range hood controls not responding":
    "Buttons or touch controls unresponsive — commonly a failed control board, shorted switch panel, or wiring fault.",

  // Installation
  "New refrigerator installation":
    "Full installation including water line connection for ice maker/dispenser, leveling, and test run.",
  "Washer and dryer installation":
    "Connection to water supply and drain (washer) plus electrical or gas hookup (dryer), leveling, and test cycle.",
  "Dishwasher installation":
    "Water supply and drain connection, electrical hookup, leveling, and full test wash cycle.",
  "Oven or range installation":
    "Electrical or gas connection, anti-tip bracket installation, leveling, and safety check. Note: gas LINE modification requires a licensed contractor.",
  "Appliance connection and testing":
    "Full connection (gas, electric, or water as applicable), leveling, and a complete test cycle to confirm proper operation.",

  // Annual Maintenance — per-appliance breakdown
  "Washer maintenance":
    "Pump filter cleaning, drain line inspection, and door seal check. Prevents the buildup that causes drainage failures and leaks.",
  "Dryer maintenance":
    "Interior lint removal from the lint trap housing and drum area. Does not include external duct cleaning — interior lint-only.",
  "Refrigerator maintenance":
    "Condenser coil cleaning, door seal inspection, and water filter check. Dirty coils are the leading cause of cooling loss in San Diego homes.",
  "Dishwasher maintenance":
    "Filter cleaning, drain inspection, and door gasket check. Prevents the buildup that causes poor cleaning and standing water.",
  "Oven / Range maintenance":
    "Burner and igniter inspection, door seal check, and oven interior review. Gas models include burner port cleaning.",
  "Range Hood maintenance":
    "Grease filter cleaning and fan operation check. Reduces fire risk and keeps kitchen ventilation working properly.",
}

function getSymptomDescription(symptom: string): string {
  return SYMPTOM_DESCRIPTIONS[symptom] ?? `Our technician diagnoses and resolves this issue during the service visit.`
}

// ─── Gas appliance note ───────────────────────────────────────────────────────

const GAS_SLUGS = new Set(["oven-range-stove-repair", "dryer-repair"])

// ─── Page component ───────────────────────────────────────────────────────────

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const relatedSlugs = (RELATED_SERVICES_MAP[service.slug] ?? []).slice(0, 2)
  const relatedServices = relatedSlugs
    .map((s) => SERVICES.find((sv) => sv.slug === s))
    .filter(Boolean) as (typeof SERVICES)[number][]

  const isGas = GAS_SLUGS.has(service.slug)
  const isInstallation = service.slug === "appliance-installation"

  // Build FAQs
  const faqs: FAQ[] = [
    {
      question: `How much does ${service.name.toLowerCase()} cost in San Diego?`,
      answer: `${service.name} in San Diego typically costs ${service.priceRange} including parts and labor. The exact cost depends on the appliance brand, model, and part required — your technician provides an upfront quote after diagnosis.${isInstallation ? "" : " The $80 service call fee is waived completely if you proceed with the repair."}`,
    },
    {
      question: `How long does ${service.name.toLowerCase()} take?`,
      answer: `In most cases, our technician completes the repair during the same visit when parts are available on the service vehicle. If a specific part needs to be ordered, it typically arrives within 1–3 business days and your technician returns to finish the job.`,
    },
    {
      question: `Do you offer a warranty on ${service.name.toLowerCase()}?`,
      answer: `Yes. Every repair comes with a ${WARRANTY_DAYS}-day parts and labor warranty. If the same problem returns within ${WARRANTY_DAYS} days of service, our technician comes back and resolves it at no additional charge.`,
    },
    {
      question: "What brands do you repair?",
      answer: `We repair all major brands — Samsung, LG, Whirlpool, GE, KitchenAid, Bosch, and many more including premium brands like Miele, Sub-Zero, and Thermador. No brand restrictions. One call handles it.`,
    },
  ]

  const pricingIntro = isInstallation
    ? `Appliance installation in San Diego is priced at ${service.priceRange} depending on the appliance type and complexity of the connection. This covers your technician's labor for delivery placement, connections, leveling, and a full test run.`
    : `${service.name} in San Diego typically costs ${service.priceRange} including parts and labor. The exact total depends on the appliance brand, model, and the specific component that needs replacing. Your technician provides an upfront quote after diagnosing the issue — no work begins without your approval.`

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services/" },
          { name: service.name, href: `/services/${service.slug}/` },
        ]}
      />

      {/* 1. Hero */}
      <Hero
        headline={service.h1}
        subheadline={isInstallation
          ? `${WARRANTY_DAYS}-day parts & labor warranty. All major brands. San Diego County.`
          : `${DIAGNOSTIC_FEE} service call fee waived if we fix it. ${WARRANTY_DAYS}-day parts & labor warranty. All major brands. San Diego County.`
        }
        hideDiagnosticNote={isInstallation}
        urgencyNote={`${HOURS_WEEKDAY} · ${HOURS_SATURDAY}`}
      />

      {/* 2. TrustBar */}
      <TrustBar />

      {/* 3. Quick Answer Box */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="quick-answer rounded-xl border-l-4 border-brand-blue bg-blue-50 p-6">
            <p className="font-semibold text-brand-slate text-base leading-relaxed">
              {isInstallation
                ? `Appliance installation in San Diego costs ${service.priceRange} depending on the appliance type and connection complexity. The $80 service call fee does not apply to installation — the installation rate is the flat service cost.`
                : `${service.name} in San Diego costs ${service.priceRange} in most cases, including parts and labor. The $80 service call fee is waived completely when you proceed with the repair.`}
            </p>
          </div>
        </div>
      </section>

      {/* 4. What We Fix */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-slate mb-6">
            {isInstallation
              ? "Appliances We Install in San Diego"
              : `Common ${service.name} Problems We Fix in San Diego`}
          </h2>
          <ul className="space-y-4">
            {service.topSymptoms.map((symptom) => (
              <li key={symptom} className="flex gap-4">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-semibold text-brand-slate text-sm">{symptom}</p>
                  <p className="mt-0.5 text-sm text-gray-600 leading-relaxed">
                    {getSymptomDescription(symptom)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          {isGas && (
            <p className="mt-6 text-sm text-gray-500 border border-gray-200 rounded-lg p-4 bg-gray-50">
              <strong>Gas appliance note:</strong> Our technician performs gas appliance repair — igniters, valves, burners, and related components. Gas line extension or modification requires a licensed gas contractor and is outside the scope of appliance repair.
            </p>
          )}
        </div>
      </section>

      {/* 5. Brands We Service */}
      <section className="py-10 bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-slate mb-4">
            All Major Brands — No Restrictions
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            We service every major appliance brand — no limitations, no brand-specific runaround. Whether you have a mainstream brand or a premium appliance, our technician works on it.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Samsung", "LG", "Whirlpool", "GE", "KitchenAid",
              "Bosch", "Kenmore", "Electrolux", "Miele", "Sub-Zero",
              "Thermador", "Speed Queen", "Frigidaire", "Maytag", "Amana",
            ].map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-brand-slate"
              >
                {brand}
              </span>
            ))}
            <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-400">
              + many more
            </span>
          </div>
        </div>
      </section>

      {/* 6. Pricing */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-slate mb-4">
            {`How Much Does ${service.name} Cost in San Diego?`}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {pricingIntro}
          </p>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 space-y-3">
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <span className="text-sm font-medium text-brand-slate">
                {service.slug === "appliance-installation" ? "Typical installation cost" : "Typical repair cost"}
              </span>
              <span className="text-sm font-bold text-brand-slate">{service.priceRange}</span>
            </div>
            {service.slug !== "appliance-installation" && (
              <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                <span className="text-sm font-medium text-brand-slate">Diagnostic fee</span>
                <span className="text-sm font-bold text-brand-slate">{DIAGNOSTIC_FEE} (waived if repaired)</span>
              </div>
            )}
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <span className="text-sm font-medium text-brand-slate">Warranty</span>
              <span className="text-sm font-bold text-brand-slate">{WARRANTY_DAYS}-day parts & labor</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-brand-slate">Payment methods</span>
              <span className="text-sm text-gray-600">Cash · Check · Zelle · Venmo (no fee)<br />Card accepted ({CARD_FEE_PERCENT}% fee)</span>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-400">
            Final cost depends on appliance brand, model, and part required. Your technician provides an itemized quote before any work begins.
          </p>
        </div>
      </section>

      {/* 7. MidPageCTA */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <MidPageCTA
          heading={`Ready to schedule your ${service.name.toLowerCase()}?`}
          subtext={`${DIAGNOSTIC_FEE} service call fee — waived if we fix it. ${WARRANTY_DAYS}-day warranty on every repair.`}
        />
      </div>

      {/* 8. DifferentiatorsSection */}
      <DifferentiatorsSection />

      {/* 9. FAQSection */}
      <FAQSection faqs={faqs} heading={`${service.name} — Frequently Asked Questions`} />

      {/* Internal links — related services */}
      {relatedServices.length > 0 && (
        <section className="py-10 bg-white border-t border-gray-100">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-bold text-brand-slate mb-4">Related Services</h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/services/"
                className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-brand-slate hover:border-brand-blue hover:text-brand-blue transition-colors"
              >
                ← All Services
              </Link>
              {relatedServices.map((rs) => (
                <Link
                  key={rs.slug}
                  href={`/services/${rs.slug}/`}
                  className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-brand-slate hover:border-brand-blue hover:text-brand-blue transition-colors"
                >
                  {rs.name}
                </Link>
              ))}
              <Link
                href="/specials/"
                className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-brand-slate hover:border-brand-blue hover:text-brand-blue transition-colors"
              >
                Current Specials
              </Link>
              <Link
                href="/contact/"
                className="rounded-lg border border-brand-blue bg-blue-50 px-4 py-2 text-sm font-medium text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
              >
                Schedule Repair →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 10. Final CTA */}
      <section className="bg-brand-slate py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold mb-3">
            Call to schedule your {service.name.toLowerCase()}
          </h2>
          <p className="text-white/70 mb-6">
            {DIAGNOSTIC_FEE} service call fee waived if we fix it. {WARRANTY_DAYS}-day parts &amp; labor warranty.
            <br />
            {HOURS_WEEKDAY} · {HOURS_SATURDAY}
          </p>
          <a
            href={COMPANY_PHONE_TEL}
            className="inline-flex items-center gap-3 rounded-full bg-brand-blue px-8 py-4 text-xl font-extrabold text-white hover:bg-brand-blue-dark transition-colors shadow-lg"
          >
            <Phone className="h-6 w-6" aria-hidden="true" />
            {COMPANY_PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </>
  )
}
