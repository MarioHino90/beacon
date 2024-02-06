/* eslint-disable jest/expect-expect */
import {
  makeContext,
  getStorybookURL,
  extractSelector,
} from "@braze/cypress-utils";
import { modal, modalChildren } from "@braze/beacon-test-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";

const story = getStorybookURL("Core/Overlay/Modal");

type urlKeys =
  | "small"
  | "smallIcon"
  | "medium"
  | "large"
  | "extraLarge"
  | "nested"
  | "nestedCustomZIndex"
  | "nondismiss"
  | "nondismissNoExit"
  | "outsideContent"
  | "nestedModal"
  | "popoversModal"
  | "defaultModalSize";

const urls: { [K in urlKeys]: string } = {
  small: story("size small wo icon")()(),
  smallIcon: story("size small w icon")()(),
  medium: story("size medium")()(),
  large: story("size large")()(),
  extraLarge: story("size extra large")()(),
  nested: story("nested modals")()(),
  nestedCustomZIndex: story("nested modals with custom z-index")()(),
  nondismiss: story("non-dismissable modal")()(),
  nondismissNoExit: story("non-dismissable modal with no exit")()(),
  outsideContent: story("modal with outside content")()(),
  nestedModal: story("nested modals with custom z-index")()(),
  popoversModal: story("modal with popovers")()(),
  defaultModalSize: story("size: small (wo icon)")([
    {
      type: "select",
      name: "Size",
      value: "default",
    },
  ])(),
};

const modals = extractSelector({
  self: (idx: number) => cy.get(`.bcl-modal:eq(${idx})`),
  needsParams: true,
  children: modalChildren,
});

