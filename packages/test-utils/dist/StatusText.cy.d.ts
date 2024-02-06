/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const statusText: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        icon: {
            self: () => Cypress.Chainable<any>;
            children: {
                fontAwesomeSvg: () => Cypress.Chainable<JQuery<HTMLElement>>;
            };
        };
        bodyText: () => Cypress.Chainable<any>;
    };
    actions: {
        assertStatus(self: Cypress.Chainable<any>, context: import("@braze/cypress-utils").Context<import("@braze/cypress-utils").ContextDeclaration>, status: "success" | "danger"): void;
    };
};
