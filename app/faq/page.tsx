import type { Metadata } from "next"
import Link from "next/link"
import { Phone } from "lucide-react"
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
  CARD_FEE_PERCENT,
} from "@/data/constants"

export const metadata: Metadata = {
  title: "Appliance Repair FAQ — San Diego",
  description:
    "Frequently asked questions about appliance repair in San Diego — pricing, scheduling, warranty, brands, payment, and service area. NTSZOT Appliance Repair. Call (619) 488-4477.",
  alternates: { canonical: `${COMPANY_WEBSITE}/faq/` },
  openGraph: {
    title: `Appliance Repair FAQ — San Diego | ${COMPANY_NAME}`,
    description:
      "Answers to the most common appliance repair questions in San Diego. Pricing, warranty, brands, same-day service, and more.",
    url: `${COMPANY_WEBSITE}/faq/`,
  },
}

const PRICING_FAQS = [
  {
    question: "How much does appliance repair cost in San Diego?",
    answer: `Most appliance repairs in San Diego — washers, dryers, dishwashers, ovens, microwaves, and range hoods — cost $250–$350 including parts and labor. Refrigerator, freezer, and ice maker repairs typically run $350–$900 depending on the component and brand. The ${DIAGNOSTIC_FEE} service call fee is waived completely when you proceed with the repair.`,
  },
  {
    question: "What is the $80 service call fee?",
    answer: `The ${DIAGNOSTIC_FEE} fee covers your technician's visit and a full diagnosis of the reported problem. After diagnosis, you receive an upfront quote for the repair. If you approve the repair, the ${DIAGNOSTIC_FEE} is waived entirely — you pay only parts and labor. If you decide not to repair, you owe ${DIAGNOSTIC_FEE} and nothing more.`,
  },
  {
    question: "Does the service call fee apply to installations?",
    answer: `No. The ${DIAGNOSTIC_FEE} service call fee applies to repair calls. Appliance installation is priced at $220–$350 depending on the appliance type and connection complexity. The installation rate is the flat service cost — there is no separate diagnostic fee for installation.`,
  },
  {
    question: "What does the Annual Maintenance Plan cost?",
    answer: `The Annual Appliance Maintenance Plan is $350 per year. This covers two scheduled in-home visits. Parts needed during a maintenance visit are billed at cost — they are not included in the $350 flat rate. The plan covers refrigerator condenser coil cleaning, dryer lint duct inspection (interior lint removal), dishwasher filter cleaning, and a full appliance check.`,
  },
  {
    question: "What payment methods do you accept?",
    answer: `Cash, check, Zelle, and Venmo are accepted with no processing fee. Credit and debit card payments are accepted with a ${CARD_FEE_PERCENT}% processing fee, which is disclosed before payment is taken. We do not surprise you with a card fee at checkout.`,
  },
]

const SCHEDULING_FAQS = [
  {
    question: "Do you offer same-day appliance repair?",
    answer: `In most cases, yes. Our technician aims to arrive within a 3-hour window and complete the repair same visit when parts are on the service vehicle. We are available ${HOURS_WEEKDAY} and ${HOURS_SUNDAY} with no surcharge for weekend or evening service.`,
  },
  {
    question: "What areas of San Diego do you serve?",
    answer: `We serve all of San Diego County — including San Diego, Chula Vista, La Mesa, El Cajon, Santee, La Jolla, Del Mar, Poway, Rancho Bernardo, National City, Ramona, Fallbrook, Oceanside, San Marcos, Encinitas, Escondido, Valley Center, Lemon Grove, Carlsbad, and Vista. Coverage is the same 6 days a week.`,
  },
  {
    question: "What are your hours?",
    answer: `${HOURS_WEEKDAY} and ${HOURS_SUNDAY}. No surcharge for evening or weekend appointments.`,
  },
  {
    question: "How do I schedule a repair?",
    answer: `Call us at ${COMPANY_PHONE_DISPLAY}. We confirm availability and book a service window on the same call. You can also submit a callback request at our contact page and we will reach you within one business day — but calling is faster, especially for same-day or urgent repairs.`,
  },
]

