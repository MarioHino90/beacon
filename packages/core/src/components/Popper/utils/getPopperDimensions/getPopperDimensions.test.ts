import { getPopperDimensions } from "./getPopperDimensions";

describe(`getPopperDimensions`, () => {
  it(`should match snapshot`, () => {
    // create a fake popper
    const popper = document.createElement("div");
    const content = document.createTextNode("popper");

    popper.appendChild(content);

    // make assertion
    expect(getPopperDimensions({ current: popper })).toMatchSnapshot();
  });
});
