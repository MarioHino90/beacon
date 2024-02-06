import React from "react";
import {
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemedStyledProps,
} from "styled-components";

import { InputGroupContextInterface } from "../InputGroupContext";

export interface InputGroupAddonProps extends StyledInputGroupAddonProps {}

export interface StyledInputGroupAddonProps<
  // eslint-disable-next-line @typescript-eslint/ban-types
  T extends Record<string, unknown> = {}
> extends InputGroupContextInterface,
    React.HTMLAttributes<HTMLElement> {
  /** child elements to be rendered inside the component tree */
  children?: React.ReactNode | React.ReactNode[];
  /** prop to interpolate the returned value of a `css` call within styled-components */
  styledCss?:
    | FlattenSimpleInterpolation
    // eslint-disable-next-line @typescript-eslint/ban-types
    | FlattenInterpolation<ThemedStyledProps<{}, T>>
    | FlattenInterpolation<ThemedStyledProps<InputGroupContextInterface, T>>;
}
