import React from "react";
import { shallow } from "enzyme";
import faker from "@faker-js/faker";

import { RetentionReportProps } from "../types";

import { RetentionReport } from "./RetentionReport";

faker.seed(1603832397905);

describe("RetentionReport", () => {
  let props: RetentionReportProps;

  beforeEach(() => {
    props = {
      children: faker.random.words(),
      className: faker.random.word(),
      id: faker.random.word(),
    };
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(<RetentionReport {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
