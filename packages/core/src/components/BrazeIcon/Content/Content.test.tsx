import React from "react";
import { shallow } from "enzyme";
import faker from "@faker-js/faker";

import { ContentProps } from "../types";

import { Content } from "./Content";

faker.seed(1604940599873);

describe("Content", () => {
  let props: ContentProps;

  beforeEach(() => {
    props = {
      children: faker.random.words(),
      className: faker.random.word(),
      id: faker.random.word(),
    };
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(<Content {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
