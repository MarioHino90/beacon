import React from "react";
import { shallow } from "enzyme";
import faker from "@faker-js/faker";

import { PreviewProps } from "../types";

import { Preview } from "./Preview";

faker.seed(1604940599873);

describe("Preview", () => {
  let props: PreviewProps;

  beforeEach(() => {
    props = {
      children: faker.random.words(),
      className: faker.random.word(),
      id: faker.random.word(),
    };
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(<Preview {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
