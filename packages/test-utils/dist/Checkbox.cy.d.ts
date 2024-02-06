/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const checkboxChildren: {
    hiddenCheckbox: () => Cypress.Chainable<JQuery<HTMLElement>>;
    styledCheckbox: () => Cypress.Chainable<JQuery<HTMLElement>>;
    icon: {
        self: () => Cypress.Chainable<JQuery<HTMLElement>>;
        children: {
            checkedIcon: () => Cypress.Chainable<JQuery<HTMLElement>>;
            indeterminateIcon: () => Cypress.Chainable<JQuery<HTMLElement>>;
        };
    };
    label: () => Cypress.Chainable<JQuery<HTMLElement>>;
};
export declare const checkbox: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        hiddenCheckbox: () => Cypress.Chainable<JQuery<HTMLElement>>;
        styledCheckbox: () => Cypress.Chainable<JQuery<HTMLElement>>;
        icon: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {
                checkedIcon: () => Cypress.Chainable<JQuery<HTMLElement>>;
                indeterminateIcon: () => Cypress.Chainable<JQuery<HTMLElement>>;
            };
        };
        label: () => Cypress.Chainable<JQuery<HTMLElement>>;
    };
};
export declare const nthCheckbox: {
    self: (num: number) => Cypress.Chainable<JQuery<HTMLElement>>;
    needsParams: true;
    children: {
        hiddenCheckbox: () => Cypress.Chainable<JQuery<HTMLElement>>;
        styledCheckbox: () => Cypress.Chainable<JQuery<HTMLElement>>;
        icon: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {
                checkedIcon: () => Cypress.Chainable<JQuery<HTMLElement>>;
                indeterminateIcon: () => Cypress.Chainable<JQuery<HTMLElement>>;
            };
        };
        label: () => Cypress.Chainable<JQuery<HTMLElement>>;
    };
};
