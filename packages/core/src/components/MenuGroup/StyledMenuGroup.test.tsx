import React from "react";
import { shallow } from "enzyme";
import faker from "@faker-js/faker";
import theme from "@braze/beacon-theme";

import { StyledMenuGroup } from "./StyledMenuGroup";

faker.seed(1603838448143);

describe("StyledMenuGroup", () => {
  let props;

  beforeEach(() => {
    props = {
      children: faker.random.words(),
      className: faker.random.word(),
      id: faker.random.word(),
      theme,
    };
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(<StyledMenuGroup {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot when 'hasHeading' is defined", () => {
    const wrapper = shallow(<StyledMenuGroup {...props} hasHeading />);

    expect(wrapper).toMatchSnapshot();
  });
});
