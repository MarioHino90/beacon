/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const inputGroupChildren: {
    inputGroupAddon: {
        self: () => Cypress.Chainable<JQuery<HTMLElement>>;
        children: {
            bodyText: () => Cypress.Chainable<any>;
            icon: {
                self: () => Cypress.Chainable<any>;
                children: {
                    fontAwesomeSvg: () => Cypress.Chainable<JQuery<HTMLElement>>;
                };
            };
            input: () => Cypress.Chainable<any>;
        };
    };
};
export declare const inputGroup: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        input: () => Cypress.Chainable<any>;
        inputGroupAddon: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {
                bodyText: () => Cypress.Chainable<any>;
                icon: {
                    self: () => Cypress.Chainable<any>;
                    children: {
                        fontAwesomeSvg: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    };
                };
                input: () => Cypress.Chainable<any>;
            };
        };
    };
};
