import {
  complexSelectorWithChildren,
  extractSelector,
  selectorWithChildren,
} from "@braze/cypress-utils";

export const box = (): Cypress.Chainable => cy.get(".bcl-box");

export const nthBox = extractSelector({
  self: (num: number) => cy.get(`.bcl-box:nth-child(${num})`),
  needsParams: true,
  children: {},
});

export const boxWithChildren = selectorWithChildren(() => cy.get(".bcl-box"));

export const nthBoxWithChildren = complexSelectorWithChildren((num: number) =>
  cy.get(`.bcl-box:nth-child(${num})`)
);
