import { extractSelector } from "@braze/cypress-utils";

export const toastCloseButton = (): Cypress.Chainable =>
  cy.get(".bcl-toast-close-button");

export const toast = extractSelector({
  self: () => cy.get(".bcl-toast"),
  children: {
    toastCloseButton,
  },
});

export const toaster = extractSelector({
  self: () => cy.get(".bcl-toaster"),
  children: {
    toast,
    nthToast: {
      self: (ind: number) => cy.get(`.bcl-toast:nth-child(${ind})`),
      needsParams: true,
      children: { toastCloseButton },
    },
  },
});
