import type { Metadata } from "next"
import Link from "next/link"
import { Phone, CheckCircle2 } from "lucide-react"
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
  COMPANY_EMAIL,
} from "@/data/constants"

export const metadata: Metadata = {
  title: "About WNDW Appliance Repair — San Diego",
  description:
    "About WNDW Appliance Repair — in-home appliance repair across San Diego County. $85 diagnostic fee waived if we fix it. 90-day warranty. 7 days a week. Call (858) 264-3138.",
  alternates: { canonical: `${COMPANY_WEBSITE}/about/` },
  openGraph: {
    title: `About WNDW Appliance Repair — San Diego`,
    description:
      "In-home appliance repair across San Diego County. $85 diagnostic fee waived if we fix it. 90-day warranty on every repair.",
    url: `${COMPANY_WEBSITE}/about/`,
  },
}

const ABOUT_FAQS = [
  {
    question: "Is WNDW Appliance Repair licensed and insured?",
    answer: `Yes. ${COMPANY_NAME} operates as a licensed appliance repair service in San Diego County. Our technician carries liability insurance and is qualified to service all major home appliances.`,
  },
  {
    question: "How do I know what the repair will cost before agreeing?",
    answer: `Your technician diagnoses the appliance, identifies the failed component, and provides an upfront, itemized quote — before any repair work begins. You approve or decline. No work proceeds without your explicit approval.`,
  },
  {
    question: "What is your service area?",
    answer: `We serve all of San Diego County — including San Diego, Chula Vista, La Mesa, El Cajon, Santee, La Jolla, Del Mar, Poway, Rancho Bernardo, National City, Oceanside, Carlsbad, Escondido, Encinitas, San Marcos, and more. 20 cities in total.`,
  },
  {
    question: "What payment methods do you accept?",
    answer: `Cash, check, Zelle, and Venmo are accepted with no processing fee. Credit and debit cards are accepted with a 3.5% processing fee, which is disclosed before payment is taken.`,
  },
]

