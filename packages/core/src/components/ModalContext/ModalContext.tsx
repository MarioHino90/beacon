import React, { createContext } from "react";

import { ModalContextInterface, ModalContextProviderProps } from "./types";

const defaultContext: ModalContextInterface = {
  size: "sm",
};

export const ModalContext =
  createContext<ModalContextInterface>(defaultContext);

export const ModalContextProvider = ({
  children,
  size,
}: ModalContextProviderProps): React.ReactElement => {
  const value = React.useMemo(
    () => ({
      size,
    }),
    [size]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
