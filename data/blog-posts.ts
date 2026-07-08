export interface HowToStep {
  name: string
  text: string
}

export interface HowToSchemaData {
  name: string
  description: string
  totalTime: string
  steps: HowToStep[]
}

export interface BlogPost {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  primaryKeyword: string
  datePublished: string
  dateModified: string
  authorName: string
  authorJobTitle: string
  excerpt: string
  featuredImageUrl: string
  featuredImageAlt: string
  relatedServiceSlugs: string[]
  relatedCitySlugs: string[]
  howToSchema?: HowToSchemaData
}

export const DEFAULT_AUTHOR = {
  name: "Mikita Tsmyh",
  jobTitle: "Owner & Appliance Repair Technician",
  bio: "Mikita Tsmyh is the owner and technician at WNDW Appliance Repair. He started the company after years as a cleaner and Airbnb host — experiencing firsthand how a broken appliance can derail an entire day. His goal is simple: same-day repair, fair pricing, zero hassle for the client.",
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-much-does-appliance-repair-cost-in-san-diego",
    title: "How Much Does Appliance Repair Cost in San Diego in 2026?",
    metaTitle: "Appliance Repair Cost San Diego | WNDW Appliance Repair",
    metaDescription:
      "Appliance repair in San Diego costs $250–$350 for most appliances, $350–$900 for refrigeration. $85 diagnostic fee waived if we fix it. Call (858) 264-3138.",
    primaryKeyword: "appliance repair cost san diego",
    datePublished: "2026-03-01",
    dateModified: "2026-03-01",
    authorName: DEFAULT_AUTHOR.name,
    authorJobTitle: DEFAULT_AUTHOR.jobTitle,
    excerpt:
      "Most appliance repairs in San Diego cost $250–$350 including parts and labor. Refrigerators and freezers run $350–$900. Here is a full breakdown by appliance type, plus how the $85 diagnostic fee works.",
    featuredImageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    featuredImageAlt: "Appliance repair technician working on a dishwasher in a San Diego home",
    relatedServiceSlugs: ["washer-repair", "refrigerator-repair", "dishwasher-repair"],
    relatedCitySlugs: ["san-diego-appliance-repair", "la-jolla-appliance-repair"],
  },
  {
    slug: "dishwasher-not-draining-san-diego",
    title: "Dishwasher Not Draining? Here's What to Check First (San Diego Guide)",
    metaTitle: "Dishwasher Not Draining San Diego | WNDW Appliance Repair",
    metaDescription:
      "Dishwasher not draining in San Diego? Check the filter, drain hose, and pump first. $85 diagnostic fee waived if we fix it. Call (858) 264-3138.",
    primaryKeyword: "dishwasher not draining san diego",
    datePublished: "2026-03-08",
    dateModified: "2026-03-08",
    authorName: DEFAULT_AUTHOR.name,
    authorJobTitle: DEFAULT_AUTHOR.jobTitle,
    excerpt:
      "Standing water in your dishwasher is almost always one of four problems: a clogged filter, blocked drain hose, failed drain pump, or a garbage disposal connection issue. Here is how to diagnose which one — and when to call a technician.",
    featuredImageUrl:
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=1200&q=80",
    featuredImageAlt: "Standing water pooled at the bottom of a dishwasher after a failed drain cycle in a San Diego home",
    relatedServiceSlugs: ["dishwasher-repair"],
    relatedCitySlugs: ["san-diego-appliance-repair", "chula-vista-appliance-repair"],
    howToSchema: {
      name: "How to Diagnose a Dishwasher That Won't Drain",
      description:
        "Step-by-step diagnostic guide for dishwasher drainage failures, from checking the filter to testing the drain pump.",
      totalTime: "PT30M",
      steps: [
        {
          name: "Check the Dishwasher Filter",
          text: "Remove the lower rack and locate the cylindrical filter at the bottom of the tub. Twist it out and rinse under running water. Clean with a soft brush and dish soap if clogged with grease or food debris. Reinstall and run a short drain cycle.",
        },
        {
          name: "Inspect the Drain Hose",
          text: "Unplug the dishwasher and pull it slightly forward. Inspect the drain hose behind or below the unit for kinks or blockages. Confirm the hose loops up to the cabinet underside before descending to the disposal or sink drain — without this high loop, water can siphon back into the tub.",
        },
        {
          name: "Check the Garbage Disposal Connection",
          text: "If the dishwasher or garbage disposal was recently installed, confirm the knockout plug inside the disposal's dishwasher inlet was removed. If present, remove it with a screwdriver and hammer, clear the plug from the disposal chamber, then reinstall the drain hose.",
        },
        {
          name: "Test the Drain Pump",
          text: "Run a drain cycle and listen at the end. A humming sound with no water movement means the impeller is blocked or the motor is seizing. No sound at all means electrical motor failure. Both conditions require drain pump replacement.",
        },
        {
          name: "Check for Control Board Issues",
          text: "If the pump tests functional but draining still fails, the control board may not be sending the drain signal. Control board failure typically causes multiple symptoms beyond draining. Contact a technician for a full diagnostic.",
        },
      ],
    },
  },
  {
    slug: "refrigerator-not-cooling-san-diego",
    title: "Refrigerator Not Cooling? Here's What San Diego Homeowners Should Check First",
    metaTitle: "Refrigerator Not Cooling San Diego | WNDW Appliance Repair",
    metaDescription:
      "Refrigerator not cooling in San Diego? Check condenser coils and evaporator fan first. $85 diagnostic fee waived if we fix it. Call (858) 264-3138.",
    primaryKeyword: "refrigerator not cooling san diego",
    datePublished: "2026-03-15",
    dateModified: "2026-03-15",
    authorName: DEFAULT_AUTHOR.name,
    authorJobTitle: DEFAULT_AUTHOR.jobTitle,
    excerpt:
      "A refrigerator that stops cooling is a food-safety emergency. In San Diego, dirty condenser coils from coastal dust are a leading cause. Here is a step-by-step diagnostic sequence to identify the problem before calling a technician.",
    featuredImageUrl:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    featuredImageAlt: "Open refrigerator with food inside — refrigerator not cooling in San Diego",
    relatedServiceSlugs: ["refrigerator-repair", "freezer-repair", "ice-maker-repair"],
    relatedCitySlugs: ["san-diego-appliance-repair", "la-jolla-appliance-repair"],
    howToSchema: {
      name: "How to Diagnose a Refrigerator That Stopped Cooling",
      description:
        "Step-by-step diagnostic sequence for a refrigerator that has stopped cooling, starting with the easiest checks and progressing to compressor evaluation.",
      totalTime: "PT45M",
      steps: [
        {
          name: "Check the Condenser Coils",
          text: "Unplug the refrigerator. Access the condenser coils on the back or beneath the unit behind the toe-kick panel. If coated with dust and debris, clean with a coil brush or vacuum crevice attachment. Plug back in and wait 30–60 minutes to see if cooling resumes.",
        },
        {
          name: "Listen for the Evaporator Fan",
          text: "Open the freezer while the compressor is running and listen for the fan. You should hear steady airflow. No fan sound or a grinding noise indicates the evaporator fan motor has failed and needs replacement.",
        },
        {
          name: "Check for Frost Buildup on Evaporator Coils",
          text: "Remove the back panel inside the freezer compartment. Heavy frost or a solid block of ice over the coils means the automatic defrost system has failed. Unplug for 24–48 hours to manually defrost as a temporary fix, then have the defrost heater, thermostat, or control board replaced.",
        },
        {
          name: "Test the Start Relay",
          text: "Unplug the refrigerator and remove the start relay from the side of the compressor. Shake it — a rattling sound confirms the relay has failed and needs replacement. Start relays are inexpensive and often DIY-replaceable. If the relay is intact but the compressor still won't start, the compressor itself may be failing.",
        },
        {
          name: "Evaluate the Compressor",
          text: "Signs of compressor failure include the refrigerator running hot on the back or sides, repeated clicking followed by silence, or constant running without cooling. Contact a technician — compressor diagnosis requires pressure testing and electrical measurement.",
        },
      ],
    },
  },
  {
    slug: "washer-needs-repair-signs-san-diego",
    title: "5 Signs Your Washer Needs Repair in San Diego (Before It Gets Worse)",
    metaTitle: "Washer Repair Signs San Diego | WNDW Appliance Repair",
    metaDescription:
      "Loud noises, leaks, wet clothes after spin — 5 signs your washer needs repair in San Diego. $85 diagnostic fee waived if we fix it. Call (858) 264-3138.",
    primaryKeyword: "washer repair san diego",
    datePublished: "2026-04-03",
    dateModified: "2026-04-03",
    authorName: DEFAULT_AUTHOR.name,
    authorJobTitle: DEFAULT_AUTHOR.jobTitle,
    excerpt:
      "Washing machines give warning signs before they fail. Here are the five signs San Diego homeowners should never ignore — and what each symptom usually means mechanically.",
    featuredImageUrl:
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=1200&q=80",
    featuredImageAlt: "Front-load washing machine in a clean laundry room in a San Diego home",
    relatedServiceSlugs: ["washer-repair"],
    relatedCitySlugs: ["san-diego-appliance-repair", "la-jolla-appliance-repair"],
  },
  {
    slug: "repair-vs-replace-appliance-san-diego",
    title: "Repair vs. Replace: When to Fix a Broken Appliance in San Diego",
    metaTitle: "Repair vs. Replace: When to Fix a Broken Appliance in San Diego",
    metaDescription: "Repair or replace your broken appliance in San Diego? The 50% rule, appliance-by-appliance breakdown, and why older appliances are often worth keeping. $85 diagnostic fee waived.",
    primaryKeyword: "repair vs replace appliance san diego",
    datePublished: "2026-04-10",
    dateModified: "2026-04-10",
    authorName: DEFAULT_AUTHOR.name,
    authorJobTitle: DEFAULT_AUTHOR.jobTitle,
    excerpt: "Newer isn't always better. Older appliances built before 2005 used heavier steel components, simpler motors, and fewer plastic parts — making them strong repair candidates. Here's the framework our technician uses to help San Diego homeowners make the right call.",
    featuredImageUrl: "/images/repair-vs-replace-appliance-san-diego.png",
    featuredImageAlt: "Homeowner weighing repair vs replace decision for a broken appliance in a San Diego kitchen",
    relatedServiceSlugs: ["washer-repair", "dryer-repair", "refrigerator-repair", "oven-range-stove-repair"],
    relatedCitySlugs: ["san-diego-appliance-repair", "la-jolla-appliance-repair"],
  },
  {
    slug: "oven-not-heating-evenly-san-diego",
    title: "Oven Not Heating Evenly — Causes and Repair Costs in San Diego",
    metaTitle: "Oven Not Heating Evenly San Diego | WNDW Appliance Repair",
    metaDescription:
      "Oven not heating evenly in San Diego? Failed bake element, weak igniter, or bad sensor. $85 diagnostic fee waived if we fix it. Call (858) 264-3138.",
    primaryKeyword: "oven not heating evenly san diego",
    datePublished: "2026-04-14",
    dateModified: "2026-04-14",
    authorName: DEFAULT_AUTHOR.name,
    authorJobTitle: DEFAULT_AUTHOR.jobTitle,
    excerpt:
      "An oven with hot and cold spots almost always has a clear mechanical cause: a partially failed bake element, a weak gas igniter, or a faulty temperature sensor. Here is how our technician diagnoses each cause — and what repair costs to expect in San Diego.",
    featuredImageUrl: "/images/oven-not-heating-evenly-san-diego.png",
    featuredImageAlt: "Gas range oven with open door showing uneven browning on a baking sheet in a San Diego kitchen",
    relatedServiceSlugs: ["oven-range-stove-repair"],
    relatedCitySlugs: ["san-diego-appliance-repair", "la-jolla-appliance-repair"],
  },
  {
    slug: "spring-appliance-maintenance-checklist-san-diego",
    title: "Spring Appliance Maintenance Checklist for San Diego Homeowners",
    metaTitle: "Spring Appliance Maintenance Checklist — San Diego",
    metaDescription:
      "Spring appliance maintenance checklist for San Diego homeowners — refrigerator coils, dryer vent, washer filter, dishwasher descale, oven igniter. Call (858) 264-3138.",
    primaryKeyword: "appliance maintenance san diego",
    datePublished: "2026-04-21",
    dateModified: "2026-05-02",
    authorName: DEFAULT_AUTHOR.name,
    authorJobTitle: DEFAULT_AUTHOR.jobTitle,
    excerpt:
      "Most appliance failures are preventable. This checklist covers the five most important maintenance tasks for San Diego homeowners — refrigerator coils, dryer vent, washer seals, dishwasher filter, and oven igniter — and how San Diego's hard water and coastal air affect each one.",
    featuredImageUrl: "/images/spring-maintenance-san-diego.png",
    featuredImageAlt:
      "Open kitchen with refrigerator, range, and dishwasher — spring appliance maintenance checklist for San Diego homeowners",
    relatedServiceSlugs: ["annual-maintenance-plan", "washer-repair", "dryer-repair", "refrigerator-repair"],
    relatedCitySlugs: ["san-diego-appliance-repair", "la-jolla-appliance-repair"],
  },
  {
    slug: "samsung-appliance-repair-san-diego",
    title: "Samsung Appliance Repair San Diego — Most Common Problems We Fix",
    metaTitle: "Samsung Appliance Repair San Diego — Common Problems",
    metaDescription:
      "Samsung refrigerator, washer, dryer & dishwasher repair in San Diego. Error codes explained. $85 diagnostic fee waived if repaired. 90-day warranty. Call (858) 264-3138.",
    primaryKeyword: "samsung appliance repair san diego",
    datePublished: "2026-04-17",
    dateModified: "2026-04-27",
    authorName: DEFAULT_AUTHOR.name,
    authorJobTitle: DEFAULT_AUTHOR.jobTitle,
    excerpt:
      "Samsung refrigerators, washers, dryers, and dishwashers are among the most common appliances we repair in San Diego. Here's what the error codes mean, what causes them, and what repairs typically cost.",
    featuredImageUrl: "/images/samsung-appliance-repair-san-diego.png",
    featuredImageAlt: "Samsung Bespoke refrigerator with Family Hub display and Samsung washer and dryer set in a modern kitchen",
    relatedServiceSlugs: ["refrigerator-repair", "washer-repair", "dryer-repair", "dishwasher-repair"],
    relatedCitySlugs: ["san-diego-appliance-repair", "la-jolla-appliance-repair"],
  },
  {
    slug: "dryer-taking-too-long-san-diego",
    title: "Dryer Taking Too Long to Dry Clothes? Common Causes in San Diego",
    metaTitle: "Dryer Taking Too Long San Diego | WNDW Appliance Repair",
    metaDescription:
      "Dryer taking 2+ cycles in San Diego? Clogged vent, bad heating element, or blown thermal fuse. $85 diagnostic fee waived if we fix it. Call (858) 264-3138.",
    primaryKeyword: "dryer taking too long san diego",
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
    authorName: DEFAULT_AUTHOR.name,
    authorJobTitle: DEFAULT_AUTHOR.jobTitle,
    excerpt:
      "A dryer that needs two or more cycles is wasting energy and building toward a complete failure. Here are the six most common causes — in the order a technician checks them — and what each repair typically costs in San Diego.",
    featuredImageUrl: "/images/dryer-taking-too-long-san-diego.webp",
    featuredImageAlt: "Front-load dryer with open door and wet clothes inside a San Diego laundry room",
    relatedServiceSlugs: ["dryer-repair"],
    relatedCitySlugs: ["san-diego-appliance-repair"],
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}
