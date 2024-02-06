/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const iconButton: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        icon: {
            self: () => Cypress.Chainable<any>;
            children: {
                fontAwesomeSvg: () => Cypress.Chainable<JQuery<HTMLElement>>;
            };
        };
    };
};
