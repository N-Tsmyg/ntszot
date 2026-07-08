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
import { getAllSubServiceParams, getSubServiceBySlug, getSubServicesForService } from "@/data/sub-services"
import { getServiceBySlug } from "@/data/services"
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

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return getAllSubServiceParams()
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; subSlug: string }>
}): Promise<Metadata> {
  const { slug, subSlug } = await params
  const subService = getSubServiceBySlug(slug, subSlug)
  if (!subService) return {}

  return {
    title: subService.metaTitle,
    description: subService.metaDescription,
    alternates: { canonical: `${COMPANY_WEBSITE}/services/${slug}/${subSlug}/` },
    openGraph: {
      title: subService.metaTitle,
      description: subService.metaDescription,
      url: `${COMPANY_WEBSITE}/services/${slug}/${subSlug}/`,
    },
  }
}

// ─── Page component ───────────────────────────────────────────────────────────

export default async function SubServicePage({
  params,
}: {
  params: Promise<{ slug: string; subSlug: string }>
}) {
  const { slug, subSlug } = await params
  const subService = getSubServiceBySlug(slug, subSlug)
  if (!subService) notFound()

  const parentService = getServiceBySlug(slug)
  if (!parentService) notFound()

  const siblingSubServices = getSubServicesForService(slug).filter(
    (s) => s.slug !== subSlug
  )

  const faqs: FAQ[] = [
    {
      question: `How much does ${subService.name.toLowerCase()} cost in San Diego?`,
      answer: `${subService.name} in San Diego typically costs ${subService.priceRange} including parts and labor. The exact cost depends on your appliance brand, model, and the specific part needed. The ${DIAGNOSTIC_FEE} diagnostic fee is waived completely when you proceed with the repair.`,
    },
    {
      question: `How long does ${subService.name.toLowerCase()} take?`,
      answer: `In most cases, our technician diagnoses and completes the repair in a single visit when commonly stocked parts are available. If a specific part needs to be ordered, it typically arrives within 1–3 business days and your technician returns to finish the job.`,
    },
    {
      question: `Is there a warranty on ${subService.name.toLowerCase()}?`,
      answer: `Yes. Every repair includes a ${WARRANTY_DAYS}-day parts and labor warranty. If the same issue returns within ${WARRANTY_DAYS} days of service, our technician comes back and resolves it at no additional charge.`,
    },
    {
      question: `Do you charge a diagnostic fee for ${subService.primaryKeyword}?`,
      answer: `Yes — the diagnostic fee is ${DIAGNOSTIC_FEE}. However, it is waived completely if you proceed with the repair. You only pay the diagnostic fee if you decide not to move forward after the inspection.`,
    },
    {
      question: "What brands do you work on?",
      answer: `We work on all major brands — Samsung, LG, Whirlpool, GE, KitchenAid, Bosch, Electrolux, Maytag, Frigidaire, and more, including premium brands like Miele and Sub-Zero. No brand restrictions.`,
    },
  ]

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services/" },
          { name: parentService.name, href: `/services/${slug}/` },
          { name: subService.name, href: `/services/${slug}/${subSlug}/` },
        ]}
      />

      {/* 1. Hero */}
      <Hero
        headline={subService.h1}
        subheadline={`${DIAGNOSTIC_FEE} diagnostic fee waived if we fix it. ${WARRANTY_DAYS}-day parts & labor warranty. San Diego County.`}
        urgencyNote={`${HOURS_WEEKDAY} · ${HOURS_SUNDAY}`}
      />

      {/* 2. TrustBar */}
      <TrustBar />

      {/* 3. Quick Answer Box */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="quick-answer rounded-xl border-l-4 border-brand-red bg-red-50 p-6">
            <p className="font-semibold text-brand-navy text-base leading-relaxed">
              {subService.name} in San Diego costs {subService.priceRange} in most cases, including parts and labor. The {DIAGNOSTIC_FEE} diagnostic fee is waived completely when you proceed with the repair.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Description */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="blog-content">
            {subService.description.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Common Causes */}
      <section className="py-10 bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">
            Common Causes of {subService.name}
          </h2>
          <ul className="space-y-4">
            {subService.commonCauses.map((cause) => (
              <li key={cause} className="flex gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-red"
                  aria-hidden="true"
                />
                <span className="text-sm text-gray-700 leading-relaxed">{cause}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Pricing */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">
            How Much Does {subService.name} Cost in San Diego?
          </h2>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 space-y-3">
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <span className="text-sm font-medium text-brand-navy">Typical repair cost</span>
              <span className="text-sm font-bold text-brand-navy">{subService.priceRange}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <span className="text-sm font-medium text-brand-navy">Diagnostic fee</span>
              <span className="text-sm font-bold text-brand-navy">{DIAGNOSTIC_FEE} (waived if repaired)</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <span className="text-sm font-medium text-brand-navy">Warranty</span>
              <span className="text-sm font-bold text-brand-navy">{WARRANTY_DAYS}-day parts & labor</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-brand-navy">Payment</span>
              <span className="text-sm text-gray-600">Cash · Check · Zelle · Venmo (no fee)<br />Card accepted ({CARD_FEE_PERCENT}% fee)</span>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-400">
            Final cost depends on appliance brand, model, and part required. Your technician provides an upfront quote before any work begins.
          </p>
        </div>
      </section>

      {/* 7. MidPageCTA */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <MidPageCTA
          heading={`Ready to schedule your ${subService.name.toLowerCase()}?`}
          subtext={`${DIAGNOSTIC_FEE} diagnostic fee — waived if we fix it. ${WARRANTY_DAYS}-day warranty on every repair.`}
        />
      </div>

      {/* 8. DifferentiatorsSection */}
      <DifferentiatorsSection />

      {/* 9. FAQSection */}
      <FAQSection faqs={faqs} heading={`${subService.name} — FAQ`} />

      {/* 10. Related links */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-brand-navy mb-4">Related Services</h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services/"
              className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-brand-navy hover:border-brand-red hover:text-brand-red transition-colors"
            >
              ← All Services
            </Link>
            <Link
              href={`/services/${slug}/`}
              className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-brand-navy hover:border-brand-red hover:text-brand-red transition-colors"
            >
              {parentService.name}
            </Link>
            <Link
              href="/contact/"
              className="rounded-lg border border-brand-red bg-red-50 px-4 py-2 text-sm font-medium text-brand-red hover:bg-brand-red hover:text-white transition-colors"
            >
              Schedule Repair →
            </Link>
          </div>
        </div>
      </section>

      {/* 10b. Sibling sub-service links */}
      {siblingSubServices.length > 0 && (
        <section className="py-10 bg-gray-50 border-t border-gray-200">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-bold text-brand-navy mb-4">
              Other {parentService.name} Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {siblingSubServices.map((sibling) => (
                <Link
                  key={sibling.slug}
                  href={`/services/${slug}/${sibling.slug}/`}
                  className="rounded-lg border border-gray-200 bg-white p-4 hover:border-brand-red hover:shadow-sm transition-all"
                >
                  <p className="text-sm font-semibold text-brand-navy">{sibling.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{sibling.shortDesc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 11. Final CTA */}
      <section className="bg-brand-navy py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold mb-3">
            Call to schedule your {subService.name.toLowerCase()}
          </h2>
          <p className="text-white/70 mb-6">
            {DIAGNOSTIC_FEE} diagnostic fee waived if we fix it. {WARRANTY_DAYS}-day parts &amp; labor warranty.
            <br />
            {HOURS_WEEKDAY} · {HOURS_SUNDAY}
          </p>
          <a
            href={COMPANY_PHONE_TEL}
            className="inline-flex items-center gap-3 rounded-lg bg-brand-red px-8 py-4 text-xl font-extrabold text-white hover:bg-brand-red-dark transition-colors shadow-lg"
          >
            <Phone className="h-6 w-6" aria-hidden="true" />
            {COMPANY_PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </>
  )
}
