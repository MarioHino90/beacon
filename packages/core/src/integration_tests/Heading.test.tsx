/* eslint-disable jest/expect-expect */
import { makeContext, getStorybookURL } from "@braze/cypress-utils";
import { heading, headingByLevel } from "@braze/beacon-test-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";

const story = getStorybookURL("Core/Text/Heading");
const context = makeContext("Heading", { heading, ...headingByLevel });

type urlKeys =
  | "default"
  | "level1"
  | "level2"
  | "level3"
  | "level4"
  | "level5"
  | "level6"
  | "lightLevel1"
  | "lightLevel2"
  | "lightLevel3"
  | "lightLevel4"
  | "lightLevel5"
  | "lightLevel6";

const urls: { [K in urlKeys]: string } = {
  default: story("basic use")()(),
  level1: story("level one")()(),
  level2: story("level two")()(),
  level3: story("level three")()(),
  level4: story("level four")()(),
  level5: story("level five")()(),
  level6: story("level six")()(),
  lightLevel1: story("level one")([
    { type: "select", name: "variant", value: "light" },
  ])(),
  lightLevel2: story("level two")([
    { type: "select", name: "variant", value: "light" },
  ])(),
  lightLevel3: story("level three")([
    { type: "select", name: "variant", value: "light" },
  ])(),
  lightLevel4: story("level four")([
    { type: "select", name: "variant", value: "light" },
  ])(),
  lightLevel5: story("level five")([
    { type: "select", name: "variant", value: "light" },
  ])(),
  lightLevel6: story("level six")([
    { type: "select", name: "variant", value: "light" },
  ])(),
};

describe("Heading", () => {
  setupVisualTesting("Heading");

  function visit(page: urlKeys = "default") {
    cy.visit(urls[page].replace("id=", "path=/story/"));
  }

  it("should display correctly as a heading", () => {
    visit("default");

    // check that it display
    context.heading.should("be.visible");

    // run visual test
    visualTest();
  });

  it("should display correctly as a heading with h1 tag", () => {
    visit("level1");

    // check that it display
    context.level1.should("be.visible");

    // run visual test
    visualTest();
  });

  it("should display correctly as a heading with h2 tag", () => {
    visit("level2");

    // check that it display
    context.level2.should("be.visible");

    // run visual test
    visualTest();
  });

  it("should display correctly as a heading with h3 tag", () => {
    visit("level3");

    // check that it display
    context.level3.should("be.visible");

    // run visual test
    visualTest();
  });

  it("should display correctly as a heading with h4 tag", () => {
    visit("level4");

    // check that it display
    context.level4.should("be.visible");

    // run visual test
    visualTest();
  });

  it("should display correctly as a heading with h5 tag", () => {
    visit("level5");

    // check that it display
    context.level5.should("be.visible");

    // run visual test
    visualTest();
  });

  it("should display correctly as a heading with h6 tag", () => {
    visit("level6");

    // check that it display
    context.level6.should("be.visible");

    // run visual test
    visualTest();
  });

  it("should display correctly as a heading with h1 tag ('light' variant)", () => {
    visit("lightLevel1");

    // check that it display
    context.level1.should("be.visible");

    // run visual test
    visualTest();
  });

  it("should display correctly as a heading with h2 tag ('light' variant)", () => {
    visit("lightLevel2");

    // check that it display
    context.level2.should("be.visible");

    // run visual test
    visualTest();
  });

  it("should display correctly as a heading with h3 tag ('light' variant)", () => {
    visit("lightLevel3");

    // check that it display
    context.level3.should("be.visible");

    // run visual test
    visualTest();
  });

  it("should display correctly as a heading with h4 tag ('light' variant)", () => {
    visit("lightLevel4");

    // check that it display
    context.level4.should("be.visible");

    // run visual test
    visualTest();
  });

  it("should display correctly as a heading with h5 tag ('light' variant)", () => {
    visit("lightLevel5");

    // check that it display
    context.level5.should("be.visible");

    // run visual test
    visualTest();
  });

  it("should display correctly as a heading with h6 tag ('light' variant)", () => {
    visit("lightLevel6");

    // check that it display
    context.level6.should("be.visible");

    // run visual test
    visualTest();
  });
});
