import React from "react";
import classNames from "classnames";

import { Icon } from "../Icon";
import { Tooltip, useTooltip } from "../Tooltip";

import { IconButtonProps } from "./types";
import { StyledIconButton } from "./StyledIconButton";

export const IconButton = React.forwardRef(
  (
    {
      children,
      className,
      disabled,
      distance,
      name,
      "aria-label": ariaLabel,
      placement = "bottom",
      type = "button",
      ...props
    }: IconButtonProps,
    ref: React.RefObject<HTMLButtonElement>
  ) => {
    const [tooltipState, targetRef] = useTooltip<HTMLButtonElement>(
      ref,
      false,
      disabled
    );

    if (!ariaLabel && process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.warn(
        "WARNING: You have not provided an aria-label for this `IconButton`. In the next version of Beacon, an aria-label will be required for `IconButton`s."
      );
    }

    const allChildrenAreText =
      React.Children.map(
        children,
        (child) => typeof child === "string"
      )?.reduce((x, y) => x && y) ?? false;

    const childAriaLabel = allChildrenAreText
      ? React.Children.map(children, (child) =>
          typeof child === "string" ? child : undefined
        )?.join("")
      : undefined;

    return (
      <StyledIconButton
        {...props}
        type={type}
        ref={targetRef}
        className={classNames(["bcl-icon-button", className])}
        disabled={disabled}
        aria-label={ariaLabel || childAriaLabel}
        aria-haspopup={!disabled && React.Children.count(children) > 0}
      >
        <Icon name={name} size={props.size === "sm" ? "1x" : props.size} />
        {!disabled && children && (
          <Tooltip
            {...tooltipState}
            targetRef={targetRef}
            placement={placement}
            distance={distance}
          >
            {children}
          </Tooltip>
        )}
      </StyledIconButton>
    );
  }
);

IconButton.displayName = "IconButton";
