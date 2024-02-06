import React from "react";
import { shallow } from "enzyme";
import BeaconThemeProvider from "@braze/beacon-styling";
import { css } from "styled-components";

import { PlacementType, placementTypes } from "../Popper";

import { MenuProps } from "./types";
import { Menu } from "./Menu";

describe("Menu", () => {
  let props: MenuProps;

  beforeEach(() => {
    props = {
      id: "lime",
      className: "someClassName",
      onOpen: jest.fn(),
      onClose: jest.fn(),
      popperClassName: "someOtherClassName",
      popperId: "someId",
    };
  });

  it.each([...placementTypes, undefined])(
    "should match the snapshot when placement is '%s' and 'isOpen' is false",
    (placement: PlacementType) => {
      const wrapper = shallow(
        <Menu {...props} placement={placement} isOpen={false}>
          <div>Hi</div>
        </Menu>,
        { wrappingComponent: BeaconThemeProvider }
      );

      expect(wrapper).toMatchSnapshot();
    }
  );

  it.each([...placementTypes, undefined])(
    "should match the snapshot when placement is '%s' and 'isOpen' is true",
    (placement: PlacementType) => {
      const wrapper = shallow(
        <Menu {...props} placement={placement} isOpen={true}>
          <div>Hi</div>
        </Menu>,
        { wrappingComponent: BeaconThemeProvider }
      );

      expect(wrapper).toMatchSnapshot();
    }
  );

  it(`should match snapshot when 'styledCss' is defined`, () => {
    const testCss = css`
      background-color: pink;
    `;
    const wrapper = shallow(
      <Menu {...props} styledCss={testCss}>
        <div>Hi</div>
      </Menu>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it(`should match snapshot when 'hideTopMargin' is defined`, () => {
    const wrapper = shallow(
      <Menu {...props} hideTopMargin>
        <div>Hi</div>
      </Menu>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it.each(["sm", "lg"] as MenuProps["size"][])(
    "should match snapshot when 'size' prop is '%s'",
    (size) => {
      const wrapper = shallow(
        <Menu {...props} isOpen={true} size={size}>
          <div>Hi</div>
        </Menu>,
        { wrappingComponent: BeaconThemeProvider }
      );

      expect(wrapper).toMatchSnapshot();
    }
  );
});
