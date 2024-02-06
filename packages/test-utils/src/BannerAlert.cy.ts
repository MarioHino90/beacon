import { extractSelector, extractDeclaration } from "@braze/cypress-utils";

import { icon } from "./Icon.cy";

export const bannerAlertIcon = extractSelector({
  self: () => cy.get(".bcl-banner-alert-icon"),
  children: {
    icon,
  },
});

export const bannerAlertLink = (): Cypress.Chainable =>
  cy.get(".bcl-banner-alert-link");

const bannerAlertAccordionChildren = extractDeclaration({
  header: () => cy.get(".bcl-banner-alert-accordion-header"),
  body: () => cy.get(".bcl-banner-alert-accordion-body"),
  footer: {
    self: () => cy.get(".bcl-banner-alert-accordion-footer"),
    children: {
      action: () => cy.get(".bcl-banner-alert-action"),
    },
  },
});

export const bannerAlertAccordion = extractSelector({
  self: () => cy.get(".bcl-banner-alert-accordion"),
  children: bannerAlertAccordionChildren,
});

export const bannerAlertBodyChildren = extractDeclaration({
  icon: {
    self: () => cy.get(".bcl-banner-alert-body-icon"),
    children: {
      bannerAlertIcon,
    },
  },
  content: {
    self: () => cy.get(".bcl-banner-alert-body-children-wrapper"),
    children: {
      title: () => cy.get(".bcl-banner-alert-title"),
      description: {
        self: () => cy.get(".bcl-banner-alert-description"),
        children: {
          text: () => cy.get(".bcl-banner-alert-description-text"),
          link: bannerAlertLink,
        },
      },
      link: bannerAlertLink,
      accordion: bannerAlertAccordion,
    },
  },
});

export const bannerAlertBody = extractSelector({
  self: () => cy.get(".bcl-banner-alert-body"),
  children: {
    ...bannerAlertBodyChildren,
    innerBody: {
      self: () => cy.get(".bcl-banner-alert-inner-body"),
      children: bannerAlertBodyChildren,
    },
    close: {
      self: () => cy.get(".bcl-banner-alert-close"),
      children: {
        icon,
      },
    },
  },
});

export const bannerAlert = extractSelector({
  self: () => cy.get(".bcl-banner-alert-transition"),
  children: { body: bannerAlertBody },
});

export const untransitionedBannerAlert = extractSelector({
  self: () => cy.get(".bcl-banner-alert-untransitioned"),
  children: { body: bannerAlertBody },
});
