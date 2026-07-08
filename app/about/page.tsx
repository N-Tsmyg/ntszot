import type { Metadata } from "next"
import Link from "next/link"
import { Phone, CheckCircle2 } from "lucide-react"
import FAQSection from "@/components/FAQSection"
import BreadcrumbSchema from "@/components/BreadcrumbSchema"
import TrustBar from "@/components/TrustBar"
import CertificatesSection from "@/components/CertificatesSection"
import {
  COMPANY_NAME,
  COMPANY_PHONE_DISPLAY,
  COMPANY_PHONE_TEL,
  COMPANY_WEBSITE,
  DIAGNOSTIC_FEE,
  WARRANTY_DAYS,
  HOURS_WEEKDAY,
  HOURS_SATURDAY,
  COMPANY_EMAIL,
} from "@/data/constants"

export const metadata: Metadata = {
  title: "About NTSZOT Appliance Repair — San Diego",
  description:
    "About NTSZOT Appliance Repair — 15 factory-certified technicians serving San Diego County. $80 service call includes diagnostic. 60-day warranty. Call (619) 488-4477.",
  alternates: { canonical: `${COMPANY_WEBSITE}/about/` },
  openGraph: {
    title: `About NTSZOT Appliance Repair — San Diego`,
    description:
      "15 factory-certified technicians serving San Diego County. $80 service call includes diagnostic. 60-day warranty on every repair.",
    url: `${COMPANY_WEBSITE}/about/`,
  },
}

const ABOUT_FAQS = [
  {
    question: "Is NTSZOT Appliance Repair licensed and insured?",
    answer: `Yes. ${COMPANY_NAME} is a fully licensed appliance repair company operating in San Diego County. All of our technicians carry liability insurance and hold factory certifications from major appliance brands.`,
  },
  {
    question: "How do I know what the repair will cost before agreeing?",
    answer: `Your technician diagnoses the appliance, identifies the failed component, and provides a clear, itemized quote — before any repair work begins. You approve or decline. Nothing happens without your explicit go-ahead.`,
  },
  {
    question: "What is your service area?",
    answer: `We serve all of San Diego County — including San Diego, Chula Vista, La Mesa, El Cajon, Santee, La Jolla, Del Mar, Poway, Rancho Bernardo, National City, Oceanside, Carlsbad, Escondido, Encinitas, San Marcos, and more.`,
  },
  {
    question: "What payment methods do you accept?",
    answer: `Cash, check, Zelle, and Venmo are accepted with no processing fee. Credit and debit cards are accepted with a 3.5% processing fee, which is disclosed before payment is taken.`,
  },
  {
    question: "Do you service Sacramento and Portland?",
    answer: `Not yet — but we are expanding. NTSZOT currently serves San Diego County. Sacramento and Portland locations are planned for the future. Stay tuned.`,
  },
]

