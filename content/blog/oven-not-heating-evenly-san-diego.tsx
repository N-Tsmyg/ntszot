import Link from "next/link"
import FAQSection from "@/components/FAQSection"
import MidPageCTA from "@/components/MidPageCTA"
import { DIAGNOSTIC_FEE, WARRANTY_DAYS } from "@/data/constants"

const faqs = [
  {
    question: "Why is my oven not heating evenly?",
    answer: `Uneven oven heating is most often caused by a partially failed bake element (electric ovens) or a weak igniter (gas ovens). A miscalibrated thermostat, failed broil element, or broken temperature sensor can also cause hot and cold spots. The ${DIAGNOSTIC_FEE} diagnostic fee is waived if we repair it — our technician can pinpoint the cause in a single visit.`,
  },
  {
    question: "How do I test if my oven is heating evenly?",
    answer: `Place a sheet of white bread on the center rack and bake at 350°F for 3–4 minutes. Pull it out and compare browning. Even toasting means even heat. Dark spots or pale patches tell you exactly where the hot and cold zones are. If one side is consistently darker, the bake element or a heating relay on that side may have partially failed.`,
  },
  {
    question: "How much does oven repair cost in San Diego?",
    answer: `Oven repair in San Diego typically costs $300–$400 for most failures — bake element replacement, igniter replacement, or thermostat recalibration. The ${DIAGNOSTIC_FEE} diagnostic fee is waived if you approve the repair. Every completed repair includes a ${WARRANTY_DAYS}-day warranty on parts and labor.`,
  },
  {
    question: "Can I still use my oven if it's not heating evenly?",
    answer: `You can, but with caveats. Move racks to the center, rotate dishes halfway through cooking, and avoid baking anything that requires precise, consistent heat — bread, soufflés, delicate pastries. Running the oven on a failing element or igniter accelerates wear and can lead to complete failure. Get it diagnosed before it becomes a more expensive repair.`,
  },
  {
    question: "Is oven repair worth it, or should I replace it?",
    answer: `If the oven is under 15 years old and the repair cost is under half the replacement cost, repair almost always makes more sense. Bake elements, igniters, and temperature sensors are common, cost-effective repairs. If the control board has failed on an older unit, the calculus changes — our technician will give you an honest cost-to-replace comparison before any work begins.`,
  },
]

