import React from "react";
import { shallow } from "enzyme";
import { BodyText } from "@braze/beacon-core";

import { UncontrolledTabContent } from "./UncontrolledTabContent";

jest.mock("react", () => {
  const react = jest.requireActual("react");

  return {
    ...react,
    useContext: jest.fn().mockReturnValue({
      activeTab: 2,
      onTabChange: jest.fn().mockName("onTabChange"),
    }),
  };
});

describe("UncontrolledTabContent", () => {
  afterEach(jest.clearAllMocks);

  it("should render correctly", () => {
    const wrapper = shallow(
      <UncontrolledTabContent tabId={1}>
        <BodyText>Hello World!</BodyText>
      </UncontrolledTabContent>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly with className", () => {
    const wrapper = shallow(
      <UncontrolledTabContent tabId={1} className="extraClass">
        <BodyText>Hello World!</BodyText>
      </UncontrolledTabContent>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly if active", () => {
    const wrapper = shallow(
      <UncontrolledTabContent tabId={2}>
        <BodyText>Hello World!</BodyText>
      </UncontrolledTabContent>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
