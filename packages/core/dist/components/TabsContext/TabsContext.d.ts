/**
 * @fileoverview context and a context provider for tabs info
 */
import React from "react";
import { TabsContextProviderProps, TabsContextInterface } from "./types";
export declare const TabsContext: React.Context<TabsContextInterface>;
export declare const TabsContextProvider: ({ children, onChange, }: TabsContextProviderProps) => React.ReactElement;
