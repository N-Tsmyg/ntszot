import Link from "next/link"
import FAQSection from "@/components/FAQSection"
import MidPageCTA from "@/components/MidPageCTA"
import { DIAGNOSTIC_FEE, WARRANTY_DAYS } from "@/data/constants"

const faqs = [
  {
    question: "Why is my dishwasher not draining?",
    answer: `The four most common causes are: (1) a clogged dishwasher filter, (2) a blocked or kinked drain hose, (3) a failed drain pump, or (4) a garbage disposal knockout plug that was never removed at installation. Start by checking the filter — it is the most common and easiest fix.`,
  },
  {
    question: "Can I fix a dishwasher that won't drain myself?",
    answer: `Cleaning the filter and checking the drain hose connection are DIY-accessible fixes. Replacing the drain pump or diagnosing a control board issue requires disassembly and component testing — that is where a technician adds value. The ${DIAGNOSTIC_FEE} diagnostic fee is waived if we repair it.`,
  },
  {
    question: "How much does it cost to fix a dishwasher that won't drain in San Diego?",
    answer: `Dishwasher repair in San Diego typically costs $300–$400 including parts and labor. A drain pump replacement is the most common fix for persistent draining failures. The ${DIAGNOSTIC_FEE} diagnostic fee is waived if you proceed with the repair.`,
  },
  {
    question: "My dishwasher drains sometimes but not always — what causes that?",
    answer: `Intermittent draining usually points to a partially clogged filter or a drain pump that is starting to fail. The pump motor may work under light load but stall under heavier debris. This is a progressive failure — it will become consistent over time. Have it diagnosed before it stops draining entirely.`,
  },
]

