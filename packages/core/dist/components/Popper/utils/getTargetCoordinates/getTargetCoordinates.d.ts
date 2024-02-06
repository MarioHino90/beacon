import { RefObject } from "react";
import { TargetCoordinates } from "../../types";
/**
 * Get coordinates for the target element on the DOM
 * @param element an HTML element instance
 * @param portalRef ref of Portal inside which Popper will be rendered
 */
export declare const getTargetCoordinates: <P extends HTMLElement = HTMLDivElement>(element: HTMLElement, portalRef?: RefObject<P> | undefined) => TargetCoordinates;
