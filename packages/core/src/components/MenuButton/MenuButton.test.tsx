import React from "react";
import { shallow } from "enzyme";
import faker from "@faker-js/faker";

import { MenuButtonProps } from "./types";
import { MenuButton } from "./MenuButton";

faker.seed(1603823212111);

describe("MenuButton", () => {
  let props: MenuButtonProps;

  beforeEach(() => {
    props = {
      children: faker.random.words(),
      className: faker.random.word(),
      id: faker.random.word(),
    };
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(<MenuButton {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
