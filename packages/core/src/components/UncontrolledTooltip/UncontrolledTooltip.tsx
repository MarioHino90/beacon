import React from "react";
import classNames from "classnames";

import { Tooltip, useTooltip } from "../Tooltip";

import { UncontrolledTooltipProps } from "./types";

export const UncontrolledTooltip = ({
  children,
  targetRef,
  className,
  label,
  ...props
}: UncontrolledTooltipProps): React.ReactElement => {
  // tooltip controls
  const [state, ref] = useTooltip(targetRef);

  // throw error if more than one child found
  if (React.Children.count(children) > 1) {
    throw new Error(
      "ERROR: You can only use `UncontrolledTooltip` with a single child. If you need multiple child elements to be present, please wrap them all in a single HTML element."
    );
  }

  return (
    <>
      {React.Children.map(children, (child: React.ReactElement) => {
        return React.cloneElement(child, {
          ref,
        });
      })}
      <Tooltip
        {...props}
        {...state}
        targetRef={ref}
        className={classNames(["bcl-uncontrolled-tooltip", className])}
      >
        {label}
      </Tooltip>
    </>
  );
};
