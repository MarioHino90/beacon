import { extractDeclaration, extractSelector } from "@braze/cypress-utils";

import { brazeIcon } from "./BrazeIcon.cy";

export const menuButton = extractSelector({
  self: (num: number): Cypress.Chainable =>
    cy.get(`li:nth-child(${num}) .bcl-menu-button`),
  needsParams: true,
  children: {
    brazeIcon,
  },
});

export const menuButtons = extractSelector({
  self: (): Cypress.Chainable => cy.get(".bcl-menu-button"),
  children: {
    brazeIcon,
  },
});

export const menuButtonWithText = extractSelector({
  self: (text: string) => cy.get(`.bcl-menu-button:contains("${text}")`),
  needsParams: true,
  children: {
    brazeIcon,
  },
});

export const menuCategoryButton = extractSelector({
  self: (num: number) => cy.get(`.bcl-menu-category-button:nth-child(${num})`),
  needsParams: true,
  children: {
    brazeIcon,
    header: () => cy.get("h5.bcl-heading"),
    text: () => cy.get("span.bcl-body.text"),
  },
});

export const menuCategoryButtons = extractSelector({
  self: () => cy.get(".bcl-menu-category-button"),
  children: {
    brazeIcon,
    header: () => cy.get("h5.bcl-heading"),
    text: () => cy.get("span.bcl-body.text"),
  },
});

export const menuCategoryButtonWithText = extractSelector({
  self: (text: string) =>
    cy.get(`.bcl-menu-category-button:contains("${text}")`),
  needsParams: true,
  children: {
    brazeIcon,
    header: () => cy.get("h5.bcl-heading"),
    text: () => cy.get("span.bcl-body.text"),
  },
});

export const buttons = extractDeclaration({
  menuButton,
  menuButtons,
  menuButtonWithText,
  menuCategoryButton,
  menuCategoryButtons,
  menuCategoryButtonWithText,
});

export const menuGroup = extractSelector({
  self: (num: number) => cy.get(`.bcl-menu-group:nth-child(${num})`),
  children: {
    // the first heading is the group heading
    groupHeader: () => cy.get("h6.bcl-heading"),
    ...buttons,
  },
});

export const menuGroups = extractSelector({
  self: () => cy.get(".bcl-menu-group"),
  children: {},
});

export const menu = extractSelector({
  self: () => cy.get(".bcl-menu"),
  children: {
    ...buttons,
    menuGroup,
    menuGroups,
  },
});
