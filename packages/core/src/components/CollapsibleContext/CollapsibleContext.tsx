import React, { createContext, useMemo } from "react";
import noop from "lodash/noop";

import {
  CollapsibleContextInterface,
  CollapsibleContextProviderProps,
} from "./types";

export const CollapsibleContext = createContext<CollapsibleContextInterface>({
  isOpen: false,
  toggle: noop,
});

export const CollapsibleContextProvider = ({
  children,
  isOpen = false,
  toggle = noop,
}: CollapsibleContextProviderProps): React.ReactElement => {
  const value = useMemo(() => ({ isOpen, toggle }), [isOpen, toggle]);

  return (
    <CollapsibleContext.Provider value={value}>
      {children}
    </CollapsibleContext.Provider>
  );
};
