import React, { useRef } from "react";
import { css } from "styled-components";
import classNames from "classnames";
import { Transition, TransitionStatus } from "react-transition-group";

import { Popper, usePopper } from "../Popper";

import { MenuProps } from "./types";
import { StyledMenu, popperOverrides } from "./StyledMenu";
import { useMenuA11y } from "./useMenuA11y";

/**
 * A function that abstracts the open/close logic of a menu component
 * @param targetRef an optional ref object that should be used instead of initializing a new one
 * @param initialState an optional initial state for the handler
 * @returns an array containing state management props for the menu as its first element and the ref object to be passed to both the target and the menu
 * @note this function renames usePopper to provide a consistent point of entry and simplify the cognitive overhead for the developer
 */
export const useMenu = usePopper;

const duration = 300;
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};
const transitionStyles: {
  [key in TransitionStatus]?: React.CSSProperties;
} = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export const Menu = React.forwardRef(
  (
    {
      children,
      className,
      closeOnClickInside,
      id,
      isOpen,
      hideTopMargin,
      onClose,
      onOpen,
      popperClassName,
      popperId,
      popperStyledCss,
      size = "lg",
      style,
      styledCss,
      target,
      targetRef,
      variant = "default",
      ...props
    }: MenuProps,
    ref: React.RefObject<HTMLDivElement>
  ): React.ReactElement => {
    // create a ref for the menu
    const menuRef = useRef<HTMLUListElement>(null);
    // use the menu a11y hook to manage a11y behavior
    const activeDescendantId = useMenuA11y(menuRef, {
      isOpen,
      onClose,
      onOpen,
      target,
      targetRef,
    });

    return (
      <Popper
        triggers={["click"]}
        untriggers={["click"]}
        {...props}
        ref={ref}
        className={popperClassName}
        id={popperId}
        isOpen={isOpen}
        interactive
        noArrow
        popperStyledCss={css`
          ${popperOverrides}${popperStyledCss || ""}
        `}
        target={target}
        targetRef={targetRef}
        onClose={onClose}
        onOpen={onOpen}
        style={hideTopMargin ? { borderTop: 0 } : undefined}
      >
        {typeof children === "function" ? (
          ({ activePlacement, targetDimensions, popperDimensions }) => (
            <Transition in={isOpen} timeout={duration} appear>
              {(state) => (
                <StyledMenu
                  className={classNames(["bcl-menu", className])}
                  id={id}
                  style={{
                    ...style,
                    ...defaultStyle,
                    ...transitionStyles[state],
                  }}
                  styledCss={styledCss}
                  ref={menuRef}
                  tabIndex={-1}
                  aria-labelledby={props["aria-labelledby"]}
                  aria-activedescendant={activeDescendantId}
                  onClick={closeOnClickInside ? onClose : undefined}
                  size={size}
                  hideTopMargin={hideTopMargin}
                  variant={variant}
                >
                  {children({
                    activePlacement,
                    targetDimensions,
                    popperDimensions,
                  })}
                </StyledMenu>
              )}
            </Transition>
          )
        ) : (
          <Transition in={isOpen} timeout={duration} appear>
            {(state) => (
              <StyledMenu
                className={classNames(["bcl-menu", className])}
                id={id}
                style={{
                  ...style,
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
                styledCss={styledCss}
                ref={menuRef}
                tabIndex={-1}
                aria-labelledby={props["aria-labelledby"]}
                aria-activedescendant={activeDescendantId}
                onClick={closeOnClickInside ? onClose : undefined}
                size={size}
                hideTopMargin={hideTopMargin}
                variant={variant}
              >
                {children}
              </StyledMenu>
            )}
          </Transition>
        )}
      </Popper>
    );
  }
);

Menu.displayName = "Menu";
