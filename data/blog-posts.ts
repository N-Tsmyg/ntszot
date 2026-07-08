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
  name: "Andrei Zotolokin",
  jobTitle: "Owner & Appliance Repair Technician",
  bio: "Andrei Zotolokin is the founder and lead technician at NTSZOT Appliance Repair. He earned factory certifications from Samsung, LG, Whirlpool, GE, and other major brands while working in Las Vegas before relocating to San Diego with his family. He started NTSZOT after seeing a clear demand for professional, certified appliance repair in San Diego County.",
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-much-does-appliance-repair-cost-in-san-diego",
    title: "How Much Does Appliance Repair Cost in San Diego in 2026?",
    metaTitle: "Appliance Repair Cost San Diego | NTSZOT Appliance Repair",
    metaDescription:
      "Appliance repair in San Diego costs $300–$400 including parts and labor. $80 service call includes the diagnostic. 60-day warranty. Call (619) 488-4477.",
    primaryKeyword: "appliance repair cost san diego",
    datePublished: "2026-03-01",
    dateModified: "2026-03-01",
    authorName: DEFAULT_AUTHOR.name,
    authorJobTitle: DEFAULT_AUTHOR.jobTitle,
    excerpt:
      "Most appliance repairs in San Diego cost $300–$400 including parts and labor. Here is a full breakdown by appliance type, plus how the $80 service call fee works.",
    featuredImageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    featuredImageAlt: "Appliance repair technician working on a dishwasher in a San Diego home",
    relatedServiceSlugs: ["washer-repair", "refrigerator-repair", "dishwasher-repair"],
    relatedCitySlugs: ["san-diego-appliance-repair", "la-jolla-appliance-repair"],
  },
  {
    slug: "refrigerator-not-cooling-san-diego",
    title: "Refrigerator Not Cooling? Here's What San Diego Homeowners Should Check First",
    metaTitle: "Refrigerator Not Cooling San Diego | NTSZOT Appliance Repair",
    metaDescription:
      "Refrigerator not cooling in San Diego? Check condenser coils and evaporator fan first. $80 service call fee waived if we fix it. Call (619) 488-4477.",
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
    metaTitle: "Washer Repair Signs San Diego | NTSZOT Appliance Repair",
    metaDescription:
      "Loud noises, leaks, wet clothes after spin — 5 signs your washer needs repair in San Diego. $80 service call fee waived if we fix it. Call (619) 488-4477.",
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
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}
