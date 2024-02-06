/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const radioButton: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        label: () => Cypress.Chainable<JQuery<HTMLLabelElement>>;
        button: () => Cypress.Chainable<JQuery<HTMLElement>>;
    };
};
export declare const radioButtonGroup: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        buttons: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {
                radioButtonWithValue: {
                    self: (value: string) => Cypress.Chainable<JQuery<HTMLElement>>;
                    needsParams: true;
                    children: {};
                };
                selectedRadioButton: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {};
                };
                radioButtonByNumber: {
                    self: (num: number) => Cypress.Chainable<JQuery<HTMLElement>>;
                    needsParams: true;
                    children: {
                        label: () => Cypress.Chainable<JQuery<HTMLLabelElement>>;
                        button: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    };
                };
            };
        };
        errorText: {
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
    };
};
