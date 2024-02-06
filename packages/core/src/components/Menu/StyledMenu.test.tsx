import React from "react";
import { shallow } from "enzyme";
import faker from "@faker-js/faker";
import theme from "@braze/beacon-theme";

import { StyledMenu } from "./StyledMenu";

faker.seed(1603819883901);

describe("StyledMenu", () => {
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
    const wrapper = shallow(<StyledMenu {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot with 'hideTopMargin'", () => {
    const wrapper = shallow(<StyledMenu {...props} hideTopMargin />);

    expect(wrapper).toMatchSnapshot();
  });

  it.each(["sm", "lg"])(
    "should match snapshot when 'size' prop is '%'",
    (size) => {
      const wrapper = shallow(<StyledMenu {...props} size={size} />);

      expect(wrapper).toMatchSnapshot();
    }
  );
});
