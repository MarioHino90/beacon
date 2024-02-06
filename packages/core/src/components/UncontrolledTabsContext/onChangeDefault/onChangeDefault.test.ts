import { onChangeDefault } from "./onChangeDefault";

describe("onChangeDefault", () => {
  it("should not crash when called", () => {
    onChangeDefault();

    expect(true).toBe(true);
  });
});
