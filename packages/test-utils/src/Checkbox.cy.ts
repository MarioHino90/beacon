import { extractDeclaration, extractSelector } from "@braze/cypress-utils";

export const checkboxChildren = extractDeclaration({
  hiddenCheckbox: () => cy.get("input[type='checkbox']"),
  styledCheckbox: () => cy.get(".bcl-styled-checkbox"),
  icon: {
    self: () => cy.get(".bcl-checkbox-icon"),
    children: {
      checkedIcon: () => cy.get(".bcl-checked-polyline"),
      indeterminateIcon: () => cy.get(".bcl-indeterminate-polyline"),
    },
  },
  label: () => cy.get(".bcl-checkbox-label"),
});

export const checkbox = extractSelector({
  self: () => cy.get(".bcl-checkbox-container"),
  children: checkboxChildren,
});

export const nthCheckbox = extractSelector({
  self: (num: number) => cy.get(`.bcl-checkbox-container:nth-child(${num})`),
  needsParams: true,
  children: checkboxChildren,
});
