/* eslint-disable jest/expect-expect */

import React from "react";
import { makeContext } from "@braze/cypress-utils";
import { link } from "@braze/beacon-test-utils";
import {
  setupVisualTesting,
  visualTest,
  mountWithTheme,
} from "@braze/beacon-cypress-helpers";

import { Link } from "../components/Link";

const context = makeContext("Link", {
  link,
});

describe("Link", () => {
  setupVisualTesting("Link");

  it("should render default link", () => {
    mountWithTheme(<Link>link</Link>);

    context.link.should("exist");

    visualTest();
  });

  it("should render table variant link", () => {
    mountWithTheme(<Link variant="table">link</Link>);

    context.link.should("exist");

    context.link.should("have.css", "text-decoration-line", "none");

    visualTest();
  });

  it("should not render external link icon when target=_blank but showExternalLinkIcon=false", () => {
    mountWithTheme(<Link target="_blank">link</Link>);

    context.link.should("exist");

    context.link
      .children("span.bcl-icon.external-link-icon")
      .should("not.exist");

    visualTest();
  });

  it("should render external link icon when target=_blank and showExternalLinkIcon=true", () => {
    mountWithTheme(
      <Link target="_blank" showExternalLinkIcon={true}>
        link
      </Link>
    );

    context.link.should("exist");

    context.link.children("span.bcl-icon.external-link-icon").should("exist");

    visualTest();
  });
});
