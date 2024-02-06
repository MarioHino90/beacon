import {
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemedStyledProps,
} from "styled-components";

export type AlignItems =
  | "stretch"
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline";

export type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";

export type FlexWrap = "wrap" | "nowrap" | "wrap-reverse";

export type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

export type TextAlign = "left" | "center" | "right" | "justify";

export interface FlexProps extends StyledFlexProps {}

interface BaseStyledFlexProps extends React.HTMLAttributes<HTMLDivElement> {
  /** element / component to render as flex */
  as?: React.ElementType;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export interface StyledFlexProps<T extends Record<string, unknown> = {}>
  extends BaseStyledFlexProps,
    FlexSpecs {
  /** prop to interpolate the returned value of a `css` call within styled-components */
  styledCss?:
    | FlattenSimpleInterpolation
    // eslint-disable-next-line @typescript-eslint/ban-types
    | FlattenInterpolation<ThemedStyledProps<{}, T>>
    | FlattenInterpolation<ThemedStyledProps<BaseStyledFlexProps, T>>;
}

export interface FlexSpecs {
  /** defines the behavior for how items are laid out along the cross axis (perpendicular to the main axis) */
  alignItems?: AlignItems;
  /** specified the direction of the items inside the flex element */
  direction?: FlexDirection;
  /** indicates that the flex element should be inline */
  inline?: boolean;
  /** defines the behavior for how items are laid out along the main axis */
  justifyContent?: JustifyContent;
  /** horizontally aligns text within a DOM element */
  textAlign?: TextAlign;
  /** specifies whether the flexed items should wrap */
  wrap?: FlexWrap;
}
