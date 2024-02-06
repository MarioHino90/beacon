import React from "react";
import { shallow } from "enzyme";
import faker from "@faker-js/faker";

import { EmailSettingsProps } from "../types";

import { EmailSettings } from "./EmailSettings";

faker.seed(1604940599873);

describe("EmailSettings", () => {
  let props: EmailSettingsProps;

  beforeEach(() => {
    props = {
      children: faker.random.words(),
      className: faker.random.word(),
      id: faker.random.word(),
    };
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(<EmailSettings {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
