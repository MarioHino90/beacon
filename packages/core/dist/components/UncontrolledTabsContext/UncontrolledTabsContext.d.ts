/**
 * @fileoverview context for handling the active tab + a pre-built provider
 */
import React, { ReactElement } from "react";
import { UncontrolledTabsContextProviderProps, UncontrolledTabsContextType } from "./types";
export declare const UncontrolledTabsContext: React.Context<UncontrolledTabsContextType>;
export declare const UncontrolledTabsContextProvider: ({ defaultTab, onChange, children, }: UncontrolledTabsContextProviderProps) => ReactElement;
