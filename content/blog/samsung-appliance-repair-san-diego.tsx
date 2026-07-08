import Link from "next/link"
import FAQSection from "@/components/FAQSection"
import MidPageCTA from "@/components/MidPageCTA"
import { DIAGNOSTIC_FEE, WARRANTY_DAYS } from "@/data/constants"

const faqs = [
  {
    question: "How much does Samsung appliance repair cost in San Diego?",
    answer: `Most Samsung washer, dryer, dishwasher, and oven repairs fall between $250–$350 including parts and labor. Samsung refrigerator repairs typically run $350–$900 depending on the component — compressors and ice maker assemblies are at the higher end. The ${DIAGNOSTIC_FEE} diagnostic fee is waived completely when you proceed with the repair.`,
  },
  {
    question: "What does Samsung error code 5E or SE mean on my washer?",
    answer: `5E (sometimes displayed as SE on older models) means the washer can't drain. The most common cause is a clogged pump filter — usually lint, a sock, or coins blocking the drain. Check and clear the filter first. If the washer still won't drain, the drain pump may need replacement. Call (619) 488-4477 to schedule a same-visit diagnosis.`,
  },
  {
    question: "Why does my Samsung refrigerator keep displaying an error code?",
    answer: `Samsung refrigerators display error codes when a sensor, fan, or component reports an out-of-range reading. Common codes: 1E or SE (ice maker sensor), 8E or 6E (ice maker issue), OF OF or O FF (demo mode accidentally activated — hold both door alarm buttons for 3 seconds to clear). Persistent codes after a reset usually mean a failed component. Our technician can diagnose which part needs replacement on the same visit.`,
  },
  {
    question: "Does NTSZOT repair Samsung refrigerators with the known ice maker problems?",
    answer: `Yes. Samsung ice maker failures — particularly on French door models from 2014–2019 — are among the most common repairs we handle. The ice maker assembly, evaporator cover, and drain tube are the usual failure points. Most of these are completed in a single visit with commonly stocked parts.`,
  },
  {
    question: "Is Samsung appliance repair covered under warranty?",
    answer: `If your Samsung appliance is within its manufacturer warranty period, contact Samsung directly — they will dispatch an authorized repair service at no cost. Once the manufacturer warranty has expired, NTSZOT handles all Samsung repairs. Every completed repair comes with a ${WARRANTY_DAYS}-day parts and labor warranty from us.`,
  },
  {
    question: "How quickly can you come out to repair my Samsung appliance?",
    answer: `In most cases our technician can arrive same day. We're available Mon–Sat 7:00 AM–11:00 PM and Sun 8:00 AM–10:00 PM. Call (619) 488-4477 to confirm availability for your area.`,
  },
]