const WARRANTY_FAQS = [
  {
    question: "What warranty do you provide?",
    answer: `Every completed repair carries a ${WARRANTY_DAYS}-day parts and labor warranty. If the same problem returns within ${WARRANTY_DAYS} days of service, our technician returns and resolves it at no additional charge. The warranty covers both the part that was replaced and the labor to install it.`,
  },
  {
    question: "Does the warranty cover installation work?",
    answer: `The ${WARRANTY_DAYS}-day warranty applies to repair work. Appliance installation warranty coverage depends on the appliance manufacturer's warranty for the installed unit. Ask your technician at the time of installation.`,
  },
  {
    question: "What if the same problem comes back after the warranty period?",
    answer: `If a problem recurs after the ${WARRANTY_DAYS}-day warranty period, we treat it as a new service call with a new ${DIAGNOSTIC_FEE} service call fee. Our technician re-diagnoses the issue and provides a new upfront quote. A recurring failure after the warranty period often indicates a different underlying cause.`,
  },
]

const BRANDS_FAQS = [
  {
    question: "What appliance brands do you service?",
    answer: `We service all major brands — Samsung, LG, Whirlpool, GE, KitchenAid, Kenmore, Bosch, Electrolux, Miele, Sub-Zero, Thermador, Speed Queen, Frigidaire, Maytag, Amana, and more. No brand restrictions. One call, one technician.`,
  },
  {
    question: "Are you factory-certified or manufacturer-authorized?",
    answer: `Our technician is experienced with all major appliance brands and their common failure modes. We do not claim factory or manufacturer certification for any brand. Every repair is backed by our own ${WARRANTY_DAYS}-day parts and labor warranty.`,
  },
  {
    question: "Can you repair Sub-Zero, Thermador, or Miele appliances?",
    answer: `Yes. We service premium brands including Sub-Zero, Thermador, and Miele. Our technician is experienced with these appliances and their diagnostic sequences. Every repair carries the same ${WARRANTY_DAYS}-day parts and labor warranty regardless of brand tier.`,
  },
]

const GAS_FAQS = [
  {
    question: "Do you repair gas appliances?",
    answer: `Yes. Our technician performs gas appliance repair — igniters, gas valves, burner assemblies, and related components on gas ovens, ranges, cooktops, and dryers. This is standard appliance repair work.`,
  },
  {
    question: "Can you modify a gas line or extend a gas connection?",
    answer: `No. Gas line modification or extension requires a licensed plumbing or gas contractor. Our technician repairs the gas appliance — the components inside the unit that handle gas combustion. Gas line work upstream of the appliance connection is outside the scope of appliance repair.`,
  },
]

export default function FAQPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq/" },
        ]}
      />

      {/* Header */}
      <section className="bg-brand-slate text-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Appliance Repair FAQ — San Diego
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Answers to the most common questions about appliance repair in San Diego — pricing, scheduling, warranty, brands, and payment.
          </p>
        </div>
      </section>

      <TrustBar />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-4">
        <p className="text-sm text-gray-500 text-center">
          Use the sections below to find answers. If your question isn&apos;t here, call{" "}
          <a href={COMPANY_PHONE_TEL} className="text-brand-blue font-semibold hover:underline">
            {COMPANY_PHONE_DISPLAY}
          </a>
          .
        </p>
      </div>

      <FAQSection faqs={PRICING_FAQS} heading="Pricing & Fees" />
      <FAQSection faqs={SCHEDULING_FAQS} heading="Scheduling & Service Area" />
      <FAQSection faqs={WARRANTY_FAQS} heading="Warranty" />
      <FAQSection faqs={BRANDS_FAQS} heading="Brands" />
      <FAQSection faqs={GAS_FAQS} heading="Gas Appliances" />

      {/* Internal links */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/services/" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-slate hover:border-brand-blue transition-colors">
              All Services
            </Link>
            <Link href="/brands/" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-slate hover:border-brand-blue transition-colors">
              Brands We Service
            </Link>
            <Link href="/about/" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-slate hover:border-brand-blue transition-colors">
              About Us
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
            Ready to schedule your repair?
          </h2>
          <p className="text-white/70 mb-6">
            {DIAGNOSTIC_FEE} service call fee waived if we fix it. {WARRANTY_DAYS}-day parts &amp; labor warranty.
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
