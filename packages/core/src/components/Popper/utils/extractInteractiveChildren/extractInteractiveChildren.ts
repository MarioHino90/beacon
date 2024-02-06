// HTML elements that can be interacted with using the keyboard
const interactiveNodeNames = [
  "BUTTON",
  "A",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "DETAILS",
];

const isHTMLElement = (node: ChildNode): node is HTMLElement =>
  node.nodeType === node.ELEMENT_NODE;

const isKeyboardInteractive = (node: ChildNode): node is HTMLElement => {
  if (!isHTMLElement(node)) {
    return false;
  }

  if (node.hasAttribute("tabindex")) {
    // anything with a tabIndex that isn't -1 can be tabbed to
    if (node.getAttribute("tabindex") !== "-1") {
      return true;
    }

    return false;
  }

  if (interactiveNodeNames.includes(node.nodeName)) {
    return true;
  }

  return false;
};

/**
 * Given a popper, iterate over its children to find all interactive elements
 *
 * This list is used to control keyboard blur. When focus lands on one of these elements,
 * it will keep the popper open. When focus leaves, it will close the popper
 */
export const extractInteractiveChildren = (
  popperRef: HTMLElement | null
): HTMLElement[] => {
  if (popperRef?.hasChildNodes()) {
    const childNodes: HTMLElement[] = [];

    popperRef.childNodes.forEach((node) => {
      if (isKeyboardInteractive(node)) {
        childNodes.push(node);
      }

      if (isHTMLElement(node)) {
        const interactiveChildren = extractInteractiveChildren(node);

        if (interactiveChildren.length) {
          childNodes.push(...interactiveChildren);
        }
      }
    });

    return childNodes;
  } else {
    return [];
  }
};
