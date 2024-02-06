/* eslint-disable jest/expect-expect */
import { getStorybookControlsURL, makeContext } from "@braze/cypress-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";
import { input } from "@braze/beacon-test-utils";

const context = makeContext("Input", { input });
const stories = getStorybookControlsURL("Core/Forms/Input");

type UrlKeys =
  | "default"
  | "verticalSize"
  | "dateType"
  | "disabled"
  | "fullWidth"
  | "defaultValue"
  | "uncontrolledRerender";

const urls: {
  [K in UrlKeys]: string;
} = {
  default: stories("basic use")()(),
  verticalSize: stories("vertical size")()(),
  dateType: stories("type: date")()(),
  disabled: stories("disabled")()(),
  fullWidth: stories("full width")()(),
  defaultValue: stories("with default value")([
    {
      type: "text",
      name: "defaultValue",
      value: "test",
    },
  ])(),
  uncontrolledRerender: stories("uncontrolled rerendering")()(),
};

describe("Input", () => {
  setupVisualTesting("Input");

  function visit(page: UrlKeys = "default") {
    cy.visit(urls[page]);
  }

  it("should render correctly", () => {
    visit("default");

    context.input.should("be.visible");

    visualTest();

    context.input.type("Hello, world!");

    visualTest("with value");
  });

  it("should render correctly when vSize is 'sm' and 'md'", () => {
    visit("verticalSize");

    context.input.should("be.visible").should("have.length", 2);

    visualTest();
  });

  it("should render correctly as a date input", () => {
    visit("dateType");

    context.input.should("be.visible").should("have.attr", "type", "date");

    visualTest();
  });

  it("should not allow user to edit when disabled", () => {
    visit("disabled");

    context.input.should("be.visible").should("have.attr", "disabled");

    visualTest();
  });

  it("should render correctly in full width", () => {
    visit("fullWidth");

    context.input.should("be.visible");

    visualTest();
  });

  it("should correctly handle IME", () => {
    visit();

    context.input.click().type("a");

    context.input.trigger("compositionstart");

    context.input.triggerInputChange("a´");

    context.input.should("have.value", "a´");

    cy.get("#basic-value").should("have.text", "a");

    context.input.triggerInputChange("aé");

    context.input.trigger("compositionend", { data: "é" });

    context.input.should("have.value", "aé");

    cy.get("#basic-value").should("have.text", "aé");

    cy.realType("e");

    context.input.should("have.value", "aée");

    cy.get("#basic-value").should("have.text", "aée");
  });

  it("should correctly render defaultValue and then handle compsition for an uncontrolled input", () => {
    visit("defaultValue");

    context.input.should("have.value", "test");

    context.input.click().clear().type("a");

    context.input.trigger("compositionstart");

    context.input.triggerInputChange("a´");

    context.input.should("have.value", "a´");

    context.input.triggerInputChange("aé");

    context.input.trigger("compositionend", { data: "é" });

    context.input.should("have.value", "aé");

    cy.realType("e");

    context.input.should("have.value", "aée");
  });

  it("should correctly pass the typed value to onChange even when the input is forcibly re-rendered due to ref/onChange being new every render", () => {
    visit("uncontrolledRerender");

    context.input.should("have.value", "");

    context.input.click().type("a");

    context.input.trigger("compositionstart");

    context.input.triggerInputChange("a´");

    context.input.should("have.value", "a´");

    context.input.triggerInputChange("aé");

    context.input.trigger("compositionend", { data: "é" });

    context.input.should("have.value", "aé");

    cy.realType("e");

    context.input.should("have.value", "aée");

    cy.get("#rerender-value").should("have.text", "aée");
  });
});
