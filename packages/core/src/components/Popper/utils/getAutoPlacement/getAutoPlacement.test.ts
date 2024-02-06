import { PlacementType } from "../../types";

import { getAutoPlacement } from "./getAutoPlacement";

describe(`getAutoPlacement`, () => {
  // create mocks
  const getBoundingClientRect = jest.fn();
  const fakeElement = { getBoundingClientRect } as unknown as HTMLElement;

  // mock out window
  const windowWidth = 500;
  const windowHeight = 500;

  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: windowWidth,
  });

  Object.defineProperty(window, "innerHeight", {
    writable: true,
    configurable: true,
    value: windowHeight,
  });

  const testParams: [
    message: string,
    targetElementDimensions: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    },
    popperDimensions: {
      popperHeight: number;
      popperWidth: number;
    },
    defaultPlacement: PlacementType,
    expectedPlacement: PlacementType
  ][] = [
    [
      "should use bottom-start for top-left corner, if popper fits",
      {
        top: 0,
        right: 40,
        bottom: 10,
        left: 0,
      },
      {
        popperHeight: 50,
        popperWidth: 50,
      },
      "top",
      "bottom-start",
    ],
    [
      "should use bottom for top-middle, if popper fits and would not fit with bottom-start",
      {
        top: 0,
        right: windowWidth / 2 - 20,
        bottom: 10,
        left: windowWidth / 2 + 20,
      },
      {
        popperHeight: 50,
        popperWidth: 300,
      },
      "top",
      "bottom",
    ],
    [
      "should use bottom-end for top-right corner, if popper fits",
      {
        top: 0,
        right: windowWidth,
        bottom: 10,
        left: windowWidth - 40,
      },
      {
        popperHeight: 50,
        popperWidth: 50,
      },
      "top",
      "bottom-end",
    ],
    [
      "should use left for right-middle, if popper fits and would not fit with bottom-end",
      {
        top: windowHeight / 2 - 5,
        right: windowWidth,
        bottom: windowHeight / 2 + 5,
        left: windowWidth - 40,
      },
      {
        popperHeight: 300,
        popperWidth: 50,
      },
      "top",
      "left",
    ],
    [
      "should use top-end for bottom-right corner, if popper fits",
      {
        top: windowHeight - 10,
        right: windowWidth,
        bottom: windowHeight,
        left: windowWidth - 40,
      },
      {
        popperHeight: 50,
        popperWidth: 50,
      },
      "top",
      "top-end",
    ],
    [
      "should use top for bottom-middle, if popper fits and would not fit with top-start",
      {
        top: windowHeight - 10,
        right: windowWidth / 2 + 20,
        bottom: windowHeight,
        left: windowWidth / 2 - 20,
      },
      {
        popperHeight: 50,
        popperWidth: 300,
      },
      "bottom",
      "top",
    ],
    [
      "should use top-start for bottom-left corner, if popper fits",
      {
        top: windowHeight - 10,
        right: 40,
        bottom: windowHeight,
        left: 0,
      },
      {
        popperHeight: 50,
        popperWidth: 50,
      },
      "top",
      "top-start",
    ],
    [
      "should use right for left-middle, if popper fits and would not fit with bottom-start",
      {
        top: windowHeight / 2 - 5,
        right: 40,
        bottom: windowHeight / 2 + 5,
        left: 0,
      },
      {
        popperHeight: 300,
        popperWidth: 50,
      },
      "bottom",
      "right",
    ],
    [
      "should use top-start placement if the popper is too tall to be bottom-* but the elemnt is low enough that top works",
      {
        top: 240,
        right: 20,
        bottom: 360,
        left: 0,
      },
      {
        popperHeight: 200,
        popperWidth: 300,
      },
      "bottom",
      "top-start",
    ],

    [
      "should use default placement for top-left corner, if popper does not fit",
      {
        top: 0,
        right: 40,
        bottom: 10,
        left: 0,
      },
      {
        popperHeight: 5000,
        popperWidth: 5000,
      },
      "top",
      "top",
    ],
    [
      "should use default placement for top-middle, if popper does not fit",
      {
        top: 0,
        right: windowWidth / 2 - 20,
        bottom: 10,
        left: windowWidth / 2 + 20,
      },
      {
        popperHeight: 5000,
        popperWidth: 5000,
      },
      "top",
      "top",
    ],
    [
      "should use default placement for top-right corner, if popper does not fit",
      {
        top: 0,
        right: windowWidth,
        bottom: 10,
        left: windowWidth - 40,
      },
      {
        popperHeight: 5000,
        popperWidth: 5000,
      },
      "top",
      "top",
    ],
    [
      "should use default placement for right-middle, if popper does not fit",
      {
        top: windowHeight / 2 - 10,
        right: windowWidth,
        bottom: windowHeight / 2 + 10,
        left: windowWidth - 40,
      },
      {
        popperHeight: 5000,
        popperWidth: 5000,
      },
      "top",
      "top",
    ],
    [
      "should use default placement for bottom-right corner, if popper does not fit",
      {
        top: windowHeight - 10,
        right: windowWidth,
        bottom: windowHeight,
        left: windowWidth - 40,
      },
      {
        popperHeight: 5000,
        popperWidth: 5000,
      },
      "top",
      "top",
    ],
    [
      "should use default placement for bottom-middle, if popper does not fit",
      {
        top: windowHeight - 10,
        right: windowWidth / 2 + 20,
        bottom: windowHeight,
        left: windowWidth / 2 - 20,
      },
      {
        popperHeight: 5000,
        popperWidth: 5000,
      },
      "bottom",
      "bottom",
    ],
    [
      "should use default placement for bottom-left corner, if popper does not fit",
      {
        top: windowHeight - 10,
        right: 40,
        bottom: windowHeight,
        left: 0,
      },
      {
        popperHeight: 5000,
        popperWidth: 5000,
      },
      "top",
      "top",
    ],
    [
      "should use default placement for left-middle, if popper does not fit",
      {
        top: windowHeight / 2 - 5,
        right: 40,
        bottom: windowHeight / 2 + 5,
        left: 0,
      },
      {
        popperHeight: 5000,
        popperWidth: 5000,
      },
      "left",
      "left",
    ],
    [
      "should use default placement for middle, if popper fits",
      {
        top: windowHeight / 2 - 5,
        right: windowWidth / 2 + 20,
        bottom: windowHeight / 2 + 5,
        left: windowWidth / 2 - 20,
      },
      {
        popperHeight: 5,
        popperWidth: 5,
      },
      "bottom",
      "bottom",
    ],
    [
      "should use default placement if the popper is too wide to fit as top or bottom, and too wide to be start/end",
      {
        top: windowHeight / 2 - 5,
        right: windowWidth / 2 + 20,
        bottom: windowHeight / 2 + 5,
        left: windowWidth / 2 - 20,
      },
      {
        popperHeight: 500,
        popperWidth: 300,
      },
      "bottom",
      "bottom",
    ],
    [
      "should use default placement if the popper is too tall to fit as left or right, and too tall to be top/bottom",
      {
        top: windowHeight / 2 - 5,
        right: 20,
        bottom: windowHeight / 2 + 5,
        left: 0,
      },
      {
        popperHeight: 300,
        popperWidth: 500,
      },
      "bottom",
      "bottom",
    ],
    [
      "should use default placement if the popper is too tall to fit as left or right, and too tall to be right/left",
      {
        top: windowHeight / 2 - 5,
        right: 20,
        bottom: windowHeight / 2 + 5,
        left: 0,
      },
      {
        popperHeight: 500,
        popperWidth: 500,
      },
      "bottom",
      "bottom",
    ],
  ];

  it.each(testParams)(
    "%s",
    (
      _message,
      targetElementDimensions,
      { popperHeight, popperWidth },
      defaultPlacement,
      expectedPlacement
    ) => {
      getBoundingClientRect.mockImplementationOnce(
        () => targetElementDimensions
      );

      expect(
        getAutoPlacement(
          fakeElement,
          { popperHeight, popperWidth },
          defaultPlacement
        )
      ).toBe(expectedPlacement);
    }
  );
});
