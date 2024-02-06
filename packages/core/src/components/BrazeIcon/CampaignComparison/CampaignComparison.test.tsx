import React from "react";
import { shallow } from "enzyme";
import faker from "@faker-js/faker";

import { CampaignComparisonProps } from "../types";

import { CampaignComparison } from "./CampaignComparison";

faker.seed(1603832397842);

describe("CampaignComparison", () => {
  let props: CampaignComparisonProps;

  beforeEach(() => {
    props = {
      children: faker.random.words(),
      className: faker.random.word(),
      id: faker.random.word(),
    };
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(<CampaignComparison {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
