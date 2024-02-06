import { useEffect, useState, useCallback } from "react";

import { PopperProps, getElement } from "../../Popper";
import {
  KeyboardKey,
  ActiveDescendantId,
  OpenFocusTarget,
  Alphabet,
} from "../types";
import { getKey } from "../getKey";

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
const menuOpenKeyTypes: KeyboardKey[] = ["arrowDown", "arrowUp"];
const targetIgnoreKeyTypes: KeyboardKey[] = [
  ...menuOpenKeyTypes,
  "home",
  "end",
  "letter",
  "esc",
];

export const useMenuA11y = (
  menuRef: React.RefObject<HTMLUListElement>,
  {
    isOpen,
    onClose,
    onOpen,
    target,
    targetRef,
  }: Pick<PopperProps, "isOpen" | "onClose" | "onOpen" | "target" | "targetRef">
): ActiveDescendantId => {
  // set a small state for the focus target
  const [openFocusTarget, setOpenFocusTarget] = useState<OpenFocusTarget>(null);
  // set a small state for the letter focus target
  const [letterFocusTarget, setLetterFocusTarget] = useState<Alphabet | null>(
    null
  );
  // set a small state for the active descendant id
  const [activeDescendantId, setActiveDescendantId] =
    useState<ActiveDescendantId>(undefined);

  // side effects for the key behavior on the target
  useEffect(() => {
    // get target element for comparison
    const element = getElement({ target, targetRef });

    // only do this if the target element is defined, otherwise bail
    if (!element) {
      return;
    }

    // listen to keyboard events on the menu
    const targetEventListener = (event: KeyboardEvent) => {
      // map keycodes to variable for easy reference
      const keyType = getKey(event);

      // if key type is not defined or is one we want to ignore, then bail
      if (!keyType || !targetIgnoreKeyTypes.includes(keyType)) {
        return;
      }

      // create some variables to make this logic easier to think through
      const homeAndClosed = keyType === "home" && !isOpen;
      const endAndClosed = keyType === "end" && !isOpen;

      // prevent default behavior to avoid page scrolling unintentionally
      // UNLESS user pressed home/end and the menu is closed
      if (!homeAndClosed && !endAndClosed) {
        event.preventDefault();
      }

      // only open when key is up/down arrow, home, or end
      if (menuOpenKeyTypes.includes(keyType)) {
        onOpen();
      }

      // if arrow down, indicate that we should focus on the first element
      if (keyType === "arrowDown") {
        setOpenFocusTarget("first");
      }
      // if arrow up, indicate that we should focus on the last element
      else if (keyType === "arrowUp") {
        setOpenFocusTarget("last");
      }
      // if home, indicate that we should focus on the first element
      else if (keyType === "home" && isOpen) {
        setOpenFocusTarget("first");
      }
      // if end, indicate that we should focus on the last element
      else if (keyType === "end" && isOpen) {
        setOpenFocusTarget("last");
      }
      // if a letter, indicate that we should focus on the corresponding element
      else if (keyType === "letter") {
        setLetterFocusTarget(event.key as Alphabet);
      }
      // if esc, close the menu
      else if (keyType === "esc") {
        onClose();
      }
    };

    // add event listener to the target element
    element.addEventListener("keydown", targetEventListener);

    // make sure to cleanup when unmounting
    return () => {
      element.removeEventListener("keydown", targetEventListener);
    };
  }, [isOpen, onClose, onOpen, target, targetRef]);

  // clean up open focus target when menu is closed
  useEffect(() => {
    if (!isOpen) {
      setOpenFocusTarget(null);
    }
  }, [isOpen, setOpenFocusTarget]);

  /**
   * Function to get all elements within the menu component
   * @returns an array where the first element is the array of elements inside the menu
   *          and the second element is the menu node (or both null)
   */
  const getMenuElements = useCallback(():
    | [HTMLElement[], HTMLUListElement]
    | [null, null] => {
    // map menuRef.current to node to keep track
    const node = menuRef.current;

    // only do this if the menu is open AND menuRef.current is defined, otherwise bail
    if (!isOpen || !node) {
      return [null, null];
    }

    // get all the elements inside menu
    const elem = Array.from(node.querySelectorAll(focusableElements.join(", ")))
      // filter out disabled elements, if any
      .filter((el) => !el.hasAttribute("disabled")) as HTMLElement[];

    return [elem, node];
  }, [isOpen, menuRef]);
  /**
   * Function to focus on a descendant, update the aria-activedescendent,
   * and optionally reset focus target
   * @param descendants array of HTML Elements inside the menu
   * @param descendantIndex indicates specific descendant to focus on
   * @param resetFocusTarget indicates whether the focus target should be reset back to null
   */
  const focusOnDescendantByIndex = useCallback(
    (
      descendants: HTMLElement[],
      descendantIndex: "first" | "last" | number,
      resetFocusTarget = false
    ) => {
      // get desired descendant
      const descendant =
        descendantIndex === "first"
          ? // if index is 'first', get first descendant
            descendants[0]
          : descendantIndex === "last"
          ? // if index is 'last', get last descendant
            descendants[descendants.length - 1]
          : // otherwise, get descendant indicated by its index
            descendants[descendantIndex];

      // set active descendant id
      setActiveDescendantId(descendant.id);

      // reset the focus target to 'null', if desired
      if (resetFocusTarget) {
        setOpenFocusTarget(null);
      }

      return descendant.focus();
    },
    []
  );
  /**
   * Function to focus on a descendant, update the aria-activedescendent,
   * and optionally reset focus target
   * @param letter indicates first letter to search for in aria-labels
   * @param resetFocusTarget indicates whether the focus target should be reset back to null
   */
  const focusOnDescendantByLetter = useCallback(
    (letter: string, resetFocusTarget = false) => {
      // get menu elements
      const [elem] = getMenuElements();

      // if elements not defined, bail
      if (!elem) {
        return;
      }

      // get values matching user input
      const matches = elem
        // filter to just the elements with labels starting with that key
        .filter(
          (e) => e.getAttribute("aria-label")?.[0] === letter.toLowerCase()
        );
      // next, check if the current focused element is among them and get its index
      const currIndex = matches.findIndex((m) => m === document.activeElement);
      // if curr index not found, then just focus on the first one
      // otherwise, get the next one and focus on that
      const descendant =
        currIndex === -1
          ? matches.shift()
          : matches[(currIndex + 1) % matches.length];

      // reset the letter focus target to 'null', if desired
      if (resetFocusTarget) {
        setLetterFocusTarget(null);
      }

      // if descendant not defined, bail
      if (!descendant) {
        return;
      }

      // set active descendant id
      setActiveDescendantId(descendant.id);

      // otherwise, get the next one and focus on that
      return descendant.focus();
    },
    [getMenuElements]
  );

  // side effects for menu element selection behavior when user is focused on target
  useEffect(() => {
    // get menu elements
    const [elem] = getMenuElements();

    // if elements not defined, bail
    if (!elem) {
      return;
    }

    // if focus target is 'first' focus on the first element and set focus target to 'null'
    if (openFocusTarget === "first") {
      focusOnDescendantByIndex(elem, "first", true);
    }

    // if focus target is 'last' focus on the last element and set focus target to 'null'
    if (openFocusTarget === "last") {
      focusOnDescendantByIndex(elem, "last", true);
    }
  }, [focusOnDescendantByIndex, getMenuElements, openFocusTarget]);

  // side effects for letter key behavior while user is focused on target
  useEffect(() => {
    // get menu elements
    const [elem] = getMenuElements();

    // if elements not defined, bail
    if (!elem) {
      return;
    }

    // if a letter focus target is defined AND menu is open,
    // then focus on the first descendant beginning with the letter focus target
    if (letterFocusTarget && isOpen) {
      focusOnDescendantByLetter(letterFocusTarget, true);
    }
  }, [focusOnDescendantByLetter, getMenuElements, isOpen, letterFocusTarget]);

  // side effects for key behavior within the menu
  useEffect(() => {
    // get menu elements and the menu node
    const [elem, node] = getMenuElements();

    // if neither the elements nor the node is defined, bail
    if (!elem || !node) {
      return;
    }

    // listen to keyboard events on the menu
    const menuEventListener = (event: KeyboardEvent) => {
      // map keycodes to variable for easy reference
      const keyType = getKey(event);
      // get index of the child that is currently focused
      const activeElemIndex = elem.findIndex(
        (e) => e === document.activeElement
      );

      // prevent default behavior and propagation to avoid page from doing things (e.g. scrolling) unintentionally
      if (keyType !== "enter") {
        event.preventDefault();

        event.stopPropagation();
      }

      // if arrow down, shift focus to next element in elem
      if (keyType === "arrowDown") {
        return focusOnDescendantByIndex(
          elem,
          (activeElemIndex + 1) % elem.length
        );
      }

      // if arrow up, shift focus to previous element in elem
      if (keyType === "arrowUp") {
        return focusOnDescendantByIndex(
          elem,
          activeElemIndex === 0
            ? elem.length - 1
            : (activeElemIndex - 1) % elem.length
        );
      }

      // if home key, shift focus to first element in elem
      if (keyType === "home") {
        return focusOnDescendantByIndex(elem, "first");
      }

      // if arrow up OR end key, shift focus to last element in elem
      if (keyType === "end") {
        return focusOnDescendantByIndex(elem, "last");
      }

      // set focus on the menu button
      if (keyType === "enter") {
        // get target element for comparison
        const element = getElement({ target, targetRef });

        return element?.focus();
      }

      // close menu and set focus on the menu button
      if (keyType === "esc") {
        // get target element for comparison
        const element = getElement({ target, targetRef });

        onClose();

        return element?.focus();
      }

      // if user types a letter, then focus on the next button starting with that key, if any
      if (keyType === "letter") {
        return focusOnDescendantByLetter(event.key);
      }
    };

    // add event listener to the menu
    node.addEventListener("keydown", menuEventListener);

    // make sure to cleanup when unmounting
    return () => {
      node.removeEventListener("keydown", menuEventListener);
    };
  }, [
    focusOnDescendantByIndex,
    focusOnDescendantByLetter,
    getMenuElements,
    isOpen,
    menuRef,
    onClose,
    openFocusTarget,
    target,
    targetRef,
  ]);

  return activeDescendantId;
};
