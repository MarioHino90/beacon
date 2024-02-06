import React from "react";
import { shallow } from "enzyme";
import faker from "@faker-js/faker";
import theme from "@braze/beacon-theme";

import { StyledMenuButton } from "./StyledMenuButton";

faker.seed(1603823212124);

describe("StyledMenuButton", () => {
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
    const wrapper = shallow(<StyledMenuButton {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
