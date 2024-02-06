import { extractSelector } from "@braze/cypress-utils";

import { icon } from "./Icon.cy";

export const iconButton = extractSelector({
  self: () => cy.get("button.bcl-icon-button"),
  children: {
    icon,
  },
});
