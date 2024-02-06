import React from "react";
import { CollapsibleContextInterface, CollapsibleContextProviderProps } from "./types";
export declare const CollapsibleContext: React.Context<CollapsibleContextInterface>;
export declare const CollapsibleContextProvider: ({ children, isOpen, toggle, }: CollapsibleContextProviderProps) => React.ReactElement;
