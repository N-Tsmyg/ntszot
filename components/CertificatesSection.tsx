import Image from "next/image"
import { Award } from "lucide-react"

interface Certificate {
  id: string
  name: string
  issuer: string
  description: string
  imagePath?: string
}

const CERTIFICATES: Certificate[] = [
  {
    id: "first-american",
    name: "Contractor Quality Award",
    issuer: "First American Home Warranty",
    description:
      "NTSZOT Appliance Repair has been recognized by First American Home Warranty for outstanding contractor quality and service reliability — awarded to contractors who consistently deliver professional, high-quality repairs.",
    imagePath: "/images/certificates/placeholder-cert.png",
  },
]

export default function CertificatesSection() {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Award className="h-6 w-6 text-brand-blue" aria-hidden="true" />
          <h2 className="text-2xl font-bold text-brand-slate">
            Quality Certifications &amp; Awards
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              className="rounded-xl bg-white border border-gray-200 p-6 flex flex-col gap-4"
            >
              {cert.imagePath ? (
                <div className="relative h-24 w-full overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={cert.imagePath}
                    alt={`${cert.name} — ${cert.issuer}`}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
              ) : (
                <div className="h-24 w-full rounded-lg bg-gray-100 flex items-center justify-center">
                  <Award className="h-10 w-10 text-gray-300" aria-hidden="true" />
                </div>
              )}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-1">
                  {cert.issuer}
                </p>
                <p className="font-bold text-brand-slate text-sm mb-2">{cert.name}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-gray-400">
          Additional certifications from major appliance brands including Samsung, LG, Whirlpool, and GE are held by our technicians.
        </p>
      </div>
    </section>
  )
}
