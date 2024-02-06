import { extractSelector } from "@braze/cypress-utils";

import { input } from "./Input.cy";

export const numberInput = extractSelector({
  self: () => cy.get(".bcl-number-input"),
  children: {
    input,
    upButton: () => cy.get(".number-input--up-button"),
    downButton: () => cy.get(".number-input--down-button"),
  },
});
