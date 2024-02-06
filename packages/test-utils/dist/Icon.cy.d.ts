/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const icon: {
    self: () => Cypress.Chainable;
    children: {
        fontAwesomeSvg: () => Cypress.Chainable<JQuery<HTMLElement>>;
    };
};
export declare const specificIcon: {
    self: (icon: any) => Cypress.Chainable;
    needsParams: true;
    children: {
        fontAwesomeSvg: () => Cypress.Chainable<JQuery<HTMLElement>>;
    };
};
