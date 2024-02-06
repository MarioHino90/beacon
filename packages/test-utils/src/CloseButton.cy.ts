export const closeButton = (): Cypress.Chainable =>
  cy.get('button[aria-label="close"]');
