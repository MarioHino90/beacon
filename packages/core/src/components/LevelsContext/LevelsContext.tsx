/**
 * @fileoverview handles providing context for zIndexing
 *
 * the LevelsContextProvider handles calculating and providing the z indices of
 * it's children, NOT the component that renders it
 *
 */
import React, { createContext, useContext } from "react";

export interface LevelsContextProviderProps {
  /** children to render inside the context provider */
  children?: React.ReactNode | React.ReactNode[];
  /** the amount to step forward by for the children */
  step: number;
  /** the base zIndex if there is no parent level */
  base: number;
  /** zIndex override for the level - the calculated child zIndex will be ignored */
  level?: number;
}

export const LevelsContext = createContext<number | undefined>(undefined);

/**
 * calculate the context for children components
 *
 * @param step the amount to "step" forward by
 * @param base the "base" z index if you are on level 1
 *
 */
export const useLevelsContext = (step: number, base: number): number => {
  const prevLevel = useContext(LevelsContext);

  if (!prevLevel) {
    return step + base;
  }

  return prevLevel + step;
};

export const LevelsContextProvider = ({
  step,
  base,
  level: levelOverride,
  children,
}: LevelsContextProviderProps): React.ReactElement => {
  const level = useLevelsContext(step, base);

  return (
    <LevelsContext.Provider value={levelOverride || level}>
      {children}
    </LevelsContext.Provider>
  );
};
