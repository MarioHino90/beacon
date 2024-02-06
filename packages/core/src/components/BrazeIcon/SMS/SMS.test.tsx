import React from "react";
import { shallow } from "enzyme";
import faker from "@faker-js/faker";

import { SMSProps } from "../types";

import { SMS } from "./SMS";

faker.seed(1604940599873);

describe("SMS", () => {
  let props: SMSProps;

  beforeEach(() => {
    props = {
      children: faker.random.words(),
      className: faker.random.word(),
      id: faker.random.word(),
    };
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(<SMS {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
