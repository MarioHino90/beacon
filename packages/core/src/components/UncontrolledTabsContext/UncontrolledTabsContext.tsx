/**
 * @fileoverview context for handling the active tab + a pre-built provider
 */
import React, { createContext, ReactElement } from "react";

import { useActiveTab } from "./useActiveTab";
import { onChangeDefault } from "./onChangeDefault";
import {
  UncontrolledTabsContextProviderProps,
  UncontrolledTabsContextType,
} from "./types";

export const UncontrolledTabsContext =
  createContext<UncontrolledTabsContextType>({
    activeTab: "",
    onTabChange: onChangeDefault,
  });

export const UncontrolledTabsContextProvider = ({
  defaultTab,
  onChange,
  children,
}: UncontrolledTabsContextProviderProps): ReactElement => {
  const { activeTab, onTabChange } = useActiveTab(defaultTab, onChange);

  return (
    <UncontrolledTabsContext.Provider value={{ activeTab, onTabChange }}>
      {children}
    </UncontrolledTabsContext.Provider>
  );
};
