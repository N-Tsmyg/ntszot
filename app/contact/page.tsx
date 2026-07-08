import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, Clock, MapPin } from "lucide-react"
import FAQSection from "@/components/FAQSection"
import BreadcrumbSchema from "@/components/BreadcrumbSchema"
import GMBEmbed from "@/components/GMBEmbed"
import TrustBar from "@/components/TrustBar"
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
  title: "Contact NTSZOT Appliance Repair — San Diego",
  description:
    "Contact NTSZOT Appliance Repair in San Diego. Call (619) 488-4477 to schedule. $80 service call fee waived if we fix it. 60-day warranty. Available Mon–Fri 9AM–6PM, Sat 10AM–5PM, Sun closed.",
  alternates: { canonical: `${COMPANY_WEBSITE}/contact/` },
  openGraph: {
    title: "Contact NTSZOT Appliance Repair — San Diego",
    description: `Call ${COMPANY_PHONE_DISPLAY} to schedule appliance repair in San Diego. 6 days a week.`,
    url: `${COMPANY_WEBSITE}/contact/`,
  },
}

const CONTACT_FAQS = [
  {
    question: "What is the fastest way to schedule a repair?",
    answer: `Call us at ${COMPANY_PHONE_DISPLAY}. We can confirm availability and book your appointment on the same call. We are available ${HOURS_WEEKDAY} and ${HOURS_SATURDAY}.`,
  },
  {
    question: "What happens when I call?",
    answer: `You describe the appliance issue and your location. We confirm availability and schedule a service window. Our technician arrives, diagnoses the problem, and provides an upfront quote before any work begins. The ${DIAGNOSTIC_FEE} service call fee is waived if you proceed with the repair.`,
  },
  {
    question: "Do you offer a callback form or online booking?",
    answer: `You can submit the callback form below and we will contact you within one business day. For faster scheduling — especially for urgent or same-day repairs — a direct call is always quicker.`,
  },
  {
    question: "What areas of San Diego do you serve?",
    answer: `We cover all of San Diego County — including San Diego, Chula Vista, La Mesa, El Cajon, Santee, La Jolla, Del Mar, Poway, Rancho Bernardo, National City, Ramona, Fallbrook, Oceanside, San Marcos, Encinitas, Escondido, Valley Center, Lemon Grove, Carlsbad, and Vista.`,
  },
]

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact/" },
        ]}
      />

      {/* Header */}
      <section className="bg-brand-slate text-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Contact {COMPANY_NAME}
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Call to schedule — fastest way to get a same-day appointment.
          </p>
          <a
            href={COMPANY_PHONE_TEL}
            className="inline-flex items-center gap-3 rounded-lg bg-brand-blue px-8 py-4 text-xl font-extrabold text-white hover:bg-brand-blue-dark transition-colors shadow-lg"
          >
            <Phone className="h-6 w-6" aria-hidden="true" />
            {COMPANY_PHONE_DISPLAY}
          </a>
          <p className="mt-4 text-sm text-white/50">
            {HOURS_WEEKDAY} · {HOURS_SATURDAY} · Sun closed
          </p>
        </div>
      </section>

      <TrustBar />

      {/* Contact details + form */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">

            {/* Left: contact info */}
            <div>
              <h2 className="text-2xl font-bold text-brand-slate mb-6">Contact Information</h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-brand-slate text-sm">Phone</p>
                    <a
                      href={COMPANY_PHONE_TEL}
                      className="text-brand-blue font-bold text-lg hover:underline"
                    >
                      {COMPANY_PHONE_DISPLAY}
                    </a>
                    <p className="text-xs text-gray-500 mt-0.5">Fastest way to schedule</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-brand-slate text-sm">Email</p>
                    <a
                      href={`mailto:${COMPANY_EMAIL}`}
                      className="text-brand-blue hover:underline text-sm"
                    >
                      {COMPANY_EMAIL}
                    </a>
                    <p className="text-xs text-gray-500 mt-0.5">Response within 1 business day</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-brand-slate text-sm">Hours</p>
                    <p className="text-sm text-gray-700">{HOURS_WEEKDAY}</p>
                    <p className="text-sm text-gray-700">{HOURS_SATURDAY}</p>
                    <p className="text-sm text-gray-700">Sun closed</p>
                    <p className="text-xs text-gray-500 mt-0.5">No surcharge for evenings or weekends</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-brand-slate text-sm">Service Area</p>
                    <p className="text-sm text-gray-700">All of San Diego County</p>
                    <p className="text-xs text-gray-500 mt-0.5">20 cities — in-home service only</p>
                  </div>
                </div>
              </div>

              {/* Pricing quick ref */}
              <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm">
                <p className="font-semibold text-brand-slate mb-3">Quick Pricing Reference</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Service call (incl. diagnostic)</span>
                    <span className="font-semibold text-brand-slate">{DIAGNOSTIC_FEE}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>All appliance repairs</span>
                    <span className="font-semibold text-brand-slate">$300–$400</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Appliance installation</span>
                    <span className="font-semibold text-brand-slate">$250–$350</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Warranty</span>
                    <span className="font-semibold text-brand-slate">{WARRANTY_DAYS} days parts & labor</span>
                  </li>
                </ul>
                <p className="mt-3 text-xs text-gray-400">
                  Card accepted with 3.5% fee. No fee on cash, check, Zelle, or Venmo.
                </p>
              </div>
            </div>

            {/* Right: callback form */}
            <div>
              <h2 className="text-2xl font-bold text-brand-slate mb-2">Request a Callback</h2>
              <p className="text-sm text-gray-500 mb-6">
                For fastest scheduling, call us directly. For non-urgent requests, submit the form below and we will call you back within one business day.
              </p>
              <form
                action="https://formspree.io/f/xeepojke"
                method="POST"
                className="space-y-4"
                aria-label="Callback request form"
              >
                <input type="hidden" name="_subject" value="New callback request — NTSZOT Appliance Repair" />
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-brand-slate mb-1"
                  >
                    Name <span className="text-brand-blue" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-brand-slate mb-1"
                  >
                    Phone number <span className="text-brand-blue" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    autoComplete="tel"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                    placeholder="(858) 000-0000"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-brand-slate mb-1"
                  >
                    Appliance issue (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue resize-none"
                    placeholder="e.g. Samsung refrigerator not cooling, La Jolla"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-brand-blue px-6 py-3 text-sm font-extrabold text-white hover:bg-brand-blue-dark transition-colors"
                >
                  Request Callback
                </button>
                <p className="text-xs text-gray-400">
                  We respond to form submissions within one business day.
                  For same-day service, call {COMPANY_PHONE_DISPLAY} directly.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* GMB Map — full width */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <GMBEmbed
            title={`${COMPANY_NAME} — San Diego Service Area`}
            height={450}
          />
        </div>
      </section>

      <FAQSection
        faqs={CONTACT_FAQS}
        heading="Contact NTSZOT Appliance Repair — FAQ"
      />

      {/* Internal links */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/about/" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-slate hover:border-brand-blue transition-colors">
              About NTSZOT
            </Link>
            <Link href="/emergency-appliance-repair/" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-slate hover:border-brand-blue transition-colors">
              Emergency Appliance Repair
            </Link>
            <Link href="/specials/" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-slate hover:border-brand-blue transition-colors">
              Current Specials
            </Link>
            <Link href="/faq/" className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-slate hover:border-brand-blue transition-colors">
              Repair FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-slate py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold mb-3">
            Appliance broken? Call now.
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
            {HOURS_WEEKDAY} · {HOURS_SATURDAY} · Sun closed
          </p>
        </div>
      </section>
    </>
  )
}
