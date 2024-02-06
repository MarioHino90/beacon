import { extractSelector, selectorWithChildren } from "@braze/cypress-utils";

import { statusText } from "./StatusText.cy";
import { helpText } from "./HelpText.cy";

// this allows (for instance)
// fieldLabel({ input })
export const fieldLabel = selectorWithChildren(() =>
  cy.get(".bcl-field-label")
);

export const fieldLabelContainer = extractSelector({
  self: () => cy.get(".bcl-field-label-container"),
  children: {
    statusText,
    helpText,
    infoIcon: () => cy.get(".bcl-field-label-info-icon-button"),
    optional: () => cy.findByTestId("optional-field"),
    required: () => cy.findByTestId("required-field"),
    fieldLabel: fieldLabel(),
  },
});

export const fieldLabelWithText = extractSelector({
  self: (text: string) => cy.contains(".bcl-field-label-container", text),
  needsParams: true,
  children: {
    statusText,
    helpText,
    infoIcon: () => cy.get(".bcl-field-label-info-icon-button"),
    optional: () => cy.findByTestId("optional-field"),
    required: () => cy.findByTestId("required-field"),
    fieldLabel: fieldLabel(),
  },
});
