/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
import { ContextDeclaration, SelectorGetter, SimpleReturns } from "@braze/cypress-utils";
export declare const popper: {
    self: () => Cypress.Chainable<JQuery<HTMLElement>>;
    children: {
        heading: () => Cypress.Chainable<JQuery<HTMLElement>>;
        body: () => Cypress.Chainable<JQuery<HTMLElement>>;
        closeButton: () => Cypress.Chainable<any>;
    };
};
declare type PopperWithChildren<Children extends ContextDeclaration> = {
    heading: SelectorGetter;
    body: SimpleReturns<Children>;
};
export declare const popperWithChildren: <T extends ContextDeclaration>(children: T) => SimpleReturns<PopperWithChildren<T>>;
export {};
