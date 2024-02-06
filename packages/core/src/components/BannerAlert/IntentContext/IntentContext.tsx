import React, { FC, createContext } from "react";

import { Intent, IntentContextProviderProps } from "../types";

/**
 * context that handles banner intent
 */
export const IntentContext = createContext<Intent>("" as Intent);

export const IntentContextProvider: FC<IntentContextProviderProps> = ({
  intent,
  children,
}) => (
  <IntentContext.Provider value={intent}>{children}</IntentContext.Provider>
);

IntentContextProvider.displayName = "IntentContextProvider";
