import React, { createContext, useContext } from "react";

import { LevelsContext } from "../../LevelsContext";
import {
  PlacementType,
  PopperContextInterface,
  PopperContextProviderProps,
} from "../types";

export const placementTypes: PlacementType[] = [
  "auto",
  "top-start",
  "top",
  "top-end",
  "right-start",
  "right",
  "right-end",
  "bottom-end",
  "bottom",
  "bottom-start",
  "left-end",
  "left",
  "left-start",
];

const doNothing = (): null => null;

// this ups coverage slightly
doNothing();

export const defaultValue: PopperContextInterface = {
  onOpen: doNothing,
  onClose: doNothing,
};

export const PopperContext =
  createContext<PopperContextInterface>(defaultValue);

export const usePopperContext = (): PopperContextInterface => {
  return useContext(PopperContext);
};

export const PopperContextProvider = ({
  children,
  closeOnClickOutside = true,
  defaultPlacement = "bottom",
  distance = 10,
  ignoreCloseOnClickOutsideClassName = "bcl-popper-ignore-click",
  isIgnoreCloseOnClickOutsideEnabled = true,
  placement = "auto",
  skidding = 0,
  triggers = ["mouseenter", "focus"],
  untriggers = ["mouseleave", "blur"],
  zIndex: zIndexProp,
  ...props
}: PopperContextProviderProps): React.ReactElement => {
  const baseIndex = useContext(LevelsContext);
  const zIndex = zIndexProp === undefined ? baseIndex || 1031 : zIndexProp;

  return (
    <PopperContext.Provider
      value={{
        ...props,
        closeOnClickOutside,
        defaultPlacement,
        distance,
        ignoreCloseOnClickOutsideClassName,
        isIgnoreCloseOnClickOutsideEnabled,
        placement,
        skidding,
        triggers,
        untriggers,
        zIndex,
      }}
    >
      {children}
    </PopperContext.Provider>
  );
};
