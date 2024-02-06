/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const annotation: {
    tooltip: () => Cypress.Chainable<any>;
    tooltipById: {
        self: (id: string) => Cypress.Chainable<JQuery<HTMLElement>>;
        needsParams: true;
        children: {};
    };
    icon: {
        self: () => Cypress.Chainable<any>;
        children: {
            fontAwesomeSvg: () => Cypress.Chainable<JQuery<HTMLElement>>;
        };
    };
};
