/* eslint-disable jest/expect-expect */
import { getStorybookControlsURL, makeContext } from "@braze/cypress-utils";
import { menu } from "@braze/beacon-test-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";

const context = makeContext("menu", {
  menu,
  openButton: () => cy.get(".open-close-button"),
});
const stories = getStorybookControlsURL("Core/Overlay/Menu");

type UrlKeys =
  | "actionButtons"
  | "categoryButtons"
  | "actionButtonsAndIcons"
  | "categoryButtonsAndIcons"
  | "groupedActionButtonsNoHeader"
  | "groupedActionButtonsAndHeader"
  | "groupedCategoryButtonsNoHeader"
  | "groupedCategoryButtonsAndHeader"
  | "actionButtonsWithNavVariant"
  | "categoryButtonsWithNavVariant";

const urls: {
  [K in UrlKeys]: string;
} = {
  actionButtons: stories("basic use with action buttons")()(),
  categoryButtons: stories("basic use with category buttons")()(),
  actionButtonsAndIcons: stories("with action buttons + icons")()(),
  categoryButtonsAndIcons: stories("with category buttons + icons")()(),
  groupedActionButtonsNoHeader: stories(
    "with grouped action buttons + no header"
  )()(),
  groupedActionButtonsAndHeader: stories(
    "with grouped action buttons + header"
  )()(),
  groupedCategoryButtonsNoHeader: stories(
    "with grouped category buttons + no header"
  )()(),
  groupedCategoryButtonsAndHeader: stories(
    "with grouped category buttons + header"
  )()(),
  actionButtonsWithNavVariant: stories("basic use with action buttons")([
    { type: "select", name: "variant", value: "nav" },
  ])(),
  categoryButtonsWithNavVariant: stories("basic use with category buttons")([
    { type: "select", name: "variant", value: "nav" },
  ])(),
};

function visit(page: UrlKeys = "actionButtons") {
  cy.visit(urls[page]);
}

const testBasicMenuFunctionality = (page: UrlKeys = "actionButtons") => {
  visit(page);

  // get target and click on it
  context.openButton.click();

  // check that the menu is visible
  context.menu.should("be.visible");

  // take visual snapshot
  visualTest();

  // clicking on the menu button again...
  context.openButton.click();

  // ...should get rid of the menu
  context.menu.should("not.exist");
};

