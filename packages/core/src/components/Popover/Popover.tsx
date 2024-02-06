import React, { useRef } from "react";

import { CloseButton } from "../CloseButton";
import { Popper, usePopper } from "../Popper";

import { PopoverProps } from "./types";
import { StyledPopover } from "./StyledPopover";

/**
 * A function that abstracts the open/close logic of a popover component
 * @param targetRef an optional ref object that should be used instead of initializing a new one
 * @param initialState an optional initial state for the handler
 * @returns an array containing state management props for the popover as its first element and the ref object to be passed to both the target and the popover
 * @note this function renames usePopper to provide a consistent point of entry and simplify the cognitive overhead for the developer
 */
export const usePopover = usePopper;

export const Popover = React.forwardRef(
  (
    {
      className,
      children,
      id,
      isCloseEnabled,
      onClose,
      triggers = ["click"],
      untriggers = ["click"],
      placement,
      noArrow,
      popperClassName,
      popperId,
      style,
      styledCss,
      targetRef,
      ...props
    }: PopoverProps,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    const refIfNoRefPassed = useRef<HTMLDivElement>(null);
    const refToUse = ref || refIfNoRefPassed;

    return (
      <Popper
        {...props}
        className={popperClassName}
        id={popperId}
        placement={placement}
        onClose={onClose}
        tipVariant="light"
        triggers={triggers}
        untriggers={untriggers}
        noArrow={noArrow}
        ref={refToUse}
        targetRef={targetRef}
      >
        {({ activePlacement, targetDimensions, popperDimensions }) => {
          return (
            <>
              <StyledPopover
                className={className}
                id={id}
                noArrow={noArrow}
                placement={activePlacement}
                style={style}
                styledCss={styledCss}
                targetDimensions={targetDimensions}
                popperDimensions={popperDimensions}
              >
                {children}
              </StyledPopover>
              {isCloseEnabled && <CloseButton onClick={onClose} />}
            </>
          );
        }}
      </Popper>
    );
  }
);

Popover.displayName = "Popover";
