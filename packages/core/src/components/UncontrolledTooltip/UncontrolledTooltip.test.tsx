import React from "react";
import { shallow } from "enzyme";
import faker from "@faker-js/faker";
import { css } from "styled-components";

import { UncontrolledTooltip } from "./UncontrolledTooltip";

faker.seed(1587400123040);

jest.spyOn(Math, "random").mockImplementation(() => 0.5);

describe("UncontrolledTooltip", () => {
  let props;

  beforeEach(() => {
    props = {
      id: faker.random.word(),
      name: faker.random.word(),
      value: faker.random.word(),
    };
  });

  it("should match the snapshot", () => {
    expect(
      shallow(
        <UncontrolledTooltip {...props}>
          <div>Hi</div>
        </UncontrolledTooltip>
      )
    ).toMatchSnapshot();
  });

  it(`should throw an error if multiple children are defined`, () => {
    expect(() =>
      shallow(
        <UncontrolledTooltip {...props}>
          <div>Hi</div>
          <span>sup</span>
        </UncontrolledTooltip>
      )
    ).toThrow();
  });

  it(`should match snapshot when 'styledCss' is defined`, () => {
    const testCss = css`
      background-color: maroon;
    `;

    const wrapper = shallow(
      <UncontrolledTooltip {...props} styledCss={testCss}>
        <div>Hi</div>
      </UncontrolledTooltip>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
