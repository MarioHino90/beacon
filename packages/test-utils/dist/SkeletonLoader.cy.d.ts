/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const skeletonLoader: {
    skeleton: () => Cypress.Chainable<JQuery<HTMLElement>>;
    imageSkeleton: () => Cypress.Chainable<JQuery<HTMLElement>>;
    imageRoundSkeleton: () => Cypress.Chainable<JQuery<HTMLElement>>;
    checkboxSkeleton: () => Cypress.Chainable<JQuery<HTMLElement>>;
    textSkeleton: () => Cypress.Chainable<JQuery<HTMLElement>>;
};
