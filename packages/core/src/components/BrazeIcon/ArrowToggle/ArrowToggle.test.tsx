import React from "react";
import { shallow } from "enzyme";
import faker from "@faker-js/faker";

import { ArrowToggleProps } from "../types";

import { ArrowToggle } from "./ArrowToggle";

faker.seed(1604940599873);

describe("ArrowToggle", () => {
  let props: ArrowToggleProps;

  beforeEach(() => {
    props = {
      children: faker.random.words(),
      className: faker.random.word(),
      id: faker.random.word(),
    };
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(<ArrowToggle {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
