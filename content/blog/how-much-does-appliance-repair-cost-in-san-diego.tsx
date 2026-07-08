import Link from "next/link"
import FAQSection from "@/components/FAQSection"
import MidPageCTA from "@/components/MidPageCTA"
import { DIAGNOSTIC_FEE, WARRANTY_DAYS, COMPANY_PHONE_DISPLAY, COMPANY_PHONE_TEL, CARD_FEE_PERCENT } from "@/data/constants"

const faqs = [
  {
    question: "How much does appliance repair cost in San Diego?",
    answer: `Most appliance repairs in San Diego cost $250–$350 including parts and labor. Refrigerator, freezer, and ice maker repairs run $350–$900. The ${DIAGNOSTIC_FEE} diagnostic fee is waived when you proceed with the repair.`,
  },
  {
    question: "What is the $85 diagnostic fee?",
    answer: `The ${DIAGNOSTIC_FEE} fee covers the technician's visit and full diagnosis. If you approve the repair, the fee is waived entirely. If you decline, you owe ${DIAGNOSTIC_FEE} and nothing more.`,
  },
  {
    question: "Is appliance repair worth it vs. replacement?",
    answer: `If repair cost is less than 50% of the replacement cost and the appliance is under 10 years old, repair is generally the better value. A $300 repair on a $1,200 refrigerator makes sense. A $900 repair on an 18-year-old unit may not. Your technician will give you an honest assessment.`,
  },
  {
    question: "Do prices vary by brand?",
    answer: `Parts costs vary by brand — premium brands like Sub-Zero and Miele use more expensive components, so repair costs for those appliances tend to run higher within the stated ranges. Labor rates are the same regardless of brand.`,
  },
]

