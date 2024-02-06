import faker from "@faker-js/faker";

import { initialState, reducer } from "./InlineInput";

faker.seed(1595534067136);

describe("InlineInput", () => {
  it("reducer should return existing state when called with an unrecognized action type", () => {
    expect(
      reducer(initialState, { type: "NOT_A_REAL_ACTION_TYPE" as any })
    ).toEqual(initialState);
  });
});
