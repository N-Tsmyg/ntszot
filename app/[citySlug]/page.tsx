import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Phone, CheckCircle2, Wrench, ShieldCheck } from "lucide-react"
import TrustBar from "@/components/TrustBar"
import FAQSection, { type FAQ } from "@/components/FAQSection"
import MidPageCTA from "@/components/MidPageCTA"
import BreadcrumbSchema from "@/components/BreadcrumbSchema"
import GMBEmbed from "@/components/GMBEmbed"
import { LOCATIONS, getLocationBySlug, type Location } from "@/data/locations"
import { SERVICES } from "@/data/services"
import {
  COMPANY_NAME,
  COMPANY_PHONE_DISPLAY,
  COMPANY_PHONE_TEL,
  COMPANY_WEBSITE,
  DIAGNOSTIC_FEE,
  WARRANTY_DAYS,
  CARD_FEE_PERCENT,
  HOURS_WEEKDAY,
  HOURS_SATURDAY,
} from "@/data/constants"
import { RELATED_CITIES_MAP } from "@/utils/internalLinks"

// ─── Static params ──────────────────────────────────────────────────────────

export function generateStaticParams() {
  return LOCATIONS.filter((loc) => loc.slug.endsWith("-appliance-repair")).map(
    (loc) => ({ citySlug: loc.slug })
  )
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ citySlug: string }>
}): Promise<Metadata> {
  const { citySlug } = await params
  const location = getLocationBySlug(citySlug)
  if (!location) return {}

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: { canonical: `${COMPANY_WEBSITE}/${location.slug}/` },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `${COMPANY_WEBSITE}/${location.slug}/`,
    },
  }
}

// ─── Hook helpers ─────────────────────────────────────────────────────────────

function getOpeningParagraph(location: Location): string {
  const { name, hook, localVernacular, landmark1, landmark2 } = location

  if (hook === "A") {
    return (
      `Living with ${localVernacular} means your appliances face wear that homeowners in other parts of California simply do not see. ` +
      `In ${name}, every refrigerator, washer, and dishwasher works harder than the manufacturer's warranty table assumes. ` +
      `NTSZOT Appliance Repair sends a technician directly to your ${name} home — no hauling appliances to a shop, no waiting weeks for a service window. ` +
      `We charge a flat ${DIAGNOSTIC_FEE} service call fee that is waived entirely if you proceed with the repair. ` +
      `Every completed repair carries a ${WARRANTY_DAYS}-day parts and labor warranty, and we are available 6 days a week: ` +
      `${HOURS_WEEKDAY} and ${HOURS_SATURDAY}. ` +
      `From homes near ${landmark1} to neighborhoods around ${landmark2}, we cover all of ${name}.`
    )
  }

  if (hook === "B") {
    return (
      `A broken appliance in ${name} does not wait for a convenient time. ` +
      `When the washer stops mid-cycle or the refrigerator quits overnight, every hour matters — laundry piles up, food spoils, and your day falls apart. ` +
      `NTSZOT Appliance Repair is available 6 days a week so ${name} residents do not have to wait for Monday morning. ` +
      `Our technician arrives at your home with a flat ${DIAGNOSTIC_FEE} service call fee that is waived entirely when you proceed with the repair. ` +
      `Every repair is backed by a ${WARRANTY_DAYS}-day parts and labor warranty. ` +
      `We service all major brands and handle the full range of home appliances — from washers and dryers to refrigerators, ovens, and dishwashers. ` +
      `Whether you live near ${landmark1} or closer to ${landmark2}, our technician comes to you.`
    )
  }

  // Hook C
  return (
    `Your ${name} home deserves appliances that perform as well as the property itself. ` +
    `Whether you own near ${landmark1} or close to ${landmark2}, well-maintained appliances protect your home's value and prevent the costly emergency replacements that cut into your investment. ` +
    `NTSZOT Appliance Repair serves ${name} with in-home service, a flat ${DIAGNOSTIC_FEE} service call fee waived if we repair it, and a ${WARRANTY_DAYS}-day parts and labor warranty on every completed job. ` +
    `We are available ${HOURS_WEEKDAY} and ${HOURS_SATURDAY} — 6 days a week, no weekend markup. ` +
    `All major brands are covered: Samsung, LG, Whirlpool, GE, KitchenAid, Bosch, Sub-Zero, Thermador, and more. ` +
    `One call handles it, and your technician works in your kitchen rather than asking you to haul a 300-pound refrigerator anywhere.`
  )
}

