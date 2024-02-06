import { extractSelector, selectorWithChildren } from "@braze/cypress-utils";

export const tabs = extractSelector({
  self: () => cy.get(".bcl-tabs"),
  children: {
    tab: () => cy.get(".bcl-tab"),
    nthTab: {
      self: (ind: number) => cy.get(`.bcl-tab:nth-child(${ind})`),
      needsParams: true,
      children: {},
    },
  },
});

export const tabContent = (): Cypress.Chainable => cy.get(".bcl-tab-content");

export const tabContentWithChildren = selectorWithChildren(() =>
  cy.get(".bcl-tab-content")
);
