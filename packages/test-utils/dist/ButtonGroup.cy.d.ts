/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const buttonGroup: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        button: () => Cypress.Chainable<any>;
    };
};
