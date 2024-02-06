/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const toastCloseButton: () => Cypress.Chainable;
export declare const toast: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        toastCloseButton: () => Cypress.Chainable;
    };
};
export declare const toaster: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        toast: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {
                toastCloseButton: () => Cypress.Chainable;
            };
        };
        nthToast: {
            self: (ind: number) => Cypress.Chainable<JQuery<HTMLElement>>;
            needsParams: true;
            children: {
                toastCloseButton: () => Cypress.Chainable;
            };
        };
    };
};
