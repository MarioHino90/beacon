import { HTMLProps } from "react";

import { Intent } from "../BannerAlert";
import { LinkProps as LinkComponentProps } from "../Link";

interface BaseProps {
  /** indicates which direction the caret should face */
  caret?: "up" | "down";
}

interface LinkProps extends HTMLProps<HTMLAnchorElement>, BaseProps {
  /** indicates which tag the link should render as */
  as: "a";
  /** on link click */
  onClick?: () => void;
}

interface ButtonProps extends HTMLProps<HTMLButtonElement>, BaseProps {
  /** on link click */
  onClick: () => void;
  /** indicates which tag the link should render as */
  as?: "button";
}

type BaseOptions = LinkProps | ButtonProps;

export type BannerAlertLinkProps = BaseOptions & {
  /** visual banner intent */
  intent?: Intent;
};

export interface StyledLinkProps extends LinkComponentProps {
  /** visual banner intents */
  intent: Intent;
}
