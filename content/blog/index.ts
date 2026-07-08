import type { FC } from "react"
import ApplianceRepairCostPost from "./how-much-does-appliance-repair-cost-in-san-diego"
import RefrigeratorNotCoolingPost from "./refrigerator-not-cooling-san-diego"
import WasherRepairSignsPost from "./washer-needs-repair-signs-san-diego"

export const POST_CONTENT_MAP: Record<string, FC> = {
  "how-much-does-appliance-repair-cost-in-san-diego": ApplianceRepairCostPost,
  "refrigerator-not-cooling-san-diego": RefrigeratorNotCoolingPost,
  "washer-needs-repair-signs-san-diego": WasherRepairSignsPost,
}
