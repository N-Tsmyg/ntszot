import Link from "next/link"
import FAQSection from "@/components/FAQSection"
import MidPageCTA from "@/components/MidPageCTA"
import { DIAGNOSTIC_FEE, WARRANTY_DAYS } from "@/data/constants"

const faqs = [
  {
    question: "How do I know if my appliance is worth repairing?",
    answer: `The standard rule: if the repair cost is under 50% of the replacement price and the appliance is under 10 years old, repair is usually the better financial decision. But age alone doesn't tell the whole story — older appliances built before the mid-2000s often have simpler mechanical designs and heavier components that outlast modern replacements. Our technician will give you an honest assessment after the ${DIAGNOSTIC_FEE} diagnostic.`,
  },
  {
    question: "Are older appliances really built better than new ones?",
    answer: `In many cases, yes — particularly for washers, dryers, and refrigerators made before the mid-2000s. Older units used heavier steel drums, cast-iron components, and simpler motor assemblies with fewer plastic parts. Modern appliances prioritize energy efficiency and features, which adds circuit boards, sensors, and plastic housings that introduce new failure points. A 15-year-old Speed Queen washer with a worn belt is often a better repair candidate than a 3-year-old model with a failed control board.`,
  },
  {
    question: "What appliances are almost always worth repairing?",
    answer: `Washers and dryers under 12 years old, gas ranges and ovens (the mechanical components last decades), and refrigerators under 10 years old are almost always worth repairing if the compressor is still functional. Range hoods and dishwashers are worth repairing when the core motor or pump fails — parts are inexpensive relative to replacement cost. The ${DIAGNOSTIC_FEE} diagnostic fee is waived if we repair it.`,
  },
  {
    question: "When should I replace instead of repair?",
    answer: `Replace when: the repair cost exceeds 50–60% of a new unit's price, the compressor has failed on a refrigerator over 10 years old, multiple components are failing simultaneously, or the appliance uses a refrigerant type that is no longer widely available. Also consider replacement if the unit is a low-end model that was inexpensive when new — repair costs are the same regardless of the appliance's original price.`,
  },
  {
    question: "Does repairing an appliance come with a warranty?",
    answer: `Every repair by WNDW Appliance Repair includes a ${WARRANTY_DAYS}-day parts and labor warranty. If the same problem returns within ${WARRANTY_DAYS} days, our technician comes back at no additional charge.`,
  },
]

