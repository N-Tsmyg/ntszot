import Link from "next/link"
import FAQSection from "@/components/FAQSection"
import MidPageCTA from "@/components/MidPageCTA"
import { DIAGNOSTIC_FEE, WARRANTY_DAYS } from "@/data/constants"

const faqs = [
  {
    question: "Why is my refrigerator not cooling?",
    answer: `The most common causes are dirty condenser coils, a failed evaporator fan motor, a blocked defrost drain, or a faulty start relay on the compressor. In San Diego, dirty condenser coils from coastal dust and humidity are one of the leading causes — it takes less than 10 minutes to check.`,
  },
  {
    question: "How long can food stay safe in a refrigerator that stopped cooling?",
    answer: `The USDA guideline is 4 hours. If your refrigerator has been above 40°F for more than 4 hours, discard any perishables. A full fridge stays cold longer than a partially stocked one. Use a thermometer — don't rely on feel.`,
  },
  {
    question: "How much does refrigerator repair cost in San Diego?",
    answer: `Refrigerator repair in San Diego typically costs $300–$400 including parts and labor. The range is wide because it depends heavily on the failed component — a fan motor is $150–$250 in parts, a compressor repair runs $650–$1,200. The ${DIAGNOSTIC_FEE} diagnostic fee is waived when you proceed with the repair.`,
  },
  {
    question: "My refrigerator is running but not cooling — is it the compressor?",
    answer: `Not necessarily. A compressor that is running but not cooling can mean a refrigerant issue, but it can also mean a failed condenser fan, dirty coils preventing heat exchange, or a faulty start relay. A technician will test the compressor temperature differential and refrigerant pressure before drawing conclusions about the compressor itself.`,
  },
]

