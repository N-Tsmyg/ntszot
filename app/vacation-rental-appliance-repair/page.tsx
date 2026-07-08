import type { Metadata } from "next"
import Link from "next/link"
import { Phone, CheckCircle2, Star } from "lucide-react"
import TrustBar from "@/components/TrustBar"
import FAQSection from "@/components/FAQSection"
import BreadcrumbSchema from "@/components/BreadcrumbSchema"
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
  title: "Vacation Rental Appliance Repair San Diego | Airbnb & VRBO",
  description:
    "Appliance repair for vacation rentals in San Diego — Airbnb, VRBO, and short-term rentals. Same-day service 7 days a week. $85 diagnostic fee waived if we fix it. 90-day warranty. Call (858) 264-3138.",
  alternates: { canonical: `${COMPANY_WEBSITE}/vacation-rental-appliance-repair/` },
  openGraph: {
    title: "Vacation Rental Appliance Repair San Diego | Airbnb & VRBO",
    description:
      "Fast appliance repair for San Diego vacation rentals. Protect your guest reviews with same-day service, 7-day availability, and a 90-day warranty.",
    url: `${COMPANY_WEBSITE}/vacation-rental-appliance-repair/`,
  },
}

const VR_FAQS = [
  {
    question: "Can you repair an appliance between two guest bookings?",
    answer: `Yes. We are available ${HOURS_WEEKDAY} and ${HOURS_SUNDAY} — 7 days a week. If you have a 24-48 hour turnover window between guests, call us immediately after the departure and we will try to get our technician there before the next check-in. Same-day service is available in most cases.`,
  },
  {
    question: "Do you offer same-day service for vacation rentals?",
    answer: `In most cases, yes. We aim for a 3-hour arrival window on same-day calls. We do not charge a surcharge for weekend or evening service — the rate is the same flat ${DIAGNOSTIC_FEE} diagnostic fee (waived if we repair it) regardless of when you call.`,
  },
  {
    question: "How does your warranty protect my vacation rental?",
    answer: `Every repair includes a ${WARRANTY_DAYS}-day parts and labor warranty. If the same issue recurs within ${WARRANTY_DAYS} days of service, our technician returns at no additional charge. This directly protects your guest reviews — a fixed appliance that breaks again within 90 days is our problem, not yours.`,
  },
  {
    question: "Can you help me set up a maintenance plan for my rental?",
    answer: `Yes. The Annual Appliance Maintenance Plan is $350/year plus parts, covering two scheduled in-home visits. Each visit includes refrigerator condenser coil cleaning, dryer lint duct inspection, dishwasher filter cleaning, and a full appliance check. For vacation rentals, this is ideally scheduled before peak booking season. Contact us at ${COMPANY_EMAIL}.`,
  },
]

const VR_BENEFITS = [
  {
    heading: "Same-day service — protect your next check-in",
    detail:
      "A broken appliance between bookings can force a cancellation or trigger a 1-star review. We aim for same-day arrival in most cases. 7 days a week — no waiting for Monday.",
  },
  {
    heading: `${WARRANTY_DAYS}-day warranty — protect your guest reviews`,
    detail:
      `Every repair is backed by a ${WARRANTY_DAYS}-day parts and labor warranty. A fixed appliance that fails again within ${WARRANTY_DAYS} days is our responsibility. No guest complaint about a broken appliance within that window becomes your maintenance cost.`,
  },
  {
    heading: "No surcharge for weekend or evening service",
    detail: `${HOURS_WEEKDAY} and ${HOURS_SUNDAY}. Guests check in on Friday afternoons and Saturday mornings — that is when appliances get reported broken. Our rates do not change based on the day.`,
  },
  {
    heading: "Upfront quote before any work begins",
    detail:
      "Your technician diagnoses the issue and provides a firm quote before proceeding. No surprise invoices. You approve by phone, text, or email — no need to be at the property.",
  },
  {
    heading: "Annual Maintenance Plan — prevent failures before they happen",
    detail:
      "Two scheduled visits per year, $350 plus parts. Cleaning and inspection of refrigerators, dryers, dishwashers, and all connected appliances. Ideal before summer peak or holiday rental season.",
  },
  {
    heading: "All major brands — one contact for everything",
    detail:
      "Samsung, LG, Whirlpool, GE, KitchenAid, Bosch, and more. Your rental may have a mix of brands from different eras. One call covers all of them.",
  },
]

