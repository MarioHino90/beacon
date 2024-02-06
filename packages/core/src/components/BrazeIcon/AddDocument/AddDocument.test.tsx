import React from "react";
import { shallow } from "enzyme";
import faker from "@faker-js/faker";

import { AddDocumentProps } from "../types";

import { AddDocument } from "./AddDocument";

faker.seed(1604940599873);

describe("AddDocument", () => {
  let props: AddDocumentProps;

  beforeEach(() => {
    props = {
      children: faker.random.words(),
      className: faker.random.word(),
      id: faker.random.word(),
    };
  });

  it("should match the snapshot", () => {
    const wrapper = shallow(<AddDocument {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
