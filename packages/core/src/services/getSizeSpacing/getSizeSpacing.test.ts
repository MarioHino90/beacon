import { getSizeSpacing } from "./getSizeSpacing";

describe("getSizeSpacing", () => {
  it("should return correct default", () => {
    const spacing = getSizeSpacing(undefined);

    expect(spacing).toBe("16px");
  });

  it("should return correct none spacing", () => {
    const spacing = getSizeSpacing("none");

    expect(spacing).toBe("0");
  });

  it("should return correct comfortable spacing", () => {
    const spacing = getSizeSpacing("comfortable");

    expect(spacing).toBe("16px");
  });

  it("should return correct compact spacing", () => {
    const spacing = getSizeSpacing("compact");

    expect(spacing).toBe("8px");
  });
});
