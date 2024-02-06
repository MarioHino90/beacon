import { getDelay } from "./getDelay";

describe(`getDelay`, () => {
  it(`should match snapshot when 'delay' arg is an array`, () => {
    expect(getDelay([0, 10])).toMatchSnapshot();
  });

  it(`should match snapshot when 'delay' arg is a number`, () => {
    expect(getDelay(10)).toMatchSnapshot();
  });

  it(`should match snapshot when 'delay' arg is undefined`, () => {
    expect(getDelay(undefined)).toMatchSnapshot();
  });

  it(`should match snapshot when 'delay' arg is something else`, () => {
    expect(getDelay("hello" as any)).toMatchSnapshot();
  });
});
