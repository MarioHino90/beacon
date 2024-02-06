export const button = (): Cypress.Chainable => cy.get(".bcl-button");

export const disabledButtonWrapper = (): Cypress.Chainable =>
  cy.get(".bcl-button__disabled-wrapper");
