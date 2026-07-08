import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone, Calendar } from "lucide-react"
import BreadcrumbSchema from "@/components/BreadcrumbSchema"
import TrustBar from "@/components/TrustBar"
import { BLOG_POSTS } from "@/data/blog-posts"
import {
  COMPANY_NAME,
  COMPANY_PHONE_DISPLAY,
  COMPANY_PHONE_TEL,
  COMPANY_WEBSITE,
  DIAGNOSTIC_FEE,
  WARRANTY_DAYS,
} from "@/data/constants"

export const metadata: Metadata = {
  title: "Appliance Repair Blog — San Diego Tips & Guides",
  description:
    "Appliance repair guides, cost breakdowns, and troubleshooting tips for San Diego homeowners. Written by the technician at WNDW Appliance Repair.",
  alternates: { canonical: `${COMPANY_WEBSITE}/blog/` },
  openGraph: {
    title: `Appliance Repair Blog — San Diego | ${COMPANY_NAME}`,
    description: "Appliance repair guides and cost information for San Diego homeowners.",
    url: `${COMPANY_WEBSITE}/blog/`,
  },
}

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Los_Angeles",
  })
}

export default function BlogHubPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog/" },
        ]}
      />

      {/* Header */}
      <section className="bg-brand-navy text-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Appliance Repair Blog — San Diego
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Troubleshooting guides, cost breakdowns, and repair tips for San Diego homeowners — written by the technician at {COMPANY_NAME}.
          </p>
        </div>
      </section>

      <TrustBar />

      {/* Blog posts grid */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {BLOG_POSTS.length === 0 ? (
            <p className="text-center text-gray-500 py-12">
              Blog posts coming soon. In the meantime, call{" "}
              <a href={COMPANY_PHONE_TEL} className="text-brand-red font-semibold hover:underline">
                {COMPANY_PHONE_DISPLAY}
              </a>{" "}
              to speak directly with our technician.
            </p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[...BLOG_POSTS].sort((a, b) => b.datePublished.localeCompare(a.datePublished)).map((post) => (
                <article
                  key={post.slug}
                  className="flex flex-col rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-md transition-shadow"
                >
                  {post.featuredImageUrl && (
                    <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                      <Image
                        src={post.featuredImageUrl}
                        alt={post.featuredImageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="flex flex-col flex-1 p-5 gap-3">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      <time dateTime={post.datePublished}>
                        {formatDate(post.datePublished)}
                      </time>
                    </div>
                    <h2 className="text-base font-bold text-brand-navy leading-snug">
                      <Link
                        href={`/blog/${post.slug}/`}
                        className="hover:text-brand-red transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed flex-1">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}/`}
                      className="text-sm font-semibold text-brand-red hover:underline"
                    >
                      Read more →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold mb-3">
            Appliance not working? Call now.
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
            Mon–Sat 7:00 AM–11:00 PM · Sun 8:00 AM–10:00 PM
          </p>
        </div>
      </section>
    </>
  )
}
