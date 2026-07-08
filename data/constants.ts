export const COMPANY_NAME = "NTSZOT Appliance Repair"
export const COMPANY_PHONE_DISPLAY = "(619) 488-4477"
export const COMPANY_PHONE_TEL = "tel:+16194884477"
export const COMPANY_PHONE_SCHEMA = "+16194884477"
export const COMPANY_EMAIL = "ntszotservice@gmail.com"
export const COMPANY_WEBSITE = "https://www.ntszotservice.com"
export const PRIMARY_KEYWORD = "appliance repair san diego"
export const DIAGNOSTIC_FEE = "$80"
export const DIAGNOSTIC_FEE_NUMBER = 80
export const WARRANTY_DAYS = 60
export const HOURS_WEEKDAY = "Mon–Fri 9:00 AM–6:00 PM"
export const HOURS_SATURDAY = "Sat 10:00 AM–5:00 PM"
export const HOURS_FULL = "Mon–Fri 9:00 AM–6:00 PM | Sat 10:00 AM–5:00 PM | Sun closed"
export const GEO_LAT = 32.8245
export const GEO_LNG = -117.1078
export const CARD_FEE_PERCENT = 3.5
export const FIRST_SERVICE_DISCOUNT = 40
export const MIN_TECH_EXPERIENCE_YEARS = 3
export const TECH_COUNT = 15

export const REPAIR_PRICES = {
  standard: { min: 300, max: 400, label: "$300–$400" },
  refrigeration: { min: 300, max: 400, label: "$300–$400" },
  installation: { min: 250, max: 350, label: "$250–$350" },
} as const

export const DIFFERENTIATORS = [
  {
    id: "diagnostic-fee",
    headline: "$80 service call — includes diagnostic and repair estimate",
    body: "Your technician arrives, diagnoses the problem, and gives you a full repair estimate — all for $80. No surprises, no guesswork before the work begins.",
  },
  {
    id: "warranty",
    headline: "60-day warranty on every repair — parts and labor",
    body: "If the same problem comes back within 60 days, we return and fix it at no charge. Every repair is backed by our written warranty.",
  },
  {
    id: "schedule",
    headline: "Mon–Fri 9AM–6PM, Sat 10AM–5PM — flexible scheduling",
    body: "We work around your schedule. Book a weekday window or a Saturday appointment — whichever works best for you.",
  },
  {
    id: "certified",
    headline: "Factory-certified technicians — trained by the brands",
    body: "Our technicians hold factory certifications from Samsung, LG, Whirlpool, GE, and other major brands. That means accurate diagnosis and correct repairs the first time.",
  },
  {
    id: "team",
    headline: "15-technician team — faster availability, no waiting",
    body: "With 15 certified techs in the field, we can almost always get to you the same or next day — even when demand is high.",
  },
  {
    id: "in-home",
    headline: "In-home service — we come to you",
    body: "No hauling a 300-pound refrigerator anywhere. Your technician comes to your home, works in your kitchen or laundry room, and leaves the appliance where it belongs.",
  },
  {
    id: "upfront-quote",
    headline: "Upfront quote before any work begins",
    body: "Your technician diagnoses the issue, explains exactly what it will cost to fix, and waits for your approval. Nothing starts without your go-ahead.",
  },
  {
    id: "payment",
    headline: "Cash, check, Zelle, Venmo (no fee) — card accepted (3.5% fee)",
    body: "Multiple payment options. No fee on cash, check, Zelle, or Venmo. Card payments accepted with a 3.5% processing fee, always disclosed upfront.",
  },
  {
    id: "licensed-insured",
    headline: "Licensed & insured — full liability coverage on every call",
    body: "Every NTSZOT technician carries full liability insurance. Your home and appliances are protected throughout the entire repair.",
  },
] as const
