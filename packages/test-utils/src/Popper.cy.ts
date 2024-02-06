/// <reference types="@testing-library/cypress" />
import {
  ContextDeclaration,
  extractSelector,
  SelectorGetter,
  selectorWithChildren,
  SimpleReturns,
} from "@braze/cypress-utils";

import { closeButton } from "./CloseButton.cy";

export const popper = extractSelector({
  self: () => cy.get(".bcl-popper"),
  children: {
    heading: () => cy.get(".bcl-popover-heading"),
    body: () => cy.get(".bcl-popover-body"),
    closeButton,
  },
});

type PopperWithChildren<Children extends ContextDeclaration> = {
  heading: SelectorGetter;
  body: SimpleReturns<Children>;
};

export const popperWithChildren = <T extends ContextDeclaration>(
  children: T
): SimpleReturns<PopperWithChildren<T>> =>
  selectorWithChildren(() => cy.get(".bcl-popper"))({
    heading: () => cy.get(".bcl-popover-heading"),
    body: {
      self: () => cy.get(".bcl-popover-body"),
      children,
    },
  });
