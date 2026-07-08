import Link from "next/link"
import FAQSection from "@/components/FAQSection"
import MidPageCTA from "@/components/MidPageCTA"
import { DIAGNOSTIC_FEE, WARRANTY_DAYS } from "@/data/constants"

const faqs = [
  {
    question: "How often should I have my appliances serviced in San Diego?",
    answer: `Most appliances benefit from an annual check — refrigerator coils cleaned, dryer vent cleared, washer drum and filter inspected. In San Diego's coastal areas, marine layer humidity and salt air accelerate wear on coils and seals, so twice-yearly checks are worthwhile for refrigerators in La Jolla, Del Mar, or Ocean Beach. Call NTSZOT at (619) 488-4477 to schedule a professional inspection.`,
  },
  {
    question: "What is the most important appliance maintenance task I can do myself?",
    answer: `Cleaning your dryer vent is the highest-impact DIY task — a clogged vent is the leading cause of house fires from dryers and makes every cycle take longer. Disconnect the vent hose from the back of the dryer and clear it with a long brush. Also pull your refrigerator forward and vacuum the condenser coils twice a year — this alone can add years to the compressor's life.`,
  },
  {
    question: "Does San Diego's hard water damage appliances?",
    answer: `Yes. San Diego's tap water runs 300+ ppm in hardness — among the hardest water in California. Scale deposits build up in dishwasher spray arms, washing machine inlet valves, and ice maker water lines over time. Running a monthly descaling cycle in your dishwasher and using a HE detergent formulated for hard water in your washer are the two most effective countermeasures.`,
  },
  {
    question: "What does NTSZOT check during an appliance service visit?",
    answer: `Our factory-certified technician inspects the appliance, cleans accessible components (refrigerator condenser coils, dryer lint trap and drum area, dishwasher filter), and checks for early signs of failure. If anything needs repair, you get an upfront quote before any work begins. The ${DIAGNOSTIC_FEE} service call covers the full diagnostic.`,
  },
  {
    question: "Should I repair an appliance that's been poorly maintained, or just replace it?",
    answer: `It depends on the appliance age and the repair cost. A well-built washer or dryer from a major brand is worth repairing if the repair is under 50% of replacement cost — even if it wasn't maintained well. Refrigerators are the exception: if the compressor has failed due to years of dirty coils, replacement is often more economical. Our technician will give you an upfront quote and a straight opinion before any work begins. The ${DIAGNOSTIC_FEE} diagnostic fee is waived if you proceed with the repair.`,
  },
]

