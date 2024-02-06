/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const tabs: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        tab: () => Cypress.Chainable<JQuery<HTMLElement>>;
        nthTab: {
            self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
            needsParams: true;
            children: {};
        };
    };
};
export declare const tabContent: () => Cypress.Chainable;
export declare const tabContentWithChildren: <T extends import("@braze/cypress-utils").ContextDeclaration>(children?: T | undefined) => import("@braze/cypress-utils").SimpleReturns<T>;
