/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const link: () => Cypress.Chainable;
export declare const linkWithChildren: <T extends import("@braze/cypress-utils").ContextDeclaration>(children?: T | undefined) => import("@braze/cypress-utils").SimpleReturns<T>;
