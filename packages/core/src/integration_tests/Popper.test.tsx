/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/valid-expect */
import {
  extractDeclaration,
  getStorybookControlsURL,
  getStorybookURL,
  makeContext,
} from "@braze/cypress-utils";
import { popper, tooltip, iconButton } from "@braze/beacon-test-utils";
import { visualTest, setupVisualTesting } from "@braze/beacon-cypress-helpers";

const contextDeclaration = extractDeclaration({
  clickToOpenCloseButton: () => cy.contains("button", "Click to open/close"),
  clickToOpenButton: () => cy.contains("button", "Click to Open"),
  hoverToOpenButton: () => cy.contains("button", "Hover to open"),
  hoverOverMeButton1: () => cy.contains("button", "Hover over me").eq(0),
  hoverOverMeButton2: () =>
    cy.findAllByText("Hover over me").eq(1).closest("button"),
  wrongIdButton: () => cy.contains("button", "This button has the wrong ID"),
  delayOpenButton: () =>
    cy.contains("button", "This button opens the popover eventually"),
  smallButton: iconButton,
  popper,
  tooltip,
  invisibleButton: () => cy.findByText("invisible button"),
});
const context = makeContext("annotation", contextDeclaration);
const story = getStorybookURL("Core/Overlay/Popover");
const popperStory = getStorybookControlsURL("Core/Overlay/Popper");
const tooltipStory = getStorybookURL("Core/Overlay/Tooltip");

const urls = {
  autoplacement: story("auto-placement")()(),
  autoplacementTop: story("auto-placement")([
    {
      type: "select",
      name: "placement",
      value: "top",
    },
  ])(),
  largeTargetBottomStart: story("basic use")([
    {
      type: "select",
      name: "Placement",
      value: "bottom-start",
    },
  ])(),
  largeTargetBottom: story("basic use")([
    {
      type: "select",
      name: "Placement",
      value: "bottom",
    },
  ])(),
  largeTargetBottomEnd: story("basic use")([
    {
      type: "select",
      name: "Placement",
      value: "bottom-end",
    },
  ])(),
  largeTargetRightStart: story("basic use")([
    {
      type: "select",
      name: "Placement",
      value: "bottom-start",
    },
  ])(),
  largeTargetRight: story("basic use")([
    {
      type: "select",
      name: "Placement",
      value: "bottom",
    },
  ])(),
  largeTargetRightEnd: story("basic use")([
    {
      type: "select",
      name: "Placement",
      value: "bottom-end",
    },
  ])(),
  smallTargetBottomStart: story("small target")([
    {
      type: "select",
      name: "Placement",
      value: "bottom-start",
    },
  ])(),
  smallTargetBottom: story("small target")([
    {
      type: "select",
      name: "Placement",
      value: "bottom",
    },
  ])(),
  smallTargetBottomEnd: story("small target")([
    {
      type: "select",
      name: "Placement",
      value: "bottom-end",
    },
  ])(),
  smallTargetRightStart: story("small target")([
    {
      type: "select",
      name: "Placement",
      value: "bottom-start",
    },
  ])(),
  smallTargetRight: story("small target")([
    {
      type: "select",
      name: "Placement",
      value: "bottom",
    },
  ])(),
  smallTargetRightEnd: story("small target")([
    {
      type: "select",
      name: "Placement",
      value: "bottom-end",
    },
  ])(),
  popoverModal: story("modal use")()(),
  tooltipModal: tooltipStory("modal use")()(),
  bigPopperAutoPlacement: popperStory("large popper content")()(),
  advanced: popperStory("advanced example")()(),
  notFound: popperStory("element not found")()(),
  preventCloseOnOutsideClick: popperStory(
    "prevent close on outside click for element with class"
  )()(),
  preventCloseOnOutsideClickCustomClass: popperStory(
    "prevent close on outside click for element with custom class"
  )()(),
  preventCloseOnOutsideClickNoClass: popperStory(
    "no crash on outside click for element with empty ignore class"
  )()(),
  preventCloseOnAnyClick: popperStory(
    "prevent close on any outside interaction"
  )()(),
  interactive: popperStory("interactive")()(),
  delayOpen: popperStory("delay only open")()(),
  delayOpenAndClose: popperStory("delay open and close")()(),
  delayClose: popperStory("delay only close")()(),
  mouseleave: popperStory("advanced example")([
    {
      type: "boolean",
      name: "mouseLeaveUntrigger",
      value: true,
    },
  ])(),
  triggerOnFocus: story("trigger on focus")()(),
  accessibility: story("keyboard accessibility")()(),
  scroll: popperStory("closing on scroll")()(),
};

