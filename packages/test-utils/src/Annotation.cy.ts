import { extractDeclaration } from "@braze/cypress-utils";

import { tooltip, tooltipById } from "./Tooltip.cy";
import { icon } from "./Icon.cy";

export const annotation = extractDeclaration({
  tooltip,
  tooltipById,
  icon,
});
