/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const flex: () => Cypress.Chainable;
export declare const flexWithChildren: <T extends import("@braze/cypress-utils").ContextDeclaration>(children?: T | undefined) => import("@braze/cypress-utils").SimpleReturns<T>;
