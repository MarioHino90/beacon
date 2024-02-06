/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const heading: () => Cypress.Chainable;
export declare const headingByLevel: {
    level1: () => Cypress.Chainable<JQuery<HTMLElement>>;
    level2: () => Cypress.Chainable<JQuery<HTMLElement>>;
    level3: () => Cypress.Chainable<JQuery<HTMLElement>>;
    level4: () => Cypress.Chainable<JQuery<HTMLElement>>;
    level5: () => Cypress.Chainable<JQuery<HTMLElement>>;
    level6: () => Cypress.Chainable<JQuery<HTMLElement>>;
};
