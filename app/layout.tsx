import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import StickyCallButton from "@/components/StickyCallButton"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
import {
  COMPANY_NAME,
  COMPANY_WEBSITE,
  COMPANY_PHONE_DISPLAY,
} from "@/data/constants"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY_WEBSITE),
  title: {
    default: `Appliance Repair San Diego | ${COMPANY_NAME}`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "San Diego appliance repair — $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. 7 days a week. Call (858) 264-3138.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: COMPANY_NAME,
    url: COMPANY_WEBSITE,
  },
  icons: {
    icon: "/favicon.svg",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: COMPANY_WEBSITE,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-brand-navy"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  )
}
