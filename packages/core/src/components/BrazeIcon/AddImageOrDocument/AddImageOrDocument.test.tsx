import React from "react";
import { shallow } from "enzyme";
import faker from "@faker-js/faker";

import { AddImageOrDocumentProps } from "../types";

import { AddImageOrDocument } from "./AddImageOrDocument";

faker.seed(1604940599873);

describe("AddImageOrDocument", () => {
  let props: AddImageOrDocumentProps;

  beforeEach(() => {
    props = {
      children: faker.random.words(),
      className: faker.random.word(),
      id: faker.random.word(),
    };
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(<AddImageOrDocument {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
