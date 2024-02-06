import React from "react";
import { shallow } from "enzyme";
import faker from "@faker-js/faker";

import { MenuActionButtonProps } from "./types";
import { MenuActionButton } from "./MenuActionButton";

faker.seed(1603821058436);

describe("MenuActionButton", () => {
  let props: MenuActionButtonProps;

  beforeEach(() => {
    props = {
      children: faker.random.words(),
      className: faker.random.word(),
      id: faker.random.word(),
    };
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(<MenuActionButton {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot when 'iconName' is defined", () => {
    const wrapper = shallow(<MenuActionButton {...props} iconName="file" />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot when 'children' is NOT a string", () => {
    const wrapper = shallow(
      <MenuActionButton {...props}>
        <span>hi</span>
      </MenuActionButton>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
