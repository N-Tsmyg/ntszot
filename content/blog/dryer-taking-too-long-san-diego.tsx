import Link from "next/link"
import FAQSection from "@/components/FAQSection"
import MidPageCTA from "@/components/MidPageCTA"
import { DIAGNOSTIC_FEE, WARRANTY_DAYS } from "@/data/constants"

const faqs = [
  {
    question: "Why is my dryer taking so long to dry clothes?",
    answer: `The most common cause is restricted airflow — either a clogged lint screen, a blocked exhaust duct, or both. When hot, moist air can't escape the drum, drying efficiency drops and clothes need multiple cycles. A failed heating element or thermal fuse can also reduce heat output. The ${DIAGNOSTIC_FEE} diagnostic fee is waived if we repair it.`,
  },
  {
    question: "How do I know if my dryer vent is clogged?",
    answer: `Three signs: (1) clothes are still damp after a full cycle, (2) the dryer feels unusually hot to the touch on the outside, or (3) you notice a burning smell during operation. You can also go outside during a dryer cycle and check the vent exhaust — airflow should be strong and steady. Weak or no airflow means a blockage.`,
  },
  {
    question: "Is a dryer that takes too long a fire hazard?",
    answer: `Yes. Lint buildup in a clogged vent is one of the leading causes of house fires in the U.S. When the vent is blocked, the dryer runs hotter than it should and lint inside the duct can ignite. If your dryer is taking two or more cycles to dry a normal load, have it inspected — don't continue running it.`,
  },
  {
    question: "How much does dryer repair cost in San Diego?",
    answer: `Dryer repair in San Diego typically costs $250–$350 including parts and labor, depending on the component that failed. Heating element replacement and thermal fuse replacement are common fixes in that range. The ${DIAGNOSTIC_FEE} diagnostic fee is waived if you proceed with the repair. Every repair includes a ${WARRANTY_DAYS}-day warranty on parts and labor.`,
  },
  {
    question: "Should I repair my dryer or replace it?",
    answer: `If the dryer is under 10 years old and the repair cost is under half the price of a new unit, repair almost always makes more sense. Heating elements, thermal fuses, and drum belts are all straightforward repairs. If the motor or control board has failed on a dryer over 12 years old, replacement may be the better call — our technician will give you an honest assessment.`,
  },
]