describe("Menu", () => {
  setupVisualTesting("Menu");

  it("should be able to open a menu button by clicking on its target", () => {
    testBasicMenuFunctionality();
  });

  it("should be able to open a menu button with category buttons by clicking on its target", () => {
    testBasicMenuFunctionality("categoryButtons");
  });

  it("should be able to open a menu button with action buttons and icons by clicking on its target", () => {
    testBasicMenuFunctionality("actionButtonsAndIcons");
  });

  it("should be able to open a menu button with category buttons and icons by clicking on its target", () => {
    visit("categoryButtonsAndIcons");

    // get target and click on it
    context.openButton.click();

    // check that the menu is visible
    context.menu.should("be.visible");

    // reduce flake
    cy.get(".bcl-braze-icon").should("have.length", 4).should("be.visible");

    cy.get(".bcl-retention-report").should("be.visible");

    cy.get(".bcl-funnel-report").should("be.visible");

    cy.get(".bcl-campaign-comparison").should("be.visible");

    // take visual snapshot
    cy.then(() => {
      visualTest();
    });

    // clicking on the menu button again...
    context.openButton.click();

    // ...should get rid of the menu
    context.menu.should("not.exist");
  });

  it("should be able to open a menu button with grouped action buttons and header by clicking on its target", () => {
    testBasicMenuFunctionality("groupedActionButtonsAndHeader");
  });

  it("should be able to open a menu button with grouped action buttons and no header by clicking on its target", () => {
    testBasicMenuFunctionality("groupedActionButtonsNoHeader");
  });

  it("should be able to open a menu button with grouped category buttons and header by clicking on its target", () => {
    testBasicMenuFunctionality("groupedCategoryButtonsAndHeader");
  });

  it("should be able to open a menu button with grouped category buttons and no header by clicking on its target", () => {
    testBasicMenuFunctionality("groupedCategoryButtonsNoHeader");
  });

  it("should ignore keystrokes other than enter/space/arrow-up/arrow-down/home/end on the menu element", () => {
    visit();

    // get target and click on it
    context.openButton.click();

    // check that the menu is visible
    context.menu.should("be.visible");

    // press right arrow...
    cy.realPress("ArrowRight");

    // ...which should be ignored
    context.menu.in((menu) => {
      menu.menuButtons.should("not.be.focused");
    });

    // press left arrow...
    cy.realPress("ArrowLeft");

    // ...which should be ignored
    context.menu.in((menu) => {
      menu.menuButtons.should("not.be.focused");
    });

    // press a letter...
    cy.realPress("b");

    // ...which should be ignored
    context.menu.in((menu) => {
      menu.menuButtons.should("not.be.focused");
    });
  });

  it("should be able to open menu by focusing on the target and pressing '{downarrow}'", () => {
    visit();

    cy.findByText("Click to open").should("be.visible");

    // get target, focus on it, and type 'downarrow'
    context.openButton.focus();

    cy.realPress("ArrowDown");

    // check that the menu is visible
    context.menu.should("be.visible");

    // the first element should be focused
    context.menu.in((menu) => {
      // get number of menu buttons available
      return menu.menuButtons.then(($menuButtons) => {
        // filter out disabled buttons since we can't focus on them
        const enabledMenuButtons = cy.wrap($menuButtons).not(":disabled");

        // grab the first button that's enabled and check that it's focused
        enabledMenuButtons.first().should("be.focused");
      });
    });

    // now press escape
    context.menu.type("{esc}");

    // that should get rid of the menu
    context.menu.should("not.exist");
  });

  it("should be able to open menu by focusing on the target and pressing '{uparrow}'", () => {
    visit();

    // is the button text visible yet?
    cy.findByText("Click to open").should("be.visible");

    // ensure the button is ready to be interacted with
    cy.wait(100);

    // get target, focus on it, and type 'uparrow'
    context.openButton.focus();

    cy.realPress("ArrowUp");

    // check that the menu is visible
    context.menu.should("be.visible");

    // the last element should be focused
    context.menu.in((menu) => {
      // get number of menu buttons available
      return menu.menuButtons.then(($menuButtons) => {
        // filter out disabled buttons since we can't focus on them
        const enabledMenuButtons = cy.wrap($menuButtons).not(":disabled");

        // grab the last button that's enabled and check that it's focused
        enabledMenuButtons.last().should("be.focused");
      });
    });

    // now press escape
    context.menu.type("{esc}");

    // that should get rid of the menu
    context.menu.should("not.exist");
  });

  it("should NOT be able to open the menu by pressing home/end/letter", () => {
    visit();

    // is the button text visible yet?
    cy.findByText("Click to open").should("be.visible");

    // ensure the button is ready to be interacted with
    cy.wait(100);

    // get target, focus on it
    context.openButton.focus();

    // press on 'home'
    cy.realPress("Home");

    // check that the menu does not exist
    context.menu.should("not.exist");

    // press on 'end'
    cy.realPress("End");

    // check that the menu does not exist
    context.menu.should("not.exist");

    // press on a letter
    cy.realPress("B");

    // check that the menu does not exist
    context.menu.should("not.exist");
  });

  it("should be able to close the menu when target is focused and user presses esc", () => {
    visit();

    // is the button text visible yet?
    cy.findByText("Click to open").should("be.visible");

    // ensure the button is ready to be interacted with
    cy.wait(100);

    // get target, click it
    context.openButton.focus().click();

    // check that the menu is shown
    context.menu.should("be.visible");

    // press escape
    cy.realPress("Escape");

    // check that the menu does not exist
    context.menu.should("not.exist");
  });

  it("should be able to switch focus of the menu buttons using arrow keys once open", () => {
    visit();

    // is the button text visible yet?
    cy.findByText("Click to open").should("be.visible");

    // ensure the button is ready to be interacted with
    cy.wait(100);

    // get target and click on it
    context.openButton.click();

    // check that the menu is visible
    context.menu.should("be.visible");

    // type 'downarrow' into the menu
    cy.realPress("ArrowDown");

    // check that the first button has the focus now
    context.menu.in((menu) => {
      menu.menuButtons.eq(0).should("be.focused");
    });

    // type 'downarrow' into the menu again
    cy.realPress("ArrowDown");

    // check that another button has the focus now
    context.menu.in((menu) => {
      menu.menuButtons.eq(0).should("not.be.focused");
    });
  });

  it("should be able to switch focus to the first menu button using the 'home' key once open", () => {
    visit();

    // get target and click on it
    context.openButton.click();

    // check that the menu is visible
    context.menu.should("be.visible");

    // type 'home' into the menu
    cy.realPress("Home");

    // check that the first button has the focus now
    context.menu.in((menu) => {
      // get number of menu buttons available
      return menu.menuButtons.then(($menuButtons) => {
        // filter out disabled buttons since we can't focus on them
        const enabledMenuButtons = cy.wrap($menuButtons).not(":disabled");

        // grab the first button that's enabled and check that it's focused
        enabledMenuButtons.first().should("be.focused");
      });
    });
  });

  it("should be able to switch focus to the last menu button using the 'end' key once open", () => {
    visit();

    // get target and click on it
    context.openButton.click();

    // check that the menu is visible
    context.menu.should("be.visible");

    // type 'home' into the menu
    cy.realPress("End");

    // check that the first button has the focus now
    context.menu.in((menu) => {
      // get number of menu buttons available
      return menu.menuButtons.then(($menuButtons) => {
        // filter out disabled buttons since we can't focus on them
        const enabledMenuButtons = cy.wrap($menuButtons).not(":disabled");

        // grab the last button that's enabled and check that it's focused
        enabledMenuButtons.last().should("be.focused");
      });
    });
  });

  it("should be able to switch focus to the first menu button with matching content using a letter key once open", () => {
    // NOTE: this test makes the assumption that, on storybook, the last button
    // begins with the letter 'e'-- as of writing, the contents of the last button
    // is 'Export as Facebook Audience'
    // if this is changed, the test will break since it isn't written to be super smart
    // if this is an issue (hopefully it won't be), making it more generic is left to the reader!
    visit();

    // get target and click on it
    context.openButton.click();

    // check that the menu is visible
    context.menu.should("be.visible");

    // type 'e' into the menu
    cy.realPress("e");

    // check that the first button has the focus now
    context.menu.in((menu) => {
      // get number of menu buttons available
      return menu.menuButtons.then(($menuButtons) => {
        // filter out disabled buttons since we can't focus on them
        const enabledMenuButtons = cy.wrap($menuButtons).not(":disabled");

        // grab the last button that's enabled and check that it's focused
        enabledMenuButtons.last().should("be.focused");
      });
    });
  });

  it("should not switch focus to any menu button when a letter key is typed, but no element matches", () => {
    // NOTE: this test makes the assumption that, on storybook, no button
    // begins with the letter 'q'
    // if this is changed, the test will break since it isn't written to be super smart
    // if this is an issue (hopefully it won't be), making it more generic is left to the reader!
    visit();

    // get target and click on it
    context.openButton.click();

    // check that the menu is visible
    context.menu.should("be.visible");

    // type '1' into the menu
    cy.realPress("q");

    // check that the first button has the focus now
    context.menu.in((menu) => {
      menu.menuButtons.should("not.be.focused");
    });
  });

  it("should be able to switch focus to the next menu button using the 'up arrow' key when an element is focused", () => {
    visit();

    // get target and click on it
    context.openButton.click();

    // check that the menu is visible
    context.menu.should("be.visible");

    // type 'up arrow' into the menu
    cy.realPress("ArrowUp");

    // type 'up arrow' into the menu
    cy.realPress("ArrowUp");

    // check that the 2nd-to-last element has focus now
    context.menu.in((menu) => {
      // get number of menu buttons available
      return menu.menuButtons.then(($menuButtons) => {
        // filter out disabled buttons since we can't focus on them
        const enabledMenuButtons = cy.wrap($menuButtons).not(":disabled");

        // grab the 2nd to last button that's enabled and check that it's focused
        enabledMenuButtons.eq(2).should("be.focused");
      });
    });
  });

  it("should be able to switch focus to the last menu button using the 'up arrow' key when the first menu item is focused", () => {
    visit();

    // get target and click on it
    context.openButton.click();

    // check that the menu is visible
    context.menu.should("be.visible");

    // type 'down arrow' into the menu to focus the first element
    cy.realPress("ArrowDown");

    // type 'up arrow' into the menu
    cy.realPress("ArrowUp");

    // check that the last element has focus now
    context.menu.in((menu) => {
      // get number of menu buttons available
      return menu.menuButtons.then(($menuButtons) => {
        // filter out disabled buttons since we can't focus on them
        const enabledMenuButtons = cy.wrap($menuButtons).not(":disabled");

        // grab the last button that's enabled and check that it's focused
        enabledMenuButtons.last().should("be.focused");
      });
    });
  });

  it("should be able to switch focus to the first menu button using the 'home' key when any menu item is focused", () => {
    visit();

    // get target and click on it
    context.openButton.click();

    // check that the menu is visible
    context.menu.should("be.visible");

    // type 'up arrow' into the menu to focus the last element
    cy.realPress("ArrowUp");

    // type 'end' into the menu
    cy.realPress("Home");

    // check that the first element has focus now
    context.menu.in((menu) => {
      // get number of menu buttons available
      return menu.menuButtons.then(($menuButtons) => {
        // filter out disabled buttons since we can't focus on them
        const enabledMenuButtons = cy.wrap($menuButtons).not(":disabled");

        // grab the first button that's enabled and check that it's focused
        enabledMenuButtons.first().should("be.focused");
      });
    });
  });

  it("should be able to switch focus to the last menu button using the 'end' key when any menu item is focused", () => {
    visit();

    // get target and click on it
    context.openButton.click();

    // check that the menu is visible
    context.menu.should("be.visible");

    // type 'down arrow' into the menu to focus the first element
    cy.realPress("ArrowDown");

    // type 'end' into the menu
    cy.realPress("End");

    // check that the last element has focus now
    context.menu.in((menu) => {
      // get number of menu buttons available
      return menu.menuButtons.then(($menuButtons) => {
        // filter out disabled buttons since we can't focus on them
        const enabledMenuButtons = cy.wrap($menuButtons).not(":disabled");

        // grab the last button that's enabled and check that it's focused
        enabledMenuButtons.last().should("be.focused");
      });
    });
  });

  it("should close the menu and focus the menu button when 'enter' is typed when any menu item is focused", () => {
    visit();

    // get target and click on it
    context.openButton.click();

    // check that the menu is visible
    context.menu.should("be.visible");

    // type 'down arrow' into the menu to focus the first element
    cy.realPress("ArrowDown");

    // type 'enter' into the menu
    cy.realPress("\n");

    // check that the last element has focus now
    context.openButton.should("be.focused");
  });

  it("should ignore key strokes that aren't letters when any menu item is focused", () => {
    visit();

    // get target and click on it
    context.openButton.click();

    // check that the menu is visible
    context.menu.should("be.visible");

    // type 'down arrow' into the menu to focus the first element
    cy.realPress("ArrowDown");

    // type 'enter' into the menu
    cy.realPress("+");

    // check that the first element still has focus
    context.menu.in((menu) => {
      // get number of menu buttons available
      return menu.menuButtons.then(($menuButtons) => {
        // filter out disabled buttons since we can't focus on them
        const enabledMenuButtons = cy.wrap($menuButtons).not(":disabled");

        // grab the last button that's enabled and check that it's focused
        enabledMenuButtons.first().should("be.focused");
      });
    });
  });

  it("should be able to switch focus to the first menu button with matching content using a letter key when any other menu item is focused", () => {
    // NOTE: this test makes the assumption that, on storybook, the last button
    // begins with the letter 'e'-- as of writing, the contents of the last button
    // is 'Export as Facebook Audience'
    // if this is changed, the test will break since it isn't written to be super smart
    // if this is an issue (hopefully it won't be), making it more generic is left to the reader!
    visit();

    // get target and click on it
    context.openButton.click();

    // check that the menu is visible
    context.menu.should("be.visible");

    // type 'down arrow' into the menu to focus the first element
    cy.realPress("ArrowDown");

    // type 'e' into the menu
    cy.realPress("e");

    // check that the first button has the focus now
    context.menu.in((menu) => {
      // get number of menu buttons available
      return menu.menuButtons.then(($menuButtons) => {
        // filter out disabled buttons since we can't focus on them
        const enabledMenuButtons = cy.wrap($menuButtons).not(":disabled");

        // grab the last button that's enabled and check that it's focused
        enabledMenuButtons.last().should("be.focused");
      });
    });

    // type 'e' into the menu again, to verify focus remains on this element
    cy.realPress("e");

    // check that the first button has the focus now
    context.menu.in((menu) => {
      // get number of menu buttons available
      return menu.menuButtons.then(($menuButtons) => {
        // filter out disabled buttons since we can't focus on them
        const enabledMenuButtons = cy.wrap($menuButtons).not(":disabled");

        // grab the last button that's enabled and check that it's focused
        enabledMenuButtons.last().should("be.focused");
      });
    });
  });

  it("should appear correctly when using 'nav' variant with action buttons", () => {
    visit("actionButtonsWithNavVariant");

    // get target and click on it
    context.openButton.click();

    // check that the menu is visible
    context.menu.should("be.visible");

    // type 'down arrow' into the menu to focus the first element
    cy.realPress("ArrowDown");

    // take visual snapshot
    cy.then(() => {
      visualTest();
    });
  });

  it("should appear correctly when using 'nav' variant with category buttons", () => {
    visit("categoryButtonsWithNavVariant");

    // get target and click on it
    context.openButton.click();

    // check that the menu is visible
    context.menu.should("be.visible");

    // type 'down arrow' into the menu to focus the first element
    cy.realPress("ArrowDown");

    // take visual snapshot
    cy.then(() => {
      visualTest();
    });
  });
});
