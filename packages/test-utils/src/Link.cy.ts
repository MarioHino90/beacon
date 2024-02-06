import { selectorWithChildren } from "@braze/cypress-utils";

export const link = (): Cypress.Chainable => cy.get("a.bcl-link");

export const linkWithChildren = selectorWithChildren(() =>
  cy.get("a.bcl-link")
);