export default function SpringMaintenanceChecklistPost() {
  return (
    <div className="blog-content">

      {/* Quick answer box */}
      <div className="quick-answer not-prose rounded-xl border-l-4 border-brand-blue bg-blue-50 p-5 mb-8">
        <p className="text-sm font-semibold text-brand-blue uppercase tracking-wide mb-1">Quick Answer</p>
        <p className="text-gray-800 text-base leading-relaxed">
          Spring is the best time to service your appliances in San Diego. The five tasks that matter most: clean refrigerator condenser coils, clear the dryer vent, descale your dishwasher, inspect washer door seals and filters, and check oven igniter performance. Done once a year, these tasks prevent the most common repairs we see — and most take under 30 minutes.
        </p>
      </div>

      <p>
        Most appliance failures are not sudden. A refrigerator compressor that dies in July was running hot for months because its condenser coils were caked with dust. A dryer that starts a fire in October had a blocked vent that was building lint all spring. Appliance maintenance is not complicated — it is just easy to skip until something breaks.
      </p>

      <p>
        This checklist covers every major home appliance. Work through it once in spring and once in fall, and you will catch the problems that become expensive repairs in the middle of summer or the holidays. If you find something wrong or want a professional inspection, call <strong>(619) 488-4477</strong> — our technician is available 6 days a week.
      </p>

      <h2>Refrigerator — Clean Coils and Check the Seals</h2>

      <p>
        Dirty condenser coils are the most overlooked refrigerator maintenance item and the most consequential. The coils release heat from the refrigeration cycle — when they are coated with dust, the compressor runs hotter and longer to compensate, shortening its life by years.
      </p>

      <p>
        <strong>What to do:</strong> Unplug the refrigerator and pull it away from the wall. Locate the condenser coils — on the back of older models, or behind the toe-kick panel at the bottom front on newer ones. Vacuum with a crevice attachment or use a coil brush to remove accumulated dust. In coastal neighborhoods like La Jolla and Del Mar, saltair and marine layer humidity cause coils to accumulate debris faster — plan on cleaning every 6 months rather than once a year.
      </p>

      <p>
        While the fridge is pulled out, inspect the door gasket (the rubber seal around the door perimeter). Close the door on a piece of paper and try to pull it out — it should grip firmly. If the paper slides out easily, the gasket is worn and the fridge is leaking cold air on every cycle. Gasket replacement is a straightforward repair that pays for itself in energy savings.
      </p>

      <p>
        Also check the temperature settings: refrigerator should be 35–38°F, freezer at 0°F. If either is off, the unit is either working harder than it needs to or letting food spoil faster than you realize.
      </p>

      <h2>Dryer — Clear the Vent and Clean the Drum</h2>

      <p>
        A clogged dryer vent is the leading cause of dryer-related house fires in the US — and it also makes every load take longer, wearing out the heating element faster. If your dryer is taking two cycles to dry a normal load, a blocked vent is the first thing to check. See our full guide on <Link href="/blog/dryer-taking-too-long-san-diego/">why your dryer is taking too long in San Diego</Link>.
      </p>

      <p>
        <strong>What to do:</strong> Disconnect the flexible duct hose from the back of the dryer. Reach inside and clear any lint by hand, then use a long-handled dryer vent brush to clear the duct run to the exterior. Check the exterior vent cap — it should open freely when the dryer runs and close when off. A stuck or damaged cap lets pests in and restricts airflow.
      </p>

      <p>
        In hillside homes near Rancho Bernardo, Scripps Ranch, or Santee, canyon breeze draws extra dust and debris into dryer vents — these homes typically need vent cleaning twice a year. Inside the drum, wipe down the felt seal around the drum opening. A worn felt seal lets heat escape and is a common cause of a dryer that runs but doesn&apos;t heat efficiently.
      </p>

      <MidPageCTA />

      <h2>Washer — Inspect Seals, Clean the Filter, Run a Drum Clean</h2>

      <p>
        Front-load washers are prone to mold and mildew buildup around the door gasket — especially in San Diego&apos;s humid coastal air. A musty smell from your laundry is almost always the door seal holding moisture after each cycle.
      </p>

      <p>
        <strong>What to do:</strong> Wipe down the door gasket thoroughly with a diluted vinegar solution, getting into the folds where water pools. Leave the door open between washes to let the drum dry out. For the drum itself, run a hot cycle with a washing machine cleaner tablet or a cup of white vinegar and half a cup of baking soda — no laundry, just the cleaning solution.
      </p>

      <p>
        On front-load washers, locate the pump filter behind the small access panel at the bottom front. Unscrew it slowly — water will drain out — and clear any lint, coins, or debris from the filter and the drain housing. A clogged pump filter is the cause of most washer drain errors. If you have a top-load washer, run the drum clean cycle and check that the lid switch clicks firmly when the lid closes. For a broader look at warning signs, see our post on <Link href="/blog/washer-needs-repair-signs-san-diego/">5 signs your washer needs repair</Link>.
      </p>

      <p>
        San Diego&apos;s hard water (300+ ppm) leaves mineral deposits in the inlet valve screens and detergent drawer over time. Remove the drawer and rinse it under hot water. Check the inlet hoses at the back — rubber hoses crack after 5–7 years and should be replaced with braided stainless steel hoses before they fail.
      </p>

      <h2>Dishwasher — Descale, Clear the Filter, Check the Spray Arms</h2>

      <p>
        Scale buildup from San Diego&apos;s hard water is the dishwasher&apos;s biggest long-term threat. Calcium and magnesium deposits accumulate in the spray arm holes, the heating element, and the drain pump over years of use.
      </p>

      <p>
        <strong>What to do:</strong> Remove the lower rack and pull out the filter assembly at the bottom of the tub. Rinse it under running water and scrub with a soft brush. While the filter is out, inspect the spray arms — hold each one up to light and check that all the holes are clear. Use a toothpick to clear any blocked holes. Run a hot cycle with a commercial dishwasher descaler or two cups of white vinegar on the bottom rack (no dishes, no detergent).
      </p>

      <p>
        Check the door gasket for cracks or debris — a damaged gasket causes the slow leaks that show up as water under the dishwasher. If you have a garbage disposal, confirm the drain hose from the dishwasher connects above the disposal&apos;s drain inlet — a low connection causes backflow into the tub.
      </p>

      <h2>Oven and Range — Test the Igniter and Clean the Burners</h2>

      <p>
        Gas range igniters weaken over time — a clicking burner that takes 5 seconds to light instead of 1 is an igniter that is on its way out. Catching it early means a straightforward replacement instead of a burner that won&apos;t light at all.
      </p>

      <p>
        <strong>What to do:</strong> Light each burner and time how long it takes to ignite. More than 2–3 seconds is a weak igniter. Remove the burner grates and caps and soak them in hot soapy water. Use a toothpick or straightened paperclip to clear any clogged burner ports — blocked ports cause uneven flames or burners that won&apos;t stay lit.
      </p>

      <p>
        For the oven itself, run the self-clean cycle if your oven has one — or wipe down the interior manually with a baking soda paste. Check that the oven light works and that the door seal sits flush all the way around. A gap in the door seal is a common cause of uneven baking — heat escapes from the bottom and the top rack runs hotter than it should. See our post on <Link href="/blog/oven-not-heating-evenly-san-diego/">ovens not heating evenly in San Diego</Link> for more detail.
      </p>

      <h2>Microwave and Range Hood — Clean the Filters</h2>

      <p>
        Over-the-range microwaves and range hoods share the same maintenance task: grease filters. These metal mesh filters sit below the microwave or inside the hood and capture grease vapor from cooking. After months of use, a saturated filter blocks airflow entirely.
      </p>

      <p>
        <strong>What to do:</strong> Remove the grease filter — it usually clips or slides out — and soak it in hot water with dish soap or run it through the dishwasher. Reinstall when dry. If your range hood has a charcoal filter (for recirculating models without exterior venting), replace it — charcoal filters cannot be cleaned and should be replaced every 6–12 months.
      </p>

      <h2>When to Call a Technician</h2>

      <p>
        Most of the tasks above are DIY-friendly. Call a technician when you find something mechanical: a failed door gasket on a refrigerator, a drum belt that has snapped, a washer that won&apos;t drain after you&apos;ve cleared the filter, or an oven igniter that won&apos;t light even after the ports are clean.
      </p>

      <p>
        NTSZOT Appliance Repair is available for any appliance issue you discover during your inspection. Our factory-certified technicians can diagnose, repair, and follow up — all in a single visit for most repairs.
      </p>

      <p>
        The {DIAGNOSTIC_FEE} service call covers your diagnostic and repair estimate. Every completed repair is backed by a {WARRANTY_DAYS}-day parts and labor warranty. We cover all of <Link href="/san-diego-appliance-repair/">San Diego County</Link> — call <strong>(619) 488-4477</strong> or visit our <Link href="/contact/">contact page</Link> to schedule.
      </p>

      <p>
        Not sure whether to repair or replace an aging appliance? Our guide on <Link href="/blog/repair-vs-replace-appliance-san-diego/">when to repair vs. replace</Link> walks through the decision by appliance type.
      </p>

      <FAQSection faqs={faqs} heading="Spring Appliance Maintenance — FAQ" />
    </div>
  )
}
