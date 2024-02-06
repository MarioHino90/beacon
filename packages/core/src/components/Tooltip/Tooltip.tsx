import React from "react";

import { Popper, usePopper } from "../Popper";

import { TooltipProps } from "./types";
import { StyledTooltip } from "./StyledTooltip";

/**
 * A function that abstracts the open/close logic of a tooltip component
 * @param targetRef an optional ref object that should be used instead of initializing a new one
 * @param initialState an optional initial state for the handler
 * @returns an array containing state management props for the tooltip as its first element and the ref object to be passed to both the target and the tooltip
 * @note this function renames usePopper to provide a consistent point of entry and simplify the cognitive overhead for the developer
 */
export const useTooltip = usePopper;

export const Tooltip = ({
  className,
  children,
  id,
  placement = "bottom",
  style,
  styledCss,
  popperClassName,
  popperId,
  untriggers = ["mouseleave", "blur", "scroll"],
  ...props
}: TooltipProps): React.ReactElement => {
  return (
    <Popper
      {...props}
      className={popperClassName}
      id={popperId}
      placement={placement}
      tipVariant="dark"
      role="tooltip"
      untriggers={untriggers}
    >
      <StyledTooltip
        className={className}
        id={id}
        style={style}
        styledCss={styledCss}
      >
        <div>{children}</div>
      </StyledTooltip>
    </Popper>
  );
};
