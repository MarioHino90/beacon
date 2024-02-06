import { extractSelector } from "@braze/cypress-utils";

export const helpText = (): Cypress.Chainable => cy.get(".bcl-help-text");

export const nthHelpText = extractSelector({
  self: (num: number) => cy.get(`.bcl-help-text:nth-child(${num})`),
  needsParams: true,
  children: {},
});
