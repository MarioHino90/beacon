/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />

import "@braze/beacon-fonts/Sailec.css";
import "./styles.css";

import React from "react";
import BeaconThemeProvider from "@braze/beacon-styling";
import { I18nextProvider } from "react-i18next";
import { i18n } from "@braze/beacon-i18n-dev";
import type { MountReactComponentOptions, MountReturn } from "@cypress/react";
import type { StyleOptions } from "@cypress/mount-utils";

export const setupVisualTesting = (component: string): void => {
  beforeEach(() => {
    cy.eyesOpen({
      testName: Cypress.currentTest.titlePath.join(" - "),
      appName: "beacon",
      properties: [{ name: "Component", value: component }],
    });
  });

  afterEach(() => {
    cy.eyesClose();
  });
};

export const visualTest = (
  ...args: Parameters<typeof cy.eyesCheckWindow>
): void => {
  cy.eyesCheckWindow(...args);
};

/**
 * for component testing only.
 *
 * Requiring anything from `@cypress/react` will overwrite `cy.visit()` to throw
 * To allow visual testing setup to work in both component tests, and in integration tests,
 * this requires mount just-in-time
 */
export const mountWithTheme = (
  children: React.ReactNode,
  options?: Partial<StyleOptions & MountReactComponentOptions>
): Cypress.Chainable<MountReturn> => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { mount } = require("@cypress/react");

  return mount(
    <I18nextProvider i18n={i18n}>
      <BeaconThemeProvider>{children}</BeaconThemeProvider>
    </I18nextProvider>,
    options
  );
};
