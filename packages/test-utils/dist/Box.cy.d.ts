/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const box: () => Cypress.Chainable;
export declare const nthBox: {
    self: (num: number) => Cypress.Chainable<JQuery<HTMLElement>>;
    needsParams: true;
    children: {};
};
export declare const boxWithChildren: <T extends import("@braze/cypress-utils").ContextDeclaration>(children?: T | undefined) => import("@braze/cypress-utils").SimpleReturns<T>;
export declare const nthBoxWithChildren: (children?: import("@braze/cypress-utils").ContextDeclaration | undefined) => import("@braze/cypress-utils").ComplexReturns<import("@braze/cypress-utils").ContextDeclaration, (num: number) => Cypress.Chainable<JQuery<HTMLElement>>, import("@braze/cypress-utils").ContextActionsDeclaration<import("@braze/cypress-utils").ContextDeclaration>>;
