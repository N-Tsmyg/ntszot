import type { FC } from "react"
import ApplianceRepairCostPost from "./how-much-does-appliance-repair-cost-in-san-diego"
import DishwasherNotDrainingPost from "./dishwasher-not-draining-san-diego"
import RefrigeratorNotCoolingPost from "./refrigerator-not-cooling-san-diego"
import WasherRepairSignsPost from "./washer-needs-repair-signs-san-diego"
import DryerTakingTooLongPost from "./dryer-taking-too-long-san-diego"
import RepairVsReplacePost from "./repair-vs-replace-appliance-san-diego"
import OvenNotHeatingEvenlyPost from "./oven-not-heating-evenly-san-diego"
import SamsungApplianceRepairPost from "./samsung-appliance-repair-san-diego"
import SpringMaintenanceChecklistPost from "./spring-appliance-maintenance-checklist-san-diego"

export const POST_CONTENT_MAP: Record<string, FC> = {
  "how-much-does-appliance-repair-cost-in-san-diego": ApplianceRepairCostPost,
  "dishwasher-not-draining-san-diego": DishwasherNotDrainingPost,
  "refrigerator-not-cooling-san-diego": RefrigeratorNotCoolingPost,
  "washer-needs-repair-signs-san-diego": WasherRepairSignsPost,
  "dryer-taking-too-long-san-diego": DryerTakingTooLongPost,
  "repair-vs-replace-appliance-san-diego": RepairVsReplacePost,
  "oven-not-heating-evenly-san-diego": OvenNotHeatingEvenlyPost,
  "samsung-appliance-repair-san-diego": SamsungApplianceRepairPost,
  "spring-appliance-maintenance-checklist-san-diego": SpringMaintenanceChecklistPost,
}
