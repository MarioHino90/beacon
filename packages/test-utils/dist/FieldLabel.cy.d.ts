/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const fieldLabel: <T extends import("@braze/cypress-utils").ContextDeclaration>(children?: T | undefined) => import("@braze/cypress-utils").SimpleReturns<T>;
export declare const fieldLabelContainer: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        statusText: {
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
        helpText: () => Cypress.Chainable<any>;
        infoIcon: () => Cypress.Chainable<JQuery<HTMLElement>>;
        optional: () => Cypress.Chainable<JQuery<HTMLElement>>;
        required: () => Cypress.Chainable<JQuery<HTMLElement>>;
        fieldLabel: import("@braze/cypress-utils").SimpleReturns<import("@braze/cypress-utils").ContextDeclaration>;
    };
};
export declare const fieldLabelWithText: {
    self: (text: string) => Cypress.Chainable<JQuery<HTMLElement>>;
    needsParams: true;
    children: {
        statusText: {
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
        helpText: () => Cypress.Chainable<any>;
        infoIcon: () => Cypress.Chainable<JQuery<HTMLElement>>;
        optional: () => Cypress.Chainable<JQuery<HTMLElement>>;
        required: () => Cypress.Chainable<JQuery<HTMLElement>>;
        fieldLabel: import("@braze/cypress-utils").SimpleReturns<import("@braze/cypress-utils").ContextDeclaration>;
    };
};
