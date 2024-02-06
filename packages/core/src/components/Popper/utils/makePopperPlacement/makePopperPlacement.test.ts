import { createRef } from "react";
import faker from "@faker-js/faker";

import { placementTypes } from "../../PopperContext";
import { getTargetCoordinates } from "../getTargetCoordinates";
import { getPopperDimensions } from "../getPopperDimensions";
import { PlacementType } from "../../types";

import { makePopperPlacement } from "./makePopperPlacement";

faker.seed(20200813);

jest.mock("../getTargetCoordinates", () => ({
  getTargetCoordinates: jest.fn(() => ({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  })),
}));

jest.mock("../getPopperDimensions", () => ({
  getPopperDimensions: jest.fn(() => [0, 0]),
}));

describe(`makePopperPlacement`, () => {
  const fakeElement = document.createElement("div");
  const fakeRef = createRef<HTMLDivElement>();

  it(`should match snapshot when element is NOT defined`, () => {
    expect(makePopperPlacement(null, fakeRef, {})).toMatchSnapshot();
  });

  describe.each([
    ...placementTypes,
    "some-other-value" as unknown as PlacementType,
  ])(
    `when 'placement' is '%s' and 'element' is defined`,
    (placement: PlacementType) => {
      beforeEach(() => {
        (getTargetCoordinates as jest.Mock).mockImplementationOnce(() => [
          faker.datatype.number(),
          faker.datatype.number(),
          faker.datatype.number(),
          faker.datatype.number(),
        ]);

        (getPopperDimensions as jest.Mock).mockImplementationOnce(() => [
          faker.datatype.number(),
          faker.datatype.number(),
        ]);
      });

      it(`should match snapshot`, () => {
        expect(
          makePopperPlacement(fakeElement, fakeRef, {
            placement,
          })
        ).toMatchSnapshot();
      });

      it(`should match snapshot when 'interactive' is true`, () => {
        expect(
          makePopperPlacement(fakeElement, fakeRef, {
            placement,
            interactive: true,
          })
        ).toMatchSnapshot();
      });

      it.each([0, 5, 10])(
        `should match snapshot when 'skidding' is '%s'`,
        (skidding) => {
          expect(
            makePopperPlacement(fakeElement, fakeRef, {
              placement,
              skidding,
            })
          ).toMatchSnapshot();
        }
      );

      it.each([0, 5, 10])(
        `should match snapshot when 'distance' is '%s'`,
        (distance) => {
          expect(
            makePopperPlacement(fakeElement, fakeRef, {
              placement,
              distance,
            })
          ).toMatchSnapshot();
        }
      );
    }
  );
});
