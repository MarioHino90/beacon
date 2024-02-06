import React from "react";
import { shallow } from "enzyme";

import { StyledBannerContent } from "./StyledBannerContent";

describe("StyledBannerContent", () => {
  it("should render correctly", () => {
    const wrapper = shallow(
      <StyledBannerContent>
        <div>Banner Child</div>
      </StyledBannerContent>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