const DIFFERENTIATORS = [
  `${DIAGNOSTIC_FEE} diagnostic fee — waived completely if we repair it`,
  `${WARRANTY_DAYS}-day parts and labor warranty on every completed repair`,
  "Available 7 days a week — Mon–Sat 7:00 AM–11:00 PM, Sun 8:00 AM–10:00 PM",
  "All major brands — Samsung, LG, Whirlpool, GE, KitchenAid, Bosch, Sub-Zero, Thermador, and more",
  "In-home service — we come to you, no hauling appliances to a shop",
  "Upfront quote before any work begins — no surprises on your invoice",
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
      <section className="bg-brand-navy text-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            About {COMPANY_NAME}
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            In-home appliance repair across San Diego County. {DIAGNOSTIC_FEE} diagnostic fee waived if we fix it. {WARRANTY_DAYS}-day warranty on every repair.
          </p>
        </div>
      </section>

      <TrustBar />

      {/* Company overview */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">
            San Diego&apos;s In-Home Appliance Repair Service
          </h2>
          <div className="prose prose-gray text-sm leading-relaxed space-y-4 text-gray-700">
            <p>
              {COMPANY_NAME} provides in-home appliance repair across San Diego County. When a household appliance breaks down, we send our technician directly to your home — no hauling appliances to a shop, no waiting weeks for a service window.
            </p>
            <p>
              Every service call begins with a flat {DIAGNOSTIC_FEE} diagnostic fee. Our technician inspects the appliance, identifies the failed component, and provides an upfront quote before any repair work begins. If you proceed with the repair, the diagnostic fee is waived in full — you pay only for parts and labor. If you decide not to repair, you owe {DIAGNOSTIC_FEE} and nothing more.
            </p>
            <p>
              Every completed repair is backed by a {WARRANTY_DAYS}-day parts and labor warranty. If the same problem returns within {WARRANTY_DAYS} days, our technician returns and resolves it at no additional charge.
            </p>
            <p>
              We service all major appliance brands — Samsung, LG, Whirlpool, GE, KitchenAid, Kenmore, Bosch, Electrolux, Miele, Sub-Zero, Thermador, Speed Queen, and more. No brand restrictions. One call, one technician.
            </p>
            <p>
              We are available {HOURS_WEEKDAY} and {HOURS_SUNDAY} — seven days a week with no evening or weekend surcharge. We cover all 20 cities across San Diego County.
            </p>
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="py-10 bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-8">
            Why San Diego Homeowners Call WNDW
          </h2>
          <ul className="space-y-4">
            {DIFFERENTIATORS.map((d) => (
              <li key={d} className="flex items-start gap-3">
                <CheckCircle2
                  className="h-5 w-5 text-brand-red shrink-0 mt-0.5"
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
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Why I Started WNDW</h2>
          <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
            <p>
              My name is Mikita Tsmyh. Before I started WNDW, I spent years as a professional cleaner and Airbnb host managing multiple units across San Diego. I know what it feels like when an appliance breaks at the worst possible moment — right before a turnover, in the middle of a clean, with guests arriving in two hours.
            </p>
            <p>
              Every time a washer stopped mid-cycle or a refrigerator quit overnight, I had the same problem: finding a same-day technician was nearly impossible, and when I did find one, I had no idea what they were going to charge until after the work was done. The repair would drag on, the clean couldn&apos;t finish, the unit couldn&apos;t be set up, and guests were at risk. It derailed the entire day — every time.
            </p>
            <p>
              So I became a technician myself. And once I started doing repairs, I discovered something that surprised me: most appliance problems are not complicated. A refrigerator that stops cooling usually has dirty condenser coils or a failed fan motor. A washer that won&apos;t drain has a clogged pump filter or a worn belt. The parts are affordable. The labor is fast. A good technician can turn what feels like a catastrophe into a 45-minute repair.
            </p>
            <p>
              What I found was that the system was broken — not the appliances. Homeowners were paying more than they should, waiting longer than they had to, and getting less transparency than they deserved. I built WNDW around one promise: when your appliance breaks, you don&apos;t have to worry or hustle. One call, same day, fair price, done.
            </p>
            <p>
              I still personally handle every service call. When you call WNDW, I am the person who will be at your door. I will tell you exactly what is wrong, exactly what it costs to fix, and exactly what to expect — before I touch anything.
            </p>
          </div>
        </div>
      </section>

      {/* Contact callout */}
      <section className="py-10 bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-brand-navy mb-4">Get in Touch</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            The fastest way to schedule a repair is to call. For non-urgent inquiries, email us and we will respond within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={COMPANY_PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-red px-6 py-3 font-extrabold text-white hover:bg-brand-red-dark transition-colors"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {COMPANY_PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${COMPANY_EMAIL}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-brand-navy hover:border-brand-red hover:text-brand-red transition-colors"
            >
              {COMPANY_EMAIL}
            </a>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={ABOUT_FAQS}
        heading="About WNDW Appliance Repair — FAQ"
      />

      {/* Internal links */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/services/" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-navy hover:border-brand-red transition-colors">
              All Services
            </Link>
            <Link href="/brands/" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-navy hover:border-brand-red transition-colors">
              Brands We Service
            </Link>
            <Link href="/faq/" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-navy hover:border-brand-red transition-colors">
              Full FAQ
            </Link>
            <Link href="/vacation-rental-appliance-repair/" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-navy hover:border-brand-red transition-colors">
              Vacation Rental Repairs
            </Link>
            <Link href="/property-management-appliance-repair/" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-navy hover:border-brand-red transition-colors">
              Property Management
            </Link>
            <Link href="/specials/" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-navy hover:border-brand-red transition-colors">
              Current Specials
            </Link>
            <Link href="/contact/" className="rounded-lg border border-brand-red bg-red-50 px-4 py-2 text-sm font-medium text-brand-red hover:bg-brand-red hover:text-white transition-colors">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-navy py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold mb-3">
            Ready to schedule your appliance repair?
          </h2>
          <p className="text-white/70 mb-6">
            {DIAGNOSTIC_FEE} diagnostic fee waived if we fix it. {WARRANTY_DAYS}-day parts &amp; labor warranty.
          </p>
          <a
            href={COMPANY_PHONE_TEL}
            className="inline-flex items-center gap-3 rounded-lg bg-brand-red px-8 py-4 text-xl font-extrabold text-white hover:bg-brand-red-dark transition-colors shadow-lg"
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
