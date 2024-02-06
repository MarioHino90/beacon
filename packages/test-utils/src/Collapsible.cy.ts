import {
  extractDeclaration,
  extractSelector,
  getActionContext,
} from "@braze/cypress-utils";

export const collapsibleButton = (): Cypress.Chainable =>
  cy.get(".bcl-collapsible-button");

export const collapsibleIconButton = (): Cypress.Chainable =>
  cy.get(".bcl-collapsible-icon-button");

export const collapsibleChildren = extractDeclaration({
  button: collapsibleButton,
  iconButton: collapsibleIconButton,
  body: {
    self: () => cy.get(".bcl-collapsible-body"),
    children: {
      list: {
        self: () => cy.get(".bcl-collapsible-list"),
        children: {
          item: () => cy.get(".bcl-collapsible-list-item"),
        },
      },
    },
  },
});

export const collapsible = extractSelector({
  self: () => cy.get(".bcl-collapsible"),
  children: collapsibleChildren,
  header: {
    self: () => cy.get(".collapsible-header"),
    children: {
      button: collapsibleButton,
      text: () => cy.get(".bcl-collapsible-header-text"),
    },
  },
  actions: {
    /**
     * If a Collapsible uses a button with text, this will click the button to open/collapse the content
     * @example
     * context.collapsible.actions.clickButton();
     */
    clickButton: (self, btn) => {
      self.within(() => {
        getActionContext(collapsibleChildren, btn).button.click();
      });
    },
    /**
     * If a Collapsible uses no text with an icon button, this will click it to open/collapse the content
     * @example
     * context.collapsible.actions.clickIconButton();
     */
    clickIconButton: (self, iconBtn) => {
      self.within(() => {
        getActionContext(collapsibleChildren, iconBtn).iconButton.click();
      });
    },
  },
});
