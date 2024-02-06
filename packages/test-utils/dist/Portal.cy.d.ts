/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const portal: () => Cypress.Chainable;
export declare const portalWithChildren: <T extends import("@braze/cypress-utils").ContextDeclaration>(children?: T | undefined) => import("@braze/cypress-utils").SimpleReturns<T>;
