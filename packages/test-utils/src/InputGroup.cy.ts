import { extractDeclaration, extractSelector } from "@braze/cypress-utils";

import { bodyText } from "./BodyText.cy";
import { input } from "./Input.cy";
import { icon } from "./Icon.cy";

export const inputGroupChildren = extractDeclaration({
  inputGroupAddon: {
    self: () => cy.get(".bcl-input-group-addon"),
    children: {
      bodyText,
      icon,
      input,
    },
  },
});

export const inputGroup = extractSelector({
  self: () => cy.get(".bcl-input-group"),
  children: {
    ...inputGroupChildren,
    input,
  },
});