export default function VacationRentalPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Vacation Rental Appliance Repair", href: "/vacation-rental-appliance-repair/" },
        ]}
      />

      {/* Hero */}
      <section className="bg-brand-navy text-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-medium text-white/80 mb-6">
            <Star className="h-4 w-4 text-amber-400" aria-hidden="true" />
            For Airbnb, VRBO &amp; Short-Term Rental Hosts in San Diego
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Vacation Rental Appliance Repair in San Diego
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-6 max-w-2xl mx-auto">
            Same-day appliance repair for Airbnb and VRBO hosts across San Diego County. Protect your guest reviews. {DIAGNOSTIC_FEE} diagnostic fee waived if we fix it. {WARRANTY_DAYS}-day warranty on every repair.
          </p>
          <a
            href={COMPANY_PHONE_TEL}
            className="inline-flex items-center gap-3 rounded-lg bg-brand-red px-8 py-4 text-xl font-extrabold text-white hover:bg-brand-red-dark transition-colors shadow-lg"
          >
            <Phone className="h-6 w-6" aria-hidden="true" />
            {COMPANY_PHONE_DISPLAY}
          </a>
          <p className="mt-4 text-sm text-white/50">
            {HOURS_WEEKDAY} · {HOURS_SUNDAY} · No weekend surcharge
          </p>
        </div>
      </section>

      <TrustBar />

      {/* Quick Answer */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="quick-answer rounded-xl border-l-4 border-brand-red bg-red-50 p-6">
            <p className="font-semibold text-brand-navy leading-relaxed">
              A broken appliance in a San Diego vacation rental can trigger a guest complaint, a bad review, or a booking cancellation. WNDW Appliance Repair offers same-day service 7 days a week — including weekends and evenings when guest issues are most likely to surface. Every repair carries a {WARRANTY_DAYS}-day warranty so a fix that fails within that window is our responsibility, not another service call for you.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-8">
            How WNDW Protects Your Vacation Rental&apos;s Reviews
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {VR_BENEFITS.map((benefit) => (
              <div key={benefit.heading} className="flex gap-4">
                <CheckCircle2
                  className="h-5 w-5 text-brand-red shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-semibold text-brand-navy text-sm mb-1">{benefit.heading}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{benefit.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The review risk section */}
      <section className="py-10 bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-4 text-center">
            The Real Cost of a Broken Appliance in a Vacation Rental
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            A broken refrigerator or washer in a vacation rental is not just an inconvenience — it is a review risk. Guests who paid a nightly rate expect every appliance to work. A single 1-star mention about a broken appliance can affect future booking conversion for months.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Speed is the difference between a guest who never mentions the issue and one who writes about it. A same-day repair completed between check-out and check-in often means the next guest never knows a problem existed.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            The Annual Maintenance Plan ($350/year plus parts) takes a proactive approach: two scheduled inspections per year that identify worn parts before they fail mid-booking. For hosts with high occupancy rates, this is the lowest-cost appliance strategy per review protected.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-6 text-center">
            Repair Pricing for San Diego Vacation Rentals
          </h2>
          <div className="space-y-3">
            <div className="rounded-lg border border-gray-200 p-5 flex justify-between items-center">
              <div>
                <p className="font-semibold text-brand-navy text-sm">Washer, dryer, dishwasher, oven, microwave</p>
              </div>
              <p className="font-bold text-brand-red text-sm whitespace-nowrap">$250–$350</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5 flex justify-between items-center">
              <div>
                <p className="font-semibold text-brand-navy text-sm">Refrigerator, freezer, ice maker</p>
              </div>
              <p className="font-bold text-brand-red text-sm whitespace-nowrap">$350–$900</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5 flex justify-between items-center">
              <div>
                <p className="font-semibold text-brand-navy text-sm">Appliance installation</p>
              </div>
              <p className="font-bold text-brand-red text-sm whitespace-nowrap">$220–$350</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-5 flex justify-between items-center">
              <div>
                <p className="font-semibold text-brand-navy text-sm">Annual Maintenance Plan</p>
                <p className="text-xs text-gray-500 mt-0.5">Two visits · parts additional</p>
              </div>
              <p className="font-bold text-brand-red text-sm whitespace-nowrap">$350/year</p>
            </div>
            <div className="rounded-lg bg-red-50 border border-brand-red/20 p-5">
              <p className="font-semibold text-brand-navy text-sm mb-1">
                Diagnostic fee: {DIAGNOSTIC_FEE} — waived if we repair it
              </p>
              <p className="text-xs text-gray-600">
                {DIAGNOSTIC_FEE} per service visit. Waived in full if you proceed with the repair. No emergency or weekend surcharge.
              </p>
            </div>
            <p className="text-xs text-gray-400">
              Card accepted with 3.5% fee. No fee on cash, check, Zelle, or Venmo. Invoices available on request.
            </p>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={VR_FAQS}
        heading="Vacation Rental Appliance Repair — FAQ"
      />

      {/* Internal links */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-brand-navy mb-4 uppercase tracking-wide">Related Pages</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/property-management-appliance-repair/" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-navy hover:border-brand-red transition-colors">
              Property Management Repair
            </Link>
            <Link href="/services/annual-maintenance-plan/" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-navy hover:border-brand-red transition-colors">
              Annual Maintenance Plan
            </Link>
            <Link href="/emergency-appliance-repair/" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-navy hover:border-brand-red transition-colors">
              Emergency Repair
            </Link>
            <Link href="/services/" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-navy hover:border-brand-red transition-colors">
              All Services
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
            Appliance broken at your rental? Call now.
          </h2>
          <p className="text-white/70 mb-6">
            Same-day service 7 days a week. {DIAGNOSTIC_FEE} diagnostic fee waived if we fix it.
            {WARRANTY_DAYS}-day warranty — protect your guest reviews.
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
