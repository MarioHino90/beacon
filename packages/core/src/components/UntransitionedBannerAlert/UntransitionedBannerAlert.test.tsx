import React from "react";
import { shallow } from "enzyme";

import { Intent } from "../BannerAlert";
import { BannerAlertLink } from "../BannerAlertLink";
import { BannerAlertBody } from "../BannerAlertBody";
import { BannerAlertTitle } from "../BannerAlertTitle";
import { BannerAlertDescription } from "../BannerAlertDescription";
import { BannerAlertDescriptionText } from "../BannerAlertDescriptionText";

import { UntransitionedBannerAlert } from "./UntransitionedBannerAlert";

describe("UntransitionedBannerAlert", () => {
  const intents: Intent[] = ["success", "danger", "warning", "info"];

  it.each(intents)("should render correctly for intent %s", (intent) => {
    const wrapper = shallow(
      <UntransitionedBannerAlert intent={intent}>
        <BannerAlertBody>
          <BannerAlertTitle>Lorem ipsum dolor sit amet</BannerAlertTitle>
        </BannerAlertBody>
      </UntransitionedBannerAlert>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly if passed link info", () => {
    const wrapper = shallow(
      <UntransitionedBannerAlert intent="success">
        <BannerAlertBody>
          <BannerAlertTitle>Lorem ipsum dolor sit amet</BannerAlertTitle>
          <BannerAlertLink onClick={jest.fn().mockName("onClick")}>
            Click Me!
          </BannerAlertLink>
        </BannerAlertBody>
      </UntransitionedBannerAlert>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly if passed a description", () => {
    const wrapper = shallow(
      <UntransitionedBannerAlert intent="success">
        <BannerAlertBody>
          <BannerAlertTitle>Lorem ipsum dolor sit amet</BannerAlertTitle>
          <BannerAlertDescription>
            <BannerAlertDescriptionText>
              Some more information about the banner...
            </BannerAlertDescriptionText>
          </BannerAlertDescription>
        </BannerAlertBody>
      </UntransitionedBannerAlert>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly if passed a className", () => {
    const wrapper = shallow(
      <UntransitionedBannerAlert intent="success" className="new-banner">
        <BannerAlertBody>
          <BannerAlertTitle>Some banner information here...</BannerAlertTitle>
        </BannerAlertBody>
      </UntransitionedBannerAlert>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
