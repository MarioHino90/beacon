import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-styled-components";
import { setupJest } from "@braze/i18n-jest";
import { i18n } from "@braze/beacon-i18n-dev";

setupJest(i18n);

Enzyme.configure({ adapter: new Adapter() });

// mock math random so that tests are predictable
const mockRandom = jest.spyOn(global.Math, "random").mockReturnValue(0.5);

afterAll(() => {
  mockRandom.mockRestore();
});