export default function RefrigeratorNotCoolingPost() {
  return (
    <div className="blog-content">

      {/* Quick answer box */}
      <div className="quick-answer not-prose rounded-xl border-l-4 border-brand-blue bg-blue-50 p-5 mb-8">
        <p className="text-sm font-semibold text-brand-blue uppercase tracking-wide mb-1">Quick Answer</p>
        <p className="text-gray-800 text-base leading-relaxed">
          A refrigerator that stops cooling most often has one of four causes: <strong>dirty condenser coils</strong>, a <strong>failed evaporator fan</strong>, a <strong>blocked defrost drain</strong>, or a <strong>faulty compressor start relay</strong>. Check the condenser coils first — in San Diego&apos;s coastal environment, dust and humidity clog them faster than anywhere else in California.
        </p>
      </div>

      <p>
        A refrigerator that stops cooling is a food-safety emergency. You have roughly 4 hours before perishables in the fridge compartment reach unsafe temperatures. This guide walks you through a step-by-step diagnostic sequence — starting with the checks you can do yourself, ending with the repairs that require a technician.
      </p>

      <h2>Step 1: Check the Condenser Coils</h2>

      <p>
        Condenser coils are located either on the back of older refrigerators or beneath the unit behind a toe-kick panel on most modern models. Their job is to release heat from the refrigeration cycle. When they are coated with dust, pet hair, and debris, they cannot dissipate heat — and the refrigerator loses cooling capacity.
      </p>

      <p>
        <strong>Why this matters in San Diego:</strong> Coastal humidity and the fine particulate from marine layer fog cause condenser coils in San Diego homes to accumulate debris faster than in drier inland climates. A refrigerator that runs in La Jolla or Del Mar needs its condenser coils cleaned every 6–12 months. Most homeowners never do this.
      </p>

      <p>
        <strong>How to check:</strong> Unplug the refrigerator. Pull it away from the wall or remove the toe-kick panel. Look at the coils — if they are coated with dust and debris, clean them with a coil cleaning brush or vacuum with a crevice attachment. Plug the refrigerator back in and wait 30–60 minutes to see if cooling resumes.
      </p>

      <h2>Step 2: Listen for the Evaporator Fan</h2>

      <p>
        The evaporator fan is located in the freezer compartment, behind a back panel. It circulates cold air from the evaporator coils into both the freezer and refrigerator sections. If it fails, the freezer may stay somewhat cold while the refrigerator section warms up.
      </p>

      <p>
        <strong>How to check:</strong> Open the freezer and listen. You should hear the fan running when the compressor is running. If the compressor is running but you hear no fan, or if the fan sounds like it is struggling or grinding, the evaporator fan motor has likely failed.
      </p>

      <p>
        Evaporator fan motor replacement is a common same-visit repair — the motor is a standard part that most technicians carry on the service vehicle.
      </p>

      <h2>Step 3: Check for Frost Buildup on the Evaporator Coils</h2>

      <p>
        If the evaporator coils — located behind the freezer back panel — are completely encased in ice, the automatic defrost system has failed. Ice buildup prevents airflow and causes the refrigerator section to warm while the freezer section maintains temperature.
      </p>

      <p>
        <strong>How to check:</strong> Remove the back panel inside the freezer compartment (screws, typically). If you see heavy frost or a solid block of ice over the coils, a defrost component has failed — either the defrost heater, defrost thermostat, or defrost control board.
      </p>

      <p>
        A temporary workaround: unplug the refrigerator and prop open both doors for 24–48 hours to manually defrost the coils. This will restore cooling temporarily but the defrost failure will recur within days. Have the failed component replaced.
      </p>

      <h2>Step 4: Test the Start Relay</h2>

      <p>
        The start relay is a small component that helps start the compressor motor. When it fails, the compressor cannot start — and you may hear a clicking sound every few minutes as the refrigerator attempts and fails to start the compressor.
      </p>

      <p>
        <strong>How to check:</strong> Unplug the refrigerator. Pull the start relay off the side of the compressor (it plugs in). Shake it. If you hear rattling, the relay has failed and needs replacement. Start relays are inexpensive ($10–$30) and straightforward to replace — many homeowners do this themselves. However, if the compressor itself is failing, replacing the relay will not solve the problem.
      </p>

      <h2>Step 5: When the Problem Is the Compressor</h2>

      <p>
        The compressor is the most expensive component in a refrigerator. Signs that the compressor is failing:
      </p>

      <ul>
        <li>Refrigerator is hot to the touch on the back or sides — excessive heat means the compressor is working but inefficient</li>
        <li>Clicking sound followed by silence (compressor starting and shutting off on thermal overload)</li>
        <li>Compressor runs constantly but refrigerator never cools to target temperature</li>
        <li>Refrigerator is completely silent — compressor not running at all</li>
      </ul>

      <p>
        A failed compressor on a refrigerator under 7–8 years old with a repair cost of $650–$1,200 is typically worth fixing when the replacement value of the refrigerator is high. On a refrigerator over 12 years old where the compressor is the cause, replacement may make more economic sense. Your technician will give you an honest assessment after diagnosis.
      </p>

      <MidPageCTA
        heading="Refrigerator stopped cooling? We can be there today."
        subtext={`${DIAGNOSTIC_FEE} diagnostic fee waived if we fix it. ${WARRANTY_DAYS}-day warranty on every repair.`}
      />

      <h2>Food Safety — What to Do Right Now</h2>

      <p>
        While you wait for diagnosis or repair, take these steps to protect your food:
      </p>

      <ul>
        <li><strong>Check the temperature:</strong> The refrigerator should be at or below 40°F. Use a thermometer — don&apos;t rely on feel.</li>
        <li><strong>The 4-hour rule:</strong> Perishables (meat, dairy, cooked food, eggs) that have been above 40°F for more than 4 hours should be discarded.</li>
        <li><strong>Keep the door closed:</strong> Every time you open the door, you lose cold air. Minimize opening while you arrange for repair.</li>
        <li><strong>Use a cooler:</strong> If repair will take more than 4 hours, transfer the most important perishables to a cooler with ice.</li>
      </ul>

      <h2>Common Refrigerator Error Codes for Cooling Failures</h2>

      <ul>
        <li><strong>Samsung RF series — 40 E / 41 E:</strong> Evaporator fan failure</li>
        <li><strong>Samsung — 22 E / 22 C:</strong> Freezer fan motor fault</li>
        <li><strong>LG — Er FF / Er dH:</strong> Evaporator fan or defrost heater failure</li>
        <li><strong>Whirlpool/KitchenAid — E5 / E6:</strong> Temperature sensor fault</li>
        <li><strong>GE — T1, T2, T3:</strong> Temperature sensor or thermistor out of range</li>
      </ul>

      <h2>Why San Diego Refrigerators Lose Cooling More Often</h2>

      <p>
        Two local factors accelerate refrigerator wear in San Diego:
      </p>

      <p>
        <strong>Hard water:</strong> San Diego County water has high mineral content (150–500 ppm total dissolved solids depending on the source). Hard water deposits build up in ice maker components, water inlet valves, and fill tubes — the components most involved in ice maker and water dispenser failures.
      </p>

      <p>
        <strong>Coastal dust and humidity:</strong> The marine layer brings fine particulate and moisture that coats condenser coils faster than in dry inland climates. Coastal neighborhoods (La Jolla, Del Mar, Encinitas, Carlsbad) see this most acutely. If your refrigerator is in a kitchen that gets morning marine layer humidity, plan to clean the condenser coils every 6 months.
      </p>

      <div className="not-prose">
        <FAQSection faqs={faqs} heading="Refrigerator Not Cooling — FAQ" />
      </div>

      <h2>Related Resources</h2>

      <ul>
        <li>
          <Link href="/services/refrigerator-repair/" className="text-brand-blue hover:underline">
            Refrigerator Repair in San Diego — service page, pricing, brands
          </Link>
        </li>
        <li>
          <Link href="/services/freezer-repair/" className="text-brand-blue hover:underline">
            Freezer Repair in San Diego
          </Link>
        </li>
        <li>
          <Link href="/services/ice-maker-repair/" className="text-brand-blue hover:underline">
            Ice Maker Repair in San Diego
          </Link>
        </li>
        <li>
          <Link href="/blog/how-much-does-appliance-repair-cost-in-san-diego/" className="text-brand-blue hover:underline">
            How Much Does Appliance Repair Cost in San Diego?
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
