/* eslint-disable jest/expect-expect */
import {
  makeContext,
  getStorybookControlsURL,
  SelectKnob,
} from "@braze/cypress-utils";
import { individualIcons } from "@braze/beacon-test-utils";
import each from "lodash/each";
import lowerCase from "lodash/lowerCase";

import { spotIcons } from "../components/BrazeIcon";

type UrlKeys = keyof typeof spotIcons;

const iconKeys = Object.keys(spotIcons) as UrlKeys[];

const story = getStorybookControlsURL("Core/Icons/BrazeIcon")("basic use");
const getKnob = (value: UrlKeys): SelectKnob[] => [
  {
    type: "select",
    name: "name",
    value,
  },
];

describe("BrazeIcon", () => {
  const urls = iconKeys.reduce(
    (acc, iconKey) => ({ ...acc, [iconKey]: story(getKnob(iconKey))() }),
    {} as { [K in UrlKeys]: string }
  );

  function visit(page: UrlKeys) {
    cy.visit(urls[page]);
  }

  const context = makeContext("Braze icon", {
    icon: {
      self: () => cy.get(".bcl-braze-icon"),
      children: individualIcons,
    },
  });

  beforeEach(() => {
    cy.eyesOpen({
      properties: [{ name: "Component", value: "BrazeIcon" }],
    });
  });

  afterEach(() => {
    cy.eyesClose();
  });

  each(iconKeys, (iconKey) => {
    it(`should render a/an ${lowerCase(iconKey)} icon after loading`, () => {
      visit(iconKey);

      context.icon.in((icon) => {
        // verify suspense works
        icon[iconKey].should("be.visible");
      });

      // verify that icon matches snapshot
      cy.eyesCheckWindow(`${lowerCase(iconKey)} icon`);
    });
  });
});
