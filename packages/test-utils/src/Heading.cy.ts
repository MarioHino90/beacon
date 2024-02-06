import { extractDeclaration } from "@braze/cypress-utils";

export const heading = (): Cypress.Chainable => cy.get(".bcl-heading");

export const headingByLevel = extractDeclaration({
  level1: () => cy.get("h1.bcl-heading"),
  level2: () => cy.get("h2.bcl-heading"),
  level3: () => cy.get("h3.bcl-heading"),
  level4: () => cy.get("h4.bcl-heading"),
  level5: () => cy.get("h5.bcl-heading"),
  level6: () => cy.get("h6.bcl-heading"),
});
