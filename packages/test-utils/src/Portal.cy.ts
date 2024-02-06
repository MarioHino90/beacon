import { selectorWithChildren } from "@braze/cypress-utils";

export const portal = (): Cypress.Chainable => cy.get(".bcl-portal");

export const portalWithChildren = selectorWithChildren(portal);
