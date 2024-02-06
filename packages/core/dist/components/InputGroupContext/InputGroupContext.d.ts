import React from "react";
import { InputGroupContextInterface, InputGroupContextProviderProps } from "./types";
export declare const InputGroupContext: React.Context<InputGroupContextInterface>;
export declare const InputGroupContextProvider: ({ children, disabled, fullWidth, invalid, vSize, }: InputGroupContextProviderProps) => React.ReactElement;