export default function OvenNotHeatingEvenlyPost() {
  return (
    <div className="blog-content">

      {/* Quick answer box */}
      <div className="quick-answer not-prose rounded-xl border-l-4 border-brand-blue bg-blue-50 p-5 mb-8">
        <p className="text-sm font-semibold text-brand-blue uppercase tracking-wide mb-1">Quick Answer</p>
        <p className="text-gray-800 text-base leading-relaxed">
          An oven that doesn&apos;t heat evenly is almost always caused by a <strong>partially failed bake element</strong> (electric) or a <strong>weak igniter</strong> (gas). A faulty temperature sensor or a miscalibrated thermostat can also produce hot and cold spots. In most cases, our technician can diagnose and repair the problem in a single visit anywhere in San Diego County.
        </p>
      </div>

      <p>
        An oven that runs 50 degrees low on one side and 50 degrees high on the other is not a minor inconvenience — it ruins baked goods, undercooks proteins, and makes consistent cooking nearly impossible. Uneven oven heating is one of the more common oven repair calls we handle across San Diego County, and it almost always has a clear mechanical cause that can be fixed.
      </p>

      <p>
        This guide covers every common cause of uneven oven heating — in the order our technician checks them — along with typical repair costs and when a call to a professional makes sense.
      </p>

      <h2>Cause 1: Partially Failed Bake Element (Electric Ovens)</h2>

      <p>
        The bake element is the coiled heating element at the bottom of an electric oven. When it partially fails — one section of the coil burns out — the oven still heats but unevenly. You may see a dark spot or visible break in the element coil, or the element may look intact but test open on a multimeter.
      </p>

      <p>
        <strong>What you will notice:</strong> Food burns on one side or cooks faster near the back. The oven may reach temperature (the preheat indicator turns off) but cooking results are inconsistent. A bake element replacement is one of the most cost-effective oven repairs — typically within the $300–$400 range including parts and labor.
      </p>

      <h2>Cause 2: Failed Broil Element (Electric Ovens)</h2>

      <p>
        Most electric ovens use the broil element (top coil) to assist with even baking — it cycles on during a bake cycle to prevent the bottom of your food from overcooking while the top stays raw. When the broil element fails, baking is affected even though you never use the broil setting.
      </p>

      <p>
        If your oven browns the bottom of food before the top is cooked through, a failed broil element is a likely culprit. Our technician tests both elements during the diagnostic visit and replaces whichever has failed.
      </p>

      <h2>Cause 3: Weak or Failing Gas Igniter (Gas Ovens)</h2>

      <p>
        Gas ovens use a glow-bar igniter to open the gas valve and light the burner. When the igniter weakens, it takes longer to reach the temperature needed to open the gas valve — and may not stay hot enough to keep the burner lit consistently. The result is a burner that cycles on and off erratically, producing hot and cold spots throughout the oven.
      </p>

      <p>
        You can often hear this problem: the oven may take longer than usual to preheat, or you will notice the burner clicking or relighting partway through a cooking cycle. Gas igniter replacement is one of the more common oven repairs we perform throughout San Diego County, particularly on Samsung, LG, and Whirlpool ranges.
      </p>

      <MidPageCTA
        heading="Oven heating unevenly? We can diagnose it today."
        subtext={`${DIAGNOSTIC_FEE} diagnostic fee waived if we fix it. ${WARRANTY_DAYS}-day warranty on every repair.`}
      />

      <h2>Cause 4: Faulty Temperature Sensor</h2>

      <p>
        The temperature sensor monitors the actual air temperature inside the oven and signals the control board to cycle the heating element or burner on and off. A sensor that reads high tells the control board the oven is hotter than it actually is — the board cuts heat too soon, leaving cold zones. A sensor reading low does the opposite.
      </p>

      <p>
        <strong>How to check:</strong> Set the oven to 350°F, wait 20 minutes after preheat, and measure the actual temperature with an oven thermometer on the center rack. If the reading is more than 25°F off, the sensor or thermostat needs attention. A ${DIAGNOSTIC_FEE} service call covers testing the sensor resistance against manufacturer specs.
      </p>

      <h2>Cause 5: Miscalibrated Thermostat</h2>

      <p>
        Most modern ovens allow thermostat calibration adjustments through the control panel — typically ±35°F in 5-degree increments. If your oven consistently runs hot or cold by a fixed amount (the same number of degrees off across all temperature settings), the thermostat may simply need recalibration rather than replacement.
      </p>

      <p>
        Check your oven&apos;s manual for the calibration procedure. If the oven runs unevenly — hot in some spots and cold in others — calibration will not fix it. That is a component failure, not a calibration issue.
      </p>

      <h2>Cause 6: Control Board Failure</h2>

      <p>
        The control board manages heating cycles, temperature regulation, and timing. When specific relays on the board fail, the oven may heat inconsistently — running full power for a while, then dropping out unexpectedly. Control board failure typically causes multiple symptoms beyond uneven heat: error codes, non-responsive controls, or erratic behavior across cycles.
      </p>

      <p>
        Control board replacement is more expensive than element or sensor replacement. Our technician will confirm the board is the source before recommending it — and will give you an honest comparison of repair cost versus replacement cost for your specific appliance before any work begins.
      </p>

      <h2>San Diego Kitchen Conditions That Affect Oven Performance</h2>

      <p>
        Coastal marine layer humidity affects more than outdoor air. In neighborhoods close to the water — La Jolla, Ocean Beach, Del Mar — the moisture in the air can accelerate corrosion on oven heating elements and burner assemblies. We see bake element failures and corroded gas valve components more frequently in coastal homes than in inland areas like Escondido or El Cajon.
      </p>

      <p>
        Santa Ana wind events also push fine dust into kitchens, clogging convection fan motors in convection ovens and depositing debris on burner ports in gas ranges. If your oven has a convection setting and heating became uneven after a Santa Ana period, the convection fan may be partially obstructed.
      </p>

      <h2>What Oven Repair Typically Costs in San Diego</h2>

      <ul>
        <li><strong>Bake element replacement:</strong> $300–$400 including parts and labor</li>
        <li><strong>Broil element replacement:</strong> $250–$320 including parts and labor</li>
        <li><strong>Gas igniter replacement:</strong> $250–$340 including parts and labor</li>
        <li><strong>Temperature sensor replacement:</strong> $220–$300 including parts and labor</li>
        <li><strong>Control board replacement:</strong> $300–$500+ depending on brand and model</li>
      </ul>

      <p>
        The {DIAGNOSTIC_FEE} diagnostic fee is waived completely if you approve the repair. Every completed repair includes a {WARRANTY_DAYS}-day warranty on parts and labor. Our technician carries commonly stocked parts for major brands — Samsung, LG, GE, Whirlpool, Bosch, KitchenAid — and can often complete the repair in the same visit as the diagnostic.
      </p>

      <p>
        To schedule a service call anywhere in San Diego County, call <a href="tel:+16194884477" className="text-brand-blue hover:underline">(619) 488-4477</a>. We are available Monday through Saturday 7:00 AM–11:00 PM and Sunday 8:00 AM–10:00 PM.
      </p>

      <div className="not-prose">
        <FAQSection faqs={faqs} heading="Oven Not Heating Evenly — FAQ" />
      </div>

      <h2>Related Resources</h2>

      <ul>
        <li>
          <Link href="/services/oven-range-stove-repair/" className="text-brand-blue hover:underline">
            Oven, Range & Stove Repair in San Diego — full service page
          </Link>
        </li>
        <li>
          <Link href="/services/oven-range-stove-repair/not-heating-repair/" className="text-brand-blue hover:underline">
            Oven Not Heating Repair — component-level repair page
          </Link>
        </li>
        <li>
          <Link href="/services/oven-range-stove-repair/igniter-replacement/" className="text-brand-blue hover:underline">
            Gas Oven Igniter Replacement in San Diego
          </Link>
        </li>
        <li>
          <Link href="/blog/repair-vs-replace-appliance-san-diego/" className="text-brand-blue hover:underline">
            Repair vs. Replace: When to Fix a Broken Appliance in San Diego
          </Link>
        </li>
        <li>
          <Link href="/blog/how-much-does-appliance-repair-cost-in-san-diego/" className="text-brand-blue hover:underline">
            How Much Does Appliance Repair Cost in San Diego?
          </Link>
        </li>
        <li>
          <Link href="/la-jolla-appliance-repair/" className="text-brand-blue hover:underline">
            Appliance Repair in La Jolla
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