export default function SamsungApplianceRepairPost() {
  return (
    <div className="blog-content">

      {/* Quick answer box */}
      <div className="quick-answer not-prose rounded-xl border-l-4 border-brand-blue bg-blue-50 p-5 mb-8">
        <p className="text-sm font-semibold text-brand-blue uppercase tracking-wide mb-1">Quick Answer</p>
        <p className="text-gray-800 text-base leading-relaxed">
          NTSZOT Appliance Repair services all Samsung appliances in San Diego County — refrigerators, washers, dryers, dishwashers, and ovens. The most common Samsung problems we fix are ice maker failures, drain errors (5E/SE), and refrigerators not cooling. The {DIAGNOSTIC_FEE} diagnostic fee is waived if we repair it, and every completed repair is backed by a {WARRANTY_DAYS}-day parts and labor warranty.
        </p>
      </div>

      <p>
        Samsung is one of the most popular appliance brands in San Diego — and one of the most frequently repaired. Their refrigerators, washers, and dishwashers are in thousands of homes across the county, and when one stops working, homeowners often run into a confusing error code and no clear next step. This post covers the most common Samsung appliance problems we see, what they mean, and what the repair typically costs.
      </p>

      <p>
        If you need Samsung appliance repair in San Diego today, call <strong>(619) 488-4477</strong>. In most cases our technician can arrive same day.
      </p>

      <h2>Samsung Refrigerator Problems — What We See Most</h2>

      <p>
        Samsung refrigerators are reliable when maintained, but a few specific failure points come up again and again — especially on French door and four-door models made between 2014 and 2021.
      </p>

      <h3>Ice Maker Not Making Ice</h3>
      <p>
        This is the single most common Samsung refrigerator complaint we get. On French door models, the ice maker sits behind the freezer door above the upper basket. Over time, the evaporator coils frost over, blocking airflow to the ice maker. The ice maker stops producing, and you may notice a loud cracking sound as the ice melts and refreezes.
      </p>
      <p>
        The fix typically involves replacing the ice maker assembly and defrost drain tube with updated parts. In coastal areas like La Jolla and Del Mar, saltair accelerates corrosion on the drain tube, making these failures more common. Most ice maker repairs run $350–$500 on Samsung French door models.
      </p>

      <h3>Samsung Refrigerator Not Cooling</h3>
      <p>
        When a Samsung fridge runs but isn&apos;t cooling, the usual culprits are a failed evaporator fan motor, a dirty condenser coil, or a faulty thermistor. You may notice the freezer still works but the fridge section is warm — that&apos;s a strong indicator of a failed evaporator fan or a defrost system issue. Read more in our guide to{" "}
        <Link href="/blog/refrigerator-not-cooling-san-diego/">refrigerators not cooling in San Diego</Link>.
      </p>

      <h3>Samsung Refrigerator Error Codes</h3>
      <p>
        Samsung displays error codes when a sensor or component reports a problem. The most common:
      </p>
      <ul>
        <li><strong>1E / SE</strong> — Ice maker sensor failure. Requires sensor or ice maker assembly replacement.</li>
        <li><strong>8E / 6E</strong> — Ice maker error. Often the ice maker motor or assembly.</li>
        <li><strong>OF OF / O FF</strong> — Demo mode is active. Hold both door alarm buttons for 3 seconds to clear. If it comes back, there may be a control board issue.</li>
        <li><strong>PC ER</strong> — Door-in-door panel communication error. Usually a wiring harness or control board issue.</li>
        <li><strong>88 88 or all dashes</strong> — Control board error or power surge reset. Try unplugging for 5 minutes. Persistent = control board replacement.</li>
      </ul>

      <MidPageCTA />

      <h2>Samsung Washer Error Codes and What They Mean</h2>

      <p>
        Samsung washers show alphanumeric error codes when something goes wrong. Here are the ones we diagnose most often in San Diego:
      </p>

      <ul>
        <li><strong>5E / SE</strong> — Drain error. The washer can&apos;t pump out water. Check the pump filter first (bottom front panel). If the filter is clear, the drain pump likely needs replacement.</li>
        <li><strong>UE / U6</strong> — Unbalanced load. Redistribute the laundry and run again. If it persists on balanced loads, the suspension rods or shock absorbers may be worn.</li>
        <li><strong>dC / dE / dE1 / dE2</strong> — Door error. The door isn&apos;t latching properly. The door latch or lock mechanism usually needs replacement.</li>
        <li><strong>nd</strong> — No drain. Similar to 5E — the washer timed out trying to drain. Pump filter or drain pump.</li>
        <li><strong>nF / 4E / 4C</strong> — No fill / water supply error. Check that water supply valves are open. If they are, the inlet valve may be faulty.</li>
        <li><strong>Sud / 5ud</strong> — Too many suds. Use less detergent, or switch to HE (high-efficiency) detergent. San Diego&apos;s hard water (300+ ppm) causes more detergent to clump, making oversudsing more common.</li>
      </ul>

      <p>
        For a broader look at washer warning signs, see our post on{" "}
        <Link href="/blog/washer-needs-repair-signs-san-diego/">5 signs your washer needs repair</Link>.
      </p>

      <h2>Samsung Dryer Problems</h2>

      <p>
        Samsung dryers are generally reliable, but a few issues come up regularly.
      </p>

      <ul>
        <li><strong>Not heating</strong> — On electric models, the heating element burns out. On gas models, the igniter or gas valve coils fail. This is a very common repair across all dryer brands.</li>
        <li><strong>tO / t0 error</strong> — Thermistor (temperature sensor) failure. The dryer can&apos;t read its own temperature and shuts down as a safety measure.</li>
        <li><strong>Taking too long to dry</strong> — Usually a clogged dryer vent or a worn felt seal letting heat escape. Canyon breeze in hillside areas like Scripps Ranch and Rancho Bernardo accelerates lint accumulation in dryer vents — homes there need vent cleaning more frequently. See our guide to{" "}
        <Link href="/blog/dryer-taking-too-long-san-diego/">dryers taking too long in San Diego</Link>.</li>
        <li><strong>HC error</strong> — High temperature warning. Blocked exhaust vent is the most common cause. Clear the vent before calling for service.</li>
      </ul>

      <h2>Samsung Dishwasher Error Codes</h2>

      <p>Samsung dishwashers are dependable but have a few known weak points:</p>

      <ul>
        <li><strong>5C / 5E / SC / SE</strong> — Drain error. The dishwasher can&apos;t pump out water. Usually a clogged drain filter or a failed drain pump.</li>
        <li><strong>OC / 0C / oE</strong> — Overflow / water level error. The float switch may be stuck, or the water inlet valve is staying open too long.</li>
        <li><strong>LC / LE</strong> — Leak detected. The flood sensor at the bottom of the tub has been triggered. Inspect the door gasket and hose connections before running again.</li>
        <li><strong>HE / tE</strong> — Heating error. The thermistor or heating element needs replacement.</li>
      </ul>

      <p>
        Samsung dishwashers are also affected by San Diego&apos;s hard water (300+ ppm calcium and magnesium). Scale buildup clogs the spray arms and blocks the drain filter over time. Running a monthly cycle with a dishwasher cleaner tablet slows this down significantly.
      </p>

      <h2>How Much Does Samsung Appliance Repair Cost in San Diego?</h2>

      <p>
        Repair costs vary by appliance type and the specific component that failed:
      </p>

      <ul>
        <li><strong>Samsung washer repair</strong> — $250–$350 for most repairs (drain pump, door latch, suspension rods)</li>
        <li><strong>Samsung dryer repair</strong> — $250–$350 (heating element, thermistor, drum belt)</li>
        <li><strong>Samsung dishwasher repair</strong> — $250–$350 (drain pump, inlet valve, door latch)</li>
        <li><strong>Samsung refrigerator repair</strong> — $350–$900 (ice maker assembly $350–$500; compressor $600–$900; fan motor $350–$450)</li>
      </ul>

      <p>
        The {DIAGNOSTIC_FEE} diagnostic fee is waived completely when you proceed with the repair — you pay only for parts and labor. Every completed repair comes with a {WARRANTY_DAYS}-day parts and labor warranty. If the same problem returns within {WARRANTY_DAYS} days, we come back at no charge.
      </p>

      <p>
        For more on how to evaluate repair costs, see our guide on{" "}
        <Link href="/blog/repair-vs-replace-appliance-san-diego/">when to repair vs. replace an appliance</Link>.
      </p>

      <h2>Book Samsung Appliance Repair in San Diego</h2>

      <p>
        NTSZOT Appliance Repair services all Samsung appliances across{" "}
        <Link href="/san-diego-appliance-repair/">San Diego County</Link> — refrigerators, washers, dryers, dishwashers, ovens, and microwaves. Our technician arrives with commonly stocked parts for Samsung models, so most repairs are completed in a single visit.
      </p>

      <p>
        Call <strong>(619) 488-4477</strong> or visit our{" "}
        <Link href="/contact/">contact page</Link> to schedule. We&apos;re available Mon–Sat 7:00 AM–11:00 PM and Sun 8:00 AM–10:00 PM, 6 days a week.
      </p>

      <p>
        See all Samsung services on our{" "}
        <Link href="/brands/samsung-appliance-repair-san-diego/">Samsung appliance repair page</Link>.
      </p>

      <FAQSection faqs={faqs} heading="Samsung Appliance Repair San Diego — FAQ" />
    </div>
  )
}
