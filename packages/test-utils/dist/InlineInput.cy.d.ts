/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
export declare const editModeChildren: {
    inputContainer: {
        self: () => Cypress.Chainable<JQuery<HTMLElement>>;
        children: {
            input: () => Cypress.Chainable<any>;
            icon: {
                self: () => Cypress.Chainable<any>;
                children: {
                    fontAwesomeSvg: () => Cypress.Chainable<JQuery<HTMLElement>>;
                };
            };
        };
    };
    buttonContainer: {
        self: () => Cypress.Chainable<JQuery<HTMLElement>>;
        children: {
            save: () => Cypress.Chainable<JQuery<HTMLElement>>;
            cancel: () => Cypress.Chainable<JQuery<HTMLElement>>;
        };
    };
};
export declare const viewModeChildren: {
    value: () => Cypress.Chainable<any>;
    icon: {
        self: () => Cypress.Chainable<any>;
        children: {
            fontAwesomeSvg: () => Cypress.Chainable<JQuery<HTMLElement>>;
        };
    };
};
export declare type ActionCallback = (element: JQuery<HTMLElement>) => void;
export declare const inlineInput: {
    editMode: {
        self: () => Cypress.Chainable<JQuery<HTMLElement>>;
        children: {
            inputContainer: {
                self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                children: {
                    input: () => Cypress.Chainable<any>;
                    icon: {
                        self: () => Cypress.Chainable<any>;
                        children: {
                            fontAwesomeSvg: () => Cypress.Chainable<JQuery<HTMLElement>>;
                        };
                    };
                };
            };
            buttonContainer: {
                self: () => Cypress.Chainable<JQuery<HTMLElement>>;
                children: {
                    save: () => Cypress.Chainable<JQuery<HTMLElement>>;
                    cancel: () => Cypress.Chainable<JQuery<HTMLElement>>;
                };
            };
        };
        actions: {
            /**
             * Type a value into the inline input, with an optional callback
             * @param self
             * @param input
             * @param value value to type into the inline input
             * @param callback optional callback to call when typing is finished. This is passed the input
             * @example
             * // type into edit mode
             * context.editMode.actions.type(text, () => {
             *   // check that on change was called for each keystroke
             *   expect(onChangeMock.getCalls().length).equals(text.length);
             *
             *   // also check that the second argument for each onChange call was 'change'
             *   onChangeMock.getCalls().forEach((call) => {
             *     expect(call.args[1]).equals("change");
             *   });
             * });
             */
            type: (self: Cypress.Chainable<any>, input: import("@braze/cypress-utils").Context<import("@braze/cypress-utils").ContextDeclaration>, value: string, callback?: ActionCallback | undefined) => void;
            /**
             * Click the save button of an inline input in edit mode, and pass the button into the optional callback when done
             * @example
             * // hit save button
             * context.editMode.actions.saveClick(() => {
             *   // check that the second argument for each onChange call was 'save'
             *   expect(onChangeMock.lastCall.args[1]).equals("save");
             * });
             */
            saveClick: (self: Cypress.Chainable<any>, btn: import("@braze/cypress-utils").Context<import("@braze/cypress-utils").ContextDeclaration>, callback?: ActionCallback | undefined) => void;
            /**
             * Click the cancel button of an inline input in edit mode, and pass the button into the optional callback when done
             * @example
             * // hit cancel button
             * context.editMode.actions.cancelClick(() => {
             *   // check that the second argument for each onChange call was 'cancel'
             *   expect(onChangeMock.lastCall.args[1]).equals("cancel");
             * });
             */
            cancelClick: (self: Cypress.Chainable<any>, btn: import("@braze/cypress-utils").Context<import("@braze/cypress-utils").ContextDeclaration>, callback?: ActionCallback | undefined) => void;
            /**
             * Click the cancel button of an inline input in edit mode, and pass the button into the optional callback when done
             * @example
             * // hit clear button
             * context.editMode.actions.clearClick(() => {
             *   // check that the second argument for each onChange call was 'clear'
             *   expect(onChangeMock.lastCall.args[1]).equals("clear");
             * });
             */
            clearClick: (self: Cypress.Chainable<any>, icon: import("@braze/cypress-utils").Context<import("@braze/cypress-utils").ContextDeclaration>, callback?: ActionCallback | undefined) => void;
        };
    };
    viewMode: {
        self: () => Cypress.Chainable<JQuery<HTMLElement>>;
        children: {
            value: () => Cypress.Chainable<any>;
            icon: {
                self: () => Cypress.Chainable<any>;
                children: {
                    fontAwesomeSvg: () => Cypress.Chainable<JQuery<HTMLElement>>;
                };
            };
        };
        actions: {
            /**
             * click the value of an inline input in view mode, to transition it into edit mode
             * @example
             * context.viewMode.actions.clickValue();
             */
            clickValue: (self: Cypress.Chainable<any>, value: import("@braze/cypress-utils").Context<import("@braze/cypress-utils").ContextDeclaration>) => void;
        };
    };
};
