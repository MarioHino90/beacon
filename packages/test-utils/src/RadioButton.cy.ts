import { extractSelector } from "@braze/cypress-utils";

import { statusText } from "./StatusText.cy";

export const radioButton = extractSelector({
  self: () => cy.get(".bcl-radio-button"),
  children: {
    label: () => cy.get("label"),
    button: () => cy.get("input[type='radio']"),
  },
});

export const radioButtonGroup = extractSelector({
  self: () => cy.get(".bcl-radio-button-group"),
  children: {
    buttons: {
      self: () => cy.get(".bcl-radio-button-grid"),
      children: {
        radioButtonWithValue: {
          self: (value: string) =>
            cy.get(`input[type="radio"][value="${value}"]`),
          needsParams: true,
          children: {},
        },
        selectedRadioButton: {
          self: () => cy.get('input[type="radio"][checked]'),
          children: {},
        },
        radioButtonByNumber: {
          self: (num: number) => cy.get(`.bcl-radio-button:eq(${num + 1})`),
          needsParams: true,
          children: radioButton.children,
        },
      },
    },
    errorText: statusText,
  },
});