describe("Modal", () => {
  setupVisualTesting("Modal");

  function visit(page: urlKeys = "small") {
    cy.visit(urls[page]);
  }

  const context = makeContext("modal", { modal, modals });

  const openModal = () => {
    cy.get(".bcl-button").click();

    context.modal.should("exist");
  };

  const openNestedModal = () => {
    openModal();

    context.modal.in((modal) => {
      modal.body.in(() => {
        cy.get(".bcl-button").click();
      });
    });

    context.modal.should("have.length", 2);
  };

  const outsideClickTest = () => {
    context.modal.in((modal) => {
      modal.dialog.click(0, 0);
    });

    context.modal.should("not.exist");
  };

  it("should close if clicked outside of the modal", () => {
    cy.viewport("macbook-15");

    visit();

    openModal();

    visualTest();

    outsideClickTest();
  });

  const nestedOutsideClickTest = () => {
    context.modals(1).in((modal) => {
      modal.dialog.click(0, 0);
    });

    context.modal.should("have.length", 1);

    outsideClickTest();
  };

  it("should close nested modals correctly on outside click", () => {
    cy.viewport("macbook-15");

    visit("nested");

    openNestedModal();

    visualTest();

    nestedOutsideClickTest();
  });

  it("should close nested custom z-index modals correctly on outside click", () => {
    cy.viewport("macbook-15");

    visit("nestedCustomZIndex");

    openNestedModal();

    visualTest();

    nestedOutsideClickTest();
  });

  const escapeClickTest = () => {
    context.modal.in((modal) => {
      modal.content.type("{esc}", { force: true });
    });

    context.modal.should("not.exist");
  };

  it("should close on esc click", () => {
    cy.viewport("macbook-15");

    visit();

    openModal();

    escapeClickTest();
  });

  const nestedEscapeClickTest = () => {
    context.modals(1).in((modal) => {
      modal.content.type("{esc}", { force: true });
    });

    context.modal.should("have.length", 1);

    escapeClickTest();
  };

  it("should close nested child modal only on escape click", () => {
    cy.viewport("macbook-15");

    visit("nested");

    openNestedModal();

    nestedEscapeClickTest();
  });

  it("should close nested custom z-index child modal only on escape click", () => {
    cy.viewport("macbook-15");

    visit("nestedCustomZIndex");

    openNestedModal();

    nestedEscapeClickTest();
  });

  const closeButtonClickTest = () => {
    context.modal.in((modal) => {
      modal.closeButton.click();
    });

    context.modal.should("not.exist");
  };

  it("should close on close button click", () => {
    cy.viewport("macbook-15");

    visit();

    openModal();

    closeButtonClickTest();
  });

  const nestedCloseButtonClickTest = () => {
    context.modals(1).in((modal) => {
      modal.closeButton.click();
    });

    context.modal.should("have.length", 1);

    closeButtonClickTest();
  };

  it("should close nested child modal only on child close button click", () => {
    cy.viewport("macbook-15");

    visit("nested");

    openNestedModal();

    nestedCloseButtonClickTest();
  });

  it("should close nested custom z-index child modal only on child close button click", () => {
    cy.viewport("macbook-15");

    visit("nestedCustomZIndex");

    openNestedModal();

    nestedCloseButtonClickTest();
  });

  it("should not close if clicked inside of the modal", () => {
    cy.viewport("macbook-15");

    visit("smallIcon");

    openModal();

    visualTest();

    context.modal.in((modal) => {
      modal.content.click();
    });

    context.modal.should("exist");
  });

  const nestedInsideChildClickTest = () => {
    openNestedModal();

    context.modals(1).in((modal) => {
      modal.content.click();
    });

    context.modal.should("have.length", 2);
  };

  it("should nest modals correctly", () => {
    cy.viewport("macbook-15");

    visit("nested");

    openNestedModal();

    cy.get(".bcl-heading")
      .contains("You have unsaved changes!")
      .should("not.be.visible");

    visualTest();
  });

  it("should not close nested modals on inside nested child click", () => {
    cy.viewport("macbook-15");

    visit("nested");

    nestedInsideChildClickTest();
  });

  it("should not close nested custom z-index modals on inside nested child click", () => {
    cy.viewport("macbook-15");

    visit("nestedCustomZIndex");

    nestedInsideChildClickTest();
  });

  it("should tab through correctly", () => {
    cy.viewport("macbook-15");

    visit("medium");

    openModal();

    visualTest();

    cy.realPress("Tab");

    cy.focused().should("have.class", "bcl-close-button");

    cy.realPress("Tab");

    cy.focused().should("have.id", "exampleInput");

    cy.realPress("Tab");

    cy.focused().should("have.id", "exampleInput2");

    cy.realPress("Tab");

    cy.focused().should("have.id", "radioButton1");

    cy.realPress("Tab");

    cy.focused().should("have.id", "radioButton2");

    cy.realPress("Tab");

    cy.focused().should("have.id", "radioButton3");

    cy.realPress("Tab");

    cy.focused().should("have.id", "cancelButton");

    cy.realPress("Tab");

    cy.focused().should("have.id", "addButton");

    // confirm that the focus isn't on the button outside the modal
    cy.realPress("Tab");

    cy.focused().should("have.class", "bcl-modal-content");

    // conform that the tabbing starts over at the beginning of the modal
    cy.realPress("Tab");

    cy.focused().should("have.class", "bcl-close-button");
  });

  it("should shift+tab through correctly", () => {
    cy.viewport("macbook-15");

    visit("medium");

    openModal();

    cy.realPress("Tab");

    cy.focused().should("have.class", "bcl-close-button");

    cy.realPress("Tab");

    cy.focused().should("have.id", "exampleInput");

    cy.realPress(["Shift", "Tab"]);

    cy.focused().should("have.class", "bcl-close-button");

    // confirm that the focus isn't on the button outside the modal
    cy.realPress(["Shift", "Tab"]);

    cy.focused().should("have.class", "bcl-modal-content");

    // conform that the tabbing starts over at the end of the modal
    cy.realPress(["Shift", "Tab"]);

    cy.focused().should("have.id", "addButton");

    // confirm that the focus isn't on the button outside the modal
    cy.realPress("Tab");

    cy.focused().should("have.class", "bcl-modal-content");

    // conform that the tabbing starts over at the beginning of the modal
    cy.realPress("Tab");

    cy.focused().should("have.class", "bcl-close-button");
  });

  it("should switch between shift+tab and tab correctly", () => {
    cy.viewport("macbook-15");

    visit("medium");

    openModal();

    cy.realPress(["Shift", "Tab"]);

    cy.focused().should("have.id", "addButton");

    cy.realPress(["Shift", "Tab"]);

    cy.focused().should("have.id", "cancelButton");

    cy.realPress(["Shift", "Tab"]);

    cy.focused().should("have.id", "radioButton3");

    cy.realPress(["Shift", "Tab"]);

    cy.focused().should("have.id", "radioButton2");

    cy.realPress(["Shift", "Tab"]);

    cy.focused().should("have.id", "radioButton1");

    cy.realPress(["Shift", "Tab"]);

    cy.focused().should("have.id", "exampleInput2");

    cy.realPress(["Shift", "Tab"]);

    cy.focused().should("have.id", "exampleInput");

    cy.realPress(["Shift", "Tab"]);

    cy.focused().should("have.class", "bcl-close-button");

    // confirm that the focus isn't on the button outside the modal
    cy.realPress(["Shift", "Tab"]);

    cy.focused().should("have.class", "bcl-modal-content");

    // conform that the tabbing starts over at the end of the modal
    cy.realPress(["Shift", "Tab"]);

    cy.focused().should("have.id", "addButton");
  });

  it("should not close if clicked outside of non-dismissable modal", () => {
    cy.viewport("macbook-15");

    visit("nondismiss");

    openModal();

    context.modal.in((modal) => {
      modal.dialog.click(0, 0);
    });

    context.modal.should("exist");
  });

  it("should not close if clicked inside of non-dismissable modal", () => {
    cy.viewport("macbook-15");

    visit("nondismiss");

    openModal();

    context.modal.in((modal) => {
      modal.content.click();
    });

    context.modal.should("exist");
  });

  it("should not close on esc click for non-dismissable modal", () => {
    cy.viewport("macbook-15");

    visit("nondismiss");

    openModal();

    context.modal.in((modal) => {
      modal.content.type("{esc}", { force: true });
    });

    context.modal.should("exist");
  });

  it("should not have close button for non-dismissable modal", () => {
    cy.viewport("macbook-15");

    visit("nondismissNoExit");

    openModal();

    context.modal.in((modal) => {
      modal.closeButton.should("not.exist");
    });
  });

  it("should be able to add input into child inputs", () => {
    cy.viewport("macbook-15");

    visit("medium");

    openModal();

    context.modal.in(() => {
      cy.get(".bcl-input").type("some text here");
    });

    context.modal.should("exist");

    cy.get(".bcl-input").should("have.value", "some text here");
  });

  it("should not close on ignored outside content click", () => {
    cy.viewport("macbook-15");

    visit("outsideContent");

    openModal();

    visualTest();

    cy.get(".clickMeExample").click();

    context.modal.should("exist");
  });

  it("should close on non-ignored outside content click", () => {
    cy.viewport("macbook-15");

    visit("outsideContent");

    openModal();

    cy.get(".clickMeCloseExample").click();

    context.modal.should("not.exist");
  });

  it("should scroll if view is too small", () => {
    cy.viewport("macbook-15");

    visit("nestedModal");

    openModal();

    visualTest();

    context.modal.in((modal) => {
      modal.body.scrollTo(0, 100);

      modal.body.its("scrollY").should("not.equal", 0);
    });

    context.modal.should("exist");
  });

  it("should be covered by popover", () => {
    cy.viewport("macbook-15");

    visit("popoversModal");

    openModal();

    cy.get(".popoverOpen").click();

    cy.get("#test_text").should("not.be.visible");

    visualTest();
  });

  it("should be covered by tooltip", () => {
    cy.viewport("macbook-15");

    visit("popoversModal");

    openModal();

    cy.get(".tooltipOpen").click();

    cy.get("#test_text2").should("not.be.visible");

    visualTest();
  });

  it("should render with a default size of undefined", () => {
    cy.viewport("macbook-15");

    visit("defaultModalSize");

    openModal();

    visualTest();
  });
});
