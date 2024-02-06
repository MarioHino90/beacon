/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/expect-expect */
import { makeContext, getStorybookURL, Context } from "@braze/cypress-utils";
import { numberInput } from "@braze/beacon-test-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";

const context = makeContext("numberInput", {
  numberInput,
  value: () => cy.get("#number-value"),
});

const story = getStorybookURL("Core/Forms/NumberInput");

type urlKeys = "default" | "withCustomStep" | "disabled" | "invalid";

const urls: {
  [K in urlKeys]: string;
} = {
  default: story("basic use")()(),
  withCustomStep: story("with step")()(),
  disabled: story("disabled")()(),
  invalid: story("invalid")()(),
};

/**
 * Recursively increment/decrement the number input until it hits the limt
 * and stops changing the value
 * @param changeFn A function that, when invoked, will cause the number input value to
 *                 be incremented or decremented
 * @param comparator A function that, when invoked will return the expected new value
 *                   of the number input following increment/decrement
 */
const recurse = (
  changeFn: (
    numberInput: Context<{
      input: () => Cypress.Chainable<any>;
      upButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
      downButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
    }>
  ) => void,
  comparator: (prevValue: number) => number
) => {
  // type into input field
  context.numberInput.in((numberInput) => {
    // get current value
    numberInput.input.then(($input) => {
      cy.wrap(Number($input.val())).as("value");
    });

    // call whatever needs to be done to handle change
    changeFn(numberInput);

    // verify that the value has changed
    numberInput.input.then(($input) => {
      cy.get<number>("@value").then((prevValue) => {
        // if they're equal...
        if (Number($input.val()) === comparator(prevValue)) {
          // give us an assertion
          expect(Number($input.val())).equals(comparator(prevValue));

          // and keep going
          cy.wrap(true).as("continue");
        }
        // otherwise, stop
        else {
          expect(Number($input.val())).equals(prevValue);

          cy.wrap(false).as("continue");
        }
      });
    });
  });

  // check if 'continue' is true, and if so recurse
  cy.get<boolean>("@continue").then((decrement) => {
    if (decrement) {
      recurse(changeFn, comparator);
    }
  });
};

