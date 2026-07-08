export const COMPANY_NAME = "WNDW Appliance Repair"
export const COMPANY_PHONE_DISPLAY = "(858) 264-3138"
export const COMPANY_PHONE_TEL = "tel:+18582643138"
export const COMPANY_PHONE_SCHEMA = "+18582643138"
export const COMPANY_EMAIL = "service@wndwappliancerepair.com"
export const COMPANY_WEBSITE = "https://wndwappliancerepair.com"
export const PRIMARY_KEYWORD = "appliance repair san diego"
export const DIAGNOSTIC_FEE = "$85"
export const DIAGNOSTIC_FEE_NUMBER = 85
export const WARRANTY_DAYS = 90
export const HOURS_WEEKDAY = "Mon–Sat 7:00 AM–11:00 PM"
export const HOURS_SUNDAY = "Sun 8:00 AM–10:00 PM"
export const HOURS_FULL = "Mon–Sat 7:00 AM–11:00 PM | Sun 8:00 AM–10:00 PM"
export const GEO_LAT = 32.7157
export const GEO_LNG = -117.1611
export const CARD_FEE_PERCENT = 3.5
export const FIRST_SERVICE_DISCOUNT = 40
export const MIN_TECH_EXPERIENCE_YEARS = 3

export const REPAIR_PRICES = {
  standard: { min: 250, max: 350, label: "$250–$350" },
  refrigeration: { min: 350, max: 900, label: "$350–$900" },
  installation: { min: 220, max: 350, label: "$220–$350" },
  maintenance: { annual: 350, label: "$350/year + parts" },
} as const

export const DIFFERENTIATORS = [
  {
    id: "diagnostic-fee",
    headline: "$85 diagnostic fee — waived if we repair it",
    body: "Your technician diagnoses the problem for $85. If you proceed with the repair, that fee disappears from your bill. You only pay if you decide not to fix it.",
  },
  {
    id: "warranty",
    headline: "90-day warranty on every repair — parts and labor",
    body: "If the same problem comes back within 90 days, we come back and fix it. No questions, no extra charge.",
  },
  {
    id: "schedule",
    headline: "7 days a week — Mon–Sat 7AM–11PM, Sun 8AM–10PM",
    body: "Most independent shops are closed on weekends. We're not. When the dishwasher breaks Saturday morning, we can be there.",
  },
  {
    id: "brands",
    headline: "All major brands — one call, one technician",
    body: "Samsung, LG, Whirlpool, GE, Bosch, KitchenAid, Sub-Zero, Thermador — no brand runaround. One call handles it.",
  },
  {
    id: "in-home",
    headline: "In-home service — we come to you",
    body: "No hauling a 300-pound refrigerator to a shop. Your technician arrives at your home, works in your kitchen, and leaves the appliance where it lives.",
  },
  {
    id: "upfront-quote",
    headline: "Upfront quote before any work begins",
    body: "Your technician diagnoses the problem, tells you what it costs to fix, and waits for your approval. Nothing happens without your go-ahead.",
  },
  {
    id: "payment",
    headline: "Cash, check, Zelle, Venmo (no fee) — card accepted (3.5% fee)",
    body: "Multiple payment options with no fee on cash, check, Zelle, or Venmo. Card payments accepted with a 3.5% processing fee, disclosed upfront.",
  },
  {
    id: "experience",
    headline: "3+ years minimum experience — no trainees in your home",
    body: "Every WNDW technician has at least 3 years of hands-on field experience before their first solo service call. We don't send trainees to figure it out at your expense.",
  },
  {
    id: "licensed-insured",
    headline: "Licensed & insured — full liability coverage on every call",
    body: "Every technician carries full liability insurance. Your home and appliances are covered throughout the repair.",
  },
] as const