export default function DishwasherNotDrainingPost() {
  return (
    <div className="blog-content">

      {/* Quick answer box */}
      <div className="quick-answer not-prose rounded-xl border-l-4 border-brand-blue bg-blue-50 p-5 mb-8">
        <p className="text-sm font-semibold text-brand-blue uppercase tracking-wide mb-1">Quick Answer</p>
        <p className="text-gray-800 text-base leading-relaxed">
          A dishwasher that won&apos;t drain is almost always caused by one of four things: a <strong>clogged filter</strong>, a <strong>blocked drain hose</strong>, a <strong>failed drain pump</strong>, or a <strong>garbage disposal knockout plug</strong> that was never removed. Start with the filter — it takes 5 minutes and solves the problem in many cases.
        </p>
      </div>

      <p>
        Standing water at the bottom of your dishwasher after a cycle is one of the most common appliance calls we receive in San Diego. The good news: most drainage failures have a clear cause and a straightforward fix. This guide walks through each cause in diagnosis order — start with the easiest check and work toward the more complex.
      </p>

      <h2>Step 1: Check the Dishwasher Filter</h2>

      <p>
        The dishwasher filter sits at the bottom of the tub, usually in the center or lower rear. It catches food debris and prevents it from recirculating — but if you do not clean it regularly, it clogs and blocks drainage.
      </p>

      <p>
        <strong>How to check it:</strong> Remove the lower rack. Locate the filter assembly — most models have a cylindrical filter that twists out. Remove it and rinse under running water. If it is visibly clogged with grease or food, clean it thoroughly with a soft brush and dish soap, reinstall, and run a short drain cycle.
      </p>

      <p>
        San Diego&apos;s hard water (300+ ppm across most of the county) leaves mineral deposits on dishwasher filters faster than soft-water areas. This problem is especially pronounced in inland neighborhoods — El Cajon, Santee, La Mesa, and Lemon Grove — where water hardness runs highest. Coastal areas like La Jolla and Del Mar see the same filter buildup accelerated by marine layer humidity. If you have not cleaned your filter in 6+ months, this is the most likely cause of your drainage failure.
      </p>

      <h2>Step 2: Inspect the Drain Hose</h2>

      <p>
        The drain hose connects the dishwasher pump to either the garbage disposal or the sink drain. Two common problems:
      </p>

      <ul>
        <li>
          <strong>Kink or blockage:</strong> Pull the dishwasher slightly forward (unplug it first) and inspect the hose behind or below the unit. A kinked hose restricts drainage partially or completely.
        </li>
        <li>
          <strong>Improper installation height:</strong> The drain hose must loop up to the cabinet underside before descending to the disposal or drain. Without this high loop, water can siphon back into the dishwasher after the cycle ends, leaving standing water.
        </li>
      </ul>

      <h2>Step 3: Check the Garbage Disposal Connection</h2>

      <p>
        If your dishwasher was recently installed or if the garbage disposal was recently replaced, check one thing: the knockout plug.
      </p>

      <p>
        New garbage disposals come with a plastic knockout plug inside the dishwasher drain inlet. If the installer did not remove it, your dishwasher cannot drain into the disposal. This is a surprisingly common oversight. The fix is simple — remove the plug with a screwdriver and a hammer, clear the plug from the disposal, and reinstall the drain hose.
      </p>

      <h2>Step 4: Test the Drain Pump</h2>

      <p>
        If the filter is clean, the hose is clear, and the disposal connection is correct, the drain pump is the likely culprit. The drain pump is a small motor that forces water out of the tub and through the drain hose. When it fails:
      </p>

      <ul>
        <li>You may hear a humming sound at the end of the cycle but no water movement — the motor is running but the impeller is blocked or the motor is seizing.</li>
        <li>You may hear nothing at all — the pump motor has failed electrically.</li>
      </ul>

      <p>
        Drain pump replacement requires removing the dishwasher, accessing the pump assembly from below or from inside the tub, and testing the motor with a multimeter. This is the most common repair we perform for San Diego dishwashers that won&apos;t drain — parts and labor typically fall in the $300–$400 range.
      </p>

      <h2>Step 5: Consider a Control Board or Timer Issue</h2>

      <p>
        If the pump tests good but the dishwasher still doesn&apos;t drain, the control board may not be sending the signal to start the drain cycle. This is less common but occurs in older models and in some Samsung and Bosch units after a power surge. A control board failure typically causes multiple symptoms beyond just the drain issue.
      </p>

      <MidPageCTA
        heading="Dishwasher still not draining? We can be there today."
        subtext={`${DIAGNOSTIC_FEE} diagnostic fee waived if we fix it. ${WARRANTY_DAYS}-day warranty on every repair.`}
      />

      <h2>When to Call a Technician</h2>

      <p>
        Call a technician when:
      </p>

      <ul>
        <li>You have cleaned the filter, confirmed the drain hose is clear, and the dishwasher still leaves standing water after a full cycle.</li>
        <li>You hear the drain pump running but water is not moving.</li>
        <li>Your dishwasher is displaying an error code (Bosch E24, Samsung 5C/OC, LG OE) — these error codes confirm a drainage failure that requires component diagnosis.</li>
        <li>The problem is intermittent and getting worse — a pump that is starting to fail will become a fully failed pump.</li>
      </ul>

      <p>
        NTSZOT Appliance Repair charges a flat {DIAGNOSTIC_FEE} diagnostic fee for dishwasher calls in San Diego. If we diagnose the problem and you approve the repair, the {DIAGNOSTIC_FEE} is waived. Every completed repair carries a {WARRANTY_DAYS}-day parts and labor warranty.
      </p>

      <h2>Common Error Codes for Dishwasher Draining Failures</h2>

      <ul>
        <li><strong>Bosch E24 / E25:</strong> Drain blockage detected. E24 = drain blocked, E25 = drain pump issue.</li>
        <li><strong>Samsung 5C / OC / SC:</strong> Draining error — check filter and drain hose first.</li>
        <li><strong>LG OE:</strong> Drainage error — pump or drain path obstruction.</li>
        <li><strong>Whirlpool F8 E4 / F9 E1:</strong> Drain motor failure or slow drain detected.</li>
        <li><strong>Miele F11:</strong> Water intake/drainage fault — requires technician diagnosis.</li>
      </ul>

      <div className="not-prose">
        <FAQSection faqs={faqs} heading="Dishwasher Not Draining — FAQ" />
      </div>

      <h2>Related Resources</h2>

      <ul>
        <li>
          <Link href="/services/dishwasher-repair/" className="text-brand-blue hover:underline">
            Dishwasher Repair in San Diego — full service page
          </Link>
        </li>
        <li>
          <Link href="/brands/bosch-appliance-repair-san-diego/" className="text-brand-blue hover:underline">
            Bosch Appliance Repair in San Diego
          </Link>
        </li>
        <li>
          <Link href="/brands/samsung-appliance-repair-san-diego/" className="text-brand-blue hover:underline">
            Samsung Appliance Repair in San Diego
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
