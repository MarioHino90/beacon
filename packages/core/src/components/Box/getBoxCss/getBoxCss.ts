import { CSSObject } from "styled-components";
import { spacingSelector, Props } from "@braze/beacon-styling";
import { SpacingType } from "@braze/beacon-theme";

import { BoxSpecs } from "../types";

/**
 * Calculates the specs for spacing
 *
 * @param header the css property that is being calculated for
 * @param specs the spacing information
 * @param props the props containing `theme`
 *
 * @return the calculated specs
 */
export const getSpecs = (
  header: "margin" | "padding",
  specs: BoxSpecs | SpacingType | undefined,
  props: Props = {}
): CSSObject => {
  if (typeof specs === "string") {
    return {
      [header]: spacingSelector(props, specs),
    };
  }

  if (typeof specs === "object") {
    if (specs.horizontal && specs.vertical) {
      return {
        [`${header}Left`]: spacingSelector(props, specs.horizontal),
        [`${header}Right`]: spacingSelector(props, specs.horizontal),
        [`${header}Top`]: spacingSelector(props, specs.vertical),
        [`${header}Bottom`]: spacingSelector(props, specs.vertical),
      };
    }

    if (specs.horizontal) {
      return {
        [`${header}Left`]: spacingSelector(props, specs.horizontal),
        [`${header}Right`]: spacingSelector(props, specs.horizontal),
        [`${header}Top`]: specs.top && spacingSelector(props, specs.top),
        [`${header}Bottom`]:
          specs.bottom && spacingSelector(props, specs.bottom),
      };
    }

    if (specs.vertical) {
      return {
        [`${header}Left`]: specs.left && spacingSelector(props, specs.left),
        [`${header}Right`]: specs.right && spacingSelector(props, specs.right),
        [`${header}Top`]: spacingSelector(props, specs.vertical),
        [`${header}Bottom`]: spacingSelector(props, specs.vertical),
      };
    }

    return {
      [`${header}Left`]: specs.left && spacingSelector(props, specs.left),
      [`${header}Right`]: specs.right && spacingSelector(props, specs.right),
      [`${header}Top`]: specs.top && spacingSelector(props, specs.top),
      [`${header}Bottom`]: specs.bottom && spacingSelector(props, specs.bottom),
    };
  }

  return {};
};

/**
 * Creates box styling for a component using token styles
 *
 * @param margin the styling options for margin
 * @param padding the styling options for padding
 * @param props the props containing `theme`
 *
 * @return the styles as CSSProperties
 */
export const getBoxCss = (
  margin: BoxSpecs | SpacingType | undefined,
  padding: BoxSpecs | SpacingType | undefined,
  props: Props
): CSSObject => {
  const marginStyle = getSpecs("margin", margin, props);
  const paddingStyle = getSpecs("padding", padding, props);

  return { ...marginStyle, ...paddingStyle };
};
