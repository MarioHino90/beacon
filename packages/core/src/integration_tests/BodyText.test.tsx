/* eslint-disable jest/expect-expect */
import {
  makeContext,
  getStorybookControlsURL,
  Knob,
} from "@braze/cypress-utils";
import { bodyText } from "@braze/beacon-test-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";

const context = makeContext("bodyText", {
  bodyText,
});

const story = getStorybookControlsURL("Core/Text/BodyText");

const baseKnobs: Knob[] = [
  {
    type: "select",
    name: "fontFamily",
    value: "base",
  },
  {
    type: "select",
    name: "fontWeight",
    value: "bold",
  },
  {
    type: "select",
    name: "size",
    value: "md",
  },
  {
    type: "select",
    name: "variant",
    value: "default",
  },
];

const getModifiedKnobs = (modifiedKnob: Knob): Knob[] =>
  baseKnobs.map((baseKnob) =>
    baseKnob.name === modifiedKnob.name ? modifiedKnob : baseKnob
  );

type urlKeys =
  | "default"
  | "baseFont"
  | "code"
  | "regularWeight"
  | "bold"
  | "small"
  | "medium"
  | "label"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "hint";

const urls: { [K in urlKeys]: string } = {
  default: story("Default Case")(baseKnobs)(),
  baseFont: story("Default Case")(
    getModifiedKnobs({
      type: "select",
      name: "fontFamily",
      value: "base",
    })
  )(),
  code: story("Default Case")(
    getModifiedKnobs({
      type: "select",
      name: "fontFamily",
      value: "code",
    })
  )(),
  bold: story("Default Case")(
    getModifiedKnobs({
      type: "select",
      name: "fontWeight",
      value: "bold",
    })
  )(),
  regularWeight: story("Default Case")(
    getModifiedKnobs({
      type: "select",
      name: "fontWeight",
      value: "regular",
    })
  )(),
  small: story("Default Case")(
    getModifiedKnobs({
      type: "select",
      name: "size",
      value: "sm",
    })
  )(),
  medium: story("Default Case")(
    getModifiedKnobs({
      type: "select",
      name: "size",
      value: "md",
    })
  )(),
  label: story("Default Case")(
    getModifiedKnobs({
      type: "select",
      name: "size",
      value: "label",
    })
  )(),
  success: story("Default Case")(
    getModifiedKnobs({
      type: "select",
      name: "variant",
      value: "success",
    })
  )(),
  danger: story("Default Case")(
    getModifiedKnobs({
      type: "select",
      name: "variant",
      value: "danger",
    })
  )(),
  warning: story("Default Case")(
    getModifiedKnobs({
      type: "select",
      name: "variant",
      value: "warning",
    })
  )(),
  info: story("Default Case")(
    getModifiedKnobs({
      type: "select",
      name: "variant",
      value: "info",
    })
  )(),
  hint: story("Default Case")(
    getModifiedKnobs({
      type: "select",
      name: "variant",
      value: "hint",
    })
  )(),
};

describe("BodyText", () => {
  setupVisualTesting("BodyText");

  function visit(page: urlKeys = "default") {
    cy.visit(urls[page]);
  }

  it(`should render correctly with no props`, () => {
    visit();

    // check the render
    context.bodyText.should("be.visible");

    visualTest();
  });

  it(`should render correctly with base font family`, () => {
    visit("baseFont");

    // check the render
    context.bodyText.should("be.visible");

    visualTest();
  });

  it(`should render correctly with code font family`, () => {
    visit("code");

    // check the render
    context.bodyText.should("be.visible");

    visualTest();
  });

  it(`should render correctly with bold weight`, () => {
    visit("bold");

    // check the render
    context.bodyText.should("be.visible");

    visualTest();
  });

  it(`should render correctly with regular weight`, () => {
    visit("regularWeight");

    // check the render
    context.bodyText.should("be.visible");

    visualTest();
  });

  it(`should render correctly with small size`, () => {
    visit("small");

    // check the render
    context.bodyText.should("be.visible");

    visualTest();
  });

  it(`should render correctly with medium size`, () => {
    visit("medium");

    // check the render
    context.bodyText.should("be.visible");

    visualTest();
  });

  it(`should render correctly with label size`, () => {
    visit("label");

    // check the render
    context.bodyText.should("be.visible");

    visualTest();
  });

  it(`should render correctly with success variant`, () => {
    visit("success");

    // check the render
    context.bodyText.should("be.visible");

    visualTest();
  });

  it(`should render correctly with danger variant`, () => {
    visit("danger");

    // check the render
    context.bodyText.should("be.visible");

    visualTest();
  });

  it(`should render correctly with warning variant`, () => {
    visit("warning");

    // check the render
    context.bodyText.should("be.visible");

    visualTest();
  });

  it(`should render correctly with info variant`, () => {
    visit("info");

    // check the render
    context.bodyText.should("be.visible");

    visualTest();
  });

  it(`should render correctly with hint variant`, () => {
    visit("hint");

    // check the render
    context.bodyText.should("be.visible");

    visualTest();
  });
});