function getCitySpecificParagraph(location: Location): string {
  const { name, landmark1, landmark2, localVernacular, zip } = location
  return (
    `${name} (ZIP ${zip}) sits in a part of San Diego County where ${localVernacular}. ` +
    `Homes near ${landmark1} and in the neighborhoods around ${landmark2} share this common thread: appliances here wear differently than the national average suggests. ` +
    `Refrigerator condenser coils collect grime faster, washing machine drums accumulate mineral buildup, and dryer vents fill with lint and dust more quickly. ` +
    `Understanding these local conditions is part of why ${name} homeowners call NTSZOT rather than waiting for a manufacturer warranty call center to connect them to someone two counties away. ` +
    `Our technician knows San Diego County, arrives prepared for what local conditions cause, and carries common parts on the service vehicle to complete most repairs in a single visit.`
  )
}

function getCityFAQs(location: Location): FAQ[] {
  const { name } = location
  return [
    {
      question: `How much does appliance repair cost in ${name}?`,
      answer: `Most appliance repairs in ${name} cost $300–$400 including parts and labor — washers, dryers, dishwashers, ovens, microwaves, range hoods, refrigerators, freezers, and ice makers. The ${DIAGNOSTIC_FEE} service call fee is waived completely when you proceed with the repair. A ${CARD_FEE_PERCENT}% processing fee applies to card payments; no fee on cash, check, Zelle, or Venmo.`,
    },
    {
      question: `Do you offer same-day appliance repair in ${name}?`,
      answer: `In most cases, yes. Our technician aims to arrive within a 3-hour window and complete the repair same visit when parts are available on the service vehicle. If a specific part needs to be ordered, it typically arrives within 1–3 business days. We are available ${HOURS_WEEKDAY} and ${HOURS_SATURDAY}.`,
    },
    {
      question: `What appliance brands do you repair in ${name}?`,
      answer: `We service all major brands in ${name} — Samsung, LG, Whirlpool, GE, KitchenAid, Kenmore, Bosch, Miele, Sub-Zero, Thermador, Electrolux, Speed Queen, and more. No brand restrictions, no runaround. One call, one technician.`,
    },
    {
      question: `Are you available on weekends in ${name}?`,
      answer: `Yes. We are available ${HOURS_WEEKDAY} and ${HOURS_SATURDAY}. Most independent repair shops are closed on weekends. When a refrigerator stops cooling on a Saturday in ${name}, we can be there.`,
    },
  ]
}

// ─── Pricing table data ──────────────────────────────────────────────────────

const PRICING_ROWS = [
  { type: "Washer / Dryer", range: "$300–$400", note: "Parts + labor" },
  { type: "Dishwasher", range: "$300–$400", note: "Parts + labor" },
  { type: "Oven / Range / Stove", range: "$300–$400", note: "Parts + labor" },
  { type: "Microwave", range: "$300–$400", note: "Parts + labor" },
  { type: "Range Hood", range: "$300–$400", note: "Parts + labor" },
  { type: "Refrigerator", range: "$300–$400", note: "Parts + labor" },
  { type: "Freezer", range: "$300–$400", note: "Parts + labor" },
  { type: "Ice Maker", range: "$300–$400", note: "Parts + labor" },
  { type: "Appliance Installation", range: "$250–$350", note: "Connection, leveling & testing" },
]

const WHY_CHOOSE = [
  `${DIAGNOSTIC_FEE} service call fee — waived entirely if we repair it`,
  `${WARRANTY_DAYS}-day parts and labor warranty on every completed repair`,
  "Available 6 days a week — no weekend surcharge",
  "Upfront quote before any work begins — no surprises",
  "All major brands: Samsung, LG, Whirlpool, GE, KitchenAid, Bosch, Sub-Zero, Thermador, and more",
]

