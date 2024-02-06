import { selectorWithChildren } from "@braze/cypress-utils";

export const formGroupLegend = (): Cypress.Chainable =>
  cy.get("legend.bcl-form-group-legend");

export const formGroup = (): Cypress.Chainable =>
  cy.get("fieldset.bcl-form-group");

export const formGroupWithChildren = selectorWithChildren(() =>
  cy.get("fieldset.bcl-form-group")
);
