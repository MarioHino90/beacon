import { selectorWithChildren } from "@braze/cypress-utils";

export const label = (): Cypress.Chainable => cy.get(".bcl-label");

export const labelWithChildren = selectorWithChildren(() =>
  cy.get(".bcl-label")
);
