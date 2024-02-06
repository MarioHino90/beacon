import React from "react";

import { Portal } from "../Portal";

import { PopperContextProvider } from "./PopperContext";
import { PopperManager } from "./PopperManager";
import { PopperProps } from "./types";

export const Popper = React.forwardRef(
  (
    {
      children,
      className,
      componentName = "Popper",
      id,
      target,
      targetRef,
      popperStyle,
      popperStyledCss,
      portalRef,
      ...props
    }: PopperProps,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    // if no `target` AND `targetRef` defined, fail
    if (!target && !targetRef) {
      if (process.env.NODE_ENV !== "production") {
        // eslint-disable-next-line no-console
        console.error(
          `ERROR: You must specify a 'target' or 'targetRef' prop for the '${componentName}' component.`
        );
      }
    }

    return (
      <Portal node={portalRef}>
        <PopperContextProvider
          {...props}
          portalRef={portalRef}
          target={target}
          targetRef={targetRef}
        >
          <PopperManager
            className={className}
            id={id}
            popperStyle={popperStyle}
            popperStyledCss={popperStyledCss}
            ref={ref}
          >
            {children}
          </PopperManager>
        </PopperContextProvider>
      </Portal>
    );
  }
);

Popper.displayName = "Popper";
