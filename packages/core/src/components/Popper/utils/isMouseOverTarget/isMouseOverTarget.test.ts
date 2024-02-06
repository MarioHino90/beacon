import { isMouseOverTarget } from "./isMouseOverTarget";

describe(`isMouseOverTarget`, () => {
  const getFakeEventAndTarget = (clientX: number, clientY: number) => {
    const event = { clientX, clientY } as MouseEvent;
    const target = {
      getBoundingClientRect: () => ({
        x: 10,
        y: 10,
        width: 10,
        height: 10,
      }),
    } as HTMLElement;

    return { event, target };
  };

  it(`should return true if the mouse is moved within bounds of the target`, () => {
    const { event, target } = getFakeEventAndTarget(15, 15);

    expect(isMouseOverTarget(event, target)).toBe(true);
  });

  it(`should return false if the mouse is moved within X bounds of the target but Y is greater than the upper bound`, () => {
    const { event, target } = getFakeEventAndTarget(15, 25);

    expect(isMouseOverTarget(event, target)).toBe(false);
  });

  it(`should return false if the mouse is moved within X bounds of the target but Y is less than the lower bound`, () => {
    const { event, target } = getFakeEventAndTarget(15, 5);

    expect(isMouseOverTarget(event, target)).toBe(false);
  });

  it(`should return false if the mouse is moved within Y bounds of the target but X is greater than the upper bound`, () => {
    const { event, target } = getFakeEventAndTarget(25, 15);

    expect(isMouseOverTarget(event, target)).toBe(false);
  });

  it(`should return false if the mouse is moved within Y bounds of the target but X is less than the lower bound`, () => {
    const { event, target } = getFakeEventAndTarget(5, 15);

    expect(isMouseOverTarget(event, target)).toBe(false);
  });

  it(`should return false if the mouse is moved less than the Y bound and less than the X bound`, () => {
    const { event, target } = getFakeEventAndTarget(5, 5);

    expect(isMouseOverTarget(event, target)).toBe(false);
  });

  it(`should return false if the mouse is moved greater than the Y bound and greater than the X bound`, () => {
    const { event, target } = getFakeEventAndTarget(25, 25);

    expect(isMouseOverTarget(event, target)).toBe(false);
  });

  it(`should return false if the mouse is moved less than the Y bound and greater than the X bound`, () => {
    const { event, target } = getFakeEventAndTarget(25, 5);

    expect(isMouseOverTarget(event, target)).toBe(false);
  });

  it(`should return false if the mouse is moved greater than the Y bound and less than the X bound`, () => {
    const { event, target } = getFakeEventAndTarget(5, 25);

    expect(isMouseOverTarget(event, target)).toBe(false);
  });
});
