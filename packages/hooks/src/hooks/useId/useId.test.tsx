import React from "react";
import faker from "@faker-js/faker";
import { shallow } from "enzyme";

import { useId } from "./useId";

faker.seed(20200521);

const prefix = faker.random.word();
const content = faker.random.words();

interface TestComponentProps {
  usePrefix?: boolean;
}

const TestComponent = ({ usePrefix = true }: TestComponentProps) => {
  const id = useId(usePrefix ? prefix : undefined);

  return <div id={id}>{content}</div>;
};

describe("useId", () => {
  beforeEach(() => {
    jest.spyOn(global.Math, "random").mockImplementation(() => {
      return faker.datatype.number(1e8) / 1e8;
    });
  });

  it("generates the same id across multiple renders", () => {
    const wrapper = shallow(<TestComponent />);
    const firstId = wrapper.find("div").prop("id");

    // force a re-render
    wrapper.setProps({});

    expect(wrapper.find("div").prop("id")).toBe(firstId);

    // force a re-render a second time for good measure
    wrapper.setProps({});

    expect(wrapper.find("div").prop("id")).toBe(firstId);
  });
});
