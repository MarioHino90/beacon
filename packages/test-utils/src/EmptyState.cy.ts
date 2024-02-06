import { extractSelector } from "@braze/cypress-utils";

// TODO move these to beacon test-utils and import from there in future PR
const button = extractSelector({
  self: () => cy.get(".bcl-button"),
  children: {},
});

const buttonFromList = extractSelector({
  self: (ind: number) => cy.get(`.bcl-button:nth-child(${ind})`),
  needsParams: true,
  children: {},
});

export const emptyState = extractSelector({
  self: () => cy.get(".bcl-empty-state"),
  children: {
    icon: () => cy.get(".bcl-empty-state-icon"),
    heading: () => cy.get(".bcl-empty-state-heading"),
    text: () => cy.get(".bcl-empty-state-text"),
    buttons: {
      self: () => cy.get(".bcl-empty-state-buttons"),
      children: {
        button: buttonFromList,
        buttons: button,
      },
    },
  },
});