describe("Popper", () => {
  setupVisualTesting("Popper");

  function visit(page: keyof typeof urls = "autoplacement") {
    cy.visit(urls[page]);
  }

  function scrollDiv(
    where:
      | "topRight"
      | "bottomRight"
      | "topLeft"
      | "bottomLeft"
      | "center"
      | "centerLeft"
      | "centerRight"
      | "centerBottom"
      | "centerTop"
  ) {
    cy.log(where);

    cy.get("#scroll").then(([div]) => {
      const { right, bottom } = div.getBoundingClientRect();

      switch (where) {
        case "topRight":
          cy.get("#scroll").scrollTo((right * 1) / 11, (bottom * 10) / 11);

          break;
        case "bottomRight":
          cy.get("#scroll").scrollTo((right * 1) / 11, (bottom * 1) / 11);

          break;
        case "topLeft":
          cy.get("#scroll").scrollTo((right * 10) / 11, (bottom * 10) / 11);

          break;
        case "bottomLeft":
          cy.get("#scroll").scrollTo((right * 10) / 11, (bottom * 1) / 11);

          break;
        case "center":
          cy.get("#scroll").scrollTo(right / 2, bottom / 2);

          break;
        case "centerLeft":
          cy.get("#scroll").scrollTo((right * 10) / 11, bottom / 2);

          break;
        case "centerRight":
          cy.get("#scroll").scrollTo((right * 1) / 11, bottom / 2);

          break;
        case "centerTop":
          cy.get("#scroll").scrollTo(right / 2, (bottom * 10) / 11);

          break;
        case "centerBottom":
          cy.get("#scroll").scrollTo(right / 2, (bottom * 1) / 11);

          break;
      }
    });
  }

  function showPopoverAndAssertPopoverIs(
    button: keyof typeof contextDeclaration,
    where:
      | "left"
      | "right"
      | "bottom-end"
      | "bottom-start"
      | "bottom"
      | "top-end"
      | "top-start"
      | "top",
    { isPopper }: { isPopper: boolean } = { isPopper: false }
  ) {
    cy.log(`assert popper is ${where} (${isPopper ? "popper" : "popover"})`);

    // force prevents scrolling the viewport
    context[button].click({ force: true });

    context[button].closest("button").then(([button]) => {
      context.popper.then(([popover]) => {
        const buttonBounds = button.getBoundingClientRect();
        const popoverBounds = popover.getBoundingClientRect();

        const popoverIsLeft = () =>
          expect(buttonBounds.right).to.be.greaterThan(popoverBounds.left);

        const popoverIsRight = () => {
          // it's about 2 pixels off, so give some wiggle room
          expect(buttonBounds.right).to.be.lessThan(popoverBounds.left + 5);
        };

        const popoverIsVerticallyCentered = () => {
          expect(buttonBounds.top).to.be.greaterThan(popoverBounds.top);

          expect(buttonBounds.bottom).to.be.lessThan(popoverBounds.bottom);
        };

        const popoverIsStart = () =>
          isPopper
            ? expect(buttonBounds.left + 1).to.equal(popoverBounds.left)
            : // wiggle room, including the red border
              expect(buttonBounds.left - 9).to.equal(popoverBounds.left);
        const popoverIsEnd = () =>
          // wiggle room, including the red border
          isPopper
            ? expect(buttonBounds.right + 1).to.equal(popoverBounds.right)
            : expect(buttonBounds.right + 11).to.equal(popoverBounds.right);
        const popoverIsBottom = () =>
          isPopper
            ? expect(buttonBounds.bottom + 12).to.be.greaterThan(
                popoverBounds.top
              )
            : expect(buttonBounds.bottom + 2).to.be.greaterThan(
                popoverBounds.top
              );
        const popoverIsTop = () =>
          isPopper
            ? expect(buttonBounds.top - 10).to.be.lessThan(popoverBounds.bottom)
            : expect(buttonBounds.top - 2).to.be.lessThan(popoverBounds.bottom);

        switch (where) {
          case "left": {
            popoverIsLeft();

            popoverIsVerticallyCentered();

            break;
          }
          case "right": {
            popoverIsRight();

            popoverIsVerticallyCentered();

            break;
          }
          case "bottom-start": {
            popoverIsStart();

            popoverIsBottom();

            break;
          }
          case "bottom-end": {
            popoverIsEnd();

            popoverIsBottom();

            break;
          }
          case "top-start": {
            popoverIsStart();

            popoverIsTop();

            break;
          }
          case "top-end": {
            popoverIsEnd();

            popoverIsTop();

            break;
          }
        }
      });
    });

    // close the popover to prepare for the next test
    context[button].click({ force: true });
  }

  it('should render popover at correct location with "auto"', () => {
    visit();

    scrollDiv("centerRight");

    // wait for the button to be ready to interact
    cy.findByText("Click to open/close").should("be.visible");

    cy.wait(100);

    showPopoverAndAssertPopoverIs("clickToOpenCloseButton", "bottom-end");

    scrollDiv("centerLeft");

    showPopoverAndAssertPopoverIs("clickToOpenCloseButton", "bottom-start");

    scrollDiv("topRight");

    showPopoverAndAssertPopoverIs("clickToOpenCloseButton", "bottom-end");

    scrollDiv("topLeft");

    showPopoverAndAssertPopoverIs("clickToOpenCloseButton", "bottom-start");

    scrollDiv("bottomRight");

    showPopoverAndAssertPopoverIs("clickToOpenCloseButton", "top-end");

    scrollDiv("bottomLeft");

    showPopoverAndAssertPopoverIs("clickToOpenCloseButton", "top-start");

    scrollDiv("centerBottom");

    showPopoverAndAssertPopoverIs("clickToOpenCloseButton", "top");

    scrollDiv("centerTop");

    showPopoverAndAssertPopoverIs("clickToOpenCloseButton", "top");

    scrollDiv("center");

    showPopoverAndAssertPopoverIs("clickToOpenCloseButton", "bottom");
  });

  it('should render large popper at correct location with "auto"', () => {
    visit("bigPopperAutoPlacement");

    scrollDiv("centerRight");

    // wait for the button to be ready to interact
    cy.findByText("Click to open/close").should("be.visible");

    cy.wait(100);

    showPopoverAndAssertPopoverIs("clickToOpenCloseButton", "left", {
      isPopper: true,
    });

    scrollDiv("centerLeft");

    showPopoverAndAssertPopoverIs("clickToOpenCloseButton", "right", {
      isPopper: true,
    });

    scrollDiv("topRight");

    showPopoverAndAssertPopoverIs("clickToOpenCloseButton", "bottom-end", {
      isPopper: true,
    });

    scrollDiv("topLeft");

    showPopoverAndAssertPopoverIs("clickToOpenCloseButton", "bottom-start", {
      isPopper: true,
    });

    scrollDiv("bottomRight");

    showPopoverAndAssertPopoverIs("clickToOpenCloseButton", "top-end", {
      isPopper: true,
    });

    scrollDiv("bottomLeft");

    showPopoverAndAssertPopoverIs("clickToOpenCloseButton", "top-start", {
      isPopper: true,
    });

    scrollDiv("centerBottom");

    showPopoverAndAssertPopoverIs("clickToOpenCloseButton", "top", {
      isPopper: true,
    });

    scrollDiv("centerTop");

    showPopoverAndAssertPopoverIs("clickToOpenCloseButton", "top", {
      isPopper: true,
    });

    scrollDiv("center");

    showPopoverAndAssertPopoverIs("clickToOpenCloseButton", "bottom", {
      isPopper: true,
    });
  });

  it("should render popover with default placement when centered", () => {
    visit("autoplacementTop");

    scrollDiv("center");

    // wait for the button to be ready to interact
    cy.findByText("Click to open/close").should("be.visible");

    cy.wait(100);

    showPopoverAndAssertPopoverIs("clickToOpenCloseButton", "top");
  });

  it("should render popover over modal", () => {
    visit("popoverModal");

    context.clickToOpenCloseButton.first().click();

    cy.get(".bcl-modal").within(() => {
      context.clickToOpenCloseButton.click();
    });

    context.popper.should("be.visible");

    context.popper.in(() => {
      // running this against the header provided by the popover helper caused it
      // to compare against the body as well. This ensures that it only tests against
      // the correct element
      cy.get(".bcl-popover-heading").should("have.text", "Heading");

      cy.get(".bcl-popover-body").should(
        "have.text",
        "Set the priority of this Canvas relative to other individual in-app message Campaigns."
      );
    });
  });

  it("should render tooltip over modal", () => {
    visit("tooltipModal");

    context.clickToOpenButton.click();

    cy.get(".bcl-modal").within(() => {
      context.hoverToOpenButton.realHover();
    });

    context.popper.should("be.visible");

    context.popper.should("have.text", "Tooltip");
  });

  it("should render tooltips successfully when rendered with a context pushing values to parent", () => {
    visit("advanced");

    context.hoverOverMeButton1.click();

    context.tooltip.should("be.visible");

    context.tooltip.should("have.text", "Hi!");

    context.hoverOverMeButton1.click();

    context.hoverOverMeButton2.click();

    context.tooltip.should("be.visible");

    context.tooltip.should("have.text", "There!");
  });

  it("should not crash if an element is not found", () => {
    visit("notFound");

    cy.spy(console, "error");

    context.wrongIdButton.click();

    context.tooltip.should("not.exist");

    // verify no error was thrown
    // eslint-disable-next-line no-console
    expect(console.error).not.to.be.called;
  });

  it("should NOT close the popper when user clicks on an ignored element", () => {
    visit("preventCloseOnOutsideClick");

    // open popper
    cy.get(".popper-open-btn").click();

    // verify that the popper is visible
    context.popper.should("be.visible");

    // click on the button with the class name
    cy.get(".bcl-popper-ignore-click").click();

    // verify that the popper is still visible
    context.popper.should("be.visible");

    // now click outside somewhere on the body
    cy.get("body").click(0, 0);

    // now verify that the popper is gone
    context.popper.should("not.exist");
  });

  it("should NOT close the popper when user clicks on an ignored element using custom className", () => {
    visit("preventCloseOnOutsideClickCustomClass");

    // open popper
    cy.get(".popper-open-btn").click();

    // verify that the popper is visible
    context.popper.should("be.visible");

    // click on the button with the class name
    cy.get(".custom-popper-ignore-click").click();

    // verify that the popper is still visible
    context.popper.should("be.visible");

    // now click outside somewhere on the body
    cy.get("body").click(0, 0);

    // now verify that the popper is gone
    context.popper.should("not.exist");
  });

  it("should close, ignoring className, when user closes a popper that has 'isIgnoreCloseOnClickOutsideEnabled' set to false", () => {
    visit("preventCloseOnOutsideClickNoClass");

    // open popper
    cy.get(".popper-open-btn").click();

    // verify that the popper is visible
    context.popper.should("be.visible");

    // click on the button with the default class name
    cy.get(".bcl-popper-ignore-click").click();

    // verify that the popper is closed
    context.popper.should("not.exist");
  });

  it("should ignore any outside click event when closeOnClickOutside is true", () => {
    visit("preventCloseOnAnyClick");

    // open popper
    cy.findByText("This button toggles the popover").click();

    // verify that the popper is visible
    context.popper.should("be.visible");

    cy.findByText("Click this to not close the popover").click();

    context.popper.should("be.visible");

    cy.get("body").click();

    context.popper.should("be.visible");

    cy.findByText("This button toggles the popover").click();

    context.popper.should("not.exist");
  });

  it("should ignore clicks on internal elements when interactive is true", () => {
    visit("interactive");

    // open popper
    cy.findByText("This button toggles the popover").click();

    // verify that the popper is visible
    context.popper.should("be.visible");

    context.popper.within(() => {
      cy.findByText("Button not clicked.").should("be.visible");

      cy.get("button").click();

      cy.findByText("Button clicked.").should("be.visible");
    });

    context.popper.should("be.visible");

    cy.findByText("This button toggles the popover").click();

    context.popper.should("not.exist");
  });

  it("should render popover arrow in the correct location", () => {
    visit("largeTargetBottom");

    context.clickToOpenCloseButton.click();

    visualTest("large target, bottom");

    visit("largeTargetBottomEnd");

    context.clickToOpenCloseButton.click();

    visualTest("large target, bottom end");

    visit("largeTargetBottomStart");

    context.clickToOpenCloseButton.click();

    visualTest("large target, bottom start");

    visit("largeTargetRight");

    context.clickToOpenCloseButton.click();

    visualTest("large target, right");

    visit("largeTargetRightEnd");

    context.clickToOpenCloseButton.click();

    visualTest("large target, right end");

    visit("largeTargetRightStart");

    context.clickToOpenCloseButton.click();

    visualTest("large target, right start");

    visit("smallTargetBottom");

    context.smallButton.click();

    visualTest("small target, bottom");

    visit("smallTargetBottomEnd");

    context.smallButton.click();

    visualTest("small target, bottom end");

    visit("smallTargetBottomStart");

    context.smallButton.click();

    visualTest("small target, bottom start");

    visit("smallTargetRight");

    context.smallButton.click();

    visualTest("small target, right");

    visit("smallTargetRightEnd");

    context.smallButton.click();

    visualTest("small target, right end");

    visit("smallTargetRightStart");

    context.smallButton.click();

    visualTest("small target, right start");
  });

  it("should delay opening/closing the popper when delay is specified as a number", () => {
    cy.clock();

    visit("delayOpenAndClose");

    context.delayOpenButton.click();

    context.popper.should("not.exist");

    cy.tick(1500);

    context.popper.should("not.exist");

    cy.tick(499);

    context.popper.should("not.exist");

    cy.tick(2);

    context.popper.should("be.visible");

    context.invisibleButton.click();

    context.popper.should("be.visible");

    cy.tick(1500);

    context.popper.should("be.visible");

    cy.tick(499);

    context.popper.should("be.visible");

    cy.tick(2);

    context.popper.should("not.exist");
  });

  it("should restart the timer when the user clicks multiple", () => {
    cy.clock();

    visit("delayOpen");

    context.delayOpenButton.click();

    context.popper.should("not.exist");

    cy.tick(1500);

    // restart the click timer
    context.delayOpenButton.click();

    cy.tick(510);

    context.popper.should("not.exist");

    cy.tick(1501);

    context.popper.should("be.visible");
  });

  it("should have a delay on close only when null is specified as opening delay", () => {
    cy.clock();

    visit("delayClose");

    context.delayOpenButton.click();

    context.popper.should("be.visible");

    context.invisibleButton.click();

    context.popper.should("be.visible");

    cy.tick(1500);

    context.popper.should("be.visible");

    cy.tick(499);

    context.popper.should("be.visible");

    cy.tick(2);

    context.popper.should("not.exist");
  });

  it("should have a delay on open only when null is specified as closing delay", () => {
    cy.clock();

    visit("delayOpen");

    context.delayOpenButton.click();

    context.popper.should("not.exist");

    cy.tick(1500);

    context.popper.should("not.exist");

    cy.tick(499);

    context.popper.should("not.exist");

    cy.tick(2);

    context.popper.should("be.visible");

    context.invisibleButton.click();

    context.popper.should("not.exist");
  });

  it("should work with mouseleave", () => {
    visit("mouseleave");

    context.hoverOverMeButton1.click();

    context.popper.should("be.visible");

    context.hoverOverMeButton1.realHover();

    // trigger mouseleave on the first button
    context.hoverOverMeButton1.trigger("mouseleave");

    context.hoverOverMeButton2.realHover();

    context.popper.should("not.exist");
  });

  it("should work with keyboard accesibility", () => {
    visit("accessibility");

    cy.contains(
      "button",
      "Does nothing, here for testing purposes only"
    ).focus();

    cy.findByPlaceholderText("internal form").should("not.exist");

    cy.realPress("Tab");

    cy.findByPlaceholderText("internal form").should("be.visible");

    cy.findByPlaceholderText("focus to show popover").should("have.focus");

    cy.realPress("Tab");

    // verify that the popover stays open when tabbing to the 1st focusable element
    cy.findByPlaceholderText("internal form").should("have.focus");

    cy.realPress("Tab");

    // verify that the popover stays open when tabbing to the 2nd focusable element
    cy.contains("button", "Save").should("have.focus");

    cy.realPress("Tab");

    // verify that the popover closes when the last focusable element is unfocused
    cy.findByPlaceholderText("internal form").should("not.exist");
  });

  it("should work with keyboard accesibility and mouse clicking outside of popper", () => {
    visit("accessibility");

    cy.contains(
      "button",
      "Does nothing, here for testing purposes only"
    ).focus();

    cy.findByPlaceholderText("internal form").should("not.exist");

    cy.realPress("Tab");

    cy.findByPlaceholderText("internal form").should("be.visible");

    cy.findByPlaceholderText("focus to show popover").should("have.focus");

    cy.realPress("Tab");

    // verify that the popover stays open when tabbing to the 1st focusable element
    cy.findByPlaceholderText("internal form").should("have.focus");

    cy.realPress("Tab");

    // verify that the popover stays open when tabbing to the 2nd focusable element
    cy.contains("button", "Save").should("have.focus");

    // check that it closes when clicked outside of, even after popover tabbing
    cy.contains(
      "button",
      "Does nothing, here for testing purposes only"
    ).click();

    // verify that the popover closes when the last focusable element is unfocused
    cy.findByPlaceholderText("internal form").should("not.exist");
  });

  it("should work with keyboard accesibility and mouse clicking inside of popper", () => {
    visit("accessibility");

    cy.contains(
      "button",
      "Does nothing, here for testing purposes only"
    ).focus();

    cy.findByPlaceholderText("internal form").should("not.exist");

    cy.realPress("Tab");

    cy.findByPlaceholderText("internal form").should("be.visible");

    cy.findByPlaceholderText("focus to show popover").should("have.focus");

    cy.realPress("Tab");

    // verify that the popover stays open when tabbing to the 1st focusable element
    cy.findByPlaceholderText("internal form").should("have.focus");

    cy.realPress("Tab");

    // verify that the popover stays open when tabbing to the 2nd focusable element
    cy.contains("button", "Save").should("have.focus");

    // check that it stays open when clicked inside of, even after popover tabbing
    cy.get("#boring").click();

    // verify that the popover closes when the last focusable element is unfocused
    cy.findByPlaceholderText("internal form").should("exist");
  });

  it("should show the popover on focus and hide on blur", () => {
    visit("triggerOnFocus");

    cy.findByText("invisible button").click();

    cy.findByText("Heading").should("not.exist");

    cy.realPress(["Shift", "Tab"]);

    cy.findByText("Heading").should("be.visible");

    cy.realPress("Tab");

    cy.findByText("Heading").should("not.exist");
  });

  it("should close the tooltip on scroll of document or any parent element", () => {
    visit("scroll");

    cy.contains("button", "Hover to open").trigger("mouseenter");

    context.tooltip.should("be.visible");

    cy.scrollTo("bottom");

    context.tooltip.should("not.exist");

    cy.contains("button", "Hover to open 2").trigger("mouseenter");

    context.tooltip.should("be.visible");

    cy.get("#internal-scroll").scrollTo("bottom");

    context.tooltip.should("not.exist");
  });
});
