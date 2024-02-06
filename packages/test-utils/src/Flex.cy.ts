import { selectorWithChildren } from "@braze/cypress-utils";

export const flex = (): Cypress.Chainable => cy.get(".bcl-flex");

export const flexWithChildren = selectorWithChildren(() => cy.get(".bcl-flex"));
