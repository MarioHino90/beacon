import React from "react";
import { shallow } from "enzyme";
import faker from "@faker-js/faker";

import { MMSProps } from "../types";

import { MMS } from "./MMS";

faker.seed(1604940599917);

describe("MMS", () => {
  let props: MMSProps;

  beforeEach(() => {
    props = {
      children: faker.random.words(),
      className: faker.random.word(),
      id: faker.random.word(),
    };
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(<MMS {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