export default function DryerTakingTooLongPost() {
  return (
    <div className="blog-content">

      {/* Quick answer box */}
      <div className="quick-answer not-prose rounded-xl border-l-4 border-brand-red bg-red-50 p-5 mb-8">
        <p className="text-sm font-semibold text-brand-red uppercase tracking-wide mb-1">Quick Answer</p>
        <p className="text-gray-800 text-base leading-relaxed">
          A dryer that takes too long is almost always caused by <strong>restricted airflow</strong> — a clogged lint screen, a blocked exhaust duct, or both. The second most common cause is a <strong>failed heating element or thermal fuse</strong> that reduces heat output. Start by cleaning the lint screen and checking your exhaust vent before calling a technician.
        </p>
      </div>

      <p>
        If your dryer is taking two cycles — or more — to dry a normal load, something is wrong. A properly functioning dryer should dry a standard load of laundry in 45–60 minutes. When that stretches to 90 minutes or requires a second run, you are wasting electricity and putting stress on components that will eventually fail completely. This guide covers every common cause of a slow dryer, in the order our technician checks them.
      </p>

      <p>
        This is one of the most common dryer repair calls we handle across San Diego County. In hillside neighborhoods — Tierrasanta, Mission Hills, Allied Gardens — canyon breezes push extra dust and debris into dryer vents, accelerating lint buildup faster than homeowners expect.
      </p>

      <h2>Cause 1: Clogged Lint Screen</h2>

      <p>
        The lint screen is the first thing to check — and the most frequently overlooked. A lint screen that is only partially clogged still allows the dryer to run, but airflow is reduced enough to add 20–30 minutes to every cycle. If you use dryer sheets, a waxy residue builds up on the mesh over time that is invisible but significantly reduces airflow.
      </p>

      <p>
        <strong>Fix it yourself:</strong> Remove the lint screen and hold it under running water. If water pools on the mesh instead of flowing through, scrub it with a soft brush and dish soap. Let it dry completely before reinstalling. Do this monthly.
      </p>

      <h2>Cause 2: Blocked Exhaust Duct</h2>

      <p>
        The exhaust duct carries hot, moist air from the dryer drum to the outside of your home. When lint accumulates inside the duct — or a bird nest blocks the exterior vent cap — moisture stays trapped in the drum and drying efficiency drops sharply. This is the most common cause of a dryer that runs but leaves clothes damp.
      </p>

      <p>
        <strong>How to check:</strong> Go outside while the dryer is running and hold your hand near the exhaust vent. Airflow should be strong and warm. If it is weak, intermittent, or missing entirely, the duct is blocked. A kinked flexible duct behind the dryer can also restrict airflow — pull the dryer out and inspect the duct connection.
      </p>

      <p>
        <strong>Important note:</strong> WNDW Appliance Repair performs dryer repair — including internal lint removal from the lint trap housing and drum area. External duct cleaning (the duct running through your wall) is a separate service performed by duct cleaning specialists.
      </p>

      <h2>Cause 3: Failed Heating Element (Electric Dryers)</h2>

      <p>
        Electric dryers use a coiled heating element to generate heat. When the element partially fails — one section of the coil burns out — the dryer still produces some heat but not enough to dry clothes efficiently. You will notice clothes come out warm but damp, and cycles take significantly longer than normal.
      </p>

      <p>
        A fully failed heating element means the drum tumbles but produces no heat at all — clothes stay cold and wet. Either way, the element needs replacement. Our technician tests the element with a multimeter during the diagnostic visit. Heating element replacement on electric dryers is one of the most common repairs we perform throughout San Diego.
      </p>

      <h2>Cause 4: Blown Thermal Fuse</h2>

      <p>
        The thermal fuse is a one-time safety device that cuts power to the heating circuit if the dryer overheats. Once it blows, it does not reset — the dryer loses heat permanently until the fuse is replaced. A blown thermal fuse is almost always caused by a blocked exhaust duct that caused the dryer to overheat in the first place.
      </p>

      <p>
        <strong>What this means in practice:</strong> If we replace the thermal fuse without also clearing the duct restriction, the new fuse will blow again. Our technician addresses both the fuse and the underlying airflow problem during the same visit.
      </p>

      <MidPageCTA
        heading="Dryer taking two cycles? We can diagnose it today."
        subtext={`${DIAGNOSTIC_FEE} diagnostic fee waived if we fix it. ${WARRANTY_DAYS}-day warranty on every repair.`}
      />

      <h2>Cause 5: Worn Drum Support Rollers or Belt</h2>

      <p>
        The drum rotates on support rollers and is driven by a belt wrapped around a motor pulley. When rollers wear flat or the belt stretches and slips, the drum does not turn at the correct speed. Clothes bunch up and don&apos;t tumble properly — contact with heated air is reduced, and drying time increases.
      </p>

      <p>
        You will usually hear this problem before it affects drying time. A squealing or thumping sound during operation is the early warning sign. By the time drying time is noticeably longer, the rollers or belt are significantly worn.
      </p>

      <h2>Cause 6: Faulty Gas Igniter (Gas Dryers)</h2>

      <p>
        Gas dryers use an igniter to light the burner that heats the air. A weak igniter may light the burner intermittently — the dryer heats up, runs a partial cycle, then loses heat when the igniter fails to relight the burner. The result is a dryer that starts warm and ends cold, leaving clothes partially dried.
      </p>

      <p>
        Gas igniter replacement is a straightforward repair. Our technician carries commonly stocked igniter assemblies for major brands — Samsung, LG, Whirlpool, GE — and can typically complete the repair in a single visit. Call <a href="tel:+18582643138" className="text-brand-red hover:underline">(858) 264-3138</a> to schedule.
      </p>

      <h2>How Long Should a Dryer Take?</h2>

      <p>A properly functioning dryer should complete a standard load in:</p>

      <ul>
        <li><strong>Cotton/regular cycle:</strong> 45–60 minutes</li>
        <li><strong>Heavy items (towels, jeans):</strong> 60–75 minutes</li>
        <li><strong>Delicate/low heat:</strong> 50–70 minutes</li>
      </ul>

      <p>
        If your dryer consistently exceeds these ranges — even on low-load cycles — there is an underlying issue. Running a failing dryer harder to compensate accelerates wear on every component and increases electricity costs. It is also a fire risk: a dryer that runs hot due to a blocked vent is one of the leading causes of residential fires.
      </p>

      <h2>When to Call a Technician</h2>

      <p>Stop troubleshooting and call when:</p>

      <ul>
        <li>The lint screen is clean, the vent is clear, and the dryer still takes 90+ minutes</li>
        <li>Clothes come out warm but consistently damp</li>
        <li>You smell burning during a cycle</li>
        <li>The dryer runs but produces no heat at all</li>
        <li>You hear squealing, thumping, or grinding during operation</li>
      </ul>

      <p>
        WNDW Appliance Repair charges a flat {DIAGNOSTIC_FEE} diagnostic fee for dryer calls throughout San Diego County. If our technician diagnoses the problem and you approve the repair, the {DIAGNOSTIC_FEE} is waived completely. Every completed repair carries a {WARRANTY_DAYS}-day parts and labor warranty — the same visit, no callbacks needed in most cases.
      </p>

      <div className="not-prose">
        <FAQSection faqs={faqs} heading="Dryer Taking Too Long — FAQ" />
      </div>

      <h2>Related Resources</h2>

      <ul>
        <li>
          <Link href="/services/dryer-repair/" className="text-brand-red hover:underline">
            Dryer Repair in San Diego — full service page
          </Link>
        </li>
        <li>
          <Link href="/services/dryer-repair/heating-element-replacement/" className="text-brand-red hover:underline">
            Dryer Heating Element Replacement in San Diego
          </Link>
        </li>
        <li>
          <Link href="/blog/washer-needs-repair-signs-san-diego/" className="text-brand-red hover:underline">
            5 Signs Your Washer Needs Repair — Before It Gets Worse
          </Link>
        </li>
        <li>
          <Link href="/blog/how-much-does-appliance-repair-cost-in-san-diego/" className="text-brand-red hover:underline">
            How Much Does Appliance Repair Cost in San Diego?
          </Link>
        </li>
        <li>
          <Link href="/san-diego-appliance-repair/" className="text-brand-red hover:underline">
            Appliance Repair in San Diego — service area overview
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
