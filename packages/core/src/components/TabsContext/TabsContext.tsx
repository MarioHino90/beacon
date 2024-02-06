/**
 * @fileoverview context and a context provider for tabs info
 */
import React, { createContext } from "react";
import noop from "lodash/noop";

import { TabsContextProviderProps, TabsContextInterface } from "./types";

export const TabsContext = createContext<TabsContextInterface>({
  handleChange: noop,
  handleKeyPress: noop,
});

export const TabsContextProvider = ({
  children,
  onChange,
}: TabsContextProviderProps): React.ReactElement => {
  const handleKeyPress = (
    id: string | number,
    { key, charCode }: React.KeyboardEvent
  ) => {
    // if 'Space' or 'Enter'
    if (key === " " || charCode === 13) {
      onChange(id);
    }
  };

  return (
    <TabsContext.Provider value={{ handleChange: onChange, handleKeyPress }}>
      {children}
    </TabsContext.Provider>
  );
};
