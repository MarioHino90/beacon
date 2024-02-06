import { extractSelector } from "@braze/cypress-utils";

import { icon } from "./Icon.cy";

export const iconCircle = extractSelector({
  self: () => cy.get(".bcl-icon-circle"),
  children: { icon },
});
