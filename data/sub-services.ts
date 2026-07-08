export interface SubService {
  slug: string
  name: string
  h1: string
  metaTitle: string
  metaDescription: string
  primaryKeyword: string
  shortDesc: string
  description: string
  commonCauses: string[]
  priceRange: string
  parentServiceSlug: string
  parentServiceName: string
}

export const SUB_SERVICES: Record<string, SubService[]> = {
  "washer-repair": [
    {
      slug: "drain-pump-repair",
      name: "Washer Drain Pump Repair",
      h1: "Washer Drain Pump Repair in San Diego, CA — WNDW Appliance Repair",
      metaTitle: "Washer Drain Pump Repair San Diego",
      metaDescription:
        "Washer drain pump repair in San Diego — standing water after cycle. $85 diagnostic fee waived if we fix it. 90-day warranty. Call (858) 264-3138.",
      primaryKeyword: "washer drain pump repair san diego",
      shortDesc: "Standing water after a cycle — pump clog, impeller damage, or motor failure.",
      description:
        "The drain pump forces water out of the drum and through the drain hose at the end of every wash cycle. When it fails, you find standing water at the bottom of the drum after the cycle ends — the machine finishes its timer but never drains.\n\nThe most common cause is a clogged pump filter — blocked by coins, buttons, or lint — that prevents the impeller from moving water. Clearing the filter resolves the problem in many cases. When the pump motor itself has seized or burned out, the pump assembly needs replacement.\n\nOur technician accesses the pump from the front panel (front-loaders) or by tilting the machine (top-loaders), clears any blockages, and tests drainage before leaving. Most drain pump repairs complete in a single visit.",
      commonCauses: [
        "Clogged pump filter — coins, lint, or small items blocking the impeller",
        "Failed drain pump motor — no humming or humming with no water movement",
        "Worn impeller blades — pump runs but can't move water effectively",
        "Kinked or blocked drain hose — restricts flow before it reaches the pump",
        "Lid switch or door latch signal blocking drain cycle initiation",
      ],
      priceRange: "$250–$350",
      parentServiceSlug: "washer-repair",
      parentServiceName: "Washer Repair",
    },
    {
      slug: "door-seal-replacement",
      name: "Washing Machine Door Seal Replacement",
      h1: "Washing Machine Door Seal Replacement in San Diego — WNDW Appliance Repair",
      metaTitle: "Washing Machine Door Seal Replacement San Diego",
      metaDescription:
        "Washing machine door seal replacement in San Diego. Leaking or moldy front-loader door gasket. $85 diagnostic fee waived. 90-day warranty. Call (858) 264-3138.",
      primaryKeyword: "washing machine door seal replacement san diego",
      shortDesc: "Leaking or moldy door gasket on front-load washers — boot seal replacement.",
      description:
        "The door boot seal — also called the door gasket — is the rubber accordion-style seal that creates a watertight barrier between the door and the drum on front-load washers. It fails in two distinct ways: it tears or cracks, causing active leaking onto the floor, or it accumulates mold in its folds from moisture trapped by San Diego's coastal humidity.\n\nA torn seal will leak water during every wash cycle. A mold-contaminated seal causes the persistent mildew smell that doesn't clear with standard cleaning. In both cases, the seal needs replacement — cleaning the surface alone won't resolve a seal that has mold embedded in the rubber.\n\nReplacement involves removing the door, front panel, and the old seal's retaining clamp, installing the new seal, and reseating the clamp. Our technician verifies the door closes flush and runs a test cycle to confirm no leaking before completing the visit.",
      commonCauses: [
        "Torn or cracked boot seal — water leaks onto the floor during cycles",
        "Mold growth in seal folds — persistent mildew smell that survives cleaning",
        "Hard water mineral deposits — San Diego's 300+ ppm water accelerates rubber degradation",
        "Debris trapped in seal folds — small items damage the rubber over time",
        "Normal wear — front-loader door seals typically last 5–8 years in regular use",
      ],
      priceRange: "$250–$350",
      parentServiceSlug: "washer-repair",
      parentServiceName: "Washer Repair",
    },
    {
      slug: "lid-switch-repair",
      name: "Washer Lid Switch Repair",
      h1: "Washer Lid Switch Repair in San Diego, CA — WNDW Appliance Repair",
      metaTitle: "Washer Lid Switch Repair San Diego",
      metaDescription:
        "Washer lid switch repair in San Diego — top-load washer won't spin or start. $85 diagnostic fee waived if we fix it. 90-day warranty. Call (858) 264-3138.",
      primaryKeyword: "washer lid switch repair san diego",
      shortDesc: "Top-loader won't spin or start — lid switch tells the machine the lid is closed.",
      description:
        "The lid switch is a safety sensor on top-load washing machines that prevents the drum from spinning when the lid is open. When the switch fails, the machine behaves as if the lid is always open — it fills and agitates but will not advance to the spin cycle, leaving clothes soaking wet.\n\nLid switch failure is one of the most common top-loader repairs. The switch is activated every time you close the lid, and after thousands of cycles the internal contacts wear out or the plastic actuator breaks. Some models display an error code; others simply stop at spin without any indication.\n\nTesting the switch takes a few minutes with a multimeter. If it fails the continuity test, the switch is replaced — typically a quick repair completed in a single visit.",
      commonCauses: [
        "Worn switch contacts — fails after thousands of open/close cycles",
        "Broken plastic actuator — the tab that trips the switch breaks off",
        "Foreign object damage — debris falling into the switch housing",
        "Corrosion — moisture and detergent residue corroding the switch contacts",
        "Normal wear — lid switches are rated for a finite number of cycles",
      ],
      priceRange: "$250–$350",
      parentServiceSlug: "washer-repair",
      parentServiceName: "Washer Repair",
    },
    {
      slug: "door-lock-repair",
      name: "Washing Machine Door Lock Repair",
      h1: "Washing Machine Door Lock Repair in San Diego — WNDW Appliance Repair",
      metaTitle: "Washing Machine Door Lock Repair San Diego",
      metaDescription:
        "Washing machine door lock repair in San Diego — front-loader won't start or door won't open. $85 diagnostic fee waived. 90-day warranty. Call (858) 264-3138.",
      primaryKeyword: "washing machine door lock repair san diego",
      shortDesc: "Front-loader won't start, or door locked and won't open — door latch assembly.",
      description:
        "The door lock assembly on front-load washers serves two functions: it signals the control board that the door is securely closed before starting a cycle, and it physically locks the door during operation to prevent opening while the drum spins at speed. When it fails, the machine either won't start at all or traps your laundry inside.\n\nDoor lock failures often display error codes — Samsung dL, LG dE, Whirlpool F5 or E1. The lock assembly contains both a mechanical latch and an electrical switch; either or both can fail. In some cases the wiring harness connection to the lock has worked loose.\n\nOur technician tests the lock assembly and its wiring, then replaces the faulty component. On most front-loaders, door lock replacement is a straightforward same-visit repair.",
      commonCauses: [
        "Failed door latch switch — door closes but machine won't start",
        "Stuck lock solenoid — door physically locked and won't open",
        "Broken door handle — mechanical connection to the latch broken",
        "Wiring harness fault — loose or corroded connection to the lock assembly",
        "Control board signal failure — board not sending lock/unlock command",
      ],
      priceRange: "$250–$350",
      parentServiceSlug: "washer-repair",
      parentServiceName: "Washer Repair",
    },
    {
      slug: "not-spinning-repair",
      name: "Washer Not Spinning Repair",
      h1: "Washer Not Spinning Repair in San Diego, CA — WNDW Appliance Repair",
      metaTitle: "Washer Not Spinning Repair San Diego",
      metaDescription:
        "Washer not spinning in San Diego? Clothes soaking wet after the cycle. $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. Call (858) 264-3138.",
      primaryKeyword: "washer not spinning san diego",
      shortDesc: "Clothes come out soaking wet — broken suspension rods, drive belt, or motor coupling failure.",
      description:
        "A washer that agitates normally but won't spin — or spins weakly — leaves clothes saturated. The spin cycle removes roughly 80% of the water from a load, so when it fails, drying time triples or more.\n\nThe most common cause we see is broken suspension rods. These rods support and stabilize the drum during the spin cycle; when one or more break, the tub drops out of balance, and the machine's sensors cut the spin cycle short to prevent damage. You may hear loud banging or notice the drum sitting unevenly before the spin issue appears.\n\nOther causes depend on washer type. On top-loaders, a worn drive belt or failed motor coupling prevents the motor from transferring power to the drum. On front-loaders, a faulty door latch signal or worn motor brushes are common culprits. A severely unbalanced load can also trigger an automatic spin cutoff — run a spin-only cycle with an empty drum to rule this out before calling.\n\nOur technician identifies the specific failure point and replaces the component. Suspension rod replacement and drive belt repair are common same-visit fixes.",
      commonCauses: [
        "Broken suspension rods — drum drops out of balance, triggering automatic spin cutoff",
        "Worn or broken drive belt — motor runs but drum won't turn at speed",
        "Motor coupling failure (top-loaders) — coupling between motor and transmission breaks",
        "Failed lid switch or door lock — safety interlock stops spin cycle",
        "Control board fault — no spin signal sent despite correct door and lid status",
      ],
      priceRange: "$250–$350",
      parentServiceSlug: "washer-repair",
      parentServiceName: "Washer Repair",
    },
  ],

  "dryer-repair": [
    {
      slug: "heating-element-replacement",
      name: "Dryer Heating Element Replacement",
      h1: "Dryer Heating Element Replacement in San Diego — WNDW Appliance Repair",
      metaTitle: "Dryer Heating Element Replacement San Diego",
      metaDescription:
        "Dryer heating element replacement in San Diego — electric dryer tumbles but won't heat. $85 diagnostic fee waived if we fix it. 90-day warranty. Call (858) 264-3138.",
      primaryKeyword: "dryer heating element replacement san diego",
      shortDesc: "Electric dryer tumbles but clothes stay damp — heating element burned out.",
      description:
        "The heating element is the coiled resistance wire inside an electric dryer that generates the heat needed to evaporate moisture from clothes. When it burns out — which eventually happens to every electric dryer — the drum continues to turn but no heat is produced. Clothes tumble through every cycle but come out as wet as they went in.\n\nA burned-out element can usually be confirmed with a multimeter: an open circuit reading means the element has failed and needs replacement. The failure can happen suddenly or gradually — a partially burned element may produce weak heat that takes multiple cycles to dry a load.\n\nReplacement involves accessing the element housing (typically from the front or rear panel depending on the model), removing the old element, and installing the new coil. Our technician carries commonly stocked elements for major brands and can complete most replacements in a single visit.",
      commonCauses: [
        "Normal wear — heating elements fail after extended use, typically 8–12 years",
        "Restricted airflow — clogged lint screen or vent causes element to overheat and burn out prematurely",
        "Power supply issue — one leg of the 240V circuit failing causes heat loss without stopping the drum",
        "Thermostat failure — cycling thermostat stuck closed causes overheating and element burnout",
        "Manufacturing defect — element quality varies by brand",
      ],
      priceRange: "$250–$350",
      parentServiceSlug: "dryer-repair",
      parentServiceName: "Dryer Repair",
    },
    {
      slug: "igniter-replacement",
      name: "Gas Dryer Igniter Replacement",
      h1: "Gas Dryer Igniter Replacement in San Diego — WNDW Appliance Repair",
      metaTitle: "Gas Dryer Igniter Replacement San Diego",
      metaDescription:
        "Gas dryer igniter replacement in San Diego — dryer tumbles but won't heat. $85 diagnostic fee waived if we fix it. 90-day warranty. Call (858) 264-3138.",
      primaryKeyword: "gas dryer igniter replacement san diego",
      shortDesc: "Gas dryer tumbles but no heat — igniter glows but burner won't light.",
      description:
        "The igniter on a gas dryer is a small silicon carbide component that glows orange-hot to ignite the gas burner at the start of each heat cycle. When it fails, you can often hear the gas valve open with a faint click but the burner never lights — the drum keeps spinning through a cold cycle.\n\nIgniter failure is the most common cause of a gas dryer not heating. You can sometimes observe the igniter through the burner access panel — if it glows bright orange and then the burner doesn't light, the radiant sensor or gas valve coils may be the issue. If it doesn't glow at all, the igniter itself has failed.\n\nIgniter replacement is a straightforward repair: the component is inexpensive, typically available on the service vehicle, and replacement takes 30–45 minutes on most models.",
      commonCauses: [
        "Cracked igniter — silicon carbide igniters are fragile and crack with thermal cycling",
        "Normal wear — igniters typically last 5–10 years depending on usage frequency",
        "Radiant sensor failure — sensor prevents gas valve from opening even when igniter glows correctly",
        "Gas valve coil failure — coil doesn't open the valve after igniter reaches temperature",
        "Moisture damage — condensation in the burner assembly",
      ],
      priceRange: "$250–$350",
      parentServiceSlug: "dryer-repair",
      parentServiceName: "Dryer Repair",
    },
    {
      slug: "drum-belt-replacement",
      name: "Dryer Drum Belt Replacement",
      h1: "Dryer Drum Belt Replacement in San Diego — WNDW Appliance Repair",
      metaTitle: "Dryer Drum Belt Replacement San Diego",
      metaDescription:
        "Dryer drum belt replacement in San Diego — motor runs but drum won't turn. $85 diagnostic fee waived if we fix it. 90-day warranty. Call (858) 264-3138.",
      primaryKeyword: "dryer drum belt replacement san diego",
      shortDesc: "Motor runs but drum doesn't turn — drum belt broken or off its track.",
      description:
        "The drum belt wraps around the dryer drum and connects to the motor via an idler pulley, spinning the drum during every cycle. When the belt breaks — which is usually a sudden failure — you hear the motor running but the drum sits still. Some models detect the belt break and shut down completely.\n\nA snapped belt is one of the most straightforward dryer repairs. The belt itself is inexpensive; the labor involves opening the cabinet, routing the new belt correctly around the drum and idler pulley, and verifying the drum rotates freely before reassembly.\n\nWhile the cabinet is open, our technician also inspects the idler pulley and drum support rollers — components that often wear at the same time as the belt and are inexpensive to replace together if they show wear.",
      commonCauses: [
        "Normal wear — belts stretch and eventually snap after years of use",
        "Overloading — consistently overloading the drum accelerates belt wear",
        "Worn idler pulley — a seized pulley puts extra tension on the belt and causes early failure",
        "Worn drum rollers — a dragging drum increases belt stress",
        "Debris in drum — hard objects damaging the belt surface",
      ],
      priceRange: "$250–$350",
      parentServiceSlug: "dryer-repair",
      parentServiceName: "Dryer Repair",
    },
    {
      slug: "not-heating-repair",
      name: "Dryer Not Heating Repair",
      h1: "Dryer Not Heating Repair in San Diego, CA — WNDW Appliance Repair",
      metaTitle: "Dryer Not Heating Repair San Diego",
      metaDescription:
        "Dryer not heating in San Diego? Drum turns but clothes stay wet. $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. Call (858) 264-3138.",
      primaryKeyword: "dryer not heating san diego",
      shortDesc: "Drum turns but clothes come out wet — thermal fuse, element, or igniter.",
      description:
        "A dryer that runs but produces no heat is one of the most common appliance repair calls. The drum motor works fine — you hear it running and clothes tumble — but they come out wet after a full cycle. The root cause depends on whether you have an electric or gas dryer.\n\nFor electric dryers, the most common causes are a blown thermal fuse (a one-time safety device that opens permanently when the dryer overheats) or a burned-out heating element. For gas dryers, a failed igniter or faulty gas valve coils are the typical culprits. In both cases, a blocked exhaust vent is often the underlying trigger — restricted airflow causes overheating that blows the thermal fuse.\n\nOur technician diagnoses the specific failed component with a multimeter, replaces it, and inspects the vent path for restrictions. Resolving the root cause prevents the same failure from recurring.",
      commonCauses: [
        "Blown thermal fuse — one-time safety device that opens after overheating; most common no-heat cause",
        "Burned-out heating element (electric) — coil resistance wire fails with age or overheating",
        "Failed igniter (gas) — doesn't glow or glows but burner won't light",
        "Faulty gas valve coils (gas) — prevent gas flow even with a working igniter",
        "Restricted exhaust vent — blocked vent causes overheating and fuse failure",
      ],
      priceRange: "$250–$350",
      parentServiceSlug: "dryer-repair",
      parentServiceName: "Dryer Repair",
    },
    {
      slug: "noisy-dryer-repair",
      name: "Noisy Dryer Repair",
      h1: "Noisy Dryer Repair in San Diego, CA — WNDW Appliance Repair",
      metaTitle: "Noisy Dryer Repair San Diego",
      metaDescription:
        "Noisy dryer repair in San Diego — squealing, thumping, or grinding during cycles. $85 diagnostic fee waived if we fix it. 90-day warranty. Call (858) 264-3138.",
      primaryKeyword: "noisy dryer repair san diego",
      shortDesc: "Squealing, thumping, or grinding — drum rollers, belt, or idler pulley worn.",
      description:
        "A dryer that makes loud noises during operation is usually signaling worn mechanical components rather than an electrical failure. The specific sound points to the likely component.\n\nA high-pitched squealing indicates worn drum support rollers or a worn idler pulley — rubber and felt components that degrade over time. A rhythmic thumping suggests a flat spot on a drum roller or an item caught in the drum fins. A grinding or scraping noise often means worn drum glides (the plastic slides that support the front of the drum) or debris trapped between the drum and the cabinet.\n\nAll of these components are inexpensive. Our technician opens the cabinet, identifies the worn parts, and replaces them together during the same visit — since opening a dryer is the majority of the labor, replacing all worn drum components at once is the most efficient approach.",
      commonCauses: [
        "Worn drum support rollers — most common cause of squealing in dryers over 5 years old",
        "Worn idler pulley — pulley bearing seizes, causing squealing or grinding",
        "Damaged drum glides — plastic slides wear out, causing scraping sound",
        "Loose or worn drum belt — slapping or thumping as belt loses tension",
        "Debris in drum — coins, buttons, or screws trapped between drum and cabinet wall",
      ],
      priceRange: "$250–$350",
      parentServiceSlug: "dryer-repair",
      parentServiceName: "Dryer Repair",
    },
  ],

  "dishwasher-repair": [
    {
      slug: "drain-pump-repair",
      name: "Dishwasher Drain Pump Repair",
      h1: "Dishwasher Drain Pump Repair in San Diego — WNDW Appliance Repair",
      metaTitle: "Dishwasher Drain Pump Repair San Diego",
      metaDescription:
        "Dishwasher drain pump repair in San Diego — standing water after cycle. $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. Call (858) 264-3138.",
      primaryKeyword: "dishwasher drain pump repair san diego",
      shortDesc: "Standing water after the cycle — drain pump motor failure or impeller blockage.",
      description:
        "The drain pump in a dishwasher forces water out of the tub and through the drain hose at the end of each wash and rinse cycle. When it fails, water remains standing in the bottom of the dishwasher after the cycle completes. You may hear the pump attempting to run — a humming sound — or hear nothing at all.\n\nThe most common failure mode is a blocked impeller: glass shards, food debris, or a small piece of broken dishware jams the impeller and prevents the pump from turning. Removing the blockage resolves the problem without replacing the pump. When the pump motor itself has burned out or seized, the pump assembly requires replacement.\n\nOur technician removes the lower rack and spray arm, accesses the pump housing, clears any blockages, and tests the motor with a multimeter. Most dishwasher drain pump repairs complete in a single visit.",
      commonCauses: [
        "Jammed impeller — glass, bone, or debris blocking the pump impeller",
        "Failed pump motor — motor windings burned out, no humming sound",
        "Clogged filter — backed-up filter slows drainage and strains the pump",
        "Blocked drain hose — hose kinked or clogged downstream of the pump",
        "Garbage disposal knockout plug — not removed at installation, blocking drain path",
      ],
      priceRange: "$250–$350",
      parentServiceSlug: "dishwasher-repair",
      parentServiceName: "Dishwasher Repair",
    },
    {
      slug: "not-draining-repair",
      name: "Dishwasher Not Draining Repair",
      h1: "Dishwasher Not Draining Repair in San Diego — WNDW Appliance Repair",
      metaTitle: "Dishwasher Not Draining Repair San Diego",
      metaDescription:
        "Dishwasher not draining in San Diego? Standing water in bottom of tub. $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. Call (858) 264-3138.",
      primaryKeyword: "dishwasher not draining san diego",
      shortDesc: "Water pooling at the bottom — filter, hose, pump, or disposal connection.",
      description:
        "Standing water in the bottom of the dishwasher after a cycle is one of the most common dishwasher problems in San Diego. It has four distinct causes, and diagnosing in the correct order saves time and unnecessary repair costs.\n\nStart with the filter — the mesh filter at the bottom of the tub collects food debris and clogs over time. San Diego's hard water deposits accelerate buildup. Cleaning the filter takes five minutes and resolves the problem in many cases. If the filter is clean, check the drain hose for kinks or blockages, and verify the garbage disposal connection — a common oversight during installation or disposal replacement is leaving the knockout plug in place.\n\nIf both are clear, the drain pump has likely failed. Our technician works through this diagnostic sequence efficiently and completes the repair — whether it's a filter clean, hose repair, or pump replacement — in a single visit in most cases.",
      commonCauses: [
        "Clogged filter — most common cause; clean monthly in San Diego's hard water",
        "Blocked or kinked drain hose — hose behind or below the unit",
        "Garbage disposal knockout plug — not removed during installation",
        "Improper drain hose height — hose not looped high enough, allowing backflow",
        "Failed drain pump — motor or impeller failure preventing water from exiting",
      ],
      priceRange: "$250–$350",
      parentServiceSlug: "dishwasher-repair",
      parentServiceName: "Dishwasher Repair",
    },
    {
      slug: "door-latch-repair",
      name: "Dishwasher Door Latch Repair",
      h1: "Dishwasher Door Latch Repair in San Diego — WNDW Appliance Repair",
      metaTitle: "Dishwasher Door Latch Repair San Diego",
      metaDescription:
        "Dishwasher door latch repair in San Diego — won't start or door won't stay closed. $85 diagnostic fee waived if we fix it. 90-day warranty. Call (858) 264-3138.",
      primaryKeyword: "dishwasher door latch repair san diego",
      shortDesc: "Dishwasher won't start — door latch switch tells the control board the door is closed.",
      description:
        "The door latch on a dishwasher serves two purposes: it physically holds the door closed during operation, and it contains a switch that signals the control board the door is secured before allowing a cycle to start. When the latch fails, the dishwasher won't respond to the start button — the control board treats it as an open door.\n\nLatch failures are usually visible: the door doesn't click when you close it, or it springs open slightly during the cycle. Sometimes the physical latch is fine but the internal switch has failed — the door feels secure but the switch no longer sends the closed signal.\n\nDoor latch assemblies are inexpensive components. Our technician tests the switch for continuity and replaces the latch assembly if needed — a straightforward repair completed at the front of the machine without major disassembly.",
      commonCauses: [
        "Failed door latch switch — door closes but machine won't start",
        "Broken latch hook — door doesn't hold closed during cycle",
        "Worn strike plate — door latch can't engage the catch properly",
        "Misaligned door — dishwasher not level or door hinges worn, preventing proper latching",
        "Control board not receiving latch signal — wiring fault between latch switch and board",
      ],
      priceRange: "$250–$350",
      parentServiceSlug: "dishwasher-repair",
      parentServiceName: "Dishwasher Repair",
    },
    {
      slug: "leaking-repair",
      name: "Dishwasher Leaking Repair",
      h1: "Dishwasher Leaking Repair in San Diego — WNDW Appliance Repair",
      metaTitle: "Dishwasher Leaking Repair San Diego",
      metaDescription:
        "Dishwasher leaking in San Diego? Water on the floor from door or base. $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. Call (858) 264-3138.",
      primaryKeyword: "dishwasher leaking san diego",
      shortDesc: "Water on the floor — door gasket, inlet valve, spray arm, or door seal failure.",
      description:
        "A leaking dishwasher is a water damage risk to flooring and cabinets. Identifying where the leak originates determines the repair needed — and the location tells you a lot before the technician arrives.\n\nA leak from the door is almost always the door gasket: the rubber seal around the door perimeter that creates a watertight barrier when closed. San Diego's hard water deposits degrade rubber gaskets faster than soft-water areas, and a gasket that's cracked or compressed flat won't seal properly. A leak from the base of the machine points to either the inlet valve (water supply connection that can develop a drip), a cracked spray arm, or a tub seal failure in older machines.\n\nOur technician identifies the leak source, replaces the faulty component, and runs a full cycle to verify the seal is watertight before leaving.",
      commonCauses: [
        "Worn door gasket — compressed or cracked rubber seal around the door frame",
        "Faulty water inlet valve — supply valve dripping at the connection point",
        "Cracked spray arm — water spraying against the door gasket at high pressure",
        "Overfilling — control board or float switch issue causing excess water",
        "Tub seal failure — inner door seal degraded on older machines",
      ],
      priceRange: "$250–$350",
      parentServiceSlug: "dishwasher-repair",
      parentServiceName: "Dishwasher Repair",
    },
  ],

  "refrigerator-repair": [
    {
      slug: "water-ice-dispenser-repair",
      name: "Water & Ice Dispenser Repair",
      h1: "Refrigerator Water & Ice Dispenser Repair in San Diego — WNDW Appliance Repair",
      metaTitle: "Refrigerator Water Dispenser Repair San Diego",
      metaDescription:
        "Refrigerator water and ice dispenser repair in San Diego — no water, slow flow, or not dispensing. $85 diagnostic fee waived. 90-day warranty. Call (858) 264-3138.",
      primaryKeyword: "refrigerator water dispenser repair san diego",
      shortDesc: "No water or ice from the dispenser — water inlet valve, filter, or actuator.",
      description:
        "Refrigerator water and ice dispensers stop working for several distinct reasons, and most are diagnosed and repaired in a single visit. The most common cause is a clogged or expired water filter — filters should be replaced every 6 months, and San Diego's hard water (300+ ppm) clogs them faster than the manufacturer's timeline suggests.\n\nIf the filter is current, the water inlet valve is the next most likely cause. This valve opens to allow water flow when you press the dispenser paddle; when it fails electrically or its solenoid sticks, no water passes through. The dispenser switch and actuator bar can also fail independently of the valve.\n\nFor ice dispenser issues specifically — ice chute jams, auger motor failures, and frozen dispenser lines are common causes beyond the inlet valve. Our technician traces the full dispenser circuit to identify the specific failure.",
      commonCauses: [
        "Clogged or expired water filter — replace every 6 months; San Diego hard water clogs faster",
        "Failed water inlet valve — solenoid doesn't open when dispenser paddle is pressed",
        "Frozen water supply line — line freezes in the door or fresh food compartment",
        "Dispenser switch failure — paddle switch no longer sends signal to valve",
        "Ice auger motor failure — water dispenses fine but ice won't dispense",
      ],
      priceRange: "$350–$900",
      parentServiceSlug: "refrigerator-repair",
      parentServiceName: "Refrigerator Repair",
    },
    {
      slug: "compressor-repair",
      name: "Refrigerator Compressor Repair",
      h1: "Refrigerator Compressor Repair in San Diego — WNDW Appliance Repair",
      metaTitle: "Refrigerator Compressor Repair San Diego",
      metaDescription:
        "Refrigerator compressor repair in San Diego — not cooling, running constantly, or clicking off. $85 diagnostic fee waived. 90-day warranty. Call (858) 264-3138.",
      primaryKeyword: "refrigerator compressor repair san diego",
      shortDesc: "Fridge running but not cooling — compressor or start relay diagnosis and repair.",
      description:
        "The compressor is the heart of the refrigeration system — it compresses refrigerant and circulates it through the coils to remove heat from the refrigerator interior. When the compressor fails or struggles, the refrigerator loses the ability to cool, even though the lights and fans may still run normally.\n\nBefore concluding the compressor itself has failed, our technician rules out simpler issues that mimic compressor failure: a faulty start relay (the small component that helps the compressor motor start — rattles when shaken if failed), dirty condenser coils preventing heat dissipation, or a failed condenser fan. These are far less expensive fixes.\n\nCompressor repair runs $650–$1,200 depending on the refrigerator model and whether refrigerant work is required. A failed compressor on a refrigerator under 7–8 years old with a high replacement value is typically worth repairing. On older refrigerators, your technician will give you an honest cost-benefit assessment after diagnosis. Refrigerant work requires EPA certification — our technician is qualified to perform refrigerant service.",
      commonCauses: [
        "Failed start relay — small component that helps compressor motor start; inexpensive fix",
        "Compressor overload protector failure — thermal protector trips and won't reset",
        "Worn compressor motor windings — compressor runs hot and cycles off on thermal overload",
        "Refrigerant leak — low refrigerant causes compressor to run constantly without cooling",
        "Dirty condenser coils — heat buildup causes compressor to overheat and shut down",
      ],
      priceRange: "$650–$1,200",
      parentServiceSlug: "refrigerator-repair",
      parentServiceName: "Refrigerator Repair",
    },
    {
      slug: "door-seal-replacement",
      name: "Refrigerator Door Seal Replacement",
      h1: "Refrigerator Door Seal Replacement in San Diego — WNDW Appliance Repair",
      metaTitle: "Refrigerator Door Seal Replacement San Diego",
      metaDescription:
        "Refrigerator door seal (gasket) replacement in San Diego — fridge running constantly or not cooling. $85 diagnostic fee waived. 90-day warranty. Call (858) 264-3138.",
      primaryKeyword: "refrigerator door seal replacement san diego",
      shortDesc: "Fridge runs constantly or warms up — door gasket not sealing properly.",
      description:
        "The refrigerator door gasket is the magnetic rubber seal that runs around the perimeter of the refrigerator and freezer doors. When it seals properly, it holds cold air inside. When it fails — through tears, compression, or hardening — warm air leaks in constantly, forcing the compressor to run continuously to compensate.\n\nA simple test: close the door on a piece of paper and try to slide it out. If the paper slides easily at any point around the door frame, the gasket isn't sealing. In coastal San Diego, the combination of salt air and humidity accelerates rubber degradation; gaskets in beachside homes may need replacement after 5–7 years instead of the standard 10.\n\nGasket replacement requires removing the old seal from its retaining channel and seating the new seal. On most refrigerators, this is a same-visit repair. Our technician tests the seal around the full perimeter before leaving.",
      commonCauses: [
        "Hardened or cracked rubber — age and temperature cycles degrade the gasket material",
        "Torn gasket — physical damage from door impacts or pets",
        "Compressed flat spots — years of use compress the foam backing; gasket loses magnetic grip",
        "Mold or mildew buildup — soft gasket material accumulates mold; cleaning doesn't restore the seal",
        "Salt air degradation — coastal San Diego neighborhoods accelerate rubber breakdown",
      ],
      priceRange: "$350–$900",
      parentServiceSlug: "refrigerator-repair",
      parentServiceName: "Refrigerator Repair",
    },
    {
      slug: "leaking-repair",
      name: "Refrigerator Leaking Repair",
      h1: "Refrigerator Leaking Repair in San Diego — WNDW Appliance Repair",
      metaTitle: "Refrigerator Leaking Repair San Diego",
      metaDescription:
        "Refrigerator leaking water in San Diego — puddles inside or under the fridge. $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. Call (858) 264-3138.",
      primaryKeyword: "refrigerator leaking water san diego",
      shortDesc: "Puddles inside or under the fridge — defrost drain, inlet valve, or ice maker line.",
      description:
        "Water leaking from a refrigerator can appear inside the unit (pooling on a shelf or in the crisper), underneath the refrigerator, or in both places. Where the water appears narrows down the cause significantly.\n\nWater pooling inside the refrigerator — especially in the fresh food compartment — almost always indicates a clogged defrost drain. During the automatic defrost cycle, water drips off the evaporator coils and should flow down a drain tube to the drip pan below the unit. When San Diego's hard water deposits clog this tube, water backs up and overflows into the refrigerator interior. Clearing the drain resolves the leak.\n\nWater underneath the refrigerator points to the water inlet valve (the supply connection for ice maker and dispenser), a cracked ice maker fill tube, or an overflowing drip pan. Our technician identifies the leak source, traces it back to the cause, and repairs the affected component.",
      commonCauses: [
        "Clogged defrost drain — most common cause of water pooling inside the refrigerator",
        "Cracked water inlet valve — supply connection drips at the valve body",
        "Cracked ice maker fill tube — water leaks inside the freezer before reaching the ice maker",
        "Overflowing drain pan — defrost water pan cracks or fill rate exceeds evaporation",
        "Frozen water line — door water supply line freezes and cracks when it thaws",
      ],
      priceRange: "$350–$900",
      parentServiceSlug: "refrigerator-repair",
      parentServiceName: "Refrigerator Repair",
    },
  ],

  "oven-range-stove-repair": [
    {
      slug: "igniter-replacement",
      name: "Oven Igniter Replacement",
      h1: "Oven Igniter Replacement in San Diego — WNDW Appliance Repair",
      metaTitle: "Oven Igniter Replacement San Diego",
      metaDescription:
        "Oven igniter replacement in San Diego — gas oven won't heat or takes too long to ignite. $85 diagnostic fee waived if we fix it. 90-day warranty. Call (858) 264-3138.",
      primaryKeyword: "oven igniter replacement san diego",
      shortDesc: "Gas oven won't heat or takes long to ignite — igniter glows but burner won't light.",
      description:
        "The oven igniter is the most commonly replaced part in gas ranges and one of the most frequent appliance repairs overall. The igniter serves two functions: it glows hot enough to ignite the gas, and it draws enough current to open the gas valve. When it weakens, it may still glow visibly but no longer draws sufficient current to open the valve — so gas never flows and the oven doesn't heat.\n\nA weak igniter typically shows itself in one of two ways: the oven takes 3–5 minutes or longer to ignite (normal is 30–90 seconds), or it simply doesn't ignite at all despite the igniter glowing. In both cases, the igniter's resistance has increased with age to the point where it can't reliably open the gas valve.\n\nIgniter replacement is one of the most straightforward gas oven repairs. The igniter is accessed from inside the oven by removing the oven bottom panel, and replacement typically takes 30–45 minutes.",
      commonCauses: [
        "Weak igniter — glows but too weak to open gas valve; most common gas oven issue",
        "Cracked igniter — silicon carbide igniters are fragile and break with thermal cycling",
        "Gas valve failure — igniter works correctly but gas valve solenoid fails to open",
        "Clogged burner ports — burner lights intermittently or with a delay",
        "Control board fault — board doesn't send proper signal to start the ignition sequence",
      ],
      priceRange: "$250–$350",
      parentServiceSlug: "oven-range-stove-repair",
      parentServiceName: "Oven / Range / Stove Repair",
    },
    {
      slug: "not-heating-repair",
      name: "Oven Not Heating Repair",
      h1: "Oven Not Heating Repair in San Diego — WNDW Appliance Repair",
      metaTitle: "Oven Not Heating Repair San Diego",
      metaDescription:
        "Oven not heating in San Diego? Gas or electric oven stays cold. $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. Call (858) 264-3138.",
      primaryKeyword: "oven not heating san diego",
      shortDesc: "Oven stays cold during preheating — bake element, igniter, or temperature sensor.",
      description:
        "An oven that won't heat is one of the most disruptive appliance failures. The diagnosis depends on whether you have a gas or electric oven.\n\nFor electric ovens, the bake element (the coiled resistance element at the oven bottom) is the most common cause of complete heating failure. It often shows visible signs of failure — a crack, blister, or burn spot. A failed temperature sensor can also cause the oven to stop heating by sending an incorrect reading to the control board.\n\nFor gas ovens, a failed igniter (the most common repair) or a faulty gas valve prevents the burner from lighting. Our technician diagnoses whether the issue is the heating component, the temperature sensor, or the control board before recommending a repair.",
      commonCauses: [
        "Failed bake element (electric) — visible cracking, blistering, or burn marks",
        "Weak or failed igniter (gas) — most common gas oven heating failure",
        "Failed oven temperature sensor — sends wrong reading, board cuts off heat",
        "Faulty control board — board not sending heat command despite correct settings",
        "Failed thermal fuse (some models) — one-time safety device trips after overheating",
      ],
      priceRange: "$250–$350",
      parentServiceSlug: "oven-range-stove-repair",
      parentServiceName: "Oven / Range / Stove Repair",
    },
    {
      slug: "stove-burner-repair",
      name: "Stove Burner Repair",
      h1: "Stove Burner Repair in San Diego — WNDW Appliance Repair",
      metaTitle: "Stove Burner Repair San Diego",
      metaDescription:
        "Stove burner repair in San Diego — one or more burners not heating, not lighting, or uneven flame. $85 diagnostic fee waived if we fix it. 90-day warranty. Call (858) 264-3138.",
      primaryKeyword: "stove burner repair san diego",
      shortDesc: "Burner won't heat or light — coil element, spark igniter, or burner cap blockage.",
      description:
        "A stovetop burner that won't work — whether it won't heat, won't light, or produces an uneven flame — has a straightforward fix that depends on whether the stove is electric or gas.\n\nOn electric coil-top stoves, a failed coil element simply needs replacement. On smooth-top electric stoves (ceramic/induction), a failed internal element or a faulty infinite switch (the burner control knob) is the typical cause. On gas stoves, the most common issues are a clogged burner cap (food debris blocking the gas ports) or a failed spark igniter. A burner that clicks continuously even when not in use usually has a wet or dirty igniter that needs cleaning or replacement.\n\nOur technician identifies the specific burner failure, replaces the faulty component, and tests all burners to confirm full function before completing the visit.",
      commonCauses: [
        "Clogged burner cap (gas) — food debris blocking gas ports causes weak or no flame",
        "Failed coil element (electric) — visible damage or no heat on that burner",
        "Failed infinite switch — burner control knob not regulating heat properly",
        "Faulty spark igniter (gas) — burner won't light or clicks continuously",
        "Cracked burner cap (gas) — physical damage causes uneven or no flame",
      ],
      priceRange: "$250–$350",
      parentServiceSlug: "oven-range-stove-repair",
      parentServiceName: "Oven / Range / Stove Repair",
    },
    {
      slug: "clicking-repair",
      name: "Gas Stove Clicking Repair",
      h1: "Gas Stove Clicking Repair in San Diego — WNDW Appliance Repair",
      metaTitle: "Gas Stove Clicking Repair San Diego",
      metaDescription:
        "Gas stove clicking when off in San Diego? Burner igniter clicking continuously — moisture or igniter failure. $85 diagnostic fee waived. 90-day warranty. Call (858) 264-3138.",
      primaryKeyword: "gas stove clicking san diego",
      shortDesc: "Burner clicks repeatedly when not in use — wet or faulty igniter module.",
      description:
        "A gas stove that clicks continuously — even when all burners are off — is one of the most common and frustrating range complaints. The clicking is the spark igniter system firing repeatedly, which it's only supposed to do when you're trying to light a burner.\n\nThe most common cause is moisture. When liquid boils over onto the burner, it soaks into the igniter and spark module. The wet igniter creates a partial electrical path that triggers continuous clicking. In most cases, the clicking stops once the igniter dries out — removing the burner cap, cleaning the area thoroughly, and letting it air dry for several hours often resolves this without any repair. San Diego's coastal humidity slows this drying process.\n\nIf the clicking persists after drying, the igniter itself has failed and needs replacement, or the spark module (which controls all igniters) has developed a fault. Our technician tests each igniter and the module to identify the specific failure.",
      commonCauses: [
        "Moisture in igniter — boilover soaks the igniter; most common cause of continuous clicking",
        "Cracked spark electrode — electrode tip cracked, creating a partial circuit to the burner cap",
        "Food debris on igniter — debris bridges the gap between electrode and cap",
        "Failed spark module — module continuously fires all igniters simultaneously",
        "Loose wiring connection — ground wire connection to igniter or module loose",
      ],
      priceRange: "$250–$350",
      parentServiceSlug: "oven-range-stove-repair",
      parentServiceName: "Oven / Range / Stove Repair",
    },
  ],

  "microwave-repair": [
    {
      slug: "not-heating-repair",
      name: "Microwave Not Heating Repair",
      h1: "Microwave Not Heating Repair in San Diego — WNDW Appliance Repair",
      metaTitle: "Microwave Not Heating Repair San Diego",
      metaDescription:
        "Microwave not heating in San Diego — runs but food stays cold. $85 diagnostic fee waived if we fix it. 90-day warranty. All brands. Call (858) 264-3138.",
      primaryKeyword: "microwave not heating san diego",
      shortDesc: "Microwave runs but food stays cold — magnetron, diode, or high-voltage capacitor.",
      description:
        "A microwave that runs through its cycle — turntable spinning, light on, timer counting — but produces no heat has a failure in the high-voltage circuit that powers the magnetron. This is distinct from a microwave that won't power on at all.\n\nThe magnetron is the component that generates the microwave energy that heats food. It fails with age or after power surges. The high-voltage diode converts power for the magnetron and is a common failure point — a failed diode often produces a loud buzzing sound along with no heating. The high-voltage capacitor stores and releases charge for the magnetron; if it fails, the magnetron gets no power.\n\n**Safety note:** Microwave capacitors hold a dangerous charge — up to 6,000 volts — even when the unit is unplugged. Microwave repair requires proper discharge procedures before any internal inspection. Do not attempt to open a microwave for self-diagnosis.",
      commonCauses: [
        "Failed magnetron — main heating component fails with age or power surge",
        "Failed high-voltage diode — produces loud buzzing and no heat",
        "Failed high-voltage capacitor — magnetron receives no power",
        "Blown high-voltage fuse — one-time fuse fails after magnetron fault or power surge",
        "Faulty door interlock switch — one of the 3 door switches fails, cutting power to high-voltage circuit",
      ],
      priceRange: "$250–$350",
      parentServiceSlug: "microwave-repair",
      parentServiceName: "Microwave Repair",
    },
    {
      slug: "no-power-repair",
      name: "Microwave No Power Repair",
      h1: "Microwave No Power Repair in San Diego — WNDW Appliance Repair",
      metaTitle: "Microwave No Power Repair San Diego",
      metaDescription:
        "Microwave with no power in San Diego — completely dead, no display or response. $85 diagnostic fee waived if we fix it. 90-day warranty. Call (858) 264-3138.",
      primaryKeyword: "microwave no power san diego",
      shortDesc: "Completely dead — no display, no response — fuse, door switch, or control board.",
      description:
        "A microwave that is completely dead — no display, no response to any button, no light when the door opens — has lost power to the control circuit. Before calling for service, verify the outlet is working (plug in a different appliance) and check whether the circuit breaker has tripped.\n\nIf the outlet is confirmed working, the most common internal cause is a blown line fuse — a small ceramic fuse inside the microwave that blows after a power surge, door slam, or internal component failure. The fuse is inexpensive and replacement is straightforward, but the root cause of the fuse blowing should be identified to prevent a repeat failure.\n\nDoor interlock switch failures can also cut all power — the microwave's safety circuit requires all three door switches to be functioning. A thermal cutout (an overtemperature safety device) can also open and cut power if the microwave has been running excessively or ventilation is blocked.",
      commonCauses: [
        "Blown line fuse — most common cause of complete power loss; often caused by power surge",
        "Failed door interlock switch — safety circuit requires all door switches to function",
        "Tripped thermal cutout — overtemperature safety device, triggered by blocked ventilation",
        "Failed control board — board failure cuts all control functions including display",
        "Power surge damage — surge can damage the fuse, board, or magnetron simultaneously",
      ],
      priceRange: "$250–$350",
      parentServiceSlug: "microwave-repair",
      parentServiceName: "Microwave Repair",
    },
    {
      slug: "door-repair",
      name: "Microwave Door Repair",
      h1: "Microwave Door Repair in San Diego — WNDW Appliance Repair",
      metaTitle: "Microwave Door Repair San Diego",
      metaDescription:
        "Microwave door repair in San Diego — won't close, latch broken, or door switch failure. $85 diagnostic fee waived if we fix it. 90-day warranty. Call (858) 264-3138.",
      primaryKeyword: "microwave door repair san diego",
      shortDesc: "Door won't close or latch — door handle, latch hook, or interlock switch.",
      description:
        "A microwave with a door that won't close properly won't run — by design. The safety interlock system requires the door to be fully latched and all three door switches to be activated before the magnetron can receive power. A door that appears closed but hasn't engaged all switches will prevent the microwave from starting.\n\nThe door latch system consists of the latch hooks on the door, the catches (holes in the microwave body the hooks engage), and three interlock switches behind the door frame. Common failures include broken latch hooks (plastic tabs that snap when the door is closed hard), worn interlock switches (the switches actuated by the hooks), and broken or bent door handles.\n\nDoor handle replacement and interlock switch replacement are the most common microwave door repairs. Both are straightforward fixes that restore normal operation without needing to replace the entire unit.",
      commonCauses: [
        "Broken latch hook — plastic hook snaps from slamming the door",
        "Failed door interlock switch — switch actuated by latch hook fails",
        "Broken door handle — handle cracks or snaps off from the door assembly",
        "Bent door frame — physical damage to the door prevents proper alignment with the catches",
        "Worn door catch — the receiving holes in the microwave body wear or deform",
      ],
      priceRange: "$250–$350",
      parentServiceSlug: "microwave-repair",
      parentServiceName: "Microwave Repair",
    },
    {
      slug: "sparking-repair",
      name: "Microwave Sparking Repair",
      h1: "Microwave Sparking Repair in San Diego — WNDW Appliance Repair",
      metaTitle: "Microwave Sparking Repair San Diego",
      metaDescription:
        "Microwave sparking inside in San Diego — arcing from waveguide cover or magnetron. $85 diagnostic fee waived if we fix it. 90-day warranty. Call (858) 264-3138.",
      primaryKeyword: "microwave sparking san diego",
      shortDesc: "Arcing or sparking inside the microwave — waveguide cover damage or burned cavity.",
      description:
        "Sparking inside a microwave — visible arcing with a crackling or popping sound — requires stopping use immediately. Continued operation with sparking can damage the magnetron, burn the interior cavity, and in rare cases start a fire.\n\nThe most common cause is a damaged or soiled waveguide cover — the flat panel covering the opening on the microwave's interior side wall. Food splatter that burns onto this cover creates a carbon deposit that arcs under microwave energy. If the cover is only soiled, cleaning it thoroughly may resolve the sparking. If the cover itself is cracked or burned through, it needs replacement.\n\nIf sparking continues after the waveguide cover is clean and intact, the issue may be a failing magnetron with internal arcing, or metal particles embedded in the oven cavity from a previous sparking event. Our technician inspects the full interior and magnetron before recommending a repair path.",
      commonCauses: [
        "Soiled waveguide cover — burned food debris arcing under microwave energy",
        "Cracked or damaged waveguide cover — cover needs replacement",
        "Metal accidentally used in microwave — metal utensil or foil left residue in cavity",
        "Failing magnetron — internal arcing within the magnetron itself",
        "Damaged oven cavity — burn marks or metal flakes in the interior creating arc points",
      ],
      priceRange: "$250–$350",
      parentServiceSlug: "microwave-repair",
      parentServiceName: "Microwave Repair",
    },
  ],
}

export function getSubServicesForService(serviceSlug: string): SubService[] {
  return SUB_SERVICES[serviceSlug] ?? []
}

export function getSubServiceBySlug(
  serviceSlug: string,
  subSlug: string
): SubService | undefined {
  return SUB_SERVICES[serviceSlug]?.find((s) => s.slug === subSlug)
}

export function getAllSubServiceParams(): { slug: string; subSlug: string }[] {
  return Object.entries(SUB_SERVICES).flatMap(([serviceSlug, subServices]) =>
    subServices.map((s) => ({ slug: serviceSlug, subSlug: s.slug }))
  )
}
