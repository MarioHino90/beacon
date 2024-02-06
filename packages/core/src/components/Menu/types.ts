import {
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemedStyledProps,
} from "styled-components";

import { PopperProps } from "../Popper";

export type KeyboardKey =
  | "arrowDown"
  | "arrowUp"
  | "enter"
  | "space"
  | "home"
  | "end"
  | "esc"
  | "letter"
  | "tab";

export type Alphabet =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z";

export type OpenFocusTarget = "first" | "last" | null;

export type ActiveDescendantId = string | undefined;

export interface MenuProps<E = HTMLElement>
  extends Pick<
      StyledMenuProps,
      | "className"
      | "id"
      | "size"
      | "style"
      | "styledCss"
      | "hideTopMargin"
      | "variant"
    >,
    Omit<PopperProps<E>, "tipVariant"> {
  /** indicates that the menu should be closed when a user clicks inside the menu; does NOT prevent event handlers from firing */
  closeOnClickInside?: boolean;
  /** class name to be passed to the parent popper element */
  popperClassName?: string;
  /** DOM id to be passed to the parent popper element */
  popperId?: string;
}

export interface BaseStyledMenuProps
  extends React.HTMLAttributes<HTMLUListElement> {
  /** child elements to be rendered inside the component tree, including the render props option */
  children?:
    | React.ReactNode
    | React.ReactNode[]
    | ((renderProps) => React.ReactNode | React.ReactNode[]);
  /** size of the menu component, primarily affects width */
  size?: "sm" | "lg";
  /** indicates that the menu doesn't have any spacing on top */
  hideTopMargin?: boolean;
  /** different visual treatments depending on menu use case */
  variant?: "default" | "nav";
}

// eslint-disable-next-line @typescript-eslint/ban-types
export interface StyledMenuProps<T extends object = {}>
  extends BaseStyledMenuProps {
  /** prop to interpolate the returned value of a `css` call within styled-components */
  styledCss?:
    | FlattenSimpleInterpolation
    // eslint-disable-next-line @typescript-eslint/ban-types
    | FlattenInterpolation<ThemedStyledProps<{}, T>>
    | FlattenInterpolation<ThemedStyledProps<BaseStyledMenuProps, T>>;
}
