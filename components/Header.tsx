"use client"

import { useState } from "react"
import Link from "next/link"
import { COMPANY_NAME, COMPANY_PHONE_DISPLAY, COMPANY_PHONE_TEL } from "@/data/constants"
import { Phone, Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "Services", href: "/services/" },
  { label: "Brands", href: "/brands/" },
  { label: "Locations", href: "/locations/" },
  { label: "Blog", href: "/blog/" },
  { label: "FAQ", href: "/faq/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
            <span className="text-xl font-bold text-brand-slate tracking-tight">
              {COMPANY_NAME}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-gray-600">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-brand-blue transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: hamburger (mobile only) + call CTA (desktop only) */}
          <div className="flex items-center gap-3">
            <button
              className="md:hidden rounded-md p-2 text-gray-600 hover:text-brand-blue hover:bg-gray-100 transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>

            <a
              href={COMPANY_PHONE_TEL}
              className="hidden md:flex items-center gap-2 rounded-full bg-brand-blue px-4 py-2.5 text-sm font-bold text-white hover:bg-brand-blue-dark transition-colors"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>{COMPANY_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav id="mobile-nav" className="md:hidden border-t border-gray-100 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-sm font-medium text-gray-700 hover:text-brand-blue border-b border-gray-100 last:border-0 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
