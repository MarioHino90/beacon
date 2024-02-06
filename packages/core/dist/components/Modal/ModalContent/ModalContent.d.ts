import React from "react";
import { ModalContentProps } from "../types";
/**
 * Check whether some DOM node is our Component's node.
 */
export declare function isNodeFound(current: any, componentNode: HTMLDivElement | null, ignoreClass: string): boolean;
/**
 * Try to find our node in a hierarchy of nodes, returning the document
 * node as highest node if our node is not found in the path up.
 */
export declare function findHighest(current: any, componentNode: HTMLDivElement | null, ignoreClass: string): boolean | React.ReactNode;
export declare const ModalContent: React.ForwardRefExoticComponent<ModalContentProps & React.RefAttributes<HTMLDivElement>>;
