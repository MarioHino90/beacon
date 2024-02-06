/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const collapsibleButton: () => Cypress.Chainable;
export declare const collapsibleIconButton: () => Cypress.Chainable;
export declare const collapsibleChildren: {
    button: () => Cypress.Chainable;
    iconButton: () => Cypress.Chainable;
    body: {
        self: () => Cypress.Chainable<JQuery<HTMLElement>>;
        children: {
            list: {
                self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                children: {
                    item: () => Cypress.Chainable<JQuery<HTMLElement>>;
                };
            };
        };
    };
};
export declare const collapsible: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        button: () => Cypress.Chainable;
        iconButton: () => Cypress.Chainable;
        body: {
            self: () => Cypress.Chainable<JQuery<HTMLElement>>;
            children: {
                list: {
                    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    children: {
                        item: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    };
                };
            };
        };
    };
    header: {
        self: () => Cypress.Chainable<JQuery<HTMLElement>>;
        children: {
            button: () => Cypress.Chainable;
            text: () => Cypress.Chainable<JQuery<HTMLElement>>;
        };
    };
    actions: {
        /**
         * If a Collapsible uses a button with text, this will click the button to open/collapse the content
         * @example
         * context.collapsible.actions.clickButton();
         */
        clickButton: (self: Cypress.Chainable<any>, btn: import("@braze/cypress-utils").Context<import("@braze/cypress-utils").ContextDeclaration>) => void;
        /**
         * If a Collapsible uses no text with an icon button, this will click it to open/collapse the content
         * @example
         * context.collapsible.actions.clickIconButton();
         */
        clickIconButton: (self: Cypress.Chainable<any>, iconBtn: import("@braze/cypress-utils").Context<import("@braze/cypress-utils").ContextDeclaration>) => void;
    };
};