describe("NumberInput", () => {
  setupVisualTesting("NumberInput");

  function visit(page: urlKeys = "default") {
    cy.visit(urls[page]);
  }

  it("should let user input numerical value", () => {
    visit();

    // begin by verifying the number input is visible
    context.numberInput.should("be.visible");

    // take visual snapshot
    visualTest("display");

    // type into input field
    context.numberInput.in((numberInput) => {
      numberInput.input.should("have.value", 0);

      // clear the field and type 50
      numberInput.input.clear().type("50");

      // verify that the value updated
      numberInput.input.should("have.value", 50);

      // take visual snapshot
      visualTest("with value");
    });
  });

  it("should let the user increment the value up to the determined limit using the up button", () => {
    visit();

    // begin by verifying the number input is visible
    context.numberInput.should("be.visible");

    // set the value to 95 so it doesn't take forever (the limit is 100)
    context.numberInput.in((numberInput) => {
      // clear the field and type 95
      numberInput.input.clear().type("95");

      // verify that the value updated
      numberInput.input.should("have.value", 95);
    });

    // recursively increment
    recurse(
      (numberInput) => {
        // hover over the input button
        numberInput.input.realHover();

        // click the button
        numberInput.upButton.click();
      },
      (prevValue) => prevValue + 1
    );
  });

  it("should let the user decrement the value down to the determined limit using the down button", () => {
    visit();

    // begin by verifying the number input is visible
    context.numberInput.should("be.visible");

    // set the value to 5 so it doesn't take forever (the limit is 0)
    context.numberInput.in((numberInput) => {
      // clear the field and type 5
      numberInput.input.clear().type("5");

      // verify that the value updated
      numberInput.input.should("have.value", 5);
    });

    // recursively decrement
    recurse(
      (numberInput) => {
        // hover over the input button
        numberInput.input.realHover();

        // click the button
        numberInput.downButton.click();
      },
      (prevValue) => prevValue - 1
    );
  });

  it("should let the user increment the value up to the determined limit using the up arrow key", () => {
    visit();

    // begin by verifying the number input is visible
    context.numberInput.should("be.visible");

    // set the value to 95 so it doesn't take forever (the limit is 100)
    context.numberInput.in((numberInput) => {
      // clear the field and type 95
      numberInput.input.clear().type("95");

      // verify that the value updated
      numberInput.input.should("have.value", 95);
    });

    // recursively increment
    recurse(
      (numberInput) => {
        // type up arrow in the input field
        numberInput.input.type("{uparrow}");
      },
      (prevValue) => prevValue + 1
    );
  });

  it("should let the user decrement the value down to the determined limit using the down arrow key", () => {
    visit();

    // begin by verifying the number input is visible
    context.numberInput.should("be.visible");

    // set the value to 5 so it doesn't take forever (the limit is 0)
    context.numberInput.in((numberInput) => {
      // clear the field and type 5
      numberInput.input.clear().type("5");

      // verify that the value updated
      numberInput.input.should("have.value", 5);
    });

    // recursively decrement
    recurse(
      (numberInput) => {
        // type up arrow in the input field
        numberInput.input.type("{downarrow}");
      },
      (prevValue) => prevValue - 1
    );
  });

  it("should let the user increment/decrement the value with steps other than 1", () => {
    visit("withCustomStep");

    // begin by verifying the number input is visible
    context.numberInput.should("be.visible");

    // set the value to 50
    context.numberInput.in((numberInput) => {
      // clear the field and type 50
      numberInput.input.clear().type("50");

      // verify that the value updated
      numberInput.input.should("have.value", 50);

      // type up arrow in the input field
      numberInput.input.type("{uparrow}");

      // verify that the value updated
      numberInput.input.should("have.value", 55);

      // type down arrow in the input field
      numberInput.input.type("{downarrow}");

      // verify that the value updated
      numberInput.input.should("have.value", 50);
    });
  });

  it("should NOT let user input numerical value when disabled", () => {
    visit("disabled");

    // begin by verifying the number input is visible
    context.numberInput.should("be.visible");

    // check that the field is disabled and that the buttons are gone
    context.numberInput.in((numberInput) => {
      // assert that input is disabled
      numberInput.input.should("be.disabled");

      // assert that the up button doesn't exist
      numberInput.upButton.should("not.exist");

      // assert that the up button doesn't exist
      numberInput.downButton.should("not.exist");

      // take visual snapshot
      visualTest("disabled");
    });
  });

  it("should let user input numerical value when invalid", () => {
    visit("invalid");

    // begin by verifying the number input is visible
    context.numberInput.should("be.visible");

    // take visual snapshot
    visualTest("display");

    // type into input field
    context.numberInput.in((numberInput) => {
      // clear the field and type 50
      numberInput.input.clear().type("50");

      // verify that the value updated
      numberInput.input.should("have.value", 50);

      // take visual snapshot
      visualTest("with value");
    });
  });

  it("should call onChange when the arrow buttons are clicked", () => {
    visit("default");

    context.value.should("have.text", "0");

    context.numberInput.in((numberInput) => {
      numberInput.upButton.click();
    });

    context.value.should("have.text", "1");

    context.numberInput.in((numberInput) => {
      numberInput.downButton.click();
    });

    context.value.should("have.text", "0");

    // verify we can't go below 0
    context.numberInput.in((numberInput) => {
      numberInput.downButton.click();
    });

    context.value.should("have.text", "0");
  });

  it("should call onChange when a value is typed", () => {
    visit("default");

    context.value.should("have.text", "0");

    context.numberInput.in((numberInput) => {
      numberInput.input.clear().type("123");
    });

    context.value.should("have.text", "123");
  });

  it("should call onChange with a custom stepped value when arrow buttons are clicked", () => {
    visit("withCustomStep");

    context.value.should("have.text", "0");

    context.numberInput.in((numberInput) => {
      numberInput.upButton.click();
    });

    context.value.should("have.text", "5");

    context.numberInput.in((numberInput) => {
      numberInput.downButton.click();
    });

    context.value.should("have.text", "0");
  });
});
