import { extractSelector, extractDeclaration } from "@braze/cypress-utils";

import { closeButton } from "./CloseButton.cy";

export const modalFooter = extractSelector({
  self: () => cy.get(".bcl-modal-footer"),
  children: {},
});

export const modalHeader = extractSelector({
  self: () => cy.get(".bcl-modal-header"),
  children: {},
});

export const modalBody = extractSelector({
  self: () => cy.get(".bcl-modal-body"),
  children: {},
});

export const modalContent = extractSelector({
  self: () => cy.get(".bcl-modal-content"),
  children: {
    closeButton,
    footer: modalFooter,
    header: modalHeader,
    body: modalBody,
  },
});

export const modalDialog = extractSelector({
  self: () => cy.get(".bcl-modal-dialog"),
  children: {
    closeButton,
    content: modalContent,
    footer: modalFooter,
    header: modalHeader,
    body: modalBody,
  },
});

export const modalChildren = extractDeclaration({
  closeButton,
  dialog: modalDialog,
  content: modalContent,
  footer: modalFooter,
  header: modalHeader,
  body: modalBody,
  backdrop: () => cy.get(".bcl-modal-backdrop"),
});

export const modal = extractSelector({
  self: () => cy.get(".bcl-modal"),
  children: modalChildren,
});
