import React from "react";
import classNames from "classnames";
import styled from "styled-components";

import { CloseButton } from "../CloseButton";
import { Portal } from "../Portal";
import { LevelsContextProvider } from "../LevelsContext";
import { ModalContextProvider } from "../ModalContext";

import { ModalBackdrop } from "./ModalBackdrop";
import { ModalContent } from "./ModalContent";
import { ModalDialog } from "./ModalDialog";
import { StyledModal } from "./StyledModal";
import { useModalLevel, BASE_Z_INDEX, MODAL_LEVEL_TICK } from "./useModalLevel";
import { ModalProps } from "./types";

const focusableElements = [
  "a[href]",
  "area[href]",
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "object",
  "embed",
  "[tabindex]:not(.modal)",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])',
];

function getFocusableChildren(ref: React.RefObject<HTMLElement>) {
  return ref.current?.querySelectorAll(focusableElements.join(", "));
}

function getFocusedChild(ref: React.RefObject<HTMLElement>) {
  let currentFocus;

  const focusableChildren = getFocusableChildren(ref);

  if (typeof document !== "undefined") {
    currentFocus = document.activeElement;
  } else {
    // we can't test this with Cypress, so ignore it
    /* istanbul ignore next */
    currentFocus = focusableChildren?.[0];
  }

  return currentFocus;
}

function setFocus(ref: React.RefObject<HTMLDivElement>) {
  if (typeof ref.current?.focus === "function") {
    ref.current.focus();
  }
}

/**
 * gets the index of the new focusable item to focus on
 *
 * @param currentFocus index of the currently focused item
 * @param totalFocusable number of total focusable items
 * @param isShifted indicates if the shift key is pressed
 *
 * @returns the index of the item to now focus on
 */
export const getNewFocusIndex = (
  currentFocus: number,
  totalFocusable: number,
  isShifted: boolean
): number => {
  if (isShifted) {
    // if the shift key is pressed, and at beginning of list,
    // wrap to the end of the list
    if (currentFocus === 0) {
      return totalFocusable - 1;
    }

    // if the shift key is pressed and not at the beginning of list,
    // go back one
    return currentFocus - 1;
  }

  // if not at the end of the list, go forward one
  if (currentFocus < totalFocusable - 1) {
    return currentFocus + 1;
  }

  // otherwise, wrap to the beginning of the list
  return 0;
};

export const ModalCloseButton = styled(CloseButton)`
  position: absolute;
`;

export const Modal = ({
  autoFocus = true,
  className,
  children,
  isOpen,
  keyboard = true,
  node,
  size = "sm",
  toggle,
  zIndex,
  ...props
}: ModalProps): React.ReactElement => {
  // refs here
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  // event handlers here
  const handleEscape = (event: React.KeyboardEvent<HTMLElement>) => {
    if (isOpen && keyboard && event.keyCode === 27 && toggle) {
      event.preventDefault();

      event.stopPropagation();

      toggle(event);
    }
  };

  const handleTab = (event: React.KeyboardEvent<HTMLElement>) => {
    // if not a tab event, return out
    if (event.keyCode !== 9 || !keyboard) {
      return;
    }

    // get focusable children
    const focusableChildren = getFocusableChildren(wrapperRef);

    if (!focusableChildren) {
      return;
    }

    const totalFocusable = focusableChildren.length;

    if (totalFocusable === 0) {
      return;
    }

    // get the current focused child and index
    const currentFocus = getFocusedChild(wrapperRef);

    let focusedIndex = 0;

    for (let i = 0; i < totalFocusable; i++) {
      if (focusableChildren[i] === currentFocus) {
        focusedIndex = i;

        break;
      }
    }

    event.preventDefault();

    const newFocus = getNewFocusIndex(
      focusedIndex,
      totalFocusable,
      event.shiftKey
    );

    (focusableChildren[newFocus] as HTMLElement).focus();
  };

  // hooks here
  React.useEffect(() => {
    if (autoFocus && isOpen) {
      setFocus(contentRef);
    }
  }, [autoFocus, isOpen]);

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      if (isOpen) {
        // on unmount, restore scrolling on the body
        document.body.style.overflow = "";
      }
    };
  }, [isOpen]);

  const calcZIndex = useModalLevel(zIndex);

  return (
    <Portal node={node}>
      {isOpen && (
        <LevelsContextProvider
          step={MODAL_LEVEL_TICK}
          base={BASE_Z_INDEX}
          level={zIndex ? zIndex + 2 * MODAL_LEVEL_TICK : undefined}
        >
          <ModalContextProvider size={size}>
            <StyledModal
              {...props}
              isOpen={isOpen}
              className={classNames(["bcl-modal", className])}
              onKeyUp={handleEscape}
              onKeyDown={handleTab}
              ref={wrapperRef}
            >
              <ModalBackdrop zIndex={calcZIndex - MODAL_LEVEL_TICK} />
              <ModalDialog isOpen={isOpen} zIndex={calcZIndex}>
                <ModalContent
                  ref={contentRef}
                  tabIndex={0}
                  isOpen={isOpen}
                  toggle={toggle}
                  size={size}
                >
                  {toggle && (
                    <ModalCloseButton className="close-icon" onClick={toggle} />
                  )}
                  {children}
                </ModalContent>
              </ModalDialog>
            </StyledModal>
          </ModalContextProvider>
        </LevelsContextProvider>
      )}
    </Portal>
  );
};

Modal.displayName = "Modal";