export default function RepairVsReplacePost() {
  return (
    <div className="blog-content">

      {/* Quick answer box */}
      <div className="quick-answer not-prose rounded-xl border-l-4 border-brand-red bg-red-50 p-5 mb-8">
        <p className="text-sm font-semibold text-brand-red uppercase tracking-wide mb-1">Quick Answer</p>
        <p className="text-gray-800 text-base leading-relaxed">
          Repair if the cost is under 50% of replacement and the appliance is under 10–12 years old. For{" "}
          <strong>older appliances built before the mid-2000s</strong>, the calculus often favors repair even more — they were built with heavier components, simpler mechanics, and fewer plastic parts that break. A{" "}
          <strong>new appliance is not always an upgrade</strong>.
        </p>
      </div>

      <p>
        Every San Diego homeowner eventually faces this question: the washing machine stops spinning, the refrigerator stops cooling, the oven quits — and you have to decide whether to fix it or replace it. The answer is not always obvious, and appliance retailers have a financial interest in pushing you toward replacement. This post gives you the actual framework our technician uses to answer that question honestly.
      </p>

      <h2>The 50% Rule — And When It Doesn&apos;t Tell the Whole Story</h2>

      <p>
        The standard repair-or-replace guideline: if the repair cost exceeds 50% of what a comparable new appliance costs, lean toward replacement. If it&apos;s under 50%, repair almost always makes financial sense. It&apos;s a reasonable starting point — but it ignores one critical variable: <strong>what you&apos;re replacing it with</strong>.
      </p>

      <p>
        A new mid-range washing machine today costs $700–$1,100 and is built with more plastic components, more circuit boards, and more sensors than the machine it replaces. A $300 repair on a 10-year-old Whirlpool or Speed Queen that still has a steel drum and a simple motor assembly may be a significantly better long-term outcome than buying something new.
      </p>

      <h2>Why Older Appliances Are Often Worth Fighting For</h2>

      <p>
        Appliances manufactured before roughly 2005–2010 were built to a different standard. That&apos;s not nostalgia — it&apos;s mechanics. Here is what changed:
      </p>

      <ul>
        <li>
          <strong>Steel replaced by plastic.</strong> Older washers used cast-iron transmission components and heavy steel drums. Modern units use plastic tubs, plastic pump housings, and plastic gear cases. Plastic degrades, cracks under heat cycles, and warps. Steel wears gradually and can often be serviced.
        </li>
        <li>
          <strong>Simple motors replaced by inverter boards.</strong> A direct-drive motor from a 1990s Whirlpool top-loader is a replaceable, testable component. A failed variable-speed inverter board on a modern front-loader can cost $350–$500 in parts alone — and that&apos;s before labor.
        </li>
        <li>
          <strong>Mechanical timers replaced by control boards.</strong> Older appliances used electromechanical timers that lasted 20+ years. Modern appliances use digital control boards that are vulnerable to power surges, moisture, and simply wearing out. When a control board fails on a 4-year-old appliance, the repair cost can approach replacement cost.
        </li>
        <li>
          <strong>Fewer sensors means fewer failure points.</strong> A modern refrigerator may have 8–12 sensors monitoring temperature, ice production, door status, and humidity. Each one is a potential failure point. A refrigerator from 1998 has a thermostat and a compressor — and if the compressor is still running, that refrigerator can run another decade.
        </li>
      </ul>

      <p>
        This is not an argument against all modern appliances — some brands have improved reliability, and energy efficiency gains are real. But the assumption that newer automatically means better is worth questioning before you spend $1,000 on a replacement.
      </p>

      <MidPageCTA
        heading="Not sure if your appliance is worth repairing?"
        subtext={`${DIAGNOSTIC_FEE} diagnostic fee — waived if we fix it. Honest assessment on every visit. ${WARRANTY_DAYS}-day warranty on every repair.`}
      />

      <h2>Appliance-by-Appliance Breakdown: Repair or Replace?</h2>

      <h3>Washer</h3>
      <p>
        <strong>Repair</strong> if under 12 years old and the failing component is a belt, lid switch, pump, door seal, or motor coupling — all straightforward repairs in the $200–$350 range. <strong>Consider replacement</strong> if the spider arm (the drum support bracket) has cracked on a front-loader, or if the transmission has seized on a top-loader over 15 years old.
      </p>
      <p>
        Older top-load washers with direct-drive motors — particularly Speed Queen and older Whirlpool models — are among the most repair-worthy appliances we work on. The mechanical simplicity means repairs are predictable and parts are available.
      </p>

      <h3>Dryer</h3>
      <p>
        <strong>Repair almost always.</strong> Dryers are mechanically simple — a motor, a heating element or gas burner, a belt, and a drum. There is very little to wear out catastrophically. Heating elements, thermal fuses, drum belts, and rollers are all inexpensive parts with straightforward labor. A dryer that runs but doesn&apos;t heat is almost always a $200–$300 fix. Even a 15-year-old dryer is worth repairing in most cases.
      </p>

      <h3>Refrigerator</h3>
      <p>
        <strong>Repair</strong> if the compressor is functional and the unit is under 10 years old. Most refrigerator failures are caused by a dirty condenser coil, a failed evaporator fan motor, a bad defrost heater, or a clogged defrost drain — all fixable for $200–$400. <strong>Replace</strong> if the compressor has failed and the unit is over 10 years old — compressor replacement on an aging refrigerator rarely makes financial sense.
      </p>
      <p>
        In coastal San Diego neighborhoods like La Jolla, Del Mar, and Ocean Beach, marine layer saltair accelerates corrosion on refrigerator condenser coils. We see coil failures 20–30% more often in homes within a mile of the coast. Annual coil cleaning extends refrigerator life significantly — and is far cheaper than replacement.
      </p>

      <h3>Oven / Range / Stove</h3>
      <p>
        <strong>Repair almost always.</strong> Gas ranges in particular are built to last 20+ years. The mechanical components — igniters, burner valves, oven thermostats — are durable, inexpensive to replace, and widely available for every major brand. Electric ovens have a bake element that burns out every 7–10 years — a $150–$250 repair that adds another decade of life.{" "}
        <Link href="/services/oven-range-stove-repair/" className="text-brand-red hover:underline">
          Oven repair
        </Link>{" "}
        is one of the clearest cases where replacement almost never makes sense.
      </p>

      <h3>Dishwasher</h3>
      <p>
        <strong>Repair</strong> if the pump, spray arms, door latch, or control board has failed on a unit under 8 years old. <strong>Consider replacement</strong> on units over 10 years old when the tub has cracked or the pump motor has seized — at that point, repair cost approaches replacement cost for a comparable unit.
      </p>

      <h2>The Hidden Cost of Replacement</h2>

      <p>
        Replacement has costs that don&apos;t appear on the price tag. Delivery and haul-away fees run $75–$150. Installation, including water line connections and leveling, adds another $100–$200 depending on the appliance. Extended warranties cost $150–$300 for 3–5 years of coverage. And the new appliance requires a break-in period during which defects surface — consumer appliances have the highest failure rate in the first 90 days and after year 5.
      </p>

      <p>
        Add those up on a $900 washing machine and the true replacement cost is $1,100–$1,350 — before you factor in the time to research, purchase, schedule delivery, and be home for the installation window.
      </p>

      <p>
        <strong>There&apos;s also the fit problem.</strong> Appliances built into kitchen cabinetry, laundry closets, or stacked configurations are sized to specific dimensions. Manufacturers change depth, width, and height between generations — sometimes by just an inch or two, sometimes more. A new refrigerator that is 2 inches deeper than the old one sticks out past the cabinet surround. A new dishwasher that is a different height throws off the countertop gap. A new over-the-range microwave with a different mounting depth requires new cabinet modifications. These are real costs that rarely appear in the purchase decision — but add up quickly once a contractor is involved.
      </p>

      <h2>What Our Technician Actually Tells Customers</h2>

      <p>
        WNDW Appliance Repair charges a flat {DIAGNOSTIC_FEE} diagnostic fee for appliance calls throughout San Diego County. After diagnosis, our technician gives you a parts-and-labor quote and an honest recommendation — including when replacement is the better call. The {DIAGNOSTIC_FEE} is waived if you proceed with the repair. Every completed repair carries a {WARRANTY_DAYS}-day parts and labor warranty.
      </p>

      <p>
        If you&apos;re on the fence, the diagnostic visit itself is the right move. You get a professional assessment of exactly what failed, what it costs to fix, and a realistic estimate of remaining useful life — for {DIAGNOSTIC_FEE}. Call{" "}
        <a href="tel:+18582643138" className="text-brand-red hover:underline">(858) 264-3138</a> to schedule, or{" "}
        <Link href="/contact/" className="text-brand-red hover:underline">book online</Link>.
      </p>

      <div className="not-prose">
        <FAQSection faqs={faqs} heading="Repair vs. Replace — FAQ" />
      </div>

      <h2>Related Resources</h2>

      <ul>
        <li>
          <Link href="/services/" className="text-brand-red hover:underline">
            All Appliance Repair Services — San Diego County
          </Link>
        </li>
        <li>
          <Link href="/blog/how-much-does-appliance-repair-cost-in-san-diego/" className="text-brand-red hover:underline">
            How Much Does Appliance Repair Cost in San Diego?
          </Link>
        </li>
        <li>
          <Link href="/blog/dryer-taking-too-long-san-diego/" className="text-brand-red hover:underline">
            Dryer Taking Too Long? Common Causes in San Diego
          </Link>
        </li>
        <li>
          <Link href="/la-jolla-appliance-repair/" className="text-brand-red hover:underline">
            Appliance Repair in La Jolla
          </Link>
        </li>
        <li>
          <Link href="/contact/" className="text-brand-red hover:underline">
            Schedule a Repair — (858) 264-3138
          </Link>
        </li>
      </ul>

    </div>
  )
}
