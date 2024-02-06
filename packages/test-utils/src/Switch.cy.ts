import { extractSelector } from "@braze/cypress-utils";

export const simpleSwitch = extractSelector({
  self: () => cy.get(".bcl-simple-switch"),
  children: {
    hiddenSwitch: () => cy.get("input[type='checkbox']"),
    styledSwitch: {
      self: () => cy.get(".bcl-styled-switch"),
      children: {
        knob: () => cy.get(".bcl-styled-switch-knob"),
      },
    },
  },
});

export const switchComponent = extractSelector({
  self: () => cy.get(".bcl-switch"),
  children: {
    simpleSwitch,
    switchLabel: () => cy.get(".bcl-switch-label"),
  },
});
