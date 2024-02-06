/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/expect-expect */
import { getStorybookControlsURL } from "@braze/cypress-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";

const story = getStorybookControlsURL("Core/Layout/FlexBox");

describe("FlexBox", () => {
  setupVisualTesting("FlexBox");

  const testCases: [
    storyName: string,
    options: string[],
    controlName: string
  ][] = [
    [
      "justify content",
      [
        "center",
        "flexStart",
        "flexEnd",
        "spaceBetween",
        "spaceEvenly",
        "spaceAround",
      ],
      "justifyContent",
    ],
    [
      "align items",
      ["stretch", "flexStart", "flexEnd", "center", "baseline"],
      "alignItems",
    ],
    [
      "direction",
      ["column", "columnReverse", "row", "rowReverse"],
      "direction",
    ],
    ["text alignment", ["center", "left", "right", "justify"], "textAlign"],
    ["wrap", ["wrap", "nowrap", "wrapReverse"], "wrap"],
  ];

  testCases.forEach(([storyName, options, controlName]) => {
    options.forEach((option) => {
      it(`should render correctly with ${controlName} ${option}`, () => {
        cy.visit(
          story(storyName)([
            {
              type: "select",
              name: controlName,
              value: option,
            },
          ])()
        );

        visualTest();
      });
    });
  });

  it("should render as another element", () => {
    cy.visit(story("as another element")()());

    // renders as <section> instead of div
    cy.get("section").should("be.visible");
  });

  it("should render with custom styling via styledCss prop", () => {
    cy.visit(story("custom styling")()());

    visualTest();
  });
});
