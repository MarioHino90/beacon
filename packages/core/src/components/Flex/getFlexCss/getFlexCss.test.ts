import {
  AlignItems,
  FlexDirection,
  FlexWrap,
  JustifyContent,
  TextAlign,
} from "../types";

import {
  getFlexCss,
  getAlignItemsCss,
  getFlexDirectionCss,
  getFlexWrapCss,
  getJustifyContentCss,
  getTextAlignCss,
} from "./getFlexCss";

describe(`getFlexCss`, () => {
  // declare arrays
  const alignItemsArr: AlignItems[] = [
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "baseline",
  ];

  const directionArr: FlexDirection[] = [
    "column",
    "column-reverse",
    "row",
    "row-reverse",
  ];

  const wrapArr: FlexWrap[] = ["wrap", "nowrap", "wrap-reverse"];

  const justifyContentArr: JustifyContent[] = [
    "center",
    "flex-end",
    "flex-start",
    "space-around",
    "space-between",
    "space-evenly",
  ];

  const textAlignArr: TextAlign[] = ["left", "center", "justify", "right"];

  describe.each([
    [true, "inline-flex"],
    [false, "flex"],
  ])(`if 'inline' is '%s'`, (inline, display) => {
    it.each(alignItemsArr)(
      `should return correct align items styles when 'alignItems' is '%s'`,
      (alignItems) => {
        const styles = getFlexCss({ inline, alignItems });

        expect(styles).toMatchObject({
          display,
          alignItems,
        });
      }
    );

    it.each(directionArr)(
      `should return correct align items styles when 'direction' is '%s'`,
      (direction) => {
        const styles = getFlexCss({ inline, direction });

        expect(styles).toMatchObject({
          display,
          flexDirection: direction,
        });
      }
    );

    it.each(wrapArr)(
      `should return correct align items styles when 'wrap' is '%s'`,
      (wrap) => {
        const styles = getFlexCss({ inline, wrap });

        expect(styles).toMatchObject({
          display,
          flexWrap: wrap,
        });
      }
    );

    it.each(justifyContentArr)(
      `should return correct align items styles when 'justifyContent' is '%s'`,
      (justifyContent) => {
        const styles = getFlexCss({ inline, justifyContent });

        expect(styles).toMatchObject({
          display,
          justifyContent,
        });
      }
    );

    it.each(textAlignArr)(
      `should return correct align items styles when 'textAlign' is '%s'`,
      (textAlign) => {
        const styles = getFlexCss({ inline, textAlign });

        expect(styles).toMatchObject({
          display,
          textAlign,
        });
      }
    );
  });

  it.each(alignItemsArr)(
    `should return correct align items styles when 'alignItems' is called with '%s'`,
    (alignItems) => {
      const styles = getAlignItemsCss(alignItems);

      expect(styles).toMatchObject({
        alignItems,
      });
    }
  );

  it.each(directionArr)(
    `should return correct align items styles when 'direction' is '%s' (getFlexDirectionCss)`,
    (direction) => {
      const styles = getFlexDirectionCss(direction);

      expect(styles).toMatchObject({
        flexDirection: direction,
      });
    }
  );

  it.each(wrapArr)(
    `should return correct align items styles when 'wrap' is '%s' (getFlexWrapCss)`,
    (wrap) => {
      const styles = getFlexWrapCss(wrap);

      expect(styles).toMatchObject({
        flexWrap: wrap,
      });
    }
  );

  it.each(justifyContentArr)(
    `should return correct align items styles when 'justifyContent' is '%s' (getJustifyContentCss)`,
    (justifyContent) => {
      const styles = getJustifyContentCss(justifyContent);

      expect(styles).toMatchObject({
        justifyContent,
      });
    }
  );

  it.each(textAlignArr)(
    `should return correct align items styles when 'textAlign' is '%s' (getTextAlignCss)`,
    (textAlign) => {
      const styles = getTextAlignCss(textAlign);

      expect(styles).toMatchObject({
        textAlign,
      });
    }
  );
});
