/* eslint-disable jest/expect-expect */
import { getStorybookControlsURL, makeContext } from "@braze/cypress-utils";
import {
  fieldLabelContainer,
  fieldLabelWithText,
  popper,
} from "@braze/beacon-test-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";

const stories = getStorybookControlsURL("Core/Forms/FieldLabel");

type UrlKeys =
  | "default"
  | "helpText"
  | "success"
  | "error"
  | "optional"
  | "required"
  | "stacked"
  | "formatLabel"
  | "infoIconPopover"
  | "infoIconPopoverKeyboard";

const urls: {
  [K in UrlKeys]: string;
} = {
  default: stories("basic use")()(),
  helpText: stories("helper text")()(),
  success: stories("success text")()(),
  error: stories("error text")()(),
  optional: stories("optional")()(),
  required: stories("required")()(),
  stacked: stories("stacked fields")()(),
  formatLabel: stories("formatLabel")()(),
  infoIconPopover: stories("info icon popover")()(),
  infoIconPopoverKeyboard: stories(
    "info icon popover with ambiguous children"
  )()(),
};

const context = makeContext("FieldLabel", {
  fieldLabelContainer,
  fieldLabelWithText,
  popper,
});

describe("FieldLabel", () => {
  setupVisualTesting("FieldLabel");

  function visit(page: UrlKeys) {
    cy.visit(urls[page]);
  }

  it("should successfully render basic FieldLabel", () => {
    visit("default");

    visualTest();
  });

  it("should successfully render FieldLabel help text", () => {
    visit("helpText");

    context.fieldLabelContainer.in((container) => {
      container.helpText.should(
        "have.text",
        "Remember, `GUID` does not rhyme with `squid`"
      );
    });

    visualTest();
  });

  it("should successfully render status=success FieldLabel", () => {
    visit("success");

    context.fieldLabelContainer.in((container) => {
      container.statusText.should("have.text", "You did it, great job!");

      container.helpText.should("not.exist");
    });

    visualTest();
  });

  it("should successfully render status=error FieldLabel", () => {
    visit("error");

    context.fieldLabelContainer.in((container) => {
      container.statusText.should(
        "have.text",
        "Valid email addresses include the @ sign"
      );

      container.helpText.should("not.exist");
    });

    visualTest();
  });

  it("should successfully render optional FieldLabel", () => {
    visit("optional");

    context.fieldLabelContainer.in((container) => {
      container.optional.should("be.visible");

      container.required.should("not.exist");
    });

    visualTest();
  });

  it("should successfully render required FieldLabel", () => {
    visit("required");

    context.fieldLabelContainer.in((container) => {
      container.required.should("be.visible");

      container.optional.should("not.exist");
    });

    visualTest();
  });

  it("should successfully render stacked FieldLabel fields", () => {
    visit("stacked");

    visualTest();
  });

  it("should successfully render when formatLabel is passed in", () => {
    visit("formatLabel");

    context.fieldLabelContainer.in((container) => {
      container.fieldLabel.within(() => {
        cy.get("span")
          .should("have.text", "specially formatted!")
          .and("have.length", 1);

        cy.get("i").should("have.text", "Name").and("have.length", 1);
      });
    });

    visualTest();
  });

  it("should render extended help text as a tooltip", () => {
    visit("infoIconPopover");

    const textinfoIconPopover =
      "Can be used across push, email, and in-app messages to send a rendered copy of the message.";

    cy.findByText(textinfoIconPopover).should("not.exist");

    context.fieldLabelWithText("text-based info popover").in((fieldLabel) => {
      fieldLabel.infoIcon.trigger("mouseenter");
    });

    cy.findByText(textinfoIconPopover).should("be.visible");

    visualTest();

    context.fieldLabelWithText("text-based info popover").in((fieldLabel) => {
      fieldLabel.infoIcon.trigger("mouseleave");
    });

    // trigger a mouseleave by focusing something else
    cy.findByPlaceholderText("simple help text").click();

    cy.findByText(textinfoIconPopover).should("not.exist");
  });

  it("should render React extended help text as a popover", () => {
    visit("infoIconPopover");

    context
      .fieldLabelWithText("react-based info popover (click to trigger)")
      .in((fieldLabel) => {
        fieldLabel.infoIcon.trigger("mouseenter");
      });

    // this one is triggered by click, so it should not render until we click it
    cy.findByText("Content test groups").should("not.exist");

    context
      .fieldLabelWithText("react-based info popover (click to trigger)")
      .in((fieldLabel) => {
        fieldLabel.infoIcon.click();
      });

    cy.findByText("Content test groups").should("be.visible");
  });

  it("should not wrap the label beneath the control", () => {
    cy.viewport(650, 750);

    visit("infoIconPopover");

    context
      .fieldLabelWithText("react-based info popover (click to trigger)")
      .in((fieldLabel) => {
        fieldLabel.infoIcon.should("be.visible");
      });

    visualTest();
  });

  it("should allow closing the extended help text React popper via its close button", () => {
    visit("infoIconPopover");

    context
      .fieldLabelWithText("react-based info popover (click to trigger)")
      .in((fieldLabel) => {
        fieldLabel.infoIcon.click();
      });

    cy.findByText("Content test groups").should("be.visible");

    visualTest();

    context.popper.in((popper) => {
      popper.closeButton.click();
    });

    cy.findByText("Content test groups").should("not.exist");
  });

  it("should support keyboard navigation into the popover for react-based info icon popover", () => {
    visit("infoIconPopover");

    visualTest("initial view for muted and primary style view");

    context
      .fieldLabelWithText("react-based info popover (click to trigger)")
      .in((fieldLabel) => {
        fieldLabel.infoIcon.click();
      });

    cy.findByText("Content test groups").should("be.visible");

    // the field label should automatically focus the first interactive element
    cy.contains("a", "here").should("have.focus");

    // tab to the second link
    cy.realPress("Tab");

    cy.contains("a", "Learn more about Content Test Groups").should(
      "have.focus"
    );

    // tab to the close button
    cy.realPress("Tab");

    context.popper.in((popper) => {
      popper.closeButton.should("have.focus");
    });

    // tab away from the interactive elements, which should close the popover
    cy.realPress("Tab");

    cy.findByText("Content test groups").should("not.exist");

    cy.findByPlaceholderText("react field label help text").should(
      "have.focus"
    );

    // now verify reverse works
    cy.realPress(["Shift", "Tab"]);

    // the field label should automatically focus the first interactive element
    cy.contains("a", "here").should("have.focus");

    // back up to the icon
    cy.realPress(["Shift", "Tab"]);

    context
      .fieldLabelWithText("react-based info popover (click to trigger)")
      .in((fieldLabel) => {
        fieldLabel.infoIcon.should("have.focus");
      });

    // back up to the previous input
    cy.realPress(["Shift", "Tab"]);

    cy.findByPlaceholderText("simple help text").should("have.focus");
  });

  it("should allow keyboard navigation through info icon popover using ref or htmlFor for detecting the control", () => {
    visit("infoIconPopoverKeyboard");

    // focus trick - this focuses the button and then tabbing works
    cy.findByText("invisible button").click();

    // tab to the first icon
    cy.realPress("Tab");

    cy.findByText("Content test groups").should("be.visible");

    // the field label should automatically focus the first interactive element
    cy.contains("a", "here").should("have.focus");

    // tab to the second link
    cy.realPress("Tab");

    cy.contains("a", "Learn more about Content Test Groups").should(
      "have.focus"
    );

    // tab away from the interactive elements, which should close the popover
    cy.realPress("Tab");

    cy.findByText("Content test groups").should("not.exist");

    cy.get("input[type='radio']:eq(0)").should("have.focus");

    // tab to the second icon
    cy.realPress("Tab");

    cy.findByText("Content test groups").should("be.visible");

    // the field label should automatically focus the first interactive element
    cy.contains("a", "here").should("have.focus");

    // tab to the second link
    cy.realPress("Tab");

    cy.contains("a", "Learn more about Content Test Groups").should(
      "have.focus"
    );

    // tab away from the interactive elements, which should close the popover
    cy.realPress("Tab");

    cy.findByText("Content test groups").should("not.exist");

    cy.findByPlaceholderText("using htmlFor").should("have.focus");

    // tab to the third, broken icon
    cy.realPress("Tab");

    cy.findByText("Content test groups").should("be.visible");

    // the field label should automatically focus the first interactive element
    cy.contains("a", "here").should("have.focus");

    // tab to the second link
    cy.realPress("Tab");

    cy.contains("a", "Learn more about Content Test Groups").should(
      "have.focus"
    );

    // tab away from the interactive elements, which should NOT close the popover
    cy.realPress("Tab");

    cy.findByText("Content test groups").should("be.visible");

    // focus should not leave the popover, it's just stuck
    cy.contains("a", "Learn more about Content Test Groups").should(
      "have.focus"
    );
  });
});
