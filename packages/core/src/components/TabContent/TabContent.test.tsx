import React from "react";
import { shallow } from "enzyme";

import { TabContent } from "./TabContent";

describe("TabContent", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<TabContent active />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly if not active", () => {
    const wrapper = shallow(<TabContent active={false} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly with className", () => {
    const wrapper = shallow(<TabContent active className="someClass" />);

    expect(wrapper).toMatchSnapshot();
  });
});
