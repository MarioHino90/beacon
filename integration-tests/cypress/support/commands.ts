// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import "@testing-library/cypress/add-commands";
import "cypress-file-upload";
import "cypress-real-events";

const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;

// ignoring this exception per the suggestion by a Cypress maintainer here:
// https://github.com/quasarframework/quasar/issues/2233#issuecomment-492975745
// eslint-disable-next-line no-undef
Cypress.on("uncaught:exception", (err) => {
  /* returning false here prevents Cypress from failing the test */
  if (resizeObserverLoopErrRe.test(err.message)) {
    return false;
  }
});

// eslint-disable-next-line no-undef
Cypress.Commands.add(
  "triggerInputChange",
  {
    // require this to chain off of a .get()
    prevSubject: true,
    // require previous subject to be an element
    // @ts-expect-error Cypress did not add this to types yet
    element: true,
  },
  (input: Cypress.Chainable<HTMLInputElement>, value: string) => {
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value"
    )?.set;

    const changeInputValue = (inputToChange) => (newValue) => {
      nativeInputValueSetter?.call(inputToChange[0], newValue);

      inputToChange[0].dispatchEvent(
        new Event("change", {
          bubbles: true,
        })
      );
    };

    // eslint-disable-next-line no-undef
    return cy.wrap(input).then((input) => {
      changeInputValue(input)(value);
    });
  }
);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable<Subject = any> {
      /**
       * set the input value and trigger onChange. This is very useful for testing IME
       * @example cy.get("input").triggerInputChange("new input value");
       */
      triggerInputChange(value: string): Chainable<Subject>;
    }
  }
}

export {};
