import React from "react";
import { shallow } from "enzyme";
import theme from "@braze/beacon-theme";

import { StyledTabContent } from "./StyledTabContent";

describe("StyledTabContent", () => {
  it("should render correctly", () => {
    const wrapper = shallow(
      <StyledTabContent className="extraClass" theme={theme} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
