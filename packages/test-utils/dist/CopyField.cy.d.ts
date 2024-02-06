/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const copyFieldSelector: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        input: () => Cypress.Chainable<any>;
        button: {
            self: () => Cypress.Chainable<any>;
            children: {
                icon: {
                    self: () => Cypress.Chainable<any>;
                    children: {
                        fontAwesomeSvg: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    };
                };
            };
        };
    };
};
export declare const copyField: {
    tooltip: () => Cypress.Chainable<any>;
    tooltipById: {
        self: (id: string) => Cypress.Chainable<JQuery<HTMLElement>>;
        needsParams: true;
        children: {};
    };
    copyField: {
        self: () => Cypress.Chainable<JQuery<HTMLElement>>;
        children: {
            input: () => Cypress.Chainable<any>;
            button: {
                self: () => Cypress.Chainable<any>;
                children: {
                    icon: {
                        self: () => Cypress.Chainable<any>;
                        children: {
                            fontAwesomeSvg: () => Cypress.Chainable<JQuery<HTMLElement>>;
                        };
                    };
                };
            };
        };
    };
};
