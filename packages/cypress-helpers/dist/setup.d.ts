/// <reference types="@applitools/visual-grid-client" />
/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />
import "@braze/beacon-fonts/Sailec.css";
import "./styles.css";
import React from "react";
import type { MountReactComponentOptions, MountReturn } from "@cypress/react";
import type { StyleOptions } from "@cypress/mount-utils";
export declare const setupVisualTesting: (component: string) => void;
export declare const visualTest: (config?: String | Eyes.Check.Options | undefined) => void;
/**
 * for component testing only.
 *
 * Requiring anything from `@cypress/react` will overwrite `cy.visit()` to throw
 * To allow visual testing setup to work in both component tests, and in integration tests,
 * this requires mount just-in-time
 */
export declare const mountWithTheme: (children: React.ReactNode, options?: Partial<StyleOptions & MountReactComponentOptions> | undefined) => Cypress.Chainable<MountReturn>;
