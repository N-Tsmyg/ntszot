import type { Metadata } from "next"
import Link from "next/link"
import Hero from "@/components/Hero"
import TrustBar from "@/components/TrustBar"
import ServiceGrid from "@/components/ServiceGrid"
import BrandGrid from "@/components/BrandGrid"
import DifferentiatorsSection from "@/components/DifferentiatorsSection"
import ReviewsSection from "@/components/ReviewsSection"
import CityGrid from "@/components/CityGrid"
import FAQSection from "@/components/FAQSection"
import MidPageCTA from "@/components/MidPageCTA"
import RepairProcess from "@/components/RepairProcess"
import BreadcrumbSchema from "@/components/BreadcrumbSchema"
import {
  COMPANY_NAME,
  COMPANY_PHONE_DISPLAY,
  COMPANY_PHONE_TEL,
  DIAGNOSTIC_FEE,
  WARRANTY_DAYS,
  COMPANY_WEBSITE,
} from "@/data/constants"
import { Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Appliance Repair San Diego",
  description:
    "San Diego appliance repair — $80 service call fee waived if we fix it. 60-day warranty on parts & labor. All brands. 6 days a week. Call (619) 488-4477.",
  alternates: { canonical: `${COMPANY_WEBSITE}/` },
  openGraph: {
    title: `Appliance Repair San Diego | ${COMPANY_NAME}`,
    description:
      "In-home appliance repair across San Diego County. $80 service call fee waived if we fix it. 60-day warranty. All brands.",
    url: `${COMPANY_WEBSITE}/`,
  },
}

const HOME_FAQS = [
  {
    question: "How much does appliance repair cost in San Diego?",
    answer: `Most appliance repairs in San Diego cost $300–$400, including parts and labor. That covers washers, dryers, dishwashers, ovens, microwaves, range hoods, refrigerators, and freezers. ${COMPANY_NAME} charges an $80 service call fee — waived completely when you proceed with the repair.`,
  },
  {
    question: "Do you offer same-day appliance repair in San Diego?",
    answer:
      "In most cases, yes. Our technician arrives within a 3-hour window and completes the repair same visit when parts are available on the service vehicle. If a part needs to be ordered, it typically arrives within 1–3 business days.",
  },
  {
    question: "What appliance brands do you service?",
    answer:
      "We service all major appliance brands — Samsung, LG, Whirlpool, GE, KitchenAid, Kenmore, Bosch, Miele, Sub-Zero, Thermador, Electrolux, Speed Queen, and more. No brand runaround. One call, one technician.",
  },
  {
    question: "What is the $80 service call fee?",
    answer: `The $80 fee covers your technician's visit and a full diagnosis of the reported problem. If you approve the repair, the $80 is waived — you only pay for parts and labor. If you decide not to repair, you owe the $80 and nothing more.`,
  },
  {
    question: "What areas of San Diego do you serve?",
    answer:
      "We serve all of San Diego County — including San Diego, Chula Vista, La Mesa, El Cajon, La Jolla, Del Mar, Poway, Encinitas, Escondido, Carlsbad, Oceanside, and 10 more cities. Available Mon–Fri 9:00 AM–6:00 PM, Sat 10:00 AM–5:00 PM.",
  },
]

export default function HomePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }]} />

      <Hero
        headline={`Appliance Repair in San Diego — We Come to You`}
        subheadline={`In-home repair across San Diego County. ${DIAGNOSTIC_FEE} diagnostic fee waived if we fix it. 60-day warranty on every repair.`}
        urgencyNote="Mon–Fri 9:00 AM–6:00 PM · Sat 10:00 AM–5:00 PM · Sun closed · All major brands"
      />

      <TrustBar />

      <ServiceGrid />

      <RepairProcess />

      <MidPageCTA
        heading="Appliance broken? We can be there today."
        subtext={`${DIAGNOSTIC_FEE} diagnostic fee — waived if we repair it. 60-day warranty on every repair.`}
      />

      <BrandGrid />

      <DifferentiatorsSection />

      <ReviewsSection />

      <CityGrid />

      <FAQSection faqs={HOME_FAQS} heading="Appliance Repair FAQ — San Diego" />

      {/* Quick links hub */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/faq/" className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-brand-slate hover:border-brand-blue hover:text-brand-blue transition-colors">
              Full FAQ
            </Link>
            <Link href="/specials/" className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-brand-slate hover:border-brand-blue hover:text-brand-blue transition-colors">
              Current Specials
            </Link>
            <Link href="/emergency-appliance-repair/" className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-brand-slate hover:border-brand-blue hover:text-brand-blue transition-colors">
              Emergency Repair
            </Link>
            <Link href="/about/" className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-brand-slate hover:border-brand-blue hover:text-brand-blue transition-colors">
              About NTSZOT
            </Link>
            <Link href="/locations/" className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-brand-slate hover:border-brand-blue hover:text-brand-blue transition-colors">
              All Service Areas
            </Link>
            <Link href="/brands/" className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-brand-slate hover:border-brand-blue hover:text-brand-blue transition-colors">
              All Brands We Repair
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
