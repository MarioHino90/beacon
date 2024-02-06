/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const simpleSwitch: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        hiddenSwitch: () => Cypress.Chainable<JQuery<HTMLElement>>;
        styledSwitch: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {
                knob: () => Cypress.Chainable<JQuery<HTMLElement>>;
            };
        };
    };
};
export declare const switchComponent: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        simpleSwitch: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {
                hiddenSwitch: () => Cypress.Chainable<JQuery<HTMLElement>>;
                styledSwitch: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {
                        knob: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    };
                };
            };
        };
        switchLabel: () => Cypress.Chainable<JQuery<HTMLElement>>;
    };
};
