import { extractDeclaration, extractSelector } from "@braze/cypress-utils";

import { button } from "./Button.cy";
import { icon } from "./Icon.cy";
import { input } from "./Input.cy";
import { tooltip, tooltipById } from "./Tooltip.cy";

export const copyFieldSelector = extractSelector({
  self: () => cy.get(".bcl-copy-field"),
  children: {
    input,
    button: {
      self: button,
      children: {
        icon,
      },
    },
  },
});

export const copyField = extractDeclaration({
  tooltip,
  tooltipById,
  copyField: copyFieldSelector,
});
