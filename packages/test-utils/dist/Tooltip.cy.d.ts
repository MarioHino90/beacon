/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const tooltip: () => Cypress.Chainable;
export declare const tooltipById: {
    self: (id: string) => Cypress.Chainable<JQuery<HTMLElement>>;
    needsParams: true;
    children: {};
};