export default function ApplianceRepairCostPost() {
  return (
    <div className="blog-content">

      {/* Quick answer box */}
      <div className="quick-answer not-prose rounded-xl border-l-4 border-brand-blue bg-blue-50 p-5 mb-8">
        <p className="text-sm font-semibold text-brand-blue uppercase tracking-wide mb-1">Quick Answer</p>
        <p className="text-gray-800 text-base leading-relaxed">
          Most appliance repairs in San Diego cost <strong>$250–$350</strong> including parts and labor. Refrigerator, freezer, and ice maker repairs run <strong>$350–$900</strong>. The <strong>{DIAGNOSTIC_FEE} diagnostic fee</strong> is charged per visit and waived completely when you proceed with the repair.
        </p>
      </div>

      <p>
        If your appliance just stopped working and you want to know what it will cost before calling a technician, this guide gives you the specific numbers we charge at NTSZOT Appliance Repair — the ranges, what drives the variation, and exactly how the diagnostic fee works.
      </p>

      <h2>Appliance Repair Cost by Appliance Type — San Diego 2026</h2>

      <p>
        The table below covers our standard pricing. These are the actual ranges from our service calls in San Diego County.
      </p>

      <div className="not-prose overflow-hidden rounded-xl border border-gray-200 my-6">
        <table className="w-full text-sm">
          <thead className="bg-brand-navy text-white">
            <tr>
              <th className="text-left px-4 py-3 font-semibold">Appliance</th>
              <th className="text-left px-4 py-3 font-semibold">Typical Range</th>
              <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { appliance: "Washer", range: "$250–$350", note: "Belt, pump, bearing, door switch" },
              { appliance: "Dryer", range: "$250–$350", note: "Thermal fuse, element, belt, rollers" },
              { appliance: "Dishwasher", range: "$250–$350", note: "Pump, door latch, inlet valve, control board" },
              { appliance: "Oven / Range / Stove", range: "$250–$350", note: "Igniter, bake element, sensor" },
              { appliance: "Microwave", range: "$250–$350", note: "Magnetron, diode, turntable motor" },
              { appliance: "Range Hood", range: "$250–$350", note: "Fan motor, switch, capacitor" },
              { appliance: "Refrigerator", range: "$350–$900", note: "Compressor, evap fan, condenser, refrigerant" },
              { appliance: "Freezer", range: "$350–$900", note: "Defrost heater, thermostat, compressor" },
              { appliance: "Ice Maker", range: "$350–$900", note: "Water inlet valve, ice maker module, fill tube" },
              { appliance: "Appliance Installation", range: "$220–$350", note: "Connection, leveling, test run" },
              { appliance: "Annual Maintenance Plan", range: "$350/year + parts", note: "Two visits, coils, filter, drain cleaning" },
            ].map((row, i) => (
              <tr key={row.appliance} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-3 font-medium text-brand-navy">{row.appliance}</td>
                <td className="px-4 py-3 text-gray-700">{row.range}</td>
                <td className="px-4 py-3 text-gray-500 hidden sm:table-cell text-xs">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-400 not-prose mb-6">
        All prices include parts and labor. Final cost depends on appliance brand, model, and the specific component that failed. Your technician provides an itemized upfront quote before any work begins.
      </p>

      <h2>How the $85 Diagnostic Fee Works</h2>

      <p>
        The {DIAGNOSTIC_FEE} fee covers the technician&apos;s visit to your home and a complete diagnosis of the reported problem. Here is exactly how it works:
      </p>

      <ul>
        <li>
          <strong>If you approve the repair:</strong> The {DIAGNOSTIC_FEE} is waived in full. You pay only for parts and labor — the diagnostic visit has no line item on your invoice.
        </li>
        <li>
          <strong>If you decline the repair:</strong> You owe {DIAGNOSTIC_FEE} and nothing more. This covers the technician&apos;s time and expertise for diagnosing the problem.
        </li>
      </ul>

      <p>
        The fee is flat — it does not vary by appliance type, brand, or neighborhood in San Diego County. It is the same {DIAGNOSTIC_FEE} whether the call is for a Whirlpool washer in El Cajon, a Samsung refrigerator in Chula Vista near Otay Ranch, a Bosch dishwasher in La Jolla near the Cove, or a Viking range in Rancho Bernardo. We serve all 18 cities across San Diego County at the same rate.
      </p>

      <h2>What Drives the Variation Within Each Range?</h2>

      <p>
        The $250–$350 range for standard appliances and $350–$900 range for refrigeration are real-world ranges, not rough estimates. Here is what pushes a repair toward the high or low end:
      </p>

      <h3>Part cost</h3>
      <p>
        A thermal fuse on a dryer costs $15–$40. A control board for a dishwasher costs $100–$250. The part that failed is the largest variable in your total repair cost.
      </p>

      <h3>Brand</h3>
      <p>
        Premium brand parts (Miele, Sub-Zero, Thermador) cost more than mainstream brand parts. A Miele dishwasher pump costs significantly more than an equivalent Whirlpool pump. Labor rates are the same.
      </p>

      <h3>Appliance age and availability</h3>
      <p>
        Parts for appliances over 10–12 years old are sometimes out of production. When a part has to be sourced through specialty distributors, cost increases. For very old appliances, the technician will note this and factor it into the quote.
      </p>

      <h3>Refrigerant work</h3>
      <p>
        Refrigerator and freezer repairs that involve refrigerant (R134a or R600a) require additional materials and time. This is why the refrigeration range extends to $900.
      </p>

      <MidPageCTA
        heading="Get an upfront quote for your repair"
        subtext={`${DIAGNOSTIC_FEE} diagnostic fee — waived if we fix it. ${WARRANTY_DAYS}-day warranty on every repair.`}
      />

      <h2>Is Appliance Repair Worth It in San Diego?</h2>

      <p>
        The standard guidance is: if the repair cost is less than 50% of the replacement cost and the appliance is under 10 years old, repair is the better financial decision. Here are some real-world examples:
      </p>

      <ul>
        <li>
          <strong>Washer pump failure:</strong> Repair ~$280. New mid-range washer: $700–$1,200. Repair is clearly worth it.
        </li>
        <li>
          <strong>Refrigerator compressor failure:</strong> Repair $650–$1,200. New refrigerator: $800–$2,500+. Depends heavily on age and brand — your technician will give you an honest assessment.
        </li>
        <li>
          <strong>Dishwasher control board:</strong> Repair ~$300. New dishwasher: $600–$1,500. Repair typically worth it for appliances under 8 years old.
        </li>
      </ul>

      <p>
        At NTSZOT Appliance Repair, we give you the diagnosis and quote first. You decide whether to repair — there is no pressure, and declining the repair means you owe only the {DIAGNOSTIC_FEE} diagnostic fee.
      </p>

      <h2>Payment Methods</h2>

      <p>
        Cash, check, Zelle, and Venmo are accepted with no processing fee. Credit and debit card payments are accepted with a {CARD_FEE_PERCENT}% processing fee, disclosed before payment is taken.
      </p>

      <h2>The 90-Day Warranty</h2>

      <p>
        Every completed repair carries a {WARRANTY_DAYS}-day parts and labor warranty. If the same problem returns within {WARRANTY_DAYS} days of service, the technician returns and resolves it at no additional charge. This applies to all repairs — no exceptions for brand, appliance type, or repair complexity.
      </p>

      <div className="not-prose">
        <FAQSection faqs={faqs} heading="Appliance Repair Cost — FAQ" />
      </div>

      <h2>Related Resources</h2>

      <ul>
        <li>
          <Link href="/services/refrigerator-repair/" className="text-brand-blue hover:underline">
            Refrigerator Repair in San Diego — pricing, common problems, brands
          </Link>
        </li>
        <li>
          <Link href="/services/washer-repair/" className="text-brand-blue hover:underline">
            Washer Repair in San Diego — what we fix, how long it takes
          </Link>
        </li>
        <li>
          <Link href="/services/dishwasher-repair/" className="text-brand-blue hover:underline">
            Dishwasher Repair in San Diego — symptoms, pricing, brands
          </Link>
        </li>
        <li>
          <Link href="/blog/dishwasher-not-draining-san-diego/" className="text-brand-blue hover:underline">
            Dishwasher Not Draining? Here's What to Check First
          </Link>
        </li>
        <li>
          <Link href="/san-diego-appliance-repair/" className="text-brand-blue hover:underline">
            Appliance Repair in San Diego — service area overview
          </Link>
        </li>
        <li>
          <Link href="/contact/" className="text-brand-blue hover:underline">
            Schedule a Repair — (619) 488-4477
          </Link>
        </li>
      </ul>

    </div>
  )
}
