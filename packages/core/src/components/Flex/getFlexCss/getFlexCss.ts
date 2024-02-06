import { CSSObject } from "styled-components";

import {
  AlignItems,
  FlexDirection,
  FlexWrap,
  JustifyContent,
  TextAlign,
  FlexSpecs,
} from "../types";

export function getAlignItemsCss(alignItems?: AlignItems): CSSObject {
  return {
    alignItems,
  };
}

export function getFlexDirectionCss(flexDirection?: FlexDirection): CSSObject {
  return {
    flexDirection,
  };
}

export function getFlexWrapCss(flexWrap?: FlexWrap): {
  flexWrap: FlexWrap | undefined;
} {
  return {
    flexWrap,
  };
}

export function getJustifyContentCss(
  justifyContent?: JustifyContent
): CSSObject {
  return {
    justifyContent,
  };
}

export function getTextAlignCss(textAlign?: TextAlign): CSSObject {
  return {
    textAlign,
  };
}

export function getFlexDisplayCss(inline = false): CSSObject {
  return {
    display: inline ? "inline-flex" : "flex",
  };
}

export const getFlexCss = ({
  alignItems,
  direction,
  justifyContent,
  inline,
  textAlign,
  wrap,
}: FlexSpecs): CSSObject => {
  const displayStyle = getFlexDisplayCss(inline);
  const alignItemsStyle = getAlignItemsCss(alignItems);
  const directionStyle = getFlexDirectionCss(direction);
  const justifyContentStyle = getJustifyContentCss(justifyContent);
  const textAlignStyle = getTextAlignCss(textAlign);
  const wrapStyle = getFlexWrapCss(wrap);

  return {
    ...displayStyle,
    ...alignItemsStyle,
    ...directionStyle,
    ...justifyContentStyle,
    ...textAlignStyle,
    ...wrapStyle,
  };
};