// ─── Page component ──────────────────────────────────────────────────────────

export default async function CityPage({
  params,
}: {
  params: Promise<{ citySlug: string }>
}) {
  const { citySlug } = await params

  // Only serve slugs that end with "-appliance-repair"
  if (!citySlug.endsWith("-appliance-repair")) {
    notFound()
  }

  const location = getLocationBySlug(citySlug)
  if (!location) notFound()

  const relatedCitySlugs: string[] = RELATED_CITIES_MAP[citySlug] ?? []
  const relatedCityLocations = relatedCitySlugs
    .map((s) => LOCATIONS.find((l) => l.slug === s))
    .filter((l): l is Location => l !== undefined)

  const openingParagraph = getOpeningParagraph(location)
  const cityParagraph = getCitySpecificParagraph(location)
  const faqs = getCityFAQs(location)

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/locations/" },
          { name: `${location.name} Appliance Repair`, href: `/${location.slug}/` },
        ]}
      />

      {/* ── Hero ── */}
      <section className="bg-brand-slate text-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Appliance Repair in {location.name}, CA — {COMPANY_NAME}
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-6 max-w-2xl mx-auto">
            In-home repair across {location.name}. {DIAGNOSTIC_FEE} service call fee
            waived if we fix it. {WARRANTY_DAYS}-day warranty. All major brands. 7 days
            a week.
          </p>
          <a
            href={COMPANY_PHONE_TEL}
            className="inline-flex items-center gap-3 rounded-lg bg-brand-blue px-8 py-4 text-xl font-extrabold text-white hover:bg-brand-blue-dark transition-colors shadow-lg"
          >
            <Phone className="h-6 w-6" aria-hidden="true" />
            {COMPANY_PHONE_DISPLAY}
          </a>
          <p className="mt-4 text-sm text-white/50">
            {HOURS_WEEKDAY} · {HOURS_SATURDAY}
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm text-white/90">
            <ShieldCheck className="h-4 w-4 text-white/70 shrink-0" aria-hidden="true" />
            60-Day Parts &amp; Labor Warranty — Technician returns free if anything goes wrong
          </div>
        </div>
      </section>

      <TrustBar />

      {/* ── Opening paragraph ── */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-gray-700 text-base leading-relaxed">{openingParagraph}</p>
        </div>
      </section>

      {/* ── Services section ── */}
      <section className="py-10 pb-14 bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-slate mb-2 text-center">
            Appliance Repair Services in {location.name}
          </h2>
          <p className="text-sm text-gray-500 text-center mb-8">
            We repair all major home appliances in {location.name}, CA.
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service.slug}
                className="rounded-xl border border-gray-200 bg-white p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-brand-blue/10 p-2 shrink-0 mt-0.5">
                    <Wrench className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-brand-slate mb-1">
                      <Link
                        href={`/services/${service.slug}/`}
                        className="hover:text-brand-blue transition-colors"
                      >
                        {service.name} in {location.name}
                      </Link>
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-2">
                      {service.shortDesc}
                    </p>
                    <p className="text-xs text-gray-400">
                      Typical cost:{" "}
                      <span className="font-medium text-brand-slate">
                        {service.priceRange}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-gray-400">
            All repairs include the {DIAGNOSTIC_FEE} service call fee (waived if we
            repair it) and a {WARRANTY_DAYS}-day parts &amp; labor warranty.
          </p>
        </div>
      </section>

      {/* ── City-specific paragraph ── */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-brand-slate mb-4">
            Appliance Repair Specific to {location.name}
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">{cityParagraph}</p>
        </div>
      </section>

      <MidPageCTA
        heading={`Schedule your ${location.name} appliance repair today.`}
        subtext={`${DIAGNOSTIC_FEE} service call fee — waived completely if we fix it. ${WARRANTY_DAYS}-day parts & labor warranty.`}
      />

      {/* ── Why Choose NTSZOT ── */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-slate mb-8 text-center">
            Why {location.name} Homeowners Call NTSZOT
          </h2>
          <ul className="space-y-4">
            {WHY_CHOOSE.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2
                  className="h-5 w-5 text-brand-blue shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Pricing section ── */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-slate mb-2 text-center">
            Appliance Repair Pricing in {location.name}
          </h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            Flat {DIAGNOSTIC_FEE} service call fee — waived when we repair it. Upfront
            quote before any work begins.
          </p>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-brand-slate text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Appliance Type</th>
                  <th className="text-left px-4 py-3 font-semibold">Typical Range</th>
                  <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">
                    Includes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {PRICING_ROWS.map((row, i) => (
                  <tr
                    key={row.type}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 font-medium text-brand-slate">
                      {row.type}
                    </td>
                    <td className="px-4 py-3 text-gray-700">{row.range}</td>
                    <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-400 text-center">
            Card payments accepted with a {CARD_FEE_PERCENT}% processing fee. No fee on
            cash, check, Zelle, or Venmo. Prices shown are typical ranges; final cost
            provided in your upfront quote before work begins.
          </p>
        </div>
      </section>

      {/* ── GMB Embed ── */}
      <section className="py-8 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <GMBEmbed
            title={`NTSZOT Appliance Repair — ${location.name}`}
            height={300}
          />
        </div>
      </section>

      {/* ── FAQ section ── */}
      <FAQSection
        faqs={faqs}
        heading={`Appliance Repair FAQ — ${location.name}`}
      />

      {/* ── Booking CTA ── */}
      <section className="bg-brand-slate py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold mb-3">
            Book Your {location.name} Appliance Repair
          </h2>
          <p className="text-white/70 mb-6">
            {DIAGNOSTIC_FEE} service call fee waived if we fix it. {WARRANTY_DAYS}-day
            parts &amp; labor warranty on every repair. Available{" "}
            {HOURS_WEEKDAY.toLowerCase()} and {HOURS_SATURDAY.toLowerCase()}.
          </p>
          <a
            href={COMPANY_PHONE_TEL}
            className="inline-flex items-center gap-3 rounded-lg bg-brand-blue px-8 py-4 text-xl font-extrabold text-white hover:bg-brand-blue-dark transition-colors shadow-lg"
          >
            <Phone className="h-6 w-6" aria-hidden="true" />
            {COMPANY_PHONE_DISPLAY}
          </a>
          <p className="mt-4 text-sm text-white/60">
            {HOURS_WEEKDAY} · {HOURS_SATURDAY}
          </p>
        </div>
      </section>

      {/* ── Internal links ── */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">

            {/* Adjacent cities */}
            {relatedCityLocations.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-brand-slate mb-3 uppercase tracking-wide">
                  Nearby Service Areas
                </h3>
                <ul className="space-y-2">
                  {relatedCityLocations.map((city) => (
                    <li key={city.slug}>
                      <Link
                        href={`/${city.slug}/`}
                        className="text-sm text-brand-blue hover:underline"
                      >
                        Appliance Repair in {city.name} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Featured services */}
            <div>
              <h3 className="text-sm font-semibold text-brand-slate mb-3 uppercase tracking-wide">
                Popular Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/refrigerator-repair/"
                    className="text-sm text-brand-blue hover:underline"
                  >
                    Refrigerator Repair →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/washer-repair/"
                    className="text-sm text-brand-blue hover:underline"
                  >
                    Washer Repair →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/dryer-repair/"
                    className="text-sm text-brand-blue hover:underline"
                  >
                    Dryer Repair →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/dishwasher-repair/"
                    className="text-sm text-brand-blue hover:underline"
                  >
                    Dishwasher Repair →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Site links */}
            <div>
              <h3 className="text-sm font-semibold text-brand-slate mb-3 uppercase tracking-wide">
                More
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-brand-blue hover:underline"
                  >
                    NTSZOT Appliance Repair — Home →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/"
                    className="text-sm text-brand-blue hover:underline"
                  >
                    All Services →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/locations/"
                    className="text-sm text-brand-blue hover:underline"
                  >
                    All Service Areas →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
