import React from "react";
import { ModalContextInterface, ModalContextProviderProps } from "./types";
export declare const ModalContext: React.Context<ModalContextInterface>;
export declare const ModalContextProvider: ({ children, size, }: ModalContextProviderProps) => React.ReactElement;
