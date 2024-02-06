import {
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemedStyledProps,
} from "styled-components";

import { PopperProps } from "../Popper";

export interface PopoverProps<E = HTMLElement>
  extends Pick<StyledPopoverProps, "style" | "styledCss">,
    Omit<PopperProps<E>, "tipVariant"> {
  /** indicates whether close button should be displayed */
  isCloseEnabled?: boolean;
  /** class name to be passed to the parent popper element */
  popperClassName?: string;
  /** DOM id to be passed to the parent popper element */
  popperId?: string;
}

interface BaseStyledPopoverProps
  extends Omit<PopperProps, "tipVariant">,
    Omit<React.HTMLAttributes<HTMLElement>, "children"> {}

// eslint-disable-next-line @typescript-eslint/ban-types
export interface StyledPopoverProps<T extends object = {}>
  extends BaseStyledPopoverProps {
  /** prop to interpolate the returned value of a `css` call within styled-components */
  styledCss?:
    | FlattenSimpleInterpolation
    // eslint-disable-next-line @typescript-eslint/ban-types
    | FlattenInterpolation<ThemedStyledProps<{}, T>>
    | FlattenInterpolation<ThemedStyledProps<BaseStyledPopoverProps, T>>;
}
