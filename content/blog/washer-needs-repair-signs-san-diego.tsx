import Link from "next/link"
import FAQSection from "@/components/FAQSection"
import MidPageCTA from "@/components/MidPageCTA"
import { DIAGNOSTIC_FEE, WARRANTY_DAYS } from "@/data/constants"

const faqs = [
  {
    question: "How much does washer repair cost in San Diego?",
    answer: `Most washing machine repairs in San Diego cost $300–$400 including parts and labor. The ${DIAGNOSTIC_FEE} diagnostic fee is waived completely if we repair it, so you only pay for the fix.`,
  },
  {
    question: "Is it worth repairing a washing machine or should I replace it?",
    answer: `If your washer is under 8 years old and the repair cost is less than half the price of a new machine, repair almost always makes more sense. A new washer costs $600–$1,400 installed. A repair at $300–$400 with a ${WARRANTY_DAYS}-day warranty is the better value in most cases.`,
  },
  {
    question: "Why is my washing machine shaking violently during the spin cycle?",
    answer: `Violent shaking during spin is almost always an unbalanced load, worn shock absorbers, or a failing drum bearing. Redistribute the load first. If the shaking continues with a balanced load, the shock absorbers or bearings need inspection — running it that way long-term will damage the drum and frame.`,
  },
  {
    question: "What does it mean when my washer smells like mildew?",
    answer: `A persistent mildew smell means mold is growing in the door gasket, drum, or detergent drawer. San Diego's hard water (300+ ppm) leaves mineral deposits that trap moisture and accelerate mold growth. Run a hot cycle with a washer cleaner tablet monthly, and leave the door ajar after each load. If the smell persists after cleaning, the gasket may need replacement.`,
  },
  {
    question: "How long should a washing machine last?",
    answer: `Most washing machines last 10–14 years with regular use. Front-loaders average around 11 years; top-loaders tend to run slightly longer. In San Diego, hard water accelerates wear on seals, bearings, and inlet valves — annual maintenance can extend the life of your machine significantly.`,
  },
  {
    question: "Can NTSZOT Appliance Repair fix my washer the same day?",
    answer: `In most cases, we can diagnose and repair your washing machine in a single visit. Our technician carries commonly stocked parts for major brands including Samsung, LG, Whirlpool, Maytag, and GE. The ${DIAGNOSTIC_FEE} diagnostic fee is waived if we repair it, and every repair comes with a ${WARRANTY_DAYS}-day warranty on parts and labor.`,
  },
]

