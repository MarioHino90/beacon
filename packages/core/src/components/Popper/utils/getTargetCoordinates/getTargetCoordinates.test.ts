import { getTargetCoordinates } from "./getTargetCoordinates";

describe(`getTargetCoordinates`, () => {
  it(`should match snapshot`, () => {
    // create a fake popper
    const popper = document.createElement("div");
    const content = document.createTextNode("popper");

    popper.appendChild(content);

    // mount to DOM
    document.body.appendChild(popper);

    // make assertion
    expect(getTargetCoordinates(popper)).toMatchSnapshot();

    // remove from DOM as cleanup stage
    document.body.removeChild(popper);
  });

  it(`should match snapshot when 'portalRef' is defined`, () => {
    // create a fake popper
    const popper = document.createElement("div");
    const content = document.createTextNode("popper");

    popper.appendChild(content);

    // create a portal
    const portalParent = document.createElement("div");

    portalParent.appendChild(popper);

    // mount to DOM
    document.body.appendChild(portalParent);

    // make assertion
    expect(
      getTargetCoordinates(popper, { current: portalParent })
    ).toMatchSnapshot();

    // remove from DOM as cleanup stage
    document.body.removeChild(portalParent);
  });
});
