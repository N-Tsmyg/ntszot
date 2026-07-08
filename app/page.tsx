import type { Metadata } from "next"
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
    "San Diego appliance repair — $85 diagnostic fee waived if we fix it. 90-day warranty on parts & labor. All brands. 7 days a week. Call (858) 264-3138.",
  alternates: { canonical: `${COMPANY_WEBSITE}/` },
  openGraph: {
    title: `Appliance Repair San Diego | ${COMPANY_NAME}`,
    description:
      "In-home appliance repair across San Diego County. $85 diagnostic fee waived if we fix it. 90-day warranty. All brands.",
    url: `${COMPANY_WEBSITE}/`,
  },
}

const HOME_FAQS = [
  {
    question: "How much does appliance repair cost in San Diego?",
    answer: `Most appliance repairs in San Diego cost $250–$350, including parts and labor. Refrigerator, freezer, and ice maker repairs typically run $350–$900 depending on the part and brand. ${COMPANY_NAME} charges an $85 diagnostic fee — waived completely when you proceed with the repair.`,
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
    question: "What is the $85 diagnostic fee?",
    answer: `The $85 fee covers your technician's visit and a full diagnosis of the reported problem. If you approve the repair, the $85 is waived — you only pay for parts and labor. If you decide not to repair, you owe the $85 and nothing more.`,
  },
  {
    question: "What areas of San Diego do you serve?",
    answer:
      "We serve all of San Diego County — including San Diego, Chula Vista, La Mesa, El Cajon, La Jolla, Del Mar, Poway, Encinitas, Escondido, Carlsbad, Oceanside, and 10 more cities. Available Mon–Sat 7:00 AM–11:00 PM and Sun 8:00 AM–10:00 PM.",
  },
]

export default function HomePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }]} />

      <Hero
        headline={`Appliance Repair in San Diego — We Come to You`}
        subheadline={`In-home repair across San Diego County. ${DIAGNOSTIC_FEE} diagnostic fee waived if we fix it. 90-day warranty on every repair.`}
        urgencyNote="Mon–Sat 7:00 AM–11:00 PM · Sun 8:00 AM–10:00 PM · All major brands"
      />

      <TrustBar />

      <ServiceGrid />

      <RepairProcess />

      <MidPageCTA
        heading="Appliance broken? We can be there today."
        subtext={`${DIAGNOSTIC_FEE} diagnostic fee — waived if we repair it. 90-day warranty on every repair.`}
      />

      <BrandGrid />

      <DifferentiatorsSection />

      <ReviewsSection />

      <CityGrid />

      <FAQSection faqs={HOME_FAQS} heading="Appliance Repair FAQ — San Diego" />

      {/* Final CTA */}
      <section className="bg-brand-navy py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold mb-3">
            Ready to schedule your repair?
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
