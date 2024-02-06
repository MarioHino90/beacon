/* eslint-disable jest/expect-expect */
import { makeContext, getStorybookControlsURL } from "@braze/cypress-utils";
import { copyField } from "@braze/beacon-test-utils";
import { withAllLocales } from "@braze/beacon-i18n-dev";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";

const context = makeContext("CopyField", copyField);

const story = getStorybookControlsURL("Core/Forms/CopyField");

type urlKeys =
  | "default"
  | "vSizeSm"
  | "noTextInBtn"
  | "noTextInBtnVSizeSm"
  | "withCopyToClipboardOptions";

const urls: { [K in urlKeys]: (locale: string) => string } = {
  default: story("basic use")(),
  vSizeSm: story("basic use")([{ type: "select", name: "vSize", value: "sm" }]),
  noTextInBtn: story("with no text in button")(),
  noTextInBtnVSizeSm: story("with no text in button")([
    { type: "select", name: "vSize", value: "sm" },
  ]),
  withCopyToClipboardOptions: story("with copy to clipboard options")(),
};

describe("CopyField", () => {
  setupVisualTesting("CopyField");

  function visit(page: urlKeys = "default", locale = "en") {
    cy.visit(urls[page](locale));
  }

  withAllLocales((syncLocale, locale) => {
    it(`should display correctly when locale is '${locale}'`, () => {
      syncLocale();

      visit("default");

      // should display the copyfield
      context.copyField.should("be.visible");

      // take a visual snapshot
      visualTest();

      // let's interact with the copy field
      context.copyField.in((copyField) => {
        // click on the copyfield button
        copyField.button.click();

        // TODO: when IconButton helper is in beacon, use that instead of directly querying the svg
        cy.get("svg:visible").should("have.class", "fa-check");

        // take a visual snapshot
        visualTest(`copied state (${locale})`);

        // check that the input contents matches the copied text
        copyField.input.then(($input: HTMLElement[]) => {
          cy.task("getClipboard").should(
            "equal",
            $input[0].getAttribute("value")
          );
        });
      });
    });

    it(`should display correctly when vSize is 'sm' and locale is '${locale}'`, () => {
      syncLocale();

      visit("vSizeSm", locale);

      // should display the copyfield
      context.copyField.should("be.visible");

      // take a visual snapshot
      visualTest();

      // let's interact with the copy field
      context.copyField.in((copyField) => {
        // click on the copyfield button
        copyField.button.click();

        // TODO: when IconButton helper is in beacon, use that instead of directly querying the svg
        cy.get("svg:visible").should("have.class", "fa-check");

        // take a visual snapshot
        visualTest(`copied state (${locale})`);

        // check that the input contents matches the copied text
        copyField.input.then(($input: HTMLElement[]) => {
          cy.task("getClipboard").should(
            "equal",
            $input[0].getAttribute("value")
          );
        });
      });
    });

    it(`should display correctly when there's no text in button and locale is '${locale}'`, () => {
      syncLocale();

      visit("noTextInBtn", locale);

      // should display the copyfield
      context.copyField.should("be.visible");

      // take a visual snapshot
      visualTest();

      // let's interact with the copy field
      context.copyField.in((copyField) => {
        // click on the copyfield button
        copyField.button.click();

        // TODO: when IconButton helper is in beacon, use that instead of directly querying the svg
        cy.get("svg:visible").should("have.class", "fa-check");

        // take a visual snapshot
        visualTest(`copied state (${locale})`);

        // check that the input contents matches the copied text
        copyField.input.then(($input: HTMLElement[]) => {
          cy.task("getClipboard").should(
            "equal",
            $input[0].getAttribute("value")
          );
        });
      });
    });

    it(`should display correctly when there's no text in button, vSize is 'sm' and locale is '${locale}'`, () => {
      syncLocale();

      visit("noTextInBtnVSizeSm", locale);

      // should display the copyfield
      context.copyField.should("be.visible");

      // take a visual snapshot
      visualTest();

      // let's interact with the copy field
      context.copyField.in((copyField) => {
        // click on the copyfield button
        copyField.button.click();

        // TODO: when IconButton helper is in beacon, use that instead of directly querying the svg
        cy.get("svg:visible").should("have.class", "fa-check");

        // take a visual snapshot
        visualTest(`copied state (${locale})`);

        // check that the input contents matches the copied text
        copyField.input.then(($input: HTMLElement[]) => {
          cy.task("getClipboard").should(
            "equal",
            $input[0].getAttribute("value")
          );
        });
      });
    });

    it(`should reset back to 'copy' value after 1.5seconds when locale is '${locale}'`, () => {
      syncLocale();

      visit("default", locale);

      // should display the copyfield
      context.copyField.should("be.visible");

      // take a visual snapshot
      visualTest();

      // let's interact with the copy field
      context.copyField.in((copyField) => {
        // click on the copyfield button
        copyField.button.click();

        // TODO: when IconButton helper is in beacon, use that instead of directly querying the svg
        cy.get("svg:visible").should("have.class", "fa-check");

        // take a visual snapshot
        visualTest(`copied state (${locale})`);

        // check that the input contents matches the copied text
        copyField.input.then(($input: HTMLElement[]) => {
          cy.task("getClipboard").should(
            "equal",
            $input[0].getAttribute("value")
          );
        });

        // when 1.5 seconds, which is how long it takes for the button to revert
        cy.wait(1500);

        // TODO: when IconButton helper is in beacon, use that instead of directly querying the svg
        cy.get("svg:visible").should("not.have.class", "fa-check");
      });
    });

    it(`should focus on entire input text on click when locale is '${locale}'`, () => {
      syncLocale();

      visit("default");

      // should display the copyfield
      context.copyField.should("be.visible");

      // let's interact with the copy field
      context.copyField.in((copyField) => {
        // click on the copyfield input
        copyField.input.click().should("be.focused");

        // take a visual snapshot
        visualTest(`focused state (${locale})`);
      });
    });

    it(`respects copy options when locale is '${locale}'`, () => {
      visit("withCopyToClipboardOptions");

      context.copyField.should("be.visible");

      context.copyField.in((copyField) => {
        copyField.button.realClick();
      });

      cy.get(".bcl-copy-field-stories--copied-mime-type").should(
        "have.text",
        "text/html"
      );

      syncLocale();
    });
  });
});
