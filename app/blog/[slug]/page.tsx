import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Phone, Calendar, User } from "lucide-react"
import BreadcrumbSchema from "@/components/BreadcrumbSchema"
import { BLOG_POSTS, getBlogPostBySlug, DEFAULT_AUTHOR } from "@/data/blog-posts"
import { SERVICES } from "@/data/services"
import { getRelatedPosts } from "@/utils/internalLinks"
import {
  COMPANY_NAME,
  COMPANY_PHONE_DISPLAY,
  COMPANY_PHONE_TEL,
  COMPANY_WEBSITE,
  DIAGNOSTIC_FEE,
  WARRANTY_DAYS,
  HOURS_WEEKDAY,
  HOURS_SUNDAY,
} from "@/data/constants"
import { POST_CONTENT_MAP } from "@/content/blog"

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `${COMPANY_WEBSITE}/blog/${post.slug}/` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${COMPANY_WEBSITE}/blog/${post.slug}/`,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
    },
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/Los_Angeles",
  })
}

function ArticleSchema({
  post,
}: {
  post: ReturnType<typeof getBlogPostBySlug> & object
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      "@type": "Person",
      name: post.authorName,
      jobTitle: post.authorJobTitle,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY_NAME,
      "@id": `${COMPANY_WEBSITE}/#organization`,
      url: COMPANY_WEBSITE,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${COMPANY_WEBSITE}/blog/${post.slug}/`,
    },
    image: post.featuredImageUrl
      ? { "@type": "ImageObject", url: post.featuredImageUrl }
      : undefined,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

function HowToSchema({
  post,
}: {
  post: ReturnType<typeof getBlogPostBySlug> & object
}) {
  if (!post.howToSchema) return null

  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: post.howToSchema.name,
    description: post.howToSchema.description,
    totalTime: post.howToSchema.totalTime,
    step: post.howToSchema.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ─── Page component ───────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  const PostContent = POST_CONTENT_MAP[post.slug]
  if (!PostContent) notFound()

  const relatedServices = post.relatedServiceSlugs
    .map((s) => SERVICES.find((sv) => sv.slug === s))
    .filter(Boolean) as (typeof SERVICES)[number][]

  return (
    <>
      <ArticleSchema post={post} />
      <HowToSchema post={post} />

      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog/" },
          { name: post.title, href: `/blog/${post.slug}/` },
        ]}
      />

      {/* Hero image */}
      {post.featuredImageUrl && (
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-gray-100">
          <Image
            src={post.featuredImageUrl}
            alt={post.featuredImageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-brand-navy/50" />
        </div>
      )}

      {/* Article header */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" aria-hidden="true" />
              {post.authorName} · {post.authorJobTitle}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
              <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
            </span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="py-10 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <PostContent />
        </div>
      </article>

      {/* Author bio */}
      <section className="py-8 bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-brand-navy/10 p-3 shrink-0">
              <User className="h-6 w-6 text-brand-navy" aria-hidden="true" />
            </div>
            <div>
              <p className="font-semibold text-brand-navy text-sm">{post.authorName}</p>
              <p className="text-xs text-gray-500 mb-2">{post.authorJobTitle} · {COMPANY_NAME}</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                {DEFAULT_AUTHOR.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {getRelatedPosts(post.slug).length > 0 && (
        <section className="py-10 bg-gray-50 border-y border-gray-200">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold text-brand-navy mb-4 uppercase tracking-wide">
              Related Articles
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {getRelatedPosts(post.slug)
                .map((s) => getBlogPostBySlug(s))
                .filter(Boolean)
                .map((related) => (
                  <Link
                    key={related!.slug}
                    href={`/blog/${related!.slug}/`}
                    className="rounded-lg border border-gray-200 bg-white p-4 hover:border-brand-red hover:shadow-sm transition-all"
                  >
                    <p className="text-sm font-semibold text-brand-navy mb-1 leading-snug">{related!.title}</p>
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{related!.excerpt}</p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Internal links */}
      {relatedServices.length > 0 && (
        <section className="py-10 bg-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold text-brand-navy mb-4 uppercase tracking-wide">
              Related Services
            </p>
            <div className="flex flex-wrap gap-3">
              {relatedServices.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}/`}
                  className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-navy hover:border-brand-red transition-colors"
                >
                  {svc.name} →
                </Link>
              ))}
              <Link
                href="/blog/"
                className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-brand-navy hover:border-brand-red transition-colors"
              >
                ← All Posts
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="bg-brand-navy py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-extrabold mb-3">
            Appliance not working? Call now.
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
