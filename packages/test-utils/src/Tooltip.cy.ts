/// <reference types="@testing-library/cypress" />
import { extractSelector } from "@braze/cypress-utils";

export const tooltip = (): Cypress.Chainable => cy.get(".bcl-popper");

export const tooltipById = extractSelector({
  self: (id: string) => cy.get(`#${id}.bcl-popper`),
  needsParams: true,
  children: {},
});
