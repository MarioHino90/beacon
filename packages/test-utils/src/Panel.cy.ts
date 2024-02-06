import { extractSelector } from "@braze/cypress-utils";

export const panelHeader = (): Cypress.Chainable => cy.get(".bcl-panel-header");

export const panelBody = (): Cypress.Chainable => cy.get(".bcl-panel-body");

export const panel = extractSelector({
  self: (): Cypress.Chainable => cy.get(".bcl-panel"),
  children: {
    header: panelHeader,
    body: panelBody,
  },
});
