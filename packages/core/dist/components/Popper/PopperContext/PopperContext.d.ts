import React from "react";
import { PlacementType, PopperContextInterface, PopperContextProviderProps } from "../types";
export declare const placementTypes: PlacementType[];
export declare const defaultValue: PopperContextInterface;
export declare const PopperContext: React.Context<PopperContextInterface<HTMLElement, HTMLDivElement>>;
export declare const usePopperContext: () => PopperContextInterface;
export declare const PopperContextProvider: ({ children, closeOnClickOutside, defaultPlacement, distance, ignoreCloseOnClickOutsideClassName, isIgnoreCloseOnClickOutsideEnabled, placement, skidding, triggers, untriggers, zIndex: zIndexProp, ...props }: PopperContextProviderProps) => React.ReactElement;
