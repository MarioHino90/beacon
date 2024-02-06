import React from "react";
import { shallow } from "enzyme";
import faker from "@faker-js/faker";

import { FunnelReportProps } from "../types";

import { FunnelReport } from "./FunnelReport";

faker.seed(1603832397874);

describe("FunnelReport", () => {
  let props: FunnelReportProps;

  beforeEach(() => {
    props = {
      children: faker.random.words(),
      className: faker.random.word(),
      id: faker.random.word(),
    };
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(<FunnelReport {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
