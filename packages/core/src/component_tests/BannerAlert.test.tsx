/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */

import React from "react";
import { mountWithTheme } from "@braze/beacon-cypress-helpers";
import { makeContext } from "@braze/cypress-utils";
import { bannerAlert } from "@braze/beacon-test-utils";

import { BannerAlert } from "../components/BannerAlert";
import { BannerAlertBody } from "../components/BannerAlertBody";
import { BannerAlertTitle } from "../components/BannerAlertTitle";

const context = makeContext("BannerAlert", {
  bannerAlert,
});

const Wrapper = () => {
  return (
    <BannerAlert data-testid="banner-alert" intent="success" isOpen={true}>
      <BannerAlertBody data-testid="banner-alert-body">
        <BannerAlertTitle data-testid="banner-alert-title">
          Title
        </BannerAlertTitle>
      </BannerAlertBody>
    </BannerAlert>
  );
};

describe("BannerAlert", () => {
  it("should add test ids to rendered components", () => {
    // mount the wrapper
    mountWithTheme(<Wrapper />);

    // check that banner alert has an id
    context.bannerAlert.should("have.attr", "data-testid", "banner-alert");

    context.bannerAlert.in((bannerAlert) => {
      bannerAlert.body.should("have.attr", "data-testid", "banner-alert-body");

      bannerAlert.body.in((body) => {
        body.content.in((content) => {
          content.title.should(
            "have.attr",
            "data-testid",
            "banner-alert-title"
          );
        });
      });
    });
  });
});
