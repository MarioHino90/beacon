import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import { useId } from "@braze/beacon-hooks";

import { PortalProps } from "./types";

// Note: we cannot fully test this, as it requires server-side rendering
export const canUseDOM = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

/**
 * @param id: string that will be used as the DOM id of the portal root
 * @param className: string that will be used as the DOM class name of the portal root
 * @returns a DOM node that gets mounted to the document and is the render target
 * of the React portal.
 */
export function usePortal(
  id?: string,
  className?: string
): HTMLDivElement | null {
  // we cannot fully test this, as it requires server-side rendering
  /* istanbul ignore next */
  const domNode = useRef<HTMLDivElement>(
    canUseDOM ? document.createElement("div") : null
  );

  useEffect(() => {
    // we cannot test this, as it requires server-side rendering
    /* istanbul ignore next */
    if (!canUseDOM || !domNode.current) {
      // if DOM unavailable, then bail
      return;
    }

    const currentNode = domNode.current;

    currentNode.setAttribute(
      "class",
      classNames("bcl-Portal", "bcl-portal", className)
    );

    currentNode.setAttribute("id", id || "portal--container");

    currentNode.setAttribute("tabindex", "-1");

    document.body.appendChild(currentNode);

    return () => {
      document.body.removeChild(currentNode);
    };
  }, [className, domNode, id]);

  return domNode.current;
}

/**
 * Portal is a wrapper for ReactDOM.createPortal that lets you use it in a declarative
 * fashion. This should be used as the basis for anything rendered above-stream
 * (anything that requires a z-index, like: tooltips, popovers, dialogs, menus, etc).
 */
export const Portal = ({
  children,
  className,
  id,
  node,
}: PortalProps): React.ReactElement | null => {
  // Unique global id that we assign to the DOM node
  const uid = useId("bcl-portal");
  const portalId = id || uid;
  const target = usePortal(portalId, className);

  // we cannot test this, as it requires server-side rendering
  /* istanbul ignore next */
  if (!target) {
    // if target is null, then bail
    return null;
  }

  return ReactDOM.createPortal(children, node?.current || target);
};
