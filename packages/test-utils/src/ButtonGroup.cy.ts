import { extractSelector } from "@braze/cypress-utils";

import { button } from "./Button.cy";

export const buttonGroup = extractSelector({
  self: () => cy.get(".bcl-button-group"),
  children: {
    button,
  },
});
