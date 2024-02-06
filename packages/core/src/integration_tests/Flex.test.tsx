/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/expect-expect */
import { makeContext, getStorybookControlsURL } from "@braze/cypress-utils";
import { flexWithChildren, box } from "@braze/beacon-test-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";

const story = getStorybookControlsURL("Core/Layout/Flex");

const basicUse = (): string => story("basic use")()();

const context = makeContext("flex", {
  flex: flexWithChildren({
    boxes: box,
  }),
});

describe("Flex", () => {
  setupVisualTesting("Flex");

  it("should correctly render children passed into it", () => {
    cy.visit(basicUse());

    context.flex.in((flex) => {
      flex.boxes.should("have.length", 3);
    });
  });

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

  [
    "none",
    "margin",
    "padding",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
  ].forEach((invalidStyle) => {
    it(`should warn in the console for invalid style ${invalidStyle}`, () => {
      cy.visit(
        story("invalid custom styles")([
          {
            type: "select",
            name: "invalidStyle",
            value: invalidStyle,
          },
        ])(),
        {
          onBeforeLoad(win) {
            cy.stub(win.console, "warn").as("console.warn");
          },
        }
      );

      cy.get("@console.warn").should("be.called");
    });
  });
});
