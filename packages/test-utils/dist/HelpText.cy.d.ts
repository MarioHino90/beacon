/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const helpText: () => Cypress.Chainable;
export declare const nthHelpText: {
    self: (num: number) => Cypress.Chainable<JQuery<HTMLElement>>;
    needsParams: true;
    children: {};
};
