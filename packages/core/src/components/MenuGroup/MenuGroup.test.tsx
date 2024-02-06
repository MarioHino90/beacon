import React from "react";
import { shallow } from "enzyme";
import faker from "@faker-js/faker";

import { MenuGroupProps } from "./types";
import { MenuGroup } from "./MenuGroup";

faker.seed(1603838448107);

describe("MenuGroup", () => {
  let props: MenuGroupProps;

  beforeEach(() => {
    props = {
      children: faker.random.words(),
      className: faker.random.word(),
      id: faker.random.word(),
    };
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(<MenuGroup {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot when 'heading' is defined", () => {
    const wrapper = shallow(
      <MenuGroup {...props} heading={faker.random.words()} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
