/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const numberInput: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        input: () => Cypress.Chainable<any>;
        upButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
        downButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
    };
};