const WHY_NTSZOT = [
  `${DIAGNOSTIC_FEE} service call includes diagnostic and repair estimate`,
  `${WARRANTY_DAYS}-day parts and labor warranty on every completed repair`,
  `Available Mon–Fri 9AM–6PM and Sat 10AM–5PM`,
  "15 factory-certified technicians — trained and certified by the brands they repair",
  "All major appliance brands — Samsung, LG, Whirlpool, GE, KitchenAid, Bosch, and more",
  "In-home service — we come to you, no hauling appliances to a shop",
  "Upfront quote before any work begins — no surprise charges",
  "Cash, check, Zelle, Venmo accepted (no fee); card with 3.5% fee, disclosed upfront",
]

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about/" },
        ]}
      />

      {/* Header */}
      <section className="bg-brand-slate text-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            About {COMPANY_NAME}
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            15 factory-certified technicians serving all of San Diego County. {DIAGNOSTIC_FEE} service call. {WARRANTY_DAYS}-day warranty on every repair.
          </p>
        </div>
      </section>

      <TrustBar />

      {/* Company overview */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-slate mb-6">
            San Diego&apos;s Factory-Certified Appliance Repair Team
          </h2>
          <div className="prose prose-gray text-sm leading-relaxed space-y-4 text-gray-700">
            <p>
              {COMPANY_NAME} provides in-home appliance repair across San Diego County. When a household appliance breaks, we send a factory-certified technician directly to your home — no hauling to a shop, no long waits, no uncertainty.
            </p>
            <p>
              Every service call begins with a flat {DIAGNOSTIC_FEE} fee that covers the diagnostic and a full repair estimate. Your technician arrives, inspects the appliance, identifies the problem, and tells you exactly what it will cost to fix — before touching anything. If you proceed with the repair, the {DIAGNOSTIC_FEE} fee is applied toward your total. If you decline, you owe {DIAGNOSTIC_FEE} and nothing more.
            </p>
            <p>
              Every completed repair is backed by a {WARRANTY_DAYS}-day parts and labor warranty. If the same problem returns within {WARRANTY_DAYS} days, your technician comes back and resolves it at no additional charge.
            </p>
            <p>
              Our team of 15 factory-certified technicians services all major appliance brands — Samsung, LG, Whirlpool, GE, KitchenAid, Kenmore, Bosch, Electrolux, Miele, Sub-Zero, Thermador, and more. One call covers everything.
            </p>
            <p>
              We are available {HOURS_WEEKDAY} and {HOURS_SATURDAY}, and we serve 20+ cities across San Diego County with no evening or Saturday surcharge.
            </p>
          </div>
        </div>
      </section>

      {/* Why NTSZOT */}
      <section className="py-10 bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-slate mb-8">
            Why San Diego Homeowners Choose NTSZOT
          </h2>
          <ul className="space-y-4">
            {WHY_NTSZOT.map((d) => (
              <li key={d} className="flex items-start gap-3">
                <CheckCircle2
                  className="h-5 w-5 text-brand-blue shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-gray-700 text-sm leading-relaxed">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Founder story */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-slate mb-6">How NTSZOT Started</h2>
          <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
            <p>
              My name is Andrei Zotolokin. I launched my appliance repair career in Las Vegas in 2022, where I earned factory certifications from Samsung, LG, Whirlpool, GE, and several other major appliance brands. Certification wasn&apos;t just a credential — it meant learning directly from the manufacturers how their products fail, what causes those failures, and how to fix them correctly the first time.
            </p>
            <p>
              After relocating to San Diego with my family, I noticed something that surprised me: a city this size, with this many homeowners and renters, had a real shortage of professional, certified appliance repair. Too many technicians were either unavailable, uncertified, or gave customers surprise bills after the work was done. I knew I could do better.
            </p>
            <p>
              I started NTSZOT with a simple goal: give San Diego homeowners a repair service they could trust — certified technicians, honest pricing, and a clear warranty on every job. We&apos;ve grown from a one-person operation to a team of 15 factory-certified technicians, all serving the same San Diego community we live in.
            </p>
            <p>
              When you call NTSZOT, your technician will arrive on time, tell you exactly what is wrong, give you the price before starting, and back the repair with a {WARRANTY_DAYS}-day warranty. No runaround. No surprises. Just the repair done right.
            </p>
            <p>
              We currently serve all of San Diego County. Expansion to Sacramento and Portland is planned for the future — but San Diego is and always will be home.
            </p>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <CertificatesSection />

      {/* Contact callout */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-brand-slate mb-4">Get in Touch</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            The fastest way to schedule a repair is to call. For non-urgent inquiries, email us and we will respond within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={COMPANY_PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-blue px-6 py-3 font-extrabold text-white hover:bg-brand-blue-dark transition-colors"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {COMPANY_PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${COMPANY_EMAIL}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-brand-slate hover:border-brand-blue hover:text-brand-blue transition-colors"
            >
              {COMPANY_EMAIL}
            </a>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={ABOUT_FAQS}
        heading="About NTSZOT Appliance Repair — FAQ"
      />

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
            <Link href="/faq/" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-slate hover:border-brand-blue transition-colors">
              Full FAQ
            </Link>
            <Link href="/vacation-rental-appliance-repair/" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-slate hover:border-brand-blue transition-colors">
              Vacation Rental Repairs
            </Link>
            <Link href="/property-management-appliance-repair/" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-slate hover:border-brand-blue transition-colors">
              Property Management
            </Link>
            <Link href="/contact/" className="rounded-lg border border-brand-blue bg-blue-50 px-4 py-2 text-sm font-medium text-brand-blue hover:bg-brand-blue hover:text-white transition-colors">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-slate py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold mb-3">
            Ready to schedule your appliance repair?
          </h2>
          <p className="text-white/70 mb-6">
            {DIAGNOSTIC_FEE} service call includes diagnostic. {WARRANTY_DAYS}-day parts &amp; labor warranty.
          </p>
          <a
            href={COMPANY_PHONE_TEL}
            className="inline-flex items-center gap-3 rounded-lg bg-brand-blue px-8 py-4 text-xl font-extrabold text-white hover:bg-brand-blue-dark transition-colors shadow-lg"
          >
            <Phone className="h-6 w-6" aria-hidden="true" />
            {COMPANY_PHONE_DISPLAY}
          </a>
          <p className="mt-4 text-sm text-white/60">
            {HOURS_WEEKDAY} · {HOURS_SATURDAY} · Sun closed
          </p>
        </div>
      </section>
    </>
  )
}
