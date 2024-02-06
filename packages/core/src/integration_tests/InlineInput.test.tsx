/* eslint-disable jest/expect-expect */
import { getStorybookURL, makeContext } from "@braze/cypress-utils";
import { inlineInput } from "@braze/beacon-test-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";
import faker from "@faker-js/faker";

const context = makeContext("inlineInput", inlineInput);
const stories = getStorybookURL("Core/Forms/InlineInput");

type UrlKeys = "default" | "invalid" | "disabled" | "customChild" | "small";

const urls: {
  [K in UrlKeys]: string;
} = {
  default: stories("basic use")()(),
  small: stories("with size sm")()(),
  invalid: stories("with errors")()(),
  disabled: stories("disabled use")()(),
  customChild: stories("with custom view mode text")()(),
};

describe("InlineInput", () => {
  setupVisualTesting("InlineInput");

  function visit(page: UrlKeys = "default") {
    cy.visit(urls[page]);
  }

  describe("when in view mode", () => {
    it("should display edit mode when the component text is clicked and focus on the input field", () => {
      visit();

      // view mode should be visible
      context.viewMode.should("be.visible");

      // Take visual snapshot
      visualTest("View mode");

      // hover and click on the value passed to the inline input in view mode
      context.viewMode.in((viewMode) => {
        // hover over value to display pencil
        viewMode.value.realHover();

        // check that the pencil icon is visible
        viewMode.icon.should("be.visible");

        // now, click the value to switch to edit mode
        viewMode.value.click();
      });

      // view mode should now be disabled/NOT exist
      context.viewMode.should("not.exist");

      // Take visual snapshot
      visualTest("Edit mode");
    });

    it("should allow user to switch to edit mode by focusing and pressing space", () => {
      visit();

      // view mode should be visible
      context.viewMode.should("be.visible");

      // test that the element displays correctly when focused
      visualTest({
        tag: "hover/focus",
        scriptHooks: {
          beforeCaptureScreenshot: `
          const elem = document.querySelector(".bcl-inline-input-view-mode");

          elem.focus();
        `,
        },
      });

      // focus on the element
      context.viewMode.focus();

      // hover and click on the value passed to the inline input in view mode
      context.viewMode.in((viewMode) => {
        // check that the pencil icon is visible
        viewMode.icon.should("be.visible");
      });

      // now, press space to switch to edit mode
      context.viewMode.type(" ");

      // view mode should now be disabled/NOT exist
      context.viewMode.should("not.exist");
    });

    it("should allow user to switch to edit mode by focusing and pressing enter", () => {
      visit();

      // view mode should be visible
      context.viewMode.should("be.visible");

      // test that the element displays correctly when focused
      visualTest({
        tag: "hover/focus",
        scriptHooks: {
          beforeCaptureScreenshot: `
          const elem = document.querySelector(".bcl-inline-input-view-mode");

          elem.focus();
        `,
        },
      });

      // focus on the element
      context.viewMode.focus();

      // hover and click on the value passed to the inline input in view mode
      context.viewMode.in((viewMode) => {
        // check that the pencil icon is visible
        viewMode.icon.should("be.visible");
      });

      // now, press space to switch to edit mode
      context.viewMode.type("{enter}");

      // view mode should now be disabled/NOT exist
      context.viewMode.should("not.exist");
    });

    it("should NOT switch to edit mode by focusing and pressing a key other than space and enter", () => {
      visit();

      // view mode should be visible
      context.viewMode.should("be.visible");

      // focus on the element
      context.viewMode.focus();

      // hover and click on the value passed to the inline input in view mode
      context.viewMode.in((viewMode) => {
        // check that the pencil icon is visible
        viewMode.icon.should("be.visible");
      });

      // now, press space to switch to edit mode
      context.viewMode.type("test");

      // view mode should still be visible
      context.viewMode.should("be.visible");

      // view mode should now be disabled/NOT exist
      context.editMode.should("not.exist");
    });

    it(`should display edit mode when the 'vSize="sm"' component text is clicked and focus on the input field`, () => {
      visit("small");

      // view mode should be visible
      context.viewMode.should("be.visible");

      // Take visual snapshot
      visualTest("View mode");

      // hover and click on the value passed to the inline input in view mode
      context.viewMode.actions.clickValue();

      // view mode should now be disabled/NOT exist
      context.viewMode.should("not.exist");

      // Take visual snapshot
      visualTest("Edit mode");
    });

    it("should display edit mode when the pencil is clicked and focus on the input field", () => {
      visit();

      // view mode should be visible
      context.viewMode.should("be.visible");

      // click on the icon passed to the inline input in view mode
      context.viewMode.in((viewMode) => {
        viewMode.icon.click();
      });

      // view mode should now be disabled/NOT exist
      context.viewMode.should("not.exist");

      // edit mode should now be enabled/visible
      context.editMode.should("be.visible");
    });

    it("should switch to edit mode immediately if the field becomes 'invalid' and leave it in edit mode if it becomes valid again", () => {
      visit();

      // view mode should be enabled/visible
      context.viewMode.should("be.visible");

      // click on the checkbox to make state invalid
      cy.get(".invalid-checkbox").click();

      // view mode should now be disabled/NOT exist
      context.viewMode.should("not.exist");

      // edit mode should now be enabled/visible
      context.editMode.should("be.visible");

      // Take visual snapshot
      visualTest("Invalid edit mode");

      // type sweet nothingness into the input field
      context.editMode.actions.type(` ${faker.random.words()}`);

      // click on the checkbox to make state valid
      cy.get(".invalid-checkbox").click();

      // view mode should STILL be disabled/NOT exist
      context.viewMode.should("not.exist");

      // edit mode should STILL be enabled/visible
      context.editMode.should("be.visible");
    });

    it("should NOT display edit mode when the component text is clicked and the component is disabled", () => {
      visit("disabled");

      // Take visual snapshot
      visualTest("Disabled mode");

      // click on the value passed to the inline input in view mode
      context.viewMode.actions.clickValue();

      // view mode should still be enabled/visible
      context.viewMode.should("be.visible");

      // edit mode should still be disabled/NOT exist
      context.editMode.should("not.exist");
    });

    it("should NOT display edit mode through a pencil icon when the component is disabled", () => {
      visit("disabled");

      // NOT make the pencil icon visible
      context.viewMode.in((viewMode) => {
        viewMode.icon.should("not.be.visible");
      });
    });

    it("should render custom components as expected and function normally via clicking on the value", () => {
      visit("customChild");

      // view mode should still be enabled/visible
      context.viewMode.should("be.visible");

      // edit mode should still be disabled/NOT exist
      context.editMode.should("not.exist");

      // Take visual snapshot
      visualTest("Custom component");

      // click on the icon passed to the inline input in view mode
      cy.get("#inline-input-heading-example").click();

      // view mode should now be disabled/NOT exist
      context.viewMode.should("not.exist");

      // edit mode should now be enabled/visible
      context.editMode.should("be.visible");

      // type sweet nothingness into the input field
      context.editMode.actions.type(` ${faker.random.words()}{esc}`);

      // view mode should still be enabled/visible again
      context.viewMode.should("be.visible");

      // edit mode should still be disabled/NOT exist
      context.editMode.should("not.exist");
    });

    it("should render custom components as expected and function normally via clicking on the pencil", () => {
      visit("customChild");

      // view mode should still be enabled/visible
      context.viewMode.should("be.visible");

      // edit mode should still be disabled/NOT exist
      context.editMode.should("not.exist");

      // click on the icon passed to the inline input in view mode
      context.viewMode.in((viewMode) => {
        viewMode.icon.click();
      });

      // view mode should now be disabled/NOT exist
      context.viewMode.should("not.exist");

      // edit mode should now be enabled/visible
      context.editMode.should("be.visible");

      // type sweet nothingness into the input field
      context.editMode.actions.type(` ${faker.random.words()}{enter}`);

      // view mode should still be enabled/visible again
      context.viewMode.should("be.visible");

      // edit mode should still be disabled/NOT exist
      context.editMode.should("not.exist");
    });
  });

  describe("when in edit mode", () => {
    beforeEach(() => {
      visit();

      // click on the value passed to the inline input in view mode
      context.viewMode.in((viewMode) => {
        viewMode.value.click();
      });
    });

    it("should let the user type in values", () => {
      const newValue = ` ${faker.random.words()}`;

      // type sweet nothingness into the input field
      context.editMode.actions.type(newValue);

      // verify that the value has changed as expected
      cy.get(".field-value").should("contain.text", newValue);
    });

    it("should let the user save the entered values and exit edit mode when the user clicks on the check button", () => {
      const newValue = ` ${faker.random.words()}`;

      // type sweet nothingness into the input field
      context.editMode.actions.type(newValue);

      // verify that the value has changed as expected
      cy.get(".field-value").should("contain.text", newValue);

      // now click on the 'save' button
      context.editMode.actions.saveClick();

      // verify once more that the value still contains the new value
      cy.get(".field-value").should("contain.text", newValue);
    });

    it("should let the user reset the entered values to the value prior to entering edit mode and exit edit mode when the user clicks on the exit button", () => {
      const newValue = ` ${faker.random.words()}`;

      // type sweet nothingness into the input field
      context.editMode.in((editMode) => {
        editMode.inputContainer.in((inputContainer) => {
          inputContainer.input.type(newValue);
        });
      });

      // verify that the value has changed as expected
      cy.get(".field-value").should("contain.text", newValue);

      // now click on the 'cancel' button
      context.editMode.actions.cancelClick();

      // now verify that the value NO LONGER contains the new value
      cy.get(".field-value").should("not.contain.text", newValue);
    });

    it("should clear the value to an empty string when the user clicks on the 'X' button inside the input field, save the entered value and exit edit mode when the user clicks on the check button", () => {
      const newValue = faker.random.words();

      // clear and then type sweet nothingness into the input field
      context.editMode.in((editMode) => {
        editMode.inputContainer.in((inputContainer) => {
          inputContainer.icon.click();

          inputContainer.input.type(newValue);
        });
      });

      // verify that the value has changed as expected
      cy.get(".field-value").should("have.text", newValue);

      // now click on the 'save' button
      context.editMode.actions.saveClick();

      // verify once more that the value still has the new value
      cy.get(".field-value").should("have.text", newValue);
    });

    it("should clear the value to an empty string when the user clicks on the 'X' button inside the input field, reset the entered values to the value prior to entering edit mode and exit edit mode when the user clicks on the exit button", () => {
      const newValue = faker.random.words();

      // clear and then type sweet nothingness into the input field
      context.editMode.in((editMode) => {
        editMode.inputContainer.in((inputContainer) => {
          inputContainer.icon.click();

          inputContainer.input.type(newValue);
        });
      });

      // verify that the value has changed as expected
      cy.get(".field-value").should("have.text", newValue);

      // now click on the 'cancel' button
      context.editMode.actions.cancelClick();

      // verify once more that the value NO LONGER has the new value
      cy.get(".field-value").should("not.have.text", newValue);
    });

    it("should switch the field to view mode when field is disabled", () => {
      // view mode should be disabled/NOT exist
      context.viewMode.should("not.exist");

      // edit mode should be enabled/visible
      context.editMode.should("be.visible");

      // click on the checkbox to make state invalid
      cy.get(".disabled-checkbox").click();

      // view mode should now be enabled/visible
      context.viewMode.should("be.visible");

      // edit mode should now be disabled/NOT exist
      context.editMode.should("not.exist");
    });

    it("should save the currently entered value and go back to view mode when user keys 'enter'", () => {
      const newValue = ` ${faker.random.words()}`;

      // type sweet nothingness into the input field
      context.editMode.actions.type(`${newValue}{enter}`);

      // view mode should now be enabled/visible
      context.viewMode.should("be.visible");

      // edit mode should now be disabled/NOT exist
      context.editMode.should("not.exist");

      // verify that the value has changed as expected
      cy.get(".field-value").should("contain.text", newValue);
    });

    it("should cancel the currently entered value and go back to view mode when user keys 'escape'", () => {
      const newValue = ` ${faker.random.words()}`;

      // type sweet nothingness into the input field
      context.editMode.actions.type(`${newValue}{esc}`);

      // view mode should now be enabled/visible
      context.viewMode.should("be.visible");

      // edit mode should now be disabled/NOT exist
      context.editMode.should("not.exist");

      // verify that the value has reverted to previous as expected
      cy.get(".field-value").should("not.contain.text", newValue);
    });
  });

  describe("'invalid' prop", () => {
    beforeEach(() => {
      visit("invalid");

      // click on the value passed to the inline input in view mode
      context.viewMode.actions.clickValue();
    });

    it("should NOT allow user to exit edit mode via 'save' if the 'invalid' prop is true", () => {
      // clear the input field
      context.editMode.actions.clearClick();

      // Take visual snapshot
      visualTest("Invalid with error message");

      // now the 'save' button should be disabled
      context.editMode.in((editMode) => {
        editMode.buttonContainer.in((buttonContainer) => {
          buttonContainer.save.should("be.disabled");
        });
      });
    });

    it("should NOT allow user to exit edit mode via 'cancel' if the 'invalid' prop is true", () => {
      // clear the input field
      context.editMode.actions.clearClick();

      // now the 'cancel' button should be disabled
      context.editMode.in((editMode) => {
        editMode.buttonContainer.in((buttonContainer) => {
          buttonContainer.cancel.should("be.disabled");
        });
      });
    });
  });
});
