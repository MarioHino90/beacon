import React, { createContext } from "react";

import {
  InputGroupContextInterface,
  InputGroupContextProviderProps,
} from "./types";

export const InputGroupContext = createContext<InputGroupContextInterface>({});

export const InputGroupContextProvider = ({
  children,
  disabled,
  fullWidth,
  invalid,
  vSize,
}: InputGroupContextProviderProps): React.ReactElement => (
  <InputGroupContext.Provider value={{ disabled, fullWidth, invalid, vSize }}>
    {children}
  </InputGroupContext.Provider>
);
