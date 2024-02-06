import React from "react";
import { shallow } from "enzyme";
import faker from "@faker-js/faker";

import { MenuCategoryButtonProps } from "./types";
import { MenuCategoryButton } from "./MenuCategoryButton";

faker.seed(1603821058478);

describe("MenuCategoryButton", () => {
  let props: MenuCategoryButtonProps;

  beforeEach(() => {
    props = {
      children: faker.random.words(),
      className: faker.random.word(),
      id: faker.random.word(),
    };
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(<MenuCategoryButton {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot when 'iconName' is defined", () => {
    const wrapper = shallow(
      <MenuCategoryButton {...props} iconName="campaign-comparison" />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot when 'heading' is defined", () => {
    const wrapper = shallow(
      <MenuCategoryButton {...props} heading={faker.random.words()} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should match the snapshot when 'children' is NOT a string", () => {
    const wrapper = shallow(
      <MenuCategoryButton {...props}>
        <span>hi</span>
      </MenuCategoryButton>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
