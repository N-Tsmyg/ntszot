import Link from "next/link"
import {
  COMPANY_NAME,
  COMPANY_PHONE_DISPLAY,
  COMPANY_PHONE_TEL,
  COMPANY_EMAIL,
  HOURS_WEEKDAY,
  HOURS_SUNDAY,
} from "@/data/constants"
import { SERVICES } from "@/data/services"
import { BRANDS } from "@/data/brands"
import { LOCATIONS } from "@/data/locations"
import { Phone, Mail, Clock } from "lucide-react"

const TOP_CITIES = LOCATIONS.slice(0, 8)
const MAINSTREAM_BRANDS = BRANDS.filter((b) => b.tier === "mainstream")

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">

          {/* Col 1: Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}/`}
                    className="hover:text-white transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Brands */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Brands
            </h3>
            <ul className="space-y-2 text-sm">
              {MAINSTREAM_BRANDS.map((b) => (
                <li key={b.slug}>
                  <Link
                    href={`/brands/${b.slug}/`}
                    className="hover:text-white transition-colors"
                  >
                    {b.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/brands/" className="hover:text-white transition-colors text-white/60">
                  View all brands →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Locations */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2 text-sm">
              {TOP_CITIES.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/${loc.slug}/`}
                    className="hover:text-white transition-colors"
                  >
                    {loc.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations/" className="hover:text-white transition-colors text-white/60">
                  View all cities →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about/" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/blog/" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact/" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/faq/" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/specials/" className="hover:text-white transition-colors">Specials</Link></li>
              <li><Link href="/emergency-appliance-repair/" className="hover:text-white transition-colors">Emergency Repair</Link></li>
              <li><Link href="/property-management-appliance-repair/" className="hover:text-white transition-colors">Property Managers</Link></li>
              <li><Link href="/vacation-rental-appliance-repair/" className="hover:text-white transition-colors">Vacation Rentals</Link></li>
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={COMPANY_PHONE_TEL}
                  className="flex items-center gap-2 hover:text-white transition-colors font-semibold"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {COMPANY_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="flex items-center gap-2 hover:text-white transition-colors break-all"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {COMPANY_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <span className="block">{HOURS_WEEKDAY}</span>
                  <span className="block">{HOURS_SUNDAY}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <p>San Diego County, CA</p>
        </div>
      </div>
    </footer>
  )
}