export default function WasherRepairSignsPost() {
  return (
    <div className="blog-content">

      {/* Quick answer box */}
      <div className="quick-answer not-prose rounded-xl border-l-4 border-brand-blue bg-blue-50 p-5 mb-8">
        <p className="text-sm font-semibold text-brand-blue uppercase tracking-wide mb-1">Quick Answer</p>
        <p className="text-gray-800 text-base leading-relaxed">
          The five signs your washer needs repair are: unusual loud noises during any cycle, water leaking onto the floor, clothes coming out soaking wet after spin, the machine not starting or stopping mid-cycle, and a persistent mildew smell that doesn&apos;t clear with cleaning. Catching these early prevents a small repair from turning into a full replacement.
        </p>
      </div>

      <p>
        Your washing machine runs hundreds of cycles a year. Most of the time it just works — until the day it doesn&apos;t. The problem is that washing machines rarely fail all at once. They give you warning signs first, and those warnings are easy to ignore until the repair bill gets a lot bigger.
      </p>
      <p>
        This guide covers the five signs San Diego homeowners should watch for, what each symptom usually means mechanically, and what happens if you keep running the machine anyway. If you&apos;re seeing any of these, it&apos;s time for a{" "}
        <Link href="/services/washer-repair/">washer repair</Link> diagnosis before a small fix turns into a costly one.
      </p>

      <h2>Sign #1 — Loud or Unusual Noises During the Wash or Spin Cycle</h2>
      <p>
        A grinding, banging, or squealing noise that wasn&apos;t there before is the most common early warning sign of washer trouble. Each sound points to a different part. <strong>Grinding</strong> usually means worn drum bearings. <strong>Banging</strong> during spin is typically a broken shock absorber or suspension rod. <strong>Squealing</strong> often points to a worn drive belt or pump.
      </p>
      <p>
        These parts don&apos;t fix themselves. A worn bearing at $400 today can become a full drum replacement at $800 if ignored. If you hear anything new, run one more cycle and listen carefully. If it happens again, stop using the machine until it&apos;s inspected.
      </p>
      <p>
        One note for homes near the coast: saltair in areas like La Jolla, Ocean Beach, and Del Mar accelerates corrosion on washer drum hardware. Bearings that might last 12 years inland can wear out in 7–8 years in a beachside laundry room.
      </p>

      <h2>Sign #2 — Water Leaking from the Machine</h2>
      <p>
        Any water on the floor around your washer is a problem that needs immediate attention — not because the repair is always expensive, but because water damage to flooring and subfloor is. Where the leak is coming from tells you a lot about what&apos;s wrong.
      </p>
      <ul>
        <li><strong>Front of the machine (front-loaders):</strong> Almost always the door gasket. The rubber seal tears or accumulates buildup that prevents a full seal. Common in homes with hard water.</li>
        <li><strong>Back of the machine:</strong> Usually the drain hose, water inlet valve, or supply hose connections. Check the hose connections first — they sometimes just need tightening.</li>
        <li><strong>Under the machine:</strong> Could be the pump, tub seal, or a cracked tub. These require disassembly to diagnose.</li>
      </ul>
      <p>
        San Diego&apos;s water is 300+ ppm — among the hardest in California. That mineral buildup accelerates wear on gaskets and seals. If your machine is 6+ years old and leaking at the door, the gasket has likely reached the end of its life.
      </p>

      <h2>Sign #3 — Clothes Are Soaking Wet After the Spin Cycle</h2>
      <p>
        Your washer&apos;s spin cycle should leave clothes damp, not dripping. If you&apos;re pulling out clothes that are still heavy with water after a full cycle, the machine isn&apos;t spinning fast enough — or at all.
      </p>
      <p>
        The most common causes are a worn drive belt (slipping instead of spinning), a failing lid switch or door latch (the machine detects the door as open and won&apos;t spin at full speed), or a clogged drain pump that can&apos;t remove water fast enough before spin starts. A load that&apos;s too unbalanced will also trigger an automatic spin reduction.
      </p>
      <p>
        Try running a spin-only cycle with an empty drum. If the drum isn&apos;t reaching full speed, the issue is mechanical — not the load. This is worth fixing quickly: running your dryer on wet clothes doubles or triples its cycle time, which adds up fast on your electricity bill.
      </p>

      <MidPageCTA />

      <h2>Sign #4 — The Washer Won&apos;t Start, Pauses Mid-Cycle, or Displays Error Codes</h2>
      <p>
        A washer that won&apos;t power on, stops mid-cycle, or throws error codes is telling you something specific. Modern washers — especially Samsung, LG, and Whirlpool models — have diagnostic systems that flag problems before they become failures.
      </p>
      <p>
        <strong>Won&apos;t start at all:</strong> Check the lid switch (top-loaders) or door latch (front-loaders) first. These safety switches prevent the machine from running with an open door — and they fail more often than people expect. Also check whether the control board is unresponsive, which points to a board or power supply issue.
      </p>
      <p>
        <strong>Stops mid-cycle:</strong> Usually a drainage problem, an overheating motor, or a failing timer/control module. If the machine fills with water and then stops, check the drain hose and pump filter first.
      </p>
      <p>
        <strong>Error codes:</strong> Don&apos;t ignore them. Look up the code for your specific brand and model — most codes point directly to the faulty component. Our technician can diagnose error codes on all major brands as part of the {DIAGNOSTIC_FEE} diagnostic visit.
      </p>
      <p>
        Our <Link href="/san-diego-appliance-repair/">San Diego appliance repair</Link> service covers all major brands. If your machine is showing codes you can&apos;t clear, a diagnosis is the fastest path to knowing whether it&apos;s a small part or a conversation about replacement.
      </p>

      <h2>Sign #5 — A Persistent Mildew or Burning Smell</h2>
      <p>
        Two smells mean two very different problems, and both need attention.
      </p>
      <p>
        <strong>Mildew smell:</strong> Mold growing in the door gasket, drum, or detergent drawer. In San Diego&apos;s coastal neighborhoods, the combination of hard water deposits and marine layer humidity creates ideal conditions for mold growth in washing machine seals. Run a hot empty cycle with a washer cleaning tablet and scrub the gasket folds with a diluted bleach solution. Leave the door ajar between uses. If the smell returns within a few weeks, the gasket needs replacement.
      </p>
      <p>
        <strong>Burning smell:</strong> This is more urgent. A burning smell during or after a cycle usually means an overheating motor, a slipping drive belt generating friction heat, or an electrical component issue. Stop using the machine immediately if you smell burning. Running it further can cause a fire or complete motor failure.
      </p>

      <h2>What Happens If You Ignore These Signs?</h2>
      <p>
        The honest answer: small repairs become large ones. A worn bearing at $400 today can become a full drum replacement at $800 if ignored. A slow leak that costs $150 to fix can cause $2,000+ in subfloor damage if left for months.
      </p>
      <p>
        The {DIAGNOSTIC_FEE} diagnostic fee covers a full inspection of your machine. If we find the problem and repair it in the same visit, the diagnostic fee is waived entirely — you only pay for the repair. Every repair includes a {WARRANTY_DAYS}-day warranty on parts and labor. To schedule a visit, <Link href="/contact/">contact us here</Link> or call <a href="tel:+16194884477">(619) 488-4477</a>.
      </p>

      <h2>How to Slow Down Washer Wear in San Diego</h2>
      <p>
        San Diego&apos;s hard water is the biggest accelerator of washer wear. At 300+ ppm, mineral scale builds up on inlet valves, heating elements, and seals faster than in most cities. A few habits significantly extend the life of your machine:
      </p>
      <ul>
        <li>Use a <strong>high-efficiency (HE) detergent</strong> in the correct amount — excess suds leave residue that feeds mold</li>
        <li>Run a <strong>hot cleaning cycle</strong> monthly with a washer tablet (Affresh or equivalent)</li>
        <li>Leave the <strong>door ajar</strong> after every load to dry out the drum and gasket</li>
        <li>Check and clean the <strong>pump filter</strong> every 3–6 months (front-loaders have one, usually behind a panel at the base)</li>
        <li>Don&apos;t overload — consistently washing beyond rated capacity accelerates bearing and shock absorber wear</li>
      </ul>
      <p>
        If your washer is 5+ years old and hasn&apos;t had a professional inspection, our <Link href="/la-jolla-appliance-repair/">La Jolla</Link> and wider San Diego County service includes an annual maintenance visit as part of our $350/year maintenance plan.
      </p>

      <FAQSection faqs={faqs} heading="Washer Repair San Diego — FAQ" />

      <h2>Related Resources</h2>

      <ul>
        <li>
          <Link href="/services/washer-repair/" className="text-brand-blue hover:underline">
            Washer Repair in San Diego — full service page
          </Link>
        </li>
        <li>
          <Link href="/blog/dryer-taking-too-long-san-diego/" className="text-brand-blue hover:underline">
            Dryer Taking Too Long? Common Causes in San Diego
          </Link>
        </li>
        <li>
          <Link href="/blog/dishwasher-not-draining-san-diego/" className="text-brand-blue hover:underline">
            Dishwasher Not Draining? Here&apos;s What to Check First
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
