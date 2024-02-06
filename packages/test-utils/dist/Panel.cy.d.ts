/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const panelHeader: () => Cypress.Chainable;
export declare const panelBody: () => Cypress.Chainable;
export declare const panel: {
    self: () => Cypress.Chainable;
    children: {
        header: () => Cypress.Chainable;
        body: () => Cypress.Chainable;
    };
};
