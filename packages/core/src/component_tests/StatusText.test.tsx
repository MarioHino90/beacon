/* eslint-disable jest/expect-expect */

import React from "react";
import { makeContext } from "@braze/cypress-utils";
import { statusText } from "@braze/beacon-test-utils";
import {
  setupVisualTesting,
  visualTest,
  mountWithTheme,
} from "@braze/beacon-cypress-helpers";

import { StatusText } from "../components/StatusText";

const context = makeContext("StatusText", {
  statusText,
});

describe("StatusText", () => {
  setupVisualTesting("StatusText");

  it("should render default status text as danger", () => {
    mountWithTheme(<StatusText>danger status</StatusText>);

    context.statusText.should("have.class", "bcl-status-text");

    visualTest();
  });

  it("should render success status text", () => {
    mountWithTheme(<StatusText status="success">success status</StatusText>);

    context.statusText.actions.assertStatus("success");

    visualTest();
  });

  it("should render danger status text", () => {
    mountWithTheme(<StatusText status="danger">danger status</StatusText>);

    context.statusText.actions.assertStatus("danger");

    visualTest();
  });

  it("should render success status text without an icon", () => {
    mountWithTheme(
      <StatusText status="success" displayIcon={false}>
        success status no icon
      </StatusText>
    );

    context.statusText.in((statusText) => {
      statusText.icon.should("not.exist");
    });

    visualTest();
  });

  it("should render danger status text without an icon", () => {
    mountWithTheme(
      <StatusText status="danger" displayIcon={false}>
        danger status no icon
      </StatusText>
    );

    context.statusText.in((statusText) => {
      statusText.icon.should("not.exist");
    });

    visualTest();
  });

  it("should render success status text, explicit displayIcon=true", () => {
    mountWithTheme(
      <StatusText status="success" displayIcon>
        success status
      </StatusText>
    );

    context.statusText.actions.assertStatus("success");

    visualTest();
  });

  it("should render danger status text, explicit displayIcon=true", () => {
    mountWithTheme(
      <StatusText status="danger" displayIcon>
        danger status
      </StatusText>
    );

    context.statusText.actions.assertStatus("danger");

    visualTest();
  });

  it("should not render an icon for an unknown status", () => {
    mountWithTheme(
      <StatusText status={"oops" as any}>
        unknown status (user error)
      </StatusText>
    );

    context.statusText.in((statusText) => {
      statusText.icon.should("not.exist");
    });

    visualTest();
  });
});
