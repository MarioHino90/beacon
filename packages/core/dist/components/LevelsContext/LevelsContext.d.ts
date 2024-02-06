/**
 * @fileoverview handles providing context for zIndexing
 *
 * the LevelsContextProvider handles calculating and providing the z indices of
 * it's children, NOT the component that renders it
 *
 */
import React from "react";
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
export declare const LevelsContext: React.Context<number | undefined>;
/**
 * calculate the context for children components
 *
 * @param step the amount to "step" forward by
 * @param base the "base" z index if you are on level 1
 *
 */
export declare const useLevelsContext: (step: number, base: number) => number;
export declare const LevelsContextProvider: ({ step, base, level: levelOverride, children, }: LevelsContextProviderProps) => React.ReactElement;
