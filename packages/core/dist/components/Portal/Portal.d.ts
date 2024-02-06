import React from "react";
import { PortalProps } from "./types";
export declare const canUseDOM: boolean;
/**
 * @param id: string that will be used as the DOM id of the portal root
 * @param className: string that will be used as the DOM class name of the portal root
 * @returns a DOM node that gets mounted to the document and is the render target
 * of the React portal.
 */
export declare function usePortal(id?: string, className?: string): HTMLDivElement | null;
/**
 * Portal is a wrapper for ReactDOM.createPortal that lets you use it in a declarative
 * fashion. This should be used as the basis for anything rendered above-stream
 * (anything that requires a z-index, like: tooltips, popovers, dialogs, menus, etc).
 */
export declare const Portal: ({ children, className, id, node, }: PortalProps) => React.ReactElement | null;
