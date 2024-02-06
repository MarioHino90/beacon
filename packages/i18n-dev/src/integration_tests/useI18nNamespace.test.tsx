/* eslint-disable jest/valid-expect */
/* eslint-disable jest/expect-expect */
import {
  extractDeclaration,
  getStorybookURL,
  makeContext,
} from "@braze/cypress-utils";
import { withAllLocales, cypressTranslate } from "@braze/beacon-i18n-dev";
import { input } from "@braze/beacon-test-utils";

const story = getStorybookURL("Core Developers/I18n/useI18nNamespace");

type urlKeys = "basic";

const urls: { [K in urlKeys]: (locale: string) => string } = {
  basic: story("usage")(),
};

const children = extractDeclaration({
  input,
  translation: () => cy.get(".translation"),
  key: () => cy.get(".key"),
  simpleTranslation: () => cy.get(".simple-translation"),
  simpleKey: () => cy.get(".simple-key"),
  bareInput: () => cy.get(".bare-input"),
});

const context = makeContext("useI18nNamespace", {
  storybook: {
    self: () => cy.get("#storybook"),
    children,
  },
  component: {
    self: () => cy.get("#component"),
    children,
  },
});

describe("cypressTranslate", () => {
  it("should throw when accessing a missing key", () => {
    // eslint-disable-next-line
    // @ts-ignore
    expect(() => cypressTranslate("oops", "this-is-not-a-key")).to.throw("hi");
  });
});

withAllLocales((syncLocale, locale) => {
  describe("useI18nNamespace hook", () => {
    function visit(page: urlKeys = "basic", locale = "en") {
      cy.visit(urls[page](locale));
    }

    it(`should work in storybook in locale ${locale}`, () => {
      syncLocale();

      visit("basic", locale);

      context.storybook.in((storybook) => {
        storybook.input.focus().type("Hal");

        storybook.translation.should(
          "have.text",
          cypressTranslate("beacon-examples", "hello-world", {
            place: "Hal",
            num: 5.234,
          })
        );

        storybook.key.should("have.text", "beacon-examples.hello-world");

        storybook.simpleTranslation.should(
          "have.text",
          cypressTranslate("beacon-examples", "simple")
        );

        storybook.simpleKey.should("have.text", "beacon-examples.simple");
      });
    });

    it(`should work in component-land in locale ${locale}`, () => {
      syncLocale();

      visit("basic", locale);

      context.component.in((component) => {
        component.bareInput.focus().type("Hal");

        component.translation.should(
          "have.text",
          cypressTranslate("beacon-examples", "hello-world", {
            place: "Hal",
            num: 5.234,
          })
        );

        component.key.should("have.text", "beacon-examples.hello-world");

        component.simpleTranslation.should(
          "have.text",
          cypressTranslate("beacon-examples", "simple")
        );

        component.simpleKey.should("have.text", "beacon-examples.simple");
      });
    });
  });
});
