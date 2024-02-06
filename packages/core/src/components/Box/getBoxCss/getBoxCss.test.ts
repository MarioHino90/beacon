import theme from "@braze/beacon-theme";
import { spacingSelector } from "@braze/beacon-styling";

import { getBoxCss, getSpecs } from "./getBoxCss";

describe("getBoxCss", () => {
  let props;

  beforeEach(() => {
    props = {
      theme,
    };
  });

  it("should return nothing if nothing is passed", () => {
    const styles = getBoxCss(undefined, undefined, props);

    expect(styles).toEqual({});
  });

  it("should return nothing if no props are passed", () => {
    const styles = getBoxCss("md", "sm", undefined as any);

    expect(styles).toEqual({});
  });

  it("should return margin styles", () => {
    const styles = getBoxCss("md", undefined, props);

    expect(styles).toEqual({
      margin: spacingSelector(props, "md"),
    });
  });

  it("should return padding styles", () => {
    const styles = getBoxCss(undefined, "md", props);

    expect(styles).toEqual({
      padding: spacingSelector(props, "md"),
    });
  });

  it("should return both margin and padding styles", () => {
    const styles = getBoxCss("sm", "md", props);

    expect(styles).toEqual({
      margin: spacingSelector(props, "sm"),
      padding: spacingSelector(props, "md"),
    });
  });

  it("should return margin dimension styles", () => {
    const styles = getBoxCss(
      { left: "sm", right: "md", top: "xxl", bottom: "lg" },
      undefined,
      props
    );

    expect(styles).toEqual({
      marginLeft: spacingSelector(props, "sm"),
      marginRight: spacingSelector(props, "md"),
      marginTop: spacingSelector(props, "xxl"),
      marginBottom: spacingSelector(props, "lg"),
    });
  });

  it("should return padding dimension styles", () => {
    const styles = getBoxCss(
      undefined,
      {
        left: "sm",
        right: "md",
        top: "xxl",
        bottom: "lg",
      },
      props
    );

    expect(styles).toEqual({
      paddingLeft: spacingSelector(props, "sm"),
      paddingRight: spacingSelector(props, "md"),
      paddingTop: spacingSelector(props, "xxl"),
      paddingBottom: spacingSelector(props, "lg"),
    });
  });

  it("should return margin and padding dimension styles", () => {
    const styles = getBoxCss(
      { left: "xl", right: "lg", top: "xs", bottom: "md" },
      {
        left: "sm",
        right: "md",
        top: "xxl",
        bottom: "lg",
      },
      props
    );

    expect(styles).toEqual({
      marginLeft: spacingSelector(props, "xl"),
      marginRight: spacingSelector(props, "lg"),
      marginTop: spacingSelector(props, "xs"),
      marginBottom: spacingSelector(props, "md"),
      paddingLeft: spacingSelector(props, "sm"),
      paddingRight: spacingSelector(props, "md"),
      paddingTop: spacingSelector(props, "xxl"),
      paddingBottom: spacingSelector(props, "lg"),
    });
  });

  it("should return convenience dimension styles", () => {
    const styles = getBoxCss(
      { horizontal: "lg", vertical: "md" },
      { horizontal: "md", vertical: "lg" },
      props
    );

    expect(styles).toEqual({
      marginLeft: spacingSelector(props, "lg"),
      marginRight: spacingSelector(props, "lg"),
      marginTop: spacingSelector(props, "md"),
      marginBottom: spacingSelector(props, "md"),
      paddingLeft: spacingSelector(props, "md"),
      paddingRight: spacingSelector(props, "md"),
      paddingTop: spacingSelector(props, "lg"),
      paddingBottom: spacingSelector(props, "lg"),
    });
  });

  describe("getSpecs", () => {
    it("should return nothing if no specs are passed", () => {
      const styles = getSpecs("padding", undefined, props);

      expect(styles).toEqual({});
    });

    it("should return margin styles", () => {
      const styles = getSpecs("margin", "md", props);

      expect(styles).toEqual({
        margin: spacingSelector(props, "md"),
      });
    });

    it("should return padding styles", () => {
      const styles = getSpecs("padding", "md", props);

      expect(styles).toEqual({
        padding: spacingSelector(props, "md"),
      });
    });

    it("should return margin dimension styles", () => {
      const styles = getSpecs(
        "margin",
        {
          left: "sm",
          right: "md",
          top: "xxl",
          bottom: "lg",
        },
        props
      );

      expect(styles).toEqual({
        marginLeft: spacingSelector(props, "sm"),
        marginRight: spacingSelector(props, "md"),
        marginTop: spacingSelector(props, "xxl"),
        marginBottom: spacingSelector(props, "lg"),
      });
    });

    it("should return partial margin dimension styles", () => {
      const styles = getSpecs(
        "margin",
        {
          top: "xxl",
          bottom: "lg",
        },
        props
      );

      expect(styles).toEqual({
        marginTop: spacingSelector(props, "xxl"),
        marginBottom: spacingSelector(props, "lg"),
      });
    });

    it("should return padding dimension styles", () => {
      const styles = getSpecs(
        "padding",
        {
          left: "sm",
          right: "md",
          top: "xxl",
          bottom: "lg",
        },
        props
      );

      expect(styles).toEqual({
        paddingLeft: spacingSelector(props, "sm"),
        paddingRight: spacingSelector(props, "md"),
        paddingTop: spacingSelector(props, "xxl"),
        paddingBottom: spacingSelector(props, "lg"),
      });
    });

    it("should return partial padding dimension styles", () => {
      const styles = getSpecs(
        "padding",
        {
          top: "xxl",
          bottom: "lg",
        },
        props
      );

      expect(styles).toEqual({
        paddingTop: spacingSelector(props, "xxl"),
        paddingBottom: spacingSelector(props, "lg"),
      });
    });

    it("should return horizontal dimension styles", () => {
      const styles = getSpecs(
        "padding",
        {
          horizontal: "sm",
          top: "xxl",
          bottom: "lg",
        },
        props
      );

      expect(styles).toEqual({
        paddingLeft: spacingSelector(props, "sm"),
        paddingRight: spacingSelector(props, "sm"),
        paddingTop: spacingSelector(props, "xxl"),
        paddingBottom: spacingSelector(props, "lg"),
      });
    });

    it("should return vertical dimension styles", () => {
      const styles = getSpecs(
        "padding",
        {
          vertical: "sm",
          left: "xxl",
          right: "lg",
        },
        props
      );

      expect(styles).toEqual({
        paddingTop: spacingSelector(props, "sm"),
        paddingBottom: spacingSelector(props, "sm"),
        paddingLeft: spacingSelector(props, "xxl"),
        paddingRight: spacingSelector(props, "lg"),
      });
    });

    it("should return convenience dimension styles", () => {
      const styles = getSpecs(
        "padding",
        {
          horizontal: "sm",
          vertical: "md",
        },
        props
      );

      expect(styles).toEqual({
        paddingLeft: spacingSelector(props, "sm"),
        paddingRight: spacingSelector(props, "sm"),
        paddingTop: spacingSelector(props, "md"),
        paddingBottom: spacingSelector(props, "md"),
      });
    });
  });
});
