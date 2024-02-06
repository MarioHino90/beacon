/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const emptyState: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        icon: () => Cypress.Chainable<JQuery<HTMLElement>>;
        heading: () => Cypress.Chainable<JQuery<HTMLElement>>;
        text: () => Cypress.Chainable<JQuery<HTMLElement>>;
        buttons: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {
                button: {
                    self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
                    needsParams: true;
                    children: {};
                };
                buttons: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {};
                };
            };
        };
    };
};
