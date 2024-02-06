import React, { forwardRef, useLayoutEffect, useRef } from "react";
import classNames from "classnames";

import { StyledPopper } from "../StyledPopper";
import { usePopperContext } from "../PopperContext";
import { usePopperPlacement } from "../usePopperPlacement";
import { useOutsideClick } from "../useOutsideClick";
import { useScrollListener } from "../useScrollListener";
import { PopperRendererProps } from "../types";

export const PopperRenderer = forwardRef(
  (
    { children, className, popperStyle, ...props }: PopperRendererProps,
    ref: React.RefObject<HTMLDivElement>
  ): React.ReactElement => {
    const refIfNoRefPassed = useRef<HTMLDivElement>(null);
    const refToUse = ref || refIfNoRefPassed;

    // get desired props from context
    const {
      tipVariant = "dark",
      zIndex,
      targetRef,
      interactive,
      noArrow,
    } = usePopperContext();

    /**
     * placement state management
     */
    const { activePlacement, left, top, handlePlacementUpdate } =
      usePopperPlacement(ref);

    const targetDimensions = targetRef?.current?.getBoundingClientRect();
    const popperDimensions = refToUse?.current?.getBoundingClientRect();

    /**
     * outside click handler
     */
    useOutsideClick(ref);

    /**
     * scroll listener
     */
    useScrollListener(handlePlacementUpdate);

    /**
     * update the placement after each render.
     * note that this won't trigger a re-render if the measurements haven't changed.
     */
    useLayoutEffect(() => {
      handlePlacementUpdate();
    });

    return (
      <StyledPopper
        {...props}
        className={classNames("bcl-popper", className)}
        ref={ref}
        left={left}
        top={top}
        placement={activePlacement}
        tipVariant={tipVariant}
        zIndex={zIndex}
        interactive={interactive}
        noArrow={noArrow}
        style={popperStyle}
        targetDimensions={targetDimensions}
        popperDimensions={popperDimensions}
      >
        {typeof children === "function"
          ? children({ activePlacement, targetDimensions, popperDimensions })
          : children}
      </StyledPopper>
    );
  }
);

PopperRenderer.displayName = "PopperRenderer";
