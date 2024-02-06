import { getElement } from "./getElement";

describe(`getElement`, () => {
  it(`should return null if neither 'target' nor 'targetRef' are defined`, () => {
    expect(getElement({})).toBeNull();
  });

  it(`should return null if neither 'target' nor 'targetRef.current' are defined`, () => {
    expect(getElement({ targetRef: {} as any })).toBeNull();
  });

  it(`should return 'targetRef.current' if 'targetRef.current' is defined but 'target' isn't`, () => {
    const targetRef = { current: "hi" };

    expect(getElement({ targetRef: targetRef as any })).toBe(targetRef.current);
  });

  it(`should return 'targetRef.current' if 'targetRef.current' and 'target' are defined`, () => {
    const targetRef = { current: "hi" };

    expect(getElement({ targetRef: targetRef as any, target: "hello" })).toBe(
      targetRef.current
    );
  });

  it(`should return the element described by 'target' if 'targetRef.current' is NOT defined and 'target' is defined`, () => {
    // create a fake returned value
    const returnedVal = document.createElement("div");

    // mock document.getElementById
    const spy = jest
      .spyOn(document, "getElementById")
      .mockImplementation(() => returnedVal);

    // check to make sure it happened successfully
    expect(getElement({ target: "hi" })).toBe(returnedVal);

    // cancel spy
    spy.mockRestore();
  });
});
