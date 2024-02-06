import { extractDeclaration, extractSelector } from "@braze/cypress-utils";

const iconChildren = extractDeclaration({
  fontAwesomeSvg: () => cy.get("svg[aria-hidden]"),
});

export const icon = extractSelector({
  self: (): Cypress.Chainable => cy.get(".bcl-icon"),
  children: iconChildren,
});

export const specificIcon = extractSelector({
  self: (icon): Cypress.Chainable =>
    cy.get(`.bcl-icon:has(svg[data-icon=${icon}])`),
  needsParams: true,
  children: iconChildren,
});
