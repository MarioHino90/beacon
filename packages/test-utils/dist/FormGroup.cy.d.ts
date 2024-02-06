/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const formGroupLegend: () => Cypress.Chainable;
export declare const formGroup: () => Cypress.Chainable;
export declare const formGroupWithChildren: <T extends import("@braze/cypress-utils").ContextDeclaration>(children?: T | undefined) => import("@braze/cypress-utils").SimpleReturns<T>;
