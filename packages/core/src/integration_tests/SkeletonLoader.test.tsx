/* eslint-disable jest/expect-expect */
import { getStorybookURL, makeContext } from "@braze/cypress-utils";
import { skeletonLoader } from "@braze/beacon-test-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";

const stories = getStorybookURL("Core/Primitives/SkeletonLoader");

type UrlKeys = "default" | "text" | "checkbox" | "image" | "image-round";

const urls: {
  [K in UrlKeys]: string;
} = {
  default: stories("basic use")()(),
  text: stories("text variant")([])(),
  checkbox: stories("checkbox variant")([])(),
  image: stories("image variant")([])(),
  "image-round": stories("round image variant")([])(),
};

describe("SkeletonLoader", () => {
  setupVisualTesting("SkeletonLoader");

  function visit(page: UrlKeys = "default") {
    cy.visit(urls[page]);
  }

  const context = makeContext("skeletonLoader", skeletonLoader);

  it("should successfully render default", () => {
    visit();

    context.skeleton.should("be.visible");

    context.skeleton.should("not.have.class", "bcl-skeleton-loader-undefined");

    visualTest();
  });

  it("should successfully render text variant", () => {
    visit("text");

    context.textSkeleton.should("be.visible");

    visualTest();
  });

  it("should successfully render checkbox variant", () => {
    visit("checkbox");

    context.checkboxSkeleton.should("be.visible");

    visualTest();
  });

  it("should successfully render image variant", () => {
    visit("image");

    context.imageSkeleton.should("be.visible");

    visualTest();
  });

  it("should successfully render image-round variant", () => {
    visit("image-round");

    context.imageRoundSkeleton.should("be.visible");

    visualTest();
  });
});
